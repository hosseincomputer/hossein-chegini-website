'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, ExternalLink } from 'lucide-react'
import { Article } from '@/data/articles'

export default function AnimatedArticleContent({ article }: { article: Article }) {
  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </motion.div>

      <motion.header
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-950 mb-6 leading-tight">
          {article.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-dark-500 mb-6">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {article.readingTime}
          </span>
          <span>By {article.author}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          {article.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary-500/10 text-primary-700 text-sm rounded-full border border-primary-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="w-full h-px bg-primary-500/20 mb-8" />
      </motion.header>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl text-dark-600 leading-relaxed mb-10 italic"
      >
        {article.description}
      </motion.p>

      {article.content.map((section, index) => (
        <motion.section
          key={section.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-2xl font-semibold text-dark-950 mb-4">
            {section.heading}
          </h2>
          {section.paragraphs.map((p, i) => (
            <p key={i} className="text-dark-700 leading-relaxed mb-4 text-lg">
              {p}
            </p>
          ))}
        </motion.section>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 p-8 bg-white/50 backdrop-blur-sm rounded-xl border border-primary-500/20 text-center"
      >
        <h3 className="text-xl font-semibold text-dark-950 mb-3">
          Want to read the full article?
        </h3>
        <p className="text-dark-600 mb-6">
          The complete article with diagrams is available on Medium.
        </p>
        <a
          href={article.mediumUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-primary-600/25 transition-all duration-300"
        >
          Continue Reading on Medium
          <ExternalLink className="w-5 h-5" />
        </a>
      </motion.div>
    </>
  )
}
