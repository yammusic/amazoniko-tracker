import type { ReactNode } from 'react'
import type { ButtonProps as MTRButtonProps } from '@material-tailwind/react'

export interface ButtonProps extends MTRButtonProps {
  children: ReactNode
}
