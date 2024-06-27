'use client'

import React from 'react'
import { CardHeader as MTRCardHeader } from '@material-tailwind/react'

import type { CardHeaderProps } from './types'

export function CardHeader(props: Readonly<CardHeaderProps>) {
  const { children, ...rest } = props

  return (
    <MTRCardHeader
      { ...rest as any }
    >
      { children }
    </MTRCardHeader>
  )
}
