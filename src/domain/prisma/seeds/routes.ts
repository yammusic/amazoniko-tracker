import { faker } from '@faker-js/faker'
import { usePrisma } from '../hooks'

export async function seedRoutes() {
  const { collector, collectedRoute } = usePrisma()
  const materials = ['Plastic', 'Paper', 'Glass', 'Metal', 'Wood', 'Cardboard', 'Fruit', 'Vegetable']
  const routes = []

  try {
    console.log('Seeding collected routes...')
    const collectors = await collector.findMany()

    for (const collector of collectors) {
      for (let i = 0; i < 5; i++) {
        const isPast = faker.datatype.boolean()

        routes.push({
          collectorId: collector.id,
          name: `${faker.person.firstName()} ${faker.person.lastName()}`,
          company: faker.company.name(),
          address: faker.location.streetAddress(),
          phone: faker.phone.number(),
          material: `${faker.helpers.arrayElement(materials)}, ${faker.number.int({ min: 100, max: 1000 })} Kg`,
          collectionAt: isPast ? faker.date.recent() : faker.date.soon(),
          latitude: faker.location.latitude({ min: 4.4, max: 4.7, precision: 7 }),
          longitude: -(faker.location.longitude({ min: 74.0, max: 74.2, precision: 7 })),
        })
      }
    }

    await collectedRoute.createMany({
      data: routes,
    })

    console.log('Seeding collected routes done!')
  } catch (e) {
    console.error(e)
    throw e
  }
}
