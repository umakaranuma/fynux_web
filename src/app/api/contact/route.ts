import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a production environment, you would integrate an email provider here.
    // E.g., Resend, SendGrid, or Nodemailer.
    // 
    // Example using Resend:
    // await resend.emails.send({
    //   from: 'Fynux <no-reply@fynux.com>',
    //   to: body.email,
    //   subject: 'Thank you for contacting Fynux – Inbound Project Inquiry',
    //   html: `<p>Hello ${body.name},</p><p>Thank you for reaching out...</p>`
    // });
    
    // Simulating email dispatch logic by logging to the console
    console.log("=========================================");
    console.log("📨 NEW PROJECT INQUIRY RECEIVED!");
    console.log("=========================================");
    console.log(`Name/Company: ${body.name}`);
    console.log(`Email:        ${body.email}`);
    console.log(`Project Type: ${body.projectType}`);
    console.log(`Budget:       ${body.budget}`);
    console.log(`Timeline:     ${body.timeline}`);
    console.log(`Description:  ${body.description}`);
    
    console.log("\n🚀 DISPATCHING AUTOMATED EMAIL RESPONSE TO:", body.email);
    console.log("Subject: Thank you for contacting Fynux – Inbound Project Inquiry");
    console.log(`Body: Hello ${body.name},\nThank you for reaching out to Fynux. We have successfully received your inquiry regarding your upcoming ${body.projectType} project...\n`);
    console.log("=========================================\n");

    // Return success to the client-side component
    return NextResponse.json({ success: true, message: "Inquiry received and automated email dispatched." });
    
  } catch (error) {
    console.error("API Error processing contact form:", error);
    return NextResponse.json({ success: false, message: "Server Error processing request" }, { status: 500 });
  }
}
