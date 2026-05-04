'use client'

import { useCart } from '@/components/CartProvider'
import type { Product } from '@/types'

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart()

  return (
    <button
      onClick={() => addItem(product)}
      disabled={product.stock === 0}
      className="w-full bg-brand-600 hover:bg-brand-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-colors text-lg"
    >
      {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
    </button>
  )
}
