'use client'

import React, { useState } from 'react'
import {
  AdvancedMarker,
  InfoWindow,
  Pin,
  useAdvancedMarkerRef,
} from '@vis.gl/react-google-maps'

import type { MarkerInfoProps } from './types'
import { Typography } from '@/app/components'

export function MarkerInfo(props: Readonly<MarkerInfoProps>) {
  const {
    color = 'red',
    description,
    onClick,
    onClose,
    position,
    selected,
    title,
  } = props
  const [markerRef, marker] = useAdvancedMarkerRef()

  let pinBgColor = ''
  let pinBgBorder = ''
  switch (color) {
    case 'green':
      pinBgColor = 'rgb(76 175 80)'
      pinBgBorder = 'rgb(27 94 32)'
      break
    case 'orange':
      pinBgColor = 'rgb(255 152 0)'
      pinBgBorder = 'rgb(230 81 0)'
      break
  }

  return (
    <>
      <AdvancedMarker
        onClick={ onClick || (() => false) }
        position={ position }
        ref={ markerRef }
      >
        <Pin
          background={ pinBgColor }
          borderColor={ pinBgBorder }
          glyphColor={ pinBgBorder }
        />
      </AdvancedMarker>

      { !!selected && (
        <InfoWindow
          headerDisabled
          anchor={ marker }
          className="w-[100px]"
          headerContent={ <Typography variant="lead">{ title }</Typography> }
          onClose={ onClose }
        >
          <h2>{ title }</h2>

          <p>{ description }</p>
        </InfoWindow>
      ) }
    </>
  )
}
