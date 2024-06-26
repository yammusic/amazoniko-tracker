import React from 'react'

import { getCollectors } from '@/domain/actions'
import { DrawerContainer } from './components'
// import styles from './styles.module.css'

export async function DrawerSection() {
  const collectors = await getCollectors()

  return (
    <section id="drawer">
      <DrawerContainer items={ collectors } />
    </section>
  )
}
