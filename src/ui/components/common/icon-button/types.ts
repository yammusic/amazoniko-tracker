import type { ReactNode } from 'react'
import type { IconButtonProps as MTRIconProps } from '@material-tailwind/react'

export interface IconButtonProps extends MTRIconProps {
  children: ReactNode
}
