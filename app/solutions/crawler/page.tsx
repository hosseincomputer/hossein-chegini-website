import type { Metadata } from 'next'
import CrawlerClient from './CrawlerClient'

export const metadata: Metadata = {
  title: 'Web Scraping & Data Extraction Service | Kasra Analytics',
  description: 'Python-based web scraping and crawling service — extract structured data from any website at scale for price monitoring, lead generation, market research, and AI pipelines.',
  keywords: ['web scraping service', 'data extraction Python', 'automated web crawler', 'price monitoring scraper', 'lead generation crawling', 'BeautifulSoup Scrapy service'],
  openGraph: {
    title: 'Web Scraping & Data Extraction Service | Kasra Analytics',
    description: 'Python web scraping and data extraction — turning websites into structured datasets for your business.',
    url: 'https://kasralabs.ai/solutions/crawler',
  },
  alternates: {
    canonical: 'https://kasralabs.ai/solutions/crawler',
  },
}

export default function CrawlerPage() {
  return <CrawlerClient />
}
