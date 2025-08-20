'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Code, Globe, Database, Smartphone } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe integration. Features include user authentication, product management, and payment processing.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "Prisma"],
    image: "/api/placeholder/400/250",
    github: "https://github.com",
    live: "https://demo.com",
    category: "Full-Stack"
  },
  {
    id: 2,
    title: "AI Chat Application",
    description: "Real-time chat application powered by OpenAI's GPT API. Includes message history, user authentication, and responsive design.",
    technologies: ["React", "Node.js", "OpenAI API", "Socket.io", "MongoDB"],
    image: "/api/placeholder/400/250",
    github: "https://github.com",
    live: "https://demo.com",
    category: "AI/ML"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["Vue.js", "Firebase", "Vuex", "Vuetify", "PWA"],
    image: "/api/placeholder/400/250",
    github: "https://github.com",
    live: "https://demo.com",
    category: "Web App"
  },
  {
    id: 4,
    title: "Mobile Fitness Tracker",
    description: "Cross-platform mobile app for tracking workouts, nutrition, and fitness goals with data visualization and social features.",
    technologies: ["React Native", "Expo", "GraphQL", "Apollo", "Realm"],
    image: "/api/placeholder/400/250",
    github: "https://github.com",
    live: "https://demo.com",
    category: "Mobile"
  }
]

const categoryIcons = {
  "Full-Stack": Code,
  "AI/ML": Globe,
  "Web App": Database,
  "Mobile": Smartphone
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-primary-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development, 
            mobile applications, and modern web technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const CategoryIcon = categoryIcons[project.category as keyof typeof categoryIcons] || Code
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-dark-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-primary-900/20 to-dark-800 flex items-center justify-center">
                  <CategoryIcon className="w-16 h-16 text-primary-400" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary-500/20 text-primary-400 text-sm rounded-full border border-primary-500/30">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-dark-700 text-gray-300 text-sm rounded-full border border-dark-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-dark-700 hover:bg-dark-600 text-gray-300 hover:text-white rounded-lg transition-all duration-200 border border-dark-600 hover:border-primary-500/50"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-all duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

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
