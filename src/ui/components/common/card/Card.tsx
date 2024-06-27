'use client'

import React from 'react'
import { Card as MTRCard } from '@material-tailwind/react'

import type { CardProps } from './types'

export function Card(props: Readonly<CardProps>) {
  const { children, ...rest } = props

  return (
    <MTRCard
      { ...rest as any }
    >
      { children }
    </MTRCard>
  )
}
