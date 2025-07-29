/**
 * UI Manager
 * Handles common UI operations like loading, notifications, and tab navigation
 */

export class UIManager {
  constructor() {
    this.loadingOverlay = document.getElementById("loading-overlay");
    this.loadingText = document.getElementById("loading-text");
  }

  setupTabNavigation() {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const targetTab = button.getAttribute("data-tab");

        // Remove active class from all buttons and contents
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        tabContents.forEach((content) => content.classList.remove("active"));

        // Add active class to clicked button and corresponding content
        button.classList.add("active");
        const targetContent = document.getElementById(targetTab);
        if (targetContent) {
          targetContent.classList.add("active");
        }
      });
    });
  }

  showLoading(message = "Procesando...") {
    if (this.loadingText) {
      this.loadingText.textContent = message;
    }
    if (this.loadingOverlay) {
      this.loadingOverlay.style.display = "flex";
    }
  }

  hideLoading() {
    if (this.loadingOverlay) {
      this.loadingOverlay.style.display = "none";
    }
  }

  showSuccess(message) {
    this.showNotification(message, "success");
  }

  showError(message) {
    this.showNotification(message, "error");
  }

  showNotification(message, type = "info") {
    // Create notification element
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <i class="fas ${this.getNotificationIcon(type)}"></i>
        <span>${message}</span>
        <button class="notification-close">&times;</button>
      </div>
    `;

    // Add to page
    document.body.appendChild(notification);

    // Setup close button
    const closeBtn = notification.querySelector(".notification-close");
    closeBtn.addEventListener("click", () => {
      this.removeNotification(notification);
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
      this.removeNotification(notification);
    }, 5000);

    // Animate in
    setTimeout(() => {
      notification.classList.add("show");
    }, 100);
  }

  removeNotification(notification) {
    if (notification && notification.parentNode) {
      notification.classList.remove("show");
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }
  }

  getNotificationIcon(type) {
    switch (type) {
      case "success":
        return "fa-check-circle";
      case "error":
        return "fa-exclamation-circle";
      case "warning":
        return "fa-exclamation-triangle";
      default:
        return "fa-info-circle";
    }
  }

  // Utility method to clear all results containers
  clearResults() {
    const resultsContainers = document.querySelectorAll(".results-container");
    resultsContainers.forEach((container) => {
      container.style.display = "none";
    });
  }

  // Utility method to show a results container
  showResults(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
      container.style.display = "block";
    }
  }
}
