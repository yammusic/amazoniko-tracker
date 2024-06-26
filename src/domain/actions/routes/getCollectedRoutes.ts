'use server'

import { usePrisma } from '@/domain/prisma/hooks'

export const getCollectedRoutes = async () => {
  const { collectedRoute } = usePrisma()
  return await collectedRoute.findMany({
    include: { collector: true },
  })
}
