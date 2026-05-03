/* eslint-disable no-undef */
import { Resend } from "resend";

export async function POST(request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, subject, email, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["angelxcrema@gmail.com"],
      subject: subject,
      html: `
      <html>
  <body style="background-color: #00000083; color: white; font-family: Arial, sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
      <tr>
        <td>
          <h3 style="margin-bottom: 10px;">
            <i>Subject: </i>${subject}
          </h3>
        </td>
      </tr>
      <tr>
        <td style="text-align: left; padding: 10px;">
          <p>
            <strong>
              <i>Message from: </i>
              ${name}
            </strong><br />
            ${message}
          </p>
        </td>
      </tr>
      <tr>
        <td style="text-align: left; padding: 10px;">
          <span>
            <strong>
              <i>From:</i>
            </strong>
            ${email}
          </span>
        </td>
      </tr>
    </table>
  </body>
</html>

      `
    });

    if (error) return new Response(error);
    return new Response(JSON.stringify(data));
  } catch (error) {
    return new Response("Error processing the request", {
      status: 500
    });
  }
}
