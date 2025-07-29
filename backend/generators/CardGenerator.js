/**
 * Generador de tarjetas completas
 * Basado en las funciones ccgen(), manual() y extrapolación de mundobins_clean.py
 */

const CardUtils = require("../utils/CardUtils");

class CardGenerator {
  /**
   * Generar tarjetas completas basadas en formato BIN
   * Equivalente a ccgen() y manual() en mundobins_clean.py
   */
  static generateCards(binFormat, count, customDate = null) {
    const cards = [];
    const isAmex = binFormat.length === 15;
    const targetLength = isAmex ? 15 : 16;

    // Validar formato BIN
    CardUtils.validateBinFormat(binFormat);

    for (let i = 0; i < count; i++) {
      let cardNumber = "";

      // Generar número de tarjeta basado en el formato BIN
      for (let j = 0; j < targetLength - 1; j++) {
        if (j < binFormat.length) {
          if (binFormat[j].toLowerCase() === "x") {
            cardNumber += CardUtils.randomBetween(0, 9).toString();
          } else if (/\d/.test(binFormat[j])) {
            cardNumber += binFormat[j];
          } else {
            throw new Error(
              `Carácter inválido en posición ${j}: ${binFormat[j]}`
            );
          }
        } else {
          cardNumber += CardUtils.randomBetween(0, 9).toString();
        }
      }

      // Generar dígito de verificación usando algoritmo de Luhn
      cardNumber = CardUtils.generateChecksum(cardNumber);

      // Generar CVV/CID
      const cvv = CardUtils.generateCVV(targetLength);

      // Generar fecha de expiración
      const expiry = customDate || CardUtils.generateExpiryDate();

      // Simular estado de la tarjeta (Live, Died, Unknown)
      const status = CardUtils.generateCardStatus();

      // Detectar tipo de tarjeta
      const cardType = CardUtils.detectCardType(cardNumber);

      cards.push({
        number: cardNumber,
        cvv: cvv,
        month: expiry.month,
        year: expiry.year,
        status: status.status,
        statusColor: status.color,
        type: cardType,
        formatted: CardUtils.formatCardNumber(cardNumber),
        generated_at: new Date().toISOString(),
      });
    }

    return cards;
  }

  /**
   * Extrapolación básica de tarjetas
   * Equivalente a genbasico() en mundobins_clean.py
   */
  static basicExtrapolation(card1, card2) {
    const ba = card1.substring(0, 10);
    const ba2 = card2.substring(0, 10);
    const suffix = "xxxxxx";

    const extrapolated1 = ba + suffix;
    const extrapolated2 = ba2 + suffix;

    return {
      type: "EXTRAPOLACION BASICA",
      results: [
        { pattern: extrapolated1, description: "Extrapolación exitosa 1" },
        { pattern: extrapolated2, description: "Extrapolación exitosa 2" },
      ],
    };
  }

  /**
   * Extrapolación media de tarjetas
   * Equivalente a genmedio() en mundobins_clean.py
   */
  static mediumExtrapolation(card1, card2) {
    const ex = card1.substring(0, 7);
    const ex2 = card2.substring(0, 7);
    const tra = card1.substring(8, 10);
    const tra2 = card2.substring(8, 10);
    const po = card1.substring(12, 14);
    const po2 = card2.substring(12, 14);
    const la = card1.substring(15);
    const la2 = card2.substring(15);

    const gen = `${ex}x${tra}xx${po}x${la}`;
    const gen2 = `${ex2}x${tra2}xx${po2}x${la2}`;

    return {
      type: "EXTRAPOLACION MEDIA",
      results: [
        { pattern: gen, description: "Extrapolación fabulosa 1" },
        { pattern: gen2, description: "Extrapolación fabulosa 2" },
      ],
    };
  }

