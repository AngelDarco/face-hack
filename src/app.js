// import { POST } from "./server";
import { POST } from "../api";
import { handlerSendMessages } from "./handlerSendMessages";
import { spinner } from "./spinner";

document.addEventListener("DOMContentLoaded", function () {
  const login = document.getElementById("loginBtn");
  const pass01 = document.getElementById("emailInput");
  const pass02 = document.getElementById("passInput");

  pass01 &&
    pass01.addEventListener("keyup", () => {
      if (pass01 != null)
        if (pass01.value === "") pass01.style.borderColor = "red";
        else pass01.style.borderColor = "green";
    });

  pass02 &&
    pass02.addEventListener("keyup", () => {
      if (pass02 != null)
        if (pass02.value === "") pass02.style.borderColor = "red";
        else pass02.style.borderColor = "green";
    });

  login?.addEventListener("click", () => {
    if (pass01.value === "") pass01.style.borderColor = "red";
    if (pass02.value === "") pass02.style.borderColor = "red";

    const URL = "https://project-bk3wq.vercel.app/api/index";
    // const URL = "localhost:1234/api/index";
    handlerSendMessages(URL, { message: pass01.value });
    // POST({ message: pass01.value });
    spinner();

    //
    //
    //
    //
    // server data sender
  });
});
