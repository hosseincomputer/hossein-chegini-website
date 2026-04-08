'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Search, Bot, Map, BarChart3, ScanSearch, ArrowRight } from 'lucide-react'

const solutions = [
  {
    slug: 'crawler',
    title: 'Context Creation Service',
    description: 'Automated web crawling and content extraction — turning unstructured web data into structured, actionable datasets for your business.',
    icon: Search,
    tags: ['Python', 'Automation', 'Data Extraction'],
    color: 'from-violet-900/20 to-dark-800',
    border: 'border-violet-500/20 hover:border-violet-500/40',
    iconColor: 'text-violet-400',
    tagBg: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  },
  {
    slug: 'bot-design',
    title: 'AI Conversation & Q&A Service',
    description: 'Intelligent conversational bots and automated agents — from RAG-powered document Q&A to customer support automation with high accuracy.',
    icon: Bot,
    tags: ['LLM', 'RAG', 'OpenAI API'],
    color: 'from-blue-900/20 to-dark-800',
    border: 'border-blue-500/20 hover:border-blue-500/40',
    iconColor: 'text-blue-400',
    tagBg: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  },
  {
    slug: 'image-processing',
    title: 'Image Processing',
    description: 'Computer vision and image analysis — leaf disease detection, plant classification, and object recognition using deep learning models.',
    icon: ScanSearch,
    tags: ['Computer Vision', 'Python', 'Deep Learning'],
    color: 'from-pink-900/20 to-dark-800',
    border: 'border-pink-500/20 hover:border-pink-500/40',
    iconColor: 'text-pink-400',
    tagBg: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  },
  {
    slug: 'geo-map-optimisation',
    title: 'Geo Map Optimisation',
    description: 'Spatial data analysis and geographic optimisation — route planning, location intelligence, and map-based insights for logistics and operations.',
    icon: Map,
    tags: ['GIS', 'Python', 'Google API'],
    color: 'from-emerald-900/20 to-dark-800',
    border: 'border-emerald-500/20 hover:border-emerald-500/40',
    iconColor: 'text-emerald-400',
    tagBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  },
  {
    slug: 'insight-generation',
    title: 'Insightful Analytics Service',
    description: 'Content analysis and viral prediction — gap analysis, trend detection, and data-driven insights for platforms like YouTube and social media.',
    icon: BarChart3,
    tags: ['Analytics', 'ML', 'Statistics'],
    color: 'from-amber-900/20 to-dark-800',
    border: 'border-amber-500/20 hover:border-amber-500/40',
    iconColor: 'text-amber-400',
    tagBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  },
]

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Solutions
          </h2>
          <p className="text-2xl md:text-3xl gradient-text max-w-4xl mx-auto font-medium">
            AI-powered services designed to solve real business problems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <motion.div
                key={solution.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`bg-dark-800/50 backdrop-blur-sm rounded-xl overflow-hidden border ${solution.border} transition-all duration-300`}
              >
                <div className={`relative h-48 bg-gradient-to-br ${solution.color} flex items-center justify-center`}>
                  <Icon className={`w-16 h-16 ${solution.iconColor}`} />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-300 mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-500 mb-4 leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {solution.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 text-sm rounded-full border ${solution.tagBg}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/solutions/${solution.slug}`}
                    className={`inline-flex items-center gap-2 text-sm font-medium ${solution.iconColor} hover:opacity-80 transition-opacity`}
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
