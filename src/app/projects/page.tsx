'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

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

const projects = [
  { 
    name: 'Okies', 
    stack: ['Flutter', 'NestJS', 'Firebase', 'R2'], 
    desc: 'Short-video social app with real-time chat, gifting system, and content discovery algorithms.',
    longDesc: 'A TikTok-inspired social platform built with Flutter for cross-platform mobile development. Features include real-time messaging, virtual gifting, content moderation, and advanced recommendation algorithms.',
    link: '#',
    github: '#',
    status: 'In Development',
    image: '/projects/okies.jpg'
  },
  { 
    name: 'Secure Task Manager API', 
    stack: ['Spring Boot', 'JWT', 'PostgreSQL', 'Docker'], 
    desc: 'Production-grade REST API with comprehensive authentication and authorization.',
    longDesc: 'Enterprise-ready task management API featuring JWT authentication, role-based access control, email verification, password reset flows, and comprehensive audit logging. Fully containerized with Docker.',
    link: '#',
    github: '#',
    status: 'Completed',
    image: '/projects/task-manager.jpg'
  },
  { 
    name: 'GoShare CLI', 
    stack: ['Go', 'QR', 'HTTP'], 
    desc: 'Cross-platform Wi-Fi file sharing tool with QR code convenience.',
    longDesc: 'Command-line tool built in Go for instant file sharing over local networks. Generates QR codes for easy mobile access and supports drag-and-drop file uploads through a clean web interface.',
    link: '#',
    github: '#',
    status: 'Open Source',
    image: '/projects/goshare.jpg'
  },
]

export default function ProjectsPage() {
  return (
    <div className="pt-16 space-y-16">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerChildren}
        className="space-y-8"
      >
        <motion.div variants={fadeInUp} className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A collection of projects I&apos;ve built, ranging from mobile applications to developer tools and APIs.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerChildren}
          className="grid gap-8 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.name}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-2xl glass p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative space-y-6">
                {/* Project Image Placeholder */}
                <div className="h-48 rounded-xl bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center">
                  <ExternalLink size={32} className="text-primary/60" />
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <div className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                        {project.status}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.longDesc}
                  </p>

                  {/* Tech Stack */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-muted-foreground">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span 
                          key={tech}
                          className="rounded-full border px-3 py-1 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-2">
                    <a 
                      href={project.link}
                      className="btn-lift inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all duration-200"
                    >
                      <ExternalLink size={16} /> View Project
                    </a>
                    <a 
                      href={project.github}
                      className="btn-lift inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-semibold transition-all duration-200"
                    >
                      <Github size={16} /> Source
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          variants={fadeInUp}
          className="text-center pt-8"
        >
          <div className="glass rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl font-bold">Interested in collaborating?</h2>
            <p className="text-muted-foreground">
              I&apos;m always open to discussing new projects and opportunities.
            </p>
            <Link 
              href="/#contact"
              className="btn-lift inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-200"
            >
              Get in touch <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
