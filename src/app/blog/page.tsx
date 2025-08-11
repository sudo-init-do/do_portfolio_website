'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight, Clock } from 'lucide-react'

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

const posts = [
  {
    title: 'Shipping fast with Next.js + MDX',
    href: '/blog/first-post',
    excerpt: 'Learn how to build and deploy blazing-fast websites using Next.js and MDX for content management.',
    date: '2024-01-15',
    readTime: '5 min read',
    tags: ['Next.js', 'MDX', 'Web Development']
  }
]

export default function BlogIndex() {
  return (
    <div className="pt-16 space-y-16">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerChildren}
        className="space-y-8"
      >
        <motion.div variants={fadeInUp} className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">Writing</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Thoughts on software engineering, developer experience, and building products that matter.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="space-y-8">
          {posts.length > 0 ? (
            <div className="grid gap-8">
              {posts.map((post) => (
                <article 
                  key={post.href}
                  className="group relative overflow-hidden rounded-2xl glass p-8 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        {post.readTime}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Link 
                        href={post.href}
                        className="group-hover:text-primary transition-colors"
                      >
                        <h2 className="text-2xl font-bold">{post.title}</h2>
                      </Link>
                      <p className="text-muted-foreground leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link 
                        href={post.href}
                        className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all"
                      >
                        Read more <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 space-y-4">
              <div className="text-6xl">📝</div>
              <h2 className="text-2xl font-semibold">No posts yet</h2>
              <p className="text-muted-foreground">
                I&apos;m working on some great content. Check back soon!
              </p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  )
}
