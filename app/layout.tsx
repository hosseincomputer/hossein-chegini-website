import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://kasralabs.ai'),
  title: 'Kasralabs - Make Your Ideas Live and Productive | AI & ML Solutions',
  description: 'Bridge your ideas and data with AI. Practical ML that turns data into measurable actions. Expert AI & ML engineering, image processing, data analytics, and intelligent solutions.',
  keywords: ['Kasralabs', 'AI Solutions', 'Machine Learning', 'Image Processing', 'Data Analytics', 'Computer Vision', 'AI Engineering', 'ML Engineering', 'Data Science', 'Plant Analysis', 'Leaf Analysis', 'Auckland', 'New Zealand'],
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
    title: 'Kasralabs - Make Your Ideas Live and Productive',
    description: 'Bridge your ideas and data with AI. Practical ML that turns data into measurable actions. Expert AI & ML engineering and image processing solutions.',
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
    title: 'Kasralabs - Make Your Ideas Live and Productive',
    description: 'Bridge your ideas and data with AI. Practical ML that turns data into measurable actions.',
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
    description: 'Bridge your ideas and data with AI. Practical ML that turns data into measurable actions.',
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
      'Artificial Intelligence',
      'Machine Learning',
      'Image Processing',
      'Computer Vision',
      'Data Analytics',
      'Plant Analysis',
      'Leaf Analysis',
    ],
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
