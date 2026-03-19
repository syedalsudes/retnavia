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
    const { name, email, phone, company, service, date, preferredTime, details, discovery } = body;

    const { error: dbError } = await supabase
      .from('consultant_bookings')
      .insert([{ 
        name, 
        email, 
        phone, 
        company, 
        service, 
        meeting_date: date, 
        meeting_time: preferredTime, 
        details,
        discovery
      }]);

    if (dbError) throw dbError;

    await resend.emails.send({
        from: "Retnavia Bookings <onboarding@resend.dev>",
        to: ["syedalsudeshussain@gmail.com"],
        subject: `Consultation Request: ${name} - ${service}`,
        html: `
            <h3>Booking Details:</h3>
            <p><strong>Client:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Schedule:</strong> ${date} at ${preferredTime}</p>
            <p><strong>Project:</strong> ${details}</p>
            <p><strong>Found via:</strong> ${discovery}</p>
        `
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}