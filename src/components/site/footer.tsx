'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer 
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="mt-32 border-t border-border/40"
    >
      <div className="container">
        <div className="py-16 space-y-8">
          {/* Main Footer Content */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-black bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Obaloluwa Oyeyemi ⚡
              </h3>
              <p className="text-muted-foreground">
                Digital Sorcerer crafting mind-blowing web experiences with cutting-edge tech and killer animations.
              </p>
              <div className="flex items-center gap-3">
                <a 
                  href="https://github.com/sudo-init-do"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lift rounded-full p-2 glass hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/oyeyemi-obaloluwa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lift rounded-full p-2 glass hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:oyeyemiobaloluwa311@gmail.com"
                  className="btn-lift rounded-full p-2 glass hover:text-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h4 className="font-semibold">Navigation</h4>
              <nav className="flex flex-col space-y-2">
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
                <Link href="/#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Writing
                </Link>
                <Link href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </nav>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h4 className="font-semibold">Resources</h4>
              <nav className="flex flex-col space-y-2">
                <a 
                  href="/Oyeyemi-Obaloluwa-CV.pdf"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Resume
                </a>
                <a 
                  href="https://github.com/sudo-init-do"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </nav>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <h4 className="font-semibold">Built with</h4>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'Tailwind CSS', 'MDX', 'Framer Motion'].map((tech) => (
                  <span 
                    key={tech}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/40">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Obaloluwa Oyeyemi. All rights reserved.
              </p>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                Made with <Heart size={16} className="text-red-500" fill="currentColor" /> and lots of ☕ in Nigeria
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
