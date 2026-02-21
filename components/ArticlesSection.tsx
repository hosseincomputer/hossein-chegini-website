'use client'

import { motion } from 'framer-motion'
import { ExternalLink, FileText, Calendar } from 'lucide-react'

const articles = [
  {
    id: 1,
    title: "AI as a Service (AIaaS): What It Really Means",
    description: "Exploring the true meaning of AI-as-a-Service — what it is, why it matters, and how it powers real-world solutions for businesses.",
    url: "https://medium.com/@h.chegini/ai-as-a-service-aiaas-what-it-really-means-335d17745e9b",
    date: "2026-02-20",
    tags: ["AI", "AIaaS", "Machine Learning"],
    platform: "Medium"
  }
]

export default function ArticlesSection() {
  return (
    <section id="articles" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-950 mb-6">
            Latest <span className="text-primary-600">Articles</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Insights and technical guides on AI, machine learning, and data engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-white/50 backdrop-blur-sm rounded-xl overflow-hidden border border-primary-500/20 hover:border-primary-600/40 transition-all duration-300"
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

                <h3 className="text-xl font-semibold text-dark-950 mb-3 group-hover:text-primary-700 transition-colors duration-300">
                  {article.title}
                </h3>
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

                <div className="flex items-center gap-1 text-primary-600 font-medium group-hover:gap-2 transition-all duration-300">
                  Read Article <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
