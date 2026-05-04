export type ProductCategory =
  | 'CPUs'
  | 'Coolers'
  | 'GPUs'
  | 'Rigs'
  | 'cases'
  | 'Memory'
  | 'Monitors'
  | 'Mice'
  | 'Keyboards'

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  CPUs: 'CPUs',
  Coolers: 'Coolers',
  GPUs: 'GPUs',
  Rigs: 'Pre-built Rigs',
  cases: 'Cases',
  Memory: 'Memory / RAM',
  Monitors: 'Monitors',
  Mice: 'Mice',
  Keyboards: 'Keyboards',
}

export interface BaseProduct {
  id: number
  brand: string
  model: string
  description: string
  price: number
  stock: number
  image: string
  tags: string
  category: ProductCategory
}

export interface CPU extends BaseProduct {
  category: 'CPUs'
  baseClock: number
  boostClock: number
  cores: number
  threads: number
  socket: string
  generation: number
}

export interface Cooler extends BaseProduct {
  category: 'Coolers'
  coolingType: 'air' | 'liquid'
  connector: string
  noise: number
  lighting: string
  socket: string
}

export interface GPU extends BaseProduct {
  category: 'GPUs'
  baseClock: number
  boostClock: number
  ram: number
  ramType: string
  CUDAcores: number
  gpuInterface: string
  maxResolution: string
  rendering: string
  DisplayPort: number
  HDMI: number
  displays: number
}

export interface Rig extends BaseProduct {
  category: 'Rigs'
  CPU: string
  GPU: string
  memory: number
  storage: number
  cooler: string
}

export interface Case extends BaseProduct {
  category: 'cases'
  size: string
  motherboard: string
  style: string
  materials: string
  dimensions: string
  placement: string
}

export interface Memory extends BaseProduct {
  category: 'Memory'
  capacity: number
  speed: number
  type: 'DDR4' | 'DDR5'
  modules: string
  latency: string
  lighting: string
}

export interface Monitor extends BaseProduct {
  category: 'Monitors'
  size: number
  resolution: string
  refreshRate: number
  panelType: 'IPS' | 'VA' | 'TN' | 'OLED'
  responseTime: number
  hdmiPorts: number
  displayPorts: number
  curved: boolean
  aspectRatio: string
}

export interface Mouse extends BaseProduct {
  category: 'Mice'
  maxDpi: number
  buttons: number
  wireless: boolean
  rgb: boolean
  weight: number
  sensor: string
}

export interface Keyboard extends BaseProduct {
  category: 'Keyboards'
  switchType: 'mechanical' | 'membrane' | 'optical'
  switchBrand: string
  layout: 'full' | 'TKL' | '60%' | '65%' | '75%'
  wireless: boolean
  rgb: boolean
}

export type Product = CPU | Cooler | GPU | Rig | Case | Memory | Monitor | Mouse | Keyboard

export interface CartItem {
  product: Product
  quantity: number
}
