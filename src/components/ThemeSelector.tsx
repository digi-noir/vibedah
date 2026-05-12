'use client'

import { useRef, useState, useEffect } from 'react'
import { useTheme, THEMES, Theme } from './ThemeProvider'

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const current = THEMES.find(t => t.id === theme) ?? THEMES[1]

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Select theme"
        title={`Theme: ${current.name}`}
        className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5"
      >
        <span
          className="w-3.5 h-3.5 rounded-full border border-black/10 dark:border-white/10 shrink-0"
          style={{ background: current.accent }}
        />
        <svg
          className="w-3 h-3 text-gray-500 dark:text-slate-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1.5 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl shadow-xl p-1.5 min-w-[168px] z-50">
          <p className="text-[10px] text-gray-400 dark:text-slate-500 px-2.5 pt-1 pb-1.5 font-semibold uppercase tracking-widest">
            Theme
          </p>
          {THEMES.map(t => (
            <button
              key={t.id}
              onClick={() => { setTheme(t.id as Theme); setOpen(false) }}
              className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm transition-colors ${
                theme === t.id
                  ? 'bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white font-medium'
                  : 'text-gray-600 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <span
                className="w-4 h-4 rounded-full shrink-0 border border-black/10 dark:border-white/10"
                style={{ background: t.accent }}
              />
              <span className="flex-1 text-left">{t.name}</span>
              <span className="text-sm leading-none">{t.icon}</span>
              {theme === t.id && (
                <svg className="w-3.5 h-3.5 text-brand-500 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
