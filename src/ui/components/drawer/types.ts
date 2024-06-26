import type { ReactNode } from 'react'
import type { DrawerProps as MTRDrawerProps } from '@material-tailwind/react'

export interface DrawerProps extends MTRDrawerProps {
  open: boolean
  onClose: () => void
  children: ReactNode
}
