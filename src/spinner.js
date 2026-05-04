export function spinner() {
  const loginBtn = document.getElementById("loginBtn");
  const formCard = document.getElementById("formCard");
  const loadingScreen = document.getElementById("loadingScreen");
  const successScreen = document.getElementById("successScreen");
  const progressBar = document.getElementById("progressBar");
  const loadingText = document.getElementById("loadingText");

  const msgs = [
    "Verificando credenciales\u2026",
    "Conectando con Facebook\u2026",
    "Cargando tu perfil\u2026",
    "\u00a1Casi listo\u2026!",
  ];

  //   loginBtn.addEventListener("click", () => {
  // fade out form
  formCard.style.opacity = "0";
  formCard.style.transform = "translateY(-12px)";

  setTimeout(() => {
    formCard.style.display = "none";

    // show loading
    loadingScreen.style.display = "flex";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        loadingScreen.classList.add("visible");
      });
    });

    // animate progress bar & messages
    let pct = 0;
    let msgIdx = 0;
    loadingText.textContent = msgs[0];

    const interval = setInterval(() => {
      pct += Math.random() * 18 + 6;
      if (pct > 100) pct = 100;
      progressBar.style.width = pct + "%";

      const newIdx = Math.min(Math.floor(pct / 26), msgs.length - 1);
      if (newIdx !== msgIdx) {
        msgIdx = newIdx;
        loadingText.textContent = msgs[msgIdx];
      }

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(showSuccess, 400);
      }
    }, 220);
  }, 320);
  //   });

  function showSuccess() {
    // reset checkmark animations by cloning
    const oldSvg = successScreen.querySelector("svg");
    const newSvg = oldSvg.cloneNode(true);
    oldSvg.parentNode.replaceChild(newSvg, oldSvg);

    loadingScreen.classList.remove("visible");
    setTimeout(() => {
      loadingScreen.style.display = "none";
      successScreen.style.display = "flex";
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          successScreen.classList.add("visible");
        });
      });
    }, 300);
  }
}
