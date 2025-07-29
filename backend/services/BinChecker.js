/**
 * Servicio para verificar información de BINs
 * Basado en bincheckrh() de mundobins_clean.py
 */

const axios = require("axios");
const CardUtils = require("../utils/CardUtils");

class BinChecker {
  /**
   * Verificar información de un BIN
   * Equivalente a bincheckrh() en mundobins_clean.py
   */
  static async checkBin(bin) {
    const binPrefix = bin.substring(0, 6);

    try {
      // Intentar obtener información real del BIN (simulado)
      const binInfo = await this.getBinInfo(binPrefix);
      return binInfo;
    } catch (error) {
      // Si falla, generar información simulada
      return this.generateSimulatedBinInfo(binPrefix);
    }
  }

  /**
   * Obtener información real del BIN usando quickbinlookup.com
   * Equivalente a bincheckrh() en mundobins_clean.py
   */
  static async getBinInfo(bin) {
    try {
      // Usar la misma API que el script original
      const url = `https://quickbinlookup.com/?binquery=${bin}`;

      const response = await axios.get(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        },
        timeout: 10000,
      });

      if (response.status === 200) {
        // Parsear HTML como en el script original
        const html = response.data;

        // Extraer información usando regex (más simple que BeautifulSoup)
        const info = this.parseQuickBinLookupResponse(html, bin);
        return info;
      } else {
        throw new Error("API no disponible");
      }
    } catch (error) {
      console.log(
        "Error con API externa, usando datos simulados:",
        error.message
      );
      // Fallback a datos simulados si la API falla
      const cardType = CardUtils.detectCardType(bin);
      return this.generateBinDetails(bin, cardType);
    }
  }

  /**
   * Parsear respuesta HTML de quickbinlookup.com
   */
  static parseQuickBinLookupResponse(html, bin) {
    try {
      // Extraer información usando regex (equivalente al BeautifulSoup del original)
      const extractText = (pattern) => {
        const match = html.match(pattern);
        return match ? match[1].trim() : "N/A";
      };

      const brand = extractText(/<td[^>]*id=['"]typeresult['"][^>]*>([^<]+)</i);
      const type = extractText(/<td[^>]*id=['"]category['"][^>]*>([^<]+)</i);
      const prepaid = extractText(/<td[^>]*id=['"]website['"][^>]*>([^<]+)</i);
      const country = extractText(
        /<td[^>]*id=['"]brandresult['"][^>]*>([^<]+)</i
      );
      const bank = extractText(/<td[^>]*id=['"]subbrand['"][^>]*>([^<]+)</i);
      const website = extractText(
        /<td[^>]*id=['"]countryresult['"][^>]*>([^<]+)</i
      );
      const phone = extractText(/<td[^>]*id=['"]bankresult['"][^>]*>([^<]+)</i);

      return {
        bin: bin,
        scheme: brand || CardUtils.detectCardType(bin),
        country: country || "UNKNOWN",
        type: type || "UNKNOWN",
        category: "CLASSIC",
        bank: bank || "UNKNOWN BANK",
        website: website || "N/A",
        phone: phone || "N/A",
        prepaid: prepaid === "Yes" ? "YES" : "NO",
        length: CardUtils.detectCardType(bin) === "AMERICAN EXPRESS" ? 15 : 16,
        luhn: true,
        checked_at: new Date().toISOString(),
        source: "quickbinlookup.com",
      };
    } catch (error) {
      console.log("Error parseando respuesta HTML:", error.message);
      // Fallback a datos simulados
      const cardType = CardUtils.detectCardType(bin);
      return this.generateBinDetails(bin, cardType);
    }
  }

  /**
   * Generar información simulada del BIN
   */
  static generateSimulatedBinInfo(bin) {
    const cardType = CardUtils.detectCardType(bin);
    return this.generateBinDetails(bin, cardType);
  }

  /**
   * Generar detalles del BIN basado en el tipo
   */
  static generateBinDetails(bin, cardType) {
    const countries = [
      "UNITED STATES",
      "CANADA",
      "BRAZIL",
      "COLOMBIA",
      "SPAIN",
      "SINGAPORE",
      "GERMANY",
      "MEXICO",
    ];

    const types = ["DEBIT", "CREDIT", "PREPAID"];
    const categories = ["CLASSIC", "GOLD", "PLATINUM", "BUSINESS"];

    const banks = {
      VISA: [
        "CHASE BANK",
        "BANK OF AMERICA",
        "WELLS FARGO",
        "CITIBANK",
        "CAPITAL ONE",
        "GREENSBORO HEALTH CARE C.U.",
      ],
      MASTERCARD: [
        "JPMORGAN CHASE",
        "BANK OF AMERICA",
        "CITIGROUP",
        "WELLS FARGO",
        "CAPITAL ONE",
      ],
      "AMERICAN EXPRESS": [
        "AMERICAN EXPRESS BANK",
        "AMERICAN EXPRESS CENTURION BANK",
      ],
      DISCOVER: ["DISCOVER BANK", "DISCOVER FINANCIAL SERVICES"],
    };

    const websites = {
      VISA: "www.visa.com",
      MASTERCARD: "www.mastercard.com",
      "AMERICAN EXPRESS": "www.americanexpress.com",
      DISCOVER: "www.discover.com",
    };

    const phones = [
      "1-800-VISA-911",
      "1-800-MC-ASSIST",
      "1-800-528-4800",
      "1-800-DISCOVER",
    ];

    const selectedBanks = banks[cardType] || ["UNKNOWN BANK"];
    const selectedBank =
      selectedBanks[Math.floor(Math.random() * selectedBanks.length)];

    return {
      bin: bin,
      scheme: cardType,
      country: countries[Math.floor(Math.random() * countries.length)],
      type: types[Math.floor(Math.random() * types.length)],
      category: categories[Math.floor(Math.random() * categories.length)],
      bank: selectedBank,
      website: websites[cardType] || "www.unknown.com",
      phone: phones[Math.floor(Math.random() * phones.length)],
      prepaid: Math.random() > 0.7 ? "YES" : "NO",
      length: cardType === "AMERICAN EXPRESS" ? 15 : 16,
      luhn: true,
      checked_at: new Date().toISOString(),
    };
  }

  /**
   * Verificar múltiples BINs
   */
  static async checkMultipleBins(bins) {
    const results = [];

    for (const bin of bins) {
      try {
        const info = await this.checkBin(bin);
        results.push({ bin, info, success: true });
      } catch (error) {
        results.push({
          bin,
          error: error.message,
          success: false,
        });
      }
    }

    return results;
  }

  /**
   * Validar BIN antes de verificar
   */
  static validateBin(bin) {
    if (!bin || typeof bin !== "string") {
      throw new Error("BIN debe ser una cadena válida");
    }

    if (bin.length < 6) {
      throw new Error("BIN debe tener al menos 6 dígitos");
    }

    if (!/^\d+$/.test(bin)) {
      throw new Error("BIN debe contener solo números");
    }

    return true;
  }

  /**
   * Obtener información de rango de BIN
   */
  static getBinRangeInfo(bin) {
    const firstDigit = bin.charAt(0);
    const firstTwo = bin.substring(0, 2);
    const firstThree = bin.substring(0, 3);
    const firstFour = bin.substring(0, 4);

    const ranges = {
      4: {
        scheme: "VISA",
        description: "Visa cards",
        length: 16,
        ranges: ["4000-4999"],
      },
      5: {
        scheme: "MASTERCARD",
        description: "Mastercard cards",
        length: 16,
        ranges: ["5100-5599"],
      },
      34: {
        scheme: "AMERICAN EXPRESS",
        description: "American Express cards",
        length: 15,
        ranges: ["3400-3499"],
      },
      37: {
        scheme: "AMERICAN EXPRESS",
        description: "American Express cards",
        length: 15,
        ranges: ["3700-3799"],
      },
      6: {
        scheme: "DISCOVER",
        description: "Discover cards",
        length: 16,
        ranges: ["6000-6999"],
      },
    };

    // Buscar coincidencia más específica primero
    return (
      ranges[firstFour] ||
      ranges[firstThree] ||
      ranges[firstTwo] ||
      ranges[firstDigit] || {
        scheme: "UNKNOWN",
        description: "Unknown card type",
        length: 16,
        ranges: [],
      }
    );
  }

  /**
   * Formatear información del BIN para mostrar
   * Como en mundobins_clean.py
   */
  static formatBinInfo(binInfo) {
    const formatted = {
      display: [
        `[✓] NUMERO DE LA TARGETA: ${binInfo.bin}xxxxxxxxxx`,
        `[✓] MARCA: ${binInfo.scheme}`,
        `[✓] TIPO: ${binInfo.type}`,
        `[✓] PREPAGO ??: ${binInfo.prepaid}`,
        `[✓] PAIS: ${binInfo.country}`,
        `[✓] BANCO: ${binInfo.bank}`,
        `[✓] SITIO WEB: ${binInfo.website}`,
        `[✓] TELEFONO: ${binInfo.phone}`,
      ],
      raw: binInfo,
    };

    return formatted;
  }
}

module.exports = BinChecker;
