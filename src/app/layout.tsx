import React from 'react'
import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import '@/app/styles/globals.css'

import { AppLayout } from '@/app/layouts/app'
import { APP_DESCRIPTION, APP_TITLE } from '@/domain/constants/app'

export const metadata: Metadata = {
  title: APP_TITLE,
  description: APP_DESCRIPTION,
}

interface Props {
  children: ReactNode
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <AppLayout>
      { children }
    </AppLayout>
  )
}
