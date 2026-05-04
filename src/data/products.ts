import type {
  CPU, Cooler, GPU, Rig, Case, Memory, Monitor, Mouse, Keyboard, Product, ProductCategory,
} from '@/types'

// ─── CPUs ────────────────────────────────────────────────────────────────────

export const CPUs: CPU[] = [
  {
    id: 6, category: 'CPUs', brand: 'Intel', model: 'i7-11700',
    baseClock: 2.5, boostClock: 4.8, cores: 8, threads: 16, generation: 11, socket: 'LGA 1200',
    description: 'An affordable mid-range 4.9GHz 8-Core CPU',
    price: 199.99, stock: 21,
    image: 'https://res.cloudinary.com/dvrvxd0ag/image/upload/v1777768048/i7-11th_dxyq1z.jpg',
    tags: 'cpu, processor, chip',
  },
  {
    id: 7, category: 'CPUs', brand: 'Intel', model: 'i9-13900K',
    baseClock: 3.0, boostClock: 5.7, cores: 24, threads: 32, generation: 13, socket: 'LGA 1700',
    description: 'A 5.8GHz 24-Core powerhouse for any occasion',
    price: 568.99, stock: 11,
    image: 'https://res.cloudinary.com/dvrvxd0ag/image/upload/v1777768049/i9-13th_etc3pf.jpg',
    tags: 'cpu, processor, chip',
  },
  {
    id: 8, category: 'CPUs', brand: 'AMD', model: 'Ryzen 9 5950X',
    baseClock: 3.4, boostClock: 4.9, cores: 16, threads: 32, generation: 4, socket: 'AM4',
    description: 'A 3.4GHz 16-Core powerhouse for any occasion',
    price: 444.99, stock: 36,
    image: '',
    tags: 'cpu, processor, chip',
  },
  {
    id: 9, category: 'CPUs', brand: 'AMD', model: 'Ryzen 7 5800X',
    baseClock: 3.8, boostClock: 4.7, cores: 8, threads: 16, generation: 4, socket: 'AM4',
    description: 'An affordable mid-range 3.8GHz 8-core CPU',
    price: 329.99, stock: 22,
    image: 'https://res.cloudinary.com/dvrvxd0ag/image/upload/v1777768050/R7-5000_coeltx.jpg',
    tags: 'cpu, processor, chip',
  },
  {
    id: 10, category: 'CPUs', brand: 'Intel', model: 'i5-10400',
    baseClock: 2.9, boostClock: 4.3, cores: 6, threads: 12, generation: 10, socket: 'LGA 1200',
    description: 'An affordable mid-range 2.9GHz 6-Core CPU',
    price: 131.99, stock: 19,
    image: 'https://res.cloudinary.com/dvrvxd0ag/image/upload/v1777768047/i5-10th_m1pu2v.jpg',
    tags: 'cpu, processor, chip',
  },
]

// ─── Coolers ─────────────────────────────────────────────────────────────────

