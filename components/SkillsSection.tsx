'use client'

import { motion } from 'framer-motion'
import { Brain, Database, Code, Zap, Target, TrendingUp, Shield, Globe } from 'lucide-react'

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Artificial Intelligence",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Deep Learning", level: 90 },
        { name: "Neural Networks", level: 85 },
        { name: "Computer Vision", level: 80 },
        { name: "NLP", level: 75 },
        { name: "Reinforcement Learning", level: 70 }
      ]
    },
    {
      title: "Machine Learning",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Supervised Learning", level: 95 },
        { name: "Unsupervised Learning", level: 85 },
        { name: "Model Optimization", level: 90 },
        { name: "Feature Engineering", level: 88 },
        { name: "MLOps", level: 75 }
      ]
    },
    {
      title: "Data Engineering",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "SQL", level: 95 },
        { name: "Data Warehousing", level: 85 },
        { name: "ETL Pipelines", level: 90 },
        { name: "Big Data", level: 80 },
        { name: "Data Modeling", level: 88 }
      ]
    },
    {
      title: "Software Development",
      icon: Code,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "React/Next.js", level: 80 },
        { name: "Docker", level: 75 },
        { name: "Git", level: 90 }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="skills" className="py-20 bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building intelligent systems and data-driven solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="group"
            >
              <div className="bg-dark-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6 h-full hover:bg-dark-800/70 transition-all duration-300 card-hover">
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                        <span className="text-primary-400 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-dark-700 rounded-full h-2">
                        <motion.div
                          className="h-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-dark-800/30 backdrop-blur-sm border border-primary-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">Tools & Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Matplotlib",
                "PostgreSQL", "MySQL", "MongoDB", "Redis", "Apache Spark", "Kafka",
                "AWS", "Azure", "GCP", "Docker", "Kubernetes", "Jenkins",
                "React", "Node.js", "FastAPI", "Django", "Flask", "GraphQL"
              ].map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-dark-700/50 rounded-lg px-4 py-3 text-center hover:bg-primary-500/10 transition-all duration-300"
                >
                  <span className="text-gray-300 text-sm font-medium">{tool}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection

