/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BinsGeneratorApp: () => (/* binding */ BinsGeneratorApp)
/* harmony export */ });
/* harmony import */ var _features_bin_generator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features/bin-generator.js */ "./src/features/bin-generator.js");
/* harmony import */ var _features_card_generator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/card-generator.js */ "./src/features/card-generator.js");
/* harmony import */ var _features_bin_checker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/bin-checker.js */ "./src/features/bin-checker.js");
/* harmony import */ var _features_extrapolator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/extrapolator.js */ "./src/features/extrapolator.js");
/* harmony import */ var _features_version_checker_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/version-checker.js */ "./src/features/version-checker.js");
/* harmony import */ var _features_auto_generator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/auto-generator.js */ "./src/features/auto-generator.js");
/* harmony import */ var _features_simple_auto_generator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/simple-auto-generator.js */ "./src/features/simple-auto-generator.js");
/* harmony import */ var _core_ui_manager_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/ui-manager.js */ "./src/core/ui-manager.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/utils.js */ "./src/utils/utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Main Application Class
 * Manages the overall application state and initialization
 */










var BinsGeneratorApp = /*#__PURE__*/function () {
  function BinsGeneratorApp() {
    _classCallCheck(this, BinsGeneratorApp);
    this.apiBaseUrl = "http://localhost:3000/api";

    // Initialize feature modules
    this.binGenerator = new _features_bin_generator_js__WEBPACK_IMPORTED_MODULE_0__.BinGenerator(this.apiBaseUrl);
    this.cardGenerator = new _features_card_generator_js__WEBPACK_IMPORTED_MODULE_1__.CardGenerator(this.apiBaseUrl);
    this.binChecker = new _features_bin_checker_js__WEBPACK_IMPORTED_MODULE_2__.BinChecker(this.apiBaseUrl);
    this.extrapolator = new _features_extrapolator_js__WEBPACK_IMPORTED_MODULE_3__.Extrapolator(this.apiBaseUrl);
    this.versionChecker = new _features_version_checker_js__WEBPACK_IMPORTED_MODULE_4__.VersionChecker(this.apiBaseUrl);
    this.autoGenerator = new _features_auto_generator_js__WEBPACK_IMPORTED_MODULE_5__.AutoGenerator(this.apiBaseUrl);
    this.simpleAutoGenerator = new _features_simple_auto_generator_js__WEBPACK_IMPORTED_MODULE_6__.SimpleAutoGenerator(this.apiBaseUrl);

    // Initialize UI manager
    this.uiManager = new _core_ui_manager_js__WEBPACK_IMPORTED_MODULE_7__.UIManager();

    // Initialize utilities
    this.utils = new _utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.Utils();
  }
  return _createClass(BinsGeneratorApp, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              console.log("Initializing BINs Generator RH...");

              // Setup UI components
              this.uiManager.setupTabNavigation();
              this.setupEventListeners();
              this.setupInputValidation();

              // Show welcome message
              this.showWelcomeMessage();
              console.log("Application initialized successfully!");
            case 1:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }, {
    key: "setupEventListeners",
    value: function setupEventListeners() {
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
  }, {
    key: "setupInputValidation",
    value: function setupInputValidation() {
      var _this = this;
      // Custom date checkbox
      var customDateCheck = document.getElementById("custom-date-check");
      var customDateInputs = document.getElementById("custom-date-inputs");
      if (customDateCheck && customDateInputs) {
        customDateCheck.addEventListener("change", function (e) {
          customDateInputs.style.display = e.target.checked ? "block" : "none";
        });
      }

      // BIN format validation
      var binFormatInput = document.getElementById("bin-format");
      if (binFormatInput) {
        binFormatInput.addEventListener("input", function (e) {
          var value = e.target.value.toUpperCase();
          e.target.value = value;
          if (value.length > 0) {
            var isValid = _this.utils.validateBinFormat(value);
            e.target.style.borderColor = isValid ? "#28a745" : "#dc3545";
          } else {
            e.target.style.borderColor = "";
          }
        });
      }
    }
  }, {
    key: "showWelcomeMessage",
    value: function showWelcomeMessage() {
      this.uiManager.showSuccess("¡Bienvenido a BINs Generator RH! Selecciona una opción del menú.");
    }

    // Delegate UI methods to UIManager
  }, {
    key: "showLoading",
    value: function showLoading() {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Procesando...";
      this.uiManager.showLoading(message);
    }
  }, {
    key: "hideLoading",
    value: function hideLoading() {
      this.uiManager.hideLoading();
    }
  }, {
    key: "showSuccess",
    value: function showSuccess(message) {
      this.uiManager.showSuccess(message);
    }
  }, {
    key: "showError",
    value: function showError(message) {
      this.uiManager.showError(message);
    }
  }]);
}();

// Note: Initialization is handled by main.js

/***/ }),

/***/ "./src/core/ui-manager.js":
/*!********************************!*\
  !*** ./src/core/ui-manager.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UIManager: () => (/* binding */ UIManager)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * UI Manager
 * Handles common UI operations like loading, notifications, and tab navigation
 */

var UIManager = /*#__PURE__*/function () {
  function UIManager() {
    _classCallCheck(this, UIManager);
    this.loadingOverlay = document.getElementById("loading-overlay");
    this.loadingText = document.getElementById("loading-text");
  }
  return _createClass(UIManager, [{
    key: "setupTabNavigation",
    value: function setupTabNavigation() {
      var tabButtons = document.querySelectorAll(".tab-btn");
      var tabContents = document.querySelectorAll(".tab-content");
      tabButtons.forEach(function (button) {
        button.addEventListener("click", function () {
          var targetTab = button.getAttribute("data-tab");

          // Remove active class from all buttons and contents
          tabButtons.forEach(function (btn) {
            return btn.classList.remove("active");
          });
          tabContents.forEach(function (content) {
            return content.classList.remove("active");
          });

          // Add active class to clicked button and corresponding content
          button.classList.add("active");
          var targetContent = document.getElementById(targetTab);
          if (targetContent) {
            targetContent.classList.add("active");
          }
        });
      });
    }
  }, {
    key: "showLoading",
    value: function showLoading() {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Procesando...";
      if (this.loadingText) {
        this.loadingText.textContent = message;
      }
      if (this.loadingOverlay) {
        this.loadingOverlay.style.display = "flex";
      }
    }
  }, {
    key: "hideLoading",
    value: function hideLoading() {
      if (this.loadingOverlay) {
        this.loadingOverlay.style.display = "none";
      }
    }
  }, {
    key: "showSuccess",
    value: function showSuccess(message) {
      this.showNotification(message, "success");
    }
  }, {
    key: "showError",
    value: function showError(message) {
      this.showNotification(message, "error");
    }
  }, {
    key: "showNotification",
    value: function showNotification(message) {
      var _this = this;
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "info";
      // Create notification element
      var notification = document.createElement("div");
      notification.className = "notification notification-".concat(type);
      notification.innerHTML = "\n      <div class=\"notification-content\">\n        <i class=\"fas ".concat(this.getNotificationIcon(type), "\"></i>\n        <span>").concat(message, "</span>\n        <button class=\"notification-close\">&times;</button>\n      </div>\n    ");

      // Add to page
      document.body.appendChild(notification);

      // Setup close button
      var closeBtn = notification.querySelector(".notification-close");
      closeBtn.addEventListener("click", function () {
        _this.removeNotification(notification);
      });

      // Auto remove after 5 seconds
      setTimeout(function () {
        _this.removeNotification(notification);
      }, 5000);

      // Animate in
      setTimeout(function () {
        notification.classList.add("show");
      }, 100);
    }
  }, {
    key: "removeNotification",
    value: function removeNotification(notification) {
      if (notification && notification.parentNode) {
        notification.classList.remove("show");
        setTimeout(function () {
          if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
          }
        }, 300);
      }
    }
  }, {
    key: "getNotificationIcon",
    value: function getNotificationIcon(type) {
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
  }, {
    key: "clearResults",
    value: function clearResults() {
      var resultsContainers = document.querySelectorAll(".results-container");
      resultsContainers.forEach(function (container) {
        container.style.display = "none";
      });
    }

    // Utility method to show a results container
  }, {
    key: "showResults",
    value: function showResults(containerId) {
      var container = document.getElementById(containerId);
      if (container) {
        container.style.display = "block";
      }
    }
  }]);
}();

/***/ }),

/***/ "./src/features/auto-generator.js":
/*!****************************************!*\
  !*** ./src/features/auto-generator.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoGenerator: () => (/* binding */ AutoGenerator)
/* harmony export */ });
/* harmony import */ var _core_ui_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/ui-manager.js */ "./src/core/ui-manager.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Auto Generator Feature
 * Handles advanced auto generation functionality
 */



var AutoGenerator = /*#__PURE__*/function () {
  function AutoGenerator(apiBaseUrl) {
    _classCallCheck(this, AutoGenerator);
    this.apiBaseUrl = apiBaseUrl;
    this.uiManager = new _core_ui_manager_js__WEBPACK_IMPORTED_MODULE_0__.UIManager();
    this.utils = new _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils();

    // Auto generator state
    this.autoSession = null;
    this.statusUpdateInterval = null;
    this.currentFilter = "all";
  }
  return _createClass(AutoGenerator, [{
    key: "setupEventListeners",
    value: function setupEventListeners() {
      // Note: This feature requires UI implementation
      // The buttons and interface are not currently in the HTML
      console.log("Auto Generator event listeners would be set up here");
    }
  }, {
    key: "startAutoGeneration",
    value: function () {
      var _startAutoGeneration = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var config, response, data, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              console.log("startAutoGeneration called");
              config = this.getAutoConfig();
              console.log("Config:", config);
              this.uiManager.showLoading("Iniciando generación automática...");
              _context.p = 1;
              _context.n = 2;
              return fetch("".concat(this.apiBaseUrl, "/auto-generator/start"), {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  config: config
                })
              });
            case 2:
              response = _context.v;
              _context.n = 3;
              return response.json();
            case 3:
              data = _context.v;
              if (response.ok) {
                _context.n = 4;
                break;
              }
              throw new Error(data.error || "Error iniciando generación automática");
            case 4:
              this.autoSession = data.data;
              this.updateAutoControls("running");
              this.showAutoSections();
              this.startStatusUpdates();
              this.uiManager.showSuccess("Generación automática iniciada");
              _context.n = 6;
              break;
            case 5:
              _context.p = 5;
              _t = _context.v;
              this.uiManager.showError(_t.message);
            case 6:
              _context.p = 6;
              this.uiManager.hideLoading();
              return _context.f(6);
            case 7:
              return _context.a(2);
          }
        }, _callee, this, [[1, 5, 6, 7]]);
      }));
      function startAutoGeneration() {
        return _startAutoGeneration.apply(this, arguments);
      }
      return startAutoGeneration;
    }()
  }, {
    key: "pauseAutoGeneration",
    value: function () {
      var _pauseAutoGeneration = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var response, data, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              if (this.autoSession) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2);
            case 1:
              _context2.p = 1;
              _context2.n = 2;
              return fetch("".concat(this.apiBaseUrl, "/auto-generator/pause/").concat(this.autoSession.sessionId), {
                method: "POST"
              });
            case 2:
              response = _context2.v;
              _context2.n = 3;
              return response.json();
            case 3:
              data = _context2.v;
              if (!data.success) {
                _context2.n = 4;
                break;
              }
              this.updateAutoControls("paused");
              this.uiManager.showSuccess("Generación automática pausada");
              _context2.n = 5;
              break;
            case 4:
              throw new Error(data.error || "Error pausando generación");
            case 5:
              _context2.n = 7;
              break;
            case 6:
              _context2.p = 6;
              _t2 = _context2.v;
              this.uiManager.showError(_t2.message);
            case 7:
              return _context2.a(2);
          }
        }, _callee2, this, [[1, 6]]);
      }));
      function pauseAutoGeneration() {
        return _pauseAutoGeneration.apply(this, arguments);
      }
      return pauseAutoGeneration;
    }()
  }, {
    key: "resumeAutoGeneration",
    value: function () {
      var _resumeAutoGeneration = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var response, data, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              if (this.autoSession) {
                _context3.n = 1;
                break;
              }
              return _context3.a(2);
            case 1:
              _context3.p = 1;
              _context3.n = 2;
              return fetch("".concat(this.apiBaseUrl, "/auto-generator/resume/").concat(this.autoSession.sessionId), {
                method: "POST"
              });
            case 2:
              response = _context3.v;
              _context3.n = 3;
              return response.json();
            case 3:
              data = _context3.v;
              if (!data.success) {
                _context3.n = 4;
                break;
              }
              this.updateAutoControls("running");
              this.uiManager.showSuccess("Generación automática reanudada");
              _context3.n = 5;
              break;
            case 4:
              throw new Error(data.error || "Error reanudando generación");
            case 5:
              _context3.n = 7;
              break;
            case 6:
              _context3.p = 6;
              _t3 = _context3.v;
              this.uiManager.showError(_t3.message);
            case 7:
              return _context3.a(2);
          }
        }, _callee3, this, [[1, 6]]);
      }));
      function resumeAutoGeneration() {
        return _resumeAutoGeneration.apply(this, arguments);
      }
      return resumeAutoGeneration;
    }()
  }, {
    key: "stopAutoGeneration",
    value: function () {
      var _stopAutoGeneration = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var response, data, _t4;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              if (this.autoSession) {
                _context4.n = 1;
                break;
              }
              return _context4.a(2);
            case 1:
              _context4.p = 1;
              _context4.n = 2;
              return fetch("".concat(this.apiBaseUrl, "/auto-generator/stop/").concat(this.autoSession.sessionId), {
                method: "POST"
              });
            case 2:
              response = _context4.v;
              _context4.n = 3;
              return response.json();
            case 3:
              data = _context4.v;
              if (!data.success) {
                _context4.n = 4;
                break;
              }
              this.stopStatusUpdates();
              this.updateAutoControls("stopped");
              this.autoSession = null;
              this.uiManager.showSuccess("Generación automática detenida");
              _context4.n = 5;
              break;
            case 4:
              throw new Error(data.error || "Error deteniendo generación");
            case 5:
              _context4.n = 7;
              break;
            case 6:
              _context4.p = 6;
              _t4 = _context4.v;
              this.uiManager.showError(_t4.message);
            case 7:
              return _context4.a(2);
          }
        }, _callee4, this, [[1, 6]]);
      }));
      function stopAutoGeneration() {
        return _stopAutoGeneration.apply(this, arguments);
      }
      return stopAutoGeneration;
    }()
  }, {
    key: "getAutoConfig",
    value: function getAutoConfig() {
      // This would read from UI elements when implemented
      return {
        binFormat: "4xxxxxxxxxxxxxxx",
        cardsPerBatch: 25,
        batchInterval: 5000,
        maxCards: 1000,
        enableChecker: true,
        checkerDelay: 1000
      };
    }
  }, {
    key: "updateAutoControls",
    value: function updateAutoControls(status) {
      // This would update UI controls when implemented
      console.log("Auto controls updated to: ".concat(status));
    }
  }, {
    key: "showAutoSections",
    value: function showAutoSections() {
      // This would show auto generator sections when implemented
      console.log("Auto sections shown");
    }
  }, {
    key: "startStatusUpdates",
    value: function startStatusUpdates() {
      var _this = this;
      if (this.statusUpdateInterval) {
        clearInterval(this.statusUpdateInterval);
      }
      this.statusUpdateInterval = setInterval(function () {
        _this.updateAutoStatus();
      }, 2000);
    }
  }, {
    key: "stopStatusUpdates",
    value: function stopStatusUpdates() {
      if (this.statusUpdateInterval) {
        clearInterval(this.statusUpdateInterval);
        this.statusUpdateInterval = null;
      }
    }
  }, {
    key: "updateAutoStatus",
    value: function () {
      var _updateAutoStatus = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var response, data, _t5;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              if (this.autoSession) {
                _context5.n = 1;
                break;
              }
              return _context5.a(2);
            case 1:
              _context5.p = 1;
              _context5.n = 2;
              return fetch("".concat(this.apiBaseUrl, "/auto-generator/status/").concat(this.autoSession.sessionId));
            case 2:
              response = _context5.v;
              _context5.n = 3;
              return response.json();
            case 3:
              data = _context5.v;
              if (data.success) {
                this.displayAutoStatus(data.data);
                this.updateCardFilters(data.data);
              }
              _context5.n = 5;
              break;
            case 4:
              _context5.p = 4;
              _t5 = _context5.v;
              console.error("Error updating auto status:", _t5);
            case 5:
              return _context5.a(2);
          }
        }, _callee5, this, [[1, 4]]);
      }));
      function updateAutoStatus() {
        return _updateAutoStatus.apply(this, arguments);
      }
      return updateAutoStatus;
    }()
  }, {
    key: "displayAutoStatus",
    value: function displayAutoStatus(statusData) {
      // This would update status display when implemented
      console.log("Status updated:", statusData);
    }
  }, {
    key: "updateCardFilters",
    value: function updateCardFilters(statusData) {
      // This would update card filter buttons when implemented
      console.log("Card filters updated:", statusData);
    }
  }, {
    key: "setCardFilter",
    value: function setCardFilter(filter) {
      this.currentFilter = filter;
      this.updateCardsTable();
    }
  }, {
    key: "updateCardsTable",
    value: function () {
      var _updateCardsTable = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var response, data, _t6;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              if (this.autoSession) {
                _context6.n = 1;
                break;
              }
              return _context6.a(2);
            case 1:
              _context6.p = 1;
              _context6.n = 2;
              return fetch("".concat(this.apiBaseUrl, "/auto-generator/cards/").concat(this.autoSession.sessionId, "/").concat(this.currentFilter, "?limit=10000"));
            case 2:
              response = _context6.v;
              _context6.n = 3;
              return response.json();
            case 3:
              data = _context6.v;
              if (data.success) {
                this.updateCardsTable(data.data);
              }
              _context6.n = 5;
              break;
            case 4:
              _context6.p = 4;
              _t6 = _context6.v;
              console.error("Error updating cards table:", _t6);
            case 5:
              return _context6.a(2);
          }
        }, _callee6, this, [[1, 4]]);
      }));
      function updateCardsTable() {
        return _updateCardsTable.apply(this, arguments);
      }
      return updateCardsTable;
    }()
  }, {
    key: "clearAutoSession",
    value: function () {
      var _clearAutoSession = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var response, data, _t7;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              if (this.autoSession) {
                _context7.n = 1;
                break;
              }
              return _context7.a(2);
            case 1:
              if (confirm("¿Estás seguro de que quieres limpiar todos los resultados? Esta acción no se puede deshacer.")) {
                _context7.n = 2;
                break;
              }
              return _context7.a(2);
            case 2:
              _context7.p = 2;
              _context7.n = 3;
              return fetch("".concat(this.apiBaseUrl, "/auto-generator/clear/").concat(this.autoSession.sessionId), {
                method: "POST"
              });
            case 3:
              response = _context7.v;
              _context7.n = 4;
              return response.json();
            case 4:
              data = _context7.v;
              if (!data.success) {
                _context7.n = 5;
                break;
              }
              this.updateCardsTable([]);
              this.uiManager.showSuccess("Resultados limpiados exitosamente");
              _context7.n = 6;
              break;
            case 5:
              throw new Error(data.error || "Error limpiando resultados");
            case 6:
              _context7.n = 8;
              break;
            case 7:
              _context7.p = 7;
              _t7 = _context7.v;
              this.uiManager.showError(_t7.message);
            case 8:
              return _context7.a(2);
          }
        }, _callee7, this, [[2, 7]]);
      }));
      function clearAutoSession() {
        return _clearAutoSession.apply(this, arguments);
      }
      return clearAutoSession;
    }()
  }, {
    key: "exportAutoResults",
    value: function () {
      var _exportAutoResults = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        var response, data, cardsText, blob, url, a, _t8;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.p = _context8.n) {
            case 0:
              if (this.autoSession) {
                _context8.n = 1;
                break;
              }
              return _context8.a(2);
            case 1:
              _context8.p = 1;
              _context8.n = 2;
              return fetch("".concat(this.apiBaseUrl, "/auto-generator/export/").concat(this.autoSession.sessionId));
            case 2:
              response = _context8.v;
              _context8.n = 3;
              return response.json();
            case 3:
              data = _context8.v;
              if (data.success && data.data.length > 0) {
                cardsText = data.data.map(function (card) {
                  return "".concat(card.number, "|").concat(card.month.toString().padStart(2, "0"), "|").concat(card.year, "|").concat(card.cvv, "|").concat(card.status);
                }).join("\n"); // Create and download file
                blob = new Blob([cardsText], {
                  type: "text/plain"
                });
                url = URL.createObjectURL(blob);
                a = document.createElement("a");
                a.href = url;
                a.download = "auto_results_".concat(new Date().toISOString().slice(0, 10), ".txt");
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
                this.uiManager.showSuccess("".concat(data.data.length, " resultados exportados exitosamente"));
              } else {
                this.uiManager.showError("No hay resultados para exportar");
              }
              _context8.n = 5;
              break;
            case 4:
              _context8.p = 4;
              _t8 = _context8.v;
              this.uiManager.showError("Error exportando resultados");
            case 5:
              return _context8.a(2);
          }
        }, _callee8, this, [[1, 4]]);
      }));
      function exportAutoResults() {
        return _exportAutoResults.apply(this, arguments);
      }
      return exportAutoResults;
    }()
  }, {
    key: "formatUptime",
    value: function formatUptime(ms) {
      return this.utils.formatUptime(ms);
    }
  }]);
}();

/***/ }),

/***/ "./src/features/bin-checker.js":
/*!*************************************!*\
  !*** ./src/features/bin-checker.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BinChecker: () => (/* binding */ BinChecker)
/* harmony export */ });
/* harmony import */ var _core_ui_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/ui-manager.js */ "./src/core/ui-manager.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * BIN Checker Feature
 * Handles BIN verification functionality
 */



var BinChecker = /*#__PURE__*/function () {
  function BinChecker(apiBaseUrl) {
    _classCallCheck(this, BinChecker);
    this.apiBaseUrl = apiBaseUrl;
    this.uiManager = new _core_ui_manager_js__WEBPACK_IMPORTED_MODULE_0__.UIManager();
    this.utils = new _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils();
  }
  return _createClass(BinChecker, [{
    key: "setupEventListeners",
    value: function setupEventListeners() {
      var _this = this;
      // Check BIN button
      var checkBtn = document.getElementById("check-bin-btn");
      if (checkBtn) {
        checkBtn.addEventListener("click", function () {
          return _this.checkBin();
        });
      }

      // Enter key support for BIN input
      var binInput = document.getElementById("bin-to-check");
      if (binInput) {
        binInput.addEventListener("keypress", function (e) {
          if (e.key === "Enter") {
            _this.checkBin();
          }
        });
      }
    }
  }, {
    key: "checkBin",
    value: function () {
      var _checkBin = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var binToCheck, response, data, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              binToCheck = document.getElementById("bin-to-check").value.trim();
              if (binToCheck) {
                _context.n = 1;
                break;
              }
              this.uiManager.showError("Por favor, ingresa un BIN para verificar.");
              return _context.a(2);
            case 1:
              if (!(binToCheck.length < 6)) {
                _context.n = 2;
                break;
              }
              this.uiManager.showError("El BIN debe tener al menos 6 dígitos.");
              return _context.a(2);
            case 2:
              if (/^\d+$/.test(binToCheck)) {
                _context.n = 3;
                break;
              }
              this.uiManager.showError("El BIN debe contener solo números.");
              return _context.a(2);
            case 3:
              this.uiManager.showLoading("Verificando BIN...");
              _context.p = 4;
              _context.n = 5;
              return fetch("".concat(this.apiBaseUrl, "/check-bin"), {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  bin: binToCheck
                })
              });
            case 5:
              response = _context.v;
              _context.n = 6;
              return response.json();
            case 6:
              data = _context.v;
              if (response.ok) {
                _context.n = 7;
                break;
              }
              throw new Error(data.error || "Error verificando BIN");
            case 7:
              if (!data.success) {
                _context.n = 8;
                break;
              }
              this.displayBinInfo(data.data);
              this.uiManager.showSuccess("BIN verificado exitosamente");
              _context.n = 9;
              break;
            case 8:
              throw new Error(data.error || "Error en la respuesta del servidor");
            case 9:
              _context.n = 11;
              break;
            case 10:
              _context.p = 10;
              _t = _context.v;
              console.error("Error:", _t);
              this.uiManager.showError(_t.message);
            case 11:
              _context.p = 11;
              this.uiManager.hideLoading();
              return _context.f(11);
            case 12:
              return _context.a(2);
          }
        }, _callee, this, [[4, 10, 11, 12]]);
      }));
      function checkBin() {
        return _checkBin.apply(this, arguments);
      }
      return checkBin;
    }()
  }, {
    key: "displayBinInfo",
    value: function displayBinInfo(binInfo) {
      var _binInfo$bank,
        _binInfo$bank2,
        _binInfo$bank3,
        _binInfo$country,
        _binInfo$country2,
        _binInfo$country3,
        _binInfo$country4,
        _this2 = this;
      var resultsContainer = document.getElementById("bin-info-results");
      var binInfoDiv = document.getElementById("bin-info");
      if (!resultsContainer || !binInfoDiv) return;

      // Clear previous results
      binInfoDiv.innerHTML = "";

      // Create info sections
      var sections = [{
        title: "Información Básica",
        icon: "fa-info-circle",
        data: [{
          label: "BIN",
          value: binInfo.bin || "N/A"
        }, {
          label: "Esquema",
          value: binInfo.scheme || "N/A"
        }, {
          label: "Tipo",
          value: binInfo.type || "N/A"
        }, {
          label: "Marca",
          value: binInfo.brand || "N/A"
        }]
      }, {
        title: "Información del Banco",
        icon: "fa-university",
        data: [{
          label: "Banco",
          value: ((_binInfo$bank = binInfo.bank) === null || _binInfo$bank === void 0 ? void 0 : _binInfo$bank.name) || "N/A"
        }, {
          label: "URL",
          value: ((_binInfo$bank2 = binInfo.bank) === null || _binInfo$bank2 === void 0 ? void 0 : _binInfo$bank2.url) || "N/A"
        }, {
          label: "Teléfono",
          value: ((_binInfo$bank3 = binInfo.bank) === null || _binInfo$bank3 === void 0 ? void 0 : _binInfo$bank3.phone) || "N/A"
        }]
      }, {
        title: "Información Geográfica",
        icon: "fa-globe",
        data: [{
          label: "País",
          value: ((_binInfo$country = binInfo.country) === null || _binInfo$country === void 0 ? void 0 : _binInfo$country.name) || "N/A"
        }, {
          label: "Código",
          value: ((_binInfo$country2 = binInfo.country) === null || _binInfo$country2 === void 0 ? void 0 : _binInfo$country2.alpha2) || "N/A"
        }, {
          label: "Moneda",
          value: ((_binInfo$country3 = binInfo.country) === null || _binInfo$country3 === void 0 ? void 0 : _binInfo$country3.currency) || "N/A"
        }, {
          label: "Emoji",
          value: ((_binInfo$country4 = binInfo.country) === null || _binInfo$country4 === void 0 ? void 0 : _binInfo$country4.emoji) || "N/A"
        }]
      }];
      sections.forEach(function (section) {
        var sectionDiv = document.createElement("div");
        sectionDiv.className = "bin-info-section";
        var sectionHTML = "\n        <div class=\"section-header\">\n          <i class=\"fas ".concat(section.icon, "\"></i>\n          <h4>").concat(section.title, "</h4>\n        </div>\n        <div class=\"section-content\">\n      ");
        section.data.forEach(function (item) {
          sectionHTML += "\n          <div class=\"info-row\">\n            <span class=\"info-label\">".concat(item.label, ":</span>\n            <span class=\"info-value\">").concat(_this2.utils.sanitizeHTML(item.value), "</span>\n          </div>\n        ");
        });
        sectionHTML += "</div>";
        sectionDiv.innerHTML = sectionHTML;
        binInfoDiv.appendChild(sectionDiv);
      });

      // Add prepaid/debit info if available
      if (binInfo.prepaid !== undefined || binInfo.debit !== undefined) {
        var additionalDiv = document.createElement("div");
        additionalDiv.className = "bin-info-section";
        additionalDiv.innerHTML = "\n        <div class=\"section-header\">\n          <i class=\"fas fa-tags\"></i>\n          <h4>Informaci\xF3n Adicional</h4>\n        </div>\n        <div class=\"section-content\">\n          ".concat(binInfo.prepaid !== undefined ? "\n            <div class=\"info-row\">\n              <span class=\"info-label\">Prepago:</span>\n              <span class=\"info-value ".concat(binInfo.prepaid ? "text-success" : "text-danger", "\">\n                ").concat(binInfo.prepaid ? "Sí" : "No", "\n              </span>\n            </div>\n          ") : "", "\n          ").concat(binInfo.debit !== undefined ? "\n            <div class=\"info-row\">\n              <span class=\"info-label\">D\xE9bito:</span>\n              <span class=\"info-value ".concat(binInfo.debit ? "text-success" : "text-danger", "\">\n                ").concat(binInfo.debit ? "Sí" : "No", "\n              </span>\n            </div>\n          ") : "", "\n        </div>\n      ");
        binInfoDiv.appendChild(additionalDiv);
      }

      // Show results container
      resultsContainer.style.display = "block";
    }
  }]);
}();

/***/ }),

/***/ "./src/features/bin-generator.js":
/*!***************************************!*\
  !*** ./src/features/bin-generator.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BinGenerator: () => (/* binding */ BinGenerator)
/* harmony export */ });
/* harmony import */ var _core_ui_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/ui-manager.js */ "./src/core/ui-manager.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * BIN Generator Feature
 * Handles BIN generation functionality
 */



var BinGenerator = /*#__PURE__*/function () {
  function BinGenerator(apiBaseUrl) {
    _classCallCheck(this, BinGenerator);
    this.apiBaseUrl = apiBaseUrl;
    this.uiManager = new _core_ui_manager_js__WEBPACK_IMPORTED_MODULE_0__.UIManager();
    this.utils = new _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils();
  }
  return _createClass(BinGenerator, [{
    key: "setupEventListeners",
    value: function setupEventListeners() {
      var _this = this;
      // Generate BINs button
      var generateBtn = document.getElementById("generate-bins-btn");
      if (generateBtn) {
        generateBtn.addEventListener("click", function () {
          return _this.generateBins();
        });
      }

      // Copy BINs button
      var copyBtn = document.getElementById("copy-bins-btn");
      if (copyBtn) {
        copyBtn.addEventListener("click", function () {
          return _this.copyBins();
        });
      }
    }
  }, {
    key: "generateBins",
    value: function () {
      var _generateBins = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var cardType, binCount, response, data, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              cardType = document.getElementById("card-type").value;
              binCount = parseInt(document.getElementById("bin-count").value);
              if (!(!cardType || !binCount || binCount < 1 || binCount > 100)) {
                _context.n = 1;
                break;
              }
              this.uiManager.showError("Por favor, selecciona un tipo de tarjeta válido y una cantidad entre 1 y 100.");
              return _context.a(2);
            case 1:
              this.uiManager.showLoading("Generando BINs...");
              _context.p = 2;
              _context.n = 3;
              return fetch("".concat(this.apiBaseUrl, "/generate-bins"), {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  cardType: cardType,
                  count: binCount
                })
              });
            case 3:
              response = _context.v;
              _context.n = 4;
              return response.json();
            case 4:
              data = _context.v;
              if (response.ok) {
                _context.n = 5;
                break;
              }
              throw new Error(data.error || "Error generando BINs");
            case 5:
              if (!data.success) {
                _context.n = 6;
                break;
              }
              this.displayBins(data);
              this.uiManager.showSuccess("".concat(data.data.length, " BINs generados exitosamente"));
              _context.n = 7;
              break;
            case 6:
              throw new Error(data.error || "Error en la respuesta del servidor");
            case 7:
              _context.n = 9;
              break;
            case 8:
              _context.p = 8;
              _t = _context.v;
              console.error("Error:", _t);
              this.uiManager.showError(_t.message);
            case 9:
              _context.p = 9;
              this.uiManager.hideLoading();
              return _context.f(9);
            case 10:
              return _context.a(2);
          }
        }, _callee, this, [[2, 8, 9, 10]]);
      }));
      function generateBins() {
        return _generateBins.apply(this, arguments);
      }
      return generateBins;
    }()
  }, {
    key: "displayBins",
    value: function displayBins(data) {
      var _this2 = this;
      var resultsContainer = document.getElementById("bins-results");
      var binsList = document.getElementById("bins-list");
      if (!resultsContainer || !binsList) return;

      // Clear previous results
      binsList.innerHTML = "";

      // Create BIN items
      data.data.forEach(function (bin, index) {
        var binItem = document.createElement("div");
        binItem.className = "result-item";
        binItem.innerHTML = "\n        <div class=\"result-content\">\n          <span class=\"result-number\">".concat(index + 1, ".</span>\n          <span class=\"result-value\">").concat(bin, "</span>\n          <span class=\"result-type\">").concat(_this2.utils.detectCardType(bin), "</span>\n        </div>\n        <button class=\"copy-btn\" onclick=\"navigator.clipboard.writeText('").concat(bin, "')\">\n          <i class=\"fas fa-copy\"></i>\n        </button>\n      ");
        binsList.appendChild(binItem);
      });

      // Show results container
      resultsContainer.style.display = "block";
    }
  }, {
    key: "copyBins",
    value: function () {
      var _copyBins = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var binItems, binsText, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              binItems = document.querySelectorAll("#bins-list .result-value");
              if (!(binItems.length === 0)) {
                _context2.n = 1;
                break;
              }
              this.uiManager.showError("No hay BINs para copiar");
              return _context2.a(2);
            case 1:
              binsText = Array.from(binItems).map(function (item) {
                return item.textContent;
              }).join("\n");
              _context2.p = 2;
              _context2.n = 3;
              return this.utils.copyToClipboard(binsText);
            case 3:
              this.uiManager.showSuccess("".concat(binItems.length, " BINs copiados al portapapeles"));
              _context2.n = 5;
              break;
            case 4:
              _context2.p = 4;
              _t2 = _context2.v;
              this.uiManager.showError("Error al copiar BINs");
            case 5:
              return _context2.a(2);
          }
        }, _callee2, this, [[2, 4]]);
      }));
      function copyBins() {
        return _copyBins.apply(this, arguments);
      }
      return copyBins;
    }()
  }]);
}();

/***/ }),

/***/ "./src/features/card-generator.js":
/*!****************************************!*\
  !*** ./src/features/card-generator.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardGenerator: () => (/* binding */ CardGenerator)
/* harmony export */ });
/* harmony import */ var _core_ui_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/ui-manager.js */ "./src/core/ui-manager.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Card Generator Feature
 * Handles card generation functionality
 */



