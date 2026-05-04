"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdaterestaurant"]("main",{

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage */ \"./src/contactPage.js\");\n\n\n\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst contentDiv = document.querySelector('#content')\n\nfunction clearContent() {\n    contentDiv.innerHTML = \"\";\n}\n\n/*\n// An indivdual event listener for e.target.id to nav buttons\n\n// when clicked:\ncontentDiv.addEventListener(\"click\", e => {\n    // 1. clear div#content\n    if (e.target.id === 'home-btn' || e.target.className === 'logo' || e.target.id === 'menu-btn' || e.target.id === 'contact-btn') {\n        clearContent();\n        createHeader(contentDiv);\n    }\n    \n    // 2. call the right function\n    if (e.target.id === 'home-btn' || e.target.className === 'logo') {\n        renderHomePage(contentDiv);\n    } else if (e.target.id === 'menu-btn') {\n        renderMenuPage(contentDiv);\n    } else if (e.target.id === 'contact-btn') {\n        renderContactPage(contentDiv);\n    } else {\n        return;\n    }\n\n}); */\n\n// One event listener to nav buttons\nconst homeBtn = document.querySelector('#home-btn');\nconst menuBtn = document.querySelector('#menu-btn');\nconst contactBtn = document.querySelector('#contact-btn');\n\n// when clicked:\nhomeBtn.addEventListener(\"click\", () => {\n    // 1. clear div#content\n    clearContent();\n    // 2. call the right function\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.createHeader)(contentDiv);\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.renderHomePage)();\n});\n\nmenuBtn.addEventListener(\"click\", () => {\n    // 1. clear div#content\n    clearContent();\n    // 2. call the right function\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.renderHomePage)();\n});\n\ncontactBtn.addEventListener(\"click\", () => {\n    // 1. clear div#content\n    clearContent();\n    // 2. call the right function\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.renderHomePage)();\n});\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?\n}");

/***/ }

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("693e25d96d057a087ef9")
/******/ })();
/******/ 
/******/ }
);