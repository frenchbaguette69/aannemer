import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const company = formData.get("company");
    const message = formData.get("message");

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Vul alle verplichte velden in." }, { status: 400 });
    }

    // Transporter configuratie (Strato SMTP)
    const transporter = nodemailer.createTransport({
      host: "smtp.strato.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // E-mail samenstellen
    await transporter.sendMail({
      from: `"JN Arbeidsbemiddeling" <${process.env.SMTP_USER}>`,
      to: "marcowammes@outlook.com",
      subject: `Nieuw contactbericht van ${name}`,
      html: `
        <h2>Nieuw bericht via het contactformulier</h2>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>Bedrijf:</strong> ${company || "-"} </p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Bericht:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("E-mailfout:", error);
    return NextResponse.json({ error: "Er ging iets mis bij het verzenden." }, { status: 500 });
  }
}
