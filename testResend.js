import fetch from "node-fetch";

(async () => {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer your_real_resend_api_key`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Your App <you@yourdomain.com>",
      to: "shawkins@nutramaxlabs.com",
      subject: "Test Email",
      text: "Test from Resend",
    }),
  });
  const result = await res.text();
  console.log(res.status, result);
})();
