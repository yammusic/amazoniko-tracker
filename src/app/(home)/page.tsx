import React, { Suspense } from 'react'

import { DrawerSection, DrawerSectionSkeleton } from '@/app/containers/drawer'
import { MapSection, MapSectionSkeleton } from '@/app/containers/map'
import styles from './styles.module.scss'

export default async function Home() {
  return (
    <div className={ styles.container }>
      <Suspense fallback={ <DrawerSectionSkeleton /> }>
        <DrawerSection />
      </Suspense>

      <Suspense fallback={ <MapSectionSkeleton /> }>
        <MapSection />
      </Suspense>
    </div>
  )
}
