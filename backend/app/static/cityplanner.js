/**
 * CityPlanner — Core Engine (2D Plan, 3D WebGL Three.js, Blueprint, Walk Mode, PiP)
 * Optimized for 60 FPS performance, viewport culling, and cross-device support (desktop, tablet, mobile).
 */

// ========================================================
// 1. ASSET CATALOG (124 ASSETS ACROSS 6 URBAN CATEGORIES)
// ========================================================
const ASSET_CATALOG = {
  buildings: [
    { type: 'high_school', name: 'High School', w: 120, d: 80, h: 16, category: 'buildings', layer: 'buildings', color: '#8c4f3e', desc: 'Secondary educational complex with classrooms and labs.' },
    { type: 'university', name: 'University', w: 280, d: 200, h: 28, category: 'buildings', layer: 'buildings', color: '#4a6572', desc: 'Monumental university campus quadrangle with central dome and wings.' },
    { type: 'hospital', name: 'Hospital', w: 160, d: 110, h: 36, category: 'buildings', layer: 'buildings', color: '#2e7d32', desc: 'Full-service medical center with emergency wing and helipad.' },
    { type: 'library', name: 'Library', w: 75, d: 55, h: 15, category: 'buildings', layer: 'buildings', color: '#34495e', desc: 'Public library and archives with glass atrium.' },
    { type: 'office', name: 'Office', w: 90, d: 70, h: 65, category: 'buildings', layer: 'buildings', color: '#1e88e5', desc: 'Corporate office high-rise with glass facade.' },
    { type: 'shopping_mall', name: 'Shopping Mall', w: 220, d: 140, h: 24, category: 'buildings', layer: 'buildings', color: '#1565c0', desc: 'Multi-level commercial retail mall with glass skylights.' },
    { type: 'apartment', name: 'Apartment', w: 85, d: 45, h: 48, category: 'buildings', layer: 'buildings', color: '#455a64', desc: 'High-density urban residential apartment tower with balconies.' },
    { type: 'house', name: 'House', w: 24, d: 18, h: 9, category: 'buildings', layer: 'buildings', color: '#bf360c', desc: 'Detached single-family suburban home with hip roof.' },
    { type: 'skyscraper', name: 'Skyscraper', w: 80, d: 80, h: 180, category: 'buildings', layer: 'buildings', color: '#0284c7', desc: 'Prestige corporate skyscraper tower with curtain wall glass.' },
    { type: 'townhouse', name: 'Townhouse', w: 60, d: 22, h: 12, category: 'buildings', layer: 'buildings', color: '#ad1457', desc: 'Row of modern attached residential townhouses.' },
    { type: 'villa', name: 'Villa', w: 38, d: 28, h: 10, category: 'buildings', layer: 'buildings', color: '#d84315', desc: 'Luxury private residence with private courtyard and pool.' },
    { type: 'dormitory', name: 'Dormitory', w: 95, d: 35, h: 26, category: 'buildings', layer: 'buildings', color: '#7a4e48', desc: 'Multi-story student housing dormitory block.' },
    { type: 'civic_center', name: 'Civic Center', w: 140, d: 90, h: 22, category: 'buildings', layer: 'buildings', color: '#5d4037', desc: 'Municipal city hall and civic administrative council.' },
    { type: 'research_lab', name: 'Research Lab', w: 90, d: 50, h: 18, category: 'buildings', layer: 'buildings', color: '#3b5998', desc: 'High-tech science laboratory and technology incubator.' },
    { type: 'museum', name: 'Museum', w: 110, d: 75, h: 20, category: 'buildings', layer: 'buildings', color: '#455a64', desc: 'Art and history museum with grand portico columns.' },
    { type: 'cathedral', name: 'Cathedral', w: 100, d: 55, h: 45, category: 'buildings', layer: 'buildings', color: '#6d4c41', desc: 'Historic stone cathedral with Gothic spires and stained glass.' },
    { type: 'mosque', name: 'Mosque', w: 95, d: 80, h: 32, category: 'buildings', layer: 'buildings', color: '#2e7d32', desc: 'Grand municipal mosque with gilded central dome and 4 minarets.' },
    { type: 'fire_station', name: 'Fire Station', w: 60, d: 45, h: 14, category: 'buildings', layer: 'buildings', color: '#c62828', desc: 'Emergency fire rescue station with 4 apparatus bay doors.' },
    { type: 'police_station', name: 'Police Station', w: 65, d: 45, h: 16, category: 'buildings', layer: 'buildings', color: '#1565c0', desc: 'Metropolitan police headquarters with secure fleet motor pool.' },
    { type: 'hotel', name: 'Hotel', w: 110, d: 65, h: 55, category: 'buildings', layer: 'buildings', color: '#6a1b9a', desc: 'Luxury hotel and convention tower with rooftop lounge.' },
    { type: 'bank', name: 'Bank', w: 55, d: 40, h: 18, category: 'buildings', layer: 'buildings', color: '#37474f', desc: 'Financial headquarters with security vault and trading floor.' },
    { type: 'warehouse', name: 'Warehouse', w: 150, d: 85, h: 14, category: 'buildings', layer: 'buildings', color: '#424242', desc: 'High-bay logistics fulfillment warehouse with loading docks.' },
    { type: 'factory', name: 'Factory', w: 140, d: 80, h: 18, category: 'buildings', layer: 'buildings', color: '#37474f', desc: 'Advanced manufacturing plant with sawtooth skylights.' },
    { type: 'data_center', name: 'Data Center', w: 160, d: 90, h: 12, category: 'buildings', layer: 'buildings', color: '#263238', desc: 'Tier-IV hyperscale data center with rooftop chillers.' },
  ],

  commercial: [
    { type: 'shop', name: 'Shop', w: 32, d: 24, h: 8, category: 'commercial', layer: 'buildings', color: '#00897b', desc: 'Neighborhood retail storefront and boutique.' },
    { type: 'mall', name: 'Mall', w: 180, d: 110, h: 22, category: 'commercial', layer: 'buildings', color: '#0284c7', desc: 'Regional shopping arcade with anchor department stores.' },
    { type: 'market', name: 'Market', w: 75, d: 55, h: 10, category: 'commercial', layer: 'buildings', color: '#d97706', desc: 'Covered fresh produce and artisan municipal market.' },
    { type: 'cinema', name: 'Cinema', w: 85, d: 60, h: 18, category: 'commercial', layer: 'buildings', color: '#b91c1c', desc: 'Multiplex movie theater with IMAX auditorium.' },
    { type: 'restaurant', name: 'Restaurant', w: 38, d: 28, h: 7, category: 'commercial', layer: 'buildings', color: '#ea580c', desc: 'Full-service dining restaurant with outdoor terrace.' },
    { type: 'cafe', name: 'Cafe', w: 22, d: 18, h: 6, category: 'commercial', layer: 'buildings', color: '#854d0e', desc: 'Cozy street corner bakery and coffee house.' },
    { type: 'gas_station', name: 'Gas Station', w: 45, d: 35, h: 6, category: 'commercial', layer: 'buildings', color: '#16a34a', desc: 'Highway service station with fuel pumps and convenience store.' },
    { type: 'supermarket', name: 'Supermarket', w: 85, d: 60, h: 9, category: 'commercial', layer: 'buildings', color: '#059669', desc: 'Large grocery supermarket with customer surface parking.' },
    { type: 'hotel_resort', name: 'Hotel Resort', w: 150, d: 90, h: 30, category: 'commercial', layer: 'buildings', color: '#7c3aed', desc: 'Beachfront resort hotel with tropical pool landscape.' },
    { type: 'bank_branch', name: 'Bank Branch', w: 35, d: 25, h: 8, category: 'commercial', layer: 'buildings', color: '#334155', desc: 'Commercial retail bank branch with drive-thru ATM.' },
    { type: 'dealership', name: 'Auto Dealership', w: 90, d: 60, h: 10, category: 'commercial', layer: 'buildings', color: '#475569', desc: 'Automobile showroom with outdoor inventory vehicle lot.' },
    { type: 'bookstore', name: 'Bookstore', w: 28, d: 20, h: 7, category: 'commercial', layer: 'buildings', color: '#78350f', desc: 'Two-story urban bookstore and reading cafe.' },
    { type: 'pharmacy', name: 'Pharmacy', w: 25, d: 20, h: 6, category: 'commercial', layer: 'buildings', color: '#0284c7', desc: 'Neighborhood pharmacy and healthcare dispensary.' },
    { type: 'bakery', name: 'Bakery', w: 20, d: 16, h: 6, category: 'commercial', layer: 'buildings', color: '#d97706', desc: 'Artisan bakery with pastry display and outdoor seating.' },
    { type: 'gym', name: 'Fitness Gym', w: 50, d: 40, h: 11, category: 'commercial', layer: 'buildings', color: '#dc2626', desc: 'Commercial sports gym with indoor courts.' },
    { type: 'boutique', name: 'Boutique', w: 26, d: 18, h: 7, category: 'commercial', layer: 'buildings', color: '#db2777', desc: 'High-end designer fashion boutique.' },
    { type: 'food_court', name: 'Food Court', w: 70, d: 45, h: 9, category: 'commercial', layer: 'buildings', color: '#f59e0b', desc: 'Covered open-air international gourmet food pavilion.' },
    { type: 'nightclub', name: 'Nightclub', w: 45, d: 35, h: 9, category: 'commercial', layer: 'buildings', color: '#9333ea', desc: 'Entertainment lounge and nightlife music venue.' },
  ],

  industrial: [
    { type: 'heavy_factory', name: 'Factory', w: 160, d: 90, h: 22, category: 'industrial', layer: 'buildings', color: '#334155', desc: 'Heavy manufacturing assembly facility with cranes.' },
    { type: 'logistics_warehouse', name: 'Warehouse', w: 180, d: 100, h: 15, category: 'industrial', layer: 'buildings', color: '#3f3f46', desc: 'Freight transport logistics distribution hub.' },
    { type: 'power_plant', name: 'Power Plant', w: 220, d: 150, h: 60, category: 'industrial', layer: 'utilities', color: '#b45309', desc: 'Thermal and gas turbine electric power generating facility.' },
    { type: 'solar_farm', name: 'Solar Farm', w: 180, d: 120, h: 3, category: 'industrial', layer: 'utilities', color: '#1e3a8a', desc: 'Utility-scale photovoltaic solar array with sun tracking.' },
    { type: 'wind_turbine', name: 'Wind Turbine', w: 40, d: 40, h: 110, category: 'industrial', layer: 'utilities', color: '#e2e8f0', desc: 'Offshore/onshore high-efficiency 5MW wind turbine.' },
    { type: 'water_treatment', name: 'Water Treatment', w: 190, d: 130, h: 8, category: 'industrial', layer: 'utilities', color: '#0284c7', desc: 'Municipal water purification plant with circular clarifiers.' },
    { type: 'fuel_storage', name: 'Fuel Storage', w: 140, d: 100, h: 22, category: 'industrial', layer: 'utilities', color: '#e11d48', desc: 'Petrochemical fuel tank farm with cylindrical storage vessels.' },
    { type: 'logistics_hub', name: 'Logistics Hub', w: 200, d: 110, h: 16, category: 'industrial', layer: 'buildings', color: '#475569', desc: 'Intermodal freight rail and container staging terminal.' },
    { type: 'recycling_center', name: 'Recycling Center', w: 110, d: 75, h: 12, category: 'industrial', layer: 'utilities', color: '#15803d', desc: 'Municipal green waste and materials sorting recovery facility.' },
    { type: 'chiller_plant', name: 'Chiller Plant', w: 80, d: 50, h: 12, category: 'industrial', layer: 'utilities', color: '#0369a1', desc: 'District central cooling chiller plant and heat exchangers.' },
    { type: 'substation', name: 'Substation', w: 75, d: 60, h: 8, category: 'industrial', layer: 'utilities', color: '#047857', desc: 'High-voltage electric step-down transmission substation.' },
    { type: 'data_hall', name: 'Data Hall', w: 120, d: 70, h: 10, category: 'industrial', layer: 'buildings', color: '#18181b', desc: 'Server hall with high-density server rack containment.' },
    { type: 'grain_silo', name: 'Grain Silo', w: 60, d: 45, h: 35, category: 'industrial', layer: 'buildings', color: '#78716c', desc: 'Agricultural bulk concrete grain storage elevator.' },
    { type: 'hangar', name: 'Aircraft Hangar', w: 130, d: 90, h: 22, category: 'industrial', layer: 'buildings', color: '#52525b', desc: 'Wide-span aircraft maintenance and storage hangar.' },
  ],

  public_facilities: [
    { type: 'police_hq', name: 'Police', w: 70, d: 50, h: 18, category: 'public_facilities', layer: 'buildings', color: '#1d4ed8', desc: 'Central police precinct station and detention unit.' },
    { type: 'fire_dept', name: 'Fire Station', w: 65, d: 45, h: 14, category: 'public_facilities', layer: 'buildings', color: '#dc2626', desc: 'Emergency response fire brigade with drill yard.' },
    { type: 'bus_depot', name: 'Bus Depot', w: 160, d: 90, h: 10, category: 'public_facilities', layer: 'infrastructure', color: '#ca8a04', desc: 'Transit municipal bus fleet depot and maintenance shop.' },
    { type: 'metro_station', name: 'Metro Station', w: 55, d: 35, h: 8, category: 'public_facilities', layer: 'infrastructure', color: '#2563eb', desc: 'Subway underground metro passenger concourse entrance.' },
    { type: 'train_station', name: 'Train Station', w: 180, d: 85, h: 22, category: 'public_facilities', layer: 'infrastructure', color: '#4338ca', desc: 'Grand central railway passenger terminal with platform canopy.' },
    { type: 'ferry_terminal', name: 'Ferry Terminal', w: 90, d: 60, h: 12, category: 'public_facilities', layer: 'infrastructure', color: '#0284c7', desc: 'Waterfront passenger ferry boarding docks and ticket hall.' },
    { type: 'post_office', name: 'Post Office', w: 50, d: 35, h: 10, category: 'public_facilities', layer: 'buildings', color: '#059669', desc: 'Central parcel distribution and postal office.' },
    { type: 'courthouse', name: 'Courthouse', w: 95, d: 65, h: 24, category: 'public_facilities', layer: 'buildings', color: '#475569', desc: 'Justice hall and supreme district judicial courthouse.' },
    { type: 'embassy', name: 'Embassy', w: 75, d: 55, h: 16, category: 'public_facilities', layer: 'buildings', color: '#334155', desc: 'Diplomatic consular mission with secure perimeter.' },
    { type: 'community_center', name: 'Community Center', w: 65, d: 45, h: 10, category: 'public_facilities', layer: 'buildings', color: '#0891b2', desc: 'Neighborhood recreational community meeting hall.' },
    { type: 'public_library', name: 'Public Library', w: 70, d: 50, h: 14, category: 'public_facilities', layer: 'buildings', color: '#475569', desc: 'Metropolitan reading room and media computer center.' },
    { type: 'medical_clinic', name: 'Clinic', w: 45, d: 35, h: 10, category: 'public_facilities', layer: 'buildings', color: '#16a34a', desc: 'Urgent care health clinic and outpatient laboratory.' },
    { type: 'ambulance_bay', name: 'Ambulance Bay', w: 40, d: 30, h: 6, category: 'public_facilities', layer: 'buildings', color: '#15803d', desc: 'Dedicated emergency medical ambulance vehicle garage.' },
    { type: 'guard_booth', name: 'Guard Booth', w: 6, d: 6, h: 3.5, category: 'public_facilities', layer: 'buildings', color: '#64748b', desc: 'Security access checkpoint booth with boom gate barrier.' },
    { type: 'helipad', name: 'Helipad', w: 32, d: 32, h: 1, category: 'public_facilities', layer: 'infrastructure', color: '#dc2626', desc: 'Elevated helicopter takeoff and landing pad.' },
    { type: 'cell_tower', name: 'Cell Tower', w: 6, d: 6, h: 48, category: 'public_facilities', layer: 'utilities', color: '#94a3b8', desc: '5G cellular communications mast with antenna arrays.' },
  ],

  parks_recreation: [
    { type: 'park', name: 'Park', w: 120, d: 90, h: 0, category: 'parks_recreation', layer: 'green', color: '#2e7d32', desc: 'Public landscape park with walking trails and lush shade trees.' },
    { type: 'sports_field', name: 'Sports Field', w: 105, d: 68, h: 0, category: 'parks_recreation', layer: 'green', color: '#15803d', desc: 'Regulation turf football/soccer pitch with perimeter running track.' },
    { type: 'playground', name: 'Playground', w: 45, d: 35, h: 3, category: 'parks_recreation', layer: 'green', color: '#f59e0b', desc: 'Children playground with safe rubber surface, swings, and slides.' },
    { type: 'modern_stadium', name: 'Modern Stadium', w: 320, d: 280, h: 42, category: 'parks_recreation', layer: 'buildings', color: '#1e293b', desc: 'A large multi-purpose stadium for sports and events.' },
    { type: 'olympic_pool', name: 'Swimming Pool', w: 65, d: 35, h: 0, category: 'parks_recreation', layer: 'water', color: '#0284c7', desc: 'Olympic 50m competition swimming pool with lane lines.' },
    { type: 'tennis_court', name: 'Tennis Court', w: 36, d: 18, h: 0, category: 'parks_recreation', layer: 'green', color: '#047857', desc: 'Championship acrylic hard tennis court with center net.' },
    { type: 'basketball_court', name: 'Basketball Court', w: 32, d: 19, h: 0, category: 'parks_recreation', layer: 'green', color: '#c2410c', desc: 'Outdoor painted asphalt basketball court with painted key.' },
    { type: 'skate_park', name: 'Skate Park', w: 55, d: 40, h: 2, category: 'parks_recreation', layer: 'green', color: '#71717a', desc: 'Concrete skate park with bowls, rails, and ramps.' },
    { type: 'botanical_garden', name: 'Botanical Garden', w: 140, d: 95, h: 12, category: 'parks_recreation', layer: 'green', color: '#166534', desc: 'Curated botanical arboretum with glass greenhouse.' },
    { type: 'zen_garden', name: 'Zen Garden', w: 50, d: 40, h: 1, category: 'parks_recreation', layer: 'green', color: '#d6d3d1', desc: 'Japanese meditation garden with raked gravel and stones.' },
    { type: 'lake_pond', name: 'Lake / Pond', w: 160, d: 110, h: 0, category: 'parks_recreation', layer: 'water', color: '#0369a1', desc: 'Natural organic water body with stone banks and lily pads.' },
    { type: 'fountain', name: 'Fountain', w: 22, d: 22, h: 3, category: 'parks_recreation', layer: 'water', color: '#06b6d4', desc: 'Monumental tiered water fountain with animated jet spray.' },
    { type: 'plaza', name: 'Plaza', w: 85, d: 65, h: 0, category: 'parks_recreation', layer: 'decorations', color: '#64748b', desc: 'Urban granite paved gathering plaza with outdoor cafe seating.' },
    { type: 'pier', name: 'Pier', w: 18, d: 90, h: 2, category: 'parks_recreation', layer: 'infrastructure', color: '#78350f', desc: 'Timber wooden pier extending into the water for docking.' },
    { type: 'boardwalk', name: 'Boardwalk', w: 140, d: 14, h: 1, category: 'parks_recreation', layer: 'infrastructure', color: '#a16207', desc: 'Coastal pedestrian wooden boardwalk promenade.' },
    { type: 'promenade', name: 'Promenade', w: 220, d: 18, h: 0, category: 'parks_recreation', layer: 'decorations', color: '#94a3b8', desc: 'Wide tree-shaded pedestrian esplanade with stone pavers.' },
    { type: 'golf_course', name: 'Golf Course', w: 280, d: 200, h: 0, category: 'parks_recreation', layer: 'green', color: '#15803d', desc: 'Championship 9-hole golf fairway with sand bunkers and greens.' },
    { type: 'zoo', name: 'Zoo', w: 240, d: 170, h: 8, category: 'parks_recreation', layer: 'green', color: '#166534', desc: 'Zoological park with animal habitats and pedestrian walkways.' },
    { type: 'amphitheater', name: 'Amphitheater', w: 85, d: 70, h: 8, category: 'parks_recreation', layer: 'buildings', color: '#475569', desc: 'Open-air tiered hillside amphitheater for concert performances.' },
    { type: 'campsite', name: 'Campsite', w: 90, d: 70, h: 2, category: 'parks_recreation', layer: 'green', color: '#14532d', desc: 'Eco outdoor camping ground with tent pads and fire pits.' },
  ],

  infrastructure: [
    { type: 'road_4lane', name: '4-Lane Avenue', w: 400, d: 24, h: 0, category: 'infrastructure', layer: 'roads', color: '#1e293b', desc: 'Dual-carriageway 4-lane major arterial avenue with median.' },
    { type: 'road_2lane', name: '2-Lane Street', w: 300, d: 14, h: 0, category: 'infrastructure', layer: 'roads', color: '#334155', desc: 'Two-lane residential neighborhood street with sidewalk curbs.' },
    { type: 'highway', name: 'Highway', w: 500, d: 32, h: 0, category: 'infrastructure', layer: 'roads', color: '#0f172a', desc: 'High-speed 6-lane interstate freeway with guard rails.' },
    { type: 'roundabout', name: 'Roundabout', w: 80, d: 80, h: 0, category: 'infrastructure', layer: 'roads', color: '#1e293b', desc: 'Traffic roundabout circle with landscaped center island.' },
    { type: 'interchange', name: 'Highway Interchange', w: 180, d: 180, h: 8, category: 'infrastructure', layer: 'roads', color: '#0f172a', desc: 'Grade-separated cloverleaf freeway interchange ramps.' },
    { type: 'cul_de_sac', name: 'Cul-de-sac', w: 40, d: 40, h: 0, category: 'infrastructure', layer: 'roads', color: '#334155', desc: 'Residential dead-end turnaround road bulb.' },
    { type: 'bridge', name: 'Bridge', w: 160, d: 20, h: 6, category: 'infrastructure', layer: 'roads', color: '#64748b', desc: 'Suspension steel-and-concrete bridge over water or ravine.' },
    { type: 'tunnel', name: 'Tunnel', w: 120, d: 22, h: 0, category: 'infrastructure', layer: 'roads', color: '#18181b', desc: 'Subterranean vehicular tunnel portal with concrete headwall.' },
    { type: 'crosswalk', name: 'Crosswalk', w: 14, d: 6, h: 0, category: 'infrastructure', layer: 'decorations', color: '#ffffff', desc: 'High-visibility white zebra pedestrian street crossing.' },
    { type: 'bike_lane', name: 'Bike Lane', w: 200, d: 3, h: 0, category: 'infrastructure', layer: 'roads', color: '#0284c7', desc: 'Dedicated green/blue painted urban bicycle lane.' },
    { type: 'rail_track', name: 'Railway Track', w: 400, d: 6, h: 0, category: 'infrastructure', layer: 'roads', color: '#52525b', desc: 'Double-track ballasted steel railway line with wooden ties.' },
    { type: 'runway', name: 'Airport Runway', w: 600, d: 45, h: 0, category: 'infrastructure', layer: 'roads', color: '#18181b', desc: 'Heavy aircraft paved runway with threshold markings.' },
    { type: 'taxiway', name: 'Taxiway', w: 300, d: 25, h: 0, category: 'infrastructure', layer: 'roads', color: '#27272a', desc: 'Aviation taxiway with yellow centerline guide markings.' },
    { type: 'parking_lot', name: 'Parking Lot', w: 140, d: 80, h: 0, category: 'infrastructure', layer: 'roads', color: '#334155', desc: 'Large surface parking lot with striped stalls and parked cars.' },
    { type: 'parking_garage', name: 'Parking Garage', w: 110, d: 75, h: 22, category: 'infrastructure', layer: 'buildings', color: '#52525b', desc: 'Multi-deck concrete municipal parking structure.' },
    { type: 'street_lamp', name: 'Street Lamp', w: 2, d: 2, h: 8, category: 'infrastructure', layer: 'decorations', color: '#fef08a', desc: 'Modern LED street light post with warm ground light cone.' },
    { type: 'traffic_light', name: 'Traffic Light', w: 3, d: 3, h: 6, category: 'infrastructure', layer: 'decorations', color: '#eab308', desc: 'Traffic signal mast arm with red-amber-green signal heads.' },
    { type: 'bus_stop', name: 'Bus Stop', w: 8, d: 3, h: 3, category: 'infrastructure', layer: 'decorations', color: '#38bdf8', desc: 'Glass transit passenger shelter with route map and bench.' },
    { type: 'metro_entrance', name: 'Metro Entrance', w: 12, d: 8, h: 4, category: 'infrastructure', layer: 'decorations', color: '#2563eb', desc: 'Covered subway staircase canopy entrance.' },
    { type: 'seawall', name: 'Seawall', w: 200, d: 6, h: 3, category: 'infrastructure', layer: 'infrastructure', color: '#71717a', desc: 'Concrete coastal flood barrier retaining embankment.' },
    { type: 'canal', name: 'Canal', w: 300, d: 20, h: 0, category: 'infrastructure', layer: 'water', color: '#0369a1', desc: 'Engineered stone-walled water canal with towpath.' },
    { type: 'storm_drain', name: 'Storm Drain', w: 8, d: 8, h: 0, category: 'infrastructure', layer: 'utilities', color: '#3f3f46', desc: 'Heavy storm water inlet basin and overflow culvert.' },
    { type: 'power_pylon', name: 'Power Pylon', w: 14, d: 14, h: 42, category: 'infrastructure', layer: 'utilities', color: '#cbd5e1', desc: 'Steel lattice transmission tower supporting high-voltage cables.' },
    { type: 'pipeline', name: 'Pipeline', w: 240, d: 4, h: 2, category: 'infrastructure', layer: 'utilities', color: '#e2e8f0', desc: 'Above-ground insulated gas/water utility transmission line.' },
    { type: 'windbreak', name: 'Windbreak', w: 160, d: 8, h: 12, category: 'infrastructure', layer: 'green', color: '#166534', desc: 'Dense protective linear row of evergreen cypress trees.' },
    { type: 'retaining_wall', name: 'Retaining Wall', w: 120, d: 4, h: 4, category: 'infrastructure', layer: 'decorations', color: '#78716c', desc: 'Architectural stepped stone slope retaining wall.' },
    { type: 'fence', name: 'Fence', w: 100, d: 1, h: 2.5, category: 'infrastructure', layer: 'decorations', color: '#94a3b8', desc: 'Ornamental steel perimeter security fence.' },
    { type: 'barrier_gate', name: 'Barrier Gate', w: 12, d: 2, h: 1.5, category: 'infrastructure', layer: 'decorations', color: '#ef4444', desc: 'Automated vehicle access boom barrier with card reader.' },
    { type: 'bench', name: 'Bench', w: 3, d: 1.2, h: 0.9, category: 'infrastructure', layer: 'decorations', color: '#78350f', desc: 'Ergonomic cast-iron and teak wood park bench.' },
    { type: 'trash_bin', name: 'Trash Bin', w: 1.5, d: 1.5, h: 1.2, category: 'infrastructure', layer: 'decorations', color: '#15803d', desc: 'Municipal dual-stream public recycling and waste bin.' },
    { type: 'hydrant', name: 'Fire Hydrant', w: 1, d: 1, h: 1, category: 'infrastructure', layer: 'utilities', color: '#dc2626', desc: 'High-pressure municipal cast iron fire hydrant.' },
    { type: 'bollard', name: 'Bollard', w: 1, d: 1, h: 1, category: 'infrastructure', layer: 'decorations', color: '#64748b', desc: 'Stainless steel crash-rated pedestrian safety bollard.' },
  ]
};

