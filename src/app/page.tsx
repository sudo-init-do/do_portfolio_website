'use client'
import Link from 'next/link'
import { ArrowRight, Download, Github, ExternalLink, Zap, Code2, Terminal, Coffee, Music } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function HomePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (isSubmitting) return // Prevent double submission
    
    setIsSubmitting(true)
    setSubmitMessage('')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        setSubmitMessage('🚀 Message sent successfully! I\'ll get back to you soon.')
        e.currentTarget.reset()
      } else {
        setSubmitMessage('❌ Something went wrong. Please try again.')
      }
    } catch {
      setSubmitMessage('❌ Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className="space-y-32 pt-16 relative overflow-hidden">
      {/* Simplified Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-50">
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, -25, 0],
            rotate: [0, 360]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 text-primary/20"
        >
          <Code2 size={48} />
        </motion.div>
        <motion.div
          animate={{ 
            x: [0, -40, 0],
            y: [0, 30, 0],
            rotate: [0, -360]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-20 text-blue-500/20"
        >
          <Terminal size={36} />
        </motion.div>
      </div>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex items-center justify-center relative z-10 px-4 sm:px-6 lg:px-8"
      >
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Profile Picture - Simplified Anime Style */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative order-2 lg:order-1 flex justify-center"
          >
            <div className="relative w-72 h-72 lg:w-80 lg:h-80 mx-auto">
              {/* Simplified Animated Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
              ></motion.div>
              
              {/* Main Profile Container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute inset-8 rounded-full overflow-hidden glass backdrop-blur-lg border-2 border-primary/20"
              >
                {/* Anime-Style Avatar */}
                <div className="w-full h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative">
                  {/* Character Base */}
                  <div className="relative w-48 h-48">
                    {/* Head */}
                    <div className="absolute inset-0 bg-gradient-to-b from-amber-200 to-amber-300 rounded-full border-2 border-amber-400"></div>
                    
                    {/* Hair */}
                    <div className="absolute -top-6 left-2 w-44 h-32 bg-gradient-to-b from-slate-800 to-slate-700 rounded-t-full transform -rotate-2"></div>
                    <div className="absolute -top-4 left-8 w-8 h-16 bg-gradient-to-b from-slate-800 to-slate-700 rounded-full transform rotate-12"></div>
                    <div className="absolute -top-4 right-8 w-6 h-14 bg-gradient-to-b from-slate-800 to-slate-700 rounded-full transform -rotate-12"></div>
                    
                    {/* Eyes */}
                    <div className="absolute top-16 left-12 w-8 h-12 bg-white rounded-full border border-slate-400">
                      <div className="absolute top-2 left-2 w-4 h-8 bg-blue-600 rounded-full">
                        <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="absolute top-16 right-12 w-8 h-12 bg-white rounded-full border border-slate-400">
                      <div className="absolute top-2 left-2 w-4 h-8 bg-blue-600 rounded-full">
                        <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Glasses */}
                    <div className="absolute top-14 left-10 w-28 h-16 border-2 border-slate-700 rounded-lg bg-transparent">
                      <div className="absolute left-0 top-6 w-12 h-8 border-2 border-slate-700 rounded-lg bg-blue-100/20"></div>
                      <div className="absolute right-0 top-6 w-12 h-8 border-2 border-slate-700 rounded-lg bg-blue-100/20"></div>
                      <div className="absolute left-1/2 top-8 w-2 h-1 bg-slate-700 transform -translate-x-1/2"></div>
                    </div>
                    
                    {/* Nose */}
                    <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-amber-400 rounded-full"></div>
                    
                    {/* Mouth */}
                    <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-red-400 rounded-full"></div>
                    
                    {/* Hoodie/Collar */}
                    <div className="absolute bottom-0 left-8 w-32 h-20 bg-gradient-to-b from-slate-700 to-slate-800 rounded-t-3xl"></div>
                  </div>
                  
                  {/* Floating Code Elements */}
                  <motion.div
                    animate={{ 
                      y: [-10, 10, -10],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-4 right-4 text-green-400 text-lg font-mono"
                  >
                    {"{ }"}
                  </motion.div>
                  <motion.div
                    animate={{ 
                      y: [10, -10, 10],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-4 left-4 text-blue-400 text-sm font-mono"
                  >
                    &lt;/&gt;
                  </motion.div>
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute top-1/2 right-2 text-purple-400"
                  >
                    <Code2 size={20} />
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Tech Icons */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="relative w-full h-full">
                  <motion.div 
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-primary"
                  >
                    <Terminal size={28} />
                  </motion.div>
                  <motion.div 
                    animate={{ y: [5, -5, 5] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    className="absolute top-1/2 -right-8 transform -translate-y-1/2 text-blue-500"
                  >
                    <Code2 size={24} />
                  </motion.div>
                  <motion.div 
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-green-500"
                  >
                    <Coffee size={26} />
                  </motion.div>
                  <motion.div 
                    animate={{ y: [4, -4, 4] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                    className="absolute top-1/2 -left-8 transform -translate-y-1/2 text-purple-500"
                  >
                    <Music size={22} />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          {/* Hero Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center rounded-full glass px-6 py-3 text-sm font-medium border-2 border-primary/20"
            >
              <motion.span 
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mr-3 inline-block h-3 w-3 rounded-full bg-gradient-to-r from-green-400 to-green-600"
              /> 
              Available for Epic Projects
            </motion.div>
            
            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-tight"
              >
                <motion.span 
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="bg-gradient-to-r from-primary via-purple-600 to-cyan-500 bg-clip-text text-transparent bg-[length:400%_auto] block"
                >
                  Obaloluwa
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="text-foreground bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text block"
                >
                  Oyeyemi
                </motion.span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="space-y-4"
              >
                <motion.p 
                  className="text-2xl font-bold text-primary"
                  animate={{ 
                    textShadow: [
                      "0 0 10px rgba(var(--primary), 0.3)",
                      "0 0 20px rgba(var(--primary), 0.6)",
                      "0 0 10px rgba(var(--primary), 0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Digital Sorcerer & Code Artisan
                </motion.p>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  I craft <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded">mind-blowing digital experiences</span> that push boundaries. 
                  From blazing-fast web apps to stunning animations, I turn wild ideas into pixel-perfect reality.
                </p>
                
                {/* Creative Stats */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="grid grid-cols-3 gap-4 pt-6"
                >
                  <div className="text-center p-3 rounded-xl glass border border-primary/20">
                    <Code2 className="mx-auto text-primary mb-2" size={20} />
                    <div className="text-base font-bold text-primary">50+</div>
                    <div className="text-xs text-muted-foreground">Projects Built</div>
                  </div>
                  <div className="text-center p-3 rounded-xl glass border border-blue-500/20">
                    <Terminal className="mx-auto text-blue-500 mb-2" size={20} />
                    <div className="text-base font-bold text-blue-500">5+</div>
                    <div className="text-xs text-muted-foreground">Languages</div>
                  </div>
                  <div className="text-center p-3 rounded-xl glass border border-purple-500/20">
                    <Coffee className="mx-auto text-purple-500 mb-2" size={20} />
                    <div className="text-base font-bold text-purple-500">∞</div>
                    <div className="text-xs text-muted-foreground">Coffee Cups</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start justify-center sm:justify-start w-full max-w-4xl"
            >
              {/* Primary CTA Button */}
              <motion.div 
                whileHover={{ scale: 1.02, y: -1 }} 
                whileTap={{ scale: 0.98 }}
                className="relative group w-full sm:w-auto"
              >
                <Link 
                  href="/#contact" 
                  className="btn-lift primary-glow inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-primary via-blue-600 to-purple-600 px-6 lg:px-8 py-3 lg:py-4 font-bold text-primary-foreground shadow-xl transition-all duration-300 text-sm lg:text-base relative overflow-hidden border border-white/10 w-full sm:w-auto"
                >
                  <Zap size={20} />
                  Let&apos;s Create Magic
                  <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
                </Link>
              </motion.div>
              
              {/* Resume Download Button */}
              <motion.div 
                whileHover={{ scale: 1.02, y: -1 }} 
                whileTap={{ scale: 0.98 }}
                className="relative group w-full sm:w-auto"
              >
                <a 
                  href="/Oyeyemi_Obaloluwa_Emmanuel_Resume.docx" 
                  download="Oyeyemi_Obaloluwa_Emmanuel_Resume.docx"
                  className="btn-lift download-glow inline-flex items-center justify-center gap-3 rounded-2xl glass px-4 lg:px-6 py-3 lg:py-4 font-bold transition-all duration-300 text-sm lg:text-base border-2 border-emerald-500/30 hover:border-emerald-400/60 hover:bg-emerald-500/10 relative overflow-hidden backdrop-blur-md w-full sm:w-auto"
                >
                  <Download size={20} className="text-emerald-400" />
                  <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                    Download Resume
                  </span>
                </a>
              </motion.div>
              
              {/* GitHub Button */}
              <motion.div 
                whileHover={{ scale: 1.02, y: -1 }} 
                whileTap={{ scale: 0.98 }}
                className="relative group w-full sm:w-auto"
              >
                <a 
                  href="https://github.com/sudo-init-do" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lift github-glow inline-flex items-center justify-center gap-3 rounded-2xl glass px-4 lg:px-6 py-3 lg:py-4 font-bold transition-all duration-300 text-sm lg:text-base border-2 border-purple-500/30 hover:border-purple-400/60 hover:bg-purple-500/10 relative overflow-hidden backdrop-blur-md w-full sm:w-auto"
                >
                  <Github size={20} className="text-purple-400" />
                  <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">
                    Code Gallery
                  </span>
                  <ExternalLink className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-purple-400" size={16} />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        id="projects" 
        className="space-y-12"
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-5xl font-black tracking-tight">Epic Projects Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Check out these insane projects where I&apos;ve pushed the limits of what&apos;s possible with code!
          </p>
          <Link 
            className="inline-flex items-center gap-3 text-primary font-bold text-lg hover:gap-4 transition-all" 
            href="/projects"
          >
            Explore All Projects <ArrowRight size={24} />
          </Link>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {[
            { 
              title: 'CSV Cleaner & Validator', 
              desc: 'Advanced Python tool for data processing, cleaning CSV files, and validating data integrity with outlier detection.', 
              href: 'https://github.com/sudo-init-do/csv-cleaner-validator',
              tech: ['Python', 'Data Processing', 'CSV', 'Validation'],
              intensity: 'Data Science'
            },
            { 
              title: 'CyberSentinel', 
              desc: 'Real-time network security monitoring system with Rust backend and React dashboard for threat detection.', 
              href: 'https://github.com/sudo-init-do/do_cybersentinel',
              tech: ['Rust', 'React', 'TypeScript', 'Security'],
              intensity: 'Enterprise'
            },
            { 
              title: 'GoShare CLI', 
              desc: 'Modern file sharing tool with React UI, QR codes, and cross-platform support for instant network file sharing.', 
              href: 'https://github.com/sudo-init-do/go_share_cli',
              tech: ['Go', 'React', 'CLI', 'Networking'],
              intensity: 'Lightning'
            },
          ].map((project, index) => (
            <motion.a 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              href={project.href} 
              className="group relative overflow-hidden rounded-2xl glass p-8 hover:shadow-2xl transition-all duration-300 border border-primary/20"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative space-y-6">
                <div className="h-48 rounded-xl bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ExternalLink size={32} className="text-primary/60" />
                  </motion.div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs font-bold px-2 py-1 rounded-full bg-primary/20 text-primary">
                      {project.intensity}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  Dive In <ArrowRight size={16} />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        id="contact" 
        className="space-y-12"
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-5xl font-black tracking-tight">Ready to Build Something Insane?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Got a wild idea that needs a digital wizard? Let&apos;s turn your vision into the next big thing!
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form className="glass rounded-2xl p-8 space-y-6 border border-primary/20" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-primary">Your Name</label>
                <input 
                  id="name"
                  name="name" 
                  placeholder="John Doe" 
                  className="w-full rounded-xl border-2 border-primary/20 bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" 
                  required 
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-primary">Email Address</label>
                <input 
                  id="email"
                  name="email" 
                  type="email" 
                  placeholder="john@awesome.com" 
                  className="w-full rounded-xl border-2 border-primary/20 bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" 
                  required 
                />
              </motion.div>
            </div>
            <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold text-primary">Your Epic Idea</label>
              <textarea 
                id="message"
                name="message" 
                placeholder="Tell me about your wild project idea... the crazier, the better!" 
                rows={6}
                className="w-full rounded-xl border-2 border-primary/20 bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none font-medium" 
                required 
              />
            </motion.div>
            <motion.button 
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              className="btn-lift w-full rounded-xl bg-gradient-to-r from-primary to-blue-600 px-8 py-4 font-bold text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Launching...' : 'Launch This Project!'}
            </motion.button>
            
            {submitMessage && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-center p-4 rounded-xl ${
                  submitMessage.includes('successfully') 
                    ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                    : 'bg-red-500/10 border border-red-500/20 text-red-400'
                }`}
              >
                {submitMessage}
              </motion.div>
            )}
          </form>
        </motion.div>
      </motion.section>
    </div>
  )
}
