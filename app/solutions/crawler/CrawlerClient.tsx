'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Search, X, ZoomIn } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function CrawlerClient() {
  const [lightboxOpen, setLightboxOpen] = useState(false)

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
              Context Creation Service
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
            <div
              className="relative rounded-xl overflow-hidden border border-primary-500/10 cursor-zoom-in group"
              onClick={() => setLightboxOpen(true)}
            >
              <img
                src="/solutions/scrawler_diagram.jpeg"
                alt="Crawler architecture diagram"
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 rounded-full p-3 shadow-lg">
                  <ZoomIn className="w-6 h-6 text-dark-700" />
                </div>
              </div>
            </div>
            <p className="text-sm text-dark-500 text-center mt-3">Click image to enlarge</p>
          </motion.div>

          {/* Lightbox */}
          <AnimatePresence>
            {lightboxOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-start justify-center overflow-y-auto"
                onClick={() => setLightboxOpen(false)}
              >
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="fixed top-4 right-4 z-50 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-6 h-6 text-dark-700" />
                </button>
                <motion.img
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  src="/solutions/scrawler_diagram.jpeg"
                  alt="Crawler architecture diagram"
                  className="w-full max-w-none my-8 px-4 cursor-default"
                  style={{ minWidth: '100%' }}
                  onClick={(e) => e.stopPropagation()}
                />
              </motion.div>
            )}
          </AnimatePresence>

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

          {/* Article: AI-Driven Pipeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20 shadow-sm mb-12"
          >
            <h2 className="text-2xl font-bold text-dark-800 mb-8">
              An AI-Driven Pipeline for Automated Content Generation and SEO Optimisation
            </h2>

            <div className="space-y-8 text-dark-600 leading-relaxed">
              <div>
                <p className="text-lg mb-4">
                  When it comes to creating content for a website, generative AI can help partly, since the major part should still be conducted by human agents. This section depicts a systematic approach to creating content for a website using an AI-powered crawler pipeline.
                </p>
                <p className="text-lg">
                  The system consists of several components, code, and APIs to communicate with different platforms. However, the main part is the prompt, where we instruct the GPT model on how to create the content and with which parameters.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-dark-800 mb-3">The Prompt — Core of the Pipeline</h3>
                <p className="mb-4">The following shows a snapshot of the prompt used for content creation:</p>
                <div className="bg-dark-800/5 border border-dark-800/10 rounded-xl p-5 font-mono text-sm text-dark-700 leading-relaxed">
                  Create a thought-provoking question as a title in {'{lang}'} (3-6 words) about: {'{keywords}'}{'{full_context}'}.<br /><br />
                  Write a practical guide in {'{lang}'} about {'{gathered_content}'}{'{domain_specific_prompt}'}.<br />
                  Include step-by-step explanations and real-world applications. Write entirely in {'{lang}'}.<br />
                  Limit to {'{token_limit}'} tokens.
                </div>
                <p className="mt-4">
                  The words in the brackets could be static or dynamically change each time the program runs. Keywords can span domains such as robotics, aviation, computer science, and more.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-dark-800 mb-3">SEO and GEO Ranking with Google Trends</h3>
                <p className="mb-4">
                  The software is not just for creating content, but also for ranking it higher in SEO and GEO, which is why we have the Google API component. After the prompt, the text is compared against popular terms in Google Trends to produce comparable content that achieves a higher ranking.
                </p>
                <p>
                  This step is important because it shows that the purpose of the software is not just to create content, but to enhance it in a way that improves its standing in Google indexing.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-dark-800 mb-3">Input Parameters and Configuration</h3>
                <p className="mb-4">
                  A set of input parameters defines how the content should be created. This is not the final solution and could be changed based on users' ideas and content creators. They might come up with more or fewer input parameters depending on their domain expertise or creative preferences.
                </p>
                <p>
                  One of the other important components is reading the input parameters from a website location like a settings or context parameters page — this way users and clients can put their ideas and thoughts on how to create the next content, giving each piece high diversity and a unique style.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-dark-800 mb-3">Automated Publishing</h3>
                <p>
                  As the software becomes more sophisticated, one of the main challenges is automating the posting of content to any website once it is ready. This is done programmatically and automatically using Python. The complete pipeline creates content in a hybrid manner — managed and handled by both bots and humans — from prompt generation and Google Trends ranking through to automated publishing.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-primary-500/20">
              <Link
                href="/blog/ai-driven-pipeline-content-generation-seo"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                Read the full article on our blog →
              </Link>
            </div>
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
