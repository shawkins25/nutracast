// testResend.js (Node 18+)
import { bootstrap } from "global-agent";

process.env.GLOBAL_AGENT_HTTP_PROXY =
 process.env.https_proxy || process.env.HTTPS_PROXY || process.env.http_proxy || process.env.HTTP_PROXY;
bootstrap();

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
       text: "If you received this, Resend works (via proxy).",
     }),
   });
   const text = await res.text();
   console.log("Status:", res.status);
   console.log("Response:", text);
 } catch (err) {
   console.error("❌ Fetch failed:", err);
 }
})();