/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/bootstrap.min.css":
/*!***********************************!*\
  !*** ./src/css/bootstrap.min.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/bootstrap.min.css?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/bootstrap.min.css */ \"./src/css/bootstrap.min.css\");\n/* harmony import */ var _css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventListeners */ \"./src/js/eventListeners.js\");\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/deleteBookmark.js":
/*!**********************************!*\
  !*** ./src/js/deleteBookmark.js ***!
  \**********************************/
/*! exports provided: deleteBookmark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteBookmark\", function() { return deleteBookmark; });\n// Delete bookmark\r\nfunction deleteBookmark(url){\r\n    // Get bookmarks from localStorage\r\n    var bookmarks = JSON.parse(localStorage.getItem(\"bookmarks\"));\r\n    for (var i = 0; i < bookmarks.length; i++){\r\n        if(bookmarks[i].url == url){\r\n            // Remove from array\r\n            bookmarks.splice(i, 1);\r\n        }\r\n    }\r\n    // Re-set back to localStorage\r\n    localStorage.setItem(\"bookmarks\", JSON.stringify(bookmarks));\r\n\r\n    // Re-fetch bookmarks\r\n    fetchBookmarks();\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/deleteBookmark.js?");

/***/ }),

/***/ "./src/js/eventListeners.js":
/*!**********************************!*\
  !*** ./src/js/eventListeners.js ***!
  \**********************************/
/*! exports provided: fetch, submit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetch\", function() { return fetch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"submit\", function() { return submit; });\n/* harmony import */ var _fetchBookmarks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchBookmarks */ \"./src/js/fetchBookmarks.js\");\n/* harmony import */ var _saveBookmark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saveBookmark */ \"./src/js/saveBookmark.js\");\n\r\n\r\n\r\n// Listen for page load\r\nvar fetch = document.addEventListener(\"DOMContentLoaded\", Object(_fetchBookmarks__WEBPACK_IMPORTED_MODULE_0__[\"fetchBookmarks\"])());\r\n\r\n// Listen for form submit\r\nvar submit = document.getElementById('myForm').addEventListener('submit', _saveBookmark__WEBPACK_IMPORTED_MODULE_1__[\"saveBookmark\"]);\n\n//# sourceURL=webpack:///./src/js/eventListeners.js?");

/***/ }),

/***/ "./src/js/fetchBookmarks.js":
/*!**********************************!*\
  !*** ./src/js/fetchBookmarks.js ***!
  \**********************************/
/*! exports provided: fetchBookmarks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchBookmarks\", function() { return fetchBookmarks; });\n/* harmony import */ var _deleteBookmark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteBookmark */ \"./src/js/deleteBookmark.js\");\n\r\n\r\n// Fetch bookmarks\r\nfunction fetchBookmarks(){\r\n    // Get bookmarks from localStorage\r\n    var bookmarks = JSON.parse(localStorage.getItem(\"bookmarks\"));\r\n\r\n    // Get output id\r\n    var bookmarkResults = document.getElementById(\"bookmarksResults\");\r\n\r\n    // Build output\r\n    bookmarkResults.innerHTML = \"\";\r\n    if(localStorage.getItem('bookmarks') === null){\r\n        return;\r\n    } else {\r\n        for(var i = 0; i < bookmarks.length; i++){\r\n            var name = bookmarks[i].name;\r\n            var url = bookmarks[i].url;\r\n        \r\n            bookmarkResults.innerHTML += `<div class=\"well\">\r\n                                                <h3>${name}\r\n                                                <a class=\"btn btn-default\" target=\"_blank\" href=\"http://${url}\">Visit</a>\r\n                                                <a onclick=\"deleteBookmark('${url}')\" class=\"btn btn-danger\" href=\"#\">Delete</a>\r\n                                                </h3>\r\n                                                </div>`;\r\n            \r\n            } \r\n    }\r\n         \r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/fetchBookmarks.js?");

/***/ }),

/***/ "./src/js/saveBookmark.js":
/*!********************************!*\
  !*** ./src/js/saveBookmark.js ***!
  \********************************/
/*! exports provided: saveBookmark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveBookmark\", function() { return saveBookmark; });\n/* harmony import */ var _validateForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validateForm */ \"./src/js/validateForm.js\");\n/* harmony import */ var _fetchBookmarks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchBookmarks */ \"./src/js/fetchBookmarks.js\");\n\r\n\r\n\r\n// Save Bookmark\r\nfunction saveBookmark(e){\r\n    // Get form values\r\n    var siteName = document.getElementById('siteName').value;\r\n    var siteUrl = document.getElementById('siteUrl').value;\r\n  \r\n    if(!Object(_validateForm__WEBPACK_IMPORTED_MODULE_0__[\"validateForm\"])(siteName, siteUrl)){\r\n        return false;\r\n    }\r\n  \r\n    var bookmark = {\r\n      name: siteName,\r\n      url: siteUrl\r\n    }\r\n  \r\n    // Set bookmark\r\n    if(localStorage.getItem('bookmarks') === null){\r\n      // Init array\r\n      var bookmarks = [];\r\n      // Add to array\r\n      bookmarks.push(bookmark);\r\n      // Set to localStorage\r\n      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));\r\n    } else {\r\n      // Get bookmarks from localStorage\r\n      var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));\r\n      // Add bookmark to array\r\n      bookmarks.push(bookmark);\r\n      // Re-set back to localStorage\r\n      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));\r\n    }\r\n  \r\n    // Clear form\r\n    document.getElementById(\"myForm\").reset();\r\n  \r\n    // Re-fetch bookmarks\r\n    Object(_fetchBookmarks__WEBPACK_IMPORTED_MODULE_1__[\"fetchBookmarks\"])();\r\n  \r\n    // Prevent form from submitting\r\n    e.preventDefault();\r\n  }\r\n\r\n  \n\n//# sourceURL=webpack:///./src/js/saveBookmark.js?");

/***/ }),

/***/ "./src/js/validateForm.js":
/*!********************************!*\
  !*** ./src/js/validateForm.js ***!
  \********************************/
/*! exports provided: validateForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateForm\", function() { return validateForm; });\n// Validate form\r\nfunction validateForm(siteName, siteUrl){\r\n    if(!siteName || !siteUrl){\r\n        alert(\"Please fill in the form!\");\r\n        return false;\r\n    }\r\n    \r\n    var expression = /[-a-zA-Z0-9@:%_\\+.~#?&//=]{2,256}\\.[a-z]{2,4}\\b(\\/[-a-zA-Z0-9@:%_\\+.~#?&//=]*)?/gi;\r\n    var regex = new RegExp(expression);\r\n  \r\n    if(!siteUrl.match(regex)){\r\n        alert(\"Please use a valid URL\");\r\n        return false;\r\n    }\r\n\r\n    return true;\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/validateForm.js?");

/***/ })

/******/ });