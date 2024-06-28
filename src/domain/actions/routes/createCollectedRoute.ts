'use server'

import type { CollectedRoute } from '@/domain/prisma'
import { usePrisma } from '@/domain/prisma'

export const createCollectedRoute = async (data: Omit<CollectedRoute, 'id' | 'collector'>) => {
  const { collectedRoute } = usePrisma()
  return collectedRoute.create({ data })
}
