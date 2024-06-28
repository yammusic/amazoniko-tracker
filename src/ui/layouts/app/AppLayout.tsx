'use client'

import React from 'react'
import { ThemeProvider } from '@material-tailwind/react'
import { Roboto } from 'next/font/google'

import type { AppLayoutProps } from './types'
import styles from './styles.module.scss'

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
        data-testid="app-layout-body"
      >
        <ThemeProvider>
          <main className={ styles.main }>
            { children }
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
