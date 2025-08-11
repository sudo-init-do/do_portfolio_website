import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import Navbar from '@/components/site/navbar'
import Footer from '@/components/site/footer'

export const metadata: Metadata = {
  title: 'Oyeyemi Obaloluwa — Software Engineer',
  description: 'Full-stack engineer building delightful products.',
  themeColor: '#2EA3FF'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="container py-12">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
