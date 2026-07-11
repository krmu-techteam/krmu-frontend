import { KRMUWordUrl } from "@/app/constant";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const incoming = await req.formData();
    const forward = new FormData();

    // Allow ONLY fields needed by WordPress — prevents abuse
    const allowedKeys = [
      "action",
      "awsm_job_id",
      "awsm_file_1",
      "awsm_form_privacy_policy",
      "awsm_applicant_name",
      "awsm_applicant_phone",
      "awsm_applicant_email",
      "awsm_text_1",
      "awsm_text_2",
      "awsm_text_3",
      "awsm_text_4",
      "awsm_text_5",
      "awsm_text_6",
      "awsm_text_7",
    ];

    incoming.forEach((value, key) => {
      if (allowedKeys.includes(key)) {
        forward.append(key, value);
      }
    });

    const wpResponse = await fetch(
      `${KRMUWordUrl}/careers2/wp-admin/admin-ajax.php`,
      {
        method: "POST",
        body: forward,
        headers: {
          "User-Agent": "KRMU-JobForm/1.0",
        },
      }
    );

    const text = await wpResponse.text();

    return NextResponse.json({ success: true, response: text });
  } catch (err) {
    return NextResponse.json({
      success: false,
      error: "Server error. Try again.",
    });
  }
}
