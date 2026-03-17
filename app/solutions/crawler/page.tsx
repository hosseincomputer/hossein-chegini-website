import type { Metadata } from 'next'
import CrawlerClient from './CrawlerClient'

export const metadata: Metadata = {
  title: 'Crawler | Kasra Analytics',
  description: 'Automated web crawling and content extraction — turning unstructured web data into structured, actionable datasets for your business.',
  openGraph: {
    title: 'Crawler | Kasra Analytics',
    description: 'Automated web crawling and content extraction using Python.',
    url: 'https://kasralabs.ai/solutions/crawler',
  },
  alternates: {
    canonical: 'https://kasralabs.ai/solutions/crawler',
  },
}

export default function CrawlerPage() {
  return <CrawlerClient />
}
