import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, country, requirements } = data;
    
    // Create a nodemailer transporter
    // You need to configure your email credentials in .env.local
    // For example, using Gmail:
    // EMAIL_USER=your_email@gmail.com
    // EMAIL_PASS=your_app_password
    
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Change this if using a different provider like 'Outlook'
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'sales@techzarinfo.com', // Your destination email
      replyTo: email,
      subject: `New Lead from ${name} via CRM Landing Page`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Requirements:</strong><br/>${requirements}</p>
      `,
    };

    // Send the email if credentials are set
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully!");
    } else {
      console.warn("⚠️ EMAIL_USER and EMAIL_PASS are not set in .env.local. Skipping email send.");
    }
    
    return NextResponse.json(
      { message: "Lead captured successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
