// testResend.js (Node 18+ — no node-fetch)
const RESEND_API_KEY = process.env.RESEND_API_KEY;

if (!RESEND_API_KEY) {
 console.error("❌ Missing RESEND_API_KEY");
 process.exit(1);
}

(async () => {
 try {
   const res = await fetch("https://api.resend.com/emails", {
     method: "POST",
     headers: {
       Authorization: `Bearer ${RESEND_API_KEY}`,
       "Content-Type": "application/json",
     },
     body: JSON.stringify({
       from: "Chaplain Podcast Test <chaplain_podcast@nutramaxlabs.com>",
       to: ["shawkins@nutramaxlabs.com"],
       subject: `Resend API Test ${Date.now()}`,
       text: "If you received this email, Resend is working.",
     }),
   });
   const text = await res.text();
   console.log("Status:", res.status);
   console.log("Response:", text);
 } catch (err) {
   console.error("❌ Fetch failed:", err);
 }
})();