import type { ReactNode } from 'react'
import type { ListItemPrefixProps as MTRListItemPrefixProps } from '@material-tailwind/react'

export interface ListItemPrefixProps extends MTRListItemPrefixProps {
  children: ReactNode
}
