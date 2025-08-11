'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = new FormData(e.currentTarget)

    try {
      const res = await fetch('/api/contact', { method: 'POST', body: form })
      if (res.ok) {
        setStatus('sent')
        e.currentTarget.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 max-w-xl">
      <input
        name="name"
        placeholder="Your name"
        className="rounded-lg border bg-transparent px-4 py-3"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email address"
        className="rounded-lg border bg-transparent px-4 py-3"
        required
      />
      <textarea
        name="message"
        placeholder="Your message"
        className="min-h-[120px] rounded-lg border bg-transparent px-4 py-3"
        required
      />
      <button
        disabled={status === 'sending'}
        className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700 disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Send'}
      </button>

      {status === 'sent' && (
        <p className="text-sm text-green-600">✅ Thanks! Your message was sent.</p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-600">❌ Something went wrong. Please try again.</p>
      )}
    </form>
  )
}
