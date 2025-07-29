const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

// Configurar MIME types correctos
express.static.mime.define({
  "application/javascript": ["js"],
  "text/css": ["css"],
  "text/html": ["html"],
});

// Servir archivos estáticos desde dist
app.use(
  express.static(path.join(__dirname, "dist"), {
    setHeaders: (res, path) => {
      if (path.endsWith(".js")) {
        res.setHeader("Content-Type", "application/javascript");
      } else if (path.endsWith(".css")) {
        res.setHeader("Content-Type", "text/css");
      } else if (path.endsWith(".html")) {
        res.setHeader("Content-Type", "text/html");
      }
    },
  })
);

// Ruta principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🌐 Frontend servidor ejecutándose en http://localhost:${PORT}`);
  console.log(`📱 BINs Generator RH - Frontend`);
});
