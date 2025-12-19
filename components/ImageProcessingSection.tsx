'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

const ImageProcessingSection = () => {
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

  const nextLeaf = () => {
    setLeafIndex((prev) => (prev + 1) % leafImages.length)
  }

  const prevLeaf = () => {
    setLeafIndex((prev) => (prev - 1 + leafImages.length) % leafImages.length)
  }

  const nextPlant = () => {
    setPlantIndex((prev) => (prev + 1) % plantImages.length)
  }

  const prevPlant = () => {
    setPlantIndex((prev) => (prev - 1 + plantImages.length) % plantImages.length)
  }

  return (
    <section id="image-processing" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-200 via-cream-100 to-cream-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Image Processing</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Explore our plant and leaf image analysis samples
          </p>
        </motion.div>

        {/* Image Carousels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Leaves Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-primary-500/20"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-dark-800 mb-6 text-center">
              Leaves
            </h3>

            <div className="relative aspect-square mb-6 bg-cream-50 rounded-xl overflow-hidden">
              <Image
                src={leafImages[leafIndex]}
                alt={`Leaf ${leafIndex + 1}`}
                fill
                className="object-contain p-4"
                priority={leafIndex === 0}
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

              <span className="text-dark-700 font-medium">
                {leafIndex + 1} / {leafImages.length}
              </span>

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
            <h3 className="text-2xl md:text-3xl font-bold text-dark-800 mb-6 text-center">
              Plants
            </h3>

            <div className="relative aspect-square mb-6 bg-cream-50 rounded-xl overflow-hidden">
              <Image
                src={plantImages[plantIndex]}
                alt={`Plant ${plantIndex + 1}`}
                fill
                className="object-contain p-4"
                priority={plantIndex === 0}
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

              <span className="text-dark-700 font-medium">
                {plantIndex + 1} / {plantImages.length}
              </span>

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
      </div>
    </section>
  )
}

export default ImageProcessingSection
