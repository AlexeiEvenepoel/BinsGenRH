/**
 * Frontend JavaScript para BINs Generator RH
 * Basado en la funcionalidad de mundobins_clean.py
 */

class BinsGeneratorApp {
  constructor() {
    console.log("BinsGeneratorApp constructor called");
    this.apiBaseUrl = "http://localhost:3000/api";
    this.currentTab = "bin-generator";

    // Auto Generator properties
    this.autoSession = null;
    this.autoStatusInterval = null;
    this.currentFilter = "all";
    this.currentPage = 1;
    this.cardsPerPage = 50;
    this.filteredCards = [];

    this.init();
  }

  init() {
    console.log("Initializing app");
    this.setupEventListeners();
    this.setupTabNavigation();
    this.showWelcomeMessage();
  }

  setupEventListeners() {
    console.log("Setting up event listeners");

    // Check if we're in the right tab
    console.log("Current tab:", this.currentTab);

    // BIN Generator
    document
      .getElementById("generate-bins-btn")
      .addEventListener("click", () => this.generateBins());
    document
      .getElementById("copy-bins-btn")
      ?.addEventListener("click", () => this.copyBins());

    // Card Generator
    document
      .getElementById("generate-cards-btn")
      .addEventListener("click", () => this.generateCards());
    document
      .getElementById("copy-cards-btn")
      ?.addEventListener("click", () => this.copyCards());
    document
      .getElementById("export-cards-btn")
      ?.addEventListener("click", () => this.exportCards());

    // Custom date toggle
    document
      .getElementById("custom-date-check")
      .addEventListener("change", (e) => {
        const inputs = document.getElementById("custom-date-inputs");
        inputs.style.display = e.target.checked ? "flex" : "none";
      });

    // BIN Checker
    document
      .getElementById("check-bin-btn")
      .addEventListener("click", () => this.checkBin());

    // Extrapolator
    document
      .getElementById("extrapolate-btn")
      .addEventListener("click", () => this.extrapolateCards());

    // Version Check
    document
      .getElementById("check-version-btn")
      .addEventListener("click", () => this.checkVersion());

    // Auto Generator Simple - Commented out until UI is implemented
    /*
    const simpleStartBtn = document.getElementById("simple-start-btn");
    if (simpleStartBtn) {
      simpleStartBtn.addEventListener("click", () => {
        console.log("Simple auto start button clicked");
        this.startSimpleAutoGeneration();
      });
    } else {
      console.error("Simple auto start button not found");
    }

    const simpleStopBtn = document.getElementById("simple-stop-btn");
    if (simpleStopBtn) {
      simpleStopBtn.addEventListener("click", () => {
        console.log("Simple auto stop button clicked");
        this.stopSimpleAutoGeneration();
      });
    }
    */

    const simpleExportBtn = document.getElementById("simple-export-btn");
    if (simpleExportBtn) {
      simpleExportBtn.addEventListener("click", () => {
        this.exportSimpleResults();
      });
    }

    // Filter tabs for simple generator
    document.querySelectorAll(".filter-tab").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.setSimpleFilter(e.target.dataset.filter);
      });
    });

    // Filter buttons
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", (e) =>
        this.setCardFilter(e.target.dataset.filter)
      );
    });

    // Input validation
    this.setupInputValidation();
  }

  setupTabNavigation() {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const targetTab = button.getAttribute("data-tab");

        // Remove active class from all tabs and contents
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        tabContents.forEach((content) => content.classList.remove("active"));

        // Add active class to clicked tab and corresponding content
        button.classList.add("active");
        document.getElementById(targetTab).classList.add("active");

        this.currentTab = targetTab;
      });
    });
  }

  setupInputValidation() {
    // BIN format validation
    const binFormatInput = document.getElementById("bin-format");
    binFormatInput.addEventListener("input", (e) => {
      const value = e.target.value.toLowerCase();
      const isValid = /^[0-9x]*$/.test(value) && value.length <= 16;

      if (isValid) {
        e.target.classList.remove("error");
        e.target.classList.add("success");
      } else {
        e.target.classList.remove("success");
        e.target.classList.add("error");
      }
    });

    // Numeric inputs validation
    const numericInputs = [
      "bin-count",
      "card-count",
      "custom-month",
      "custom-year",
    ];
    numericInputs.forEach((id) => {
      const input = document.getElementById(id);
      if (input) {
        input.addEventListener("input", (e) => {
          const value = parseInt(e.target.value);
          const min = parseInt(e.target.min);
          const max = parseInt(e.target.max);

          if (value >= min && value <= max) {
            e.target.classList.remove("error");
            e.target.classList.add("success");
          } else {
            e.target.classList.remove("success");
            e.target.classList.add("error");
          }
        });
      }
    });
  }

  showWelcomeMessage() {
    console.log(
      "%c🚀 BINs Generator RH - JavaScript Edition",
      "color: #00ff00; font-size: 16px; font-weight: bold;"
    );
    console.log("%c👨‍💻 BY: @RealHackRH_593", "color: #ffff00; font-size: 14px;");
    console.log(
      "%c📱 Telegram: @MundoNetRH",
      "color: #00ffff; font-size: 14px;"
    );
  }

  showLoading(message = "Procesando...") {
    const overlay = document.getElementById("loading-overlay");
    const loadingText = document.getElementById("loading-text");
    loadingText.textContent = message;
    overlay.style.display = "flex";
  }

  hideLoading() {
    document.getElementById("loading-overlay").style.display = "none";
  }

  showError(message) {
    alert(`❌ Error: ${message}`);
  }

  showSuccess(message) {
    console.log(`✅ ${message}`);
  }

  // BIN Generator Functions
  async generateBins() {
    const type = document.getElementById("card-type").value;
    const count = parseInt(document.getElementById("bin-count").value);

    if (!type || !count || count < 1 || count > 100) {
      this.showError(
        "Por favor, seleccione un tipo válido y cantidad entre 1-100"
      );
      return;
    }

    this.showLoading("Generando BINs...");

    try {
      const response = await fetch(`${this.apiBaseUrl}/generate-bins`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type, count }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error generando BINs");
      }

      this.displayBins(data.data);
      this.showSuccess(`${data.data.bins.length} BINs generados exitosamente`);
    } catch (error) {
      this.showError(error.message);
    } finally {
      this.hideLoading();
    }
  }

  displayBins(data) {
    const resultsContainer = document.getElementById("bins-results");
    const binsList = document.getElementById("bins-list");

    binsList.innerHTML = "";

    data.bins.forEach((bin, index) => {
      const binItem = document.createElement("div");
      binItem.className = "bin-item";
      binItem.innerHTML = `
                <div>
                    <span class="bin-number">${bin}</span>
                    <span class="bin-type">${data.type}</span>
                </div>
                <button onclick="navigator.clipboard.writeText('${bin}')" class="btn btn-secondary" style="padding: 0.25rem 0.5rem; font-size: 0.8rem;">
                    <i class="fas fa-copy"></i>
                </button>
            `;
      binsList.appendChild(binItem);
    });

    resultsContainer.style.display = "block";
  }

  copyBins() {
    const binItems = document.querySelectorAll(".bin-number");
    const bins = Array.from(binItems)
      .map((item) => item.textContent)
      .join("\n");

    navigator.clipboard.writeText(bins).then(() => {
      this.showSuccess("BINs copiados al portapapeles");
    });
  }

  // Card Generator Functions
  async generateCards() {
    const binFormat = document.getElementById("bin-format").value.trim();
    const count = parseInt(document.getElementById("card-count").value);

    // Custom date
    let customDate = null;
    if (document.getElementById("custom-date-check").checked) {
      const month = document
        .getElementById("custom-month")
        .value.padStart(2, "0");
      const year = document.getElementById("custom-year").value;
      if (month && year) {
        customDate = { month, year: parseInt(year) };
      }
    }

    if (!binFormat || !count || count < 1 || count > 50) {
      this.showError(
        "Por favor, ingrese un formato BIN válido y cantidad entre 1-50"
      );
      return;
    }

    // Simulate search like in mundobins_clean.py
    this.showSearchSimulation();

    try {
      const response = await fetch(`${this.apiBaseUrl}/generate-cards`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ binFormat, count, customDate }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error generando tarjetas");
      }

      setTimeout(() => {
        this.displayCards(data.data);
        this.showSuccess(
          `${data.data.cards.length} tarjetas generadas exitosamente`
        );
      }, 3000); // Simulate processing time
    } catch (error) {
      this.showError(error.message);
      this.hideSearchSimulation();
    }
  }

  showSearchSimulation() {
    const simulation = document.getElementById("search-simulation");
    const progressFill = document.querySelector(".progress-fill");

    simulation.style.display = "block";
    progressFill.style.width = "0%";

    // Animate progress bar
    setTimeout(() => {
      progressFill.style.width = "100%";
    }, 100);
  }

  hideSearchSimulation() {
    document.getElementById("search-simulation").style.display = "none";
  }

  displayCards(data) {
    this.hideSearchSimulation();

    const resultsContainer = document.getElementById("cards-results");
    const tbody = document.getElementById("cards-tbody");
    const statsDiv = document.getElementById("cards-stats");

    // Clear previous results
    tbody.innerHTML = "";

    // Display stats
    statsDiv.innerHTML = `
            <div class="stats">
                <span class="stat-item stat-live">Live: ${data.stats.live}</span>
                <span class="stat-item stat-died">Died: ${data.stats.died}</span>
                <span class="stat-item stat-unknown">Unknown: ${data.stats.unknown}</span>
            </div>
        `;

    // Display cards
    data.cards.forEach((card) => {
      const row = document.createElement("tr");
      const statusClass = card.status.toLowerCase().replace(" ", "-");

      row.innerHTML = `
                <td class="card-number">${card.number}</td>
                <td>${card.cvv}</td>
                <td>${card.month}</td>
                <td>${card.year}</td>
                <td class="status-${statusClass.split("-")[0]}">> ${
        card.status
      }</td>
            `;
      tbody.appendChild(row);
    });

    resultsContainer.style.display = "block";
  }

  copyCards() {
    const rows = document.querySelectorAll("#cards-tbody tr");
    const cards = Array.from(rows)
      .map((row) => {
        const cells = row.querySelectorAll("td");
        return `${cells[0].textContent} | ${cells[1].textContent} | ${cells[2].textContent} | ${cells[3].textContent} | ${cells[4].textContent}`;
      })
      .join("\n");

    const header = "|| CREDIT CARD  || CVV ||MES|| AÑO ||| CHECKER |||\n";
    const fullText = header + cards;

    navigator.clipboard.writeText(fullText).then(() => {
      this.showSuccess("Tarjetas copiadas al portapapeles");
    });
  }

  exportCards() {
    const rows = document.querySelectorAll("#cards-tbody tr");
    const cards = Array.from(rows)
      .map((row) => {
        const cells = row.querySelectorAll("td");
        return `${cells[0].textContent} | ${cells[1].textContent} | ${cells[2].textContent} | ${cells[3].textContent} | ${cells[4].textContent}`;
      })
      .join("\n");

    const header = "|| CREDIT CARD  || CVV ||MES|| AÑO ||| CHECKER |||\n";
    const fullText = header + cards;

    const blob = new Blob([fullText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `cards_${new Date().toISOString().split("T")[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    this.showSuccess("Tarjetas exportadas a archivo TXT");
  }

  // BIN Checker Functions
  async checkBin() {
    const bin = document.getElementById("bin-to-check").value.trim();

    if (!bin || bin.length < 6) {
      this.showError("Por favor, ingrese al menos 6 dígitos del BIN");
      return;
    }

    this.showLoading("Verificando BIN...");

    try {
      const response = await fetch(`${this.apiBaseUrl}/check-bin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bin }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error verificando BIN");
      }

      this.displayBinInfo(data.data);
      this.showSuccess("BIN verificado exitosamente");
    } catch (error) {
      this.showError(error.message);
    } finally {
      this.hideLoading();
    }
  }

  displayBinInfo(binInfo) {
    const resultsContainer = document.getElementById("bin-info-results");
    const binInfoDiv = document.getElementById("bin-info");

    // Crear elementos de información con datos adicionales de dnschecker.org
    const infoItems = [
      { label: "NUMERO DE LA TARGETA", value: `${binInfo.bin}xxxxxxxxxx` },
      { label: "MARCA", value: binInfo.scheme },
      { label: "TIPO", value: binInfo.type },
      { label: "CATEGORIA", value: binInfo.category || binInfo.type },
      { label: "PREPAGO ??", value: binInfo.prepaid || "N/A" },
      { label: "PAIS", value: binInfo.country },
      { label: "CODIGO PAIS", value: binInfo.country_iso || "N/A" },
      { label: "BANCO", value: binInfo.bank },
      { label: "SITIO WEB", value: binInfo.website || "N/A" },
      { label: "TELEFONO", value: binInfo.phone || "N/A" },
      { label: "LONGITUD", value: `${binInfo.length} dígitos` },
      { label: "LUHN VALIDO", value: binInfo.luhn_valid ? "SÍ" : "NO" },
      { label: "IIN", value: binInfo.iin || binInfo.bin },
      { label: "MII", value: binInfo.mii || "Banking And Financial" },
      { label: "FUENTE", value: binInfo.source || "unknown" },
    ];

    let htmlContent = "";
    infoItems.forEach((item) => {
      // Determinar clase de estado basada en el valor
      let statusClass = "";
      if (item.label === "LUHN VALIDO") {
        statusClass = item.value === "SÍ" ? "status-valid" : "status-invalid";
      } else if (item.label === "FUENTE") {
        statusClass =
          item.value === "dnschecker.org" ? "status-valid" : "status-unknown";
      } else if (item.label === "MARCA" || item.label === "BANCO") {
        statusClass = "status-valid";
      } else if (item.label === "PREPAGO ??" && item.value === "YES") {
        statusClass = "status-invalid";
      }

      htmlContent += `
        <div class="bin-info-item">
          <span class="bin-info-label">[✓] ${item.label}:</span>
          <span class="bin-info-value ${statusClass}">${item.value}</span>
        </div>
      `;
    });

    // Agregar información adicional si viene de dnschecker.org
    if (binInfo.source === "dnschecker.org" && binInfo.raw_data) {
      htmlContent += `
        <div class="bin-info-separator">
          <h4>Información Técnica Adicional</h4>
        </div>
        <div class="bin-info-item">
          <span class="bin-info-label">[✓] PAN:</span>
          <span class="bin-info-value">${binInfo.pan || "N/A"}</span>
        </div>
        <div class="bin-info-item">
          <span class="bin-info-label">[✓] CHECKSUM:</span>
          <span class="bin-info-value">${binInfo.checksum || "N/A"}</span>
        </div>
        <div class="bin-info-item">
          <span class="bin-info-label">[✓] IIN VALIDO:</span>
          <span class="bin-info-value">${binInfo.iin_valid ? "SÍ" : "NO"}</span>
        </div>
      `;
    }

    binInfoDiv.innerHTML = htmlContent;
    resultsContainer.style.display = "block";
  }

  // Extrapolator Functions
  async extrapolateCards() {
    const card1 = document.getElementById("card1").value.trim();
    const card2 = document.getElementById("card2").value.trim();

    if (!card1 || !card2) {
      this.showError("Por favor, ingrese ambas tarjetas");
      return;
    }

    if (card1.length < 16 || card2.length < 16) {
      this.showError("Las tarjetas deben tener al menos 16 dígitos");
      return;
    }

    this.showLoading("Extrapolando tarjetas...");

    try {
      const response = await fetch(`${this.apiBaseUrl}/extrapolate-cards`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ card1, card2 }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error en extrapolación");
      }

      this.displayExtrapolation(data.data);
      this.showSuccess("Extrapolación completada exitosamente");
    } catch (error) {
      this.showError(error.message);
    } finally {
      this.hideLoading();
    }
  }

  displayExtrapolation(data) {
    const resultsContainer = document.getElementById("extrapolation-results");
    const contentDiv = document.getElementById("extrapolation-content");

    contentDiv.innerHTML = "";

    // Basic extrapolation
    const basicSection = this.createExtrapolationSection(
      data.extrapolations.basic
    );
    contentDiv.appendChild(basicSection);

    // Medium extrapolation
    const mediumSection = this.createExtrapolationSection(
      data.extrapolations.medium
    );
    contentDiv.appendChild(mediumSection);

    // Advanced extrapolation
    const advancedSection = this.createExtrapolationSection(
      data.extrapolations.advanced
    );
    contentDiv.appendChild(advancedSection);

    resultsContainer.style.display = "block";
  }

  createExtrapolationSection(extrapolation) {
    const section = document.createElement("div");
    section.className = "extrapolation-section";

    let resultsHTML = "";
    extrapolation.results.forEach((result) => {
      resultsHTML += `
                <div class="extrapolation-result">
                    <div class="extrapolation-pattern">${result.description}: ${
        result.pattern
      }</div>
                    ${
                      result.note
                        ? `<div class="extrapolation-note">${result.note}</div>`
                        : ""
                    }
                </div>
            `;
    });

    section.innerHTML = `
            <div class="extrapolation-title">→ ${extrapolation.type} ←</div>
            ${resultsHTML}
        `;

    return section;
  }

  // Version Check Functions (Opción 9 del script original)
  async checkVersion() {
    this.showLoading("Buscando actualizaciones...");

    try {
      const response = await fetch(`${this.apiBaseUrl}/check-version`);
      const data = await response.json();

      if (data.success) {
        this.displayVersionInfo(data.data);
        this.showSuccess("Verificación de versión completada");
      } else {
        this.showError(data.error || "Error verificando versión");
      }
    } catch (error) {
      this.showError("Error conectando al servidor de actualizaciones");
    } finally {
      this.hideLoading();
    }
  }

  displayVersionInfo(versionData) {
    const resultsContainer = document.getElementById("version-results");
    const messageDiv = document.getElementById("version-message");

    let messageClass = versionData.has_update
      ? "version-update-available"
      : "version-up-to-date";
    let iconClass = versionData.has_update
      ? "fas fa-exclamation-triangle"
      : "fas fa-check-circle";

    messageDiv.innerHTML = `
      <div class="version-status ${messageClass}">
        <i class="${iconClass}"></i>
        <div class="version-details">
          <h4>${
            versionData.has_update
              ? "Nueva Versión Disponible"
              : "Versión Actualizada"
          }</h4>
          <p><strong>Versión Actual:</strong> ${versionData.current_version}</p>
          <p><strong>Última Versión:</strong> ${versionData.latest_version}</p>
          <div class="version-message-text">
            ${versionData.message.replace(/\\n/g, "<br>")}
          </div>
          <p class="version-note">
            <strong>Recuerda:</strong> Agradecer y colaborar con una donación PayPal<br>
            <strong>PayPal:</strong> paypal.me/edwinyd
          </p>
        </div>
      </div>
    `;

    resultsContainer.style.display = "block";
  }

  // Simple Auto Generator Functions
  async startSimpleAutoGeneration() {
    console.log("Starting simple auto generation");

    // Initialize simple generator state
    this.simpleAutoRunning = true;
    this.simpleCards = [];
    this.simpleStats = { total: 0, live: 0, died: 0, unknown: 0 };
    this.currentSimpleFilter = "all";

    // Update UI
    this.updateSimpleControls(true);
    this.showSimpleSections();

    // Start the infinite generation loop
    this.simpleGenerationLoop();

    this.showSuccess("Generación automática simple iniciada");
  }

  async stopSimpleAutoGeneration() {
    console.log("Stopping simple auto generation");

    this.simpleAutoRunning = false;
    this.updateSimpleControls(false);

    this.showSuccess("Generación automática simple detenida");
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

  async startAutoGeneration() {
    console.log("startAutoGeneration called");

    const config = this.getAutoConfig();
    console.log("Config:", config);

    this.showLoading("Iniciando generación automática...");

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

      this.showSuccess("Generación automática iniciada");
    } catch (error) {
      this.showError(error.message);
    } finally {
      this.hideLoading();
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
        this.showSuccess("Generación pausada");
      }
    } catch (error) {
      this.showError("Error pausando generación");
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
        this.showSuccess("Generación reanudada");
      }
    } catch (error) {
      this.showError("Error reanudando generación");
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
        this.updateAutoControls("stopped");
        this.stopStatusUpdates();
        this.showSuccess("Generación detenida");
      }
    } catch (error) {
      this.showError("Error deteniendo generación");
    }
  }

  getAutoConfig() {
    const cardTypes = [];
    if (document.getElementById("auto-visa").checked) cardTypes.push("visa");
    if (document.getElementById("auto-mastercard").checked)
      cardTypes.push("mastercard");
    if (document.getElementById("auto-amex").checked) cardTypes.push("amex");
    if (document.getElementById("auto-discover").checked)
      cardTypes.push("discover");

    const filterCountries = document
      .getElementById("auto-filter-countries")
      .value.split(",")
      .map((c) => c.trim())
      .filter((c) => c.length > 0);

    return {
      cardTypes,
      binsPerType: parseInt(
        document.getElementById("auto-bins-per-type").value
      ),
      cardsPerBin: parseInt(
        document.getElementById("auto-cards-per-bin").value
      ),
      intervalMs: parseInt(document.getElementById("auto-interval").value),
      maxCards: parseInt(document.getElementById("auto-max-cards").value),
      filterCountries,
    };
  }

  updateAutoControls(status) {
    const startBtn = document.getElementById("auto-start-btn");
    const pauseBtn = document.getElementById("auto-pause-btn");
    const resumeBtn = document.getElementById("auto-resume-btn");
    const stopBtn = document.getElementById("auto-stop-btn");
    const statusText = document.getElementById("auto-status-text");

    // Reset all buttons
    [startBtn, pauseBtn, resumeBtn, stopBtn].forEach((btn) => {
      btn.disabled = true;
      btn.classList.remove("btn-primary", "btn-secondary", "btn-danger");
    });

    switch (status) {
      case "running":
        pauseBtn.disabled = false;
        stopBtn.disabled = false;
        pauseBtn.classList.add("btn-secondary");
        stopBtn.classList.add("btn-danger");
        statusText.textContent = "Ejecutándose";
        statusText.className = "status-value status-running";
        document.getElementById("auto-config").classList.add("running");
        break;

      case "paused":
        resumeBtn.disabled = false;
        stopBtn.disabled = false;
        resumeBtn.classList.add("btn-primary");
        stopBtn.classList.add("btn-danger");
        statusText.textContent = "Pausado";
        statusText.className = "status-value status-paused";
        document.getElementById("auto-config").classList.remove("running");
        break;

      case "stopped":
      default:
        startBtn.disabled = false;
        startBtn.classList.add("btn-primary");
        statusText.textContent = "Detenido";
        statusText.className = "status-value status-stopped";
        document.getElementById("auto-config").classList.remove("running");
        break;
    }
  }

  showAutoSections() {
    document.getElementById("auto-status").style.display = "block";
    document.getElementById("auto-filters").style.display = "block";
    document.getElementById("auto-results").style.display = "block";
  }

  startStatusUpdates() {
    if (this.autoStatusInterval) {
      clearInterval(this.autoStatusInterval);
    }

    this.autoStatusInterval = setInterval(() => {
      this.updateAutoStatus();
    }, 2000);
  }

  stopStatusUpdates() {
    if (this.autoStatusInterval) {
      clearInterval(this.autoStatusInterval);
      this.autoStatusInterval = null;
    }
  }

  async updateAutoStatus() {
    if (!this.autoSession) return;

    try {
      const response = await fetch(
        `${this.apiBaseUrl}/auto-generator/status/${this.autoSession.sessionId}`
      );
      const data = await response.json();

      if (data.success && data.data) {
        this.displayAutoStatus(data.data);
        this.updateCardFilters(data.data);
      }
    } catch (error) {
      console.error("Error actualizando estado:", error);
    }
  }

  displayAutoStatus(statusData) {
    // Update uptime
    const uptimeMs = statusData.uptime || 0;
    const uptime = this.formatUptime(uptimeMs);
    document.getElementById("auto-uptime").textContent = uptime;

    // Update stats
    document.getElementById("auto-total-generated").textContent =
      statusData.stats.generated || 0;
    document.getElementById("auto-bins-processed").textContent =
      statusData.stats.bins?.length || 0;
    document.getElementById("auto-live-count").textContent =
      statusData.stats.live || 0;
    document.getElementById("auto-died-count").textContent =
      statusData.stats.died || 0;
    document.getElementById("auto-unknown-count").textContent =
      statusData.stats.unknown || 0;

    // Update filter counts
    document.getElementById("filter-all-count").textContent =
      statusData.stats.generated || 0;
    document.getElementById("filter-live-count").textContent =
      statusData.stats.live || 0;
    document.getElementById("filter-died-count").textContent =
      statusData.stats.died || 0;
    document.getElementById("filter-unknown-count").textContent =
      statusData.stats.unknown || 0;

    // Update cards table if needed
    if (statusData.results) {
      this.updateCardsTable(statusData.results);
    }
  }

  updateCardFilters(statusData) {
    // Update country filter
    const countryFilter = document.getElementById("country-filter");
    const countries = Object.keys(statusData.stats.countries || {});

    // Clear existing options except first
    while (countryFilter.children.length > 1) {
      countryFilter.removeChild(countryFilter.lastChild);
    }

    countries.forEach((country) => {
      const option = document.createElement("option");
      option.value = country;
      option.textContent = `${country} (${statusData.stats.countries[country]})`;
      countryFilter.appendChild(option);
    });
  }

  updateCardsTable(results) {
    const tbody = document.getElementById("auto-cards-tbody");

    // Get cards based on current filter
    let cards = [];
    switch (this.currentFilter) {
      case "live":
        cards = results.live || [];
        break;
      case "died":
        cards = results.died || [];
        break;
      case "unknown":
        cards = results.unknown || [];
        break;
      default:
        cards = [
          ...(results.live || []),
          ...(results.died || []),
          ...(results.unknown || []),
        ];
    }

    // Clear table
    tbody.innerHTML = "";

    // Add cards to table
    cards.slice(0, this.cardsPerPage).forEach((card) => {
      const row = document.createElement("tr");
      const statusClass = card.status.toLowerCase().replace(" ", "-");

      row.innerHTML = `
        <td class="card-number">${card.number}</td>
        <td>${card.cvv}</td>
        <td>${card.month}/${card.year}</td>
        <td class="country-info">
          <span>${card.binInfo?.country || "N/A"}</span>
        </td>
        <td class="bank-info" title="${card.binInfo?.bank || "N/A"}">
          ${card.binInfo?.bank || "N/A"}
        </td>
        <td class="status-${statusClass.split("-")[0]}">${card.status}</td>
      `;
      tbody.appendChild(row);
    });
  }

  setCardFilter(filter) {
    this.currentFilter = filter;
    this.currentPage = 1;

    // Update active filter button
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.classList.remove("active");
    });
    document.querySelector(`[data-filter="${filter}"]`).classList.add("active");

    // Update table
    this.updateAutoStatus();
  }

  formatUptime(ms) {
    const seconds = Math.floor(ms / 1000);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }

  async exportAutoResults() {
    if (!this.autoSession) return;

    try {
      const response = await fetch(
        `${this.apiBaseUrl}/auto-generator/cards/${this.autoSession.sessionId}/${this.currentFilter}?limit=10000`
      );
      const data = await response.json();

      if (data.success && data.data.cards) {
        const cards = data.data.cards;
        let content = "CREDIT CARD|CVV|MES|AÑO|PAÍS|BANCO|ESTADO\n";

        cards.forEach((card) => {
          content += `${card.number}|${card.cvv}|${card.month}|${card.year}|${
            card.binInfo?.country || "N/A"
          }|${card.binInfo?.bank || "N/A"}|${card.status}\n`;
        });

        const blob = new Blob([content], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `auto_generated_cards_${this.currentFilter}_${
          new Date().toISOString().split("T")[0]
        }.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        this.showSuccess(`${cards.length} tarjetas exportadas`);
      }
    } catch (error) {
      this.showError("Error exportando resultados");
    }
  }

  async clearAutoSession() {
    if (!this.autoSession) return;

    if (
      confirm(
        "¿Estás seguro de que quieres limpiar la sesión? Se perderán todos los datos generados."
      )
    ) {
      try {
        const response = await fetch(
          `${this.apiBaseUrl}/auto-generator/clear/${this.autoSession.sessionId}`,
          {
            method: "DELETE",
          }
        );

        const data = await response.json();

        if (data.success) {
          this.autoSession = null;
          this.stopStatusUpdates();
          this.updateAutoControls("stopped");

          // Hide sections
          document.getElementById("auto-status").style.display = "none";
          document.getElementById("auto-filters").style.display = "none";
          document.getElementById("auto-results").style.display = "none";

          this.showSuccess("Sesión limpiada");
        }
      } catch (error) {
        this.showError("Error limpiando sesión");
      }
    }
  }
}

// Initialize app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded, initializing app");
  window.binsApp = new BinsGeneratorApp();
});

// Utility functions
function formatCardNumber(number) {
  return number.replace(/(.{4})/g, "$1 ").trim();
}

function validateBinFormat(binFormat) {
  return (
    /^[0-9x]+$/i.test(binFormat) &&
    (binFormat.length === 15 || binFormat.length === 16)
  );
}

function detectCardType(bin) {
  const firstDigit = bin.charAt(0);
  if (firstDigit === "4") return "VISA";
  if (firstDigit === "5") return "MASTERCARD";
  if (firstDigit === "3") return "AMERICAN EXPRESS";
  if (firstDigit === "6") return "DISCOVER";
  return "UNKNOWN";
}

// Console styling for development
console.log(
  "%c════════════════════════════════════════════════════════════════",
  "color: #00ff00;"
);
console.log(
  "%c                    MUNDO BINS RH PRO                          ",
  "color: #00ff00; font-weight: bold;"
);
console.log(
  "%c                   JavaScript Edition                          ",
  "color: #ffff00;"
);
console.log(
  "%c════════════════════════════════════════════════════════════════",
  "color: #00ff00;"
);
console.log(
  "%c[•] DESARROLLADO POR @REALHACKRH593 (Telegram)",
  "color: #00ffff;"
);
console.log("%c[•] PROHIBIDO LA VENTA DE LA HERRAMIENTA", "color: #ff8800;");
console.log(
  "%c[•] UNETE A: @MundoNetRH (Telegram) PARA MAS!",
  "color: #00ffff;"
);
console.log("%c[•] SIEMPRE AGRADECE POR LO QUE HACEMOS.", "color: #ffff00;");
console.log("%c[•] EL CONOCIMIENTO NO TIENE FIN", "color: #ffff00;");
console.log(
  "%c════════════════════════════════════════════════════════════════",
  "color: #00ff00;"
);

// Test function for debugging
function testFunction() {
  console.log("Test function called");
  alert("Test button works!");

  // Test if we can access the app instance
  if (window.binsApp) {
    console.log("App instance found");
    window.binsApp.startAutoGeneration();
  } else {
    console.log("App instance not found");
  }
}
