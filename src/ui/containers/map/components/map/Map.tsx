'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'
import { APIProvider, Map as GMap } from '@vis.gl/react-google-maps'

import { MarkerInfo } from '../marker-info'
import type { MapProps } from './types'

export function Map(props: Readonly<MapProps>) {
  const { apiKey, markers = [], ...rest } = props
  const searchParams = useSearchParams()
  const collectorId = Number(searchParams.get('collector'))
  const routeId = Number(searchParams.get('route'))

  return (
    <APIProvider apiKey={ apiKey }>
      <GMap
        gestureHandling={ 'greedy' }
        style={ { width: '100vw', height: '100vh' } }
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
              description={ marker.address }
              key={ marker.latitude }
              position={ { lat: marker.latitude, lng: marker.longitude } }
              selected={ isSelected }
              title={ marker.company }
            />
          )
        }) }
      </GMap>
    </APIProvider>
  )
}