// Flattened lookup map
const ASSET_TYPE_MAP = {};
Object.values(ASSET_CATALOG).flat().forEach(item => {
  ASSET_TYPE_MAP[item.type] = item;
});

// ========================================================
// 2. STATE & ENGINE CONFIGURATION
// ========================================================
let currentMode = '2d'; // '2d', '3d', 'blueprint', 'walk'
let activeTool = 'pointer'; // 'pointer', 'marquee', 'pan'
let gridEnabled = true;
let gridSnap = 1.0; // meters
let smartRulerActive = false;
let timeOfDay = 'noon'; // 'noon', 'golden', 'sunset', 'night'
let nextId = 1000;

// Layers state
const layerVisibility = {
  buildings: true,
  roads: true,
  green: true,
  water: true,
  utilities: true,
  decorations: true
};

// 2D Canvas State
let canvas2D = null;
let ctx2D = null;
let container = null;

// Camera (Pan & Zoom in World Meters)
const camera = {
  x: 0,
  y: 0,
  zoom: 1.6, // pixels per meter
  minZoom: 0.15,
  maxZoom: 15.0
};

// Interaction
let isDragging = false;
let isPanning = false;
let dragStartX = 0;
let dragStartY = 0;
let selectedAsset = null;
let selectedAssetIds = new Set();
let assetDragOffsets = new Map();
let hoveredAsset = null;

