import type { ReactNode } from 'react'
import type { TypographyProps as MTRTypographyProps } from '@material-tailwind/react'

export interface TypographyProps extends MTRTypographyProps {
  children: ReactNode
}