var CardGenerator = /*#__PURE__*/function () {
  function CardGenerator(apiBaseUrl) {
    _classCallCheck(this, CardGenerator);
    this.apiBaseUrl = apiBaseUrl;
    this.uiManager = new _core_ui_manager_js__WEBPACK_IMPORTED_MODULE_0__.UIManager();
    this.utils = new _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils();
  }
  return _createClass(CardGenerator, [{
    key: "setupEventListeners",
    value: function setupEventListeners() {
      var _this = this;
      // Generate Cards button
      var generateBtn = document.getElementById("generate-cards-btn");
      if (generateBtn) {
        generateBtn.addEventListener("click", function () {
          return _this.generateCards();
        });
      }

      // Copy Cards button
      var copyBtn = document.getElementById("copy-cards-btn");
      if (copyBtn) {
        copyBtn.addEventListener("click", function () {
          return _this.copyCards();
        });
      }

      // Export Cards button
      var exportBtn = document.getElementById("export-cards-btn");
      if (exportBtn) {
        exportBtn.addEventListener("click", function () {
          return _this.exportCards();
        });
      }
    }
  }, {
    key: "generateCards",
    value: function () {
      var _generateCards = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var binFormat, cardCount, useCustomDate, customMonth, customYear, response, data, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              binFormat = document.getElementById("bin-format").value.trim();
              cardCount = parseInt(document.getElementById("card-count").value);
              useCustomDate = document.getElementById("custom-date-check").checked;
              if (binFormat) {
                _context.n = 1;
                break;
              }
              this.uiManager.showError("Por favor, ingresa un formato BIN válido.");
              return _context.a(2);
            case 1:
              if (this.utils.validateBinFormat(binFormat)) {
                _context.n = 2;
                break;
              }
              this.uiManager.showError("Formato BIN inválido. Use 'x' para dígitos aleatorios.");
              return _context.a(2);
            case 2:
              if (!(!cardCount || cardCount < 1 || cardCount > 50)) {
                _context.n = 3;
                break;
              }
              this.uiManager.showError("La cantidad debe estar entre 1 y 50.");
              return _context.a(2);
            case 3:
              customMonth = null;
              customYear = null;
              if (!useCustomDate) {
                _context.n = 5;
                break;
              }
              customMonth = parseInt(document.getElementById("custom-month").value);
              customYear = parseInt(document.getElementById("custom-year").value);
              if (!(!customMonth || customMonth < 1 || customMonth > 12)) {
                _context.n = 4;
                break;
              }
              this.uiManager.showError("Mes inválido (1-12).");
              return _context.a(2);
            case 4:
              if (!(!customYear || customYear < 2022 || customYear > 2030)) {
                _context.n = 5;
                break;
              }
              this.uiManager.showError("Año inválido (2022-2030).");
              return _context.a(2);
            case 5:
              // Show search simulation
              this.showSearchSimulation();
              _context.p = 6;
              _context.n = 7;
              return fetch("".concat(this.apiBaseUrl, "/generate-cards"), {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  binFormat: binFormat,
                  count: cardCount,
                  customMonth: customMonth,
                  customYear: customYear
                })
              });
            case 7:
              response = _context.v;
              _context.n = 8;
              return response.json();
            case 8:
              data = _context.v;
              if (response.ok) {
                _context.n = 9;
                break;
              }
              throw new Error(data.error || "Error generando tarjetas");
            case 9:
              if (!data.success) {
                _context.n = 10;
                break;
              }
              this.displayCards(data);
              this.uiManager.showSuccess("".concat(data.data.length, " tarjetas generadas exitosamente"));
              _context.n = 11;
              break;
            case 10:
              throw new Error(data.error || "Error en la respuesta del servidor");
            case 11:
              _context.n = 13;
              break;
            case 12:
              _context.p = 12;
              _t = _context.v;
              console.error("Error:", _t);
              this.uiManager.showError(_t.message);
            case 13:
              _context.p = 13;
              this.hideSearchSimulation();
              return _context.f(13);
            case 14:
              return _context.a(2);
          }
        }, _callee, this, [[6, 12, 13, 14]]);
      }));
      function generateCards() {
        return _generateCards.apply(this, arguments);
      }
      return generateCards;
    }()
  }, {
    key: "showSearchSimulation",
    value: function showSearchSimulation() {
      var simulation = document.getElementById("search-simulation");
      if (simulation) {
        simulation.style.display = "block";

        // Animate progress bar
        var progressFill = simulation.querySelector(".progress-fill");
        if (progressFill) {
          progressFill.style.width = "0%";
          setTimeout(function () {
            progressFill.style.width = "100%";
          }, 100);
        }
      }
    }
  }, {
    key: "hideSearchSimulation",
    value: function hideSearchSimulation() {
      var simulation = document.getElementById("search-simulation");
      if (simulation) {
        setTimeout(function () {
          simulation.style.display = "none";
        }, 500);
      }
    }
  }, {
    key: "displayCards",
    value: function displayCards(data) {
      var _this2 = this;
      var resultsContainer = document.getElementById("cards-results");
      var cardsStats = document.getElementById("cards-stats");
      var cardsTableBody = document.getElementById("cards-tbody");
      if (!resultsContainer || !cardsTableBody) return;

      // Clear previous results
      cardsTableBody.innerHTML = "";

      // Update stats
      if (cardsStats) {
        var stats = data.stats || {
          total: data.data.length,
          live: 0,
          died: 0,
          unknown: data.data.length
        };
        cardsStats.innerHTML = "\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">Total:</span>\n          <span class=\"stat-value\">".concat(stats.total, "</span>\n        </div>\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">Live:</span>\n          <span class=\"stat-value stat-live\">").concat(stats.live, "</span>\n        </div>\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">Died:</span>\n          <span class=\"stat-value stat-died\">").concat(stats.died, "</span>\n        </div>\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">Unknown:</span>\n          <span class=\"stat-value stat-unknown\">").concat(stats.unknown, "</span>\n        </div>\n      ");
      }

      // Create card rows
      data.data.forEach(function (card) {
        var row = document.createElement("tr");
        row.className = "card-row status-".concat(card.status.toLowerCase());
        row.innerHTML = "\n        <td class=\"card-number\">".concat(_this2.utils.formatCardNumber(card.number), "</td>\n        <td class=\"card-cvv\">").concat(card.cvv, "</td>\n        <td class=\"card-month\">").concat(card.month.toString().padStart(2, "0"), "</td>\n        <td class=\"card-year\">").concat(card.year, "</td>\n        <td class=\"card-status\">\n          <span class=\"status-badge status-").concat(card.status.toLowerCase(), "\">\n            ").concat(card.status, "\n          </span>\n        </td>\n      ");
        cardsTableBody.appendChild(row);
      });

      // Show results container
      resultsContainer.style.display = "block";
    }
  }, {
    key: "copyCards",
    value: function () {
      var _copyCards = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var cardRows, cardsText, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              cardRows = document.querySelectorAll("#cards-tbody tr");
              if (!(cardRows.length === 0)) {
                _context2.n = 1;
                break;
              }
              this.uiManager.showError("No hay tarjetas para copiar");
              return _context2.a(2);
            case 1:
              cardsText = Array.from(cardRows).map(function (row) {
                var cells = row.querySelectorAll("td");
                var number = cells[0].textContent.replace(/\s/g, "");
                var cvv = cells[1].textContent;
                var month = cells[2].textContent;
                var year = cells[3].textContent;
                return "".concat(number, "|").concat(month, "|").concat(year, "|").concat(cvv);
              }).join("\n");
              _context2.p = 2;
              _context2.n = 3;
              return this.utils.copyToClipboard(cardsText);
            case 3:
              this.uiManager.showSuccess("".concat(cardRows.length, " tarjetas copiadas al portapapeles"));
              _context2.n = 5;
              break;
            case 4:
              _context2.p = 4;
              _t2 = _context2.v;
              this.uiManager.showError("Error al copiar tarjetas");
            case 5:
              return _context2.a(2);
          }
        }, _callee2, this, [[2, 4]]);
      }));
      function copyCards() {
        return _copyCards.apply(this, arguments);
      }
      return copyCards;
    }()
  }, {
    key: "exportCards",
    value: function exportCards() {
      var cardRows = document.querySelectorAll("#cards-tbody tr");
      if (cardRows.length === 0) {
        this.uiManager.showError("No hay tarjetas para exportar");
        return;
      }
      var cardsText = Array.from(cardRows).map(function (row) {
        var cells = row.querySelectorAll("td");
        var number = cells[0].textContent.replace(/\s/g, "");
        var cvv = cells[1].textContent;
        var month = cells[2].textContent;
        var year = cells[3].textContent;
        var status = cells[4].textContent.trim();
        return "".concat(number, "|").concat(month, "|").concat(year, "|").concat(cvv, "|").concat(status);
      }).join("\n");

      // Create and download file
      var blob = new Blob([cardsText], {
        type: "text/plain"
      });
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = "cards_".concat(new Date().toISOString().slice(0, 10), ".txt");
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      this.uiManager.showSuccess("".concat(cardRows.length, " tarjetas exportadas exitosamente"));
    }
  }]);
}();

/***/ }),

/***/ "./src/features/extrapolator.js":
/*!**************************************!*\
  !*** ./src/features/extrapolator.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Extrapolator: () => (/* binding */ Extrapolator)
/* harmony export */ });
/* harmony import */ var _core_ui_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/ui-manager.js */ "./src/core/ui-manager.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Extrapolator Feature
 * Handles card extrapolation functionality
 */



