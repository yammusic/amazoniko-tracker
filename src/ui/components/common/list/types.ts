import type { ReactNode } from 'react'
import type { ListProps as MTRListProps } from '@material-tailwind/react'

export interface ListProps extends MTRListProps {
  children: ReactNode
}
