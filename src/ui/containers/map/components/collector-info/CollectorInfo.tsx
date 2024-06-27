'use client'

import React, { useState } from 'react'

import {
  Avatar,
  Card,
  CardBody,
  Typography,
} from '@/app/components/common'
import type { CollectorInfoProps } from './types'

import styles from './styles.module.scss'

export function CollectorInfo(props: Readonly<CollectorInfoProps>) {
  const { info } = props
  const [openPopover, setOpenPopover] = useState(false)

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  }

  return (
    <div className={ styles.container }>
      <div { ...triggers }>
        <Typography>{ info.name }</Typography>
      </div>

      <Card { ...triggers } className={ `${styles.card} ${ openPopover ? 'block' : 'hidden' }` }>
        <CardBody className={ styles.cardBody }>
          <div className={ styles.cardHeaderContainer }>
            <Avatar
              alt={ info.name }
              size="md"
              src={ `${info.avatar}` }
              variant="circular"
            />

            <Typography
              className={ styles.headerName }
              color="blue-gray"
              variant="lead"
            >
              { info.name }
            </Typography>
          </div>

          <div className={ styles.cardInfoContainer }>
            <Typography
              className={ styles.infoText }
              color="gray"
              variant="small"
            >
              <strong>Email: </strong>

              <a
                className={ styles.link }
                href={ `mailto:${ info.email }` }
                rel="noreferrer"
                target="_blank"
              >
                { info.email }
              </a>
            </Typography>

            <Typography
              className={ styles.infoText }
              color="gray"
              variant="small"
            >
              <strong>Phone: </strong>

              <a className={ styles.link } href={ `tel:${ info.phone }` }>
                { info.phone }
              </a>
            </Typography>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
