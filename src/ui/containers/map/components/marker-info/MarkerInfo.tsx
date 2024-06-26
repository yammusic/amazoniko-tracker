'use client'

import React, { useState } from 'react'
import { AdvancedMarker, InfoWindow, useAdvancedMarkerRef } from '@vis.gl/react-google-maps'

import type { MarkerInfoProps } from './types'

export function MarkerInfo(props: Readonly<MarkerInfoProps>) {
  const { title, description, position } = props
  const [markerRef, marker] = useAdvancedMarkerRef()
  const [infoWindowShown, setInfoWindowShown] = useState(false)

  const onMarkerClick = () => {
    setInfoWindowShown(isShown => !isShown)
  }

  const onClose = () => {
    setInfoWindowShown(false)
  }

  return (
    <>
      <AdvancedMarker
        onClick={ onMarkerClick }
        position={ position }
        ref={ markerRef }
      />

      { !!infoWindowShown && (
        <InfoWindow anchor={ marker } onClose={ onClose }>
          <h2>{ title }</h2>

          <p>{ description }</p>
        </InfoWindow>
      ) }
    </>
  )
}