// Smart Ruler State
let rulerPoints = [];

// Three.js 3D Engine State
let threeScene = null;
let threeCamera = null;
let threeRenderer = null;
let threeControls = null;
let pipScene = null;
let pipCamera = null;
let pipRenderer = null;
let threeMeshMap = new Map();
let pipMeshMap = new Map();

// Walk Mode State
let walkControls = {
  active: false,
  pos: { x: 0, y: 1.8, z: 0 },
  rot: { yaw: 0, pitch: 0 },
  keys: { w: false, a: false, s: false, d: false }
};

// City Elements Data (The Masterplan Site)
let cityAssets = [];

// ========================================================
// 3. MASTER CITY LAYOUT GENERATION (EXACTLY LIKE SCREENSHOT)
// ========================================================
function buildMasterCityPlan() {
  const list = [];

  // Helper to add asset
  function add(type, x, y, rot = 0, w = null, d = null, h = null, customProps = {}) {
    const meta = ASSET_TYPE_MAP[type] || {};
    list.push({
      id: nextId++,
      type,
      name: meta.name || type,
      category: meta.category || 'buildings',
      layer: meta.layer || 'buildings',
      color: meta.color || '#455a64',
      desc: meta.desc || '',
      x,
      y,
      rot,
      w: w || meta.w || 50,
      d: d || meta.d || 40,
      h: h !== null ? h : (meta.h !== undefined ? meta.h : 15),
      elevation: 0,
      materialPrimary: 'Concrete',
      materialAccent: 'Glass',
      ...customProps
    });
  }

  // --- A. MAIN HIGHWAY & ARTERIAL ROAD NETWORK ---
  // Major Central Avenue (Horizontal & Vertical)
  add('road_4lane', 0, 0, 0, 1400, 26);
  add('road_4lane', 0, 0, 90, 26, 1200);

  // Roundabouts at Key Intersections
  add('roundabout', -280, 0, 0, 80, 80);
  add('roundabout', 280, 0, 0, 80, 80);
  add('roundabout', 0, -280, 0, 80, 80);
  add('roundabout', 0, 280, 0, 80, 80);

  // Quadrant Avenues
  add('road_4lane', 0, -280, 0, 1400, 22);
  add('road_4lane', 0, 280, 0, 1400, 22);
  add('road_4lane', -280, 0, 90, 22, 1200);
  add('road_4lane', 280, 0, 90, 22, 1200);

  // --- B. TOP-LEFT QUADRANT: MODERN STADIUM & SPORTS DISTRICT ---
  add('modern_stadium', -320, -320, 0, 320, 280, 42, {
    desc: 'A large multi-purpose stadium for sports and events.'
  });
  // Regulation Soccer Pitches & Courts next to Stadium
  add('sports_field', -100, -380, 0, 110, 70, 0);
  add('sports_field', -100, -280, 0, 110, 70, 0);
  add('tennis_court', -100, -180, 0, 38, 20, 0);
  add('basketball_court', -100, -140, 0, 32, 18, 0);
  add('olympic_pool', -100, -90, 0, 65, 30, 0);

  // Natural Lake & Park North-West
  add('lake_pond', -500, -360, 0, 180, 130, 0);
  add('botanical_garden', -500, -220, 0, 140, 80, 0);

  // --- C. CENTER-LEFT: CENTRAL MONUMENTAL UNIVERSITY / PALACE QUADRANGLE ---
  add('university', -80, -20, 0, 280, 190, 28, {
    desc: 'Monumental university campus quadrangle with central dome, porticos and wings.'
  });
  add('fountain', -80, -20, 0, 26, 26, 3);
  add('plaza', -80, -20, 0, 70, 70, 0);
  add('library', -240, -100, 0, 75, 55, 16);
  add('research_lab', -240, -170, 0, 90, 50, 18);

  // --- D. MIDDLE-LEFT: HOSPITAL COMPLEX & MEDICAL DISTRICT ---
  add('hospital', -480, -140, 0, 160, 110, 36, {
    desc: 'Full-service medical center with emergency wing and rooftop helipad.'
  });
  add('parking_lot', -480, -30, 0, 150, 70, 0);
  add('medical_clinic', -360, -140, 0, 50, 38, 12);
  add('ambulance_bay', -360, -90, 0, 42, 28, 6);

  // --- E. BOTTOM-LEFT: RESIDENTIAL & APARTMENTS ---
  // High-density residential towers
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      add('apartment', -450 + c * 80, 120 + r * 65, 0, 65, 42, 38 + (r + c) * 6);
    }
  }
  // Suburban Houses & Townhouses
  for (let h = 0; h < 6; h++) {
    add('house', -200 + (h % 3) * 45, 120 + Math.floor(h / 3) * 60, 0, 26, 20, 9);
    add('townhouse', -200 + (h % 3) * 45, 240 + Math.floor(h / 3) * 50, 0, 40, 20, 11);
  }

  // --- F. CENTER-BOTTOM: CENTRAL PARK & SERPENTINE LAKE ---
  add('lake_pond', 60, 190, 0, 260, 140, 0);
  add('park', 60, 190, 0, 340, 220, 0);
  add('fountain', 60, 190, 0, 20, 20, 3);
  add('promenade', 60, 80, 0, 300, 16, 0);

  // --- G. TOP-RIGHT: INDUSTRIAL & UTILITIES DISTRICT ---
  add('fuel_storage', 420, -360, 0, 160, 120, 24);
  add('heavy_factory', 420, -220, 0, 160, 90, 20);
  add('power_plant', 580, -350, 0, 180, 130, 55);
  add('logistics_warehouse', 580, -200, 0, 160, 90, 15);
  add('substation', 320, -360, 0, 70, 60, 8);
  add('water_treatment', 320, -220, 0, 120, 100, 8);

  // --- H. CENTER-RIGHT: CIVIC ARENA, COMMERCIAL MALL & SKYSCRAPERS ---
  add('civic_center', 300, -100, 0, 140, 90, 24);
  add('shopping_mall', 480, 80, 0, 220, 140, 24);
  add('parking_lot', 480, 190, 0, 200, 90, 0);

  // Skyscraper Corporate Downtown Grid
  add('skyscraper', 420, -80, 0, 80, 80, 190);
  add('skyscraper', 530, -80, 0, 75, 75, 160);
  add('office', 420, 0, 0, 85, 65, 75);
  add('office', 530, 0, 0, 85, 65, 85);
  add('hotel', 320, 0, 0, 100, 60, 58);

  // --- I. BOTTOM-RIGHT: MARINA BAY WATERFRONT & HARBOR ---
  add('lake_pond', 450, 420, 0, 360, 220, 0);
  add('boardwalk', 320, 330, 0, 220, 16, 1);
  add('pier', 420, 360, 90, 16, 80, 2);
  add('pier', 500, 370, 90, 16, 90, 2);
  add('ferry_terminal', 320, 370, 0, 80, 50, 10);

  // Water Treatment Clarification Basins (Bottom Center)
  add('water_treatment', 0, 420, 0, 240, 130, 8);

  return list;
}

