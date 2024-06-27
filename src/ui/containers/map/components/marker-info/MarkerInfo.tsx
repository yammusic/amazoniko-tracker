'use client'

import React from 'react'
import { Chip } from '@material-tailwind/react'
import {
  AdvancedMarker,
  InfoWindow,
  Pin,
  useAdvancedMarkerRef,
} from '@vis.gl/react-google-maps'

import type { MarkerInfoProps } from './types'
import {
  Card,
  CardBody,
  CardFooter,
  IconButton,
  Typography,
} from '@/app/components/common'
import { IoClose } from 'react-icons/io5'
import { CollectorInfo } from '../collector-info'

export function MarkerInfo(props: Readonly<MarkerInfoProps>) {
  const {
    color = 'red',
    info,
    onClick,
    onClose,
    selected,
  } = props
  const [markerRef, marker] = useAdvancedMarkerRef()
  const isCollected = new Date(info.collectionAt) < new Date()

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
        onClick={ onClick }
        position={ {
          lat: info.latitude,
          lng: info.longitude,
        } }
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
          onClose={ onClose }
        >
          <Card className="min-w-[320px] max-w-[380px] p-0" color="transparent" shadow={ false }>
            <CardBody className="p-0">
              <div className="flex items-center justify-between mb-2">
                <Typography
                  as="h5"
                  className="px-2"
                  variant="lead"
                >
                  { info.company }
                </Typography>

                <IconButton color="blue-gray" onClick={ onClose } variant="text">
                  <IoClose size={ 20 } />
                </IconButton>
              </div>

              <div className="flex flex-col px-2">
                <Typography className="flex gap-2">
                  <strong>Client: </strong>

                  { info.name }
                </Typography>


                <Typography className="flex gap-2">
                  <strong>Address: </strong>

                  { info.address }
                </Typography>

                <Typography className="flex gap-2">
                  <strong>Phone: </strong>

                  <a
                    className="hover:underline"
                    href={ `tel:${ info.phone }` }
                    style={ { color: 'var(--blue-500)' } }
                  >
                    { info.phone }
                  </a>
                </Typography>

                <Typography className="flex gap-2">
                  <strong>Material: </strong>

                  { info.material }
                </Typography>

                <Typography className="flex gap-2">
                  <strong>Collection Date: </strong>

                  { info.collectionAt.toLocaleString() }
                </Typography>

                <div className="relative">
                  <Typography className="flex gap-2">
                    <strong>Collector: </strong>

                    <CollectorInfo info={ info.collector! } />
                  </Typography>

                </div>
              </div>
            </CardBody>

            <CardFooter className="p-2">
              <div className="flex">
                <Chip
                  className="w-auto capitalize rounded-full"
                  color={ isCollected ? 'green' : 'orange' }
                  size="sm"
                  value={ isCollected ? 'Collected' : 'Pending' }
                  variant={ isCollected ? 'filled' : 'outlined' }
                />
              </div>
            </CardFooter>
          </Card>
        </InfoWindow>
      ) }
    </>
  )
}
