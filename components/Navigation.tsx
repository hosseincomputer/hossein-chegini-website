'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { X, ChevronDown } from 'lucide-react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsSolutionsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'articles', label: 'Articles' },
    { id: 'contact', label: 'Contact' }
  ]

  const solutionItems = [
    { href: '/solutions/crawler', label: 'Context Creation Service' },
    { href: '/solutions/bot-design', label: 'AI Conversation & Q&A Service' },
    { href: '/solutions/image-processing', label: 'Image Processing' },
    { href: '/solutions/geo-map-optimisation', label: 'Geo Map Optimisation' },
    { href: '/solutions/insight-generation', label: 'Insightful Analytics Service' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-cream-100/80 backdrop-blur-md border-b border-primary-500/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img
              src="/kasra_logo.png"
              alt="Kasra Analytics Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-xl font-bold text-primary-700">Kasra Analytics</span>
          </motion.div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.slice(0, 3).map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-dark-700 hover:text-primary-700 transition-colors duration-200 relative group"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}

            {/* Solutions dropdown */}
            <div className="relative" ref={dropdownRef}>
              <motion.button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="flex items-center gap-1 text-dark-700 hover:text-primary-700 transition-colors duration-200 relative group"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </motion.button>

              <AnimatePresence>
                {isSolutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-8 left-0 w-52 bg-cream-100/95 backdrop-blur-md border border-primary-500/20 rounded-xl shadow-lg overflow-hidden z-50"
                  >
                    {solutionItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsSolutionsOpen(false)}
                        className="block px-4 py-3 text-dark-700 hover:text-primary-700 hover:bg-primary-500/10 transition-all duration-200 text-sm"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navItems.slice(3).map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-dark-700 hover:text-primary-700 transition-colors duration-200 relative group"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-dark-700 hover:text-primary-700 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-cream-100/95 backdrop-blur-md border-b border-primary-500/20 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="block w-full text-left px-4 py-3 text-dark-700 hover:text-primary-700 hover:bg-primary-500/10 rounded-lg transition-all duration-200"
                >
                  {item.label}
                </motion.button>
              ))}
              <div className="px-4 py-2 text-xs font-semibold text-primary-600 uppercase tracking-wider">Solutions</div>
              {solutionItems.map((item, index) => (
                <motion.div key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (navItems.length + index) * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-left px-6 py-3 text-dark-700 hover:text-primary-700 hover:bg-primary-500/10 rounded-lg transition-all duration-200 text-sm"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
