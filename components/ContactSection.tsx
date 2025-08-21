'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react'
import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hosseinc.omputer@gmail.com",
      link: "mailto:hosseinc.omputer@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "0221234042",
      link: "tel:+640221234042"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Auckland, New Zealand",
      link: "#"
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com",
      color: "hover:text-blue-400"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com",
      color: "hover:text-blue-400"
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-950 mb-6">
            Get In <span className="text-primary-600">Touch</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Feel free to reach out if you'd like to collaborate or just say hello!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-dark-950 mb-8">
              Let's Connect
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-primary-500/30 hover:border-primary-600/50 transition-all duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center group-hover:bg-primary-600/30 transition-colors duration-300">
                    <info.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-dark-950 font-medium">{info.title}</h4>
                    <p className="text-dark-600">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-semibold text-dark-950 mb-6">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`w-12 h-12 bg-white/50 backdrop-blur-sm rounded-lg border border-primary-500/30 hover:border-primary-600/50 transition-all duration-300 flex items-center justify-center text-primary-600 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-dark-950 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-primary-500/30 rounded-lg text-dark-950 placeholder-dark-400 focus:outline-none focus:border-primary-600/50 transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-dark-950 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-primary-500/30 rounded-lg text-dark-950 placeholder-dark-400 focus:outline-none focus:border-primary-600/50 transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-dark-950 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-primary-500/30 rounded-lg text-dark-950 placeholder-dark-400 focus:outline-none focus:border-primary-600/50 transition-colors duration-300"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-dark-950 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-primary-500/30 rounded-lg text-dark-950 placeholder-dark-400 focus:outline-none focus:border-primary-600/50 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              
              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-all duration-200 border border-primary-600 hover:border-primary-500 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Taq Kasra Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-dark-950 mb-8 text-center">
              <span className="text-primary-600">Taq Kasra</span> - Ancient Persian Architecture
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Image */}
              <div className="relative">
                <img
                  src="/taq-kasra.jpg"
                  alt="Taq Kasra - Ancient Persian Archway"
                  className="w-full h-96 object-cover rounded-lg shadow-2xl border-4 border-primary-500/20"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="w-full h-96 bg-gradient-to-br from-primary-500/20 to-primary-600/30 rounded-lg shadow-2xl border-4 border-primary-500/20 flex items-center justify-center hidden">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary-600/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl text-primary-700 font-bold">🏛️</span>
                    </div>
                    <h4 className="text-2xl font-bold text-primary-700 mb-2">Taq Kasra</h4>
                    <p className="text-primary-600">Ancient Persian Archway</p>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Text */}
              <div className="text-left">
                <p className="text-lg text-dark-700 leading-relaxed mb-6">
                  <strong>Taq Kasra</strong>, also known as the Arch of Ctesiphon, is the world's largest single-span vaulted arch 
                  of unreinforced brickwork. Built in the 6th century CE during the Sasanian Empire, this magnificent structure 
                  stands as a testament to ancient Persian engineering and architectural brilliance.
                </p>
                <p className="text-lg text-dark-700 leading-relaxed mb-6">
                  Located in Ctesiphon, Iraq (near modern Baghdad), this architectural marvel was constructed in the 6th century CE 
                  during the Sasanian Empire. It holds the distinction of being the largest unreinforced brick arch in the world, 
                  showcasing the incredible engineering skills of ancient Persian architects.
                </p>
                <p className="text-lg text-dark-700 leading-relaxed">
                  This architectural marvel symbolizes the bridge between ancient wisdom and modern innovation - 
                  just as we bridge traditional knowledge with cutting-edge AI and machine learning technologies today.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
