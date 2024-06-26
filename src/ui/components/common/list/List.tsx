'use client'

import React from 'react'
import { List as MTRList } from '@material-tailwind/react'

import type { ListProps } from './types'

export function List(props: Readonly<ListProps>) {
  const { children, ...rest } = props

  return (
    <MTRList
      { ...rest as any }
    >
      { children }
    </MTRList>
  )
}
