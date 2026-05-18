// ============================================================
// CONFIGURACIÓN DEL FORMULARIO
// ------------------------------------------------------------
// Cambia FORMSPREE_ENDPOINT por tu endpoint real de Formspree
// (https://formspree.io — plan gratuito incluido).
// Pasos:
//   1) Crea una cuenta gratis en https://formspree.io
//   2) Crea un nuevo formulario y copia el endpoint (algo como
//      https://formspree.io/f/abcd1234)
//   3) Pega aquí abajo y guarda.
// Mientras tanto, el formulario funciona en "modo demo":
// guarda los registros en localStorage para que puedas verlos
// en consola y se muestra un mensaje de éxito al usuario.
// ============================================================
const FORMSPREE_ENDPOINT = ""; // p.ej. "https://formspree.io/f/abcd1234"

// Año dinámico en el footer
document.getElementById("year").textContent = new Date().getFullYear();

// Manejo del formulario
const form = document.getElementById("form");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  msg.className = "form__msg";
  msg.textContent = "";

  // Validación básica
  if (!form.checkValidity()) {
    msg.textContent = "Revisa los campos marcados, por favor.";
    msg.classList.add("is-err");
    form.reportValidity();
    return;
  }

  const data = Object.fromEntries(new FormData(form).entries());
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalLabel = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = "Enviando…";

  try {
    if (FORMSPREE_ENDPOINT) {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error("Network error");
    } else {
      // Modo demo: guardamos en localStorage
      const stored = JSON.parse(localStorage.getItem("registros") || "[]");
      stored.push({ ...data, fecha: new Date().toISOString() });
      localStorage.setItem("registros", JSON.stringify(stored));
      console.log("[DEMO] Registro guardado en localStorage:", data);
      console.log("[DEMO] Para activar envíos reales, configura FORMSPREE_ENDPOINT en script.js");
      await new Promise((r) => setTimeout(r, 600));
    }

    msg.textContent = "¡Listo! Te he enviado el enlace de Zoom a tu email. Revisa la bandeja de entrada (y spam).";
    msg.classList.add("is-ok");
    form.reset();
  } catch (err) {
    console.error(err);
    msg.textContent = "Algo ha fallado. Inténtalo de nuevo en unos segundos.";
    msg.classList.add("is-err");
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalLabel;
  }
});
