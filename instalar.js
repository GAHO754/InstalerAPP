const urlApp = "https://applebeesappmx.kesug.com/";

document.getElementById("androidBtn").onclick = () => {
  window.location.href = urlApp;
};

document.getElementById("iosBtn").onclick = () => {
  alert(
    "Para instalar en iPhone:\n\n" +
    "1. Abre la app en Safari\n" +
    "2. Presiona Compartir\n" +
    "3. Agregar a pantalla de inicio"
  );
  window.location.href = urlApp;
};

document.getElementById("pcBtn").onclick = () => {
  window.location.href = urlApp;
};
