import nodemailer from "nodemailer";

// export async function POST(req) {
//   const body = await req.json();
//   const { name, question } = body;

//   if (!name || !question) {
//     console.error("Missing name or question");

//     return new Response(JSON.stringify({ error: "Missing name or question" }), {
//       status: 400,
//     });
//   }

//   try {
//     console.log("Creating transporter...");

//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: Number(process.env.SMTP_PORT) || 587,
//       secure: false,

//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     console.log("Sending email...");

//     await transporter.sendMail({
//       from: `"Discussion Form" <${process.env.SMTP_USER}>`,
//       to: "shawkins@nutramaxlabs.com",
//       subject: `New Question from ${name}`,
//       text: `Name: ${name}\n\nQuestion:\n${question}`,
//     });

//     console.log("Email sent!");

//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } catch (error) {
//     console.error("Email send error:", error);

//     return new Response(JSON.stringify({ error: "Email failed to send" }), {
//       status: 500,
//     });
//   }
// }

export async function POST(req) {
  try {
    console.log("Incoming request received.");

    const { name, question } = await req.json();

    console.log("Parsed request body:", { name, question });

    const body = {
      from: "Nutracast Form <onboarding@resend.dev>",
      to: "shawkins@nutramaxlabs.com",
      subject: `New Question from ${name}`,
      text: `Name: ${name}\n\nQuestion:\n${question}`,
    };

    console.log("Sending email with body:", body);

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify(body),
    });

    const responseData = await res.json();
    console.log("Email API full response:", responseData);

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Email send failed:", errorText);
      return new Response("Email failed", { status: 500 });
    }

    console.log("Email sent successfully.");

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Unexpected error occurred:", error);

    return new Response("Internal Server Error", { status: 500 });
  }
}