export const Coolers: Cooler[] = [
  {
    id: 16, category: 'Coolers', brand: 'CORSAIR', model: 'iCUE Hydro Series H60X RGB ELITE',
    coolingType: 'liquid', connector: 'PWM', noise: 28, lighting: 'RGB',
    socket: 'AM4, AM5, LGA1700, LGA1200, LGA1150, LGA1151, LGA1155, LGA2066, LGA2011',
    description: 'Powerful and compact',
    price: 79.99, stock: 18,
    image: 'https://firebasestorage.googleapis.com/v0/b/stand4-electronics.appspot.com/o/coolers%2FCORSAIRH60X.jpg?alt=media&token=dbeb5ca2-5aca-4c0a-9376-e4553ca4f30a',
    tags: 'cooling, cooler, radiator',
  },
  {
    id: 17, category: 'Coolers', brand: 'MSI', model: 'MAG CORELIQUID 240R V2',
    coolingType: 'liquid', connector: 'Molex 4-Pin to 4-Pin', noise: 14.3, lighting: 'RGB',
    socket: 'LGA2066, LGA2011-v3, LGA1700, LGA1200, LGA1156, LGA1155, AM4, AM3+, AM3',
    description: 'AIO cooler with a small light show!',
    price: 93.99, stock: 5,
    image: 'https://firebasestorage.googleapis.com/v0/b/stand4-electronics.appspot.com/o/coolers%2FMSIM240RV2.jpg?alt=media&token=97cad378-10cf-4fc2-b39b-8a405988841d',
    tags: 'cooling, cooler, radiator',
  },
  {
    id: 18, category: 'Coolers', brand: 'CORSAIR', model: 'iCUE H150i ELITE LCD XT',
    coolingType: 'liquid', connector: 'PWM', noise: 14.3, lighting: 'RGB',
    socket: 'AM4, AM5, LGA1700, LGA1200, LGA1150, LGA1151, LGA1155, LGA2011, LGA2066, sTRX4',
    description: 'The best that money can buy!',
    price: 299.99, stock: 31,
    image: 'https://firebasestorage.googleapis.com/v0/b/stand4-electronics.appspot.com/o/coolers%2FH150i.jpg?alt=media&token=00821d54-e628-46e8-b0bd-62b0f8dd9a7e',
    tags: 'cooling, cooler, radiator',
  },
  {
    id: 19, category: 'Coolers', brand: 'Thermaltake', model: 'TH360 ARGB',
    coolingType: 'liquid', connector: '3 PIN', noise: 28.2, lighting: 'RGB',
    socket: 'LGA2066, LGA1700, LGA1200, LGA1155, LGA1150, AM4, AM3+, AM3, AM2+, FM2, FM1',
    description: 'AIO cooler with a light show!',
    price: 101.99, stock: 27,
    image: 'https://firebasestorage.googleapis.com/v0/b/stand4-electronics.appspot.com/o/coolers%2FTH360.jpg?alt=media&token=4dee902d-6af7-46de-b247-fa154bdd8d3b',
    tags: 'cooling, cooler, radiator',
  },
  {
    id: 20, category: 'Coolers', brand: 'Thermaltake', model: 'UX200 5V',
    coolingType: 'air', connector: '4 PIN', noise: 26, lighting: 'RGB',
    socket: 'LGA2066, LGA1700, LGA1200, LGA1155, LGA1150, AM4, AM3+, FM2, FM1',
    description: 'Basic with a small light show',
    price: 39.99, stock: 39,
    image: 'https://firebasestorage.googleapis.com/v0/b/stand4-electronics.appspot.com/o/coolers%2FUX2005V.jpg?alt=media&token=51a56be6-3fea-4521-aac7-b8a58f9b56ad',
    tags: 'cooling, cooler, radiator',
  },
  {
    id: 21, category: 'Coolers', brand: 'Cooler Master', model: 'Hyper 212 RGB Black Edition',
    coolingType: 'air', connector: 'PWM', noise: 28, lighting: 'none',
    socket: 'LGA1700, LGA1200, LGA2066, LGA2011-v3, LGA1151, LGA1150, AM4, AM3+, AM2+, FM2+, FM1',
    description: 'The basic and modest.',
    price: 54.99, stock: 25,
    image: 'https://firebasestorage.googleapis.com/v0/b/stand4-electronics.appspot.com/o/coolers%2FCMBasic.jpg?alt=media&token=5b1b569a-f6a3-4604-af21-12272f850fc5',
    tags: 'cooling, cooler, radiator',
  },
  {
    id: 22, category: 'Coolers', brand: 'NZXT', model: 'Kraken Z53',
    coolingType: 'air', connector: 'PWM', noise: 22, lighting: 'none',
    socket: 'LGA1700, LGA1200, LGA2066, LGA2011-v3, LGA1151, LGA1150, AM4, AM3+, AM2+, FM2+, FM1',
    description: 'The basic and modest.',
    price: 234.99, stock: 1511,
    image: 'https://firebasestorage.googleapis.com/v0/b/stand4-electronics.appspot.com/o/coolers%2FKRAKEN.jpg?alt=media&token=68375b0e-6f8b-4d1c-b788-82e4852bc154',
    tags: 'cooling, cooler, radiator',
  },
]

// ─── GPUs ─────────────────────────────────────────────────────────────────────

