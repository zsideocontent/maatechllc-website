import { NextResponse } from "next/server";

// Delivers every submission to the MAA Tech Agency GHL sub-account via an
// Inbound Webhook workflow trigger — GHL creates/updates the contact from
// whatever fields are sent here. No API key needed for this trigger type.
const GHL_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/u0qYsIfB5BUeT0kt7ruV/webhook-trigger/9fd4efc1-d87d-4235-a21c-a448661e9f73";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, biggestProblem } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    const [firstName, ...rest] = String(name).trim().split(/\s+/);
    const lastName = rest.join(" ");

    const ghlResponse = await fetch(GHL_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        fullName: name,
        email,
        companyName: company || "",
        biggestProblem: biggestProblem || "",
        source: "maatechllc.com",
        formName: "Tech Freedom Call - Contact Page",
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!ghlResponse.ok) {
      console.error("GHL webhook delivery failed:", ghlResponse.status, await ghlResponse.text());
      return NextResponse.json({ error: "Delivery failed, please try again." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
