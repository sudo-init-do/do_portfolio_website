export const metadata = { title: 'Projects — Oyeyemi Obaloluwa' }

const projects = [
  { name: 'Okies', stack: 'Flutter, NestJS, Firebase, R2', desc: 'Short-video social app', link: '#' },
  { name: 'Secure Task Manager API', stack: 'Spring Boot, JWT, PostgreSQL, Docker', desc: 'Production-grade API', link: '#' },
  { name: 'GoShare CLI', stack: 'Go, QR, HTTP', desc: 'Local Wi-Fi file sharing', link: '#' },
]

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => (
          <a key={p.name} href={p.link} className="group rounded-xl border p-5 transition hover:shadow-lg">
            <div className="h-40 rounded-lg bg-gradient-to-br from-brand/10 to-transparent" />
            <h3 className="mt-4 text-lg font-semibold">{p.name}</h3>
            <p className="text-neutral-600 dark:text-neutral-300">{p.desc}</p>
            <p className="mt-1 text-sm text-neutral-500">{p.stack}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