export const GPUs: GPU[] = [
  {
    id: 11, category: 'GPUs', brand: 'GIGABYTE', model: '4090',
    baseClock: 2.23, boostClock: 2.54, ram: 24, ramType: 'GDDR6X',
    CUDAcores: 16384, gpuInterface: 'PCI Express 4.0', maxResolution: '8K (4320p)',
    rendering: 'DLSS 3, Ray Tracing', DisplayPort: 3, HDMI: 1, displays: 4,
    description: 'The best that money can buy!',
    price: 1749.99, stock: 14,
    image: 'https://firebasestorage.googleapis.com/v0/b/stand4-electronics.appspot.com/o/GPUs%2FGIGABYTE4090.jpg?alt=media&token=2c819a5a-6ed4-45cf-b7b5-2b83801c66d0',
    tags: 'gpu, graphics',
  },
  {
    id: 12, category: 'GPUs', brand: 'ASUS', model: '4090',
    baseClock: 2.56, boostClock: 2.59, ram: 24, ramType: 'GDDR6X',
    CUDAcores: 16384, gpuInterface: 'PCI Express 4.0', maxResolution: '8K (4320p)',
    rendering: 'DLSS 3, Ray Tracing', DisplayPort: 3, HDMI: 2, displays: 4,
    description: 'The best that money can buy!',
    price: 1967.99, stock: 16,
    image: 'https://firebasestorage.googleapis.com/v0/b/stand4-electronics.appspot.com/o/GPUs%2FASUS4090.jpg?alt=media&token=8ba4a8d7-f835-455d-b367-560b9606b632',
    tags: 'gpu, graphics',
  },
  {
    id: 13, category: 'GPUs', brand: 'MSI', model: '4070 Ti',
    baseClock: 2.64, boostClock: 2.65, ram: 12, ramType: 'GDDR6X',
    CUDAcores: 7680, gpuInterface: 'PCI Express 4.0', maxResolution: '4K (2160p)',
    rendering: 'DLSS 3, Ray Tracing', DisplayPort: 3, HDMI: 1, displays: 4,
    description: 'Excellent performance for the value!',
    price: 799.99, stock: 10,
    image: 'https://firebasestorage.googleapis.com/v0/b/stand4-electronics.appspot.com/o/GPUs%2FMSI4070ti.jpg?alt=media&token=293a3517-4577-4e05-b602-5a37e8a143f5',
    tags: 'gpu, graphics',
  },
  {
    id: 14, category: 'GPUs', brand: 'PNY', model: '3050',
    baseClock: 1.552, boostClock: 1.777, ram: 8, ramType: 'GDDR6',
    CUDAcores: 2560, gpuInterface: 'PCI Express 4.0', maxResolution: '4K (2160p)',
    rendering: 'DLSS, Ray Tracing', DisplayPort: 3, HDMI: 1, displays: 4,
    description: 'A budget card for the occasional player!',
    price: 239.99, stock: 5,
    image: 'https://firebasestorage.googleapis.com/v0/b/stand4-electronics.appspot.com/o/GPUs%2FPNY3050.jpg?alt=media&token=8c6f3039-c461-4ade-ba79-9d6539e36386',
    tags: 'gpu, graphics',
  },
  {
    id: 15, category: 'GPUs', brand: 'PNY', model: '4070 Ti',
    baseClock: 2.31, boostClock: 2.61, ram: 12, ramType: 'GDDR6X',
    CUDAcores: 7680, gpuInterface: 'PCI Express 4.0', maxResolution: '4K (2160p)',
    rendering: 'DLSS 3, Ray Tracing', DisplayPort: 3, HDMI: 1, displays: 4,
    description: 'Excellent performance for the value!',
    price: 799.99, stock: 11,
    image: 'https://firebasestorage.googleapis.com/v0/b/stand4-electronics.appspot.com/o/GPUs%2FPNY4070ti.jpg?alt=media&token=d2a152e7-eb04-4982-b60a-982628045c0c',
    tags: 'gpu, graphics',
  },
]

// ─── Pre-built Rigs ───────────────────────────────────────────────────────────

