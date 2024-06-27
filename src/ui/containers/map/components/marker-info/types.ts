import type { CollectedRoute } from '@/domain/prisma'

export interface MarkerInfoProps {
  color?: 'red' | 'green' | 'orange'
  info: CollectedRoute
  onClick?: () => void
  onClose?: () => void
  selected?: boolean
}
