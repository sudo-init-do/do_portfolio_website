'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Moon, Sun, Monitor, Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark')
    else if (theme === 'dark') setTheme('system')
    else setTheme('light')
  }

  const getThemeIcon = () => {
    if (!mounted) return <Sun size={18} />
    
    switch (theme) {
      case 'light':
        return <Sun size={18} className="text-amber-500 group-hover:rotate-12 transition-transform duration-300" />
      case 'dark':
        return <Moon size={18} className="text-slate-300 group-hover:-rotate-12 transition-transform duration-300" />
      default:
        return <Monitor size={18} className="text-blue-500 group-hover:scale-110 transition-transform duration-300" />
    }
  }

  const navLinks = [
    { href: '/#projects', label: 'Projects' },
    { href: '/blog', label: 'Writing' },
    { href: '/#contact', label: 'Contact' },
  ]

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'glass shadow-lg shadow-black/5 dark:shadow-black/20 backdrop-blur-xl' 
          : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link 
          href="/" 
          className="text-xl font-black tracking-tight hover:text-primary transition-all duration-300 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
        >
          ObaloluwaDev ⚡
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} theme`}
            onClick={cycleTheme}
            className="btn-lift rounded-full border p-2.5 text-sm hover:bg-accent transition-all duration-300 relative overflow-hidden group"
            title={`Current: ${theme || 'system'} theme. Click to cycle.`}
          >
            <div className="relative z-10 transition-transform duration-300">
              {getThemeIcon()}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-amber-50 dark:from-slate-800 dark:to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          </button>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle mobile menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn-lift rounded-full border p-2.5 md:hidden hover:bg-accent transition-colors"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass border-t border-border/20"
          >
            <nav className="container py-4 space-y-3">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
