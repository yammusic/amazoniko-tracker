'use client'

import React from 'react'
import { ListItem as MTRListItem } from '@material-tailwind/react'

import type { ListItemProps } from './types'

export function ListItem(props: Readonly<ListItemProps>) {
  const { children, ...rest } = props

  return (
    <MTRListItem
      { ...rest as any }
    >
      { children }
    </MTRListItem>
  )
}
