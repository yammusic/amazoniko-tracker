import type { ReactNode } from 'react'
import type { CardProps as MTRCardProps } from '@material-tailwind/react'

export interface CardProps extends MTRCardProps {
  children: ReactNode
}
