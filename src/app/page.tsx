import Link from 'next/link'
import { ArrowRight, Download, Github } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="space-y-24">
      <section className="text-center">
        <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-brand" /> Available for opportunities
        </div>
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
          Building clean, fast, <span className="text-brand">human-centered</span> products.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
          I’m Oyeyemi Obaloluwa—full-stack engineer focused on developer experience, real-time systems, and beautiful UI.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/#contact" className="rounded-lg bg-brand px-5 py-3 font-medium text-white hover:opacity-90">Contact me</Link>
          <a href="/Oyeyemi-Obaloluwa-CV.pdf" className="rounded-lg border px-5 py-3 font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900">
            <span className="inline-flex items-center gap-2">Download CV <Download size={18} /></span>
          </a>
          <a href="https://github.com/sudo-init-do" target="_blank" className="rounded-lg border px-5 py-3 font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900">
            <span className="inline-flex items-center gap-2"><Github size={18} /> GitHub</span>
          </a>
        </div>
      </section>

      <section id="projects" className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Selected Projects</h2>
          <Link className="text-brand inline-flex items-center gap-1" href="/projects">View all <ArrowRight size={16} /></Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Okies', desc: 'Short-video social app with gifting and real-time chat.', href: '/projects' },
            { title: 'Secure Task Manager API', desc: 'JWT auth, roles, email verification, Docker.', href: '/projects' },
            { title: 'GoShare CLI', desc: 'Wi-Fi file sharing tool with QR links.', href: '/projects' },
          ].map((p) => (
            <a key={p.title} href={p.href} className="group rounded-xl border p-5 transition hover:shadow-lg">
              <div className="h-40 rounded-lg bg-gradient-to-br from-brand/10 to-transparent" />
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-300">{p.desc}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-brand">Learn more <ArrowRight size={14} /></span>
            </a>
          ))}
        </div>
      </section>

      <section id="contact" className="space-y-6">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <form className="grid max-w-xl gap-4" action="/api/contact" method="post">
          <input name="name" placeholder="Your name" className="rounded-lg border bg-transparent px-4 py-3" required />
          <input name="email" type="email" placeholder="Email address" className="rounded-lg border bg-transparent px-4 py-3" required />
          <textarea name="message" placeholder="Your message" className="min-h-[120px] rounded-lg border bg-transparent px-4 py-3" required />
          <button className="rounded-lg bg-brand px-5 py-3 font-medium text-white hover:opacity-90">Send</button>
        </form>
      </section>
    </div>
  )
}
