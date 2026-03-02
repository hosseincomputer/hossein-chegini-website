'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FileText, Calendar, ExternalLink } from 'lucide-react'
import { Article } from '@/data/articles'

export default function AnimatedBlogList({ articles }: { articles: Article[] }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-dark-950 mb-6">
          <span className="text-primary-600">Blog</span>
        </h1>
        <p className="text-xl text-dark-600 max-w-3xl mx-auto">
          Insights and technical guides on AI, machine learning, and data engineering.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <Link key={article.id} href={`/blog/${article.slug}`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-white/50 backdrop-blur-sm rounded-xl overflow-hidden border border-primary-500/20 hover:border-primary-600/40 transition-all duration-300 h-full"
            >
              <div className="relative h-48 bg-gradient-to-br from-primary-500/10 to-primary-600/20 flex items-center justify-center">
                <FileText className="w-16 h-16 text-primary-600/40 group-hover:text-primary-600/60 transition-colors duration-300" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary-600/10 text-primary-700 text-sm rounded-full border border-primary-500/20">
                    {article.platform}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-dark-500 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>

                <h2 className="text-xl font-semibold text-dark-950 mb-3 group-hover:text-primary-700 transition-colors duration-300">
                  {article.title}
                </h2>
                <p className="text-dark-600 mb-4 leading-relaxed">
                  {article.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary-500/10 text-primary-700 text-sm rounded-full border border-primary-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-primary-600 font-medium group-hover:gap-2 transition-all duration-300">
                    Read Article
                  </div>
                  <a
                    href={article.mediumUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 text-dark-500 text-sm hover:text-primary-600 transition-colors duration-200"
                  >
                    Medium <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </>
  )
}
