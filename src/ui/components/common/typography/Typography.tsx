'use client'

import React from 'react'
import { Typography as MTRTypography } from '@material-tailwind/react'

import type { TypographyProps } from './types'

export function Typography(props: Readonly<TypographyProps>) {
  const { children, ...rest } = props

  return (
    <MTRTypography
      { ...rest as any }
    >
      { children }
    </MTRTypography>
  )
}
