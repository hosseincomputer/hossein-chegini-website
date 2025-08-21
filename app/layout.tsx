import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://hosseinchegini.com'),
  title: 'Hossein AI Thinking - AI & ML Engineer | Ph.D. Information Systems',
  description: 'If you have good ideas worth processing, I can lift them up. Expert AI & ML Engineer with Ph.D. in Information Systems. Specializing in artificial intelligence, machine learning, and data engineering solutions.',
  keywords: ['AI Engineer', 'Machine Learning', 'Information Systems', 'Data Science', 'Software Engineer', 'Ph.D.', 'University of Auckland', 'Artificial Intelligence', 'ML Engineer', 'Data Engineering'],
  authors: [{ name: 'Hossein Chegini' }],
  creator: 'Hossein Chegini',
  publisher: 'Hossein Chegini',
  robots: 'index, follow',
  openGraph: {
    title: 'Hossein AI Thinking - AI & ML Engineer | Ph.D. Information Systems',
    description: 'If you have good ideas worth processing, I can lift them up. Expert AI & ML Engineer with Ph.D. in Information Systems.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Hossein AI Thinking',
    url: 'https://hosseinchegini.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hossein AI Thinking - AI & ML Engineer | Ph.D. Information Systems',
    description: 'If you have good ideas worth processing, I can lift them up. Expert AI & ML Engineer with Ph.D. in Information Systems.',
  },
  alternates: {
    canonical: 'https://hosseinchegini.com',
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