var Extrapolator = /*#__PURE__*/function () {
  function Extrapolator(apiBaseUrl) {
    _classCallCheck(this, Extrapolator);
    this.apiBaseUrl = apiBaseUrl;
    this.uiManager = new _core_ui_manager_js__WEBPACK_IMPORTED_MODULE_0__.UIManager();
    this.utils = new _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils();
  }
  return _createClass(Extrapolator, [{
    key: "setupEventListeners",
    value: function setupEventListeners() {
      var _this = this;
      // Extrapolate button
      var extrapolateBtn = document.getElementById("extrapolate-btn");
      if (extrapolateBtn) {
        extrapolateBtn.addEventListener("click", function () {
          return _this.extrapolateCards();
        });
      }

      // Enter key support for card inputs
      var card1Input = document.getElementById("card1");
      var card2Input = document.getElementById("card2");
      if (card1Input) {
        card1Input.addEventListener("keypress", function (e) {
          if (e.key === "Enter") {
            _this.extrapolateCards();
          }
        });
      }
      if (card2Input) {
        card2Input.addEventListener("keypress", function (e) {
          if (e.key === "Enter") {
            _this.extrapolateCards();
          }
        });
      }
    }
  }, {
    key: "extrapolateCards",
    value: function () {
      var _extrapolateCards = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var card1, card2, response, data, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              card1 = document.getElementById("card1").value.trim();
              card2 = document.getElementById("card2").value.trim();
              if (!(!card1 || !card2)) {
                _context.n = 1;
                break;
              }
              this.uiManager.showError("Por favor, ingresa ambas tarjetas para extrapolación.");
              return _context.a(2);
            case 1:
              if (!(!/^\d{15,16}$/.test(card1) || !/^\d{15,16}$/.test(card2))) {
                _context.n = 2;
                break;
              }
              this.uiManager.showError("Las tarjetas deben tener 15 o 16 dígitos.");
              return _context.a(2);
            case 2:
              if (!(card1 === card2)) {
                _context.n = 3;
                break;
              }
              this.uiManager.showError("Las tarjetas deben ser diferentes.");
              return _context.a(2);
            case 3:
              this.uiManager.showLoading("Extrapolando tarjetas...");
              _context.p = 4;
              _context.n = 5;
              return fetch("".concat(this.apiBaseUrl, "/extrapolate-cards"), {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  card1: card1,
                  card2: card2
                })
              });
            case 5:
              response = _context.v;
              _context.n = 6;
              return response.json();
            case 6:
              data = _context.v;
              if (response.ok) {
                _context.n = 7;
                break;
              }
              throw new Error(data.error || "Error extrapolando tarjetas");
            case 7:
              if (!data.success) {
                _context.n = 8;
                break;
              }
              this.displayExtrapolation(data);
              this.uiManager.showSuccess("Extrapolación completada exitosamente");
              _context.n = 9;
              break;
            case 8:
              throw new Error(data.error || "Error en la respuesta del servidor");
            case 9:
              _context.n = 11;
              break;
            case 10:
              _context.p = 10;
              _t = _context.v;
              console.error("Error:", _t);
              this.uiManager.showError(_t.message);
            case 11:
              _context.p = 11;
              this.uiManager.hideLoading();
              return _context.f(11);
            case 12:
              return _context.a(2);
          }
        }, _callee, this, [[4, 10, 11, 12]]);
      }));
      function extrapolateCards() {
        return _extrapolateCards.apply(this, arguments);
      }
      return extrapolateCards;
    }()
  }, {
    key: "displayExtrapolation",
    value: function displayExtrapolation(data) {
      var _this2 = this;
      var resultsContainer = document.getElementById("extrapolation-results");
      var contentDiv = document.getElementById("extrapolation-content");
      if (!resultsContainer || !contentDiv) return;

      // Clear previous results
      contentDiv.innerHTML = "";

      // Create header with summary
      var headerDiv = document.createElement("div");
      headerDiv.className = "extrapolation-header";
      headerDiv.innerHTML = "\n      <div class=\"extrapolation-summary\">\n        <div class=\"summary-item\">\n          <span class=\"summary-label\">Total de Extrapolaciones:</span>\n          <span class=\"summary-value\">".concat(data.data.length, "</span>\n        </div>\n        <div class=\"summary-item\">\n          <span class=\"summary-label\">Tarjeta Base 1:</span>\n          <span class=\"summary-value\">").concat(this.utils.formatCardNumber(data.card1), "</span>\n        </div>\n        <div class=\"summary-item\">\n          <span class=\"summary-label\">Tarjeta Base 2:</span>\n          <span class=\"summary-value\">").concat(this.utils.formatCardNumber(data.card2), "</span>\n        </div>\n      </div>\n    ");
      contentDiv.appendChild(headerDiv);

      // Create extrapolation sections
      data.data.forEach(function (extrapolation, index) {
        var sectionDiv = _this2.createExtrapolationSection(extrapolation, index + 1);
        contentDiv.appendChild(sectionDiv);
      });

      // Add copy all button
      var actionsDiv = document.createElement("div");
      actionsDiv.className = "extrapolation-actions";
      actionsDiv.innerHTML = "\n      <button class=\"btn btn-secondary\" onclick=\"window.binsApp.extrapolator.copyAllExtrapolations()\">\n        <i class=\"fas fa-copy\"></i> Copiar Todas las Extrapolaciones\n      </button>\n      <button class=\"btn btn-secondary\" onclick=\"window.binsApp.extrapolator.exportExtrapolations()\">\n        <i class=\"fas fa-download\"></i> Exportar TXT\n      </button>\n    ";
      contentDiv.appendChild(actionsDiv);

      // Show results container
      resultsContainer.style.display = "block";
    }
  }, {
    key: "createExtrapolationSection",
    value: function createExtrapolationSection(extrapolation, sectionNumber) {
      var _this3 = this;
      var sectionDiv = document.createElement("div");
      sectionDiv.className = "extrapolation-section";
      sectionDiv.innerHTML = "\n      <div class=\"section-header\">\n        <h4>\n          <i class=\"fas fa-calculator\"></i>\n          Extrapolaci\xF3n ".concat(sectionNumber, ": ").concat(extrapolation.method, "\n        </h4>\n        <div class=\"section-stats\">\n          <span class=\"stat-badge\">\n            <i class=\"fas fa-credit-card\"></i>\n            ").concat(extrapolation.cards.length, " tarjetas\n          </span>\n        </div>\n      </div>\n      <div class=\"section-content\">\n        <div class=\"cards-grid\">\n          ").concat(extrapolation.cards.map(function (card) {
        return "\n            <div class=\"card-item\">\n              <div class=\"card-number\">".concat(_this3.utils.formatCardNumber(card.number), "</div>\n              <div class=\"card-details\">\n                <span class=\"card-cvv\">CVV: ").concat(card.cvv, "</span>\n                <span class=\"card-date\">").concat(card.month.toString().padStart(2, "0"), "/").concat(card.year, "</span>\n              </div>\n              <button class=\"copy-card-btn\" onclick=\"navigator.clipboard.writeText('").concat(card.number, "|").concat(card.month.toString().padStart(2, "0"), "|").concat(card.year, "|").concat(card.cvv, "')\">\n                <i class=\"fas fa-copy\"></i>\n              </button>\n            </div>\n          ");
      }).join(""), "\n        </div>\n      </div>\n    ");
      return sectionDiv;
    }
  }, {
    key: "copyAllExtrapolations",
    value: function () {
      var _copyAllExtrapolations = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var cardItems, cardsText, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              cardItems = document.querySelectorAll(".extrapolation-section .card-item");
              if (!(cardItems.length === 0)) {
                _context2.n = 1;
                break;
              }
              this.uiManager.showError("No hay extrapolaciones para copiar");
              return _context2.a(2);
            case 1:
              cardsText = Array.from(cardItems).map(function (item) {
                var number = item.querySelector(".card-number").textContent.replace(/\s/g, "");
                var cvv = item.querySelector(".card-cvv").textContent.replace("CVV: ", "");
                var date = item.querySelector(".card-date").textContent;
                var _date$split = date.split("/"),
                  _date$split2 = _slicedToArray(_date$split, 2),
                  month = _date$split2[0],
                  year = _date$split2[1];
                return "".concat(number, "|").concat(month, "|").concat(year, "|").concat(cvv);
              }).join("\n");
              _context2.p = 2;
              _context2.n = 3;
              return this.utils.copyToClipboard(cardsText);
            case 3:
              this.uiManager.showSuccess("".concat(cardItems.length, " extrapolaciones copiadas al portapapeles"));
              _context2.n = 5;
              break;
            case 4:
              _context2.p = 4;
              _t2 = _context2.v;
              this.uiManager.showError("Error al copiar extrapolaciones");
            case 5:
              return _context2.a(2);
          }
        }, _callee2, this, [[2, 4]]);
      }));
      function copyAllExtrapolations() {
        return _copyAllExtrapolations.apply(this, arguments);
      }
      return copyAllExtrapolations;
    }()
  }, {
    key: "exportExtrapolations",
    value: function exportExtrapolations() {
      var cardItems = document.querySelectorAll(".extrapolation-section .card-item");
      if (cardItems.length === 0) {
        this.uiManager.showError("No hay extrapolaciones para exportar");
        return;
      }
      var cardsText = Array.from(cardItems).map(function (item) {
        var number = item.querySelector(".card-number").textContent.replace(/\s/g, "");
        var cvv = item.querySelector(".card-cvv").textContent.replace("CVV: ", "");
        var date = item.querySelector(".card-date").textContent;
        var _date$split3 = date.split("/"),
          _date$split4 = _slicedToArray(_date$split3, 2),
          month = _date$split4[0],
          year = _date$split4[1];
        return "".concat(number, "|").concat(month, "|").concat(year, "|").concat(cvv);
      }).join("\n");

      // Create and download file
      var blob = new Blob([cardsText], {
        type: "text/plain"
      });
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = "extrapolations_".concat(new Date().toISOString().slice(0, 10), ".txt");
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      this.uiManager.showSuccess("".concat(cardItems.length, " extrapolaciones exportadas exitosamente"));
    }
  }]);
}();

/***/ }),

/***/ "./src/features/simple-auto-generator.js":
/*!***********************************************!*\
  !*** ./src/features/simple-auto-generator.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleAutoGenerator: () => (/* binding */ SimpleAutoGenerator)
/* harmony export */ });
/* harmony import */ var _core_ui_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/ui-manager.js */ "./src/core/ui-manager.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Simple Auto Generator Feature
 * Handles simple auto generation functionality
 */



