import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://kasralabs.ai'),
  title: 'Kasralabs - AI as a Service | ML, Forecasting & Image Processing Solutions',
  description: 'KasraLabs provides practical AI-as-a-Service for real-world problems. Expert machine learning, time series forecasting, image processing, computer vision, and AI products. Bridge your ideas and data with AI.',
  keywords: ['AI as a Service', 'AI-as-a-Service', 'Machine Learning', 'ML', 'Forecasting', 'Time Series Forecasting', 'Image Processing', 'Computer Vision', 'AI Products', 'AI Solutions', 'Practical AI', 'Real-world AI', 'Data Analytics', 'Plant Analysis', 'Leaf Analysis', 'Auckland AI', 'New Zealand AI', 'Kasralabs'],
  authors: [{ name: 'Kasralabs' }],
  creator: 'Kasralabs',
  publisher: 'Kasralabs',
  robots: 'index, follow',
  icons: {
    icon: '/kasra_logo.png',
    shortcut: '/kasra_logo.png',
    apple: '/kasra_logo.png',
  },
  openGraph: {
    title: 'Kasralabs - AI as a Service | ML, Forecasting & Image Processing',
    description: 'KasraLabs provides practical AI-as-a-Service for real-world problems. Expert machine learning, forecasting, image processing, and AI products.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Kasralabs',
    url: 'https://kasralabs.ai',
    images: [
      {
        url: '/kasra_logo.png',
        width: 1200,
        height: 630,
        alt: 'Kasralabs Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kasralabs - AI as a Service | ML, Forecasting & Image Processing',
    description: 'KasraLabs provides practical AI-as-a-Service for real-world problems. Expert ML, forecasting, and image processing.',
    images: ['/kasra_logo.png'],
  },
  alternates: {
    canonical: 'https://kasralabs.ai',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Kasralabs',
    url: 'https://kasralabs.ai',
    logo: 'https://kasralabs.ai/kasra_logo.png',
    description: 'KasraLabs provides practical AI-as-a-Service for real-world problems. Expert machine learning, forecasting, image processing, and AI products.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Auckland',
      addressCountry: 'NZ',
    },
    sameAs: [
      'https://github.com/hosseincomputer',
      'https://www.linkedin.com/in/hossein-chegini/',
      'https://scholar.google.com/citations?user=8daZaoUAAAAJ&hl=en',
      'https://medium.com/@h.chegini',
    ],
    knowsAbout: [
      'AI as a Service',
      'Artificial Intelligence',
      'Machine Learning',
      'Forecasting',
      'Time Series Forecasting',
      'Image Processing',
      'Computer Vision',
      'Data Analytics',
      'AI Products',
      'Plant Analysis',
      'Leaf Analysis',
    ],
    makesOffer: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'AI as a Service',
        description: 'Practical AI solutions for real-world problems including ML, forecasting, and image processing',
      },
    },
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-cream-50 text-dark-950 antialiased`}>
        {children}
      </body>
    </html>
  )
}
