'use client'

import React, { useState } from 'react'

import {
  Avatar,
  Card,
  CardBody,
  Typography,
} from '@/app/components/common'
import type { CollectorInfoProps } from './types'

export function CollectorInfo(props: Readonly<CollectorInfoProps>) {
  const { info } = props
  const [openPopover, setOpenPopover] = useState(false)

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  }

  return (
    <div className="relative flex">
      <div>
        <Typography { ...triggers }>{ info.name }</Typography>
      </div>

      <Card { ...triggers } className={ `absolute top-[-130px] left-[-70px] ${ openPopover ? 'block' : 'hidden' }` }>
        <CardBody className="p-4">
          <div className="mb-2 flex items-center gap-4">
            <Avatar
              alt={ info.name }
              size="md"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              variant="circular"
            />

            <Typography
              className="font-medium truncate"
              color="blue-gray"
              variant="lead"
            >
              { info.name }
            </Typography>
          </div>

          <div>
            <Typography
              className="font-normal flex gap-2 truncate"
              color="gray"
              variant="small"
            >
              <strong>Email: </strong>

              <a
                className="hover:underline text-blue-500"
                href={ `mailto:${ info.email }` }
                rel="noreferrer"
                target="_blank"
              >
                { info.email }
              </a>
            </Typography>

            <Typography
              className="font-normal flex gap-2 truncate"
              color="gray"
              variant="small"
            >
              <strong>Phone: </strong>

              <a
                className="hover:underline text-blue-500"
                href={ `tel:${ info.phone }` }
                rel="noreferrer"
              >
                { info.phone }
              </a>
            </Typography>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
