import type { Metadata } from 'next'
import BotDesignClient from './BotDesignClient'

export const metadata: Metadata = {
  title: 'RAG Chatbot & Conversational AI Service | Kasra Analytics',
  description: 'Build a RAG chatbot trained on your business documents — PDF Q&A, product search, and knowledge assistants using Retrieval-Augmented Generation. Private, accurate, and deployable on WhatsApp or web.',
  keywords: ['RAG chatbot service', 'document Q&A AI', 'conversational AI for business', 'retrieval augmented generation service', 'chatbot for business documents', 'AI knowledge assistant', 'RAG pipeline Python'],
  openGraph: {
    title: 'RAG Chatbot & Conversational AI Service | Kasra Analytics',
    description: 'Custom RAG chatbot service — turn your PDFs and documents into an interactive AI assistant for your business.',
    url: 'https://kasralabs.ai/solutions/bot-design',
  },
  alternates: {
    canonical: 'https://kasralabs.ai/solutions/bot-design',
  },
}

export default function BotDesignPage() {
  return <BotDesignClient />
}
