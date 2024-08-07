'use server'

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const formData = await req.json();
        const { senderName, senderEmail, senderSubject, senderPhone, senderMessage } = formData;

        // Validate required fields
        if (!senderName || !senderEmail || !senderSubject || !senderMessage) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        // Prepare email data
        const emailData = {
            from: 'Nuevo mensaje de contacto <onboarding@resend.dev>',
            to: ['carlos.gallagav@gmail.com'],
            subject: senderSubject,
            reply_to: senderEmail,
            text: `Name: ${senderName}\nEmail: ${senderEmail}\nPhone: ${senderPhone}\n\nMessage:\n${senderMessage}`,
        };

        // Send email using Resend API
        const { data, error } = await resend.emails.send(emailData);

        // Handle errors in sending email
        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        // Respond with success message
        return NextResponse.json({ message: 'Email sent successfully' });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
