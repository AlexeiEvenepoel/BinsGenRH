/**
 * BIN Checker Feature
 * Handles BIN verification functionality
 */

import { UIManager } from "../core/ui-manager.js";
import { Utils } from "../utils/utils.js";

export class BinChecker {
  constructor(apiBaseUrl) {
    this.apiBaseUrl = apiBaseUrl;
    this.uiManager = new UIManager();
    this.utils = new Utils();
  }

  setupEventListeners() {
    // Check BIN button
    const checkBtn = document.getElementById("check-bin-btn");
    if (checkBtn) {
      checkBtn.addEventListener("click", () => this.checkBin());
    }

    // Enter key support for BIN input
    const binInput = document.getElementById("bin-to-check");
    if (binInput) {
      binInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          this.checkBin();
        }
      });
    }
  }

  async checkBin() {
    const binToCheck = document.getElementById("bin-to-check").value.trim();

    if (!binToCheck) {
      this.uiManager.showError("Por favor, ingresa un BIN para verificar.");
      return;
    }

    if (binToCheck.length < 6) {
      this.uiManager.showError("El BIN debe tener al menos 6 dígitos.");
      return;
    }

    if (!/^\d+$/.test(binToCheck)) {
      this.uiManager.showError("El BIN debe contener solo números.");
      return;
    }

    this.uiManager.showLoading("Verificando BIN...");

    try {
      const response = await fetch(`${this.apiBaseUrl}/check-bin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bin: binToCheck,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error verificando BIN");
      }

      if (data.success) {
        this.displayBinInfo(data.data);
        this.uiManager.showSuccess("BIN verificado exitosamente");
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

  displayBinInfo(binInfo) {
    const resultsContainer = document.getElementById("bin-info-results");
    const binInfoDiv = document.getElementById("bin-info");

    if (!resultsContainer || !binInfoDiv) return;

    // Clear previous results
    binInfoDiv.innerHTML = "";

    // Create info sections
    const sections = [
      {
        title: "Información Básica",
        icon: "fa-info-circle",
        data: [
          { label: "BIN", value: binInfo.bin || "N/A" },
          { label: "Esquema", value: binInfo.scheme || "N/A" },
          { label: "Tipo", value: binInfo.type || "N/A" },
          { label: "Marca", value: binInfo.brand || "N/A" },
        ],
      },
      {
        title: "Información del Banco",
        icon: "fa-university",
        data: [
          { label: "Banco", value: binInfo.bank?.name || "N/A" },
          { label: "URL", value: binInfo.bank?.url || "N/A" },
          { label: "Teléfono", value: binInfo.bank?.phone || "N/A" },
        ],
      },
      {
        title: "Información Geográfica",
        icon: "fa-globe",
        data: [
          { label: "País", value: binInfo.country?.name || "N/A" },
          { label: "Código", value: binInfo.country?.alpha2 || "N/A" },
          { label: "Moneda", value: binInfo.country?.currency || "N/A" },
          { label: "Emoji", value: binInfo.country?.emoji || "N/A" },
        ],
      },
    ];

    sections.forEach((section) => {
      const sectionDiv = document.createElement("div");
      sectionDiv.className = "bin-info-section";

      let sectionHTML = `
        <div class="section-header">
          <i class="fas ${section.icon}"></i>
          <h4>${section.title}</h4>
        </div>
        <div class="section-content">
      `;

      section.data.forEach((item) => {
        sectionHTML += `
          <div class="info-row">
            <span class="info-label">${item.label}:</span>
            <span class="info-value">${this.utils.sanitizeHTML(
              item.value
            )}</span>
          </div>
        `;
      });

      sectionHTML += `</div>`;
      sectionDiv.innerHTML = sectionHTML;
      binInfoDiv.appendChild(sectionDiv);
    });

    // Add prepaid/debit info if available
    if (binInfo.prepaid !== undefined || binInfo.debit !== undefined) {
      const additionalDiv = document.createElement("div");
      additionalDiv.className = "bin-info-section";
      additionalDiv.innerHTML = `
        <div class="section-header">
          <i class="fas fa-tags"></i>
          <h4>Información Adicional</h4>
        </div>
        <div class="section-content">
          ${
            binInfo.prepaid !== undefined
              ? `
            <div class="info-row">
              <span class="info-label">Prepago:</span>
              <span class="info-value ${
                binInfo.prepaid ? "text-success" : "text-danger"
              }">
                ${binInfo.prepaid ? "Sí" : "No"}
              </span>
            </div>
          `
              : ""
          }
          ${
            binInfo.debit !== undefined
              ? `
            <div class="info-row">
              <span class="info-label">Débito:</span>
              <span class="info-value ${
                binInfo.debit ? "text-success" : "text-danger"
              }">
                ${binInfo.debit ? "Sí" : "No"}
              </span>
            </div>
          `
              : ""
          }
        </div>
      `;
      binInfoDiv.appendChild(additionalDiv);
    }

    // Show results container
    resultsContainer.style.display = "block";
  }
}
