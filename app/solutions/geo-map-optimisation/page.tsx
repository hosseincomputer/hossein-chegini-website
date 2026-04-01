import type { Metadata } from 'next'
import GeoMapClient from './GeoMapClient'

export const metadata: Metadata = {
  title: 'Geospatial Route Optimisation Service Python | Kasra Analytics',
  description: 'Find the nearest office, branch, or service location automatically using Python geospatial analysis — Shapely, GeoPandas, and Dijkstra\'s algorithm for shortest path routing.',
  keywords: ['geospatial route optimisation Python', 'nearest location finder', 'suburb polygon detection', 'Shapely GeoPandas service', 'shortest path algorithm', 'location-based service Australia'],
  openGraph: {
    title: 'Geospatial Route Optimisation Service | Kasra Analytics',
    description: 'Python geospatial service to find the nearest branch or location using polygon detection and shortest path routing.',
    url: 'https://kasralabs.ai/solutions/geo-map-optimisation',
  },
  alternates: {
    canonical: 'https://kasralabs.ai/solutions/geo-map-optimisation',
  },
}

export default function GeoMapPage() {
  return <GeoMapClient />
}
