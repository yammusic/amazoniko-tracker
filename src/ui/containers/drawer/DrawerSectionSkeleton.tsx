import React from 'react'
import { Typography } from '@/app/components/common'
import styles from './styles.module.scss'

export function DrawerSectionSkeleton() {
  return (
    <div className={ styles.skeletonContainer }>
      <Typography as="div" className={ styles.skeletonTitle }>{' '}</Typography>

      <Typography as="div" className={ styles.skeletonSubtitle }>{' '}</Typography>

      <Typography as="div" className={ styles.skeletonListItem }>{' '}</Typography>

      <Typography as="div" className={ styles.skeletonListItem }>{' '}</Typography>

      <Typography as="div" className={ styles.skeletonListItem }>{' '}</Typography>
    </div>
  )
}