export const Rigs: Rig[] = [
  {
    id: 23, category: 'Rigs', brand: 'Artic', model: 'i4790',
    CPU: 'Intel Core i9-13900K', GPU: 'RTX 4090', memory: 64, storage: 3,
    cooler: 'AIO TH360 ARGB',
    description: 'An EPIC gaming rig with no holds barred',
    price: 3999.99, stock: 40,
    image: 'https://firebasestorage.googleapis.com/v0/b/stand4-electronics.appspot.com/o/rigs%2F6528756_sd.jpg?alt=media&token=669893ab-c82a-4160-ac46-c0687b7eafdc',
    tags: 'PC, rig, gaming, computer',
  },
  {
    id: 24, category: 'Rigs', brand: 'CORSAIR', model: 'VENGEANCE i7400',
    CPU: 'Intel Core i5-10400', GPU: 'RTX 3050', memory: 32, storage: 1,
    cooler: 'iCUE Hydro Series H60X RGB ELITE',
    description: 'A respectable mid-range gaming desktop',
    price: 1649.99, stock: 33,
    image: 'https://firebasestorage.googleapis.com/v0/b/stand4-electronics.appspot.com/o/rigs%2FVENGEANCE.jpg?alt=media&token=be1dc6cd-bc93-443a-a5e0-3f6260bb0ec8',
    tags: 'PC, rig, gaming, computer',
  },
  {
    id: 25, category: 'Rigs', brand: 'NZXT', model: 'H5 Elite',
    CPU: 'Ryzen 7 5000', GPU: 'RTX 4070 Ti', memory: 32, storage: 1,
    cooler: 'iCUE Hydro Series H60X RGB ELITE',
    description: 'A respectable mid-range gaming desktop',
    price: 1649.99, stock: 43,
    image: 'https://firebasestorage.googleapis.com/v0/b/stand4-electronics.appspot.com/o/rigs%2FNZXT.jpg?alt=media&token=aed73175-32e0-477e-84fb-3f7bd46866bc',
    tags: 'PC, rig, gaming, computer',
  },
  {
    id: 26, category: 'Rigs', brand: 'HP', model: 'Omen',
    CPU: 'Intel Core i3-13100F', GPU: 'GTX 1660', memory: 8, storage: 1,
    cooler: 'Kraken Z53',
    description: 'Entry level gamer',
    price: 1649.99, stock: 11,
    image: 'https://firebasestorage.googleapis.com/v0/b/stand4-electronics.appspot.com/o/rigs%2FOMEN.jpg?alt=media&token=36d97fff-486a-4d99-8130-c2ca56c710eb',
    tags: 'PC, rig, gaming, computer',
  },
]

// ─── Cases ────────────────────────────────────────────────────────────────────

export const Cases: Case[] = [
  {
    id: 1, category: 'cases', brand: 'ThermalTake', model: 'P3',
    size: 'mid-tower', motherboard: 'ATX', style: 'open',
    materials: 'metal, plastic, tempered glass', dimensions: '20.2in x 13.1in x 18.5in',
    placement: 'horizontal, vertical, wall',
    description: 'A sleek open case to showcase your gear.',
    price: 124.99, stock: 15,
    image: 'https://firebasestorage.googleapis.com/v0/b/stand4-electronics.appspot.com/o/cases%2FTMTP3.jpg?alt=media&token=6207eb25-5717-4e16-aeeb-b83e2cf5b71c',
    tags: 'case, chassis',
  },
  {
    id: 2, category: 'cases', brand: 'ThermalTake', model: 'P6',
    size: 'mid-tower', motherboard: 'ATX', style: 'open or closed',
    materials: 'metal, plastic, tempered glass', dimensions: '15.7in x 12.9in x 23.7in',
    placement: 'horizontal, vertical, wall',
    description: 'A sleek transparent case to showcase your gear.',
    price: 199.99, stock: 25,
    image: 'https://firebasestorage.googleapis.com/v0/b/stand4-electronics.appspot.com/o/cases%2FTMTP6.jpg?alt=media&token=6a0ff53c-b159-4889-ae4a-a9381b1fb1de',
    tags: 'case, chassis',
  },
  {
    id: 3, category: 'cases', brand: 'ThermalTake', model: 'V',
    size: 'mid-tower', motherboard: 'ATX', style: 'enclosed',
    materials: 'metal, plastics', dimensions: '20.4in x 9.5in x 21.5in',
    placement: 'horizontal',
    description: 'A sleek basic case for the minimalist.',
    price: 49.99, stock: 20,
    image: 'https://firebasestorage.googleapis.com/v0/b/stand4-electronics.appspot.com/o/cases%2FTMTV.jpg?alt=media&token=95360127-9f09-4045-b070-2d020e944179',
    tags: 'case, chassis',
  },
  {
    id: 4, category: 'cases', brand: 'NZXT', model: 'H5',
    size: 'mid-tower', motherboard: 'ATX', style: 'enclosed',
    materials: 'metal, plastics', dimensions: '17.56in x 8.94in x 21.5in',
    placement: 'horizontal',
    description: 'A sleek transparent case to showcase your gear.',
    price: 94.99, stock: 35,
    image: 'https://firebasestorage.googleapis.com/v0/b/stand4-electronics.appspot.com/o/cases%2FNZXTH5.jpg?alt=media&token=9ed12295-910c-4437-8362-4c50e1d975d4',
    tags: 'case, chassis',
  },
  {
    id: 5, category: 'cases', brand: 'Corsair', model: '400D',
    size: 'mid-tower', motherboard: 'ATX', style: 'enclosed',
    materials: 'metal, plastics', dimensions: '18.35in x 9.06in x 17.83in',
    placement: 'horizontal',
    description: 'A sleek open case to showcase your gear.',
    price: 124.99, stock: 22,
    image: 'https://firebasestorage.googleapis.com/v0/b/stand4-electronics.appspot.com/o/cases%2FCORSAIR400D.jpg?alt=media&token=b90cb5de-dca9-455d-b333-0b88917409a9',
    tags: 'case, chassis',
  },
]

