export async function POST(req) {
  try {
    const { name, question } = await req.json();

    const body = {
      from: "Chaplain Podcast Form <chaplain_podcast@nutramaxlabs.com>",
      to: "amorgan@nutramaxlabs.com",
      subject: `New Chaplain Podcast Question from ${name}`,
      text: `Name: ${name}\n\nQuestion:\n${question}`,
    };

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify(body),
    });

    const responseData = await res.json();

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Email send failed:", errorText);
      return new Response("Email failed", { status: 500 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Unexpected error occurred:", error);

    return new Response("Internal Server Error", { status: 500 });
  }
}
