import { allProducts, getProductsByCategory } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import SearchBar from '@/components/SearchBar'
import { CATEGORY_LABELS, ProductCategory } from '@/types'
import Link from 'next/link'

const CATEGORIES: ProductCategory[] = ['CPUs', 'GPUs', 'Memory', 'Monitors', 'Rigs', 'cases', 'Coolers', 'Mice', 'Keyboards']

interface Props {
  searchParams: Promise<{ category?: string; sort?: string; q?: string }>
}

export default async function ProductsPage({ searchParams }: Props) {
  const params = await searchParams
  const activeCategory = params.category as ProductCategory | undefined
  const sort = params.sort ?? 'default'
  const query = params.q?.toLowerCase().trim() ?? ''

  let products = activeCategory ? getProductsByCategory(activeCategory) : allProducts

  if (query) {
    products = products.filter(p =>
      `${p.brand} ${p.model} ${p.description} ${p.tags}`.toLowerCase().includes(query)
    )
  }

  if (sort === 'price-asc') products = [...products].sort((a, b) => a.price - b.price)
  if (sort === 'price-desc') products = [...products].sort((a, b) => b.price - a.price)
  if (sort === 'name') products = [...products].sort((a, b) => `${a.brand} ${a.model}`.localeCompare(`${b.brand} ${b.model}`))

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {activeCategory ? CATEGORY_LABELS[activeCategory] : 'All Products'}
          <span className="text-gray-400 dark:text-slate-500 text-lg font-normal ml-3">({products.length})</span>
        </h1>
        <SearchBar defaultValue={params.q ?? ''} />
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        <Link
          href="/products"
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            !activeCategory
              ? 'bg-brand-600 text-white'
              : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700'
          }`}
        >
          All
        </Link>
        {CATEGORIES.map(cat => (
          <Link
            key={cat}
            href={`/products?category=${cat}${sort !== 'default' ? `&sort=${sort}` : ''}`}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeCategory === cat
                ? 'bg-brand-600 text-white'
                : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700'
            }`}
          >
            {CATEGORY_LABELS[cat]}
          </Link>
        ))}
      </div>

      {/* Sort */}
      <div className="flex items-center gap-2 mb-8">
        <span className="text-gray-500 dark:text-slate-400 text-sm">Sort:</span>
        {[
          { value: 'default', label: 'Default' },
          { value: 'price-asc', label: 'Price: Low → High' },
          { value: 'price-desc', label: 'Price: High → Low' },
          { value: 'name', label: 'Name' },
        ].map(opt => (
          <Link
            key={opt.value}
            href={`/products?${activeCategory ? `category=${activeCategory}&` : ''}sort=${opt.value}`}
            className={`px-3 py-1.5 rounded text-xs transition-colors ${
              sort === opt.value
                ? 'bg-gray-200 dark:bg-slate-700 text-gray-900 dark:text-white'
                : 'text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            {opt.label}
          </Link>
        ))}
      </div>

      {/* Grid */}
      {products.length === 0 ? (
        <p className="text-gray-400 dark:text-slate-400 text-center py-20">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
