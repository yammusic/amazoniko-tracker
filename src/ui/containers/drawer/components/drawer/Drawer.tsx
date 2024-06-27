'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Chip, Collapse } from '@material-tailwind/react'
import { IoClose } from 'react-icons/io5'
import { LuMenu } from 'react-icons/lu'

import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from '@/app/components/common'
import { Drawer } from '@/app/components/drawer'
import { APP_TITLE } from '@/domain/constants/app'
import { useMediaQuery } from '@/domain/hooks/useMediaQuery'

import type { Collector } from '@/domain/prisma/types'
import type { DrawerContainerProps } from './types'

export function DrawerContainer(props: Readonly<DrawerContainerProps>) {
  const { items = [] } = props
  const isSm = useMediaQuery('sm')
  const [open, setOpen] = useState(!isSm)
  const [selected, setSelected] = useState<Collector | null>(null)

  const searchParams = useSearchParams()
  const collectorId = Number(searchParams.get('collector'))
  const routeId = Number(searchParams.get('route'))

  useEffect(() => {
    if (!collectorId) return
    const selected = items.find(item => item.id === collectorId)
    setSelected(selected || null)
  }, [collectorId])

  useEffect(() => {
    if (isSm) { setOpen(false) }
    else { setOpen(true) }
  }, [isSm])

  const onToggleDrawer = () => setOpen(isOpen => !isOpen)
  const onCloseDrawer = () => setOpen(false)

  const onSelectItem = (item: Collector) => {
    setSelected(item)
  }

  const onSelectRoute = () => {
    if (isSm) {
      onCloseDrawer()
    }
  }

  return (
    <div className={ `${isSm ? 'w-[0px]' : ''}` }>
      <IconButton className="absolute left-4 top-4 z-10 sm:block md:hidden bg-white" onClick={ onToggleDrawer }>
        <LuMenu color="black" size={ 20 } />
      </IconButton>

      <Drawer
        className="p-4"
        dismiss={ { enabled: false } }
        onClose={ onCloseDrawer }
        open={ open }
        overlay={ false }
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography color="blue-gray" variant="h5">
            { APP_TITLE }
          </Typography>

          <IconButton
            className="sm:block md:hidden"
            color="blue-gray"
            onClick={ onCloseDrawer }
            variant="text"
          >
            <IoClose size={ 20 } />
          </IconButton>
        </div>

        <Typography className="mb-2" color="gray">
          Collectors
        </Typography>

        <List className="p-0">
          { items.map((item) => {
            const isSelected = item.name === selected?.name

            return (
              <div key={ item.name }>
                <Link href={ `?collector=${item.id}` }>
                  <ListItem onClick={ () => onSelectItem(item) } selected={ isSelected }>
                    <ListItemPrefix>
                      <Avatar
                        alt={ item.name }
                        size="sm"
                        src={ `${item.avatar}` }
                        variant="circular"
                      />
                    </ListItemPrefix>

                    { item.name }
                  </ListItem>
                </Link>

                <Collapse open={ isSelected }>
                  <div className="mb-2 ml-2">
                    <Typography className="mt-3" color="gray" variant="small">
                      Collection routes
                    </Typography>

                    <List className="pr-0">
                      { item.routes?.map((route) => {
                        const isCollected = route.collectionAt <= new Date()
                        const isSelected = routeId === route.id

                        const getUrl = () => {
                          const params = new URLSearchParams(searchParams.toString())
                          params.set('route', `${route.id}`)
                          return `?${params.toString()}`
                        }

                        return (
                          <Link href={ `${getUrl()}` } key={ route.company }>
                            <ListItem className="flex items-center justify-between gap-2" onClick={ onSelectRoute } selected={ isSelected }>
                              <Typography className="text-base truncate" color="blue-gray">
                                { route.company }

                                <Typography className="text-xs" color="gray" variant="small">
                                  { route.collectionAt.toLocaleString() }
                                </Typography>
                              </Typography>

                              <Chip
                                className="rounded-full text-xs capitalize"
                                color={ isCollected ? 'green' : 'orange' }
                                size="sm"
                                value={ isCollected ? 'Collected' : 'Pending' }
                                variant={ isCollected ? 'gradient' : 'outlined' }
                              />
                            </ListItem>
                          </Link>
                        )
                      }) }
                    </List>
                  </div>
                </Collapse>
              </div>
            )
          }) }
        </List>
      </Drawer>
    </div>
  )
}