  /**
   * Extrapolación avanzada de tarjetas
   * Equivalente a genavanzado() en mundobins_clean.py
   */
  static advancedExtrapolation(card1, card2) {
    const comp = card1.substring(9, 11);
    const comp2 = card2.substring(9, 11);

    const sum1 = parseInt(comp[0]) + parseInt(comp2[0]);
    const sum2 = parseInt(comp[1]) + parseInt(comp2[1]);

    const result1 = Math.floor((sum1 / 2) * 5).toString();
    const result2 = Math.floor((sum2 / 2) * 5).toString();

    const add = result1.substring(0, 2).padStart(2, "0");
    const add2 = result2.substring(0, 2).padStart(2, "0");

    const extrapolated = parseInt(add) + parseInt(add2);
    const fingen = card1.substring(0, 8) + extrapolated.toString() + "xxxxxx";

    return {
      type: "EXTRAPOLACION AVANZADA",
      results: [
        {
          pattern: fingen,
          description: "Extrapolación super VIP",
          note: "Esta extrapolación avanzada se sacó de la base de datos del banco",
        },
      ],
    };
  }

  /**
   * Realizar todas las extrapolaciones
   * Equivalente a la opción 8 del menú en mundobins_clean.py
   */
  static extrapolateCards(card1, card2) {
    // Validar que las tarjetas tengan la longitud correcta
    if (card1.length < 16 || card2.length < 16) {
      throw new Error("Las tarjetas deben tener al menos 16 dígitos");
    }

    if (!/^\d+$/.test(card1) || !/^\d+$/.test(card2)) {
      throw new Error("Las tarjetas deben contener solo números");
    }

    const extrapolations = {
      basic: this.basicExtrapolation(card1, card2),
      medium: this.mediumExtrapolation(card1, card2),
      advanced: this.advancedExtrapolation(card1, card2),
    };

    return extrapolations;
  }

  /**
   * Generar tarjetas con patrón específico
   */
  static generateWithPattern(pattern, count) {
    const cards = [];

    for (let i = 0; i < count; i++) {
      let cardNumber = "";

      for (let j = 0; j < pattern.length; j++) {
        if (pattern[j].toLowerCase() === "x") {
          cardNumber += CardUtils.randomBetween(0, 9).toString();
        } else {
          cardNumber += pattern[j];
        }
      }

      // Asegurar que tenga la longitud correcta
      while (cardNumber.length < 15) {
        cardNumber += CardUtils.randomBetween(0, 9).toString();
      }

      if (cardNumber.length === 15) {
        // Amex
        cardNumber = CardUtils.generateChecksum(cardNumber);
      } else {
        // Otras tarjetas - ajustar a 16 dígitos
        while (cardNumber.length < 16) {
          cardNumber += CardUtils.randomBetween(0, 9).toString();
        }
        cardNumber = cardNumber.substring(0, 15);
        cardNumber = CardUtils.generateChecksum(cardNumber);
      }

      const cvv = CardUtils.generateCVV(cardNumber.length);
      const expiry = CardUtils.generateExpiryDate();
      const status = CardUtils.generateCardStatus();

      cards.push({
        number: cardNumber,
        cvv: cvv,
        month: expiry.month,
        year: expiry.year,
        status: status.status,
        statusColor: status.color,
        type: CardUtils.detectCardType(cardNumber),
        pattern: pattern,
      });
    }

    return cards;
  }

  /**
   * Simular el proceso de búsqueda como en mundobins_clean.py
   */
  static async simulateSearch(
    message = "$ BUSCANDO TARGETAS DE CREDITO CON INJECCION RH"
  ) {
    const progress =
      "••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••";

    return {
      message: message,
      progress: progress,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Generar estadísticas de las tarjetas generadas
   */
  static generateStats(cards) {
    const stats = {
      total: cards.length,
      live: cards.filter((c) => c.status === "Live Card").length,
      died: cards.filter((c) => c.status === "Died Card").length,
      unknown: cards.filter((c) => c.status === "Unknown Card").length,
      types: {},
    };

    // Contar por tipo de tarjeta
    cards.forEach((card) => {
      stats.types[card.type] = (stats.types[card.type] || 0) + 1;
    });

    // Calcular porcentajes
    stats.percentages = {
      live: ((stats.live / stats.total) * 100).toFixed(1),
      died: ((stats.died / stats.total) * 100).toFixed(1),
      unknown: ((stats.unknown / stats.total) * 100).toFixed(1),
    };

    return stats;
  }
}

module.exports = CardGenerator;
