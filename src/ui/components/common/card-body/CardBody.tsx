'use client'

import React from 'react'
import { CardBody as MTRCardBody } from '@material-tailwind/react'

import type { CardBodyProps } from './types'

export function CardBody(props: Readonly<CardBodyProps>) {
  const { children, ...rest } = props

  return (
    <MTRCardBody
      { ...rest as any }
    >
      { children }
    </MTRCardBody>
  )
}
