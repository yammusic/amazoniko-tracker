import React from 'react'

import { getCollectedRoutes } from '@/domain/actions'
import { GOOGLE_MAPS_API_KEY, GOOGLE_MAPS_MAP_ID } from '@/domain/constants/app'
import { Map } from './components'

export async function MapSection() {
  const markers = await getCollectedRoutes()

  return (
    <section id="map">
      <Map
        disableDefaultUI
        apiKey={ GOOGLE_MAPS_API_KEY }
        defaultCenter={ { lat: 4.656722, lng: -74.096369 } }
        defaultZoom={ 12 }
        mapId={ GOOGLE_MAPS_MAP_ID }
        markers={ markers }
      />
    </section>
  )
}
