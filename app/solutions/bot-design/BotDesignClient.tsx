'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Bot, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

const productImages = [
  { src: '/solutions/Rag/product_1.jpg', alt: 'Skincare Product 1' },
  { src: '/solutions/Rag/product_2.jpg', alt: 'Skincare Product 2' },
  { src: '/solutions/Rag/product_3.jpg', alt: 'Skincare Product 3' },
  { src: '/solutions/Rag/product_4.jpg', alt: 'Skincare Product 4' },
  { src: '/solutions/Rag/product_5.jpg', alt: 'Skincare Product 5' },
]

export default function BotDesignClient() {
  const [imgIndex, setImgIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxSrc, setLightboxSrc] = useState('')

  const openLightbox = (src: string) => {
    setLightboxSrc(src)
    setLightboxOpen(true)
  }

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
              <div className="w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20">
                <Bot className="w-10 h-10 text-blue-500" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              AI Conversation & Q&A Service
            </h1>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['RAG', 'LLM', 'Document Q&A', 'OpenAI', 'Vector Database', 'Python'].map((tag) => (
                <span key={tag} className="px-4 py-1.5 bg-blue-500/10 text-blue-600 rounded-full border border-blue-500/20 text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* What is RAG */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20 shadow-sm mb-12"
          >
            <h2 className="text-2xl font-bold text-dark-800 mb-4">What is RAG?</h2>
            <p className="text-dark-600 leading-relaxed text-lg mb-4">
              As the amount of information and documents grows across different sources such as websites, PDFs, and media, it becomes like an ocean that is difficult to navigate. With the rise of generative AI, users now have the ability to <strong>talk to information</strong> instead of searching for it manually.
            </p>
            <p className="text-dark-600 leading-relaxed text-lg mb-4">
              Retrieval-Augmented Generation (RAG) is an AI approach that enables users to convert their information — whether text, websites, images, or documents — into an interactive chatbot. This allows users to communicate directly with their data.
            </p>
            <p className="text-dark-600 leading-relaxed text-lg">
              RAG chatbot services extend beyond simple chat and include: document Q&A systems, conversational AI for business documents, and knowledge assistants trained on specific domains.
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
              { title: 'Document Q&A', desc: 'Ask questions in plain English and get accurate answers from your own PDFs, manuals, or reports — no manual searching.' },
              { title: 'Private & Secure', desc: 'Your documents stay within your own system. No data is shared with public AI models.' },
              { title: 'Hybrid Support', desc: 'The bot handles routine queries and escalates to a human specialist when more detailed guidance is needed.' },
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

          {/* Use Case */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20 shadow-sm mb-12"
          >
            <h2 className="text-2xl font-bold text-dark-800 mb-4">Use Case: Skincare RAG Application</h2>
            <p className="text-dark-600 leading-relaxed text-lg mb-4">
              This solution presents a RAG application designed to assist users based on skincare brochures and product documents. The dataset includes scientific names, chemical ingredients, directions for use, and skin conditions for each product.
            </p>
            <p className="text-dark-600 leading-relaxed text-lg mb-6">
              The RAG system is trained on these documents and converted into a chatbot ready to answer queries such as <em>"Which product should I buy based on my skin condition?"</em> — and can escalate to a human specialist when needed.
            </p>

            {/* Product image slider */}
            <h3 className="text-xl font-semibold text-dark-800 mb-4">Product Documents</h3>
            <div className="bg-cream-50 rounded-xl p-4 border border-primary-500/10">
              <div
                className="relative aspect-[4/3] mb-4 rounded-lg overflow-hidden cursor-zoom-in group"
                onClick={() => openLightbox(productImages[imgIndex].src)}
              >
                <img
                  src={productImages[imgIndex].src}
                  alt={productImages[imgIndex].alt}
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 rounded-full p-3 shadow-lg">
                    <ZoomIn className="w-6 h-6 text-dark-700" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <motion.button
                  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                  onClick={() => setImgIndex((prev) => (prev - 1 + productImages.length) % productImages.length)}
                  className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center shadow hover:bg-primary-700 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <span className="text-dark-600 text-sm font-medium">{imgIndex + 1} / {productImages.length}</span>
                <motion.button
                  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                  onClick={() => setImgIndex((prev) => (prev + 1) % productImages.length)}
                  className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center shadow hover:bg-primary-700 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
              <p className="text-sm text-dark-500 text-center mt-3">Click image to enlarge</p>
            </div>
          </motion.div>

          {/* Pipeline diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20 shadow-sm mb-12"
          >
            <h2 className="text-2xl font-bold text-dark-800 mb-4">How the Pipeline Works</h2>
            <p className="text-dark-600 leading-relaxed text-lg mb-6">
              The pipeline consists of three core RAG stages: converting PDF documents into embeddings, indexing them in a vector database, and setting up the Q&A interaction. It monitors response quality with accuracy potentially reaching up to 90%, and can be deployed on WhatsApp, email, or web.
            </p>
            <div
              className="relative rounded-xl overflow-hidden border border-primary-500/10 cursor-zoom-in group"
              onClick={() => openLightbox('/solutions/Rag/pipeline.jpeg')}
            >
              <img
                src="/solutions/Rag/pipeline.jpeg"
                alt="RAG pipeline diagram"
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

          {/* Workflow steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/20 shadow-sm mb-12"
          >
            <h2 className="text-2xl font-bold text-dark-800 mb-6">Product Search Workflow</h2>
            <div className="space-y-4">
              {[
                'Ask initial questions to generate a shortlist of products from the RAG chatbot',
                'Continue asking more specific questions based on your skin condition',
                'The RAG system recommends consulting a specialist for detailed advice if needed',
                'Finalise your product choice once you are confident about the best option',
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-600 font-semibold text-sm">
                    {i + 1}
                  </div>
                  <p className="text-dark-600 leading-relaxed pt-1">{step}</p>
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
              href="/blog/rag-chatbot-service-document-qa"
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
            <p className="text-dark-600 mb-6 text-lg">Want a RAG chatbot trained on your business documents?</p>
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
              src={lightboxSrc}
              alt="Enlarged view"
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
