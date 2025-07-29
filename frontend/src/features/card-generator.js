/**
 * Card Generator Feature
 * Handles card generation functionality
 */

import { UIManager } from "../core/ui-manager.js";
import { Utils } from "../utils/utils.js";

export class CardGenerator {
  constructor(apiBaseUrl) {
    this.apiBaseUrl = apiBaseUrl;
    this.uiManager = new UIManager();
    this.utils = new Utils();
  }

  setupEventListeners() {
    // Generate Cards button
    const generateBtn = document.getElementById("generate-cards-btn");
    if (generateBtn) {
      generateBtn.addEventListener("click", () => this.generateCards());
    }

    // Copy Cards button
    const copyBtn = document.getElementById("copy-cards-btn");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => this.copyCards());
    }

    // Export Cards button
    const exportBtn = document.getElementById("export-cards-btn");
    if (exportBtn) {
      exportBtn.addEventListener("click", () => this.exportCards());
    }
  }

  async generateCards() {
    const binFormat = document.getElementById("bin-format").value.trim();
    const cardCount = parseInt(document.getElementById("card-count").value);
    const useCustomDate = document.getElementById("custom-date-check").checked;

    if (!binFormat) {
      this.uiManager.showError("Por favor, ingresa un formato BIN válido.");
      return;
    }

    if (!this.utils.validateBinFormat(binFormat)) {
      this.uiManager.showError(
        "Formato BIN inválido. Use 'x' para dígitos aleatorios."
      );
      return;
    }

    if (!cardCount || cardCount < 1 || cardCount > 50) {
      this.uiManager.showError("La cantidad debe estar entre 1 y 50.");
      return;
    }

    let customMonth = null;
    let customYear = null;

    if (useCustomDate) {
      customMonth = parseInt(document.getElementById("custom-month").value);
      customYear = parseInt(document.getElementById("custom-year").value);

      if (!customMonth || customMonth < 1 || customMonth > 12) {
        this.uiManager.showError("Mes inválido (1-12).");
        return;
      }

      if (!customYear || customYear < 2022 || customYear > 2030) {
        this.uiManager.showError("Año inválido (2022-2030).");
        return;
      }
    }

    // Show search simulation
    this.showSearchSimulation();

    try {
      const response = await fetch(`${this.apiBaseUrl}/generate-cards`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          binFormat: binFormat,
          count: cardCount,
          customMonth: customMonth,
          customYear: customYear,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error generando tarjetas");
      }

      if (data.success) {
        this.displayCards(data);
        this.uiManager.showSuccess(
          `${data.data.length} tarjetas generadas exitosamente`
        );
      } else {
        throw new Error(data.error || "Error en la respuesta del servidor");
      }
    } catch (error) {
      console.error("Error:", error);
      this.uiManager.showError(error.message);
    } finally {
      this.hideSearchSimulation();
    }
  }

  showSearchSimulation() {
    const simulation = document.getElementById("search-simulation");
    if (simulation) {
      simulation.style.display = "block";

      // Animate progress bar
      const progressFill = simulation.querySelector(".progress-fill");
      if (progressFill) {
        progressFill.style.width = "0%";
        setTimeout(() => {
          progressFill.style.width = "100%";
        }, 100);
      }
    }
  }

  hideSearchSimulation() {
    const simulation = document.getElementById("search-simulation");
    if (simulation) {
      setTimeout(() => {
        simulation.style.display = "none";
      }, 500);
    }
  }

  displayCards(data) {
    const resultsContainer = document.getElementById("cards-results");
    const cardsStats = document.getElementById("cards-stats");
    const cardsTableBody = document.getElementById("cards-tbody");

    if (!resultsContainer || !cardsTableBody) return;

    // Clear previous results
    cardsTableBody.innerHTML = "";

    // Update stats
    if (cardsStats) {
      const stats = data.stats || {
        total: data.data.length,
        live: 0,
        died: 0,
        unknown: data.data.length,
      };
      cardsStats.innerHTML = `
        <div class="stat-item">
          <span class="stat-label">Total:</span>
          <span class="stat-value">${stats.total}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Live:</span>
          <span class="stat-value stat-live">${stats.live}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Died:</span>
          <span class="stat-value stat-died">${stats.died}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Unknown:</span>
          <span class="stat-value stat-unknown">${stats.unknown}</span>
        </div>
      `;
    }

    // Create card rows
    data.data.forEach((card) => {
      const row = document.createElement("tr");
      row.className = `card-row status-${card.status.toLowerCase()}`;
      row.innerHTML = `
        <td class="card-number">${this.utils.formatCardNumber(card.number)}</td>
        <td class="card-cvv">${card.cvv}</td>
        <td class="card-month">${card.month.toString().padStart(2, "0")}</td>
        <td class="card-year">${card.year}</td>
        <td class="card-status">
          <span class="status-badge status-${card.status.toLowerCase()}">
            ${card.status}
          </span>
        </td>
      `;
      cardsTableBody.appendChild(row);
    });

    // Show results container
    resultsContainer.style.display = "block";
  }

  async copyCards() {
    const cardRows = document.querySelectorAll("#cards-tbody tr");
    if (cardRows.length === 0) {
      this.uiManager.showError("No hay tarjetas para copiar");
      return;
    }

    const cardsText = Array.from(cardRows)
      .map((row) => {
        const cells = row.querySelectorAll("td");
        const number = cells[0].textContent.replace(/\s/g, "");
        const cvv = cells[1].textContent;
        const month = cells[2].textContent;
        const year = cells[3].textContent;
        return `${number}|${month}|${year}|${cvv}`;
      })
      .join("\n");

    try {
      await this.utils.copyToClipboard(cardsText);
      this.uiManager.showSuccess(
        `${cardRows.length} tarjetas copiadas al portapapeles`
      );
    } catch (error) {
      this.uiManager.showError("Error al copiar tarjetas");
    }
  }

  exportCards() {
    const cardRows = document.querySelectorAll("#cards-tbody tr");
    if (cardRows.length === 0) {
      this.uiManager.showError("No hay tarjetas para exportar");
      return;
    }

    const cardsText = Array.from(cardRows)
      .map((row) => {
        const cells = row.querySelectorAll("td");
        const number = cells[0].textContent.replace(/\s/g, "");
        const cvv = cells[1].textContent;
        const month = cells[2].textContent;
        const year = cells[3].textContent;
        const status = cells[4].textContent.trim();
        return `${number}|${month}|${year}|${cvv}|${status}`;
      })
      .join("\n");

    // Create and download file
    const blob = new Blob([cardsText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `cards_${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    this.uiManager.showSuccess(
      `${cardRows.length} tarjetas exportadas exitosamente`
    );
  }
}
