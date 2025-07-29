/**
 * Utility Functions
 * Common helper functions used across the application
 */

export class Utils {
  /**
   * Detect card type based on BIN
   */
  detectCardType(bin) {
    const binStr = bin.toString();

    if (binStr.startsWith("4")) {
      return "VISA";
    } else if (binStr.startsWith("5") || binStr.startsWith("2")) {
      return "MASTERCARD";
    } else if (binStr.startsWith("3")) {
      return "AMERICAN EXPRESS";
    } else if (binStr.startsWith("6")) {
      return "DISCOVER";
    }

    return "UNKNOWN";
  }

  /**
   * Format card number with spaces
   */
  formatCardNumber(number) {
    return number.replace(/(.{4})/g, "$1 ").trim();
  }

  /**
   * Validate BIN format
   */
  validateBinFormat(binFormat) {
    // Check if format contains only digits and 'x'
    const validChars = /^[0-9x]+$/i.test(binFormat);

    // Check length (15 for Amex, 16 for others)
    const validLength = binFormat.length === 15 || binFormat.length === 16;

    // Check if it has at least 6 digits at the beginning
    const hasValidPrefix = /^[0-9]{6,}/.test(binFormat);

    return validChars && validLength && hasValidPrefix;
  }

  /**
   * Generate random number within range
   */
  randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Generate random BIN
   */
  generateRandomBin() {
    const cardTypes = [
      { prefix: "4", name: "VISA" },
      { prefix: "5", name: "MASTERCARD" },
      { prefix: "2", name: "MASTERCARD" },
      { prefix: "3", name: "AMEX" },
    ];

    const cardType = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    let bin = cardType.prefix;

    // Generate remaining 5 digits for BIN
    for (let i = 0; i < 5; i++) {
      bin += Math.floor(Math.random() * 10);
    }

    return bin;
  }

  /**
   * Copy text to clipboard
   */
  async copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      return true;
    }
  }

  /**
   * Format uptime in milliseconds to readable format
   */
  formatUptime(ms) {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    if (hours > 0) {
      return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds % 60}s`;
    } else {
      return `${seconds}s`;
    }
  }

  /**
   * Debounce function calls
   */
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /**
   * Throttle function calls
   */
  throttle(func, limit) {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  /**
   * Validate email format
   */
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Sanitize HTML to prevent XSS
   */
  sanitizeHTML(str) {
    const temp = document.createElement("div");
    temp.textContent = str;
    return temp.innerHTML;
  }

  /**
   * Format number with thousands separator
   */
  formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  /**
   * Get current timestamp
   */
  getCurrentTimestamp() {
    return new Date().toISOString();
  }

  /**
   * Sleep/delay function
   */
  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
