'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building, Award } from 'lucide-react'

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Ph.D. Candidate in Information Systems",
      company: "University of Auckland",
      location: "Auckland, New Zealand",
      period: "2023 - Present",
      description: "Conducting cutting-edge research in AI and Information Systems. Focusing on machine learning applications, data analytics, and intelligent systems development.",
      achievements: [
        "Leading research in AI and Information Systems",
        "Developing innovative machine learning solutions",
        "Publishing in top-tier academic journals",
        "Teaching and mentoring graduate students"
      ],
      technologies: ["Python", "Machine Learning", "Data Analytics", "Research Methods", "Academic Writing"]
    },
    {
      title: "Research Assistant",
      company: "University of Auckland",
      location: "Auckland, New Zealand",
      period: "2022 - 2023",
      description: "Supported research projects in artificial intelligence and data science. Contributed to academic publications and conference presentations.",
      achievements: [
        "Assisted in AI research projects",
        "Contributed to academic publications",
        "Presented research at conferences",
        "Developed data analysis pipelines"
      ],
      technologies: ["Python", "R", "Statistical Analysis", "Research Tools", "Data Visualization"]
    },
    {
      title: "Graduate Teaching Assistant",
      company: "University of Auckland",
      location: "Auckland, New Zealand",
      period: "2021 - 2022",
      description: "Taught undergraduate courses in software engineering and computer science. Mentored students in programming and software development.",
      achievements: [
        "Taught software engineering courses",
        "Mentored 50+ undergraduate students",
        "Developed course materials and assessments",
        "Provided technical guidance and support"
      ],
      technologies: ["Java", "Python", "Software Engineering", "Teaching", "Student Mentoring"]
    },
    {
      title: "Software Developer Intern",
      company: "Tech Solutions",
      location: "Auckland, New Zealand",
      period: "2020 - 2021",
      description: "Developed web applications and software solutions. Gained hands-on experience in full-stack development and agile methodologies.",
      achievements: [
        "Built responsive web applications",
        "Collaborated with development teams",
        "Implemented modern web technologies",
        "Learned industry best practices"
      ],
      technologies: ["JavaScript", "React", "Node.js", "HTML/CSS", "Git"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="experience" className="py-20 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 {/* Section Header */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="text-center mb-16"
         >
                       {/* Taq Kasra Inspired Curve */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <svg
                width="450"
                height="100"
                viewBox="0 0 450 100"
                className="mx-auto"
              >
                {/* Main arch curve - wider and more closed */}
                <path
                  d="M 25 80 Q 225 5 425 80"
                  stroke="url(#expGradient)"
                  strokeWidth="3"
                  fill="none"
                  className="drop-shadow-lg"
                />
                {/* Decorative inner curve */}
                <path
                  d="M 75 70 Q 225 20 375 70"
                  stroke="url(#expGradient2)"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.7"
                />
                
                {/* Gradient definitions */}
                <defs>
                  <linearGradient id="expGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="50%" stopColor="#a5b8ff" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                  <linearGradient id="expGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8191ff" />
                    <stop offset="100%" stopColor="#8191ff" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
           
           <h2 className="text-4xl md:text-5xl font-bold mb-6">
             <span className="gradient-text">Professional Journey</span>
           </h2>
           <p className="text-xl text-gray-400 max-w-3xl mx-auto">
             A timeline of my academic and research journey in AI, Information Systems, and software development
           </p>
         </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-600" />

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-950 z-10" />

              {/* Content card */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <div className="bg-dark-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6 hover:bg-dark-800/70 transition-all duration-300 card-hover">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{experience.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Building className="w-4 h-4" />
                          <span>{experience.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-primary-400 text-sm font-medium">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-primary-400 mb-2 flex items-center">
                      <Award className="w-4 h-4 mr-2" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-1">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-start">
                          <span className="text-primary-500 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary-500/10 text-primary-400 text-xs rounded-full border border-primary-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-dark-800/30 backdrop-blur-sm border border-primary-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">Education</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <h4 className="text-xl font-semibold text-white mb-2">Ph.D. Information Systems</h4>
                <p className="text-primary-400 mb-1">Research in AI & Information Systems</p>
                <p className="text-gray-400 text-sm">University of Auckland • Current</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-white mb-2">Master of Science</h4>
                <p className="text-primary-400 mb-1">Artificial Intelligence</p>
                <p className="text-gray-400 text-sm">University of Auckland • Completed</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-white mb-2">Bachelor of Science</h4>
                <p className="text-primary-400 mb-1">Software Engineering</p>
                <p className="text-gray-400 text-sm">University of Auckland • Completed</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ExperienceSection
