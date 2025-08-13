import './globals.css'
import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from 'next-themes'
import Navbar from '@/components/site/navbar'
import Footer from '@/components/site/footer'

export const metadata: Metadata = {
  title: 'Obaloluwa Oyeyemi — Digital Sorcerer & Code Artisan',
  description: 'Mind-blowing digital experiences that push boundaries. From blazing-fast web apps to stunning animations.',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' }
  ]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="relative min-h-screen">
            <Navbar />
            <main className="container py-8">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
