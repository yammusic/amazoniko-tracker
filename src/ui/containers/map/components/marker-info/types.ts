import type { CollectedRoute } from '@/domain/prisma'

export interface MarkerInfoProps extends MarkerInfoType {
  color?: 'red' | 'green' | 'orange'
  info: CollectedRoute
  onClick?: () => void
  onClose?: () => void
  selected?: boolean
}
