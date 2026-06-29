import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // Change this later to info@subrintsolar.in
      to: "subrintsolar@gmail.com",
      subject: "🌞 New Enquiry from Subrint Solar Website",
      html: `
        <h2>New Website Enquiry</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Phone:</strong> ${phone}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      data,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to send email.",
      },
      { status: 500 }
    );
  }
}