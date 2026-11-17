"""CityPlanner - Web Server Launcher.

Starts the FastAPI/uvicorn app when available, otherwise falls back to Python's
built-in multithreaded HTTP server. The browser is opened only after the server
is actually answering requests, which prevents the "blank / connection refused"
screen on slower machines.
"""
import os
import sys
import threading
import time
import webbrowser
from pathlib import Path
from urllib.request import urlopen

HOST = "127.0.0.1"
PORT = 8003
BASE_DIR = Path(__file__).resolve().parent
STATIC_DIR = BASE_DIR / "backend" / "app" / "static"
URL = f"http://localhost:{PORT}"
HEALTH_URL = f"http://{HOST}:{PORT}/api/health"


def is_server_running(timeout=0.7):
    """Return True when a CityPlanner-compatible server is already answering."""
    for url in (HEALTH_URL, f"{URL}/"):
        try:
            with urlopen(url, timeout=timeout) as response:
                if getattr(response, "status", 200) == 200:
                    return True
        except Exception:
            continue
    return False


def open_browser():
    """Open the app in the default browser unless suppressed for automation."""
    if os.environ.get("CITYPLANNER_NO_BROWSER") == "1":
        return
    try:
        webbrowser.open(URL)
    except Exception:
        pass


def open_browser_when_ready(timeout=30.0):
    """Wait until the local server responds, then open the default browser."""
    if os.environ.get("CITYPLANNER_NO_BROWSER") == "1":
        return
    deadline = time.time() + timeout
    while time.time() < deadline:
        if is_server_running(timeout=0.5):
            open_browser()
            return
        time.sleep(0.35)


def run_uvicorn():
    """Try the FastAPI application first. Returns True if it handled the run."""
    try:
        import uvicorn
        from backend.app.main import app
    except ImportError:
        return False

    print("=" * 65)
    print("  CityPlanner - Urban Planning & Architecture Studio")
    print(f"  Running on: {URL}")
    print("=" * 65)
    try:
        uvicorn.run(app, host=HOST, port=PORT, log_level="info")
        return True
    except KeyboardInterrupt:
        print("\nShutting down CityPlanner.")
        return True
    except SystemExit:
        # uvicorn calls sys.exit() on bind errors.
        if is_server_running():
            return True
        print(f"Port {PORT} is unavailable; trying the built-in server.")
        return False
    except Exception as exc:
        print(f"FastAPI/uvicorn encountered an issue: {exc}")
        return False


def run_fallback_http():
    """Zero-dependency static server. Always available with standard Python."""
    import http.server

    serve_dir = STATIC_DIR if STATIC_DIR.exists() else BASE_DIR

    class CityPlannerHandler(http.server.SimpleHTTPRequestHandler):
        def __init__(self, *args, **kwargs):
            super().__init__(*args, directory=str(serve_dir), **kwargs)

        def do_GET(self):
            # Minimal health endpoint so launchers/automation can detect us.
            if self.path.split("?")[0] == "/api/health":
                body = (
                    b'{"status":"healthy","service":"CityPlanner Fallback Server",'
                    b'"version":"1.0.0","optimized":true}'
                )
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.send_header("Content-Length", str(len(body)))
                self.end_headers()
                self.wfile.write(body)
                return
            super().do_GET()

        def log_message(self, fmt, *args):
            pass  # keep the console clean

        def end_headers(self):
            self.send_header("Cache-Control", "no-store")
            super().end_headers()

    class ReusableThreadingHTTPServer(http.server.ThreadingHTTPServer):
        allow_reuse_address = True
        daemon_threads = True

    print("=" * 65)
    print("  CityPlanner - Native Fast HTTP Server (Zero Dependency Mode)")
    print(f"  Running on: {URL}")
    print(f"  Serving: {serve_dir}")
    print("=" * 65)

    try:
        with ReusableThreadingHTTPServer((HOST, PORT), CityPlannerHandler) as httpd:
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down CityPlanner.")
    except OSError as exc:
        print(f"\nCould not start the server on port {PORT}: {exc}")
        if is_server_running():
            print("A CityPlanner server is already running. Opening it instead...")
            open_browser()
            return 0
        return 1
    return 0


def main():
    os.chdir(BASE_DIR)

    if is_server_running():
        print("=" * 65)
        print("  CityPlanner is already running.")
        print(f"  Opening: {URL}")
        print("=" * 65)
        open_browser()
        return 0

    # Open the browser in the background only after the port is live.
    threading.Thread(target=open_browser_when_ready, daemon=True).start()

    if run_uvicorn():
        return 0

    print("FastAPI not available - using the built-in zero-dependency server.")
    return run_fallback_http()


if __name__ == "__main__":
    sys.exit(main())
