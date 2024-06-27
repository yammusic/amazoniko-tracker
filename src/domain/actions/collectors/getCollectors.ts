'use server'

import { usePrisma } from '@/domain/prisma'

export const getCollectors = async () => {
  const { collector } = usePrisma()
  return collector.findMany({
    include: { routes: true },
  })
}
