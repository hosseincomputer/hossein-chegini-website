'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Sparkles, BookOpen, FileText } from 'lucide-react'

const HeroSection = () => {
  const scrollToNext = () => {
    const element = document.querySelector('#skills')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Taq Kasra */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://www.amusingplanet.com/2016/03/taq-kasra-archway-of-ctesiphon.html')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/80 via-dark-900/90 to-dark-950/95" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-primary-500/10 backdrop-blur-sm border border-primary-500/20 rounded-full px-6 py-3"
          >
            <Sparkles className="w-5 h-5 text-primary-400" />
            <span className="text-primary-300 font-medium">Welcome to my digital realm</span>
          </motion.div>

                     {/* Hand-drawn Arch Design */}
           <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, delay: 0.3 }}
             className="relative mb-8"
           >
             <svg
               width="600"
               height="280"
               viewBox="0 0 600 280"
               className="mx-auto"
             >
               {/* Shadow layer - positioned 4cm (approximately 40px) below */}
               <g opacity="0.6" filter="url(#shadow)">
                 {/* Shadow outer arch curve */}
                 <path
                   d="M 80 220 Q 300 60 520 220"
                   stroke="#000000"
                   strokeWidth="8"
                   fill="none"
                   strokeLinecap="round"
                 />
                 
                 {/* Shadow inner arch curve */}
                 <path
                   d="M 120 200 Q 300 80 480 200"
                   stroke="#000000"
                   strokeWidth="8"
                   fill="none"
                   strokeLinecap="round"
                 />
                 
                 {/* Shadow left side vertical segment */}
                 <path
                   d="M 80 220 L 80 240 L 120 240 L 120 200"
                   stroke="#000000"
                   strokeWidth="8"
                   fill="none"
                   strokeLinecap="round"
                 />
                 
                 {/* Shadow right side vertical segment */}
                 <path
                   d="M 520 220 L 520 240 L 480 240 L 480 200"
                   stroke="#000000"
                   strokeWidth="8"
                   fill="none"
                   strokeLinecap="round"
                 />
               </g>
               
               {/* Main arch - outer curve */}
               <path
                 d="M 80 180 Q 300 20 520 180"
                 stroke="url(#archGradient)"
                 strokeWidth="8"
                 fill="none"
                 className="drop-shadow-lg"
                 strokeLinecap="round"
               />
               
               {/* Main arch - inner curve */}
               <path
                 d="M 120 160 Q 300 40 480 160"
                 stroke="url(#archGradient)"
                 strokeWidth="8"
                 fill="none"
                 strokeLinecap="round"
               />
               
               {/* Main arch - left side vertical segment */}
               <path
                 d="M 80 180 L 80 200 L 120 200 L 120 160"
                 stroke="url(#archGradient)"
                 strokeWidth="8"
                 fill="none"
                 strokeLinecap="round"
               />
               
               {/* Main arch - right side vertical segment with shading */}
               <path
                 d="M 520 180 L 520 200 L 480 200 L 480 160"
                 stroke="url(#archGradient)"
                 strokeWidth="8"
                 fill="none"
                 strokeLinecap="round"
               />
               
               {/* Shading lines on right side */}
               <g opacity="0.3">
                 {Array.from({ length: 15 }, (_, i) => (
                   <line
                     key={i}
                     x1={490 + i * 2}
                     y1="160"
                     x2={490 + i * 2}
                     y2="200"
                     stroke="url(#archGradient)"
                     strokeWidth="1"
                   />
                 ))}
               </g>
               
               {/* Gradient definitions */}
               <defs>
                 <linearGradient id="archGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="#6366f1" />
                   <stop offset="50%" stopColor="#a5b8ff" />
                   <stop offset="100%" stopColor="#6366f1" />
                 </linearGradient>
                 
                 {/* Shadow filter */}
                 <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                   <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#000000" floodOpacity="0.3"/>
                 </filter>
               </defs>
             </svg>
           </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            <span className="text-white">I'm </span>
            <span className="gradient-text">Hossein Chegini</span>
            <br />
            <span className="text-4xl md:text-6xl text-gray-300 font-light">
              AI & ML Engineer
            </span>
            <br />
            <span className="text-2xl md:text-3xl text-primary-400 font-medium">
              Ph.D. Information Systems
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            If you have good ideas worth processing, I can lift them up. Crafting intelligent solutions 
            at the intersection of artificial intelligence, machine learning, and data engineering.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToNext}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border border-primary-500/30 text-primary-400 font-semibold rounded-lg hover:bg-primary-500/10 transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social Links */}
                     <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 1.0 }}
             className="flex justify-center flex-wrap gap-4 pt-8"
           >
                          <motion.a
                href="https://github.com/hosseincomputer"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-dark-800/50 backdrop-blur-sm border border-primary-500/20 rounded-full flex items-center justify-center text-primary-400 hover:text-primary-300 hover:bg-primary-500/10 transition-all duration-300"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/hossein-chegini/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-dark-800/50 backdrop-blur-sm border border-primary-500/20 rounded-full flex items-center justify-center text-primary-400 hover:text-primary-300 hover:bg-primary-500/10 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              
              <motion.a
                href="https://scholar.google.com/citations?user=8daZaoUAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-dark-800/50 backdrop-blur-sm border border-primary-500/20 rounded-full flex items-center justify-center text-primary-400 hover:text-blue-600 hover:bg-primary-500/10 transition-all duration-300"
              >
                <BookOpen className="w-6 h-6" />
              </motion.a>
              
              <motion.a
                href="https://medium.com/@h.chegini"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-dark-800/50 backdrop-blur-sm border border-primary-500/20 rounded-full flex items-center justify-center text-primary-400 hover:text-green-400 hover:bg-primary-500/10 transition-all duration-300"
              >
                <FileText className="w-6 h-6" />
              </motion.a>
              
                            <motion.a
                 href="mailto:hossein.computer@gmail.com"
                 whileHover={{ scale: 1.1, y: -2 }}
                 whileTap={{ scale: 0.95 }}
                 className="w-12 h-12 bg-dark-800/50 backdrop-blur-sm border border-primary-500/20 rounded-full flex items-center justify-center text-primary-400 hover:text-primary-300 hover:bg-primary-500/10 transition-all duration-300"
               >
                 <Mail className="w-6 h-6" />
               </motion.a>
           </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary-500/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
