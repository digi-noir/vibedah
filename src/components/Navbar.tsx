'use client'

import Link from 'next/link'
import { useCart } from './CartProvider'
import { useTheme } from './ThemeProvider'
import { CATEGORY_LABELS, ProductCategory } from '@/types'

const NAV_CATEGORIES: ProductCategory[] = ['CPUs', 'GPUs', 'Memory', 'Monitors', 'Rigs', 'cases', 'Coolers', 'Mice', 'Keyboards']

export default function Navbar() {
  const { count } = useCart()
  const { theme, toggle } = useTheme()

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 gap-4">
        <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white shrink-0">
          VIBE<span className="text-brand-500">DAH</span>
        </Link>

        <nav className="hidden lg:flex gap-1 overflow-x-auto">
          {NAV_CATEGORIES.map(cat => (
            <Link
              key={cat}
              href={`/products?category=${cat}`}
              className="px-3 py-1.5 text-sm text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800 rounded transition-colors whitespace-nowrap"
            >
              {CATEGORY_LABELS[cat]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/products"
            className="text-sm text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors hidden sm:block"
          >
            All Products
          </Link>
          <Link
            href="/auth/login"
            className="text-sm text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Login
          </Link>

          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-600 dark:text-slate-400 transition-colors text-base leading-none"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <Link
            href="/cart"
            className="relative flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Cart
            {count > 0 && (
              <span className="bg-white text-brand-700 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {count > 99 ? '99+' : count}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  )
}
