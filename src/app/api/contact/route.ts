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
    const { name, email, service, company, timeline, details } = body;

    // 1. Save to Supabase
    const { error: dbError } = await supabase
      .from('inquiries')
      .insert([{ full_name: name, email, service, company, timeline, details }]);

    if (dbError) throw dbError;

    await resend.emails.send({
        from: "Retnavia Leads <onboarding@resend.dev>",
        to: ["syedalsudeshussain@gmail.com"],
        subject: `New Lead: ${name} - ${service}`,
        html: `
            <h3>New Inquiry Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Project Details:</strong> ${details}</p>
        `
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("CRITICAL ERROR:", error);
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}