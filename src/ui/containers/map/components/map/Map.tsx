'use client'

import React from 'react'
import { APIProvider, Map as GMap } from '@vis.gl/react-google-maps'

import { MarkerInfo } from '../marker-info'
import type { MapProps } from './types'

export function Map(props: Readonly<MapProps>) {
  const { apiKey, markers = [], ...rest } = props

  return (
    <APIProvider apiKey={ apiKey }>
      <GMap
        gestureHandling={ 'greedy' }
        style={ { width: '100vw', height: '100vh' } }
        { ...rest }
      >
        { markers.map((marker) => (
          <MarkerInfo
            description={ marker.address }
            key={ marker.latitude }
            position={ { lat: marker.latitude, lng: marker.longitude } }
            title={ marker.company }
          />
        )) }
      </GMap>
    </APIProvider>
  )
}
