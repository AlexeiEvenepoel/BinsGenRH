/**
 * Generador de BINs
 * Basado en la clase gen_Bin de Bin Generator.py
 */

const CardUtils = require("../utils/CardUtils");

class BinGenerator {
  /**
   * Generar BINs según el tipo de tarjeta
   * Equivalente a los métodos Mastercard(), Visa(), Amex(), Discover() de gen_Bin
   */
  static generateBins(type, count) {
    const bins = [];

    for (let i = 0; i < count; i++) {
      let bin = "";

      switch (type.toLowerCase()) {
        case "mastercard":
          // Mastercard: inicia con 5 + 5 dígitos aleatorios
          bin = "5" + this.generateRandomDigits(5);
          break;

        case "visa":
          // Visa: inicia con 4 + 5 dígitos aleatorios
          bin = "4" + this.generateRandomDigits(5);
          break;

        case "amex":
          // Amex: inicia con 3 + 5 dígitos aleatorios
          bin = "3" + this.generateRandomDigits(5);
          break;

        case "discover":
          // Discover: inicia con 6 + 5 dígitos aleatorios
          bin = "6" + this.generateRandomDigits(5);
          break;

        default:
          throw new Error(`Tipo de tarjeta no válido: ${type}`);
      }

      bins.push(bin);
    }

    return bins;
  }

  /**
   * Generar BINs específicos por rangos reales
   */
  static generateRealisticBins(type, count) {
    const bins = [];
    const ranges = this.getCardRanges(type);

    for (let i = 0; i < count; i++) {
      const range = ranges[Math.floor(Math.random() * ranges.length)];
      let bin = "";

      if (range.prefix) {
        bin = range.prefix + this.generateRandomDigits(6 - range.prefix.length);
      } else {
        bin = CardUtils.randomBetween(range.min, range.max).toString();
      }

      bins.push(bin);
    }

    return bins;
  }

  /**
   * Obtener rangos reales de BINs por tipo de tarjeta
   */
  static getCardRanges(type) {
    const ranges = {
      visa: [
        { prefix: "4", min: 400000, max: 499999 },
        { prefix: "41", min: 410000, max: 419999 },
        { prefix: "42", min: 420000, max: 429999 },
        { prefix: "43", min: 430000, max: 439999 },
      ],
      mastercard: [
        { prefix: "51", min: 510000, max: 519999 },
        { prefix: "52", min: 520000, max: 529999 },
        { prefix: "53", min: 530000, max: 539999 },
        { prefix: "54", min: 540000, max: 549999 },
        { prefix: "55", min: 550000, max: 559999 },
      ],
      amex: [
        { prefix: "34", min: 340000, max: 349999 },
        { prefix: "37", min: 370000, max: 379999 },
      ],
      discover: [
        { prefix: "60", min: 600000, max: 609999 },
        { prefix: "65", min: 650000, max: 659999 },
      ],
    };

    return ranges[type.toLowerCase()] || [];
  }

  /**
   * Generar dígitos aleatorios
   */
  static generateRandomDigits(length) {
    let digits = "";
    for (let i = 0; i < length; i++) {
      digits += CardUtils.randomBetween(0, 9).toString();
    }
    return digits;
  }

  /**
   * Generar BIN con información adicional
   */
  static generateBinWithInfo(type, count) {
    const bins = this.generateRealisticBins(type, count);

    return bins.map((bin) => ({
      bin: bin,
      type: type.toUpperCase(),
      scheme: this.getSchemeInfo(type),
      length: type.toLowerCase() === "amex" ? 15 : 16,
      generated_at: new Date().toISOString(),
    }));
  }

  /**
   * Obtener información del esquema de la tarjeta
   */
  static getSchemeInfo(type) {
    const schemes = {
      visa: {
        name: "VISA",
        description: "Visa Inc.",
        countries: ["UNITED STATES", "GLOBAL"],
      },
      mastercard: {
        name: "MASTERCARD",
        description: "Mastercard Incorporated",
        countries: ["UNITED STATES", "GLOBAL"],
      },
      amex: {
        name: "AMERICAN EXPRESS",
        description: "American Express Company",
        countries: ["UNITED STATES", "GLOBAL"],
      },
      discover: {
        name: "DISCOVER",
        description: "Discover Financial Services",
        countries: ["UNITED STATES"],
      },
    };

    return (
      schemes[type.toLowerCase()] || {
        name: "UNKNOWN",
        description: "Unknown",
        countries: [],
      }
    );
  }

  /**
   * Validar BIN generado
   */
  static validateGeneratedBin(bin, type) {
    const expectedLength = 6;

    if (bin.length !== expectedLength) {
      return false;
    }

    const detectedType = CardUtils.detectCardType(bin);
    return detectedType === type.toUpperCase();
  }
}

module.exports = BinGenerator;
