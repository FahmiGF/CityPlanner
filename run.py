"""CityPlanner — Web Server Launcher.
Optimized for high performance and zero-dependency fallback on any server.
"""
import sys
import os
import webbrowser
from pathlib import Path

PORT = 8003
STATIC_DIR = Path(__file__).resolve().parent / "backend" / "app" / "static"

def run_uvicorn():
    try:
        import uvicorn
        from backend.app.main import app
        print("=" * 65)
        print("  CityPlanner — Urban Planning & Architecture Studio")
        print(f"  Running on: http://localhost:{PORT}")
        print("=" * 65)
        uvicorn.run("backend.app.main:app", host="0.0.0.0", port=PORT, reload=False, log_level="info")
        return True
    except ImportError:
        return False
    except Exception as e:
        print(f"FastAPI/Uvicorn encountered an issue: {e}")
        return False

def run_fallback_http():
    import http.server
    import socketserver
    
    # Change directory to static dir
    target_dir = STATIC_DIR if STATIC_DIR.exists() else Path(__file__).resolve().parent
    os.chdir(str(target_dir))
    
    class QuietHandler(http.server.SimpleHTTPRequestHandler):
        def log_message(self, format, *args):
            pass # Keep terminal clean and fast
            
    print("=" * 65)
    print("  CityPlanner — Native Fast HTTP Server (Zero Dependency Mode)")
    print(f"  Running on: http://localhost:{PORT}")
    print(f"  Serving: {target_dir}")
    print("=" * 65)
    
    with socketserver.TCPServer(("0.0.0.0", PORT), QuietHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")

if __name__ == "__main__":
    # Attempt to open browser automatically
    try:
        webbrowser.open(f"http://localhost:{PORT}")
    except Exception:
        pass
        
    if not run_uvicorn():
        run_fallback_http()
