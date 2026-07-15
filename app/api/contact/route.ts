import { NextResponse } from 'next/server';

const API_URL = process.env.NEXT_PUBLIC_API_ADMIN_URL || "http://localhost:5001";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, country, requirements } = data;

    const res = await fetch(`${API_URL}/api/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, country, requirements }),
    });

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      return NextResponse.json(
        { error: body.message || "Failed to submit contact form" },
        { status: res.status }
      );
    }

    return NextResponse.json(
      { message: "Lead captured successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}
