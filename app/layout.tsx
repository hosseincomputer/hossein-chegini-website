import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://kasralabs.ai'),
  title: 'Kasra Analytics - AI & ML Engineer | Ph.D. Information Systems',
  description: 'If you have good ideas worth processing, I can lift them up. Expert AI & ML Engineer with Ph.D. in Information Systems. Specializing in artificial intelligence, machine learning, and data engineering solutions.',
  keywords: ['AI Engineer', 'Machine Learning', 'Information Systems', 'Data Science', 'Software Engineer', 'Ph.D.', 'University of Auckland', 'Artificial Intelligence', 'ML Engineer', 'Data Engineering'],
  authors: [{ name: 'Hossein Chegini' }],
  creator: 'Hossein Chegini',
  publisher: 'Kasra Analytics',
  robots: 'index, follow',
  icons: {
    icon: '/kasra_logo.png',
    shortcut: '/kasra_logo.png',
    apple: '/kasra_logo.png',
  },
  openGraph: {
    title: 'Kasra Analytics - AI & ML Engineer | Ph.D. Information Systems',
    description: 'If you have good ideas worth processing, I can lift them up. Expert AI & ML Engineer with Ph.D. in Information Systems.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Kasra Analytics',
    url: 'https://kasralabs.ai',
    images: [
      {
        url: '/kasra_logo.png',
        width: 1200,
        height: 630,
        alt: 'Kasra Analytics Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kasra Analytics - AI & ML Engineer | Ph.D. Information Systems',
    description: 'If you have good ideas worth processing, I can lift them up. Expert AI & ML Engineer with Ph.D. in Information Systems.',
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
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-cream-50 text-dark-950 antialiased`}>
        {children}
      </body>
    </html>
  )
}
