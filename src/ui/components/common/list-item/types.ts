import type { ReactNode } from 'react'
import type { ListItemProps as MTRListItemProps } from '@material-tailwind/react'

export interface ListItemProps extends MTRListItemProps {
  children: ReactNode
}
