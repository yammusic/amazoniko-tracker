import React from 'react'
import { TbMap2 } from 'react-icons/tb'
import { Typography } from '@/app/components/common'
import styles from './styles.module.scss'

export function MapSectionSkeleton() {
  return (
    <div className={ styles.skeletonContainer }>
      <div className={ styles.skeletonMap }>
        <TbMap2 size={ 64 } />

        <Typography variant="lead">
          Loading...
        </Typography>
      </div>
    </div>
  )
}
