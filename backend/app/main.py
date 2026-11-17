"""CityPlanner — FastAPI Backend Application.
Provides static asset serving, city plan export/import endpoints, and health check.
"""
from pathlib import Path
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, RedirectResponse
from fastapi.staticfiles import StaticFiles

STATIC_DIR = Path(__file__).resolve().parent / "static"

app = FastAPI(
    title="CityPlanner — Urban Planning & Architecture Studio",
    description="Interactive 2D/3D Masterplan, Urban Planning & Architecture Studio",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if STATIC_DIR.exists():
    app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")

@app.get("/", include_in_schema=False)
async def root():
    index_path = STATIC_DIR / "index.html"
    if index_path.exists():
        return FileResponse(index_path)
    return RedirectResponse(url="/docs")

@app.get("/api/health")
async def health():
    return {
        "status": "healthy",
        "service": "CityPlanner Urban Planning Engine",
        "version": "1.0.0",
        "optimized": True
    }
