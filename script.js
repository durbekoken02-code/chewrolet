/**
 * CHEVROLET OFFICIAL SHOWROOM - APPLICATION JAVASCRIPT
 * Strictly Authentic Chevrolet Models Only.
 * Realistic MSRP in USD ($) and Direct Internet Image URLs.
 */

// ==========================================
// 1. CHEVROLET VEHICLES DATASET (100% GENUINE CHEVROLET)
// ==========================================
const CHEVROLET_VEHICLES = [
  {
    id: 'corvette_z06',
    name: 'Chevrolet Corvette Z06',
    subtitle: 'The American Supercar',
    category: 'performance',
    categoryName: 'Performance',
    price: 112700,
    horsepower: 670,
    engine: '5.5L Flat-Plane Crank V8',
    acceleration: '0-60: 2.6 sec',
    fuelEconomy: '12 / 19 MPG',
    imageUrl: 'https://images.unsplash.com/photo-1635975479443-123f7d9ed90b?auto=format&fit=crop&w=1200&q=80',
    description: 'An American icon reimagined with an exotic mid-engine architecture and a screaming 8,600 RPM redline.',
    trims: [
      { name: '1LZ Coupe', delta: 0 },
      { name: '2LZ Coupe', delta: 9200 },
      { name: '3LZ Coupe (Luxury Interior)', delta: 13850 },
      { name: '3LZ Convertible', delta: 20850 }
    ],
    colors: [
      { name: 'Torch Red', hex: '#cf1020', delta: 0 },
      { name: 'Rapid Blue', hex: '#0083ca', delta: 500 },
      { name: 'Amplify Orange Tintcoat', hex: '#ff5f1f', delta: 995 },
      { name: 'Black Onyx', hex: '#111111', delta: 0 },
      { name: 'Arctic White', hex: '#f0f4f8', delta: 0 }
    ],
    packages: [
      { id: 'z07', name: 'Z07 Performance Package (Carbon Ceramic Brakes, Aero, Cup 2R)', price: 8995 },
      { id: 'carbon_aero', name: 'Visible Carbon Fiber Ground Effects', price: 4495 },
      { id: 'lift', name: 'Front Lift with Memory GPS', price: 2595 }
    ],
    specs: {
      transmission: '8-Speed Dual-Clutch (DCT)',
      drivetrain: 'Rear-Wheel Drive (RWD Mid-Engine)',
      seating: '2 Passengers',
      topSpeed: '195 MPH (Track Capable)',
      infotainment: '12.3" Driver Cluster + 8" Touchscreen w/ Wireless Apple CarPlay & Android Auto',
      warranty: '3 Years / 36,000 Miles Bumper-to-Bumper'
    }
  },

  {
    id: 'corvette_stingray',
    name: 'Chevrolet Corvette Stingray',
    subtitle: 'Mid-Engine Mastery',
    category: 'performance',
    categoryName: 'Performance',
    price: 68300,
    horsepower: 495,
    engine: '6.2L LT2 Small Block V8',
    acceleration: '0-60: 2.9 sec',
    fuelEconomy: '16 / 24 MPG',
    imageUrl: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?auto=format&fit=crop&w=1200&q=80',
    description: 'Precision performance everyday supercar providing pulse-pounding power and track-ready balance.',
    trims: [
      { name: '1LT Coupe', delta: 0 },
      { name: '2LT Coupe (HUD, Bose 14-Speaker)', delta: 7100 },
      { name: '3LT Coupe (Nappa Leather)', delta: 11750 },
      { name: '2LT Convertible', delta: 14100 }
    ],
    colors: [
      { name: 'Rapid Blue', hex: '#0083ca', delta: 500 },
      { name: 'Torch Red', hex: '#cf1020', delta: 0 },
      { name: 'Hypersonic Gray', hex: '#5f6368', delta: 0 },
      { name: 'Black', hex: '#151515', delta: 0 },
      { name: 'Accelerate Yellow', hex: '#eedd00', delta: 995 }
    ],
    packages: [
      { id: 'z51', name: 'Z51 Performance Package (Brembo Brakes, Performance Exhaust, eLSD)', price: 6345 },
      { id: 'mag_ride', name: 'Magnetic Selective Ride Control™', price: 1895 },
      { id: 'gt2_seats', name: 'GT2 Bucket Competition Seats', price: 1695 }
    ],
    specs: {
      transmission: '8-Speed Dual-Clutch Automated',
      drivetrain: 'Rear-Wheel Drive (RWD)',
      seating: '2 Passengers',
      topSpeed: '194 MPH',
      infotainment: 'Chevrolet Infotainment 3 Plus with 8-inch diagonal HD color touchscreen',
      warranty: '3 Years / 36,000 Miles Basic, 5 Years / 60,000 Powertrain'
    }
  },

  {
    id: 'camaro_zl1',
    name: 'Chevrolet Camaro ZL1',
    subtitle: 'King of the Track',
    category: 'performance',
    categoryName: 'Performance',
    price: 72100,
    horsepower: 650,
    engine: '6.2L Supercharged LT4 V8',
    acceleration: '0-60: 3.5 sec',
    fuelEconomy: '14 / 20 MPG',
    imageUrl: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1200&q=80',
    description: 'The pinnacle of American muscle car performance, armed with 650 lb-ft of supercharged torque.',
    trims: [
      { name: 'ZL1 6-Speed Manual Coupe', delta: 0 },
      { name: 'ZL1 10-Speed Paddle-Shift Auto', delta: 1595 },
      { name: 'ZL1 Convertible', delta: 6000 }
    ],
    colors: [
      { name: 'Red Hot', hex: '#b31b1b', delta: 0 },
      { name: 'Riverside Blue Metallic', hex: '#104e8b', delta: 0 },
      { name: 'Black', hex: '#0f0f0f', delta: 0 },
      { name: 'Summit White', hex: '#f5f5f5', delta: 0 },
      { name: 'Vivid Orange Metallic', hex: '#d9531e', delta: 395 }
    ],
    packages: [
      { id: '1le', name: 'ZL1 1LE Extreme Track Performance Package', price: 7500 },
      { id: 'pdr', name: 'Performance Data and Video Recorder', price: 1300 },
      { id: 'carbon_hood', name: 'Visible Carbon Fiber Hood Insert', price: 600 }
    ],
    specs: {
      transmission: '6-Speed Manual with Active Rev Match / 10-Speed Auto',
      drivetrain: 'Rear-Wheel Drive (RWD)',
      seating: '4 Passengers (2+2)',
      topSpeed: '198 MPH',
      infotainment: 'Bose 9-Speaker Audio, Wireless Apple CarPlay & Android Auto',
      warranty: '3 Years / 36,000 Miles'
    }
  },

  {
    id: 'silverado_1500',
    name: 'Chevrolet Silverado 1500',
    subtitle: 'Stronger. Smarter. Proven.',
    category: 'truck',
    categoryName: 'Trucks',
    price: 36800,
    horsepower: 420,
    engine: '6.2L EcoTec3 V8 / Duramax 3.0L Turbo-Diesel',
    acceleration: 'Towing: Up to 13,300 lbs',
    fuelEconomy: '23 / 29 MPG (Diesel)',
    imageUrl: 'https://images.unsplash.com/photo-1597730071805-f87fe40f6796?auto=format&fit=crop&w=1200&q=80',
    description: 'A full-size pickup built with legendary high-strength roll-formed steel Durabed and 13.4-inch touchscreen.',
    trims: [
      { name: 'Custom Crew Cab', delta: 0 },
      { name: 'LT All Star Edition', delta: 7400 },
      { name: 'RST Sport Appearance', delta: 11200 },
      { name: 'LTZ Luxury Chrome', delta: 19800 },
      { name: 'High Country Flagship', delta: 25400 }
    ],
    colors: [
      { name: 'Sterling Gray Metallic', hex: '#5b616a', delta: 0 },
      { name: 'Black', hex: '#121212', delta: 0 },
      { name: 'Summit White', hex: '#f0f3f6', delta: 0 },
      { name: 'Glacier Blue Metallic', hex: '#2b5f8f', delta: 395 },
      { name: 'Radiant Red Tintcoat', hex: '#991b1e', delta: 495 }
    ],
    packages: [
      { id: 'z71_silverado', name: 'Z71 Off-Road Suspension Package with Rancho® Shocks', price: 1495 },
      { id: 'max_trailering', name: 'Max Trailering Package (Integrated Brake Controller)', price: 1125 },
      { id: 'multipro_tailgate', name: 'Multi-Flex 6-Position Tailgate', price: 445 }
    ],
    specs: {
      transmission: '10-Speed Electronically Controlled Automatic',
      drivetrain: '4WD / Available Autotrac 2-Speed Transfer Case',
      seating: '5 to 6 Passengers',
      payloadCapacity: '2,260 lbs Max Payload',
      infotainment: '13.4" Diagonal Center Touchscreen with Google built-in',
      warranty: '5 Years / 100,000 Miles Duramax Diesel Powertrain'
    }
  },

  {
    id: 'silverado_ev',
    name: 'Chevrolet Silverado EV',
    subtitle: 'The Electric Revolution',
    category: 'ev',
    categoryName: 'Electric (EV)',
    price: 74800,
    horsepower: 754,
    engine: 'Ultium Dual Motor e4WD',
    acceleration: '0-60: 4.5 sec (WOW Mode)',
    fuelEconomy: '440 Miles Range (EPA est.)',
    imageUrl: 'https://images.unsplash.com/photo-1592869070665-ed8ee2baad3b?auto=format&fit=crop&w=1200&q=80',
    description: 'Groundbreaking all-electric full-size pickup offering up to 440 miles of range and 10,000 lbs towing capacity.',
    trims: [
      { name: '3WT Work Truck (393 Mile Range)', delta: 0 },
      { name: '4WT Extended Range (440 Mile Range)', delta: 5000 },
      { name: 'RST First Edition (754 HP Flagship)', delta: 20100 }
    ],
    colors: [
      { name: 'Black', hex: '#0e0e0e', delta: 0 },
      { name: 'Summit White', hex: '#edf2f7', delta: 0 },
      { name: 'Slate Gray Metallic', hex: '#485563', delta: 0 }
    ],
    packages: [
      { id: 'super_cruise_ev', name: 'Super Cruise™ Hands-Free Driver Assistance w/ Trailering', price: 2200 },
      { id: 'midgate', name: 'Multi-Flex Midgate® with Pass-Through (Fits 10ft items)', price: 1500 },
      { id: 'four_wheel_steer', name: '4-Wheel Steer with Sidewalk CrabWalk', price: 1800 }
    ],
    specs: {
      transmission: 'Single-Speed Direct Drive Dual Electric Motors',
      drivetrain: 'e4WD Dual Motor System',
      seating: '5 Passengers',
      fastCharging: '350 kW DC Fast Charge (100 miles in 10 minutes)',
      infotainment: '17.7" Diagonal Freeform Touchscreen Display',
      warranty: '8 Years / 100,000 Miles Ultium Battery & Electric Components'
    }
  },

  {
    id: 'tahoe',
    name: 'Chevrolet Tahoe',
    subtitle: 'The Premier Full-Size SUV',
    category: 'suv',
    categoryName: 'SUVs & Crossovers',
    price: 58200,
    horsepower: 420,
    engine: '5.3L / 6.2L EcoTec3 V8',
    acceleration: 'Towing: 8,400 lbs',
    fuelEconomy: '15 / 20 MPG',
    imageUrl: 'https://images.unsplash.com/photo-1724436281340-2bb2ca3c8317?auto=format&fit=crop&w=1200&q=80',
    description: 'Room for up to 8 passengers, independent rear suspension, and best-in-class available 17.7-inch touchscreen.',
    trims: [
      { name: 'LT Trim', delta: 0 },
      { name: 'RST Street Performance', delta: 6400 },
      { name: 'Z71 Off-Road with Air Ride', delta: 8600 },
      { name: 'Premier Luxury Edition', delta: 13900 },
      { name: 'High Country Luxury V8', delta: 19800 }
    ],
    colors: [
      { name: 'Empire Beige Metallic', hex: '#9c8e7d', delta: 0 },
      { name: 'Black', hex: '#141414', delta: 0 },
      { name: 'Summit White', hex: '#f7fafc', delta: 0 },
      { name: 'Sterling Gray Metallic', hex: '#585e67', delta: 0 },
      { name: 'Cherry Red Tintcoat', hex: '#871a26', delta: 495 }
    ],
    packages: [
      { id: 'max_trailering_tahoe', name: 'Max Trailering Package with Hitch View', price: 995 },
      { id: 'rear_media', name: 'Dual 12.6" Diagonal Rear-Seat Media Systems', price: 1995 },
      { id: 'pano_sunroof', name: 'Panoramic Dual-Pane Power Sunroof', price: 1500 }
    ],
    specs: {
      transmission: '10-Speed Automatic Transmission',
      drivetrain: 'Rear-Wheel Drive / Available 4WD',
      seating: 'Up to 8 Passengers (3 Rows)',
      cargoSpace: '122.9 cu.ft Max Cargo Space',
      infotainment: '17.7" Diagonal Advanced Center Touchscreen',
      warranty: '3 Years / 36,000 Miles Basic, 5 Years / 60,000 Powertrain'
    }
  },

  {
    id: 'suburban',
    name: 'Chevrolet Suburban',
    subtitle: 'The Longest-Running Automotive Nameplate',
    category: 'suv',
    categoryName: 'SUVs & Crossovers',
    price: 61200,
    horsepower: 420,
    engine: '6.2L V8 / 3.0L Duramax Turbo-Diesel',
    acceleration: 'Towing: 8,300 lbs',
    fuelEconomy: '21 / 27 MPG (Diesel)',
    imageUrl: 'https://images.unsplash.com/photo-1660602638519-5f1c12a8279e?auto=format&fit=crop&w=1200&q=80',
    description: 'Unmatched passenger volume and 144.7 cubic feet of maximum cargo capacity make Suburban the ultimate family cruiser.',
    trims: [
      { name: 'LS Standard', delta: 0 },
      { name: 'LT Comfort Package', delta: 5400 },
      { name: 'RST Blackout Edition', delta: 9200 },
      { name: 'Z71 All-Terrain', delta: 11400 },
      { name: 'High Country Flagship', delta: 21800 }
    ],
    colors: [
      { name: 'Black', hex: '#0f0f0f', delta: 0 },
      { name: 'Summit White', hex: '#f0f3f6', delta: 0 },
      { name: 'Midnight Blue Metallic', hex: '#1c2d42', delta: 0 },
      { name: 'Auburn Metallic', hex: '#58362b', delta: 0 }
    ],
    packages: [
      { id: 'super_cruise_suburban', name: 'Super Cruise™ Hands-Free Driver Assistance', price: 2500 },
      { id: 'air_ride', name: 'Four-Corner Air Ride Adaptive Suspension', price: 1500 },
      { id: 'power_steps', name: 'Power-Retractable Assist Steps with Perimeter Lighting', price: 1745 }
    ],
    specs: {
      transmission: '10-Speed Electronic Automatic',
      drivetrain: '4WD with Autotrac 2-Speed',
      seating: 'Up to 9 Passengers Available',
      cargoSpace: '144.7 cu.ft Maximum Cargo Volume',
      infotainment: '17.7" Diagonal Touchscreen + 11" Driver Information Center',
      warranty: '3 Years / 36,000 Miles'
    }
  },

  {
    id: 'blazer',
    name: 'Chevrolet Blazer RS',
    subtitle: 'Athletic Muscle-Inspired SUV',
    category: 'suv',
    categoryName: 'SUVs & Crossovers',
    price: 35400,
    horsepower: 308,
    engine: '3.6L V6 / 2.0L Turbocharged 4-Cyl',
    acceleration: '0-60: 6.1 sec',
    fuelEconomy: '22 / 29 MPG',
    imageUrl: 'https://images.unsplash.com/photo-1649599389365-e07221e94641?auto=format&fit=crop&w=1200&q=80',
    description: 'Camaro-inspired design language with twin-clutch advanced all-wheel drive and dramatic black mesh grille.',
    trims: [
      { name: '2LT Turbo', delta: 0 },
      { name: '3LT Luxury Package', delta: 3900 },
      { name: 'RS V6 Sport (Twin-Clutch AWD)', delta: 7400 },
      { name: 'Premier Chrome Elegance', delta: 7400 }
    ],
    colors: [
      { name: 'Red Hot', hex: '#c41e3a', delta: 0 },
      { name: 'Black', hex: '#181818', delta: 0 },
      { name: 'Sterling Gray Metallic', hex: '#63686e', delta: 0 },
      { name: 'Riptide Blue Metallic', hex: '#005b96', delta: 395 }
    ],
    packages: [
      { id: 'sound_tech', name: 'Sound & Technology Package (Bose 8-Speaker, HD Surround)', price: 1400 },
      { id: 'enhanced_safety', name: 'Enhanced Convenience Package (Heated Rear Seats, Ventilated Front)', price: 1660 }
    ],
    specs: {
      transmission: '9-Speed Automatic',
      drivetrain: 'Twin-Clutch Advanced All-Wheel Drive (AWD)',
      seating: '5 Passengers',
      cargoSpace: '64.2 cu.ft Maximum Cargo',
      infotainment: '10.2" Diagonal HD Color Touchscreen',
      warranty: '3 Years / 36,000 Miles'
    }
  },

  {
    id: 'blazer_ev',
    name: 'Chevrolet Blazer EV',
    subtitle: 'MotorTrend SUV of the Year',
    category: 'ev',
    categoryName: 'Electric (EV)',
    price: 48800,
    horsepower: 557,
    engine: 'Ultium All-Electric Propulsion (SS)',
    acceleration: '0-60: Under 4.0 sec (SS WOW)',
    fuelEconomy: 'Up to 324 Miles Range',
    imageUrl: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80',
    description: 'Winner of MotorTrend SUV of the Year. Pure electric performance with stunning light bar choreography.',
    trims: [
      { name: 'LT AWD (279 Mile Range)', delta: 0 },
      { name: 'RS eAWD (279 Mile Range)', delta: 5400 },
      { name: 'RS RWD (Long Range 324 Miles)', delta: 7100 },
      { name: 'SS Super Sport (557 HP Flagship)', delta: 17100 }
    ],
    colors: [
      { name: 'Summit White', hex: '#edf2f7', delta: 0 },
      { name: 'Black', hex: '#111111', delta: 0 },
      { name: 'Radiant Red Tintcoat', hex: '#9e1b26', delta: 495 },
      { name: 'Sterling Gray Metallic', hex: '#585e67', delta: 0 }
    ],
    packages: [
      { id: 'super_cruise_bev', name: 'Super Cruise™ Hands-Free Driving Technology', price: 2200 },
      { id: 'comfort_bev', name: 'Comfort and Convenience Package', price: 1250 }
    ],
    specs: {
      transmission: 'Direct Drive Single-Speed Electric',
      drivetrain: 'Available eAWD, FWD, or RWD',
      seating: '5 Passengers',
      fastCharging: 'Up to 190 kW DC Fast Charging',
      infotainment: '17.7" Diagonal Freeform Screen with Google Built-In',
      warranty: '8 Years / 100,000 Miles Battery Components'
    }
  },

  {
    id: 'colorado',
    name: 'Chevrolet Colorado Z71',
    subtitle: 'MotorTrend Truck of the Year',
    category: 'truck',
    categoryName: 'Trucks',
    price: 31000,
    horsepower: 310,
    engine: '2.7L TurboMax™ Engine',
    acceleration: 'Towing: 7,700 lbs Best-in-Class',
    fuelEconomy: '19 / 23 MPG',
    imageUrl: 'https://images.unsplash.com/photo-1725555327325-a7b1adca99e8?auto=format&fit=crop&w=1200&q=80',
    description: 'Voted Truck of the Year. Packed with 430 lb-ft of torque, class-exclusive StowFlex tailgate, and up to 10 camera views.',
    trims: [
      { name: 'WT (Work Truck)', delta: 0 },
      { name: 'LT Premium Package', delta: 3500 },
      { name: 'Trail Boss 2" Factory Lift', delta: 8100 },
      { name: 'Z71 Off-Road Specialist', delta: 10900 },
      { name: 'ZR2 Extreme Desert Racer', delta: 17800 }
    ],
    colors: [
      { name: 'Sand Dune Metallic', hex: '#9d8a70', delta: 0 },
      { name: 'Glacier Blue Metallic', hex: '#265985', delta: 395 },
      { name: 'Black', hex: '#121212', delta: 0 },
      { name: 'Summit White', hex: '#f0f4f8', delta: 0 }
    ],
    packages: [
      { id: 'stowflex', name: 'StowFlex Tailgate with Built-in Drainable Storage Compartment', price: 495 },
      { id: 'tech_colorado', name: 'Technology Package (HD Surround Vision, Rear Pedestrian Alert)', price: 950 },
      { id: 'offroad_lights', name: 'Off-Road Auxiliary Light Bar', price: 795 }
    ],
    specs: {
      transmission: '8-Speed Automatic Transmission',
      drivetrain: 'Autotrac 4-Wheel Drive with Automatic Locking Differential',
      seating: '5 Passengers (Crew Cab Standard)',
      groundClearance: '8.9 inches (up to 10.7" on ZR2)',
      infotainment: '11.3" Diagonal Center Touchscreen with Google built-in',
      warranty: '3 Years / 36,000 Miles Bumper-to-Bumper'
    }
  },

  {
    id: 'trax',
    name: 'Chevrolet Trax 2RS',
    subtitle: 'Compact Crossover, Massive Value',
    category: 'suv',
    categoryName: 'SUVs & Crossovers',
    price: 21495,
    horsepower: 137,
    engine: '1.2L ECOTEC Turbo I3',
    acceleration: '0-60: 8.6 sec',
    fuelEconomy: '28 / 32 MPG',
    imageUrl: 'https://images.unsplash.com/photo-1604945417112-07c84e9a21fa?auto=format&fit=crop&w=1200&q=80',
    description: 'Redesigned from the ground up: longer, lower, and wider with standard Chevy Safety Assist and 11-inch screen.',
    trims: [
      { name: 'LS', delta: 0 },
      { name: '1RS Sport Exterior', delta: 1700 },
      { name: 'LT Tech Package', delta: 1900 },
      { name: '2RS Racing Style 19" Wheels', delta: 3500 },
      { name: 'ACTIV Rugged Titanium Accents', delta: 3500 }
    ],
    colors: [
      { name: 'Cacti Green', hex: '#637059', delta: 0 },
      { name: 'Nitro Yellow Metallic', hex: '#e8bb24', delta: 395 },
      { name: 'Mosaic Black Metallic', hex: '#161616', delta: 0 },
      { name: 'Summit White', hex: '#f0f3f6', delta: 0 },
      { name: 'Cayenne Orange Metallic', hex: '#cc4b18', delta: 395 }
    ],
    packages: [
      { id: 'driver_confidence_trax', name: 'Driver Confidence Package (Rear Cross Traffic, Lane Change Alert)', price: 795 },
      { id: 'sunroof_trax', name: 'Power Sliding Glass Sunroof', price: 895 }
    ],
    specs: {
      transmission: '6-Speed Automatic',
      drivetrain: 'Front-Wheel Drive (FWD)',
      seating: '5 Passengers',
      cargoSpace: '54.1 cu.ft with 60/40 Split-Folding Rear Seats',
      infotainment: '11" Diagonal HD Color Touchscreen + 8" Driver Information Center',
      warranty: '3 Years / 36,000 Miles'
    }
  },

  {
    id: 'malibu',
    name: 'Chevrolet Malibu LT',
    subtitle: 'Classic American Midsize Sedan',
    category: 'performance',
    categoryName: 'Performance & Sedans',
    price: 25100,
    horsepower: 160,
    engine: '1.5L Turbo 4-Cylinder DOHC',
    acceleration: '0-60: 7.8 sec',
    fuelEconomy: '29 / 36 MPG',
    imageUrl: 'https://images.unsplash.com/photo-1673769615853-59ecd9965fad?auto=format&fit=crop&w=1200&q=80',
    description: 'Sleek aerodynamic styling, spacious interior cabin, and outstanding 36 highway MPG efficiency.',
    trims: [
      { name: 'LS Standard', delta: 0 },
      { name: 'RS Blackout Grille', delta: 1000 },
      { name: '1LT Comfort & Convenience', delta: 3100 },
      { name: '2LT Leather & Bose 9-Speaker', delta: 6400 }
    ],
    colors: [
      { name: 'Mineral Gray Metallic', hex: '#4f555e', delta: 0 },
      { name: 'Mosaic Black Metallic', hex: '#151515', delta: 0 },
      { name: 'Summit White', hex: '#f5f7fa', delta: 0 },
      { name: 'Lakeshore Blue Metallic', hex: '#214068', delta: 0 }
    ],
    packages: [
      { id: 'midnight_edition', name: 'Midnight Edition (19" Black Wheels, Black Bowtie Emblems)', price: 1195 },
      { id: 'driver_confidence_malibu', name: 'Driver Confidence & Cruise Package', price: 1095 }
    ],
    specs: {
      transmission: 'Continuous Variable Transmission (CVT)',
      drivetrain: 'Front-Wheel Drive (FWD)',
      seating: '5 Passengers',
      trunkVolume: '15.7 cu.ft Trunk Cargo Capacity',
      infotainment: 'Chevrolet Infotainment 3 System with 8" Diagonal Color Touchscreen',
      warranty: '3 Years / 36,000 Miles'
    }
  }
];