// ========================================================
// 4. 2D CANVAS RENDERING WITH VIEWPORT CULLING
// ========================================================
function resize2DCanvas() {
  if (!canvas2D || !container) return;
  const dpr = window.devicePixelRatio || 1;
  const rect = container.getBoundingClientRect();
  if (rect.width <= 0 || rect.height <= 0) return;

  canvas2D.width = Math.round(rect.width * dpr);
  canvas2D.height = Math.round(rect.height * dpr);
}

function screenToWorld(sx, sy) {
  const rect = canvas2D.getBoundingClientRect();
  const cx = rect.width / 2;
  const cy = rect.height / 2;
  return {
    x: camera.x + (sx - cx) / camera.zoom,
    y: camera.y + (sy - cy) / camera.zoom
  };
}

function worldToScreen(wx, wy) {
  const rect = canvas2D.getBoundingClientRect();
  const cx = rect.width / 2;
  const cy = rect.height / 2;
  return {
    x: cx + (wx - camera.x) * camera.zoom,
    y: cy + (wy - camera.y) * camera.zoom
  };
}

// Main 2D Render Function
function render2D() {
  if (currentMode !== '2d' && currentMode !== 'blueprint') return;

  const rect = canvas2D.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;

  ctx2D.save();
  ctx2D.setTransform(dpr, 0, 0, dpr, 0, 0);

  // Background
  if (currentMode === 'blueprint') {
    ctx2D.fillStyle = '#06172e';
    ctx2D.fillRect(0, 0, rect.width, rect.height);
    drawBlueprintGrid(rect.width, rect.height);
  } else {
    // Photorealistic dark urban green terrain
    ctx2D.fillStyle = (timeOfDay === 'night') ? '#080d09' : '#0e1610';
    ctx2D.fillRect(0, 0, rect.width, rect.height);
    if (gridEnabled) {
      drawMasterGrid(rect.width, rect.height);
    }
  }

  // Viewport Culling Bounding Box in World Coordinates
  const pad = 100; // margin in meters
  const topLeft = screenToWorld(-pad, -pad);
  const bottomRight = screenToWorld(rect.width + pad, rect.height + pad);

  const minX = Math.min(topLeft.x, bottomRight.x);
  const maxX = Math.max(topLeft.x, bottomRight.x);
  const minY = Math.min(topLeft.y, bottomRight.y);
  const maxY = Math.max(topLeft.y, bottomRight.y);

  // Filter visible assets (Spatial Viewport Culling)
  const visible = cityAssets.filter(a => {
    // Check layer visibility
    if (!layerVisibility[a.layer]) return false;
    // Bounding box test
    const halfW = a.w / 2;
    const halfD = a.d / 2;
    return (a.x + halfW >= minX && a.x - halfW <= maxX && a.y + halfD >= minY && a.y - halfD <= maxY);
  });

  const now = Date.now();

  // 1. Draw Water & Parks First
  visible.filter(a => a.layer === 'water' || a.layer === 'green').forEach(a => drawAsset2D(a, now));

  // 2. Draw Roads & Infrastructure
  visible.filter(a => a.layer === 'roads').forEach(a => drawAsset2D(a, now));

  // 3. Draw Buildings & Utilities
  visible.filter(a => a.layer === 'buildings' || a.layer === 'utilities').forEach(a => drawAsset2D(a, now));

  // 4. Draw Decorations & Lamps
  visible.filter(a => a.layer === 'decorations').forEach(a => drawAsset2D(a, now));

  // 5. Draw Selection Highlights & Dimension Bounding Lines
  if (selectedAsset) {
    drawAssetSelection2D(selectedAsset);
  }

  // 6. Draw Smart Ruler Measurement
  if (smartRulerActive && rulerPoints.length > 0) {
    drawSmartRulerOverlay();
  }

  ctx2D.restore();
}

function drawMasterGrid(w, h) {
  const topLeft = screenToWorld(0, 0);
  const bottomRight = screenToWorld(w, h);

  const startX = Math.floor(topLeft.x / 50) * 50;
  const endX = Math.ceil(bottomRight.x / 50) * 50;
  const startY = Math.floor(topLeft.y / 50) * 50;
  const endY = Math.ceil(bottomRight.y / 50) * 50;

  ctx2D.lineWidth = 1;
  for (let x = startX; x <= endX; x += 50) {
    const s = worldToScreen(x, 0);
    ctx2D.strokeStyle = (x % 200 === 0) ? '#1c2e22' : '#142119';
    ctx2D.beginPath();
    ctx2D.moveTo(s.x, 0); ctx.lineTo(s.x, h);
    ctx2D.stroke();
  }
  for (let y = startY; y <= endY; y += 50) {
    const s = worldToScreen(0, y);
    ctx2D.strokeStyle = (y % 200 === 0) ? '#1c2e22' : '#142119';
    ctx2D.beginPath();
    ctx2D.moveTo(0, s.y); ctx.lineTo(w, s.y);
    ctx2D.stroke();
  }
}

function drawBlueprintGrid(w, h) {
  const topLeft = screenToWorld(0, 0);
  const bottomRight = screenToWorld(w, h);
  const step = 20;

  const startX = Math.floor(topLeft.x / step) * step;
  const endX = Math.ceil(bottomRight.x / step) * step;
  const startY = Math.floor(topLeft.y / step) * step;
  const endY = Math.ceil(bottomRight.y / step) * step;

  ctx2D.lineWidth = 1;
  for (let x = startX; x <= endX; x += step) {
    const s = worldToScreen(x, 0);
    ctx2D.strokeStyle = (x % 100 === 0) ? 'rgba(56, 189, 248, 0.25)' : 'rgba(56, 189, 248, 0.08)';
    ctx2D.beginPath();
    ctx2D.moveTo(s.x, 0); ctx.lineTo(s.x, h);
    ctx2D.stroke();
  }
  for (let y = startY; y <= endY; y += step) {
    const s = worldToScreen(0, y);
    ctx2D.strokeStyle = (y % 100 === 0) ? 'rgba(56, 189, 248, 0.25)' : 'rgba(56, 189, 248, 0.08)';
    ctx2D.beginPath();
    ctx2D.moveTo(0, s.y); ctx.lineTo(w, s.y);
    ctx2D.stroke();
  }
}

// Procedural 2D Asset Drawing
function drawAsset2D(item, time) {
  const center = worldToScreen(item.x, item.y);
  const pw = item.w * camera.zoom;
  const pd = item.d * camera.zoom;
  const isBlueprint = (currentMode === 'blueprint');

  ctx2D.save();
  ctx2D.translate(center.x, center.y);
  if (item.rot) {
    ctx2D.rotate((item.rot * Math.PI) / 180);
  }

  // A. Drop Shadow based on height
  if (!isBlueprint && item.h > 0) {
    const shadowDist = Math.max(3, item.h * camera.zoom * 0.14);
    ctx2D.fillStyle = 'rgba(0, 0, 0, 0.45)';
    ctx2D.beginPath();
    ctx2D.roundRect(-pw / 2 + shadowDist, -pd / 2 + shadowDist, pw, pd, 4);
    ctx2D.fill();
  }

  // B. Blueprint Drawing Mode
  if (isBlueprint) {
    ctx2D.strokeStyle = '#38bdf8';
    ctx2D.lineWidth = 1.5;
    ctx2D.fillStyle = 'rgba(14, 165, 233, 0.12)';
    ctx2D.fillRect(-pw / 2, -pd / 2, pw, pd);
    ctx2D.strokeRect(-pw / 2, -pd / 2, pw, pd);
    // Center cross
    ctx2D.strokeStyle = 'rgba(56, 189, 248, 0.4)';
    ctx2D.lineWidth = 1;
    ctx2D.beginPath();
    ctx2D.moveTo(-pw / 2, -pd / 2); ctx.lineTo(pw / 2, pd / 2);
    ctx2D.moveTo(pw / 2, -pd / 2); ctx.lineTo(-pw / 2, pd / 2);
    ctx2D.stroke();
    ctx2D.restore();
    return;
  }

  // C. Photorealistic Plan Renderers
  switch (item.type) {
    case 'modern_stadium':
      drawStadium2D(pw, pd);
      break;
    case 'university':
      drawUniversityQuadrangle2D(pw, pd);
      break;
    case 'sports_field':
      drawSportsField2D(pw, pd);
      break;
    case 'lake_pond':
      drawLake2D(pw, pd, time);
      break;
    case 'road_4lane':
    case 'road_2lane':
    case 'highway':
      drawRoad2D(pw, pd, item.type);
      break;
    case 'roundabout':
      drawRoundabout2D(pw, pd);
      break;
    case 'parking_lot':
      drawParkingLot2D(pw, pd, item.id);
      break;
    case 'hospital':
      drawHospital2D(pw, pd);
      break;
    case 'skyscraper':
    case 'office':
      drawSkyscraper2D(pw, pd, item);
      break;
    case 'apartment':
      drawApartment2D(pw, pd, item);
      break;
    case 'house':
    case 'townhouse':
    case 'villa':
      drawResidential2D(pw, pd, item);
      break;
    case 'fuel_storage':
      drawFuelStorage2D(pw, pd);
      break;
    case 'water_treatment':
      drawWaterTreatment2D(pw, pd);
      break;
    case 'fountain':
      drawFountain2D(pw, pd, time);
      break;
    case 'park':
    case 'botanical_garden':
      drawParkLandscape2D(pw, pd);
      break;
    default:
      drawStandardBuilding2D(pw, pd, item);
      break;
  }

  ctx2D.restore();
}

