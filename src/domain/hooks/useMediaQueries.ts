'use client'

import { useMediaQuery as useMediaQueryBase } from '@uidotdev/usehooks'

export type MediaQueryType = 'sm' | 'md' | 'lg' | 'xl'
export const useMediaQuery = (query: MediaQueryType) => {
  const breakpoints = {
    // sm: 640,
    // md: 768,
    // lg: 1024,
    // xl: 1280,
    sm: 540,
    md: 720,
    lg: 960,
    xl: 1140,
  }

  const queryStr = `(max-width: ${breakpoints[query]}px)`
  return useMediaQueryBase(queryStr)
}
