import type { Metadata } from 'next'
import BookClient from './BookClient'

export const metadata: Metadata = {
  title: 'Vibe Coding — Book by Hossein Chegini | Kasra Analytics',
  description: 'Vibe Coding: A Systematic Approach to Development — a practical book by Hossein Chegini on modern AI-assisted software development. Available on Amazon.',
  keywords: ['Vibe Coding book', 'AI software development book', 'systematic development', 'Hossein Chegini book', 'coding with AI', 'software engineering book'],
  openGraph: {
    title: 'Vibe Coding — Book by Hossein Chegini',
    description: 'A practical book on systematic AI-assisted software development. Available on Amazon.',
    url: 'https://kasralabs.ai/book',
  },
  alternates: {
    canonical: 'https://kasralabs.ai/book',
  },
}

export default function BookPage() {
  return <BookClient />
}
