import { NextRequest, NextResponse } from 'next/server'
import Plunk from '@plunk/node'

const plunk = new Plunk(process.env.PLUNK_API_KEY as string)

export async function POST(req: NextRequest) {
  try {
    // Ensure correct type for form
    const form = (await req.formData()) as globalThis.FormData
    const name = String(form.get('name') ?? '')
    const email = String(form.get('email') ?? '')
    const message = String(form.get('message') ?? '')

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 })
    }

    const success = await plunk.emails.send({
      to: 'you@example.com', // replace with your receiving email
      subject: `New contact from ${name}`,
      body: `
        <h2>Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message.replace(/</g, '&lt;')}</p>
      `,
      type: 'html',
      from: 'Portfolio <noreply@your-domain>', // must be verified in Plunk
      replyTo: email, // correct property name
      subscribed: false
    })

    if (!success) {
      return NextResponse.json({ ok: false, error: 'Plunk send failed' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message ?? 'Error sending email' },
      { status: 500 }
    )
  }
}
