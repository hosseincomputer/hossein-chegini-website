import { Metadata } from 'next'
import { articles } from '@/data/articles'
import AnimatedBlogList from '@/components/blog/AnimatedBlogList'

export const metadata: Metadata = {
  title: 'Blog | Kasralabs - AI, Machine Learning & Data Engineering Insights',
  description: 'Technical articles and insights on AI as a Service, machine learning, forecasting, and data engineering by Hossein Chegini.',
  keywords: ['AI blog', 'Machine Learning articles', 'AIaaS', 'Data Engineering', 'Kasralabs blog'],
  openGraph: {
    title: 'Blog | Kasralabs',
    description: 'Technical articles on AI, ML, and data engineering.',
    type: 'website',
    url: 'https://kasralabs.ai/blog',
  },
  alternates: {
    canonical: 'https://kasralabs.ai/blog',
  },
}

export default function BlogPage() {
  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedBlogList articles={articles} />
      </div>
    </main>
  )
}
