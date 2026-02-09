'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { FavoritesProvider } from '@/context/FavoritesContext'
import { FilterProvider } from '@/context/FilterContext'

export function Providers({ children }) {
  return (
    <CacheProvider>
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
