import React from 'react'
import dynamic from 'next/dynamic'

import { getCollectors } from '@/domain/actions/collectors'
import styles from './styles.module.scss'

const DrawerContainer = dynamic(() => import('./components/drawer/Drawer'), { ssr: false })

export async function DrawerSection() {
  const collectors = await getCollectors()

  return (
    <section className={ styles.container } id="drawer">
      <DrawerContainer items={ collectors } />
    </section>
  )
}
