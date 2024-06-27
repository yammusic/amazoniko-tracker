'use client'

import React from 'react'
import { CardFooter as MTRCardFooter } from '@material-tailwind/react'

import type { CardFooterProps } from './types'

export function CardFooter(props: Readonly<CardFooterProps>) {
  const { children, ...rest } = props

  return (
    <MTRCardFooter
      { ...rest as any }
    >
      { children }
    </MTRCardFooter>
  )
}
