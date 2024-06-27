import type { ReactNode } from 'react'
import type { CardHeaderProps as MTRCardHeaderProps } from '@material-tailwind/react'

export interface CardHeaderProps extends MTRCardHeaderProps {
  children: ReactNode
}
