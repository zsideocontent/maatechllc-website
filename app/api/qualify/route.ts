import { NextResponse } from "next/server";

// TODO: same gap as other MAA sites built this cycle — this only logs
// server-side for now. Needs an email API key or a Web3Forms/Formspree
// key set as a Vercel env var to actually deliver to ahmad@maatechllc.com.

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, biggestProblem } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    console.log("New Tech Freedom Call request:", {
      name,
      email,
      company,
      biggestProblem,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
