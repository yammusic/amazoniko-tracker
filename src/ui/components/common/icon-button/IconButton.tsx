'use client'

import React from 'react'
import { IconButton as MTRIconButton } from '@material-tailwind/react'

import type { IconButtonProps } from './types'

export function IconButton(props: Readonly<IconButtonProps>) {
  const { children, ...rest } = props

  return (
    <MTRIconButton
      { ...rest as any }
    >
      { children }
    </MTRIconButton>
  )
}
