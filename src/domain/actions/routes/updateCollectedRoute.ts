'use server'

import type { CollectedRoute } from '@/domain/prisma'
import { usePrisma } from '@/domain/prisma'

export const updateCollectedRoute = async (data: Omit<CollectedRoute, 'collector'>) => {
  const { collectedRoute } = usePrisma()
  return collectedRoute.update({ where: { id: data.id }, data })
}
