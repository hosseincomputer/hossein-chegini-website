'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Brain, Database, Code, Sparkles } from 'lucide-react'
import HeroSection from '@/components/HeroSection'
import SkillsSection from '@/components/SkillsSection'
import ExperienceSection from '@/components/ExperienceSection'
import ImageProcessingSection from '@/components/ImageProcessingSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200">
      <Navigation />
      
      <HeroSection />
      
      <SkillsSection />
      
      <ExperienceSection />

      <ImageProcessingSection />

      <ProjectsSection />

      <ContactSection />
      
      {/* Floating scroll indicator */}
      <motion.div 
        className="fixed bottom-8 right-8 z-50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-12 h-12 bg-primary-600/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary-600/30">
          <ArrowDown className="w-5 h-5 text-primary-600" />
        </div>
      </motion.div>
    </main>
  )
}