// Fallback high-res image if an external image fails
const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80';

// Global State
let currentCategory = 'all';
let currentSearch = '';
let currentSort = 'featured';
let activeConfig = {
  vehicle: null,
  selectedTrimIndex: 0,
  selectedColorIndex: 0,
  selectedPackageIds: []
};

// ==========================================
// 2. INITIALIZATION & DOM READY
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initVehicleGrid();
  initCategoryTabs();
  initSearchAndSort();
  initCalculator();
  initMobileNav();
  initHeaderScroll();
  initTestDriveForm();
  updateCategoryCounts();
});

// ==========================================
// 3. VEHICLE SHOWROOM RENDERING
// ==========================================
function initVehicleGrid() {
  renderVehicles();
}

function renderVehicles() {
  const grid = document.getElementById('vehicles-grid');
  const noResults = document.getElementById('no-results');
  const statusText = document.getElementById('visible-count');
  
  if (!grid) return;

  // 1. Filter
  let filtered = CHEVROLET_VEHICLES.filter(car => {
    // Category check
    let matchesCat = (currentCategory === 'all') || 
                     (car.category === currentCategory) ||
                     (currentCategory === 'ev' && (car.category === 'ev' || car.id.includes('ev')));
    
    // Search check
    let q = currentSearch.trim().toLowerCase();
    let matchesSearch = !q || 
                        car.name.toLowerCase().includes(q) || 
                        car.categoryName.toLowerCase().includes(q) ||
                        car.description.toLowerCase().includes(q);

    return matchesCat && matchesSearch;
  });

  // 2. Sort
  if (currentSort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'hp-desc') {
    filtered.sort((a, b) => b.horsepower - a.horsepower);
  } else if (currentSort === 'name-asc') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  // Update counts
  if (statusText) statusText.textContent = filtered.length;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (noResults) noResults.style.display = 'block';
    return;
  }

  if (noResults) noResults.style.display = 'none';

  // Build HTML
  grid.innerHTML = filtered.map(car => `
    <article class="vehicle-card" data-id="${car.id}">
      <div class="card-image-box">
        <span class="card-category-tag ${car.category === 'ev' ? 'ev' : (car.category === 'performance' ? 'performance' : '')}">
          ${car.category === 'ev' ? '<i class="fa-solid fa-bolt"></i> ' : ''}${car.categoryName}
        </span>
        <svg class="card-bowtie-watermark" viewBox="0 0 100 40" fill="none">
          <polygon points="2,13 33,13 38,2 62,2 67,13 98,13 98,27 67,27 62,38 38,38 33,27 2,27" fill="#d4af37"/>
        </svg>
        <img 
          src="${car.imageUrl}" 
          alt="${car.name}" 
          class="card-car-img" 
          loading="lazy"
          onerror="handleImageError(this)"
        >
      </div>

      <div class="card-body">
        <h3 class="card-model-name">${car.name}</h3>
        <p class="card-subtitle">${car.subtitle}</p>

        <div class="card-price-container">
          <span class="price-label">Starting MSRP</span>
          <span class="card-price-value">$${formatNumber(car.price)} <small>USD</small></span>
        </div>

        <div class="card-specs-row">
          <div class="spec-item">
            <i class="fa-solid fa-bolt"></i>
            <span class="spec-value">${car.horsepower} HP</span>
            <span class="spec-name">Power</span>
          </div>
          <div class="spec-item">
            <i class="fa-solid fa-gauge-high"></i>
            <span class="spec-value">${car.acceleration.replace('0-60: ', '').replace('Towing: ', '')}</span>
            <span class="spec-name">${car.acceleration.includes('Towing') ? 'Max Tow' : '0-60'}</span>
          </div>
          <div class="spec-item">
            <i class="fa-solid fa-gas-pump"></i>
            <span class="spec-value">${car.fuelEconomy.split(' ')[0]}</span>
            <span class="spec-name">${car.category === 'ev' ? 'Max Range' : 'Efficiency'}</span>
          </div>
        </div>

        <div class="card-actions-row">
          <button class="btn btn-gold" onclick="openBuildModal('${car.id}')">
            <i class="fa-solid fa-sliders"></i> Build & Price
          </button>
          <button class="btn btn-outline" onclick="openSpecsModal('${car.id}')">
            <i class="fa-solid fa-circle-info"></i> Specs
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

function handleImageError(img) {
  img.onerror = null;
  img.src = FALLBACK_IMAGE;
}

function updateCategoryCounts() {
  const countAll = CHEVROLET_VEHICLES.length;
  const countSuv = CHEVROLET_VEHICLES.filter(c => c.category === 'suv').length;
  const countTruck = CHEVROLET_VEHICLES.filter(c => c.category === 'truck').length;
  const countPerf = CHEVROLET_VEHICLES.filter(c => c.category === 'performance').length;
  const countEv = CHEVROLET_VEHICLES.filter(c => c.category === 'ev' || c.id.includes('ev')).length;

  const elAll = document.getElementById('count-all');
  const elSuv = document.getElementById('count-suv');
  const elTruck = document.getElementById('count-truck');
  const elPerf = document.getElementById('count-performance');
  const elEv = document.getElementById('count-ev');

  if (elAll) elAll.textContent = countAll;
  if (elSuv) elSuv.textContent = countSuv;
  if (elTruck) elTruck.textContent = countTruck;
  if (elPerf) elPerf.textContent = countPerf;
  if (elEv) elEv.textContent = countEv;
}

// ==========================================
// 4. FILTER TABS, SEARCH & SORTING
// ==========================================
function initCategoryTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.dataset.category || 'all';
      renderVehicles();
    });
  });

  // Nav Links matching filters
  const navLinks = document.querySelectorAll('.nav-link[data-filter]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const cat = link.dataset.filter;
      if (cat) {
        setCategoryFilter(cat);
      }
    });
  });
}

function setCategoryFilter(category) {
  currentCategory = category;
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    if (tab.dataset.category === category) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });
  renderVehicles();
  const target = document.getElementById('vehicles');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

function initSearchAndSort() {
  const searchInput = document.getElementById('car-search-input');
  const clearBtn = document.getElementById('clear-search-btn');
  const sortSelect = document.getElementById('car-sort-select');
  const resetBtn = document.getElementById('reset-filters-btn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      if (clearBtn) {
        clearBtn.style.display = currentSearch ? 'block' : 'none';
      }
      renderVehicles();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      currentSearch = '';
      clearBtn.style.display = 'none';
      renderVehicles();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderVehicles();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      currentSearch = '';
      if (clearBtn) clearBtn.style.display = 'none';
      setCategoryFilter('all');
    });
  }
}

// ==========================================
// 5. BUILD & PRICE CONFIGURATOR MODAL
// ==========================================
function openBuildModal(carId) {
  const car = CHEVROLET_VEHICLES.find(c => c.id === carId) || CHEVROLET_VEHICLES[0];
  activeConfig = {
    vehicle: car,
    selectedTrimIndex: 0,
    selectedColorIndex: 0,
    selectedPackageIds: []
  };

  const modal = document.getElementById('build-modal');
  if (!modal) return;

  // Title & Basic Info
  document.getElementById('build-modal-title').textContent = `${car.name}`;
  const imgEl = document.getElementById('build-preview-img');
  imgEl.src = car.imageUrl;
  imgEl.alt = car.name;

  document.getElementById('build-hp-display').textContent = `${car.horsepower} HP`;
  document.getElementById('build-engine-display').textContent = car.engine.split('/')[0].trim();
  document.getElementById('build-fuel-display').textContent = car.fuelEconomy;

  // Trims List
  const trimsContainer = document.getElementById('build-trims-container');
  trimsContainer.innerHTML = car.trims.map((trim, idx) => `
    <div class="trim-option-item ${idx === 0 ? 'selected' : ''}" onclick="selectTrim(${idx})">
      <span class="trim-name"><i class="fa-solid fa-tag"></i> ${trim.name}</span>
      <span class="trim-price-delta">${trim.delta === 0 ? 'Included' : `+$${formatNumber(trim.delta)} USD`}</span>
    </div>
  `).join('');

  // Colors Swatches
  const colorsContainer = document.getElementById('build-colors-container');
  colorsContainer.innerHTML = car.colors.map((color, idx) => `
    <button 
      type="button"
      class="color-swatch-btn ${idx === 0 ? 'selected' : ''}" 
      style="background-color: ${color.hex};"
      title="${color.name}"
      onclick="selectColor(${idx})"
      aria-label="${color.name}"
    ></button>
  `).join('');

  // Packages List
  const packagesContainer = document.getElementById('build-packages-container');
  packagesContainer.innerHTML = car.packages.map(pkg => `
    <label class="package-item">
      <div class="package-label-text">
        <input type="checkbox" value="${pkg.id}" onchange="togglePackage('${pkg.id}', this.checked)">
        <span>${pkg.name}</span>
      </div>
      <span class="package-price">+$${formatNumber(pkg.price)} USD</span>
    </label>
  `).join('');

  // Connect Buttons
  const saveBtn = document.getElementById('save-build-btn');
  saveBtn.onclick = () => saveConfiguration();

  const toTestDriveBtn = document.getElementById('build-to-testdrive-btn');
  toTestDriveBtn.onclick = () => {
    closeBuildModal();
    openTestDriveModal(car.id);
  };

  updateConfigPriceCalculation();

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeBuildModal() {
  const modal = document.getElementById('build-modal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

function selectTrim(idx) {
  activeConfig.selectedTrimIndex = idx;
  const items = document.querySelectorAll('.trim-option-item');
  items.forEach((item, i) => {
    if (i === idx) item.classList.add('selected');
    else item.classList.remove('selected');
  });
  updateConfigPriceCalculation();
}

function selectColor(idx) {
  activeConfig.selectedColorIndex = idx;
  const swatches = document.querySelectorAll('.color-swatch-btn');
  swatches.forEach((sw, i) => {
    if (i === idx) sw.classList.add('selected');
    else sw.classList.remove('selected');
  });

  const color = activeConfig.vehicle.colors[idx];
  const label = document.getElementById('selected-color-name');
  const badge = document.getElementById('build-color-badge');
  if (label) {
    label.textContent = `Color: ${color.name} (${color.delta > 0 ? `+$${formatNumber(color.delta)} USD` : 'Included'})`;
  }
  if (badge) {
    badge.textContent = color.name;
    badge.style.borderLeft = `4px solid ${color.hex}`;
  }

  updateConfigPriceCalculation();
}

function togglePackage(pkgId, isChecked) {
  if (isChecked) {
    if (!activeConfig.selectedPackageIds.includes(pkgId)) {
      activeConfig.selectedPackageIds.push(pkgId);
    }
  } else {
    activeConfig.selectedPackageIds = activeConfig.selectedPackageIds.filter(id => id !== pkgId);
  }
  updateConfigPriceCalculation();
}

function updateConfigPriceCalculation() {
  const car = activeConfig.vehicle;
  if (!car) return;

  const basePrice = car.price;
  const trimDelta = car.trims[activeConfig.selectedTrimIndex]?.delta || 0;
  const colorDelta = car.colors[activeConfig.selectedColorIndex]?.delta || 0;

  let packDelta = 0;
  activeConfig.selectedPackageIds.forEach(pkgId => {
    const pkg = car.packages.find(p => p.id === pkgId);
    if (pkg) packDelta += pkg.price;
  });

  const totalPrice = basePrice + trimDelta + colorDelta + packDelta;

  document.getElementById('build-base-price').textContent = `$${formatNumber(basePrice)}`;
  document.getElementById('build-trim-price').textContent = `+$${formatNumber(trimDelta + colorDelta)}`;
  document.getElementById('build-pack-price').textContent = `+$${formatNumber(packDelta)}`;
  document.getElementById('build-total-price').textContent = `$${formatNumber(totalPrice)} USD`;
  document.getElementById('save-btn-price').textContent = formatNumber(totalPrice);
}

function saveConfiguration() {
  const car = activeConfig.vehicle;
  const trim = car.trims[activeConfig.selectedTrimIndex]?.name || 'Standard';
  const color = car.colors[activeConfig.selectedColorIndex]?.name || 'Standard';
  const price = document.getElementById('build-total-price').textContent;

  showToast(
    'Configuration Saved!',
    `Your custom ${car.name} (${trim}, ${color}) estimated at ${price} has been saved to your Chevrolet profile.`
  );
  closeBuildModal();
}

// Quick build button in header
const quickBuildBtn = document.getElementById('quick-build-nav-btn');
if (quickBuildBtn) {
  quickBuildBtn.addEventListener('click', () => {
    openBuildModal('corvette_z06');
  });
}

// ==========================================
// 6. QUICK SPECS MODAL
// ==========================================
function openSpecsModal(carId) {
  const car = CHEVROLET_VEHICLES.find(c => c.id === carId) || CHEVROLET_VEHICLES[0];
  const modal = document.getElementById('specs-modal');
  if (!modal) return;

  document.getElementById('specs-modal-title').textContent = `${car.name} Specs`;

  const body = document.getElementById('specs-modal-body');
  body.innerHTML = `
    <div style="display: flex; gap: 20px; align-items: center; margin-bottom: 24px;">
      <img src="${car.imageUrl}" alt="${car.name}" style="width: 140px; height: 90px; object-fit: cover; border-radius: 8px; border: 1px solid rgba(255,255,255,0.15);" onerror="handleImageError(this)">
      <div>
        <h4 style="font-family: var(--font-heading); font-size: 1.15rem; color: #fff; margin-bottom: 4px;">${car.name}</h4>
        <div style="color: var(--color-gold); font-weight: 800; font-size: 1.25rem;">Starting at $${formatNumber(car.price)} USD</div>
        <p style="font-size: 0.8125rem; color: var(--color-text-muted); margin-top: 4px;">${car.description}</p>
      </div>
    </div>

    <div class="specs-detail-grid">
      <div class="spec-detail-box">
        <div class="spec-title"><i class="fa-solid fa-bolt text-gold"></i> Engine / Powertrain</div>
        <div class="spec-value">${car.engine}</div>
      </div>
      <div class="spec-detail-box">
        <div class="spec-title"><i class="fa-solid fa-gauge text-gold"></i> Horsepower</div>
        <div class="spec-value">${car.horsepower} HP @ official tune</div>
      </div>
      <div class="spec-detail-box">
        <div class="spec-title"><i class="fa-solid fa-gears text-gold"></i> Transmission</div>
        <div class="spec-value">${car.specs.transmission}</div>
      </div>
      <div class="spec-detail-box">
        <div class="spec-title"><i class="fa-solid fa-road text-gold"></i> Drivetrain</div>
        <div class="spec-value">${car.specs.drivetrain}</div>
      </div>
      <div class="spec-detail-box">
        <div class="spec-title"><i class="fa-solid fa-users text-gold"></i> Seating Capacity</div>
        <div class="spec-value">${car.specs.seating}</div>
      </div>
      <div class="spec-detail-box">
        <div class="spec-title"><i class="fa-solid fa-gas-pump text-gold"></i> Fuel Economy / Range</div>
        <div class="spec-value">${car.fuelEconomy}</div>
      </div>
      <div class="spec-detail-box" style="grid-column: span 2;">
        <div class="spec-title"><i class="fa-solid fa-tv text-gold"></i> Infotainment & Tech</div>
        <div class="spec-value">${car.specs.infotainment}</div>
      </div>
      <div class="spec-detail-box" style="grid-column: span 2;">
        <div class="spec-title"><i class="fa-solid fa-shield-heart text-gold"></i> Factory GM Warranty</div>
        <div class="spec-value">${car.specs.warranty}</div>
      </div>
    </div>
  `;

  const buildBtn = document.getElementById('specs-to-build-btn');
  buildBtn.onclick = () => {
    closeSpecsModal();
    openBuildModal(car.id);
  };

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeSpecsModal() {
  const modal = document.getElementById('specs-modal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

// ==========================================
// 7. PAYMENT & FINANCING CALCULATOR
// ==========================================
function initCalculator() {
  const carSelect = document.getElementById('calc-car-select');
  const priceInput = document.getElementById('calc-price-input');
  const priceSlider = document.getElementById('calc-price-slider');
  const downInput = document.getElementById('calc-down-input');
  const downSlider = document.getElementById('calc-down-slider');
  const tradeInput = document.getElementById('calc-trade-input');
  const aprInput = document.getElementById('calc-apr-input');
  const aprSlider = document.getElementById('calc-apr-slider');
  const termButtons = document.querySelectorAll('.term-btn');

  let currentTermMonths = 60;

  // Populate car select
  if (carSelect) {
    carSelect.innerHTML = CHEVROLET_VEHICLES.map(car => `
      <option value="${car.id}" data-price="${car.price}">
        ${car.name} — Starting at $${formatNumber(car.price)} USD
      </option>
    `).join('');

    carSelect.addEventListener('change', () => {
      const selectedOption = carSelect.selectedOptions[0];
      const price = parseInt(selectedOption.dataset.price, 10);
      priceInput.value = price;
      priceSlider.value = price;
      downInput.value = Math.round(price * 0.15); // Suggest 15% down
      downSlider.value = Math.round(price * 0.15);
      recalculateFinancing();
    });
  }

  // Sync Price
  if (priceInput && priceSlider) {
    priceInput.addEventListener('input', () => {
      priceSlider.value = priceInput.value;
      recalculateFinancing();
    });
    priceSlider.addEventListener('input', () => {
      priceInput.value = priceSlider.value;
      recalculateFinancing();
    });
  }

  // Sync Down Payment
  if (downInput && downSlider) {
    downInput.addEventListener('input', () => {
      downSlider.value = downInput.value;
      recalculateFinancing();
    });
    downSlider.addEventListener('input', () => {
      downInput.value = downSlider.value;
      recalculateFinancing();
    });
  }

  // Trade-in
  if (tradeInput) {
    tradeInput.addEventListener('input', recalculateFinancing);
  }

  // Sync APR
  if (aprInput && aprSlider) {
    aprInput.addEventListener('input', () => {
      aprSlider.value = aprInput.value;
      recalculateFinancing();
    });
    aprSlider.addEventListener('input', () => {
      aprInput.value = aprSlider.value;
      recalculateFinancing();
    });
  }

  // Term Buttons
  termButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      termButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTermMonths = parseInt(btn.dataset.term, 10);
      recalculateFinancing();
    });
  });

  function recalculateFinancing() {
    const price = parseFloat(priceInput.value) || 0;
    const down = parseFloat(downInput.value) || 0;
    const trade = parseFloat(tradeInput.value) || 0;
    const apr = parseFloat(aprInput.value) || 0;
    const months = currentTermMonths;

    const totalDown = down + trade;
    const principal = Math.max(0, price - totalDown);

    let monthlyPayment = 0;
    let totalInterest = 0;

    if (principal > 0 && months > 0) {
      if (apr === 0) {
        monthlyPayment = principal / months;
      } else {
        const monthlyRate = (apr / 100) / 12;
        monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
      }
      totalInterest = Math.max(0, (monthlyPayment * months) - principal);
    }

    const totalPaid = principal + totalInterest;

    // Update Result UI
    document.getElementById('res-monthly-payment').textContent = formatNumber(Math.round(monthlyPayment));
    document.getElementById('res-term-display').textContent = months;
    document.getElementById('res-apr-display').textContent = `${apr.toFixed(1)}%`;
    document.getElementById('res-car-price').textContent = `$${formatNumber(price)}`;
    document.getElementById('res-down-total').textContent = `-$${formatNumber(totalDown)}`;
    document.getElementById('res-loan-amount').textContent = `$${formatNumber(Math.round(principal))}`;
    document.getElementById('res-total-interest').textContent = `$${formatNumber(Math.round(totalInterest))}`;
    document.getElementById('res-total-paid').textContent = `$${formatNumber(Math.round(totalPaid))}`;
  }

  // Calculator CTA Buttons
  const applyBtn = document.getElementById('calc-apply-btn');
  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      const p = document.getElementById('res-monthly-payment').textContent;
      showToast('Pre-Approval Initiated', `Your estimated financing application for $${p}/mo has been queued with Chevrolet Financial Services.`);
    });
  }

  const calcTestDriveBtn = document.getElementById('calc-test-drive-btn');
  if (calcTestDriveBtn) {
    calcTestDriveBtn.addEventListener('click', () => {
      const selectedId = carSelect ? carSelect.value : null;
      openTestDriveModal(selectedId);
    });
  }

  // Initial Run
  recalculateFinancing();
}

// ==========================================
// 8. TEST DRIVE BOOKING MODAL
// ==========================================
function openTestDriveModal(selectedCarId) {
  const modal = document.getElementById('testdrive-modal');
  const select = document.getElementById('td-vehicle-select');
  const dateInput = document.getElementById('td-date-input');

  if (select) {
    select.innerHTML = CHEVROLET_VEHICLES.map(car => `
      <option value="${car.id}" ${car.id === selectedCarId ? 'selected' : ''}>
        ${car.name} (${car.categoryName})
      </option>
    `).join('');
  }

  // Default to tomorrow's date
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.min = tomorrow.toISOString().split('T')[0];
    dateInput.value = tomorrow.toISOString().split('T')[0];
  }

  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}

function closeTestDriveModal() {
  const modal = document.getElementById('testdrive-modal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

function initTestDriveForm() {
  const form = document.getElementById('test-drive-form');
  const topBtn = document.getElementById('top-test-drive-btn');

  if (topBtn) {
    topBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openTestDriveModal();
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const carSelect = document.getElementById('td-vehicle-select');
      const carName = carSelect.options[carSelect.selectedIndex].text;
      const date = document.getElementById('td-date-input').value;
      const time = document.getElementById('td-time-select').value;
      const name = document.getElementById('td-name-input').value;

      const confirmationCode = 'GM-' + Math.floor(100000 + Math.random() * 900000);

      closeTestDriveModal();
      form.reset();

      showToast(
        'Test Drive Reserved!',
        `Thank you ${name}! Your test drive for ${carName} is scheduled for ${date} at ${time}. Confirmation Code: ${confirmationCode}.`
      );
    });
  }
}

// ==========================================
// 9. MOBILE NAVIGATION & SCROLL EVENTS
// ==========================================
function initMobileNav() {
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      menu.classList.toggle('open');
    });

    // Close menu when clicking any nav link
    const links = menu.querySelectorAll('.nav-link');
    links.forEach(l => {
      l.addEventListener('click', () => {
        toggle.classList.remove('open');
        menu.classList.remove('open');
      });
    });
  }
}

function initHeaderScroll() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });
}

// Close modals on Esc key or clicking backdrop
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeBuildModal();
    closeSpecsModal();
    closeTestDriveModal();
  }
});

document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      backdrop.classList.remove('open');
      backdrop.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  });
});

// ==========================================
// 10. TOAST NOTIFICATION SYSTEM
// ==========================================
function showToast(title, message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i class="fa-solid fa-circle-check toast-icon"></i>
    <div>
      <h4 class="toast-title">${title}</h4>
      <p class="toast-message">${message}</p>
    </div>
  `;

  container.appendChild(toast);

  // Trigger animation
  setTimeout(() => toast.classList.add('show'), 20);

  // Auto remove after 5s
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 5000);
}

// Helper: Format Number with commas
function formatNumber(num) {
  if (isNaN(num)) return '0';
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
