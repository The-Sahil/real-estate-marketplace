'use client'

import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { useServerInsertedHTML } from 'next/navigation'
import { ChakraProvider } from '@chakra-ui/react'
import { useState } from 'react'
import { FavoritesProvider } from '@/context/FavoritesContext'
import { FilterProvider } from '@/context/FilterContext'

export function Providers({ children }) {
  const [cache] = useState(() => {
    const cache = createCache({ key: 'css' })
    cache.compat = true
    return cache
  })

  useServerInsertedHTML(() => {
    return (
      <style
        data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: Object.values(cache.inserted).join(' '),
        }}
      />
    )
  })

  return (
    <CacheProvider value={cache}>
      <ChakraProvider>
        <FavoritesProvider>
          <FilterProvider>
            {children}
          </FilterProvider>
        </FavoritesProvider>
      </ChakraProvider>
    </CacheProvider>
  )
}
