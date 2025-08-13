import { NextRequest, NextResponse } from 'next/server'
import Plunk from '@plunk/node'

// Initialize Plunk with API key
const plunk = new Plunk(process.env.PLUNK_API_KEY as string)

export async function POST(req: NextRequest) {
  try {
    console.log('🔥 CONTACT FORM SUBMISSION RECEIVED!')
    
    // Parse JSON request body
    const body = await req.json()
    const { name, email, message } = body
    
    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 })
    }

    // Sanitize inputs
    const sanitizedName = String(name).trim()
    const sanitizedEmail = String(email).trim().toLowerCase()
    const sanitizedMessage = String(message).trim()

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(sanitizedEmail)) {
      return NextResponse.json({ ok: false, error: 'Invalid email format' }, { status: 400 })
    }

    console.log('📧 Sending email via Plunk...')
    
    // Clean and validate recipient email
    const toEmail = process.env.PLUNK_TO?.trim().toLowerCase()
    console.log('📧 To (cleaned):', toEmail)
    console.log('📧 From:', sanitizedName, '<' + sanitizedEmail + '>')
    
    if (!toEmail || !toEmail.includes('@')) {
      throw new Error(`Invalid recipient email: ${toEmail}`)
    }

    // Send email using Plunk
    const emailResult = await plunk.emails.send({
      to: toEmail,
      subject: `URGENT: New Contact from ${sanitizedName}`,
      body: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #dc2626; color: white; padding: 25px; border-radius: 8px; text-align: center; margin-bottom: 25px;">
            <h1 style="margin: 0; font-size: 24px;">URGENT: New Contact!</h1>
            <p style="margin: 10px 0 0 0;">Someone wants to work with you!</p>
          </div>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #111827; margin: 0 0 15px 0;">Contact Information</h2>
            
            <div style="background: #059669; color: white; padding: 12px; border-radius: 6px; margin-bottom: 10px;">
              <strong>Name:</strong> ${sanitizedName}
            </div>
            
            <div style="background: #1d4ed8; color: white; padding: 12px; border-radius: 6px;">
              <strong>Email:</strong> ${sanitizedEmail}
            </div>
          </div>
          
          <div style="background: white; padding: 20px; border: 1px solid #d1d5db; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #111827; margin: 0 0 15px 0;">Message</h2>
            <div style="background: #fef3c7; padding: 15px; border-radius: 6px; border-left: 4px solid #d97706;">
              ${sanitizedMessage.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; padding: 15px; background: #fef2f2; border-radius: 6px;">
            <a href="mailto:${sanitizedEmail}?subject=Re: Your inquiry" 
               style="background: #059669; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: bold;">
              Reply to ${sanitizedName}
            </a>
          </div>
          
          <div style="text-align: center; margin-top: 15px; color: #6b7280; font-size: 14px;">
            <p>Received: ${new Date().toLocaleString()}</p>
            <p>Reply to: ${sanitizedEmail}</p>
          </div>
        </div>
      `,
      type: 'html'
    })

    // Check if email was sent successfully
    if (emailResult && emailResult.success) {
      console.log('✅ Email sent successfully via Plunk!')
      console.log('📧 Email response:', JSON.stringify(emailResult, null, 2))
      
      return NextResponse.json({ 
        ok: true, 
        message: 'Email sent successfully!' 
      }, { status: 200 })
    } else {
      console.error('❌ Plunk email send failed:', emailResult)
      return NextResponse.json({ 
        ok: false, 
        error: 'Failed to send email via Plunk' 
      }, { status: 500 })
    }

  } catch (error) {
    console.error('❌ Contact form error:', error)
    return NextResponse.json({ 
      ok: false, 
      error: 'Server error occurred while sending email' 
    }, { status: 500 })
  }
}
