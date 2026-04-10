'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, BarChart3, X, ZoomIn } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function InsightClient() {
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
              <div className="w-20 h-20 bg-amber-500/10 rounded-2xl flex items-center justify-center border border-amber-500/20">
                <BarChart3 className="w-10 h-10 text-amber-500" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Insightful Analytics Service
            </h1>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['LLM', 'EDA', 'YouTube API', 'GPT-4o', 'Python', 'Sentiment Analysis'].map((tag) => (
                <span key={tag} className="px-4 py-1.5 bg-amber-500/10 text-amber-600 rounded-full border border-amber-500/20 text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* What is an insightful service */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20 shadow-sm mb-12"
          >
            <h2 className="text-2xl font-bold text-dark-800 mb-4">What is an Insightful Service?</h2>
            <p className="text-dark-600 leading-relaxed text-lg mb-4">
              When reviewing AI roadmaps such as CRISP-DM, AI components go beyond just model training. An <strong>insightful service</strong> is a type of AI service that provides information, observability, and insights into a business use case — improving visibility into problems that were not clearly understood before applying AI.
            </p>
            <p className="text-dark-600 leading-relaxed text-lg">
              It may still use AI models or exploratory data analysis (EDA) to generate results, but its primary value is in surfacing actionable intelligence — identifying gaps, trends, and opportunities that humans alone would miss.
            </p>
          </motion.div>

          {/* Business value cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {[
              { title: 'Content Gap Detection', desc: 'Identify topics missing from your niche that have high audience demand — before competitors find them.' },
              { title: 'Sentiment Analysis', desc: 'Understand viewer complaints, praise, and dissatisfaction from comments using GPT-powered analysis.' },
              { title: 'Video Idea Generation', desc: 'Automatically generate high-potential video titles and descriptions based on real data and identified gaps.' },
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

          {/* Pipeline diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20 shadow-sm mb-12"
          >
            <h2 className="text-2xl font-bold text-dark-800 mb-4">The Insightful Pipeline</h2>
            <p className="text-dark-600 leading-relaxed text-lg mb-6">
              The pipeline consists of two main frameworks: <strong>data collection</strong> and <strong>insight generation</strong>. It begins by scraping YouTube channels — extracting views, comments, titles, descriptions, and transcriptions — then applies statistical and sentiment analysis before generating deep content insights.
            </p>
            <div
              className="relative rounded-xl overflow-hidden border border-primary-500/10 cursor-zoom-in group"
              onClick={() => setLightboxOpen(true)}
            >
              <img
                src="/solutions/Insight/insight.jpeg"
                alt="Insightful AI pipeline diagram"
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

          {/* Three LLM components */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20 shadow-sm mb-12"
          >
            <h2 className="text-2xl font-bold text-dark-800 mb-6">Three LLM Components</h2>
            <div className="space-y-5">
              {[
                { num: '1', title: 'Video Analysis LLM', desc: 'Performs initial analysis of video content, extracting key themes, topics, and patterns across the channel.' },
                { num: '2', title: 'Gap Detection LLM', desc: 'Identifies content gaps — topics with strong audience demand that are not yet covered in the channel.' },
                { num: '3', title: 'Idea Generation LLM', desc: 'Generates potential video titles and descriptions likely to attract strong views when published.' },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 text-amber-600 font-semibold">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-800 mb-1">{item.title}</h3>
                    <p className="text-dark-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Article link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary-500/20 shadow-sm mb-12"
          >
            <Link
              href="/blog/insightful-ai-service-youtube-analysis"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              Read the full article on our blog →
            </Link>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-dark-600 mb-6 text-lg">Want AI-powered insights into your content or business data?</p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-all duration-200 border border-primary-500 hover:border-primary-400 font-medium"
            >
              Get in touch
            </Link>
          </motion.div>

        </div>
      </div>

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
              src="/solutions/Insight/insight.jpeg"
              alt="Insightful AI pipeline diagram"
              className="w-full max-w-none my-8 px-4 cursor-default"
              style={{ minWidth: '100%' }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