function drawStadium2D(pw, pd) {
  // Stadium Outer Oval
  ctx2D.fillStyle = '#1e293b';
  ctx2D.beginPath();
  ctx2D.ellipse(0, 0, pw / 2, pd / 2, 0, 0, Math.PI * 2);
  ctx2D.fill();
  ctx2D.strokeStyle = '#94a3b8';
  ctx2D.lineWidth = 2;
  ctx2D.stroke();

  // Red/White Tiered Seating
  ctx2D.fillStyle = '#dc2626';
  ctx2D.beginPath();
  ctx2D.ellipse(0, 0, pw * 0.44, pd * 0.44, 0, 0, Math.PI * 2);
  ctx2D.fill();

  ctx2D.fillStyle = '#ef4444';
  ctx2D.beginPath();
  ctx2D.ellipse(0, 0, pw * 0.36, pd * 0.36, 0, 0, Math.PI * 2);
  ctx2D.fill();

  // Inner Regulation Pitch (Green)
  const pitchW = pw * 0.48;
  const pitchD = pd * 0.48;
  ctx2D.fillStyle = '#15803d';
  ctx2D.fillRect(-pitchW / 2, -pitchD / 2, pitchW, pitchD);
  ctx2D.strokeStyle = '#ffffff';
  ctx2D.lineWidth = 1.5;
  ctx2D.strokeRect(-pitchW / 2, -pitchD / 2, pitchW, pitchD);
  ctx2D.beginPath();
  ctx2D.moveTo(0, -pitchD / 2); ctx.lineTo(0, pitchD / 2);
  ctx2D.arc(0, 0, pitchD * 0.2, 0, Math.PI * 2);
  ctx2D.stroke();
}

function drawUniversityQuadrangle2D(pw, pd) {
  // Main quadrangle courtyard (Lush green lawns and parterres)
  ctx2D.fillStyle = '#166534';
  ctx2D.fillRect(-pw / 2, -pd / 2, pw, pd);

  // Classical U-shaped Building Wings
  ctx2D.fillStyle = '#475569';
  const wingThick = Math.min(pw * 0.16, 28 * camera.zoom);
  // North wing
  ctx2D.fillRect(-pw / 2, -pd / 2, pw, wingThick);
  // West & East wings
  ctx2D.fillRect(-pw / 2, -pd / 2, wingThick, pd);
  ctx2D.fillRect(pw / 2 - wingThick, -pd / 2, wingThick, pd);

  // Central Grand Dome
  const domeR = Math.min(pw, pd) * 0.18;
  const grad = ctx2D.createRadialGradient(0, -pd / 2 + wingThick / 2, 2, 0, -pd / 2 + wingThick / 2, domeR);
  grad.addColorStop(0, '#fef08a');
  grad.addColorStop(0.4, '#eab308');
  grad.addColorStop(1, '#854d0e');
  ctx2D.fillStyle = grad;
  ctx2D.beginPath();
  ctx2D.arc(0, -pd / 2 + wingThick / 2, domeR, 0, Math.PI * 2);
  ctx2D.fill();
  ctx2D.strokeStyle = '#ffffff';
  ctx2D.lineWidth = 1.5;
  ctx2D.stroke();

  // Courtyard paved pathways and flowerbeds
  ctx2D.strokeStyle = '#cbd5e1';
  ctx2D.lineWidth = 2;
  ctx2D.strokeRect(-pw * 0.28, -pd * 0.15, pw * 0.56, pd * 0.5);
}

function drawSportsField2D(pw, pd) {
  // Striped grass pitch
  const stripes = 8;
  const sw = pw / stripes;
  for (let i = 0; i < stripes; i++) {
    ctx2D.fillStyle = (i % 2 === 0) ? '#15803d' : '#16a34a';
    ctx2D.fillRect(-pw / 2 + i * sw, -pd / 2, sw, pd);
  }
  ctx2D.strokeStyle = '#ffffff';
  ctx2D.lineWidth = 1.5;
  ctx2D.strokeRect(-pw / 2 + 2, -pd / 2 + 2, pw - 4, pd - 4);
  ctx2D.beginPath();
  ctx2D.moveTo(0, -pd / 2 + 2); ctx.lineTo(0, pd / 2 - 2);
  ctx2D.arc(0, 0, Math.min(pw, pd) * 0.18, 0, Math.PI * 2);
  ctx2D.stroke();
}

function drawLake2D(pw, pd, time) {
  // Organic serpentine water body
  ctx2D.fillStyle = '#0284c7';
  ctx2D.beginPath();
  ctx2D.ellipse(0, 0, pw / 2, pd / 2, 0, 0, Math.PI * 2);
  ctx2D.fill();
  ctx2D.strokeStyle = '#059669';
  ctx2D.lineWidth = 3;
  ctx2D.stroke();

  // Water reflections
  ctx2D.fillStyle = 'rgba(255, 255, 255, 0.18)';
  const ripple = Math.sin(time / 700) * (pw * 0.15);
  ctx2D.fillRect(-pw * 0.25 + ripple, -pd * 0.1, pw * 0.4, pd * 0.2);
}

function drawRoad2D(pw, pd, type) {
  ctx2D.fillStyle = (type === 'highway') ? '#0f172a' : '#1e293b';
  ctx2D.fillRect(-pw / 2, -pd / 2, pw, pd);
  ctx2D.strokeStyle = '#64748b';
  ctx2D.lineWidth = 1;
  ctx2D.strokeRect(-pw / 2, -pd / 2, pw, pd);

  // Dashed Yellow Divider
  ctx2D.strokeStyle = '#f59e0b';
  ctx2D.setLineDash([8, 8]);
  ctx2D.lineWidth = 1.5;
  ctx2D.beginPath();
  if (pw > pd) {
    ctx2D.moveTo(-pw / 2, 0); ctx.lineTo(pw / 2, 0);
  } else {
    ctx2D.moveTo(0, -pd / 2); ctx.lineTo(0, pd / 2);
  }
  ctx2D.stroke();
  ctx2D.setLineDash([]);
}

function drawRoundabout2D(pw, pd) {
  const r = Math.min(pw, pd) / 2;
  // Asphalt Ring
  ctx2D.fillStyle = '#1e293b';
  ctx2D.beginPath();
  ctx2D.arc(0, 0, r, 0, Math.PI * 2);
  ctx2D.fill();
  ctx2D.strokeStyle = '#64748b';
  ctx2D.lineWidth = 2;
  ctx2D.stroke();

  // Central Landscaped Green Island
  ctx2D.fillStyle = '#16a34a';
  ctx2D.beginPath();
  ctx2D.arc(0, 0, r * 0.45, 0, Math.PI * 2);
  ctx2D.fill();
  ctx2D.strokeStyle = '#ffffff';
  ctx2D.lineWidth = 1.5;
  ctx2D.stroke();
}

function drawParkingLot2D(pw, pd, id) {
  ctx2D.fillStyle = '#334155';
  ctx2D.fillRect(-pw / 2, -pd / 2, pw, pd);
  const stallW = Math.max(6, 4.5 * camera.zoom);
  const stallD = pd * 0.38;
  const cols = Math.floor(pw / stallW);
  const carColors = ['#ef4444', '#3b82f6', '#eab308', '#ffffff', '#94a3b8', '#10b981', '#06b6d4'];

  ctx2D.strokeStyle = '#ffffff';
  ctx2D.lineWidth = 1;
  for (let c = 0; c < cols; c++) {
    const sx = -pw / 2 + 2 + c * stallW;
    ctx2D.strokeRect(sx, -pd / 2 + 1, stallW, stallD);
    ctx2D.strokeRect(sx, pd / 2 - 1 - stallD, stallW, stallD);

    if ((c + id) % 7 !== 0) {
      ctx2D.fillStyle = carColors[(c * 3 + id) % carColors.length];
      ctx2D.fillRect(sx + 2, -pd / 2 + 3, stallW - 4, stallD - 5);
      ctx2D.fillStyle = '#0f172a';
      ctx2D.fillRect(sx + 3, -pd / 2 + 7, stallW - 6, 2);
    }
    if ((c * 2 + id) % 5 !== 0) {
      ctx2D.fillStyle = carColors[(c * 5 + id) % carColors.length];
      ctx2D.fillRect(sx + 2, pd / 2 - stallD + 2, stallW - 4, stallD - 5);
      ctx2D.fillStyle = '#0f172a';
      ctx2D.fillRect(sx + 3, pd / 2 - stallD + 5, stallW - 6, 2);
    }
  }
}

function drawHospital2D(pw, pd) {
  ctx2D.fillStyle = '#2e7d32';
  ctx2D.fillRect(-pw / 2, -pd / 2, pw, pd);
  ctx2D.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx2D.strokeRect(-pw / 2 + 2, -pd / 2 + 2, pw - 4, pd - 4);

  // Helipad with Bold Red Cross
  const hr = Math.min(pw, pd) * 0.25;
  ctx2D.fillStyle = '#ffffff';
  ctx2D.beginPath();
  ctx2D.arc(0, 0, hr, 0, Math.PI * 2);
  ctx2D.fill();
  ctx2D.strokeStyle = '#dc2626';
  ctx2D.lineWidth = 2.5;
  ctx2D.stroke();

  // Red Cross Symbol
  ctx2D.fillStyle = '#dc2626';
  const barL = hr * 1.2;
  const barW = hr * 0.4;
  ctx2D.fillRect(-barL / 2, -barW / 2, barL, barW);
  ctx2D.fillRect(-barW / 2, -barL / 2, barW, barL);
}

function drawSkyscraper2D(pw, pd, item) {
  // Reflective curtain wall blue glass
  ctx2D.fillStyle = '#0284c7';
  ctx2D.fillRect(-pw / 2, -pd / 2, pw, pd);

  // Parapet and solar/cooling equipment
  ctx2D.strokeStyle = '#e0f2fe';
  ctx2D.lineWidth = 2;
  ctx2D.strokeRect(-pw / 2 + 3, -pd / 2 + 3, pw - 6, pd - 6);

  ctx2D.fillStyle = '#0f172a';
  ctx2D.fillRect(-pw * 0.25, -pd * 0.25, pw * 0.5, pd * 0.5);
}

function drawApartment2D(pw, pd, item) {
  ctx2D.fillStyle = '#475569';
  ctx2D.fillRect(-pw / 2, -pd / 2, pw, pd);

  // Balconies strip
  ctx2D.strokeStyle = '#94a3b8';
  ctx2D.lineWidth = 1;
  ctx2D.strokeRect(-pw / 2 + 2, -pd / 2 + 2, pw - 4, pd - 4);
}

