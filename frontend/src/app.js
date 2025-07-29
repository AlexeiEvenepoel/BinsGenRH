/**
 * Main Application Class
 * Manages the overall application state and initialization
 */

import { BinGenerator } from "./features/bin-generator.js";
import { CardGenerator } from "./features/card-generator.js";
import { BinChecker } from "./features/bin-checker.js";
import { Extrapolator } from "./features/extrapolator.js";
import { VersionChecker } from "./features/version-checker.js";
import { AutoGenerator } from "./features/auto-generator.js";
import { SimpleAutoGenerator } from "./features/simple-auto-generator.js";
import { UIManager } from "./core/ui-manager.js";
import { Utils } from "./utils/utils.js";

export class BinsGeneratorApp {
  constructor() {
    this.apiBaseUrl = "http://localhost:3000/api";

    // Initialize feature modules
    this.binGenerator = new BinGenerator(this.apiBaseUrl);
    this.cardGenerator = new CardGenerator(this.apiBaseUrl);
    this.binChecker = new BinChecker(this.apiBaseUrl);
    this.extrapolator = new Extrapolator(this.apiBaseUrl);
    this.versionChecker = new VersionChecker(this.apiBaseUrl);
    this.autoGenerator = new AutoGenerator(this.apiBaseUrl);
    this.simpleAutoGenerator = new SimpleAutoGenerator(this.apiBaseUrl);

    // Initialize UI manager
    this.uiManager = new UIManager();

    // Initialize utilities
    this.utils = new Utils();
  }

  async init() {
    console.log("Initializing BINs Generator RH...");

    // Setup UI components
    this.uiManager.setupTabNavigation();
    this.setupEventListeners();
    this.setupInputValidation();

    // Show welcome message
    this.showWelcomeMessage();

    console.log("Application initialized successfully!");
  }

  setupEventListeners() {
    // BIN Generator events
    this.binGenerator.setupEventListeners();

    // Card Generator events
    this.cardGenerator.setupEventListeners();

    // BIN Checker events
    this.binChecker.setupEventListeners();

    // Extrapolator events
    this.extrapolator.setupEventListeners();

    // Version Checker events
    this.versionChecker.setupEventListeners();

    // Auto Generator events
    this.autoGenerator.setupEventListeners();

    // Simple Auto Generator events (commented until UI is implemented)
    // this.simpleAutoGenerator.setupEventListeners();
  }

  setupInputValidation() {
    // Custom date checkbox
    const customDateCheck = document.getElementById("custom-date-check");
    const customDateInputs = document.getElementById("custom-date-inputs");

    if (customDateCheck && customDateInputs) {
      customDateCheck.addEventListener("change", (e) => {
        customDateInputs.style.display = e.target.checked ? "block" : "none";
      });
    }

    // BIN format validation
    const binFormatInput = document.getElementById("bin-format");
    if (binFormatInput) {
      binFormatInput.addEventListener("input", (e) => {
        const value = e.target.value.toUpperCase();
        e.target.value = value;

        if (value.length > 0) {
          const isValid = this.utils.validateBinFormat(value);
          e.target.style.borderColor = isValid ? "#28a745" : "#dc3545";
        } else {
          e.target.style.borderColor = "";
        }
      });
    }
  }

  showWelcomeMessage() {
    this.uiManager.showSuccess(
      "¡Bienvenido a BINs Generator RH! Selecciona una opción del menú."
    );
  }

  // Delegate UI methods to UIManager
  showLoading(message = "Procesando...") {
    this.uiManager.showLoading(message);
  }

  hideLoading() {
    this.uiManager.hideLoading();
  }

  showSuccess(message) {
    this.uiManager.showSuccess(message);
  }

  showError(message) {
    this.uiManager.showError(message);
  }
}

// Note: Initialization is handled by main.js
