'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = new FormData(e.currentTarget)
    const data = {
      name: form.get('name') as string,
      email: form.get('email') as string,
      message: form.get('message') as string,
    }

    try {
      const res = await fetch('/api/contact', { 
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      
      const result = await res.json()
      
      if (res.ok && result.ok) {
        setStatus('sent')
        // Safely reset the form
        const form = e.currentTarget
        if (form) {
          form.reset()
        }
      } else {
        console.error('Contact form error:', result.error)
        setStatus('error')
      }
    } catch (error) {
      console.error('Network error:', error)
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
        className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
      >
        {status === 'sending' ? '📧 Sending…' : 'Launch This Project!'}
      </button>

      {status === 'sent' && (
        <div className="text-sm text-green-600 bg-green-50 p-3 rounded-lg border border-green-200">
          ✅ <strong>Message sent successfully!</strong> I&#39;ll get back to you soon.
        </div>
      )}
      {status === 'error' && (
        <div className="text-sm text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">
          ❌ <strong>Network error.</strong> Please try again or email me directly.
        </div>
      )}
    </form>
  )
}
