import { NextRequest, NextResponse } from 'next/server'
import Plunk from '@plunk/node'
import nodemailer from 'nodemailer'

// Init Plunk
const plunk = new Plunk(process.env.PLUNK_API_KEY as string)

// Create nodemailer transporter as backup
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  })
}

export async function POST(req: NextRequest) {
  try {
    // Handle JSON data only for now
    const body = await req.json()
    const { name, email, message } = body
    
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 })
    }

    // Sanitize inputs
    const sanitizedName = String(name).trim()
    const sanitizedEmail = String(email).trim()
    const sanitizedMessage = String(message).trim()

    // Skip test mode and use Gmail SMTP directly for reliable delivery
    console.log('Sending email to:', process.env.PLUNK_TO)
    
    let emailSent = false
    
    // Use Gmail SMTP directly for reliable delivery
    try {
      console.log('Attempting to send via Gmail SMTP...')
      const transporter = createTransporter()
      
      // Verify connection
      await transporter.verify()
      console.log('✅ Gmail SMTP connection verified')
      
      const mailOptions = {
        from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
        to: process.env.PLUNK_TO!,
        subject: `New contact from ${sanitizedName}`,
        html: `
          <h2>Contact Form Submission</h2>
          <p><b>Name:</b> ${sanitizedName}</p>
          <p><b>Email:</b> ${sanitizedEmail}</p>
          <p><b>Message:</b></p>
          <p>${sanitizedMessage.replace(/</g, '&lt;').replace(/\n/g, '<br>')}</p>
          <hr>
          <p><small>Reply to: ${sanitizedEmail}</small></p>
          <p><small>Sent via portfolio contact form</small></p>
        `,
        replyTo: sanitizedEmail
      }
      
      const result = await transporter.sendMail(mailOptions)
      console.log('✅ Email sent successfully via Gmail SMTP')
      console.log('📧 Message ID:', result.messageId)
      console.log('📧 Response:', result.response)
      emailSent = true
    } catch (gmailError) {
      console.error('❌ Gmail SMTP error:', gmailError)
      
      // Fallback to Plunk if Gmail fails
      try {
        console.log('Falling back to Plunk...')
        const emailResult = await plunk.emails.send({
          to: process.env.PLUNK_TO!,
          subject: `New contact from ${sanitizedName}`,
          body: `
            <h2>Contact Form Submission</h2>
            <p><b>Name:</b> ${sanitizedName}</p>
            <p><b>Email:</b> ${sanitizedEmail}</p>
            <p><b>Message:</b></p>
            <p>${sanitizedMessage.replace(/</g, '&lt;')}</p>
            <hr>
            <p><small>Reply to: ${sanitizedEmail}</small></p>
          `,
          type: 'html'
        })

        if (emailResult && emailResult.success) {
          emailSent = true
          console.log('✅ Email sent successfully via Plunk (fallback)')
        }
      } catch (plunkError) {
        console.error('❌ Plunk fallback also failed:', plunkError)
      }
    }
    
    // If Plunk failed, try nodemailer
    if (!emailSent) {
      try {
        console.log('Attempting to send via Gmail SMTP...')
        const transporter = createTransporter()
        
        const mailOptions = {
          from: process.env.GMAIL_USER,
          to: process.env.PLUNK_TO!,
          subject: `New contact from ${sanitizedName}`,
          html: `
            <h2>Contact Form Submission</h2>
            <p><b>Name:</b> ${sanitizedName}</p>
            <p><b>Email:</b> ${sanitizedEmail}</p>
            <p><b>Message:</b></p>
            <p>${sanitizedMessage.replace(/</g, '&lt;')}</p>
            <hr>
            <p><small>Reply to: ${sanitizedEmail}</small></p>
          `,
          replyTo: sanitizedEmail
        }
        
        const nodemailerResult = await transporter.sendMail(mailOptions)
        console.log('✅ Email sent successfully via Gmail SMTP:', nodemailerResult.messageId)
        emailSent = true
      } catch (nodemailerError) {
        console.error('❌ Nodemailer error:', nodemailerError)
      }
    }

    if (!emailSent) {
      return NextResponse.json({ ok: false, error: 'Email send failed - both services failed' }, { status: 500 })
    }

    // Return success
    return new NextResponse(null, { status: 204 })

  } catch (err) {
    console.error(err)
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 })
  }
}
