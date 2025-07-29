const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

// Servir archivos estáticos desde dist
app.use(express.static(path.join(__dirname, "dist")));

// Ruta principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🌐 Frontend servidor ejecutándose en http://localhost:${PORT}`);
  console.log(`📱 BINs Generator RH - Frontend`);
});
