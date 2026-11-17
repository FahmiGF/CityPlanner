# CityPlanner — Urban Planning & Architecture Studio

<p align="center">
  <img src="backend/app/static/cityplanner.css" alt="CityPlanner Banner" width="0" height="0">
  <b>A real-time, hardware-accelerated 2D/3D Urban Planning & Architecture CAD Studio built for web and mobile devices.</b>
</p>

---

## 🌟 Overview

**CityPlanner** is a professional-grade urban design, campus layout, and master planning platform. Designed to replicate and exceed modern urban architecture CAD interfaces, CityPlanner provides four synchronized view modes, spatial viewport culling for buttery-smooth 60 FPS performance, a 124-item asset library, and real-time site statistics.

---

## 🚀 Key Features

### 1. Synchronized Multi-View Engine
- **2D Plan Mode**: Detailed masterplan rendering with realistic road networks, roundabouts, grass parks, serpentine lakes, campus quads, stadiums, parking bays, and tree canopies.
- **3D View Mode**: Full WebGL 3D scene powered by Three.js featuring procedural architectural meshes, day/night lighting cycles, real-time shadow casting, and orbit camera controls.
- **Blueprint CAD Mode**: High-contrast technical architectural schematic with cyan/white drafting linework, dimension annotations, and structural footprint grids.
- **Walk Mode (First-Person Perspective)**: Immersive ground-level exploration using desktop `WASD` + Mouse Look or mobile touch virtual joysticks.

### 2. Live Picture-in-Picture (PiP) 3D Preview
- Draggable and expandable mini 3D viewport pinned to the bottom-left corner of the masterplan.
- Synchronized camera that follows your 2D edits and panning in real time.

### 3. Comprehensive Asset Library (124 Items across 6 Categories)
1. **Buildings (24)**: High School, University Hall, Hospital, Library, Corporate Office, Shopping Mall, Residential Apartments, Houses, Modern Skyscrapers, Dormitories, Cafeteria, Science Lab, and more.
2. **Commercial (18)**: Retail Shops, Strip Malls, Open Markets, Cinemas, Cafes, Restaurants, Gas Stations, Drive-thrus, Hotels, and Banks.
3. **Industrial (14)**: Heavy Factories, Logistics Warehouses, Power Plants, Petrochemical Tanks, Cooling Towers, Waste Water Facilities, and Solar Farms.
4. **Public Facilities (16)**: Police Stations, Fire Stations, Bus Terminals, Train Stations, Town Halls, Civic Centers, Courts, and Mosques/Churches.
5. **Parks & Recreation (20)**: Modern Stadium, Football Fields, Running Tracks, Tennis & Basketball Courts, Lakes, Botanical Gardens, Fountains, Playgrounds, and Skateparks.
6. **Infrastructure (32)**: Multi-lane Avenues, Roundabouts, Bridges, Highways, Overpasses, Parking Lots, Helipads, Guard Houses, Street Lamps, and Runway Strips.

### 4. Site Statistics & Land Use Analytics
- **Live Computations**:
  - Total Site Area ($m^2$)
  - Built-Up Footprint Area & Gross Floor Area
  - Green Space & Ecological Coverage
  - Roads & Infrastructure Network Area
  - Estimated Population Capacity & Density
- **Land Use Distribution Donut Chart**: Dynamic SVG chart tracking Built vs. Green vs. Infrastructure percentages.

### 5. Architectural Tools & Controls
- **Smart Ruler**: Click-to-measure exact metric distances between any two coordinates.
- **Grid Snap**: Configurable snap grid (1m, 5m, 10m urban block intervals).
- **Layer Visibility**: Toggle visibility for Buildings, Roads, Greenery, Water, Utilities, and Decorative assets.
- **Export / Import**: Save and load city plans as JSON, or export clean PNG screenshots.
- **Day/Night Cycle**: Instant toggle between bright sunlight and ambient night mode with glowing street lamps and building windows.

---

## ⚡ Performance Optimization & Device Compatibility

- **Viewport Culling**: Only assets within the visible screen coordinates are drawn, ensuring zero lag even with thousands of urban elements on the canvas.
- **Cross-Platform Responsive Design**:
  - **Desktop**: Full keyboard shortcuts (`WASD`, `R` to rotate, `Del` to remove, `Ctrl+Z`, `Space` to pan).
  - **Tablet & Mobile**: Native multi-touch gestures (1-finger pan/drag, 2-finger pinch zoom, on-screen floating joysticks for walk mode).
- **Dual-Mode Zero-Dependency Server**:
  - Runs out-of-the-box on standard Python with built-in `http.server`.
  - Seamlessly upgrades to `FastAPI` + `uvicorn` when installed.

---

## 💻 Quick Start

### Option A: 1-Click Launch (Windows)
Double-click:
```bat
Buka_CityPlanner.bat
```
This automatically starts the server on port `8003` and opens your default web browser.

### Option B: Terminal / Command Line
```bash
python run.py
```
Open [http://localhost:8003](http://localhost:8003) in your browser.

### Option C: Direct Offline / GitHub Pages
Simply open `index.html` directly in any modern web browser (Chrome, Edge, Firefox, Safari).

---

## 📁 Project Structure

```text
CityPlanner/
├── Buka_CityPlanner.bat            # 1-Click launcher for Windows
├── carastart.txt                   # Quick bilingual startup instructions
├── index.html                      # Standalone root entry point (offline / GH Pages)
├── requirements.txt                # Optional Python backend dependencies
├── run.py                          # Dual-mode server runner (FastAPI / Native HTTP)
├── README.md                       # Complete documentation
└── backend/
    └── app/
        ├── main.py                 # FastAPI application
        └── static/
            ├── index.html          # Server-hosted frontend HTML
            ├── cityplanner.css     # Dark architectural CAD styles & animations
            └── cityplanner.js      # Core 2D/3D engine, Three.js scenes, tools & math
```

---

## 📜 License
MIT License. Built by FahmiGF.
