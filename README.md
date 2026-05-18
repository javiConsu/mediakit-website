# Mediakit Website

Landing page para captar registros al taller en directo "Cómo crear un Mediakit que cierra patrocinios".

## 🚀 Cómo verla en local

Simplemente abre `index.html` en tu navegador (doble clic). Eso es todo, no necesita compilarse.

## 🌐 Publicada en internet (GitHub Pages)

Una vez subido el repo a GitHub, la página queda publicada automáticamente en:

```
https://<tu-usuario>.github.io/mediakit-website/
```

(Verifica en *Settings → Pages* que la rama esté en `main` y la carpeta en `/`.)

## ✏️ Cómo editar el contenido

Todo el contenido editable está en **`index.html`**. No necesitas saber programar:

- Cambia el título, los textos y la fecha buscando el texto en el archivo y reemplazándolo.
- En la sección "Tu nombre aquí" pon tus datos como ponente.
- En el bloque del agenda puedes ajustar los horarios o los temas.

## 📩 Activar los registros reales (Formspree, gratis)

Por defecto el formulario guarda los registros en el navegador (modo demo) para que puedas probarlo. Para recibir los registros por email:

1. Crea una cuenta gratuita en https://formspree.io
2. Crea un nuevo formulario y copia el endpoint (algo como `https://formspree.io/f/abcd1234`).
3. Abre `script.js` y pega ese endpoint dentro de las comillas de `FORMSPREE_ENDPOINT`.
4. Guarda, haz `git commit` y `git push` — y a recibir registros.

## 🛠️ Estructura de archivos

```
mediakit-website/
├── index.html      ← Contenido y estructura (texto editable)
├── styles.css      ← Estilos (colores, tipografías)
├── script.js       ← Lógica del formulario
└── README.md       ← Este archivo
```

## 📄 Licencia

Uso personal del propietario.
