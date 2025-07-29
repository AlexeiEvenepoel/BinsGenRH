/**
 * Auto Generator Feature
 * Handles advanced auto generation functionality
 */

import { UIManager } from "../core/ui-manager.js";
import { Utils } from "../utils/utils.js";

export class AutoGenerator {
  constructor(apiBaseUrl) {
    this.apiBaseUrl = apiBaseUrl;
    this.uiManager = new UIManager();
    this.utils = new Utils();

    // Auto generator state
    this.autoSession = null;
    this.statusUpdateInterval = null;
    this.currentFilter = "all";
  }

  setupEventListeners() {
    // Note: This feature requires UI implementation
    // The buttons and interface are not currently in the HTML
    console.log("Auto Generator event listeners would be set up here");
  }

  async startAutoGeneration() {
    console.log("startAutoGeneration called");

    const config = this.getAutoConfig();
    console.log("Config:", config);

    this.uiManager.showLoading("Iniciando generación automática...");

    try {
      const response = await fetch(`${this.apiBaseUrl}/auto-generator/start`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ config }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error iniciando generación automática");
      }

      this.autoSession = data.data;
      this.updateAutoControls("running");
      this.showAutoSections();
      this.startStatusUpdates();

      this.uiManager.showSuccess("Generación automática iniciada");
    } catch (error) {
      this.uiManager.showError(error.message);
    } finally {
      this.uiManager.hideLoading();
    }
  }

  async pauseAutoGeneration() {
    if (!this.autoSession) return;

    try {
      const response = await fetch(
        `${this.apiBaseUrl}/auto-generator/pause/${this.autoSession.sessionId}`,
        {
          method: "POST",
        }
      );

      const data = await response.json();

      if (data.success) {
        this.updateAutoControls("paused");
        this.uiManager.showSuccess("Generación automática pausada");
      } else {
        throw new Error(data.error || "Error pausando generación");
      }
    } catch (error) {
      this.uiManager.showError(error.message);
    }
  }

  async resumeAutoGeneration() {
    if (!this.autoSession) return;

    try {
      const response = await fetch(
        `${this.apiBaseUrl}/auto-generator/resume/${this.autoSession.sessionId}`,
        {
          method: "POST",
        }
      );

      const data = await response.json();

      if (data.success) {
        this.updateAutoControls("running");
        this.uiManager.showSuccess("Generación automática reanudada");
      } else {
        throw new Error(data.error || "Error reanudando generación");
      }
    } catch (error) {
      this.uiManager.showError(error.message);
    }
  }

  async stopAutoGeneration() {
    if (!this.autoSession) return;

    try {
      const response = await fetch(
        `${this.apiBaseUrl}/auto-generator/stop/${this.autoSession.sessionId}`,
        {
          method: "POST",
        }
      );

      const data = await response.json();

      if (data.success) {
        this.stopStatusUpdates();
        this.updateAutoControls("stopped");
        this.autoSession = null;
        this.uiManager.showSuccess("Generación automática detenida");
      } else {
        throw new Error(data.error || "Error deteniendo generación");
      }
    } catch (error) {
      this.uiManager.showError(error.message);
    }
  }

  getAutoConfig() {
    // This would read from UI elements when implemented
    return {
      binFormat: "4xxxxxxxxxxxxxxx",
      cardsPerBatch: 25,
      batchInterval: 5000,
      maxCards: 1000,
      enableChecker: true,
      checkerDelay: 1000,
    };
  }

  updateAutoControls(status) {
    // This would update UI controls when implemented
    console.log(`Auto controls updated to: ${status}`);
  }

  showAutoSections() {
    // This would show auto generator sections when implemented
    console.log("Auto sections shown");
  }

  startStatusUpdates() {
    if (this.statusUpdateInterval) {
      clearInterval(this.statusUpdateInterval);
    }

    this.statusUpdateInterval = setInterval(() => {
      this.updateAutoStatus();
    }, 2000);
  }

  stopStatusUpdates() {
    if (this.statusUpdateInterval) {
      clearInterval(this.statusUpdateInterval);
      this.statusUpdateInterval = null;
    }
  }

  async updateAutoStatus() {
    if (!this.autoSession) return;

    try {
      const response = await fetch(
        `${this.apiBaseUrl}/auto-generator/status/${this.autoSession.sessionId}`
      );

      const data = await response.json();

      if (data.success) {
        this.displayAutoStatus(data.data);
        this.updateCardFilters(data.data);
      }
    } catch (error) {
      console.error("Error updating auto status:", error);
    }
  }

  displayAutoStatus(statusData) {
    // This would update status display when implemented
    console.log("Status updated:", statusData);
  }

  updateCardFilters(statusData) {
    // This would update card filter buttons when implemented
    console.log("Card filters updated:", statusData);
  }

  setCardFilter(filter) {
    this.currentFilter = filter;
    this.updateCardsTable();
  }

  async updateCardsTable() {
    if (!this.autoSession) return;

    try {
      const response = await fetch(
        `${this.apiBaseUrl}/auto-generator/cards/${this.autoSession.sessionId}/${this.currentFilter}?limit=10000`
      );

      const data = await response.json();

      if (data.success) {
        this.updateCardsTable(data.data);
      }
    } catch (error) {
      console.error("Error updating cards table:", error);
    }
  }

  async clearAutoSession() {
    if (!this.autoSession) return;

    if (
      !confirm(
        "¿Estás seguro de que quieres limpiar todos los resultados? Esta acción no se puede deshacer."
      )
    ) {
      return;
    }

    try {
      const response = await fetch(
        `${this.apiBaseUrl}/auto-generator/clear/${this.autoSession.sessionId}`,
        {
          method: "POST",
        }
      );

      const data = await response.json();

      if (data.success) {
        this.updateCardsTable([]);
        this.uiManager.showSuccess("Resultados limpiados exitosamente");
      } else {
        throw new Error(data.error || "Error limpiando resultados");
      }
    } catch (error) {
      this.uiManager.showError(error.message);
    }
  }

  async exportAutoResults() {
    if (!this.autoSession) return;

    try {
      const response = await fetch(
        `${this.apiBaseUrl}/auto-generator/export/${this.autoSession.sessionId}`
      );

      const data = await response.json();

      if (data.success && data.data.length > 0) {
        const cardsText = data.data
          .map(
            (card) =>
              `${card.number}|${card.month.toString().padStart(2, "0")}|${
                card.year
              }|${card.cvv}|${card.status}`
          )
          .join("\n");

        // Create and download file
        const blob = new Blob([cardsText], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `auto_results_${new Date()
          .toISOString()
          .slice(0, 10)}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        this.uiManager.showSuccess(
          `${data.data.length} resultados exportados exitosamente`
        );
      } else {
        this.uiManager.showError("No hay resultados para exportar");
      }
    } catch (error) {
      this.uiManager.showError("Error exportando resultados");
    }
  }

  formatUptime(ms) {
    return this.utils.formatUptime(ms);
  }
}