var SimpleAutoGenerator = /*#__PURE__*/function () {
  function SimpleAutoGenerator(apiBaseUrl) {
    _classCallCheck(this, SimpleAutoGenerator);
    this.apiBaseUrl = apiBaseUrl;
    this.uiManager = new _core_ui_manager_js__WEBPACK_IMPORTED_MODULE_0__.UIManager();
    this.utils = new _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils();

    // Simple auto generator state
    this.simpleAutoRunning = false;
    this.simpleCards = [];
    this.simpleStats = {
      total: 0,
      live: 0,
      died: 0,
      unknown: 0
    };
  }
  return _createClass(SimpleAutoGenerator, [{
    key: "setupEventListeners",
    value: function setupEventListeners() {
      // Note: UI elements are commented out in the main app
      // These would be enabled when UI is implemented
      console.log("Simple Auto Generator event listeners would be set up here");
    }
  }, {
    key: "startSimpleAutoGeneration",
    value: function () {
      var _startSimpleAutoGeneration = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              console.log("Starting simple auto generation");

              // Initialize simple generator state
              this.simpleAutoRunning = true;
              this.simpleCards = [];
              this.simpleStats = {
                total: 0,
                live: 0,
                died: 0,
                unknown: 0
              };

              // Update UI controls
              this.updateSimpleControls(true);

              // Start the generation loop
              this.simpleGenerationLoop();
              this.uiManager.showSuccess("Generación automática simple iniciada");
            case 1:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function startSimpleAutoGeneration() {
        return _startSimpleAutoGeneration.apply(this, arguments);
      }
      return startSimpleAutoGeneration;
    }()
  }, {
    key: "stopSimpleAutoGeneration",
    value: function () {
      var _stopSimpleAutoGeneration = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              console.log("Stopping simple auto generation");
              this.simpleAutoRunning = false;
              this.updateSimpleControls(false);
              this.uiManager.showSuccess("Generación automática simple detenida");
            case 1:
              return _context2.a(2);
          }
        }, _callee2, this);
      }));
      function stopSimpleAutoGeneration() {
        return _stopSimpleAutoGeneration.apply(this, arguments);
      }
      return stopSimpleAutoGeneration;
    }()
  }, {
    key: "simpleGenerationLoop",
    value: function () {
      var _simpleGenerationLoop = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _this = this;
        var bin, binInfo, cards, _t;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              if (!this.simpleAutoRunning) {
                _context3.n = 8;
                break;
              }
              _context3.p = 1;
              // Generate random BIN
              bin = this.generateRandomBin();
              console.log("Generated BIN: ".concat(bin));

              // Check BIN with dnschecker API
              _context3.n = 2;
              return this.checkBinWithAPI(bin);
            case 2:
              binInfo = _context3.v;
              if (!(binInfo && binInfo.success)) {
                _context3.n = 4;
                break;
              }
              _context3.n = 3;
              return this.generateCardsForBin(bin, binInfo.data);
            case 3:
              cards = _context3.v;
              // Add cards to results
              cards.forEach(function (card) {
                _this.simpleCards.unshift(card); // Add to beginning
                _this.simpleStats.total++;

                // Update status counts
                if (card.status === "Live") {
                  _this.simpleStats.live++;
                } else if (card.status === "Died") {
                  _this.simpleStats.died++;
                } else {
                  _this.simpleStats.unknown++;
                }
              });

              // Keep only last 1000 cards for performance
              if (this.simpleCards.length > 1000) {
                this.simpleCards = this.simpleCards.slice(-1000);
              }
            case 4:
              _context3.n = 6;
              break;
            case 5:
              _context3.p = 5;
              _t = _context3.v;
              console.error("Error in simple generation loop:", _t);
            case 6:
              _context3.n = 7;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 1000);
              });
            case 7:
              _context3.n = 0;
              break;
            case 8:
              return _context3.a(2);
          }
        }, _callee3, this, [[1, 5]]);
      }));
      function simpleGenerationLoop() {
        return _simpleGenerationLoop.apply(this, arguments);
      }
      return simpleGenerationLoop;
    }()
  }, {
    key: "generateRandomBin",
    value: function generateRandomBin() {
      return this.utils.generateRandomBin();
    }
  }, {
    key: "checkBinWithAPI",
    value: function () {
      var _checkBinWithAPI = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(bin) {
        var response, data, _t2;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              _context4.n = 1;
              return fetch("".concat(this.apiBaseUrl, "/check-bin"), {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  bin: bin
                })
              });
            case 1:
              response = _context4.v;
              _context4.n = 2;
              return response.json();
            case 2:
              data = _context4.v;
              return _context4.a(2, data);
            case 3:
              _context4.p = 3;
              _t2 = _context4.v;
              console.error("Error checking BIN:", _t2);
              return _context4.a(2, null);
          }
        }, _callee4, this, [[0, 3]]);
      }));
      function checkBinWithAPI(_x) {
        return _checkBinWithAPI.apply(this, arguments);
      }
      return checkBinWithAPI;
    }()
  }, {
    key: "generateCardsForBin",
    value: function () {
      var _generateCardsForBin = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(bin, binInfo) {
        var _this2 = this;
        var binFormat, response, data, _t3;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              _context5.p = 0;
              // Create a format based on the BIN
              binFormat = bin + "xxxxxxxxxx"; // 6 digits + 10 x's = 16 total
              _context5.n = 1;
              return fetch("".concat(this.apiBaseUrl, "/generate-cards"), {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  binFormat: binFormat,
                  count: 5 // Generate 5 cards per BIN
                })
              });
            case 1:
              response = _context5.v;
              _context5.n = 2;
              return response.json();
            case 2:
              data = _context5.v;
              if (!data.success) {
                _context5.n = 3;
                break;
              }
              return _context5.a(2, data.data.map(function (card) {
                return _objectSpread(_objectSpread({}, card), {}, {
                  binInfo: binInfo,
                  status: _this2.getRandomStatus() // Simulate status
                });
              }));
            case 3:
              return _context5.a(2, []);
            case 4:
              _context5.p = 4;
              _t3 = _context5.v;
              console.error("Error generating cards for BIN:", _t3);
              return _context5.a(2, []);
          }
        }, _callee5, this, [[0, 4]]);
      }));
      function generateCardsForBin(_x2, _x3) {
        return _generateCardsForBin.apply(this, arguments);
      }
      return generateCardsForBin;
    }()
  }, {
    key: "getRandomStatus",
    value: function getRandomStatus() {
      var statuses = ["Live", "Died", "Unknown"];
      var weights = [0.1, 0.3, 0.6]; // 10% Live, 30% Died, 60% Unknown

      var random = Math.random();
      var cumulativeWeight = 0;
      for (var i = 0; i < statuses.length; i++) {
        cumulativeWeight += weights[i];
        if (random <= cumulativeWeight) {
          return statuses[i];
        }
      }
      return "Unknown";
    }
  }, {
    key: "updateSimpleControls",
    value: function updateSimpleControls(isRunning) {
      // This would update UI controls when implemented
      console.log("Simple controls updated - Running: ".concat(isRunning));
    }
  }, {
    key: "displayAutoStatus",
    value: function displayAutoStatus(statusData) {
      // This would update status display when implemented
      console.log("Simple status updated:", statusData);
    }
  }, {
    key: "updateCardFilters",
    value: function updateCardFilters(statusData) {
      // This would update card filter buttons when implemented
      console.log("Simple card filters updated:", statusData);
    }
  }, {
    key: "setCardFilter",
    value: function setCardFilter(filter) {
      this.currentFilter = filter;
      this.updateCardsTable();
    }
  }, {
    key: "updateCardsTable",
    value: function updateCardsTable(results) {
      // This would update the cards table when implemented
      console.log("Simple cards table updated:", (results === null || results === void 0 ? void 0 : results.length) || this.simpleCards.length);
    }
  }, {
    key: "clearAutoSession",
    value: function () {
      var _clearAutoSession = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              if (confirm("¿Estás seguro de que quieres limpiar todos los resultados?")) {
                _context6.n = 1;
                break;
              }
              return _context6.a(2);
            case 1:
              this.simpleCards = [];
              this.simpleStats = {
                total: 0,
                live: 0,
                died: 0,
                unknown: 0
              };
              this.updateCardsTable([]);
              this.uiManager.showSuccess("Resultados limpiados exitosamente");
            case 2:
              return _context6.a(2);
          }
        }, _callee6, this);
      }));
      function clearAutoSession() {
        return _clearAutoSession.apply(this, arguments);
      }
      return clearAutoSession;
    }()
  }, {
    key: "exportAutoResults",
    value: function () {
      var _exportAutoResults = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var cardsText, blob, url, a;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              if (!(this.simpleCards.length === 0)) {
                _context7.n = 1;
                break;
              }
              this.uiManager.showError("No hay resultados para exportar");
              return _context7.a(2);
            case 1:
              cardsText = this.simpleCards.map(function (card) {
                return "".concat(card.number, "|").concat(card.month.toString().padStart(2, "0"), "|").concat(card.year, "|").concat(card.cvv, "|").concat(card.status);
              }).join("\n"); // Create and download file
              blob = new Blob([cardsText], {
                type: "text/plain"
              });
              url = URL.createObjectURL(blob);
              a = document.createElement("a");
              a.href = url;
              a.download = "simple_auto_results_".concat(new Date().toISOString().slice(0, 10), ".txt");
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              URL.revokeObjectURL(url);
              this.uiManager.showSuccess("".concat(this.simpleCards.length, " resultados exportados exitosamente"));
            case 2:
              return _context7.a(2);
          }
        }, _callee7, this);
      }));
      function exportAutoResults() {
        return _exportAutoResults.apply(this, arguments);
      }
      return exportAutoResults;
    }()
  }, {
    key: "formatUptime",
    value: function formatUptime(ms) {
      return this.utils.formatUptime(ms);
    }

    // Getters for current state
  }, {
    key: "getSimpleCards",
    value: function getSimpleCards() {
      return this.simpleCards;
    }
  }, {
    key: "getSimpleStats",
    value: function getSimpleStats() {
      return this.simpleStats;
    }
  }, {
    key: "isSimpleAutoRunning",
    value: function isSimpleAutoRunning() {
      return this.simpleAutoRunning;
    }
  }]);
}();

/***/ }),

/***/ "./src/features/version-checker.js":
/*!*****************************************!*\
  !*** ./src/features/version-checker.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VersionChecker: () => (/* binding */ VersionChecker)
/* harmony export */ });
/* harmony import */ var _core_ui_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/ui-manager.js */ "./src/core/ui-manager.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Version Checker Feature
 * Handles version checking functionality
 */