// ─── Memory / RAM ─────────────────────────────────────────────────────────────

export const MemoryRAM: Memory[] = [
  {
    id: 27, category: 'Memory', brand: 'Corsair', model: 'Vengeance LPX 16GB',
    capacity: 16, speed: 3200, type: 'DDR4', modules: '2x8GB', latency: 'CL16', lighting: 'none',
    description: 'Low-profile DDR4-3200 kit, ideal for tight builds and ITX cases.',
    price: 49.99, stock: 42,
    image: 'https://placehold.co/400x300/0f172a/3b82f6?text=Corsair+Vengeance+LPX',
    tags: 'ram, memory, ddr4',
  },
  {
    id: 28, category: 'Memory', brand: 'G.Skill', model: 'Trident Z5 RGB 32GB',
    capacity: 32, speed: 6000, type: 'DDR5', modules: '2x16GB', latency: 'CL30', lighting: 'RGB',
    description: 'Next-gen DDR5-6000 with striking RGB for Intel 12th/13th and AMD Ryzen 7000 builds.',
    price: 129.99, stock: 19,
    image: 'https://placehold.co/400x300/0f172a/3b82f6?text=G.Skill+Trident+Z5',
    tags: 'ram, memory, ddr5, rgb',
  },
  {
    id: 29, category: 'Memory', brand: 'Kingston', model: 'Fury Beast 16GB',
    capacity: 16, speed: 3600, type: 'DDR4', modules: '2x8GB', latency: 'CL17', lighting: 'none',
    description: 'Plug-and-play DDR4-3600 with automatic overclocking via Intel XMP and AMD EXPO.',
    price: 44.99, stock: 55,
    image: 'https://placehold.co/400x300/0f172a/3b82f6?text=Kingston+Fury+Beast',
    tags: 'ram, memory, ddr4',
  },
  {
    id: 30, category: 'Memory', brand: 'Crucial', model: 'Ballistix 32GB',
    capacity: 32, speed: 3200, type: 'DDR4', modules: '2x16GB', latency: 'CL16', lighting: 'RGB',
    description: 'Reliable DDR4-3200 kit with subtle RGB and tight CL16 timings.',
    price: 89.99, stock: 30,
    image: 'https://placehold.co/400x300/0f172a/3b82f6?text=Crucial+Ballistix',
    tags: 'ram, memory, ddr4, rgb',
  },
  {
    id: 31, category: 'Memory', brand: 'G.Skill', model: 'Ripjaws V 64GB',
    capacity: 64, speed: 3600, type: 'DDR4', modules: '2x32GB', latency: 'CL18', lighting: 'none',
    description: 'Maximum DDR4 capacity for workstations, content creation, and heavy multitasking.',
    price: 149.99, stock: 12,
    image: 'https://placehold.co/400x300/0f172a/3b82f6?text=G.Skill+Ripjaws+V',
    tags: 'ram, memory, ddr4',
  },
]

// ─── Monitors ─────────────────────────────────────────────────────────────────

