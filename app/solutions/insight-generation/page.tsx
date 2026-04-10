import type { Metadata } from 'next'
import InsightClient from './InsightClient'

export const metadata: Metadata = {
  title: 'Insightful Analytics Service | Kasra Analytics',
  description: 'AI-powered insight generation service — YouTube channel analysis, sentiment analysis, content gap detection, and video idea generation using LLMs and EDA pipelines.',
  keywords: ['insightful AI service', 'YouTube channel analysis AI', 'content gap analysis', 'AI sentiment analysis', 'LLM insight generation', 'YouTube data analytics', 'AI content strategy'],
  openGraph: {
    title: 'Insightful Analytics Service | Kasra Analytics',
    description: 'AI-powered pipeline for YouTube analysis, sentiment detection, content gap identification, and video idea generation.',
    url: 'https://kasralabs.ai/solutions/insight-generation',
  },
  alternates: {
    canonical: 'https://kasralabs.ai/solutions/insight-generation',
  },
}

export default function InsightPage() {
  return <InsightClient />
}
