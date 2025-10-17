import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, phone, service, message } = body

    console.log('📧 Processing contact form submission:', {
      name,
      email,
      company,
      phone,
      service,
      message,
      timestamp: new Date().toISOString()
    })

    // Create the email content (commented out since email sending is disabled)
    /* const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); padding: 30px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold;">New Contact Form Submission</h1>
          <p style="color: #e0f2fe; margin: 10px 0 0 0; font-size: 16px;">Standard Financial Services B.V. (SFS)</p>
        </div>

        <!-- Content -->
        <div style="padding: 30px;">
          
          <p style="font-size: 16px; color: #04113a; font-weight: bold; margin: 0 0 20px 0;">
            Hello Standard Financial Services,
          </p>

          <p style="font-size: 14px; color: #333333; margin: 0 0 25px 0;">
            You have received a new contact form submission from <strong>${name}</strong> through the SFS website.
          </p>

          <!-- Contact Details Card -->
          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin: 0 0 15px 0; font-size: 16px; font-weight: bold;">Contact Information:</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4a5568; width: 120px; vertical-align: top;">Name:</td>
                <td style="padding: 8px 0; color: #2d3748;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4a5568; width: 120px; vertical-align: top;">Email:</td>
                <td style="padding: 8px 0; color: #2d3748;"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4a5568; width: 120px; vertical-align: top;">Company:</td>
                <td style="padding: 8px 0; color: #2d3748;">${company || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4a5568; width: 120px; vertical-align: top;">Phone:</td>
                <td style="padding: 8px 0; color: #2d3748;"><a href="tel:${phone}" style="color: #3b82f6; text-decoration: none;">${phone || 'Not provided'}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4a5568; width: 120px; vertical-align: top;">Service:</td>
                <td style="padding: 8px 0; color: #2d3748;">${service || 'Not specified'}</td>
              </tr>
            </table>
          </div>

          <!-- Message Section -->
          <div style="margin: 25px 0;">
            <h3 style="color: #1e40af; margin: 0 0 15px 0; font-size: 16px; font-weight: bold;">Message:</h3>
            <div style="padding: 20px; border-left: 4px solid #3b82f6; font-size: 14px; color: #555555; background-color: #f8fafc; border-radius: 0 8px 8px 0; line-height: 1.6; white-space: pre-wrap;">${message}</div>
          </div>

          <!-- Call to Action -->
          <div style="background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 20px; margin: 25px 0; text-align: center;">
            <p style="margin: 0 0 15px 0; color: #1e40af; font-weight: bold; font-size: 14px;">📧 Quick Actions:</p>
            <div style="display: inline-block;">
              <a href="mailto:${email}?subject=Re: Your inquiry to Standard Financial Services" style="display: inline-block; background-color: #3b82f6; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; margin: 0 5px; font-size: 14px; font-weight: bold;">Reply via Email</a>
              ${phone ? `<a href="tel:${phone}" style="display: inline-block; background-color: #10b981; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; margin: 0 5px; font-size: 14px; font-weight: bold;">Call ${phone}</a>` : ''}
            </div>
          </div>

        </div>

        <!-- Footer -->
        <div style="background-color: #f1f5f9; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
          <p style="font-size: 14px; color: #64748b; margin: 0 0 10px 0;">
            Best regards,<br>
            <strong style="color: #1e40af;">Standard Financial Services B.V. (SFS)</strong>
          </p>
          
          <hr style="border: none; border-top: 1px solid #cbd5e1; margin: 15px 0;">
          
          <div style="font-size: 12px; color: #94a3b8; line-height: 1.5;">
            <p style="margin: 5px 0;">📍 Marten Meesweg 25 G, 3068 AV, Amsterdam, Netherlands</p>
            <p style="margin: 5px 0;">📞 +31 6 27855065 | ✉️ info@sfsbv.com</p>
            <p style="margin: 10px 0 0 0; font-style: italic;">
              Submitted on ${new Date().toLocaleString('en-US', { 
                timeZone: 'Europe/Amsterdam',
                dateStyle: 'full',
                timeStyle: 'short'
              })}
            </p>
          </div>
        </div>

      </div>
    `
    */

    // For now, we'll simulate sending the email
    // To actually send emails, you need to:
    // 1. Sign up at resend.com
    // 2. Get your API key
    // 3. Add RESEND_API_KEY to your environment variables
    
    console.log('📧 Email content prepared for:', email)
    console.log('🎯 Would send to: huzaifasajjad4404@gmail.com')
    
    // Uncomment this when you have your Resend API key:
    /*
    const emailResponse = await resend.emails.send({
      from: 'SFS Contact Form <noreply@yourdomain.com>',
      to: ['huzaifasajjad4404@gmail.com'],
      subject: `New Contact: ${name} - ${service || 'General Inquiry'}`,
      html: emailHtml,
      replyTo: email
    })
    
    console.log('✅ Email sent successfully:', emailResponse)
    */

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        name,
        email,
        company,
        phone,
        service,
        timestamp: new Date().toISOString()
      }
    })

  } catch (error) {
    console.error('❌ Contact form API error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to process contact form',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
