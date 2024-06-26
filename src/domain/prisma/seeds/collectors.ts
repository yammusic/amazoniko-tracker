import { faker } from '@faker-js/faker'
import { usePrisma } from '../hooks'

export async function seedCollectors() {
  const { collector } = usePrisma()
  const collectors = []

  try {
    console.log('Seeding collectors...')

    for (let i = 0; i < 5; i++) {
      collectors.push({
        name: `${faker.person.firstName()} ${faker.person.lastName()}`,
        email: faker.internet.email(),
        phone: faker.phone.number(),
      })
    }

    await collector.createMany({
      data: collectors,
    })

    console.log('Seeding collectors done!')
  } catch (e) {
    console.error(e)
    throw e
  }
}
