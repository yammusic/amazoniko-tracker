export interface MarkerInfoType {
  title: string
  description: string
  position: {
    lat: number
    lng: number
  }
}

export interface MarkerInfoProps extends MarkerInfoType {
  onClick?: (marker: MarkerInfoType) => void
  onClose?: () => void
}
