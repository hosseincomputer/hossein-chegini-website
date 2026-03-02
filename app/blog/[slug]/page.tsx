import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getArticleBySlug, getAllArticleSlugs } from '@/data/articles'
import AnimatedArticleContent from '@/components/blog/AnimatedArticleContent'

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticleBySlug(params.slug)
  if (!article) return {}

  return {
    title: `${article.title} | Kasralabs Blog`,
    description: article.description,
    keywords: article.keywords,
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      url: `https://kasralabs.ai/blog/${article.slug}`,
      images: [{ url: '/kasra_logo.png', width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
    },
    alternates: {
      canonical: `https://kasralabs.ai/blog/${article.slug}`,
    },
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Person',
      name: article.author,
      url: 'https://kasralabs.ai',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Kasralabs',
      logo: {
        '@type': 'ImageObject',
        url: 'https://kasralabs.ai/kasra_logo.png',
      },
    },
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: `https://kasralabs.ai/blog/${article.slug}`,
    keywords: article.keywords,
    url: `https://kasralabs.ai/blog/${article.slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <AnimatedArticleContent article={article} />
        </div>
      </article>
    </>
  )
}