export const Monitors: Monitor[] = [
  {
    id: 32, category: 'Monitors', brand: 'LG', model: '27GP850-B',
    size: 27, resolution: '2560x1440 (QHD)', refreshRate: 165, panelType: 'IPS',
    responseTime: 1, hdmiPorts: 1, displayPorts: 1, curved: false, aspectRatio: '16:9',
    description: 'Fast 165Hz QHD IPS panel with Nano IPS technology for wide color coverage.',
    price: 299.99, stock: 20,
    image: 'https://placehold.co/400x300/0f172a/3b82f6?text=LG+27GP850-B',
    tags: 'monitor, display, 1440p, ips',
  },
  {
    id: 33, category: 'Monitors', brand: 'Samsung', model: 'Odyssey G5 27"',
    size: 27, resolution: '2560x1440 (QHD)', refreshRate: 165, panelType: 'VA',
    responseTime: 1, hdmiPorts: 1, displayPorts: 1, curved: true, aspectRatio: '16:9',
    description: '1000R curved VA panel with deep blacks and immersive gaming experience.',
    price: 279.99, stock: 17,
    image: 'https://placehold.co/400x300/0f172a/3b82f6?text=Samsung+Odyssey+G5',
    tags: 'monitor, display, 1440p, curved, va',
  },
  {
    id: 34, category: 'Monitors', brand: 'ASUS', model: 'ROG Swift PG248QP',
    size: 24, resolution: '1920x1080 (FHD)', refreshRate: 540, panelType: 'IPS',
    responseTime: 0.2, hdmiPorts: 1, displayPorts: 1, curved: false, aspectRatio: '16:9',
    description: 'World\'s fastest 540Hz IPS monitor, built for competitive esports.',
    price: 699.99, stock: 8,
    image: 'https://placehold.co/400x300/0f172a/3b82f6?text=ASUS+ROG+PG248QP',
    tags: 'monitor, display, 1080p, 540hz, esports',
  },
  {
    id: 35, category: 'Monitors', brand: 'Dell', model: 'U3223QE',
    size: 32, resolution: '3840x2160 (4K UHD)', refreshRate: 60, panelType: 'IPS',
    responseTime: 5, hdmiPorts: 1, displayPorts: 1, curved: false, aspectRatio: '16:9',
    description: 'Professional 4K IPS with USB-C 90W charging — the ultimate productivity display.',
    price: 649.99, stock: 11,
    image: 'https://placehold.co/400x300/0f172a/3b82f6?text=Dell+U3223QE',
    tags: 'monitor, display, 4k, professional',
  },
  {
    id: 36, category: 'Monitors', brand: 'AOC', model: 'Q27G2S',
    size: 27, resolution: '2560x1440 (QHD)', refreshRate: 165, panelType: 'IPS',
    responseTime: 1, hdmiPorts: 2, displayPorts: 1, curved: false, aspectRatio: '16:9',
    description: 'Budget-friendly 165Hz QHD IPS — great value for the competitive gamer.',
    price: 219.99, stock: 28,
    image: 'https://placehold.co/400x300/0f172a/3b82f6?text=AOC+Q27G2S',
    tags: 'monitor, display, 1440p, ips, budget',
  },
]

// ─── Mice ─────────────────────────────────────────────────────────────────────

export const Mice: Mouse[] = [
  {
    id: 37, category: 'Mice', brand: 'Logitech', model: 'G Pro X Superlight 2',
    maxDpi: 32000, buttons: 5, wireless: true, rgb: false, weight: 60,
    sensor: 'HERO 2',
    description: 'Ultra-lightweight 60g wireless mouse used by pro esports players worldwide.',
    price: 159.99, stock: 22,
    image: 'https://placehold.co/400x300/0f172a/3b82f6?text=Logitech+Superlight+2',
    tags: 'mouse, wireless, esports, lightweight',
  },
  {
    id: 38, category: 'Mice', brand: 'Razer', model: 'DeathAdder V3',
    maxDpi: 30000, buttons: 6, wireless: false, rgb: false, weight: 59,
    sensor: 'Focus Pro 30K',
    description: 'Ergonomic wired mouse with ultra-precise 30K DPI optical sensor.',
    price: 69.99, stock: 35,
    image: 'https://placehold.co/400x300/0f172a/3b82f6?text=Razer+DeathAdder+V3',
    tags: 'mouse, wired, ergonomic',
  },
  {
    id: 39, category: 'Mice', brand: 'SteelSeries', model: 'Rival 650 Wireless',
    maxDpi: 12000, buttons: 7, wireless: true, rgb: true, weight: 121,
    sensor: 'TrueMove3+',
    description: 'Dual-sensor wireless mouse with customizable weights for precision control.',
    price: 109.99, stock: 14,
    image: 'https://placehold.co/400x300/0f172a/3b82f6?text=SteelSeries+Rival+650',
    tags: 'mouse, wireless, rgb, customizable',
  },
  {
    id: 40, category: 'Mice', brand: 'Corsair', model: 'Dark Core RGB Pro SE',
    maxDpi: 18000, buttons: 8, wireless: true, rgb: true, weight: 133,
    sensor: 'PixArt PAW3392',
    description: 'Full-featured wireless mouse with Qi charging pad and detachable side grips.',
    price: 79.99, stock: 18,
    image: 'https://placehold.co/400x300/0f172a/3b82f6?text=Corsair+Dark+Core',
    tags: 'mouse, wireless, rgb, qi-charging',
  },
  {
    id: 41, category: 'Mice', brand: 'Glorious', model: 'Model O Minus',
    maxDpi: 19000, buttons: 6, wireless: false, rgb: true, weight: 58,
    sensor: 'Pixart 3360',
    description: 'Honeycomb shell ultra-light wired mouse — maximum airflow, minimum weight.',
    price: 44.99, stock: 40,
    image: 'https://placehold.co/400x300/0f172a/3b82f6?text=Glorious+Model+O',
    tags: 'mouse, wired, lightweight, rgb, honeycomb',
  },
]

