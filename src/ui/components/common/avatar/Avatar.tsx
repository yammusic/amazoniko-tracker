'use client'

import React from 'react'
import { Avatar as MTRAvatar } from '@material-tailwind/react'

import type { AvatarProps } from './types'

export function Avatar(props: Readonly<AvatarProps>) {
  const { children, ...rest } = props

  return (
    <MTRAvatar
      { ...rest as any }
    >
      { children }
    </MTRAvatar>
  )
}
