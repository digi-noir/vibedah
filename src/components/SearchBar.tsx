'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useCallback, useEffect } from 'react'
import debounce from 'lodash.debounce'

export default function SearchBar({ defaultValue = '' }: { defaultValue?: string }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [value, setValue] = useState(defaultValue)

  const debouncedReplace = useCallback(
    debounce((newValue: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (newValue) {
        params.set('q', newValue)
      } else {
        params.delete('q')
      }
      router.replace(`/products?${params.toString()}`)
    }, 300),
    [router, searchParams]
  )

  useEffect(() => {
    return () => debouncedReplace.cancel()
  }, [debouncedReplace])

  return (
    <input
      type="search"
      value={value}
      onChange={(e) => {
        setValue(e.target.value)
        debouncedReplace(e.target.value)
      }}
      placeholder="Search products..."
      className="w-full sm:w-72 px-4 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
    />
  )
}