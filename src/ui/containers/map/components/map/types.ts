import type { CollectedRoute } from '@/domain/prisma'
import type { MapProps as GMapProps } from '@vis.gl/react-google-maps'

export interface MapMarker extends CollectedRoute {
}

export interface MapProps extends GMapProps {
  apiKey: string
  markers: MapMarker[]
}
