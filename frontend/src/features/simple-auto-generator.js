/**
 * Simple Auto Generator Feature
 * Handles simple auto generation functionality
 */

import { UIManager } from "../core/ui-manager.js";
import { Utils } from "../utils/utils.js";

export class SimpleAutoGenerator {
  constructor(apiBaseUrl) {
    this.apiBaseUrl = apiBaseUrl;
    this.uiManager = new UIManager();
    this.utils = new Utils();

    // Simple auto generator state
    this.simpleAutoRunning = false;
    this.simpleCards = [];
    this.simpleStats = { total: 0, live: 0, died: 0, unknown: 0 };
  }

  setupEventListeners() {
    // Note: UI elements are commented out in the main app
    // These would be enabled when UI is implemented
    console.log("Simple Auto Generator event listeners would be set up here");
  }

  async startSimpleAutoGeneration() {
    console.log("Starting simple auto generation");

    // Initialize simple generator state
    this.simpleAutoRunning = true;
    this.simpleCards = [];
    this.simpleStats = { total: 0, live: 0, died: 0, unknown: 0 };

    // Update UI controls
    this.updateSimpleControls(true);

    // Start the generation loop
    this.simpleGenerationLoop();

    this.uiManager.showSuccess("Generación automática simple iniciada");
  }

  async stopSimpleAutoGeneration() {
    console.log("Stopping simple auto generation");

    this.simpleAutoRunning = false;
    this.updateSimpleControls(false);

    this.uiManager.showSuccess("Generación automática simple detenida");
  }

  async simpleGenerationLoop() {
    while (this.simpleAutoRunning) {
      try {
        // Generate random BIN
        const bin = this.generateRandomBin();
        console.log(`Generated BIN: ${bin}`);

        // Check BIN with dnschecker API
        const binInfo = await this.checkBinWithAPI(bin);

        if (binInfo && binInfo.success) {
          // Generate cards for this BIN
          const cards = await this.generateCardsForBin(bin, binInfo.data);

          // Add cards to results
          cards.forEach((card) => {
            this.simpleCards.unshift(card); // Add to beginning
            this.simpleStats.total++;

            // Update status counts
            if (card.status === "Live") {
              this.simpleStats.live++;
            } else if (card.status === "Died") {
              this.simpleStats.died++;
            } else {
              this.simpleStats.unknown++;
            }
          });

          // Keep only last 1000 cards for performance
          if (this.simpleCards.length > 1000) {
            this.simpleCards = this.simpleCards.slice(-1000);
          }
        }
      } catch (error) {
        console.error("Error in simple generation loop:", error);
      }

      // Small delay to prevent overwhelming the API
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  generateRandomBin() {
    return this.utils.generateRandomBin();
  }

  async checkBinWithAPI(bin) {
    try {
      const response = await fetch(`${this.apiBaseUrl}/check-bin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bin }),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error checking BIN:", error);
      return null;
    }
  }

  async generateCardsForBin(bin, binInfo) {
    try {
      // Create a format based on the BIN
      const binFormat = bin + "xxxxxxxxxx"; // 6 digits + 10 x's = 16 total

      const response = await fetch(`${this.apiBaseUrl}/generate-cards`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          binFormat: binFormat,
          count: 5, // Generate 5 cards per BIN
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Add BIN info to each card
        return data.data.map((card) => ({
          ...card,
          binInfo: binInfo,
          status: this.getRandomStatus(), // Simulate status
        }));
      }

      return [];
    } catch (error) {
      console.error("Error generating cards for BIN:", error);
      return [];
    }
  }

  getRandomStatus() {
    const statuses = ["Live", "Died", "Unknown"];
    const weights = [0.1, 0.3, 0.6]; // 10% Live, 30% Died, 60% Unknown

    const random = Math.random();
    let cumulativeWeight = 0;

    for (let i = 0; i < statuses.length; i++) {
      cumulativeWeight += weights[i];
      if (random <= cumulativeWeight) {
        return statuses[i];
      }
    }

    return "Unknown";
  }

  updateSimpleControls(isRunning) {
    // This would update UI controls when implemented
    console.log(`Simple controls updated - Running: ${isRunning}`);
  }

  displayAutoStatus(statusData) {
    // This would update status display when implemented
    console.log("Simple status updated:", statusData);
  }

  updateCardFilters(statusData) {
    // This would update card filter buttons when implemented
    console.log("Simple card filters updated:", statusData);
  }

  setCardFilter(filter) {
    this.currentFilter = filter;
    this.updateCardsTable();
  }

  updateCardsTable(results) {
    // This would update the cards table when implemented
    console.log(
      "Simple cards table updated:",
      results?.length || this.simpleCards.length
    );
  }

  async clearAutoSession() {
    if (
      !confirm("¿Estás seguro de que quieres limpiar todos los resultados?")
    ) {
      return;
    }

    this.simpleCards = [];
    this.simpleStats = { total: 0, live: 0, died: 0, unknown: 0 };
    this.updateCardsTable([]);
    this.uiManager.showSuccess("Resultados limpiados exitosamente");
  }

  async exportAutoResults() {
    if (this.simpleCards.length === 0) {
      this.uiManager.showError("No hay resultados para exportar");
      return;
    }

    const cardsText = this.simpleCards
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
    a.download = `simple_auto_results_${new Date()
      .toISOString()
      .slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    this.uiManager.showSuccess(
      `${this.simpleCards.length} resultados exportados exitosamente`
    );
  }

  formatUptime(ms) {
    return this.utils.formatUptime(ms);
  }

  // Getters for current state
  getSimpleCards() {
    return this.simpleCards;
  }

  getSimpleStats() {
    return this.simpleStats;
  }

  isSimpleAutoRunning() {
    return this.simpleAutoRunning;
  }
}