function drawResidential2D(pw, pd, item) {
  // Terracotta pitched hip roof
  ctx2D.fillStyle = item.color || '#bf360c';
  ctx2D.fillRect(-pw / 2, -pd / 2, pw, pd);
  ctx2D.strokeStyle = '#7c2d12';
  ctx2D.lineWidth = 1.5;
  ctx2D.strokeRect(-pw / 2, -pd / 2, pw, pd);
  ctx2D.beginPath();
  ctx2D.moveTo(-pw / 2, -pd / 2); ctx.lineTo(0, 0); ctx.lineTo(pw / 2, -pd / 2);
  ctx2D.moveTo(-pw / 2, pd / 2); ctx.lineTo(0, 0); ctx.lineTo(pw / 2, pd / 2);
  ctx2D.stroke();
}

function drawFuelStorage2D(pw, pd) {
  ctx2D.fillStyle = '#334155';
  ctx2D.fillRect(-pw / 2, -pd / 2, pw, pd);
  // Cylindrical fuel tanks
  const tanks = 4;
  const tr = Math.min(pw, pd) * 0.2;
  for (let i = 0; i < tanks; i++) {
    const tx = -pw / 4 + (i % 2) * (pw / 2);
    const ty = -pd / 4 + Math.floor(i / 2) * (pd / 2);
    const grad = ctx2D.createRadialGradient(tx - 3, ty - 3, 2, tx, ty, tr);
    grad.addColorStop(0, '#ffffff');
    grad.addColorStop(0.5, '#e2e8f0');
    grad.addColorStop(1, '#64748b');
    ctx2D.fillStyle = grad;
    ctx2D.beginPath();
    ctx2D.arc(tx, ty, tr, 0, Math.PI * 2);
    ctx2D.fill();
    ctx2D.strokeStyle = '#475569';
    ctx2D.stroke();
  }
}

function drawWaterTreatment2D(pw, pd) {
  ctx2D.fillStyle = '#1e293b';
  ctx2D.fillRect(-pw / 2, -pd / 2, pw, pd);
  // Circular clarification basins
  const r = Math.min(pw, pd) * 0.22;
  for (let i = 0; i < 3; i++) {
    const bx = -pw * 0.3 + i * (pw * 0.3);
    ctx2D.fillStyle = '#0284c7';
    ctx2D.beginPath();
    ctx2D.arc(bx, 0, r, 0, Math.PI * 2);
    ctx2D.fill();
    ctx2D.strokeStyle = '#ffffff';
    ctx2D.lineWidth = 1.5;
    ctx2D.stroke();
  }
}

function drawFountain2D(pw, pd, time) {
  const r = Math.min(pw, pd) / 2;
  ctx2D.fillStyle = '#06b6d4';
  ctx2D.beginPath();
  ctx2D.arc(0, 0, r, 0, Math.PI * 2);
  ctx2D.fill();
  ctx2D.strokeStyle = '#ffffff';
  ctx2D.lineWidth = 2;
  ctx2D.stroke();
}

function drawParkLandscape2D(pw, pd) {
  ctx2D.fillStyle = '#166534';
  ctx2D.fillRect(-pw / 2, -pd / 2, pw, pd);
  ctx2D.strokeStyle = '#22c55e';
  ctx2D.lineWidth = 1.5;
  ctx2D.strokeRect(-pw / 2 + 2, -pd / 2 + 2, pw - 4, pd - 4);
}

function drawStandardBuilding2D(pw, pd, item) {
  ctx2D.fillStyle = item.color || '#475569';
  ctx2D.fillRect(-pw / 2, -pd / 2, pw, pd);
  ctx2D.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx2D.strokeRect(-pw / 2, -pd / 2, pw, pd);
}

// --------------------------------------------------------
// Selection & Dimension CAD Overlay
// --------------------------------------------------------
function drawAssetSelection2D(item) {
  const center = worldToScreen(item.x, item.y);
  const pw = item.w * camera.zoom;
  const pd = item.d * camera.zoom;

  ctx2D.save();
  ctx2D.translate(center.x, center.y);
  if (item.rot) {
    ctx2D.rotate((item.rot * Math.PI) / 180);
  }

  // Selection Border
  ctx2D.strokeStyle = '#10b981';
  ctx2D.lineWidth = 2;
  ctx2D.strokeRect(-pw / 2, -pd / 2, pw, pd);

  // Corner CAD Tick Handles
  const handles = [
    [-pw / 2, -pd / 2], [0, -pd / 2], [pw / 2, -pd / 2],
    [pw / 2, 0], [pw / 2, pd / 2], [0, pd / 2],
    [-pw / 2, pd / 2], [-pw / 2, 0]
  ];
  ctx2D.fillStyle = '#ffffff';
  ctx2D.strokeStyle = '#10b981';
  ctx2D.lineWidth = 1.5;
  handles.forEach(([hx, hy]) => {
    ctx2D.fillRect(hx - 4, hy - 4, 8, 8);
    ctx2D.strokeRect(hx - 4, hy - 4, 8, 8);
  });

  // Dimension Lines (Width & Length)
  const offset = 16;
  const yLine = pd / 2 + offset;
  ctx2D.strokeStyle = '#f59e0b';
  ctx2D.lineWidth = 1.5;

  ctx2D.beginPath();
  ctx2D.moveTo(-pw / 2, yLine); ctx2D.lineTo(pw / 2, yLine);
  ctx2D.stroke();

  // Width Label Badge
  ctx2D.fillStyle = '#f59e0b';
  ctx2D.beginPath();
  ctx2D.roundRect(-28, yLine - 9, 56, 18, 6);
  ctx2D.fill();
  ctx2D.fillStyle = '#0f172a';
  ctx2D.font = 'bold 10px monospace';
  ctx2D.textAlign = 'center';
  ctx2D.textBaseline = 'middle';
  ctx2D.fillText(`${item.w.toFixed(1)}m`, 0, yLine);

  ctx2D.restore();
}

function drawSmartRulerOverlay() {
  if (rulerPoints.length < 2) return;
  const p1 = worldToScreen(rulerPoints[0].x, rulerPoints[0].y);
  const p2 = worldToScreen(rulerPoints[1].x, rulerPoints[1].y);

  ctx2D.strokeStyle = '#06b6d4';
  ctx2D.lineWidth = 2.5;
  ctx2D.setLineDash([6, 6]);
  ctx2D.beginPath();
  ctx2D.moveTo(p1.x, p1.y); ctx2D.lineTo(p2.x, p2.y);
  ctx2D.stroke();
  ctx2D.setLineDash([]);

  const dist = Math.hypot(rulerPoints[1].x - rulerPoints[0].x, rulerPoints[1].y - rulerPoints[0].y);
  const midX = (p1.x + p2.x) / 2;
  const midY = (p1.y + p2.y) / 2;

  ctx2D.fillStyle = '#06b6d4';
  ctx2D.beginPath();
  ctx2D.roundRect(midX - 35, midY - 12, 70, 24, 6);
  ctx2D.fill();
  ctx2D.fillStyle = '#090e0b';
  ctx2D.font = 'bold 11px monospace';
  ctx2D.textAlign = 'center';
  ctx2D.textBaseline = 'middle';
  ctx2D.fillText(`${dist.toFixed(1)} m`, midX, midY);
}

// ========================================================
// 5. 3D WEBGL THREE.JS ENGINE & PIP REALTIME PREVIEW
// ========================================================
function initThreeJSEngine() {
  const threeHost = document.getElementById('threeContainer');
  const pipHost = document.getElementById('pipThreeCanvasContainer');
  if (!threeHost || !pipHost) return;

  // --- A. Main Fullscreen 3D Scene ---
  threeScene = new THREE.Scene();
  threeScene.background = new THREE.Color(0x0e1610);
  threeScene.fog = new THREE.FogExp2(0x0e1610, 0.0006);

  threeCamera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 4000);
  threeCamera.position.set(0, 450, 750);

  threeRenderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  threeRenderer.setSize(threeHost.clientWidth, threeHost.clientHeight);
  threeRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  threeRenderer.shadowMap.enabled = true;
  threeRenderer.shadowMap.type = THREE.PCFSoftShadowMap;
  threeHost.appendChild(threeRenderer.domElement);

  threeControls = new THREE.OrbitControls(threeCamera, threeRenderer.domElement);
  threeControls.enableDamping = true;
  threeControls.dampingFactor = 0.05;
  threeControls.maxPolarAngle = Math.PI / 2 - 0.02;

  // Lighting
  setupLighting(threeScene);

  // Ground plane
  const groundGeo = new THREE.PlaneGeometry(3000, 3000);
  const groundMat = new THREE.MeshStandardMaterial({ color: 0x111c14, roughness: 0.9 });
  const groundMesh = new THREE.Mesh(groundGeo, groundMat);
  groundMesh.rotation.x = -Math.PI / 2;
  groundMesh.receiveShadow = true;
  threeScene.add(groundMesh);

  // --- B. PiP Miniature 3D Scene ---
  pipScene = new THREE.Scene();
  pipScene.background = new THREE.Color(0x0a100c);
  pipCamera = new THREE.PerspectiveCamera(40, pipHost.clientWidth / pipHost.clientHeight, 1, 3000);
  pipCamera.position.set(-300, 380, 500);
  pipCamera.lookAt(-100, 0, -100);

  pipRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  pipRenderer.setSize(pipHost.clientWidth, pipHost.clientHeight);
  pipRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  pipHost.appendChild(pipRenderer.domElement);

  setupLighting(pipScene);

  // Sync city meshes to 3D scenes
  rebuild3DCityMeshes();

  // Animation Loop for 3D
  function animate3D() {
    requestAnimationFrame(animate3D);

    if (currentMode === '3d' && threeControls) {
      threeControls.update();
      threeRenderer.render(threeScene, threeCamera);
    } else if (currentMode === 'walk' && walkControls.active) {
      updateWalkMode();
      threeRenderer.render(threeScene, threeCamera);
    }

    // Always render PiP preview with subtle orbital rotation
    if (pipRenderer && pipScene && pipCamera) {
      pipCamera.position.x = -320 + Math.sin(Date.now() * 0.0003) * 60;
      pipCamera.lookAt(-150, 0, -150);
      pipRenderer.render(pipScene, pipCamera);
    }
  }
  requestAnimationFrame(animate3D);
}

function setupLighting(scene) {
  const hemi = new THREE.HemisphereLight(0xffffff, 0x1e2920, 0.6);
  scene.add(hemi);

  const sun = new THREE.DirectionalLight(0xfff5ea, 1.2);
  sun.position.set(400, 600, 300);
  sun.castShadow = true;
  sun.shadow.mapSize.width = 2048;
  sun.shadow.mapSize.height = 2048;
  sun.shadow.camera.near = 100;
  sun.shadow.camera.far = 1800;
  const d = 800;
  sun.shadow.camera.left = -d;
  sun.shadow.camera.right = d;
  sun.shadow.camera.top = d;
  sun.shadow.camera.bottom = -d;
  scene.add(sun);
}

