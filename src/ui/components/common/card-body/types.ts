import type { ReactNode } from 'react'
import type { CardBodyProps as MTRCardBodyProps } from '@material-tailwind/react'

export interface CardBodyProps extends MTRCardBodyProps {
  children: ReactNode
}
