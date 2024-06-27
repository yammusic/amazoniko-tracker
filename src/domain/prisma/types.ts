export interface Collector {
  id: number
  name: string
  email: string
  phone: string | null
  avatar: string | null
  routes?: CollectedRoute[]
}

export interface CollectedRoute {
  id: number
  collectorId: number
  name: string
  company: string
  address: string
  phone: string
  material: string
  collectionAt: Date
  latitude: number
  longitude: number
  collector?: Collector
}
