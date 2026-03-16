import type { Metadata } from 'next'
import ImageProcessingClient from './ImageProcessingClient'

export const metadata: Metadata = {
  title: 'Image Processing | Kasra Analytics',
  description: 'Computer vision and image analysis — leaf disease detection, plant classification, and object recognition using deep learning models.',
  openGraph: {
    title: 'Image Processing | Kasra Analytics',
    description: 'Computer vision and image analysis using deep learning.',
    url: 'https://kasralabs.ai/solutions/image-processing',
  },
  alternates: {
    canonical: 'https://kasralabs.ai/solutions/image-processing',
  },
}

export default function ImageProcessingPage() {
  return <ImageProcessingClient />
}
