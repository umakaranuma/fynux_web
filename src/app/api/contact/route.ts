import { NextResponse } from 'next/server';

import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Create a transporter using SMTP configuration from environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can change this to another provider if needed
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Make sure to use an App Password for Gmail
      },
    });

    // Configure the email data
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address (your authenticated email)
      to: 'fynux.bussiness@gmail.com', // Receiver address (your business email)
      replyTo: email, // This allows you to directly reply to the user's email
      subject: `New Website Inquiry: ${subject} from ${name}`,
      text: `
You have received a new message from the Fynux website contact form.

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
      html: `
        <div style="font-family: sans-serif; color: #333; max-width: 600px; border: 1px solid #eaeaea; padding: 20px; border-radius: 8px;">
          <h3 style="color: #0F172A; margin-top: 0;">New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: 0; border-top: 1px solid #eaeaea; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 4px;">${message}</p>
        </div>
      `
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success to the client-side component
    return NextResponse.json({ success: true, message: "Inquiry received and automated email dispatched." });
    
  } catch (error) {
    console.error("API Error processing contact form:", error);
    // Even if email fails (e.g. no credentials during dev), return 500 so UI can show error.
    return NextResponse.json({ success: false, message: "Server Error processing request" }, { status: 500 });
  }
}
