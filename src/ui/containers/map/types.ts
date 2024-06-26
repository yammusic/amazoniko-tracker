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

export interface MapSectionProps {
  markers: MapMarker[]
}
