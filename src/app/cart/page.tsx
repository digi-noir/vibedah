'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/components/CartProvider'

export default function CartPage() {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart()

  async function handleCheckout() {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items }),
    })
    const data = await res.json()
    if (data.url) window.location.href = data.url
  }

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-6">🛒</div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Your cart is empty</h1>
        <p className="text-gray-500 dark:text-slate-400 mb-8">Add some products to get started.</p>
        <Link href="/products" className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors">
          Browse Products
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Your Cart</h1>
        <button onClick={clearCart} className="text-gray-400 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 text-sm transition-colors">
          Clear cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map(({ product, quantity }) => (
            <div key={product.id} className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl p-4 flex gap-4 items-center">
              <div className="relative w-20 h-20 shrink-0 bg-gray-50 dark:bg-slate-950 rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={`${product.brand} ${product.model}`}
                  fill
                  className="object-contain p-2"
                  sizes="80px"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-gray-900 dark:text-white font-semibold truncate">{product.brand} {product.model}</h3>
                <p className="text-gray-500 dark:text-slate-400 text-sm">${product.price.toFixed(2)} each</p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => updateQuantity(product.id, quantity - 1)}
                  className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-900 dark:text-white flex items-center justify-center transition-colors"
                >
                  −
                </button>
                <span className="text-gray-900 dark:text-white w-6 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => updateQuantity(product.id, quantity + 1)}
                  className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-900 dark:text-white flex items-center justify-center transition-colors"
                >
                  +
                </button>
              </div>

              <div className="text-right shrink-0 ml-2">
                <p className="text-gray-900 dark:text-white font-bold">${(product.price * quantity).toFixed(2)}</p>
                <button
                  onClick={() => removeItem(product.id)}
                  className="text-gray-400 dark:text-slate-500 hover:text-red-500 dark:hover:text-red-400 text-xs mt-1 transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order summary */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl p-6 sticky top-24">
            <h2 className="text-gray-900 dark:text-white font-bold text-lg mb-4">Order Summary</h2>

            <div className="space-y-2 mb-4 text-sm">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex justify-between text-gray-500 dark:text-slate-400">
                  <span className="truncate pr-2">{product.brand} {product.model} ×{quantity}</span>
                  <span className="shrink-0">${(product.price * quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 dark:border-slate-700 pt-4 mb-6">
              <div className="flex justify-between text-gray-900 dark:text-white font-bold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <p className="text-gray-400 dark:text-slate-500 text-xs mt-1">Taxes & shipping calculated at checkout</p>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              Checkout with Stripe
            </button>

            <Link href="/products" className="block text-center text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white text-sm mt-4 transition-colors">
              ← Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
