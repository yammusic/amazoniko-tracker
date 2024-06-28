'use server'

import { usePrisma } from '@/domain/prisma'

export const deleteCollector = async (id: number) => {
  const { collector } = usePrisma()
  return collector.delete({ where: { id } })
}
