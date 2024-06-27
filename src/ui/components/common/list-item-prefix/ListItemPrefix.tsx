'use client'

import React from 'react'
import { ListItemPrefix as MTRListItemPrefix } from '@material-tailwind/react'

import type { ListItemPrefixProps } from './types'

export function ListItemPrefix(props: Readonly<ListItemPrefixProps>) {
  const { children, ...rest } = props

  return (
    <MTRListItemPrefix
      { ...rest as any }
    >
      { children }
    </MTRListItemPrefix>
  )
}
