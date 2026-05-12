import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/components/CartProvider'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VIBEDAH — Computer Parts & Gaming Rigs',
  description: 'Shop CPUs, GPUs, Memory, Monitors, Keyboards, Mice, Coolers, Cases, and Pre-built Gaming Rigs.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevents flash of wrong theme on initial load */}
        <script dangerouslySetInnerHTML={{ __html: `
          try {
            var dark = ['dark','cyberpunk','synthwave','midnight','crimson'];
            var s = localStorage.getItem('vibedah_theme');
            var p = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            var t = s || p;
            document.documentElement.setAttribute('data-theme', t);
            if (dark.indexOf(t) !== -1) document.documentElement.classList.add('dark');
          } catch(e) {}
        `}} />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <CartProvider>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
