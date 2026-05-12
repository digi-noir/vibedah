'use client'

import { createContext, useContext, useEffect, useState } from 'react'

export const THEMES = [
  { id: 'light',     name: 'Light',     icon: '☀️',  accent: '#3b82f6', swatch: '#e2e8f0', isDark: false },
  { id: 'dark',      name: 'Dark',      icon: '🌙',  accent: '#3b82f6', swatch: '#1e293b', isDark: true  },
  { id: 'cyberpunk', name: 'Cyberpunk', icon: '⚡',  accent: '#eab308', swatch: '#111111', isDark: true  },
  { id: 'synthwave', name: 'Synthwave', icon: '🌸',  accent: '#ec4899', swatch: '#160d26', isDark: true  },
  { id: 'midnight',  name: 'Midnight',  icon: '🌊',  accent: '#06b6d4', swatch: '#071a35', isDark: true  },
  { id: 'crimson',   name: 'Crimson',   icon: '🔥',  accent: '#f43f5e', swatch: '#1a080e', isDark: true  },
] as const

export type Theme = typeof THEMES[number]['id']

interface ThemeContextType {
  theme: Theme
  setTheme: (t: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

function applyTheme(t: Theme) {
  const isDark = THEMES.find(x => x.id === t)?.isDark ?? true
  document.documentElement.classList.toggle('dark', isDark)
  document.documentElement.setAttribute('data-theme', t)
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('dark')

  useEffect(() => {
    const stored = localStorage.getItem('vibedah_theme') as Theme | null
    const validIds = THEMES.map(t => t.id) as string[]
    const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const initial: Theme = (stored && validIds.includes(stored) ? stored : preferred) as Theme
    setThemeState(initial)
    applyTheme(initial)
  }, [])

  function setTheme(t: Theme) {
    setThemeState(t)
    applyTheme(t)
    localStorage.setItem('vibedah_theme', t)
  }

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
