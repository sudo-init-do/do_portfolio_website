export default function Footer() {
  return (
    <footer className="mt-24 border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-neutral-500">© {new Date().getFullYear()} Oyeyemi Obaloluwa</p>
        <div className="text-sm text-neutral-500">Built with Next.js • Tailwind • MDX</div>
      </div>
    </footer>
  )
}
