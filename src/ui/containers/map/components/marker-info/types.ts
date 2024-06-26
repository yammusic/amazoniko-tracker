export interface MarkerInfoType {
  title: string
  description: string
  position: {
    lat: number
    lng: number
  }
}

export interface MarkerInfoProps extends MarkerInfoType {
  color?: 'red' | 'green' | 'orange'
  onClick?: () => void
  onClose?: () => void
  selected?: boolean
}
