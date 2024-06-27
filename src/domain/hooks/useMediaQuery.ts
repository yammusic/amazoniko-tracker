'use client'

import { useMediaQuery as useMediaQueryBase } from '@uidotdev/usehooks'

export type MediaQueryType = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export const useMediaQuery = (query: MediaQueryType) => {
  const breakpoints = {
    // sm: 540,
    // sm: 640,
    // md: 720,
    // md: 768,
    // lg: 960,
    // lg: 1024,
    // xl: 1140,
    // xl: 1280,
    xs: '(max-width: 640px)',
    // sm: '(min-width: 640px) and (max-width: 720px)',
    sm: '(max-width: 720px)',
    // md: '(min-width: 720px) and (max-width: 1024px)',
    md: '(max-width: 1024px)',
    // lg: '(min-width: 1024px) and (max-width: 1280px)',
    lg: '(max-width: 1280px)',
    // xl: '(min-width: 1280px)',
    xl: '(max-width: 1536px)',
  }

  return useMediaQueryBase(breakpoints[query])
}
