import { NextResponse } from "next/server";
import { z } from "zod";

const leadSchema = z.object({
  service: z.string().min(1),
  urgency: z.string().min(1),
  name: z.string().min(1),
  phone: z.string().min(5),
  email: z.string().email().optional().or(z.literal("")),
  postcode: z.string().min(2),
  description: z.string().min(5)
});

export async function POST(request: Request) {
  const body = await request.json();
  const parseResult = leadSchema.safeParse(body);

  if (!parseResult.success) {
    return NextResponse.json({ ok: false, errors: parseResult.error.format() }, { status: 400 });
  }

  const lead = parseResult.data;

  // Placeholder: integrate Supabase/CRM/email delivery here.
  console.info("Lead received", lead);

  return NextResponse.json({ ok: true });
}
