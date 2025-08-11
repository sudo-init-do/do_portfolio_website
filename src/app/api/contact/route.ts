import { NextRequest, NextResponse } from 'next/server'
import Plunk from '@plunk/node'
import nodemailer from 'nodemailer'

type BrowserFormData = globalThis.FormData

const plunkKey = process.env.PLUNK_API_KEY as string | undefined
const plunkTo  = process.env.PLUNK_TO as string | undefined
const plunkFrom = process.env.PLUNK_FROM as string | undefined // leave empty until domain verified

const gmailUser = process.env.GMAIL_USER as string | undefined
const gmailPass = process.env.GMAIL_APP_PASSWORD as string | undefined
const mailTo    = process.env.MAIL_TO as string | undefined  // who receives (defaults to gmailUser)

export async function POST(req: NextRequest) {
  try {
    const form = (await req.formData()) as BrowserFormData
    const name = (form.get('name') ?? '').toString().trim()
    const email = (form.get('email') ?? '').toString().trim()
    const message = (form.get('message') ?? '').toString().trim()

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 })
    }

    const subject = `New contact from ${name}`
    const html = `
      <h2>Contact Form Submission</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b></p>
      <p>${message.replace(/</g, '&lt;')}</p>
    `

    // 1) Try PLUNK first (no custom "from" unless verified)
    if (plunkKey && plunkTo) {
      const plunk = new Plunk(plunkKey)
      const payload: any = {
        to: plunkTo,
        subject,
        type: 'html',
        body: html,
        subscribed: false,
        headers: { 'Reply-To': email },
      }
      if (plunkFrom && plunkFrom.trim()) payload.from = plunkFrom.trim()

      try {
        const ok = await plunk.emails.send(payload)
        if (ok) return NextResponse.json({ ok: true })
      } catch (e: any) {
        // fall through to SMTP if configured
      }
    }

    // 2) SMTP fallback (Gmail) – dev-friendly, no domain required
    if (gmailUser && gmailPass) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: gmailUser, pass: gmailPass },
      })

      await transporter.sendMail({
        from: gmailUser,
        to: mailTo || gmailUser,
        subject,
        html,
        replyTo: email,
      })

      return NextResponse.json({ ok: true })
    }

    // Nothing worked → tell dev what to set
    return NextResponse.json(
      {
        ok: false,
        error:
          'Email not sent. Configure PLUNK_API_KEY + PLUNK_TO (and PLUNK_FROM after domain verify) or set GMAIL_USER + GMAIL_APP_PASSWORD for SMTP fallback.',
      },
      { status: 500 },
    )
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message ?? 'Server error' }, { status: 500 })
  }
}
