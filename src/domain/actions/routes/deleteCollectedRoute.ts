'use server'

import { usePrisma } from '@/domain/prisma'

export const deleteCollectedRoute = async (id: number) => {
  const { collectedRoute } = usePrisma()
  return collectedRoute.delete({ where: { id } })
}
