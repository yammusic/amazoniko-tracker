import React from 'react'

import { getCollectedRoutes } from '@/domain/actions/routes'
import { GOOGLE_MAPS_API_KEY, GOOGLE_MAPS_MAP_ID } from '@/domain/constants/app'
import { Map } from './components'

import styles from './styles.module.scss'

export async function MapSection() {
  const routes = await getCollectedRoutes()

  return (
    <section className={ styles.container } id="map">
      <Map
        disableDefaultUI
        apiKey={ GOOGLE_MAPS_API_KEY }
        clickableIcons={ false }
        defaultCenter={ { lat: 4.656722, lng: -74.096369 } }
        defaultZoom={ 12 }
        mapId={ GOOGLE_MAPS_MAP_ID }
        markers={ routes }
      />
    </section>
  )
}
