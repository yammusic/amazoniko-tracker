'use server'

import { usePrisma } from '@/domain/prisma'

export const getCollectors = async () => {
  const { collector } = usePrisma()
  return collector.findMany({
    include: { routes: true },
  })
}

export const getCollector = async (id: number) => {
  const { collector } = usePrisma()
  return collector.findUnique({
    where: { id },
    include: { routes: true },
  })
}
