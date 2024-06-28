'use server'

import type { Collector } from '@/domain/prisma'
import { usePrisma } from '@/domain/prisma'

export const createCollector = async (data: Omit<Collector, 'id' | 'routes'>) => {
  const { collector } = usePrisma()
  return collector.create({ data })
}
