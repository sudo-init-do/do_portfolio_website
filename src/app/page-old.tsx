'use client'
import Link from 'next/link'
import { ArrowRight, Download, Github, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function HomePage() {
  return (
    <div className="space-y-32 pt-16">
'use client'
import Link from 'next/link'
import { ArrowRight, Download, Github, ExternalLink, Zap, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <div className="space-y-32 pt-16">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-8"
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center rounded-full glass px-6 py-3 text-sm font-medium border-2 border-primary/20"
          >
            <motion.span 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mr-3 inline-block h-3 w-3 rounded-full bg-green-500"
            /> 
            🚀 Available for Epic Projects
          </motion.div>
          
          <h1 className="text-6xl font-black tracking-tight sm:text-7xl lg:text-8xl">
            <motion.span 
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent bg-[length:200%_auto]"
            >
              Obaloluwa
            </motion.span>
            <br />
            <span className="text-foreground">Oyeyemi</span>
          </h1>
          
          <div className="space-y-4">
            <motion.p 
              className="text-2xl font-bold text-primary"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Digital Sorcerer & Code Artisan ✨
            </motion.p>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-muted-foreground leading-relaxed">
              I craft <span className="text-primary font-semibold">mind-blowing digital experiences</span> that push boundaries. 
              From blazing-fast web apps to stunning animations, I turn wild ideas into pixel-perfect reality.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="/#contact" 
              className="btn-lift inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-blue-600 px-8 py-4 font-bold text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
            >
              <Zap size={20} /> Let&apos;s Create Magic
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a 
              href="/Oyeyemi-Obaloluwa-CV.pdf" 
              className="btn-lift inline-flex items-center gap-3 rounded-full glass px-8 py-4 font-bold transition-all duration-300 text-lg border-2 border-primary/20"
            >
              <Download size={20} /> Grab My Resume
            </a>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a 
              href="https://github.com/sudo-init-do" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lift inline-flex items-center gap-3 rounded-full glass px-8 py-4 font-bold transition-all duration-300 text-lg border-2 border-primary/20"
            >
              <Github size={20} /> Code Gallery
            </a>
          </motion.div>
        </motion.div>
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
          <h2 className="text-5xl font-black tracking-tight">🎯 Epic Projects Portfolio</h2>
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
              title: 'Okies 🎬', 
              desc: 'Next-gen social video platform with real-time chat, AI-powered feeds, and virtual gifting.', 
              href: '/projects',
              tech: ['Flutter', 'NestJS', 'Firebase', 'AI'],
              intensity: 'Revolutionary'
            },
            { 
              title: 'Secure Task API 🔒', 
              desc: 'Military-grade task management with bulletproof security and enterprise features.', 
              href: '/projects',
              tech: ['Spring Boot', 'PostgreSQL', 'JWT', 'Docker'],
              intensity: 'Enterprise'
            },
            { 
              title: 'GoShare CLI ⚡', 
              desc: 'Lightning-fast file sharing with QR magic and zero-config networking.', 
              href: '/projects',
              tech: ['Go', 'Networking', 'QR', 'CLI'],
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
          <h2 className="text-5xl font-black tracking-tight">Ready to Build Something Insane? 🚀</h2>
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
          <form className="glass rounded-2xl p-8 space-y-6 border border-primary/20" action="/api/contact" method="post">
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
                placeholder="Tell me about your wild project idea... the crazier, the better! 🎯" 
                rows={6}
                className="w-full rounded-xl border-2 border-primary/20 bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none font-medium" 
                required 
              />
            </motion.div>
            <motion.button 
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-lift w-full rounded-xl bg-gradient-to-r from-primary to-blue-600 px-8 py-4 font-bold text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
            >
              🚀 Launch This Project!
            </motion.button>
          </form>
        </motion.div>
      </motion.section>
    </div>
  )
}

      {/* Projects Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
        id="projects" 
        className="space-y-12"
      >
        <motion.div variants={fadeInUp} className="flex items-center justify-between">
          <h2 className="text-4xl font-bold tracking-tight">Selected Projects</h2>
          <Link 
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all" 
            href="/projects"
          >
            View all <ArrowRight size={20} />
          </Link>
        </motion.div>
        
        <motion.div 
          variants={staggerChildren}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {[
            { 
              title: 'Okies', 
              desc: 'Short-video social app with gifting and real-time chat capabilities.', 
              href: '/projects',
              tech: ['Flutter', 'NestJS', 'Firebase']
            },
            { 
              title: 'Secure Task Manager API', 
              desc: 'Production-grade API with JWT auth, roles, email verification, and Docker.', 
              href: '/projects',
              tech: ['Spring Boot', 'PostgreSQL', 'Docker']
            },
            { 
              title: 'GoShare CLI', 
              desc: 'Cross-platform Wi-Fi file sharing tool with QR code links.', 
              href: '/projects',
              tech: ['Go', 'CLI', 'QR Codes']
            },
          ].map((project) => (
            <motion.a 
              key={project.title}
              variants={fadeInUp}
              href={project.href} 
              className="group relative overflow-hidden rounded-2xl glass p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative space-y-6">
                <div className="h-48 rounded-xl bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center">
                  <ExternalLink size={32} className="text-primary/60" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
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
                  Learn more <ArrowRight size={16} />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
        id="contact" 
        className="space-y-12"
      >
        <motion.div variants={fadeInUp} className="text-center space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">Let&apos;s work together</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it and discuss how we can bring your ideas to life.
          </p>
        </motion.div>
        
        <motion.div variants={fadeInUp} className="max-w-2xl mx-auto">
          <form className="glass rounded-2xl p-8 space-y-6" action="/api/contact" method="post">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input 
                  id="name"
                  name="name" 
                  placeholder="Your full name" 
                  className="w-full rounded-xl border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input 
                  id="email"
                  name="email" 
                  type="email" 
                  placeholder="your@email.com" 
                  className="w-full rounded-xl border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" 
                  required 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea 
                id="message"
                name="message" 
                placeholder="Tell me about your project..." 
                rows={6}
                className="w-full rounded-xl border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none" 
                required 
              />
            </div>
            <button 
              type="submit"
              className="btn-lift w-full rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </motion.section>
    </div>
  )
}
