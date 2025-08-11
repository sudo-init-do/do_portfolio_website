'use client'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, Share } from 'lucide-react'
import Link from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

interface BlogLayoutProps {
  children: React.ReactNode
  metadata?: {
    title?: string
    description?: string
    date?: string
    readTime?: string
    tags?: string[]
  }
}

export default function BlogLayout({ children, metadata }: BlogLayoutProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: metadata?.title || 'Blog Post',
          text: metadata?.description || '',
          url: window.location.href,
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      // Fallback to copying URL to clipboard
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <div className="pt-16">
      <motion.article
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        className="mx-auto max-w-4xl space-y-8"
      >
        {/* Header */}
        <header className="space-y-6">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={20} /> Back to Blog
          </Link>

          {metadata && (
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                {metadata.title}
              </h1>
              
              {metadata.description && (
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {metadata.description}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                {metadata.date && (
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {new Date(metadata.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                )}
                
                {metadata.readTime && (
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    {metadata.readTime}
                  </div>
                )}

                <button
                  onClick={handleShare}
                  className="flex items-center gap-1 hover:text-foreground transition-colors"
                  aria-label="Share post"
                >
                  <Share size={16} />
                  Share
                </button>
              </div>

              {metadata.tags && (
                <div className="flex flex-wrap gap-2">
                  {metadata.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
        </header>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="glass rounded-2xl p-8 lg:p-12">
            {children}
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-border/40 pt-8">
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              Thanks for reading! If you enjoyed this post, feel free to share it.
            </p>
            <Link 
              href="/#contact"
              className="btn-lift inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-200"
            >
              Get in touch
            </Link>
          </div>
        </footer>
      </motion.article>
    </div>
  )
}
