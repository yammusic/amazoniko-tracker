'use server'

import { usePrisma } from '@/domain/prisma/hooks'

export const getCollectedRoutes = async () => {
  const { collectedRoute } = usePrisma()
  return collectedRoute.findMany({
    include: { collector: true },
  })
}

export const getCollectedRoute = async (id: number) => {
  const { collectedRoute } = usePrisma()
  return collectedRoute.findUnique({
    where: { id },
    include: { collector: true },
  })
}
