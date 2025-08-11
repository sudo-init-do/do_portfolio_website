import Link from 'next/link'

export default function BlogIndex() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Writing</h1>
      <ul className="list-disc pl-5">
        <li><Link href="/blog/first-post" className="text-brand">Shipping fast with Next.js + MDX</Link></li>
      </ul>
    </div>
  )
}
