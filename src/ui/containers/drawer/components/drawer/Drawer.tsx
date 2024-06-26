'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Collapse } from '@material-tailwind/react'
import { IoClose } from 'react-icons/io5'

import {
  IconButton,
  List,
  ListItem,
  Typography,
} from '@/app/components/common'
import { Drawer } from '@/app/components/drawer'
import { APP_TITLE } from '@/domain/constants/app'
// import { useMediaQuery } from '@/domain/hooks/media-queries'

import type { Collector } from '@/domain/prisma/types'
import type { DrawerContainerProps } from './types'

export function DrawerContainer(props: Readonly<DrawerContainerProps>) {
  const { items = [] } = props
  const [open, setOpen] = useState(true)
  const [selected, setSelected] = useState<Collector | null>(null)

  // const onToggleDrawer = () => setOpen(isOpen => !isOpen)
  const onCloseDrawer = () => setOpen(false)

  const onSelectItem = (item: Collector) => {
    setSelected(item)

  }

  console.info({ selected })
  // console.info({ sm: useMediaQuery('sm'), md: useMediaQuery('md'), lg: useMediaQuery('lg'), xl: useMediaQuery('xl') })

  return (
    <div className="ml-[467px]">
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

          <IconButton color="blue-gray" onClick={ onCloseDrawer } variant="text">
            <IoClose size={ 20 } />
          </IconButton>
        </div>

        <Typography className="mb-2 pr-4" color="gray">
          Collectors
        </Typography>

        <List className="p-0">
          { items.map((item) => {
            const isSelected = item.name === selected?.name

            return (
              <div key={ item.name }>
                <Link href={ `?collector=${item.id}` }>
                  <ListItem onClick={ () => onSelectItem(item) } selected={ isSelected }>
                    { item.name }
                  </ListItem>
                </Link>

                <Collapse open={ isSelected }>
                  <div className="mb-2 ml-2">
                    <Typography className="mt-3" color="gray" variant="small">
                      Collection routes
                    </Typography>

                    <List className="pr-0">
                      { item.routes?.map((route) => (
                        <ListItem key={ route.id }>
                          { route.name }
                        </ListItem>
                      )) }
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
