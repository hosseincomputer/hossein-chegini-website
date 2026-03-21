'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Map, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

const images = [
  { src: '/solutions/geo-map-1.jpg', alt: 'Geo Map Optimisation — Brisbane suburb polygons' },
  { src: '/solutions/geo-map-2.jpg', alt: 'Geo Map Optimisation — shortest path calculation' },
  { src: '/solutions/geo-map-3.jpg', alt: 'Geo Map Optimisation — route visualisation' },
]

const packages = [
  { name: 'Shapely / GeoMap', desc: 'Handles geometric operations such as detecting whether a point lies inside a polygon and calculating distances to boundaries.' },
  { name: 'KML Parser', desc: 'Reads and extracts suburb boundary data from KML files into usable formats.' },
  { name: 'JSON', desc: 'Structures and stores geospatial data and intermediate results in a flexible, readable format.' },
  { name: 'Geocoder', desc: 'Converts user addresses into geographic coordinates (latitude and longitude).' },
  { name: 'Haversine', desc: 'Calculates the distance between two geographic points based on their coordinates.' },
  { name: 'GeoPandas', desc: 'Manages, analyses, and visualises geospatial data efficiently in a tabular structure.' },
]

const pipeline = [
  'User provides their address',
  'Address is converted to geocodes (latitude, longitude)',
  'System checks if the address is inside any polygon — if so, returns "inside" and ends',
  'If not inside, for each polygon calculate using Shapely and Dijkstra\'s algorithm',
  'Sort the results across all polygons',
  'Depict the shortest path and destination on the map',
]

export default function GeoMapClient() {
  const [imgIndex, setImgIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const prev = () => setImgIndex((i) => (i - 1 + images.length) % images.length)
  const next = () => setImgIndex((i) => (i + 1) % images.length)

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
              <div className="w-20 h-20 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20">
                <Map className="w-10 h-10 text-emerald-500" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Geo Map Optimisation
            </h1>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['Python', 'GeoPandas', 'Shapely', 'Dijkstra', 'Geospatial', 'Route Optimisation'].map((tag) => (
                <span key={tag} className="px-4 py-1.5 bg-emerald-500/10 text-emerald-700 rounded-full border border-emerald-500/20 text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20 shadow-sm mb-12"
          >
            <h2 className="text-2xl font-bold text-dark-800 mb-4">Overview</h2>
            <p className="text-dark-600 leading-relaxed text-lg mb-4">
              This solution presents one of the first approaches to finding road distance based on suburb coordinates in Brisbane, Australia. The goal is to find the closest polygon — representing a suburb — to a user's address. If the address is inside the polygon, the software detects it; otherwise, it identifies the closest polygon and finds the shortest path from the user's address coordinates to the nearest edge of that polygon.
            </p>
            <p className="text-dark-600 leading-relaxed text-lg">
              This enables route finding for businesses that aim to identify the best services, facilities, and opportunities for people who reside in a particular suburb, or for those who want to find the closest suburb for their needs — providing a solution for determining the best branch or office for a user based on the road network.
            </p>
          </motion.div>

          {/* Business Value */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-dark-800 mb-6">Business Value</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { num: '1', title: 'Nearest Service Detection', desc: 'Finds the nearest office or service automatically, helping users — especially older individuals — quickly access the closest location without confusion.' },
                { num: '2', title: 'Time & Travel Savings', desc: 'Saves time and reduces travel effort by calculating the shortest route, avoiding unnecessary distance and heavy traffic.' },
                { num: '3', title: 'User-Friendly Experience', desc: 'Simple and intuitive, making it easy for all users including those less familiar with technology to navigate and make decisions confidently.' },
              ].map((item, i) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/20 shadow-sm"
                >
                  <div className="w-8 h-8 bg-emerald-500/10 rounded-full flex items-center justify-center mb-3 border border-emerald-500/20">
                    <span className="text-emerald-700 font-bold text-sm">{item.num}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-dark-800 mb-2">{item.title}</h3>
                  <p className="text-dark-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Slider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20 shadow-sm mb-12"
          >
            <h2 className="text-2xl font-bold text-dark-800 mb-6">Maps & Visualisations</h2>
            <div className="relative aspect-video bg-cream-50 rounded-xl overflow-hidden flex items-center justify-center mb-4">
              <img
                src={images[imgIndex].src}
                alt={images[imgIndex].alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="flex items-center justify-between">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prev}
                className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-700 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <span className="text-dark-700 font-medium">{imgIndex + 1} / {images.length}</span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={next}
                className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-700 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.div>

          {/* Pipeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20 shadow-sm mb-12"
          >
            <h2 className="text-2xl font-bold text-dark-800 mb-6">How It Works</h2>
            <ol className="space-y-4">
              {pipeline.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-7 h-7 shrink-0 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center text-emerald-700 font-bold text-sm mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-dark-600 leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
          </motion.div>

          {/* DFD Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20 shadow-sm mb-12"
          >
            <h2 className="text-2xl font-bold text-dark-800 mb-6">Pipeline Diagram</h2>
            <div
              className="relative rounded-xl overflow-hidden border border-primary-500/10 cursor-zoom-in group"
              onClick={() => setLightboxOpen(true)}
            >
              <img
                src="/solutions/Daisy_DFD_diagram.jpeg"
                alt="Geo Map Optimisation pipeline diagram"
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
                  src="/solutions/Daisy_DFD_diagram.jpeg"
                  alt="Geo Map Optimisation pipeline diagram"
                  className="w-full max-w-none my-8 px-4 cursor-default"
                  style={{ minWidth: '100%' }}
                  onClick={(e) => e.stopPropagation()}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Python Packages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-dark-800 mb-6">Python Packages Used</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {packages.map((pkg, i) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-primary-500/20 shadow-sm"
                >
                  <h3 className="font-semibold text-dark-800 mb-1">{pkg.name}</h3>
                  <p className="text-dark-600 text-sm leading-relaxed">{pkg.desc}</p>
                </motion.div>
              ))}
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
            <p className="text-dark-600 mb-6 text-lg">
              Interested in location-based optimisation or routing for your business?
            </p>
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
