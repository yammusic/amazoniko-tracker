'use client'

import React from 'react'
import { ThemeProvider } from '@material-tailwind/react'
import { Roboto } from 'next/font/google'

import type { AppLayoutProps } from './types'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})

export function AppLayout({ children }: Readonly<AppLayoutProps>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={ `${roboto.className}` }
      >
        <ThemeProvider>
          <div className="min-h-screen">
            { children }
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
