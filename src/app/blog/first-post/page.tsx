'use client'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function FirstPost() {
  return (
    <div className="pt-16 space-y-16">
      <motion.div
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        className="space-y-8"
      >
        {/* Back to blog */}
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={16} />
          Back to blog
        </Link>

        {/* Article header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Shipping fast with Next.js + MDX
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              January 15, 2024
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} />
              5 min read
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {['Next.js', 'MDX', 'Web Development'].map((tag) => (
              <span 
                key={tag}
                className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Article content */}
        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="lead">
            Local MDX keeps personal sites fast, simple, and versioned in Git.
            Perfect for a personal blog without a full CMS.
          </p>

          <h2>Why Next.js + MDX?</h2>
          
          <p>When building a personal portfolio or blog, you want something that&apos;s:</p>
          
          <ul>
            <li><strong>Fast</strong> - Both to build and to load</li>
            <li><strong>Simple</strong> - Easy to write and maintain</li>
            <li><strong>Flexible</strong> - Can handle code examples and custom components</li>
            <li><strong>Version controlled</strong> - Everything in Git</li>
          </ul>

          <p>
            MDX gives you the best of both worlds: the simplicity of Markdown with the power of React components.
          </p>

          <h2>Getting Started</h2>
          
          <p>Here&apos;s how to set up MDX in your Next.js project:</p>

          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
            <code>{`npm install @next/mdx @mdx-js/loader @mdx-js/react`}</code>
          </pre>

          <p>Then configure your <code>next.config.js</code>:</p>

          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
            <code>{`import createMDX from '@next/mdx'

const nextConfig = {
  // Configure pageExtensions to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

export default withMDX(nextConfig)`}</code>
          </pre>

          <h2>Benefits</h2>

          <h3>Performance</h3>
          <p>MDX files are compiled at build time, making them incredibly fast to serve.</p>

          <h3>Developer Experience</h3>
          <p>Write in Markdown but include React components when you need them.</p>

          <h3>SEO</h3>
          <p>Since everything is static, search engines can easily crawl and index your content.</p>

          <h2>Conclusion</h2>
          
          <p>
            Next.js + MDX is a powerful combination for content-driven sites. It gives you the performance 
            of static generation with the flexibility of React components.
          </p>
          
          <p>Give it a try for your next blog or documentation site!</p>
        </article>
      </motion.div>
    </div>
  )
}
