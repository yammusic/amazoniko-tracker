'use client'

import React from 'react'
import { Button as MTRButton } from '@material-tailwind/react'

import type { ButtonProps } from './types'

export function Button(props: Readonly<ButtonProps>) {
  const { children, ...rest } = props

  return (
    <MTRButton
      { ...rest as any }
    >
      { children }
    </MTRButton>
  )
}
