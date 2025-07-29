const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const axios = require("axios");
const path = require("path");

// Importar módulos personalizados
const CardUtils = require("./utils/CardUtils");
const BinGenerator = require("./generators/BinGenerator");
const CardGenerator = require("./generators/CardGenerator");
const BinChecker = require("./services/BinChecker");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware de seguridad y logging
app.use(helmet());
app.use(morgan("combined"));
app.use(
  cors({
    origin: [
      "http://localhost:8080",
      "http://127.0.0.1:8080",
      "http://localhost:3000",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// Middleware de validación
const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        error: "Datos de entrada inválidos",
        details: error.details[0].message,
      });
    }
    next();
  };
};

// Rutas de la API

// Ruta principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

// Generar BINs básicos
app.post("/api/generate-bins", async (req, res) => {
  try {
    const { type, count } = req.body;

    // Validaciones
    if (!type || !count) {
      return res.status(400).json({
        error: "Tipo y cantidad son requeridos",
        example: { type: "visa", count: 10 },
      });
    }

    if (count > 100 || count < 1) {
      return res.status(400).json({
        error: "La cantidad debe estar entre 1 y 100",
      });
    }

    const validTypes = ["visa", "mastercard", "amex", "discover"];
    if (!validTypes.includes(type.toLowerCase())) {
      return res.status(400).json({
        error: "Tipo de tarjeta no válido",
        validTypes: validTypes,
      });
    }

    // Generar BINs
    const bins = BinGenerator.generateBins(type, parseInt(count));

    res.json({
      success: true,
      data: {
        bins,
        type: type.toUpperCase(),
        count: bins.length,
        generated_at: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("Error generando BINs:", error);
    res.status(500).json({
      error: "Error interno del servidor",
      message: error.message,
    });
  }
});

// Generar tarjetas completas (Opción 7 del mundobins_clean.py)
app.post("/api/generate-cards", async (req, res) => {
  try {
    const { binFormat, count, customDate } = req.body;

    // Validaciones
    if (!binFormat || !count) {
      return res.status(400).json({
        error: "Formato BIN y cantidad son requeridos",
        example: { binFormat: "416869xxxxxxxxxx", count: 25 },
      });
    }

    if (count > 50 || count < 1) {
      return res.status(400).json({
        error: "La cantidad debe estar entre 1 y 50",
      });
    }

    // Validar formato BIN (debe contener solo números y x)
    if (!/^[0-9x]+$/i.test(binFormat)) {
      return res.status(400).json({
        error: "Formato BIN inválido. Use solo números y X",
        example: "416869xxxxxxxxxx",
      });
    }

    // Validar longitud según tipo de tarjeta
    if (binFormat.length !== 15 && binFormat.length !== 16) {
      return res.status(400).json({
        error:
          "BIN debe tener 15 dígitos (Amex) o 16 dígitos (Visa/Mastercard)",
        received_length: binFormat.length,
      });
    }

    // Detectar si es un BIN válido
    const binPrefix = binFormat.substring(0, 6).replace(/x/gi, "");
    if (binPrefix.length < 4) {
      return res.status(400).json({
        error: "BIN debe tener al menos 4 dígitos fijos al inicio",
      });
    }

    // Generar tarjetas con simulación de estados (Live, Died, Unknown)
    const cards = CardGenerator.generateCards(
      binFormat,
      parseInt(count),
      customDate
    );

    // Simular el proceso de "búsqueda" como en mundobins_clean.py
    const searchSimulation = {
      message: "$ BUSCANDO TARGETAS DE CREDITO CON INJECCION RH",
      progress:
        "••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••",
    };

    res.json({
      success: true,
      simulation: searchSimulation,
      data: {
        cards,
        binFormat,
        count: cards.length,
        generated_at: new Date().toISOString(),
        stats: {
          live: cards.filter((c) => c.status === "Live Card").length,
          died: cards.filter((c) => c.status === "Died Card").length,
          unknown: cards.filter((c) => c.status === "Unknown Card").length,
        },
      },
    });
  } catch (error) {
    console.error("Error generando tarjetas:", error);
    res.status(500).json({
      error: "Error interno del servidor",
      message: error.message,
    });
  }
});

// Verificar información de BIN (Opción 6 del mundobins_clean.py)
app.post("/api/check-bin", async (req, res) => {
  try {
    const { bin } = req.body;

    if (!bin) {
      return res.status(400).json({
        error: "BIN es requerido",
        example: { bin: "416869" },
      });
    }

    if (bin.length < 6) {
      return res.status(400).json({
        error: "BIN debe tener al menos 6 dígitos",
      });
    }

    if (!/^\d+$/.test(bin)) {
      return res.status(400).json({
        error: "BIN debe contener solo números",
      });
    }

    // Obtener información del BIN
    const binInfo = await BinChecker.checkBin(bin);

    res.json({
      success: true,
      data: binInfo,
    });
  } catch (error) {
    console.error("Error verificando BIN:", error);
    res.status(500).json({
      error: "Error verificando BIN",
      message: error.message,
    });
  }
});

// Extrapolación de tarjetas (Opción 8 del mundobins_clean.py)
app.post("/api/extrapolate-cards", async (req, res) => {
  try {
    const { card1, card2 } = req.body;

    if (!card1 || !card2) {
      return res.status(400).json({
        error: "Se requieren dos tarjetas para extrapolación",
        example: { card1: "4168691234567890", card2: "4168699876543210" },
      });
    }

    // Validar que ambas tarjetas tengan la misma longitud
    if (card1.length !== card2.length) {
      return res.status(400).json({
        error: "Ambas tarjetas deben tener la misma longitud",
      });
    }

    // Realizar extrapolaciones (básica, media, avanzada)
    const extrapolations = CardGenerator.extrapolateCards(card1, card2);

    res.json({
      success: true,
      data: {
        input: { card1, card2 },
        extrapolations,
        generated_at: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("Error en extrapolación:", error);
    res.status(500).json({
      error: "Error en extrapolación",
      message: error.message,
    });
  }
});

// Ruta para obtener estadísticas
app.get("/api/stats", (req, res) => {
  res.json({
    success: true,
    data: {
      version: "3.0",
      author: "@RealHackRH_593",
      telegram: "@MundoNetRH",
      features: [
        "Generador de BINs",
        "Generador Live de Tarjetas",
        "Verificador de BINs",
        "Extrapolador de Tarjetas",
      ],
      supported_cards: ["VISA", "MASTERCARD", "AMERICAN EXPRESS", "DISCOVER"],
    },
  });
});

// Verificar actualizaciones (equivalente a checkversion() en mundobins_clean.py)
app.get("/api/check-version", async (req, res) => {
  try {
    const url = "https://pastebin.com/raw/RKnrunYb";
    const response = await axios.get(url, { timeout: 5000 });

    if (response.status === 200) {
      const latestVersion = response.data.trim();
      const currentVersion = "3.0";

      const hasUpdate = latestVersion !== currentVersion;

      res.json({
        success: true,
        data: {
          current_version: currentVersion,
          latest_version: latestVersion,
          has_update: hasUpdate,
          message: hasUpdate
            ? `[✓] SE ENCONTRO UNA NUEVA VERSION (^_^) - VERSION NUEVA: ${latestVersion}`
            : "$ NO HAY ACTUALIZACIONES DISPONIBLES\\n$ SIGUE CON ESTA VERSION POR EL MOMENTO\\n$ ESPERE A QUE @REALHACKRH593 ACTUALIZE LA VERSION (^_^)",
          checked_at: new Date().toISOString(),
        },
      });
    } else {
      throw new Error("No se pudo verificar actualizaciones");
    }
  } catch (error) {
    console.error("Error verificando versión:", error);
    res.json({
      success: false,
      error: "SE PRODUJO UN ERROR (X_X)",
      message: "No se pudo conectar al servidor de actualizaciones",
    });
  }
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Error interno del servidor",
    message:
      process.env.NODE_ENV === "development" ? err.message : "Algo salió mal",
  });
});

// Ruta 404
app.use("*", (req, res) => {
  res.status(404).json({
    error: "Ruta no encontrada",
    available_endpoints: [
      "POST /api/generate-bins",
      "POST /api/generate-cards",
      "POST /api/check-bin",
      "POST /api/extrapolate-cards",
      "GET /api/stats",
    ],
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend ejecutándose en http://localhost:${PORT}`);
  console.log(`📱 BINs Generator RH - JavaScript Edition`);
  console.log(`👨‍💻 BY: @RealHackRH_593`);
  console.log(`📱 Telegram: @MundoNetRH`);
});