var VersionChecker = /*#__PURE__*/function () {
  function VersionChecker(apiBaseUrl) {
    _classCallCheck(this, VersionChecker);
    this.apiBaseUrl = apiBaseUrl;
    this.uiManager = new _core_ui_manager_js__WEBPACK_IMPORTED_MODULE_0__.UIManager();
    this.utils = new _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Utils();
    this.currentVersion = "3.0";
  }
  return _createClass(VersionChecker, [{
    key: "setupEventListeners",
    value: function setupEventListeners() {
      var _this = this;
      // Check Version button
      var checkBtn = document.getElementById("check-version-btn");
      if (checkBtn) {
        checkBtn.addEventListener("click", function () {
          return _this.checkVersion();
        });
      }

      // Update current version display
      this.updateCurrentVersionDisplay();
    }
  }, {
    key: "updateCurrentVersionDisplay",
    value: function updateCurrentVersionDisplay() {
      var currentVersionSpan = document.getElementById("current-version");
      if (currentVersionSpan) {
        currentVersionSpan.textContent = this.currentVersion;
      }
    }
  }, {
    key: "checkVersion",
    value: function () {
      var _checkVersion = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var response, data, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              this.uiManager.showLoading("Buscando actualizaciones...");
              _context.p = 1;
              _context.n = 2;
              return fetch("".concat(this.apiBaseUrl, "/check-version"));
            case 2:
              response = _context.v;
              _context.n = 3;
              return response.json();
            case 3:
              data = _context.v;
              if (response.ok) {
                _context.n = 4;
                break;
              }
              throw new Error(data.error || "Error verificando versión");
            case 4:
              if (!data.success) {
                _context.n = 5;
                break;
              }
              this.displayVersionInfo(data.data);
              if (data.data.hasUpdate) {
                this.uiManager.showSuccess("¡Nueva versión disponible!");
              } else {
                this.uiManager.showSuccess("Estás usando la versión más reciente");
              }
              _context.n = 6;
              break;
            case 5:
              throw new Error(data.error || "Error en la respuesta del servidor");
            case 6:
              _context.n = 8;
              break;
            case 7:
              _context.p = 7;
              _t = _context.v;
              console.error("Error:", _t);
              this.uiManager.showError(_t.message);
            case 8:
              _context.p = 8;
              this.uiManager.hideLoading();
              return _context.f(8);
            case 9:
              return _context.a(2);
          }
        }, _callee, this, [[1, 7, 8, 9]]);
      }));
      function checkVersion() {
        return _checkVersion.apply(this, arguments);
      }
      return checkVersion;
    }()
  }, {
    key: "displayVersionInfo",
    value: function displayVersionInfo(versionData) {
      var _this2 = this;
      var resultsContainer = document.getElementById("version-results");
      var messageDiv = document.getElementById("version-message");
      if (!resultsContainer || !messageDiv) return;

      // Clear previous results
      messageDiv.innerHTML = "";
      var hasUpdate = versionData.hasUpdate;
      var latestVersion = versionData.latestVersion;
      var currentVersion = versionData.currentVersion || this.currentVersion;
      if (hasUpdate) {
        messageDiv.innerHTML = "\n        <div class=\"version-update-available\">\n          <div class=\"update-header\">\n            <i class=\"fas fa-exclamation-triangle\"></i>\n            <h3>\xA1Nueva Versi\xF3n Disponible!</h3>\n          </div>\n          \n          <div class=\"version-comparison\">\n            <div class=\"version-item current\">\n              <span class=\"version-label\">Versi\xF3n Actual:</span>\n              <span class=\"version-number\">".concat(currentVersion, "</span>\n            </div>\n            <div class=\"version-arrow\">\n              <i class=\"fas fa-arrow-right\"></i>\n            </div>\n            <div class=\"version-item latest\">\n              <span class=\"version-label\">Versi\xF3n Disponible:</span>\n              <span class=\"version-number\">").concat(latestVersion, "</span>\n            </div>\n          </div>\n\n          ").concat(versionData.changelog ? "\n            <div class=\"changelog\">\n              <h4><i class=\"fas fa-list\"></i> Novedades:</h4>\n              <div class=\"changelog-content\">\n                ".concat(versionData.changelog.split("\n").map(function (line) {
          return line.trim() ? "<p>\u2022 ".concat(_this2.utils.sanitizeHTML(line.trim()), "</p>") : "";
        }).join(""), "\n              </div>\n            </div>\n          ") : "", "\n\n          <div class=\"update-actions\">\n            <button class=\"btn btn-primary\" onclick=\"window.open('").concat(versionData.downloadUrl || "#", "', '_blank')\">\n              <i class=\"fas fa-download\"></i>\n              Descargar Actualizaci\xF3n\n            </button>\n            <button class=\"btn btn-secondary\" onclick=\"window.open('").concat(versionData.releaseUrl || "#", "', '_blank')\">\n              <i class=\"fas fa-info-circle\"></i>\n              Ver Detalles\n            </button>\n          </div>\n\n          <div class=\"update-info\">\n            <p><strong>Fecha de Lanzamiento:</strong> ").concat(versionData.releaseDate || "No disponible", "</p>\n            <p><strong>Tama\xF1o:</strong> ").concat(versionData.fileSize || "No disponible", "</p>\n          </div>\n        </div>\n      ");
      } else {
        messageDiv.innerHTML = "\n        <div class=\"version-up-to-date\">\n          <div class=\"update-header\">\n            <i class=\"fas fa-check-circle\"></i>\n            <h3>\xA1Est\xE1s Actualizado!</h3>\n          </div>\n          \n          <div class=\"current-version-info\">\n            <p>Est\xE1s usando la versi\xF3n m\xE1s reciente del BINs Generator RH.</p>\n            <div class=\"version-badge\">\n              <span class=\"version-label\">Versi\xF3n Actual:</span>\n              <span class=\"version-number\">".concat(currentVersion, "</span>\n            </div>\n          </div>\n\n          <div class=\"developer-info\">\n            <h4><i class=\"fas fa-user-cog\"></i> Informaci\xF3n del Desarrollador</h4>\n            <div class=\"dev-details\">\n              <p><strong>Desarrollado por:</strong> @RealHackRH_593</p>\n              <p><strong>Telegram:</strong> @MundoNetRH</p>\n              <p><strong>PayPal:</strong> paypal.me/edwinyd</p>\n            </div>\n          </div>\n\n          <div class=\"support-actions\">\n            <button class=\"btn btn-secondary\" onclick=\"window.open('https://t.me/MundoNetRH', '_blank')\">\n              <i class=\"fab fa-telegram\"></i>\n              Contactar Soporte\n            </button>\n            <button class=\"btn btn-secondary\" onclick=\"window.open('https://paypal.me/edwinyd', '_blank')\">\n              <i class=\"fab fa-paypal\"></i>\n              Apoyar Desarrollo\n            </button>\n          </div>\n        </div>\n      ");
      }

      // Add last check info
      var lastCheckDiv = document.createElement("div");
      lastCheckDiv.className = "last-check-info";
      lastCheckDiv.innerHTML = "\n      <p class=\"last-check-text\">\n        <i class=\"fas fa-clock\"></i>\n        \xDAltima verificaci\xF3n: ".concat(new Date().toLocaleString("es-ES"), "\n      </p>\n    ");
      messageDiv.appendChild(lastCheckDiv);

      // Show results container
      resultsContainer.style.display = "block";
    }

    // Method to manually set version (for testing)
  }, {
    key: "setCurrentVersion",
    value: function setCurrentVersion(version) {
      this.currentVersion = version;
      this.updateCurrentVersionDisplay();
    }

    // Method to get current version
  }, {
    key: "getCurrentVersion",
    value: function getCurrentVersion() {
      return this.currentVersion;
    }
  }]);
}();

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Utils: () => (/* binding */ Utils)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Utility Functions
 * Common helper functions used across the application
 */

var Utils = /*#__PURE__*/function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }
  return _createClass(Utils, [{
    key: "detectCardType",
    value:
    /**
     * Detect card type based on BIN
     */
    function detectCardType(bin) {
      var binStr = bin.toString();
      if (binStr.startsWith("4")) {
        return "VISA";
      } else if (binStr.startsWith("5") || binStr.startsWith("2")) {
        return "MASTERCARD";
      } else if (binStr.startsWith("3")) {
        return "AMERICAN EXPRESS";
      } else if (binStr.startsWith("6")) {
        return "DISCOVER";
      }
      return "UNKNOWN";
    }

    /**
     * Format card number with spaces
     */
  }, {
    key: "formatCardNumber",
    value: function formatCardNumber(number) {
      return number.replace(/(.{4})/g, "$1 ").trim();
    }

    /**
     * Validate BIN format
     */
  }, {
    key: "validateBinFormat",
    value: function validateBinFormat(binFormat) {
      // Check if format contains only digits and 'x'
      var validChars = /^[0-9x]+$/i.test(binFormat);

      // Check length (15 for Amex, 16 for others)
      var validLength = binFormat.length === 15 || binFormat.length === 16;

      // Check if it has at least 6 digits at the beginning
      var hasValidPrefix = /^[0-9]{6,}/.test(binFormat);
      return validChars && validLength && hasValidPrefix;
    }

    /**
     * Generate random number within range
     */
  }, {
    key: "randomBetween",
    value: function randomBetween(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * Generate random BIN
     */
  }, {
    key: "generateRandomBin",
    value: function generateRandomBin() {
      var cardTypes = [{
        prefix: "4",
        name: "VISA"
      }, {
        prefix: "5",
        name: "MASTERCARD"
      }, {
        prefix: "2",
        name: "MASTERCARD"
      }, {
        prefix: "3",
        name: "AMEX"
      }];
      var cardType = cardTypes[Math.floor(Math.random() * cardTypes.length)];
      var bin = cardType.prefix;

      // Generate remaining 5 digits for BIN
      for (var i = 0; i < 5; i++) {
        bin += Math.floor(Math.random() * 10);
      }
      return bin;
    }

    /**
     * Copy text to clipboard
     */
  }, {
    key: "copyToClipboard",
    value: (function () {
      var _copyToClipboard = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(text) {
        var textArea, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return navigator.clipboard.writeText(text);
            case 1:
              return _context.a(2, true);
            case 2:
              _context.p = 2;
              _t = _context.v;
              // Fallback for older browsers
              textArea = document.createElement("textarea");
              textArea.value = text;
              document.body.appendChild(textArea);
              textArea.select();
              document.execCommand("copy");
              document.body.removeChild(textArea);
              return _context.a(2, true);
          }
        }, _callee, null, [[0, 2]]);
      }));
      function copyToClipboard(_x) {
        return _copyToClipboard.apply(this, arguments);
      }
      return copyToClipboard;
    }()
    /**
     * Format uptime in milliseconds to readable format
     */
    )
  }, {
    key: "formatUptime",
    value: function formatUptime(ms) {
      var seconds = Math.floor(ms / 1000);
      var minutes = Math.floor(seconds / 60);
      var hours = Math.floor(minutes / 60);
      if (hours > 0) {
        return "".concat(hours, "h ").concat(minutes % 60, "m ").concat(seconds % 60, "s");
      } else if (minutes > 0) {
        return "".concat(minutes, "m ").concat(seconds % 60, "s");
      } else {
        return "".concat(seconds, "s");
      }
    }

    /**
     * Debounce function calls
     */
  }, {
    key: "debounce",
    value: function debounce(func, wait) {
      var timeout;
      return function executedFunction() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        var later = function later() {
          clearTimeout(timeout);
          func.apply(void 0, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    }

    /**
     * Throttle function calls
     */
  }, {
    key: "throttle",
    value: function throttle(func, limit) {
      var inThrottle;
      return function () {
        var args = arguments;
        var context = this;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(function () {
            return inThrottle = false;
          }, limit);
        }
      };
    }

    /**
     * Validate email format
     */
  }, {
    key: "isValidEmail",
    value: function isValidEmail(email) {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    /**
     * Sanitize HTML to prevent XSS
     */
  }, {
    key: "sanitizeHTML",
    value: function sanitizeHTML(str) {
      var temp = document.createElement("div");
      temp.textContent = str;
      return temp.innerHTML;
    }

    /**
     * Format number with thousands separator
     */
  }, {
    key: "formatNumber",
    value: function formatNumber(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    /**
     * Get current timestamp
     */
  }, {
    key: "getCurrentTimestamp",
    value: function getCurrentTimestamp() {
      return new Date().toISOString();
    }

    /**
     * Sleep/delay function
     */
  }, {
    key: "sleep",
    value: function sleep(ms) {
      return new Promise(function (resolve) {
        return setTimeout(resolve, ms);
      });
    }
  }]);
}();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BinsGeneratorApp: () => (/* reexport safe */ _app_js__WEBPACK_IMPORTED_MODULE_0__.BinsGeneratorApp)
/* harmony export */ });
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ "./src/app.js");
/**
 * Main Entry Point
 * Imports and initializes the main application
 */



// Initialize the application when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("Initializing BINs Generator RH - Modular Version");

  // Create global app instance
  window.binsApp = new _app_js__WEBPACK_IMPORTED_MODULE_0__.BinsGeneratorApp();

  // Initialize the application
  window.binsApp.init()["catch"](function (error) {
    console.error("Failed to initialize application:", error);
  });
});

// Export for potential external use

})();

/******/ })()
;
//# sourceMappingURL=script.js.map