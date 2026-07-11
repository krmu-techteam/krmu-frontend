import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const accessKey = process.env.NPF_ACCESS_KEY;
    const secretKey = process.env.NPF_SECRET_KEY;

    if (!accessKey || !secretKey) {
      return NextResponse.json(
        { success: false, error: "NPF keys missing" },
        { status: 500 },
      );
    }

    const body = await req.json();

    const npfPayload = {
      name: body.name,
      email: body.email,
      country_dial_code: "+91",
      mobile: body.mobile,
      source: "COF",
      medium: "Website",
      campaign: body.form_name,
    };

    const res = await fetch("https://api.nopaperforms.io/lead/v1/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "access-key": accessKey,
        "secret-key": secretKey,
      },
      body: JSON.stringify(npfPayload),
    });

    const result = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { success: false, error: result },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, result });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: "NPF API failed" },
      { status: 500 },
    );
  }
}
