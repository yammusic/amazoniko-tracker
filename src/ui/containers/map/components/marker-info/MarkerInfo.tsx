'use client'

import React from 'react'
import { Chip } from '@material-tailwind/react'
import {
  AdvancedMarker,
  InfoWindow,
  Pin,
  useAdvancedMarkerRef,
} from '@vis.gl/react-google-maps'
import { IoClose } from 'react-icons/io5'

import type { MarkerInfoProps } from './types'
import {
  Card,
  CardBody,
  CardFooter,
  IconButton,
  Typography,
} from '@/app/components/common'
import { CollectorInfo } from '../collector-info'

import styles from './styles.module.scss'

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
          <Card className={ styles.card } color="transparent" shadow={ false }>
            <CardBody className={ styles.cardBody }>
              <div className={ styles.cardHeaderContainer }>
                <Typography
                  as="h5"
                  className={ styles.headerCompany }
                  variant="lead"
                >
                  { info.company }
                </Typography>

                <IconButton color="blue-gray" onClick={ onClose } variant="text">
                  <IoClose size={ 20 } />
                </IconButton>
              </div>

              <div className={ styles.cardInfoContainer }>
                <Typography className={ styles.infoText }>
                  <strong>Client: </strong>

                  { info.name }
                </Typography>


                <Typography className={ styles.infoText }>
                  <strong>Address: </strong>

                  { info.address }
                </Typography>

                <Typography className={ styles.infoText }>
                  <strong>Phone: </strong>

                  <a className={ styles.infoLink } href={ `tel:${ info.phone }` }>
                    { info.phone }
                  </a>
                </Typography>

                <Typography className={ styles.infoText }>
                  <strong>Material: </strong>

                  { info.material }
                </Typography>

                <Typography className={ styles.infoText }>
                  <strong>Collection Date: </strong>

                  { info.collectionAt.toLocaleString() }
                </Typography>

                <Typography className={ styles.infoText }>
                  <strong>Collector: </strong>

                  <CollectorInfo info={ info.collector! } />
                </Typography>
              </div>
            </CardBody>

            <CardFooter className="p-2">
              <div className="flex">
                <Chip
                  className={ styles.chip }
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
