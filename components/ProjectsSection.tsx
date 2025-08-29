'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Code, Globe, Database, Smartphone, CheckCircle, Target } from 'lucide-react'

const completedProjects = [
  {
    id: 1,
    title: "Time Series Forecasting",
    description: "Using advanced Python methods and packages for implementing forecasting with enhanced accuracy.",
    technologies: ["Python", "SQL", "Statistics", "OpenAI API", "Google API"],
    category: "Data Science"
  },
  {
    id: 2,
    title: "LLM Chat RAG",
    description: "Converting your huge document into bot for a quick question and answer with high accuracy.",
    technologies: ["Python", "SQL", "Note", "Statistics", "OpenAI API"],
    category: "AI/ML"
  },
  {
    id: 3,
    title: "Main Stream Insights",
    description: "Using content analysis for viral prediction and gap analysis for required content such as YouTube.",
    technologies: ["Python", "SQL", "Note", "Statistics", "Google API"],
    category: "Analytics"
  },
  {
    id: 4,
    title: "Scrawler",
    description: "Automating the content for website.",
    technologies: ["Python", "SQL", "Note", "Statistics", "Google API"],
    category: "Automation"
  }
]

const futureProjects = [
  {
    id: 5,
    title: "Music Manager Band",
    description: "Comprehensive music management system for bands with scheduling, inventory, and performance tracking.",
    technologies: ["Python", "SQL", "Note", "Statistics", "Google API"],
    category: "Music"
  },
  {
    id: 6,
    title: "Image Processing and Object Detection",
    description: "Advanced computer vision system for image analysis and real-time object detection using AI.",
    technologies: ["Python", "SQL", "Statistics", "OpenAI API", "Google API"],
    category: "Computer Vision"
  },
  {
    id: 7,
    title: "Email Automatic Answering",
    description: "Intelligent email automation system for automatic response generation and management.",
    technologies: ["Python", "SQL", "Note", "Statistics", "OpenAI API"],
    category: "Automation"
  }
]

const categoryIcons = {
  "Data Science": Database,
  "AI/ML": Globe,
  "Analytics": Smartphone,
  "Automation": Code,
  "Music": Smartphone,
  "Computer Vision": Globe
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-2xl md:text-3xl gradient-text max-w-4xl mx-auto font-medium">
            A comprehensive toolkit for building intelligent systems and data-driven solutions
          </p>
        </motion.div>

        {/* Completed Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle className="w-8 h-8 text-green-400" />
            <h3 className="text-3xl font-bold gradient-text">Completed Projects</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {completedProjects.map((project, index) => {
              const CategoryIcon = categoryIcons[project.category as keyof typeof categoryIcons] || Code
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-dark-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
                >
                  <div className="relative h-48 bg-gradient-to-br from-green-900/20 to-dark-800 flex items-center justify-center">
                    <CategoryIcon className="w-16 h-16 text-green-400" />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-300 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-dark-700 text-gray-300 text-sm rounded-full border border-dark-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Future Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Target className="w-8 h-8 text-blue-400" />
            <h3 className="text-3xl font-bold gradient-text">Projects Keen to Do</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {futureProjects.map((project, index) => {
              const CategoryIcon = categoryIcons[project.category as keyof typeof categoryIcons] || Code
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-dark-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className="relative h-48 bg-gradient-to-br from-blue-900/20 to-dark-800 flex items-center justify-center">
                    <CategoryIcon className="w-16 h-16 text-blue-400" />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-300 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-dark-700 text-gray-300 text-sm rounded-full border border-dark-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-all duration-200 border border-primary-500 hover:border-primary-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            View More Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
