import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getProductById, allProducts } from '@/data/products'
import { CATEGORY_LABELS } from '@/types'
import type { CPU, GPU, Cooler, Rig, Case, Memory, Monitor, Mouse, Keyboard, Product } from '@/types'
import AddToCartButton from './AddToCartButton'

export async function generateStaticParams() {
  return allProducts.map(p => ({ id: String(p.id) }))
}

function getSpecs(product: Product): [string, string | number][] {
  switch (product.category) {
    case 'CPUs':
      return [
        ['Socket', (product as CPU).socket],
        ['Cores', (product as CPU).cores],
        ['Threads', (product as CPU).threads],
        ['Base Clock', `${(product as CPU).baseClock} GHz`],
        ['Boost Clock', `${(product as CPU).boostClock} GHz`],
        ['Generation', `Gen ${(product as CPU).generation}`],
      ]
    case 'GPUs':
      return [
        ['CUDA Cores', (product as GPU).CUDAcores.toLocaleString()],
        ['VRAM', `${(product as GPU).ram} GB ${(product as GPU).ramType}`],
        ['Base Clock', `${(product as GPU).baseClock} GHz`],
        ['Boost Clock', `${(product as GPU).boostClock} GHz`],
        ['Interface', (product as GPU).gpuInterface],
        ['Max Resolution', (product as GPU).maxResolution],
        ['Display Outputs', `${(product as GPU).DisplayPort}x DP, ${(product as GPU).HDMI}x HDMI`],
        ['Rendering', (product as GPU).rendering],
      ]
    case 'Coolers':
      return [
        ['Type', (product as Cooler).coolingType],
        ['Connector', (product as Cooler).connector],
        ['Noise Level', `${(product as Cooler).noise} dBA`],
        ['Lighting', (product as Cooler).lighting],
        ['Compatibility', (product as Cooler).socket],
      ]
    case 'Rigs':
      return [
        ['CPU', (product as Rig).CPU],
        ['GPU', (product as Rig).GPU],
        ['Memory', `${(product as Rig).memory} GB`],
        ['Storage', `${(product as Rig).storage} TB`],
        ['Cooler', (product as Rig).cooler],
      ]
    case 'cases':
      return [
        ['Form Factor', (product as Case).size],
        ['Motherboard', (product as Case).motherboard],
        ['Style', (product as Case).style],
        ['Materials', (product as Case).materials],
        ['Dimensions', (product as Case).dimensions],
        ['Placement', (product as Case).placement],
      ]
    case 'Memory':
      return [
        ['Capacity', `${(product as Memory).capacity} GB`],
        ['Type', (product as Memory).type],
        ['Speed', `${(product as Memory).speed} MHz`],
        ['Modules', (product as Memory).modules],
        ['Latency', (product as Memory).latency],
        ['Lighting', (product as Memory).lighting],
      ]
    case 'Monitors':
      return [
        ['Size', `${(product as Monitor).size}"`],
        ['Resolution', (product as Monitor).resolution],
        ['Refresh Rate', `${(product as Monitor).refreshRate} Hz`],
        ['Panel Type', (product as Monitor).panelType],
        ['Response Time', `${(product as Monitor).responseTime} ms`],
        ['Curved', (product as Monitor).curved ? 'Yes' : 'No'],
        ['Aspect Ratio', (product as Monitor).aspectRatio],
        ['Ports', `${(product as Monitor).hdmiPorts}x HDMI, ${(product as Monitor).displayPorts}x DP`],
      ]
    case 'Mice':
      return [
        ['Max DPI', (product as Mouse).maxDpi.toLocaleString()],
        ['Buttons', (product as Mouse).buttons],
        ['Wireless', (product as Mouse).wireless ? 'Yes' : 'No'],
        ['RGB', (product as Mouse).rgb ? 'Yes' : 'No'],
        ['Weight', `${(product as Mouse).weight} g`],
        ['Sensor', (product as Mouse).sensor],
      ]
    case 'Keyboards':
      return [
        ['Switch Type', (product as Keyboard).switchType],
        ['Switch Brand', (product as Keyboard).switchBrand],
        ['Layout', (product as Keyboard).layout],
        ['Wireless', (product as Keyboard).wireless ? 'Yes' : 'No'],
        ['RGB', (product as Keyboard).rgb ? 'Yes' : 'No'],
      ]
  }
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProductById(Number(id))
  if (!product) notFound()

  const specs = getSpecs(product)

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <nav className="text-sm text-gray-500 dark:text-slate-400 mb-8 flex gap-2 items-center">
        <Link href="/products" className="hover:text-gray-900 dark:hover:text-white transition-colors">Products</Link>
        <span>/</span>
        <Link href={`/products?category=${product.category}`} className="hover:text-gray-900 dark:hover:text-white transition-colors">
          {CATEGORY_LABELS[product.category]}
        </Link>
        <span>/</span>
        <span className="text-gray-700 dark:text-slate-300">{product.brand} {product.model}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="relative bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl overflow-hidden h-80 md:h-96">
          <Image
            src={product.image}
            alt={`${product.brand} ${product.model}`}
            fill
            className="object-contain p-8"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <span className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-wide mb-2">
            {CATEGORY_LABELS[product.category]}
          </span>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            {product.brand} {product.model}
          </h1>
          <p className="text-gray-500 dark:text-slate-400 mb-6">{product.description}</p>

          <div className="text-4xl font-black text-gray-900 dark:text-white mb-2">${product.price.toFixed(2)}</div>
          <p className={`text-sm mb-8 ${product.stock > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
            {product.stock > 0 ? `${product.stock} units in stock` : 'Out of stock'}
          </p>

          <AddToCartButton product={product} />
        </div>
      </div>

      {/* Specs table */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Specifications</h2>
        <div className="border border-gray-200 dark:border-slate-800 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <tbody>
              {specs.map(([label, value], i) => (
                <tr key={label} className={i % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-gray-50 dark:bg-slate-800/50'}>
                  <td className="px-6 py-3 text-gray-500 dark:text-slate-400 font-medium w-1/3">{label}</td>
                  <td className="px-6 py-3 text-gray-900 dark:text-white">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
