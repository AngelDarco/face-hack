document.addEventListener("DOMContentLoaded", function () {
  const login = document.getElementById("btn-login");
  const pass01 = document.getElementById("pass01");
  const pass02 = document.getElementById("pass02");

  pass01.addEventListener("keyup", () => {
    if (pass01 != null)
      if (pass01.value === "") pass01.style.borderColor = "red";
      else pass01.style.borderColor = "green";
  });

  pass02.addEventListener("keyup", () => {
    if (pass02 != null)
      if (pass02.value === "") pass02.style.borderColor = "red";
      else pass02.style.borderColor = "green";
  });

  login?.addEventListener("click", () => {
    if (pass01.value === "") pass01.style.borderColor = "red";
    if (pass02.value === "") pass02.style.borderColor = "red";
  });
});
