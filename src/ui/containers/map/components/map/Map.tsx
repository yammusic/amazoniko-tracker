'use client'

import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { APIProvider, Map as GMap } from '@vis.gl/react-google-maps'

import type { CollectedRoute } from '@/domain/prisma'
import { MarkerInfo } from '../marker-info'
import type { MapProps } from './types'

export function Map(props: Readonly<MapProps>) {
  const { apiKey, markers = [], ...rest } = props
  const { replace } = useRouter()
  const searchParams = useSearchParams()
  const collectorId = Number(searchParams.get('collector'))
  const routeId = Number(searchParams.get('route'))

  const onClickMarker = (item: CollectedRoute) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('collector', `${item.collectorId}`)
    params.set('route', `${item.id}`)

    replace(`?${params.toString()}`)
    console.info('onMarkerClick', { item, params })
  }

  return (
    <APIProvider apiKey={ apiKey }>
      <GMap
        className="h-full w-full"
        gestureHandling={ 'greedy' }
        { ...rest }
      >
        { markers.map((marker) => {
          const hasCollector = collectorId === marker.collector?.id
          const isSelected = hasCollector && routeId === marker.id
          const isCollected = new Date(marker.collectionAt) < new Date()

          return (
            <MarkerInfo
              color={ (
                (hasCollector && isCollected)
                  ? 'green'
                  : (hasCollector && 'orange') || 'red'
              ) }
              info={ marker }
              key={ marker.latitude }
              onClick={ () => onClickMarker(marker) }
              selected={ isSelected }
            />
          )
        }) }
      </GMap>
    </APIProvider>
  )
}
