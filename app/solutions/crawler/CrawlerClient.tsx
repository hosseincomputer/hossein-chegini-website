'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Search } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function CrawlerClient() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200">
      <Navigation />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <Link
              href="/#solutions"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Solutions
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-violet-500/10 rounded-2xl flex items-center justify-center border border-violet-500/20">
                <Search className="w-10 h-10 text-violet-500" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Crawler
            </h1>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['Python', 'Automation', 'Data Extraction', 'BeautifulSoup', 'Scrapy'].map((tag) => (
                <span key={tag} className="px-4 py-1.5 bg-violet-500/10 text-violet-600 rounded-full border border-violet-500/20 text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20 shadow-sm mb-12"
          >
            <h2 className="text-2xl font-bold text-dark-800 mb-4">What it does</h2>
            <p className="text-dark-600 leading-relaxed text-lg mb-4">
              The Crawler solution automates the discovery and extraction of content from websites at scale.
              It navigates through pages, follows links, handles pagination, and pulls structured data —
              turning the unstructured web into clean, queryable datasets ready for analysis or integration
              into your existing systems.
            </p>
            <p className="text-dark-600 leading-relaxed text-lg mb-4">
              Built in Python with configurable scraping pipelines, the crawler respects rate limits and
              robots.txt rules while maximising coverage. Extracted data is parsed, deduplicated, and
              delivered in your preferred format — JSON, CSV, or direct database insertion.
            </p>
            <p className="text-dark-600 leading-relaxed text-lg">
              Typical use cases include competitor price monitoring, content aggregation, lead generation,
              market research, and feeding downstream AI pipelines with fresh, real-world data.
            </p>
          </motion.div>

          {/* Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20 shadow-sm mb-12"
          >
            <h2 className="text-2xl font-bold text-dark-800 mb-6">Architecture</h2>
            <div className="rounded-xl overflow-hidden border border-primary-500/10">
              <img
                src="/solutions/scrawler_diagram.jpeg"
                alt="Crawler architecture diagram"
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* What we offer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {[
              { title: 'Configurable Pipelines', desc: 'Custom crawl rules per domain — depth limits, URL filters, content selectors, and output schemas tailored to your target.' },
              { title: 'Scalable & Resilient', desc: 'Handles thousands of pages with retry logic, proxy rotation, and session management to avoid blocks.' },
              { title: 'Structured Output', desc: 'Data delivered clean — JSON, CSV, or direct to a database — ready for immediate use in dashboards or ML pipelines.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-primary-500/20 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-dark-800 mb-2">{item.title}</h3>
                <p className="text-dark-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-dark-600 mb-6 text-lg">Need data extracted from the web for your project?</p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-all duration-200 border border-primary-500 hover:border-primary-400 font-medium"
            >
              Get in touch
            </Link>
          </motion.div>

        </div>
      </div>
    </main>
  )
}
