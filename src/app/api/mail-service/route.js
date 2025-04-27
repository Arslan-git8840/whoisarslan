import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    const body = await req.json();
    const { email, message } = body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL,
        subject: `📬 New Message from Your Portfolio Website — ${email}` ,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}