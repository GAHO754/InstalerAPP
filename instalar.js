let deferredPrompt;
const btn = document.getElementById("installBtn");
const iosText = document.getElementById("iosMessage");

const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
});

btn.addEventListener("click", async () => {

  // Android
  if (deferredPrompt) {
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    return;
  }

  // iPhone
  if (isIOS) {
    iosText.innerHTML =
      "Para instalar la app:<br><br>" +
      "1️⃣ Abre en <b>Safari</b><br>" +
      "2️⃣ Presiona <b>Compartir</b><br>" +
      "3️⃣ Agregar a pantalla de inicio";
  } else {
    iosText.innerHTML = "Tu dispositivo no permite instalación directa.";
  }

});
