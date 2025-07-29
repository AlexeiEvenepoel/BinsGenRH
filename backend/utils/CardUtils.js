/**
 * Utilidades para manejo de tarjetas de crédito
 * Basado en las funciones de mundobins_clean.py
 */

class CardUtils {
  /**
   * Algoritmo de Luhn para validar números de tarjeta
   * Equivalente a cardLuhnChecksumIsValid() en mundobins_clean.py
   */
  static luhnCheck(cardNumber) {
    let sum = 0;
    const numDigits = cardNumber.length;
    const oddEven = numDigits & 1;

    for (let count = 0; count < numDigits; count++) {
      let digit = parseInt(cardNumber[count]);
      if (!((count & 1) ^ oddEven)) {
        digit = digit * 2;
      }
      if (digit > 9) {
        digit = digit - 9;
      }
      sum = sum + digit;
    }
    return sum % 10 === 0;
  }

  /**
   * Generar dígito de verificación usando algoritmo de Luhn
   * Equivalente a la lógica de checksum en ccgen() de mundobins_clean.py
   */
  static generateChecksum(partialCard) {
    for (let i = 0; i < 10; i++) {
      const testCard = partialCard + i.toString();
      if (this.luhnCheck(testCard)) {
        return testCard;
      }
    }
    return partialCard + "0";
  }

  /**
   * Generar número aleatorio entre min y max
   */
  static randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Generar CVV/CID
   * Equivalente a ccvgen() en mundobins_clean.py
   */
  static generateCVV(cardLength = 16) {
    if (cardLength === 15) {
      // Amex usa CID de 4 dígitos
      const num = this.randomBetween(1000, 9999);
      return num.toString();
    } else {
      // Visa, Mastercard, Discover usan CVV de 3 dígitos
      const num = this.randomBetween(100, 999);
      return num < 100 ? "0" + num.toString() : num.toString();
    }
  }

  /**
   * Generar fecha de expiración
   * Equivalente a data1gen() y data2gen() en mundobins_clean.py
   */
  static generateExpiryDate() {
    // Mes (01-12)
    const month = this.randomBetween(1, 12);
    const monthStr = month < 10 ? "0" + month.toString() : month.toString();

    // Año (años actuales y futuros como en mundobins_clean.py)
    const years = [2022, 2023, 2024, 2025, 2026, 2027];
    const year = years[Math.floor(Math.random() * years.length)];

    return { month: monthStr, year: year };
  }

  /**
   * Simular estado de la tarjeta (Live, Died, Unknown)
   * Equivalente a checker() en mundobins_clean.py
   */
  static generateCardStatus() {
    const statuses = [
      { status: "Died Card", color: "#ff4444", weight: 4 },
      { status: "Unknown Card", color: "#ff8800", weight: 2 },
      { status: "Live Card", color: "#44ff44", weight: 1 },
    ];

    // Crear array ponderado para simular la distribución real
    const weightedArray = [];
    statuses.forEach((item) => {
      for (let i = 0; i < item.weight; i++) {
        weightedArray.push(item);
      }
    });

    return weightedArray[Math.floor(Math.random() * weightedArray.length)];
  }

  /**
   * Validar formato de BIN
   * Equivalente a bindetector() en mundobins_clean.py
   */
  static validateBinFormat(binFormat) {
    // Verificar que solo contenga números y x
    if (!/^[0-9x]+$/i.test(binFormat)) {
      throw new Error("Formato BIN inválido. Use solo números y X");
    }

    // Verificar longitud
    if (binFormat.length !== 15 && binFormat.length !== 16) {
      throw new Error(
        "BIN debe tener 15 dígitos (Amex) o 16 dígitos (Visa/Mastercard)"
      );
    }

    // Verificar que tenga suficientes dígitos fijos
    const fixedDigits = binFormat.replace(/x/gi, "");
    if (fixedDigits.length < 6) {
      throw new Error("BIN debe tener al menos 6 dígitos fijos");
    }

    // Verificar rango válido de BIN (como en bindetector())
    const binPrefix = binFormat.substring(0, 6).replace(/x/gi, "0");
    const binNumber = parseInt(binPrefix);

    if (binNumber < 369999 || binNumber > 660000) {
      throw new Error("BIN fuera del rango válido");
    }

    return true;
  }

  /**
   * Detectar tipo de tarjeta por BIN
   */
  static detectCardType(bin) {
    const firstDigit = bin.charAt(0);
    const firstTwo = bin.substring(0, 2);

    if (firstDigit === "4") {
      return "VISA";
    } else if (
      firstDigit === "5" ||
      (parseInt(firstTwo) >= 51 && parseInt(firstTwo) <= 55)
    ) {
      return "MASTERCARD";
    } else if (
      firstDigit === "3" &&
      (bin.charAt(1) === "4" || bin.charAt(1) === "7")
    ) {
      return "AMERICAN EXPRESS";
    } else if (firstDigit === "6") {
      return "DISCOVER";
    } else {
      return "UNKNOWN";
    }
  }

  /**
   * Generar CPF aleatorio (como en mundobins_clean.py)
   */
  static generateCPF() {
    return this.randomBetween(1, 99999999999);
  }

  /**
   * Formatear número de tarjeta para mostrar
   */
  static formatCardNumber(cardNumber) {
    return cardNumber.replace(/(.{4})/g, "$1 ").trim();
  }

  /**
   * Simular delay de procesamiento (como el time.sleep en Python)
   */
  static async simulateDelay(ms = 500) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

module.exports = CardUtils;
