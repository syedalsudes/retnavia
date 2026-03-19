import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, subject, message } = body;

    const { error: dbError } = await supabase
      .from('contact_inquiries')
      .insert([{ name, phone, subject, message }]);

    if (dbError) throw dbError;

    await resend.emails.send({
        from: "Retnavia Contact <onboarding@resend.dev>",
        to: ["syedalsudeshussain@gmail.com"],
        subject: `New Message: ${subject}`,
        html: `
            <h3>General Contact Inquiry:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message}</p>
        `
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}