// ─── Keyboards ────────────────────────────────────────────────────────────────

export const Keyboards: Keyboard[] = [
  {
    id: 42, category: 'Keyboards', brand: 'Corsair', model: 'K70 RGB MK.2',
    switchType: 'mechanical', switchBrand: 'Cherry MX Red', layout: 'full',
    wireless: false, rgb: true,
    description: 'Aircraft-grade aluminum frame with Cherry MX Reds and per-key RGB.',
    price: 139.99, stock: 25,
    image: 'https://placehold.co/400x300/0f172a/3b82f6?text=Corsair+K70+RGB',
    tags: 'keyboard, mechanical, rgb, full-size',
  },
  {
    id: 43, category: 'Keyboards', brand: 'Razer', model: 'BlackWidow V3 TKL',
    switchType: 'mechanical', switchBrand: 'Razer Green', layout: 'TKL',
    wireless: false, rgb: true,
    description: 'Tenkeyless mechanical with Razer Green clicky switches and Chroma RGB.',
    price: 99.99, stock: 30,
    image: 'https://placehold.co/400x300/0f172a/3b82f6?text=Razer+BlackWidow+V3',
    tags: 'keyboard, mechanical, rgb, tkl',
  },
  {
    id: 44, category: 'Keyboards', brand: 'Logitech', model: 'G915 TKL',
    switchType: 'mechanical', switchBrand: 'GL Tactile', layout: 'TKL',
    wireless: true, rgb: true,
    description: 'Ultra-slim wireless TKL with Lightspeed technology and 40-hour battery.',
    price: 199.99, stock: 16,
    image: 'https://placehold.co/400x300/0f172a/3b82f6?text=Logitech+G915+TKL',
    tags: 'keyboard, mechanical, wireless, rgb, slim',
  },
  {
    id: 45, category: 'Keyboards', brand: 'SteelSeries', model: 'Apex Pro TKL',
    switchType: 'optical', switchBrand: 'OmniPoint 2.0', layout: 'TKL',
    wireless: false, rgb: true,
    description: 'Adjustable actuation optical switches — customize sensitivity per key.',
    price: 169.99, stock: 12,
    image: 'https://placehold.co/400x300/0f172a/3b82f6?text=SteelSeries+Apex+Pro',
    tags: 'keyboard, optical, rgb, tkl, adjustable',
  },
  {
    id: 46, category: 'Keyboards', brand: 'Ducky', model: 'One 3 TKL',
    switchType: 'mechanical', switchBrand: 'Cherry MX Red', layout: 'TKL',
    wireless: false, rgb: true,
    description: 'Premium hot-swappable TKL with double-shot PBT keycaps and QUACK Mechanics.',
    price: 109.99, stock: 20,
    image: 'https://placehold.co/400x300/0f172a/3b82f6?text=Ducky+One+3+TKL',
    tags: 'keyboard, mechanical, rgb, tkl, hot-swap',
  },
]

// ─── Aggregated exports ───────────────────────────────────────────────────────

export const allProducts: Product[] = [
  ...Cases, ...CPUs, ...Coolers, ...GPUs, ...Rigs,
  ...MemoryRAM, ...Monitors, ...Mice, ...Keyboards,
]

export function getProductById(id: number): Product | undefined {
  return allProducts.find(p => p.id === id)
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return allProducts.filter(p => p.category === category)
}
