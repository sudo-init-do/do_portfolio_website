'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 backdrop-blur ${scrolled ? 'border-b bg-white/70 dark:bg-black/40' : ''}`}>
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold">Oyeyemi</Link>
        <nav className="hidden gap-6 sm:flex">
          <Link href="/#projects">Projects</Link>
          <Link href="/blog">Writing</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <button
          aria-label="Toggle theme"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="rounded-lg border px-3 py-2 text-sm"
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </header>
  )
}
