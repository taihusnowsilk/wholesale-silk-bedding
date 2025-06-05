import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email transporter configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number.parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, ...formData } = body;

    const transporter = createTransporter();

    let mailOptions;

    if (type === 'contact') {
      // Contact form email
      const { name, email, phone, company, message } = formData;
      
      mailOptions = {
        from: `"WholesaleSilkBedding" <${process.env.GMAIL_USER}>`,
        replyTo: `"${name}" <${email}>`,
        to: process.env.RECIPIENT_EMAIL,
        subject: `New Contact Form Submission from WholesaleSilkBedding`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      };
    } else if (type === 'quote') {
      // Quote form email
      const { name, email, phone, company, message, quantity, productName, size, color } = formData;
      
      mailOptions = {
        from: `"WholesaleSilkBedding" <${process.env.GMAIL_USER}>`,
        replyTo: `"${name}" <${email}>`,
        to: process.env.RECIPIENT_EMAIL,
        subject: `New Quote Request from WholesaleSilkBedding`,
        html: `
          <h2>New Quote Request</h2>
          <h3>Product Information</h3>
          <p><strong>Product:</strong> ${productName}</p>
          <p><strong>Size:</strong> ${size}</p>
          <p><strong>Color:</strong> ${color}</p>
          <p><strong>Quantity:</strong> ${quantity}</p>
          
          <h3>Customer Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      };
    } else {
      return NextResponse.json({ error: 'Invalid form type' }, { status: 400 });
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 