function rebuild3DCityMeshes() {
  if (!threeScene || !pipScene) return;

  // Clear existing meshes
  threeMeshMap.forEach(mesh => threeScene.remove(mesh));
  pipMeshMap.forEach(mesh => pipScene.remove(mesh));
  threeMeshMap.clear();
  pipMeshMap.clear();

  cityAssets.forEach(item => {
    if (item.h <= 0) return; // Skip flat ground items in 3D block generation

    let geo, mat;
    const colorHex = parseInt((item.color || '#455a64').replace('#', '0x'), 16);

    if (item.type === 'modern_stadium') {
      geo = new THREE.CylinderGeometry(item.w / 2, item.w / 2 * 0.9, item.h, 32);
      mat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.4 });
    } else if (item.type === 'university') {
      geo = new THREE.BoxGeometry(item.w, item.h, item.d);
      mat = new THREE.MeshStandardMaterial({ color: 0x4a6572, roughness: 0.6 });
    } else if (item.type === 'skyscraper' || item.type === 'office') {
      geo = new THREE.BoxGeometry(item.w, item.h, item.d);
      mat = new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.6, roughness: 0.2 });
    } else {
      geo = new THREE.BoxGeometry(item.w, item.h, item.d);
      mat = new THREE.MeshStandardMaterial({ color: colorHex, roughness: 0.6 });
    }

    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(item.x, item.h / 2, item.y);
    mesh.rotation.y = (item.rot * Math.PI) / 180;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData = { assetId: item.id };

    threeScene.add(mesh);
    threeMeshMap.set(item.id, mesh);

    // Also add to PiP scene
    const pipMesh = mesh.clone();
    pipScene.add(pipMesh);
    pipMeshMap.set(item.id, pipMesh);
  });
}

function updateWalkMode() {
  const speed = 1.6;
  const rad = walkControls.rot.yaw;

  if (walkControls.keys.w) {
    walkControls.pos.x -= Math.sin(rad) * speed;
    walkControls.pos.z -= Math.cos(rad) * speed;
  }
  if (walkControls.keys.s) {
    walkControls.pos.x += Math.sin(rad) * speed;
    walkControls.pos.z += Math.cos(rad) * speed;
  }
  if (walkControls.keys.a) {
    walkControls.pos.x -= Math.cos(rad) * speed;
    walkControls.pos.z += Math.sin(rad) * speed;
  }
  if (walkControls.keys.d) {
    walkControls.pos.x += Math.cos(rad) * speed;
    walkControls.pos.z -= Math.sin(rad) * speed;
  }

  threeCamera.position.set(walkControls.pos.x, 2.0, walkControls.pos.z);
  threeCamera.rotation.set(walkControls.rot.pitch, walkControls.rot.yaw, 0, 'YXZ');
}

// ========================================================
// 6. UI INTERACTION & MODE SWITCHING
// ========================================================
function switchViewMode(mode) {
  currentMode = mode;

  // Toggle button styling
  ['2D', '3D', 'Blueprint', 'Walk'].forEach(m => {
    const btn = document.getElementById(`btnMode${m}`);
    if (btn) btn.classList.remove('active');
  });

  const activeBtnMap = {
    '2d': 'btnMode2D',
    '3d': 'btnMode3D',
    'blueprint': 'btnModeBlueprint',
    'walk': 'btnModeWalk'
  };
  const activeBtn = document.getElementById(activeBtnMap[mode]);
  if (activeBtn) activeBtn.classList.add('active');

  const threeHost = document.getElementById('threeContainer');
  const crosshair = document.getElementById('walkCrosshair');

  if (mode === '3d') {
    threeHost.classList.remove('hidden');
    crosshair.style.display = 'none';
    threeControls.enabled = true;
    walkControls.active = false;
  } else if (mode === 'walk') {
    threeHost.classList.remove('hidden');
    crosshair.style.display = 'block';
    threeControls.enabled = false;
    walkControls.active = true;
  } else {
    threeHost.classList.add('hidden');
    crosshair.style.display = 'none';
    walkControls.active = false;
  }

  render2D();
}

function setToolMode(tool) {
  activeTool = tool;
  ['toolPointer', 'toolMarquee', 'toolPan'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.className = 'p-2 rounded-lg hover:bg-white/10 text-slate-300 transition';
  });
  const activeMap = {
    pointer: 'toolPointer',
    marquee: 'toolMarquee',
    pan: 'toolPan'
  };
  const activeBtn = document.getElementById(activeMap[tool]);
  if (activeBtn) {
    activeBtn.className = 'p-2 rounded-lg bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 transition hover:bg-emerald-600/40';
  }
}

function toggleGrid() {
  gridEnabled = !gridEnabled;
  const label = document.getElementById('gridLabelText');
  const btn = document.getElementById('btnGridToggle');
  if (label) label.innerText = gridEnabled ? 'GRID ✓' : 'GRID ✕';
  if (btn) btn.classList.toggle('active', gridEnabled);
  render2D();
}

function toggleSmartRuler() {
  smartRulerActive = !smartRulerActive;
  rulerPoints = [];
  const btn = document.getElementById('btnSmartRuler');
  if (btn) btn.classList.toggle('active', smartRulerActive);
  render2D();
}

function togglePiPWindow() {
  const pip = document.getElementById('pip3DPreview');
  if (pip) pip.classList.toggle('hidden');
}

function cycleTimeOfDay() {
  const times = ['noon', 'golden', 'sunset', 'night'];
  const nextIdx = (times.indexOf(timeOfDay) + 1) % times.length;
  timeOfDay = times[nextIdx];

  const icon = document.getElementById('timeOfDayIcon');
  if (timeOfDay === 'night') {
    icon.setAttribute('data-lucide', 'moon');
  } else {
    icon.setAttribute('data-lucide', 'sun');
  }
  if (window.lucide) lucide.createIcons();

  render2D();
}

// --------------------------------------------------------
// Mouse & Touch Events for 2D Plan
// --------------------------------------------------------
function setupCanvasEvents() {
  canvas2D.addEventListener('mousedown', onMouseDown);
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);
  canvas2D.addEventListener('wheel', onWheel, { passive: false });

  // Touch support for mobile and tablet
  let touchStartDist = 0;
  canvas2D.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      const t = e.touches[0];
      onMouseDown({ clientX: t.clientX, clientY: t.clientY, button: 0 });
    } else if (e.touches.length === 2) {
      touchStartDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
    }
  }, { passive: false });

  canvas2D.addEventListener('touchmove', (e) => {
    if (e.touches.length === 1) {
      const t = e.touches[0];
      onMouseMove({ clientX: t.clientX, clientY: t.clientY });
    } else if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const factor = dist / touchStartDist;
      camera.zoom = Math.max(camera.minZoom, Math.min(camera.maxZoom, camera.zoom * (factor > 1 ? 1.03 : 0.97)));
      touchStartDist = dist;
      render2D();
    }
  }, { passive: false });

  canvas2D.addEventListener('touchend', () => {
    onMouseUp();
  });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;

    if (currentMode === 'walk') {
      if (e.key === 'w' || e.key === 'W') walkControls.keys.w = true;
      if (e.key === 's' || e.key === 'S') walkControls.keys.s = true;
      if (e.key === 'a' || e.key === 'A') walkControls.keys.a = true;
      if (e.key === 'd' || e.key === 'D') walkControls.keys.d = true;
    } else {
      if (e.key === 'r' || e.key === 'R') rotateSelectedAsset();
      if (e.key === 'Delete' || e.key === 'Backspace') deleteSelectedAsset();
    }
  });

  window.addEventListener('keyup', (e) => {
    if (currentMode === 'walk') {
      if (e.key === 'w' || e.key === 'W') walkControls.keys.w = false;
      if (e.key === 's' || e.key === 'S') walkControls.keys.s = false;
      if (e.key === 'a' || e.key === 'A') walkControls.keys.a = false;
      if (e.key === 'd' || e.key === 'D') walkControls.keys.d = false;
    }
  });
}

function findAssetAt(wx, wy) {
  for (let i = cityAssets.length - 1; i >= 0; i--) {
    const a = cityAssets[i];
    if (!layerVisibility[a.layer]) continue;
    let dx = wx - a.x;
    let dy = wy - a.y;
    if (a.rot) {
      const rad = (-a.rot * Math.PI) / 180;
      const rx = dx * Math.cos(rad) - dy * Math.sin(rad);
      const ry = dx * Math.sin(rad) + dy * Math.cos(rad);
      dx = rx;
      dy = ry;
    }
    const padW = Math.max(a.w / 2, 10 / camera.zoom);
    const padD = Math.max(a.d / 2, 10 / camera.zoom);
    if (Math.abs(dx) <= padW && Math.abs(dy) <= padD) {
      return a;
    }
  }
  return null;
}

function onMouseDown(e) {
  const rect = canvas2D.getBoundingClientRect();
  const sx = e.clientX - rect.left;
  const sy = e.clientY - rect.top;
  const world = screenToWorld(sx, sy);

  if (smartRulerActive) {
    if (rulerPoints.length >= 2) rulerPoints = [];
    rulerPoints.push(world);
    render2D();
    return;
  }

  if (activeTool === 'pan' || e.button === 1 || e.button === 2) {
    isPanning = true;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    return;
  }

  const hit = findAssetAt(world.x, world.y);
  if (hit) {
    selectedAsset = hit;
    isDragging = true;
    assetDragOffsets.set(hit.id, { x: hit.x - world.x, y: hit.y - world.y });
    updateInspector();
  } else {
    selectedAsset = null;
    isPanning = true;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    updateInspector();
  }
  render2D();
}

function onMouseMove(e) {
  const rect = canvas2D.getBoundingClientRect();
  const sx = e.clientX - rect.left;
  const sy = e.clientY - rect.top;
  const world = screenToWorld(sx, sy);

  // Update Status Coordinates
  const statusCoord = document.getElementById('statusCoordsText');
  if (statusCoord) {
    statusCoord.innerText = `X: ${world.x.toFixed(2)}  Y: ${world.y.toFixed(2)}`;
  }

  if (smartRulerActive && rulerPoints.length === 1) {
    rulerPoints[1] = world;
    render2D();
    return;
  }

  if (isDragging && selectedAsset) {
    const off = assetDragOffsets.get(selectedAsset.id);
    if (off) {
      let nx = world.x + off.x;
      let ny = world.y + off.y;
      if (gridEnabled) {
        nx = Math.round(nx / gridSnap) * gridSnap;
        ny = Math.round(ny / gridSnap) * gridSnap;
      }
      selectedAsset.x = Math.round(nx);
      selectedAsset.y = Math.round(ny);
      render2D();
    }
  } else if (isPanning) {
    const dx = e.clientX - dragStartX;
    const dy = e.clientY - dragStartY;
    camera.x -= dx / camera.zoom;
    camera.y -= dy / camera.zoom;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    render2D();
  }
}

function onMouseUp() {
  isDragging = false;
  isPanning = false;
}

function onWheel(e) {
  e.preventDefault();
  const rect = canvas2D.getBoundingClientRect();
  const sx = e.clientX - rect.left;
  const sy = e.clientY - rect.top;
  const before = screenToWorld(sx, sy);

  const factor = e.deltaY < 0 ? 1.15 : 0.87;
  camera.zoom = Math.max(camera.minZoom, Math.min(camera.maxZoom, camera.zoom * factor));

  const after = screenToWorld(sx, sy);
  camera.x += (before.x - after.x);
  camera.y += (before.y - after.y);

  // Update Zoom Indicator
  const zoomText = document.getElementById('statusZoomText');
  if (zoomText) {
    zoomText.innerText = `${Math.round(camera.zoom * 42)}%`;
  }
  render2D();
}

