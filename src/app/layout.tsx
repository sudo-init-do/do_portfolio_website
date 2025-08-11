import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import Navbar from '@/components/site/navbar'
import Footer from '@/components/site/footer'

export const metadata: Metadata = {
  title: 'Obaloluwa Oyeyemi — Digital Sorcerer & Code Artisan',
  description: 'Mind-blowing digital experiences that push boundaries. From blazing-fast web apps to stunning animations.',
  themeColor: '#2EA3FF'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="container py-8">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
