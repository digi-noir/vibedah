'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { useCart } from '@/components/CartProvider'

export default function CheckoutSuccessPage() {
  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <div className="max-w-lg mx-auto px-4 py-24 text-center">
      <div className="text-7xl mb-6">✅</div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Order Confirmed!</h1>
      <p className="text-gray-500 dark:text-slate-400 mb-8">
        Thank you for your purchase. You&apos;ll receive a confirmation email shortly.
      </p>
      <Link href="/products" className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors">
        Keep Shopping
      </Link>
    </div>
  )
}
