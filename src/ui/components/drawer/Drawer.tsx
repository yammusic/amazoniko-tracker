'use client'

import React from 'react'
import { Drawer as MTRDrawer } from '@material-tailwind/react'
import type { DrawerProps } from './types'

export function Drawer(props: Readonly<DrawerProps>) {
  const { open, onClose, children, ...rest } = props

  return (
    <MTRDrawer
      dismiss={ { enabled: false } }
      onClose={ onClose }
      open={ open }
      overlay={ false }
      { ...rest as any }
    >
      { children }
    </MTRDrawer>
  )
}
