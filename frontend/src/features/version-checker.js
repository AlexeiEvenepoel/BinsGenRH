/**
 * Version Checker Feature
 * Handles version checking functionality
 */

import { UIManager } from "../core/ui-manager.js";
import { Utils } from "../utils/utils.js";

export class VersionChecker {
  constructor(apiBaseUrl) {
    this.apiBaseUrl = apiBaseUrl;
    this.uiManager = new UIManager();
    this.utils = new Utils();
    this.currentVersion = "3.0";
  }

  setupEventListeners() {
    // Check Version button
    const checkBtn = document.getElementById("check-version-btn");
    if (checkBtn) {
      checkBtn.addEventListener("click", () => this.checkVersion());
    }

    // Update current version display
    this.updateCurrentVersionDisplay();
  }

  updateCurrentVersionDisplay() {
    const currentVersionSpan = document.getElementById("current-version");
    if (currentVersionSpan) {
      currentVersionSpan.textContent = this.currentVersion;
    }
  }

  async checkVersion() {
    this.uiManager.showLoading("Buscando actualizaciones...");

    try {
      const response = await fetch(`${this.apiBaseUrl}/check-version`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error verificando versión");
      }

      if (data.success) {
        this.displayVersionInfo(data.data);

        if (data.data.hasUpdate) {
          this.uiManager.showSuccess("¡Nueva versión disponible!");
        } else {
          this.uiManager.showSuccess("Estás usando la versión más reciente");
        }
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

  displayVersionInfo(versionData) {
    const resultsContainer = document.getElementById("version-results");
    const messageDiv = document.getElementById("version-message");

    if (!resultsContainer || !messageDiv) return;

    // Clear previous results
    messageDiv.innerHTML = "";

    const hasUpdate = versionData.hasUpdate;
    const latestVersion = versionData.latestVersion;
    const currentVersion = versionData.currentVersion || this.currentVersion;

    if (hasUpdate) {
      messageDiv.innerHTML = `
        <div class="version-update-available">
          <div class="update-header">
            <i class="fas fa-exclamation-triangle"></i>
            <h3>¡Nueva Versión Disponible!</h3>
          </div>
          
          <div class="version-comparison">
            <div class="version-item current">
              <span class="version-label">Versión Actual:</span>
              <span class="version-number">${currentVersion}</span>
            </div>
            <div class="version-arrow">
              <i class="fas fa-arrow-right"></i>
            </div>
            <div class="version-item latest">
              <span class="version-label">Versión Disponible:</span>
              <span class="version-number">${latestVersion}</span>
            </div>
          </div>

          ${
            versionData.changelog
              ? `
            <div class="changelog">
              <h4><i class="fas fa-list"></i> Novedades:</h4>
              <div class="changelog-content">
                ${versionData.changelog
                  .split("\n")
                  .map((line) =>
                    line.trim()
                      ? `<p>• ${this.utils.sanitizeHTML(line.trim())}</p>`
                      : ""
                  )
                  .join("")}
              </div>
            </div>
          `
              : ""
          }

          <div class="update-actions">
            <button class="btn btn-primary" onclick="window.open('${
              versionData.downloadUrl || "#"
            }', '_blank')">
              <i class="fas fa-download"></i>
              Descargar Actualización
            </button>
            <button class="btn btn-secondary" onclick="window.open('${
              versionData.releaseUrl || "#"
            }', '_blank')">
              <i class="fas fa-info-circle"></i>
              Ver Detalles
            </button>
          </div>

          <div class="update-info">
            <p><strong>Fecha de Lanzamiento:</strong> ${
              versionData.releaseDate || "No disponible"
            }</p>
            <p><strong>Tamaño:</strong> ${
              versionData.fileSize || "No disponible"
            }</p>
          </div>
        </div>
      `;
    } else {
      messageDiv.innerHTML = `
        <div class="version-up-to-date">
          <div class="update-header">
            <i class="fas fa-check-circle"></i>
            <h3>¡Estás Actualizado!</h3>
          </div>
          
          <div class="current-version-info">
            <p>Estás usando la versión más reciente del BINs Generator RH.</p>
            <div class="version-badge">
              <span class="version-label">Versión Actual:</span>
              <span class="version-number">${currentVersion}</span>
            </div>
          </div>

          <div class="developer-info">
            <h4><i class="fas fa-user-cog"></i> Información del Desarrollador</h4>
            <div class="dev-details">
              <p><strong>Desarrollado por:</strong> @RealHackRH_593</p>
              <p><strong>Telegram:</strong> @MundoNetRH</p>
              <p><strong>PayPal:</strong> paypal.me/edwinyd</p>
            </div>
          </div>

          <div class="support-actions">
            <button class="btn btn-secondary" onclick="window.open('https://t.me/MundoNetRH', '_blank')">
              <i class="fab fa-telegram"></i>
              Contactar Soporte
            </button>
            <button class="btn btn-secondary" onclick="window.open('https://paypal.me/edwinyd', '_blank')">
              <i class="fab fa-paypal"></i>
              Apoyar Desarrollo
            </button>
          </div>
        </div>
      `;
    }

    // Add last check info
    const lastCheckDiv = document.createElement("div");
    lastCheckDiv.className = "last-check-info";
    lastCheckDiv.innerHTML = `
      <p class="last-check-text">
        <i class="fas fa-clock"></i>
        Última verificación: ${new Date().toLocaleString("es-ES")}
      </p>
    `;
    messageDiv.appendChild(lastCheckDiv);

    // Show results container
    resultsContainer.style.display = "block";
  }

  // Method to manually set version (for testing)
  setCurrentVersion(version) {
    this.currentVersion = version;
    this.updateCurrentVersionDisplay();
  }

  // Method to get current version
  getCurrentVersion() {
    return this.currentVersion;
  }
}