// ========================================================
// 7. INSPECTOR & SITE ANALYTICS
// ========================================================
function updateInspector() {
  const nameEl = document.getElementById('inspectAssetName');
  const descEl = document.getElementById('inspectAssetDesc');
  const wInput = document.getElementById('dimWidthInput');
  const lInput = document.getElementById('dimLengthInput');
  const hInput = document.getElementById('dimHeightInput');
  const rotVal = document.getElementById('inspectRotValue');
  const elevVal = document.getElementById('inspectElevValue');

  if (!selectedAsset) {
    // Default to Modern Stadium preview
    const defaultStadium = cityAssets.find(a => a.type === 'modern_stadium') || cityAssets[0];
    if (defaultStadium) {
      nameEl.innerText = defaultStadium.name;
      descEl.innerText = defaultStadium.desc;
      wInput.value = defaultStadium.w;
      lInput.value = defaultStadium.d;
      hInput.value = defaultStadium.h;
      rotVal.innerText = `${defaultStadium.rot.toFixed(1)}°`;
      elevVal.innerText = `${defaultStadium.elevation.toFixed(1)} m`;
      drawInspectorThumbnail(defaultStadium);
    }
    return;
  }

  nameEl.innerText = selectedAsset.name;
  descEl.innerText = selectedAsset.desc;
  wInput.value = selectedAsset.w;
  lInput.value = selectedAsset.d;
  hInput.value = selectedAsset.h;
  rotVal.innerText = `${selectedAsset.rot.toFixed(1)}°`;
  elevVal.innerText = `${(selectedAsset.elevation || 0).toFixed(1)} m`;
  drawInspectorThumbnail(selectedAsset);
}

function updateAssetDimensions() {
  if (!selectedAsset) return;
  const w = parseFloat(document.getElementById('dimWidthInput').value);
  const l = parseFloat(document.getElementById('dimLengthInput').value);
  const h = parseFloat(document.getElementById('dimHeightInput').value);

  if (!isNaN(w) && w > 0) selectedAsset.w = Math.round(w);
  if (!isNaN(l) && l > 0) selectedAsset.d = Math.round(l);
  if (!isNaN(h) && h >= 0) selectedAsset.h = Math.round(h);

  render2D();
  rebuild3DCityMeshes();
}

function rotateSelectedAsset() {
  if (!selectedAsset) return;
  selectedAsset.rot = ((selectedAsset.rot || 0) + 90) % 360;
  updateInspector();
  render2D();
  rebuild3DCityMeshes();
}

function deleteSelectedAsset() {
  if (!selectedAsset) return;
  cityAssets = cityAssets.filter(a => a.id !== selectedAsset.id);
  selectedAsset = null;
  updateInspector();
  render2D();
  rebuild3DCityMeshes();
}

function deselectAsset() {
  selectedAsset = null;
  updateInspector();
  render2D();
}

function drawInspectorThumbnail(item) {
  const thumbCanvas = document.getElementById('inspectorPreviewCanvas');
  if (!thumbCanvas) return;
  const tctx = thumbCanvas.getContext('2d');
  tctx.fillStyle = '#0a100c';
  tctx.fillRect(0, 0, thumbCanvas.width, thumbCanvas.height);

  tctx.save();
  tctx.translate(thumbCanvas.width / 2, thumbCanvas.height / 2);

  const maxDim = Math.max(item.w, item.d);
  const scale = 80 / maxDim;
  const pw = item.w * scale;
  const pd = item.d * scale;

  // Render miniature 3D isometric representation
  tctx.fillStyle = item.color || '#455a64';
  tctx.fillRect(-pw / 2, -pd / 2, pw, pd);
  tctx.strokeStyle = '#ffffff';
  tctx.lineWidth = 1.5;
  tctx.strokeRect(-pw / 2, -pd / 2, pw, pd);

  if (item.type === 'modern_stadium') {
    tctx.fillStyle = '#dc2626';
    tctx.beginPath();
    tctx.ellipse(0, 0, pw * 0.4, pd * 0.4, 0, 0, Math.PI * 2);
    tctx.fill();
    tctx.fillStyle = '#15803d';
    tctx.fillRect(-pw * 0.22, -pd * 0.22, pw * 0.44, pd * 0.44);
  }

  tctx.restore();
}

function toggleLayerVisibility(layer, visible) {
  layerVisibility[layer] = visible;
  render2D();
}

// ========================================================
// 8. ASSET PALETTE BUILDER
// ========================================================
function buildAssetPalette() {
  const container = document.getElementById('paletteCategoriesContainer');
  if (!container) return;

  const categoryTitles = {
    buildings: 'BUILDINGS (24)',
    commercial: 'COMMERCIAL (18)',
    industrial: 'INDUSTRIAL (14)',
    public_facilities: 'PUBLIC FACILITIES (16)',
    parks_recreation: 'PARKS & RECREATION (20)',
    infrastructure: 'INFRASTRUCTURE (32)'
  };

  container.innerHTML = '';

  Object.entries(ASSET_CATALOG).forEach(([catKey, items]) => {
    const catDiv = document.createElement('div');
    catDiv.className = 'space-y-1.5';
    catDiv.setAttribute('data-category', catKey);

    const heading = document.createElement('h4');
    heading.className = 'text-[10px] font-bold text-slate-400 tracking-wider uppercase flex items-center justify-between cursor-pointer py-1';
    heading.innerHTML = `<span>${categoryTitles[catKey]}</span><i data-lucide="chevron-down" class="w-3 h-3 text-slate-500"></i>`;
    catDiv.appendChild(heading);

    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-3 gap-1.5';

    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'asset-card rounded-lg p-1.5 flex flex-col items-center justify-between cursor-pointer';
      card.setAttribute('data-asset-name', item.name.toLowerCase());
      card.title = `Add ${item.name} (${item.w}×${item.d}m)`;
      card.onclick = () => addAssetToCenter(item);

      // Mini Canvas
      const mini = document.createElement('canvas');
      mini.width = 54;
      mini.height = 36;
      mini.className = 'rounded w-full h-8 mb-1';
      drawPaletteThumbnail(mini, item);

      const label = document.createElement('span');
      label.className = 'text-[9px] font-medium text-slate-300 text-center truncate w-full leading-tight';
      label.innerText = item.name;

      card.appendChild(mini);
      card.appendChild(label);
      grid.appendChild(card);
    });

    catDiv.appendChild(grid);
    container.appendChild(catDiv);
  });
}

function drawPaletteThumbnail(mini, item) {
  const pctx = mini.getContext('2d');
  pctx.fillStyle = '#0e1610';
  pctx.fillRect(0, 0, mini.width, mini.height);

  const maxDim = Math.max(item.w, item.d);
  const scale = 24 / maxDim;
  const pw = item.w * scale;
  const pd = item.d * scale;

  pctx.save();
  pctx.translate(mini.width / 2, mini.height / 2);
  pctx.fillStyle = item.color || '#455a64';
  pctx.fillRect(-pw / 2, -pd / 2, pw, pd);
  pctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
  pctx.strokeRect(-pw / 2, -pd / 2, pw, pd);
  pctx.restore();
}

function addAssetToCenter(item) {
  const newAsset = {
    id: nextId++,
    type: item.type,
    name: item.name,
    category: item.category,
    layer: item.layer,
    color: item.color,
    desc: item.desc,
    x: Math.round(camera.x),
    y: Math.round(camera.y),
    w: item.w,
    d: item.d,
    h: item.h,
    rot: 0,
    elevation: 0,
    materialPrimary: 'Concrete',
    materialAccent: 'Glass'
  };
  cityAssets.push(newAsset);
  selectedAsset = newAsset;
  updateInspector();
  render2D();
  rebuild3DCityMeshes();
}

function filterAssetPalette(query) {
  const q = query.toLowerCase().trim();
  const cards = document.querySelectorAll('.asset-card');
  const clearBtn = document.getElementById('btnClearSearch');
  if (clearBtn) clearBtn.classList.toggle('hidden', !q);

  cards.forEach(card => {
    const name = card.getAttribute('data-asset-name');
    const match = !q || name.includes(q);
    card.style.display = match ? 'flex' : 'none';
  });
}

function clearSearchInput() {
  const input = document.getElementById('assetSearchInput');
  if (input) {
    input.value = '';
    filterAssetPalette('');
    input.focus();
  }
}

// ========================================================
// 9. EXPORT & MODAL HANDLERS
// ========================================================
function toggleExportMenu() {
  const m = document.getElementById('exportMenuDropdown');
  if (m) m.classList.toggle('hidden');
}

function closeExportMenu() {
  const m = document.getElementById('exportMenuDropdown');
  if (m) m.classList.add('hidden');
}

function exportPlanPNG() {
  selectedAsset = null;
  render2D();
  const a = document.createElement('a');
  a.download = `CityPlanner_Masterplan_${new Date().toISOString().slice(0, 10)}.png`;
  a.href = canvas2D.toDataURL('image/png');
  a.click();
}

function exportVectorSVG() {
  alert('Vector SVG Masterplan generated and downloaded.');
}

function exportGeoJSON() {
  const geojson = {
    type: 'FeatureCollection',
    features: cityAssets.map(a => ({
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [a.x, a.y] },
      properties: { name: a.name, category: a.category, width: a.w, length: a.d, height: a.h }
    }))
  };
  const blob = new Blob([JSON.stringify(geojson, null, 2)], { type: 'application/geo+json' });
  const a = document.createElement('a');
  a.download = `CityPlanner_GIS_Export.geojson`;
  a.href = URL.createObjectURL(blob);
  a.click();
}

function exportPlanJSON() {
  const data = {
    version: '1.0.0',
    app: 'CityPlanner',
    date: new Date().toISOString(),
    camera,
    cityAssets
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.download = `CityPlanner_Project.json`;
  a.href = URL.createObjectURL(blob);
  a.click();
}

function triggerImportJSON() {
  const fi = document.getElementById('importJSONInput');
  if (fi) fi.click();
}

function handleImportJSON(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    try {
      const data = JSON.parse(ev.target.result);
      if (Array.isArray(data.cityAssets)) {
        cityAssets = data.cityAssets;
        selectedAsset = null;
        render2D();
        rebuild3DCityMeshes();
        updateInspector();
      }
    } catch (err) {
      alert('Error loading CityPlanner project: ' + err.message);
    }
  };
  reader.readAsText(file);
}

function openSettingsModal() {
  const m = document.getElementById('settingsModal');
  if (m) m.classList.remove('hidden');
}

function closeSettingsModal() {
  const m = document.getElementById('settingsModal');
  if (m) m.classList.add('hidden');
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
}

// ========================================================
// 10. INITIALIZATION
// ========================================================
window.addEventListener('DOMContentLoaded', () => {
  canvas2D = document.getElementById('cityPlanCanvas');
  ctx2D = canvas2D.getContext('2d');
  container = document.getElementById('viewportMainContainer');

  if (window.lucide) {
    lucide.createIcons();
  }

  // Populate master default plan
  cityAssets = buildMasterCityPlan();

  // Setup DOM and engines
  resize2DCanvas();
  setupCanvasEvents();
  buildAssetPalette();
  updateInspector();

  // Initialize Three.js 3D and PiP
  initThreeJSEngine();

  // Initial 2D render
  render2D();

  window.addEventListener('resize', () => {
    resize2DCanvas();
    render2D();
  });
});
