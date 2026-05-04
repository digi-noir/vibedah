import Link from 'next/link'
import Image from 'next/image'
import { CATEGORY_LABELS, ProductCategory } from '@/types'

const FOOTER_CATEGORIES: ProductCategory[] = ['CPUs', 'GPUs', 'Memory', 'Monitors', 'Rigs', 'cases', 'Coolers', 'Mice', 'Keyboards']

const TECH_STACK: { name: string; slug: string; href: string; invertDark?: boolean }[] = [
  { name: 'Next.js',      slug: 'nextdotjs',   href: 'https://nextjs.org',            invertDark: true  },
  { name: 'React',        slug: 'react',        href: 'https://react.dev'                                },
  { name: 'TypeScript',   slug: 'typescript',   href: 'https://www.typescriptlang.org'                   },
  { name: 'Tailwind CSS', slug: 'tailwindcss',  href: 'https://tailwindcss.com'                          },
  { name: 'Supabase',     slug: 'supabase',     href: 'https://supabase.com'                             },
  { name: 'Stripe',       slug: 'stripe',       href: 'https://stripe.com'                               },
  { name: 'Vercel',       slug: 'vercel',       href: 'https://vercel.com',            invertDark: true  },
  { name: 'Firebase',     slug: 'firebase',     href: 'https://firebase.google.com'                      },
  { name: 'Claude AI',    slug: 'anthropic',    href: 'https://claude.ai',             invertDark: true  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">

        {/* Brand + tech stack */}
        <div>
          <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-2">
            VIBE<span className="text-brand-500">DAH</span>
          </h3>
          <p className="text-gray-500 dark:text-slate-400 text-sm mb-5">
            Premium computer parts and pre-built gaming rigs, shipped to your door.
          </p>

          <p className="text-xs text-gray-400 dark:text-slate-500 uppercase tracking-widest mb-2">Built with</p>
          <div className="flex flex-wrap gap-2">
            {TECH_STACK.map(({ name, slug, href, invertDark }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={name}
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors group"
              >
                <Image
                  src={`https://cdn.simpleicons.org/${slug}`}
                  alt={name}
                  width={16}
                  height={16}
                  unoptimized
                  className={invertDark ? 'dark:invert' : ''}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-gray-700 dark:text-slate-300 font-semibold mb-3 text-sm uppercase tracking-wide">Categories</h4>
          <ul className="space-y-2">
            {FOOTER_CATEGORIES.map(cat => (
              <li key={cat}>
                <Link
                  href={`/products?category=${cat}`}
                  className="text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors"
                >
                  {CATEGORY_LABELS[cat]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Account */}
        <div>
          <h4 className="text-gray-700 dark:text-slate-300 font-semibold mb-3 text-sm uppercase tracking-wide">Account</h4>
          <ul className="space-y-2">
            {[
              { href: '/auth/login',  label: 'Login'   },
              { href: '/auth/signup', label: 'Sign Up' },
              { href: '/cart',        label: 'Cart'    },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-200 dark:border-slate-800 py-4 text-center text-gray-400 dark:text-slate-500 text-xs">
        © {new Date().getFullYear()} VIBEDAH. All rights reserved.
      </div>
    </footer>
  )
}
