'use client'

import { motion } from 'framer-motion'
import { BookOpen, ExternalLink, Star } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function BookClient() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200">
      <Navigation />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-primary-500/10 rounded-2xl flex items-center justify-center border border-primary-500/20">
                <BookOpen className="w-10 h-10 text-primary-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Vibe Coding
            </h1>
            <p className="text-xl text-dark-600 font-medium">A Systematic Approach to Development</p>
          </motion.div>

          {/* Book card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20 shadow-sm mb-10"
          >
            <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">

              {/* Book cover */}
              <div className="flex-shrink-0">
                <img
                  src="/book-cover.jpg"
                  alt="Vibe Coding book cover"
                  className="w-52 rounded-xl shadow-lg border border-primary-500/10"
                />
              </div>

              {/* Book details */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-dark-800 mb-2">Vibe Coding</h2>
                <p className="text-primary-600 font-medium mb-1">A Systematic Approach to Development with Practical Examples</p>
                <p className="text-dark-500 text-sm mb-4">by <span className="font-semibold text-dark-700">Hossein Chegini</span></p>

                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-sm text-dark-500 ml-2">Available on Amazon</span>
                </div>

                <p className="text-dark-600 leading-relaxed mb-6">
                  Vibe Coding presents a systematic and practical approach to modern software development,
                  combining AI-assisted coding techniques with structured engineering principles. Whether you
                  are a developer looking to leverage AI tools effectively or an engineer seeking a repeatable
                  development methodology, this book provides the frameworks and practical examples to elevate
                  your workflow.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.amazon.com/Vibe-Coding-Systematic-Development-Practical-ebook/dp/B0GX3733M4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-all duration-200 border border-primary-500 hover:border-primary-400 font-medium"
                  >
                    Buy on Amazon <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.amazon.com/stores/Hossein-Chegini/author/B0H1RC387M"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 hover:bg-white text-primary-600 rounded-lg transition-all duration-200 border border-primary-500/30 hover:border-primary-500/60 font-medium"
                  >
                    Author Page <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* What you will learn */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          >
            {[
              { title: 'Systematic Methodology', desc: 'A repeatable, structured approach to software development that scales across projects of any size.' },
              { title: 'AI-Assisted Development', desc: 'Learn how to effectively leverage AI coding tools while maintaining engineering rigour and code quality.' },
              { title: 'Practical Examples', desc: 'Real-world examples and case studies that demonstrate the methodology in action from start to finish.' },
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
            <a
              href="https://www.amazon.com/Vibe-Coding-Systematic-Development-Practical-ebook/dp/B0GX3733M4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-all duration-200 border border-primary-500 hover:border-primary-400 font-medium text-lg"
            >
              Get the Book on Amazon <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>

        </div>
      </div>
    </main>
  )
}
