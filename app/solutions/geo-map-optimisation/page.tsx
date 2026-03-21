import type { Metadata } from 'next'
import GeoMapClient from './GeoMapClient'

export const metadata: Metadata = {
  title: 'Geo Map Optimisation | Kasra Analytics',
  description: 'Location-based route optimisation using Python — finding the shortest path from a user address to the nearest suburb polygon in Brisbane, Australia.',
  openGraph: {
    title: 'Geo Map Optimisation | Kasra Analytics',
    description: 'Geospatial route optimisation using Shapely, GeoPandas, and Dijkstra\'s algorithm.',
    url: 'https://kasralabs.ai/solutions/geo-map-optimisation',
  },
  alternates: {
    canonical: 'https://kasralabs.ai/solutions/geo-map-optimisation',
  },
}

export default function GeoMapPage() {
  return <GeoMapClient />
}
