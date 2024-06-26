'use server'

import { usePrisma } from '@/domain/prisma/hooks'
import type { CollectedRoute } from '@/domain/prisma/types'

export async function getCollectedRoutes(): Promise<CollectedRoute[]> {
  const { collectedRoute } = usePrisma()
  return await collectedRoute.findMany() as CollectedRoute[]
}
