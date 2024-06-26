import type { MapProps as GMapProps } from '@vis.gl/react-google-maps'

export interface MapMarker {
  id: number
  name: string
  company: string
  address: string
  phone: string
  collectionAt: Date | string
  latitude: number
  longitude: number
}

export interface MapProps extends GMapProps {
  apiKey: string
  markers: MapMarker[]
}
