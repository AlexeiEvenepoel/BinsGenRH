/**
 * BIN Generator Feature
 * Handles BIN generation functionality
 */

import { UIManager } from "../core/ui-manager.js";
import { Utils } from "../utils/utils.js";

export class BinGenerator {
  constructor(apiBaseUrl) {
    this.apiBaseUrl = apiBaseUrl;
    this.uiManager = new UIManager();
    this.utils = new Utils();
  }

  setupEventListeners() {
    // Generate BINs button
    const generateBtn = document.getElementById("generate-bins-btn");
    if (generateBtn) {
      generateBtn.addEventListener("click", () => this.generateBins());
    }

    // Copy BINs button
    const copyBtn = document.getElementById("copy-bins-btn");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => this.copyBins());
    }
  }

  async generateBins() {
    const cardType = document.getElementById("card-type").value;
    const binCount = parseInt(document.getElementById("bin-count").value);

    if (!cardType || !binCount || binCount < 1 || binCount > 100) {
      this.uiManager.showError(
        "Por favor, selecciona un tipo de tarjeta válido y una cantidad entre 1 y 100."
      );
      return;
    }

    this.uiManager.showLoading("Generando BINs...");

    try {
      const response = await fetch(`${this.apiBaseUrl}/generate-bins`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cardType: cardType,
          count: binCount,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error generando BINs");
      }

      if (data.success) {
        this.displayBins(data);
        this.uiManager.showSuccess(
          `${data.data.length} BINs generados exitosamente`
        );
      } else {
        throw new Error(data.error || "Error en la respuesta del servidor");
      }
    } catch (error) {
      console.error("Error:", error);
      this.uiManager.showError(error.message);
    } finally {
      this.uiManager.hideLoading();
    }
  }

  displayBins(data) {
    const resultsContainer = document.getElementById("bins-results");
    const binsList = document.getElementById("bins-list");

    if (!resultsContainer || !binsList) return;

    // Clear previous results
    binsList.innerHTML = "";

    // Create BIN items
    data.data.forEach((bin, index) => {
      const binItem = document.createElement("div");
      binItem.className = "result-item";
      binItem.innerHTML = `
        <div class="result-content">
          <span class="result-number">${index + 1}.</span>
          <span class="result-value">${bin}</span>
          <span class="result-type">${this.utils.detectCardType(bin)}</span>
        </div>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('${bin}')">
          <i class="fas fa-copy"></i>
        </button>
      `;
      binsList.appendChild(binItem);
    });

    // Show results container
    resultsContainer.style.display = "block";
  }

  async copyBins() {
    const binItems = document.querySelectorAll("#bins-list .result-value");
    if (binItems.length === 0) {
      this.uiManager.showError("No hay BINs para copiar");
      return;
    }

    const binsText = Array.from(binItems)
      .map((item) => item.textContent)
      .join("\n");

    try {
      await this.utils.copyToClipboard(binsText);
      this.uiManager.showSuccess(
        `${binItems.length} BINs copiados al portapapeles`
      );
    } catch (error) {
      this.uiManager.showError("Error al copiar BINs");
    }
  }
}
