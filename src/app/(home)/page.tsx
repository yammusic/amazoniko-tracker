import React, { Suspense } from 'react'

import { DrawerSection } from '@/app/containers/drawer'
import { MapSection, MapSectionSkeleton } from '@/app/containers/map'
import styles from './styles.module.css'

export default async function Home() {
  return (
    <main className={ styles.container }>
      <Suspense fallback={ <div>Loading...</div> }>
        <DrawerSection />
      </Suspense>

      <Suspense fallback={ <MapSectionSkeleton /> }>
        <MapSection />
      </Suspense>
    </main>
  )
}
