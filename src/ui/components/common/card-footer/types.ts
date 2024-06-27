import type { ReactNode } from 'react'
import type { CardFooterProps as MTRCardFooterProps } from '@material-tailwind/react'

export interface CardFooterProps extends MTRCardFooterProps {
  children: ReactNode
}
