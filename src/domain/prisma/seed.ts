import { seedCollectors } from './seeds/collectors'
import { seedRoutes } from './seeds/routes'

async function seed() {
  console.log('Seeding...')

  await seedCollectors()
  await seedRoutes()

  console.log('Seeding Finished!')
}

seed().catch((e) => console.error(e))
