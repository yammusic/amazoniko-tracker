import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'

import { DrawerSectionSkeleton } from '@/app/containers/drawer'
import { MapSection, MapSectionSkeleton } from '@/app/containers/map'
import styles from './styles.module.scss'

const DrawerSection = dynamic(() => import('@/app/containers/drawer/DrawerSection'), {
  ssr: false,
})

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
