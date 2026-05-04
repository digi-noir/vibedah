'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCart } from './CartProvider'
import type { Product } from '@/types'
import { CATEGORY_LABELS } from '@/types'

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()

  return (
    <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl overflow-hidden flex flex-col group hover:border-brand-500 dark:hover:border-brand-500 transition-colors">
      <Link href={`/products/${product.id}`} className="relative block overflow-hidden bg-gray-50 dark:bg-slate-950 h-48">
        <Image
          src={product.image}
          alt={`${product.brand} ${product.model}`}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <span className="text-xs text-brand-500 dark:text-brand-400 font-medium uppercase tracking-wide mb-1">
          {CATEGORY_LABELS[product.category]}
        </span>

        <Link href={`/products/${product.id}`} className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
          <h3 className="text-gray-900 dark:text-white font-semibold leading-snug mb-1">
            {product.brand} {product.model}
          </h3>
        </Link>

        <p className="text-gray-500 dark:text-slate-400 text-sm line-clamp-2 flex-1 mb-3">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="text-gray-900 dark:text-white font-bold text-lg">${product.price.toFixed(2)}</span>
            <span className={`block text-xs mt-0.5 ${product.stock > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
              {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
            </span>
          </div>

          <button
            onClick={() => addItem(product)}
            disabled={product.stock === 0}
            className="bg-brand-600 hover:bg-brand-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
