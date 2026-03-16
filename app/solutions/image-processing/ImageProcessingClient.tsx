'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowLeft, ScanSearch } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function ImageProcessingClient() {
  const [leafIndex, setLeafIndex] = useState(0)
  const [plantIndex, setPlantIndex] = useState(0)

  const leafImages = [
    '/leaves/1.png',
    '/leaves/2.png',
    '/leaves/3.png',
    '/leaves/4.png',
    '/leaves/5.png',
    '/leaves/6.png',
  ]

  const plantImages = [
    '/plants/1.png',
    '/plants/2.png',
    '/plants/4.png',
    '/plants/5.png',
    '/plants/6.png',
    '/plants/8.png',
    '/plants/11.png',
  ]

  const nextLeaf = () => setLeafIndex((prev) => (prev + 1) % leafImages.length)
  const prevLeaf = () => setLeafIndex((prev) => (prev - 1 + leafImages.length) % leafImages.length)
  const nextPlant = () => setPlantIndex((prev) => (prev + 1) % plantImages.length)
  const prevPlant = () => setPlantIndex((prev) => (prev - 1 + plantImages.length) % plantImages.length)

  return (
    <main className="min-h-screen bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200">
      <Navigation />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

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
              <div className="w-20 h-20 bg-pink-500/10 rounded-2xl flex items-center justify-center border border-pink-500/20">
                <ScanSearch className="w-10 h-10 text-pink-500" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Image Processing
            </h1>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto leading-relaxed">
              Computer vision and deep learning for real-world biological image analysis —
              identifying leaf conditions, classifying plant species, and detecting anomalies
              with high accuracy using state-of-the-art neural networks.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {['Computer Vision', 'Python', 'Deep Learning', 'PyTorch', 'CNN'].map((tag) => (
                <span key={tag} className="px-4 py-1.5 bg-pink-500/10 text-pink-600 rounded-full border border-pink-500/20 text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* What we do */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
          >
            {[
              { title: 'Leaf Analysis', desc: 'Disease detection, health scoring, and morphological classification of leaf samples from images.' },
              { title: 'Plant Classification', desc: 'Species identification and growth-stage analysis using convolutional neural networks trained on botanical datasets.' },
              { title: 'Object Detection', desc: 'Real-time detection and bounding-box localisation of biological objects in images and video streams.' },
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

          {/* Image Carousels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold gradient-text text-center mb-12">Sample Results</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

              {/* Leaves Carousel */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-primary-500/20"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-dark-800 mb-6 text-center">Leaves</h3>
                <div className="relative aspect-square mb-6 bg-cream-50 rounded-xl overflow-hidden flex items-center justify-center p-4">
                  <img
                    src={leafImages[leafIndex]}
                    alt={`Leaf ${leafIndex + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevLeaf}
                    className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-700 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </motion.button>
                  <span className="text-dark-700 font-medium">{leafIndex + 1} / {leafImages.length}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextLeaf}
                    className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-700 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Plants Carousel */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-primary-500/20"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-dark-800 mb-6 text-center">Plants</h3>
                <div className="relative aspect-square mb-6 bg-cream-50 rounded-xl overflow-hidden flex items-center justify-center p-4">
                  <img
                    src={plantImages[plantIndex]}
                    alt={`Plant ${plantIndex + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevPlant}
                    className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-700 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </motion.button>
                  <span className="text-dark-700 font-medium">{plantIndex + 1} / {plantImages.length}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextPlant}
                    className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-700 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </motion.button>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-dark-600 mb-6 text-lg">Interested in applying image processing to your data?</p>
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
