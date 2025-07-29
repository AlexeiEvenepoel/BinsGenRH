/**
 * Extrapolator Feature
 * Handles card extrapolation functionality
 */

import { UIManager } from "../core/ui-manager.js";
import { Utils } from "../utils/utils.js";

export class Extrapolator {
  constructor(apiBaseUrl) {
    this.apiBaseUrl = apiBaseUrl;
    this.uiManager = new UIManager();
    this.utils = new Utils();
  }

  setupEventListeners() {
    // Extrapolate button
    const extrapolateBtn = document.getElementById("extrapolate-btn");
    if (extrapolateBtn) {
      extrapolateBtn.addEventListener("click", () => this.extrapolateCards());
    }

    // Enter key support for card inputs
    const card1Input = document.getElementById("card1");
    const card2Input = document.getElementById("card2");

    if (card1Input) {
      card1Input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          this.extrapolateCards();
        }
      });
    }

    if (card2Input) {
      card2Input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          this.extrapolateCards();
        }
      });
    }
  }

  async extrapolateCards() {
    const card1 = document.getElementById("card1").value.trim();
    const card2 = document.getElementById("card2").value.trim();

    if (!card1 || !card2) {
      this.uiManager.showError(
        "Por favor, ingresa ambas tarjetas para extrapolación."
      );
      return;
    }

    if (!/^\d{15,16}$/.test(card1) || !/^\d{15,16}$/.test(card2)) {
      this.uiManager.showError("Las tarjetas deben tener 15 o 16 dígitos.");
      return;
    }

    if (card1 === card2) {
      this.uiManager.showError("Las tarjetas deben ser diferentes.");
      return;
    }

    this.uiManager.showLoading("Extrapolando tarjetas...");

    try {
      const response = await fetch(`${this.apiBaseUrl}/extrapolate-cards`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          card1: card1,
          card2: card2,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error extrapolando tarjetas");
      }

      if (data.success) {
        this.displayExtrapolation(data);
        this.uiManager.showSuccess("Extrapolación completada exitosamente");
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

  displayExtrapolation(data) {
    const resultsContainer = document.getElementById("extrapolation-results");
    const contentDiv = document.getElementById("extrapolation-content");

    if (!resultsContainer || !contentDiv) return;

    // Clear previous results
    contentDiv.innerHTML = "";

    // Create header with summary
    const headerDiv = document.createElement("div");
    headerDiv.className = "extrapolation-header";
    headerDiv.innerHTML = `
      <div class="extrapolation-summary">
        <div class="summary-item">
          <span class="summary-label">Total de Extrapolaciones:</span>
          <span class="summary-value">${data.data.length}</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Tarjeta Base 1:</span>
          <span class="summary-value">${this.utils.formatCardNumber(
            data.card1
          )}</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Tarjeta Base 2:</span>
          <span class="summary-value">${this.utils.formatCardNumber(
            data.card2
          )}</span>
        </div>
      </div>
    `;
    contentDiv.appendChild(headerDiv);

    // Create extrapolation sections
    data.data.forEach((extrapolation, index) => {
      const sectionDiv = this.createExtrapolationSection(
        extrapolation,
        index + 1
      );
      contentDiv.appendChild(sectionDiv);
    });

    // Add copy all button
    const actionsDiv = document.createElement("div");
    actionsDiv.className = "extrapolation-actions";
    actionsDiv.innerHTML = `
      <button class="btn btn-secondary" onclick="window.binsApp.extrapolator.copyAllExtrapolations()">
        <i class="fas fa-copy"></i> Copiar Todas las Extrapolaciones
      </button>
      <button class="btn btn-secondary" onclick="window.binsApp.extrapolator.exportExtrapolations()">
        <i class="fas fa-download"></i> Exportar TXT
      </button>
    `;
    contentDiv.appendChild(actionsDiv);

    // Show results container
    resultsContainer.style.display = "block";
  }

  createExtrapolationSection(extrapolation, sectionNumber) {
    const sectionDiv = document.createElement("div");
    sectionDiv.className = "extrapolation-section";

    sectionDiv.innerHTML = `
      <div class="section-header">
        <h4>
          <i class="fas fa-calculator"></i>
          Extrapolación ${sectionNumber}: ${extrapolation.method}
        </h4>
        <div class="section-stats">
          <span class="stat-badge">
            <i class="fas fa-credit-card"></i>
            ${extrapolation.cards.length} tarjetas
          </span>
        </div>
      </div>
      <div class="section-content">
        <div class="cards-grid">
          ${extrapolation.cards
            .map(
              (card) => `
            <div class="card-item">
              <div class="card-number">${this.utils.formatCardNumber(
                card.number
              )}</div>
              <div class="card-details">
                <span class="card-cvv">CVV: ${card.cvv}</span>
                <span class="card-date">${card.month
                  .toString()
                  .padStart(2, "0")}/${card.year}</span>
              </div>
              <button class="copy-card-btn" onclick="navigator.clipboard.writeText('${
                card.number
              }|${card.month.toString().padStart(2, "0")}|${card.year}|${
                card.cvv
              }')">
                <i class="fas fa-copy"></i>
              </button>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;

    return sectionDiv;
  }

  async copyAllExtrapolations() {
    const cardItems = document.querySelectorAll(
      ".extrapolation-section .card-item"
    );
    if (cardItems.length === 0) {
      this.uiManager.showError("No hay extrapolaciones para copiar");
      return;
    }

    const cardsText = Array.from(cardItems)
      .map((item) => {
        const number = item
          .querySelector(".card-number")
          .textContent.replace(/\s/g, "");
        const cvv = item
          .querySelector(".card-cvv")
          .textContent.replace("CVV: ", "");
        const date = item.querySelector(".card-date").textContent;
        const [month, year] = date.split("/");
        return `${number}|${month}|${year}|${cvv}`;
      })
      .join("\n");

    try {
      await this.utils.copyToClipboard(cardsText);
      this.uiManager.showSuccess(
        `${cardItems.length} extrapolaciones copiadas al portapapeles`
      );
    } catch (error) {
      this.uiManager.showError("Error al copiar extrapolaciones");
    }
  }

  exportExtrapolations() {
    const cardItems = document.querySelectorAll(
      ".extrapolation-section .card-item"
    );
    if (cardItems.length === 0) {
      this.uiManager.showError("No hay extrapolaciones para exportar");
      return;
    }

    const cardsText = Array.from(cardItems)
      .map((item) => {
        const number = item
          .querySelector(".card-number")
          .textContent.replace(/\s/g, "");
        const cvv = item
          .querySelector(".card-cvv")
          .textContent.replace("CVV: ", "");
        const date = item.querySelector(".card-date").textContent;
        const [month, year] = date.split("/");
        return `${number}|${month}|${year}|${cvv}`;
      })
      .join("\n");

    // Create and download file
    const blob = new Blob([cardsText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `extrapolations_${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    this.uiManager.showSuccess(
      `${cardItems.length} extrapolaciones exportadas exitosamente`
    );
  }
}
