/**
 * Main Entry Point
 * Imports and initializes the main application
 */

import { BinsGeneratorApp } from "./app.js";

// Initialize the application when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("Initializing BINs Generator RH - Modular Version");

  // Create global app instance
  window.binsApp = new BinsGeneratorApp();

  // Initialize the application
  window.binsApp.init().catch((error) => {
    console.error("Failed to initialize application:", error);
  });
});

// Export for potential external use
export { BinsGeneratorApp };
