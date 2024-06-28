'use server'

import type { Collector } from '@/domain/prisma'
import { usePrisma } from '@/domain/prisma'

export const updateCollector = async (data: Omit<Collector, 'routes'>) => {
  const { collector } = usePrisma()
  return collector.update({ where: { id: data.id }, data })
}
