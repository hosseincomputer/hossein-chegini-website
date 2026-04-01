import type { Metadata } from 'next'
import ImageProcessingClient from './ImageProcessingClient'

export const metadata: Metadata = {
  title: 'AI Image Processing & Computer Vision Service | Kasra Analytics',
  description: 'Deep learning image analysis service — plant disease detection, leaf classification, and object recognition using CNN models. Custom computer vision solutions for agriculture and research.',
  keywords: ['AI image processing service', 'computer vision Python', 'plant disease detection AI', 'leaf classification deep learning', 'object recognition CNN', 'custom computer vision solution'],
  openGraph: {
    title: 'AI Image Processing & Computer Vision Service | Kasra Analytics',
    description: 'Custom computer vision and deep learning image analysis — plant disease detection, leaf classification, and object recognition.',
    url: 'https://kasralabs.ai/solutions/image-processing',
  },
  alternates: {
    canonical: 'https://kasralabs.ai/solutions/image-processing',
  },
}

export default function ImageProcessingPage() {
  return <ImageProcessingClient />
}
