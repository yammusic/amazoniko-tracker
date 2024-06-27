import React from 'react'

import { getCollectors } from '@/domain/actions/collectors'
import { DrawerContainer } from './components'
import styles from './styles.module.scss'

export async function DrawerSection() {
  const collectors = await getCollectors()

  return (
    <section className={ styles.container } id="drawer">
      <DrawerContainer items={ collectors } />
    </section>
  )
}

export default DrawerSection
