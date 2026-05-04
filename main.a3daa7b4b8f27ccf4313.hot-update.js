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

/***/ "./src/components.js"
/*!***************************!*\
  !*** ./src/components.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createButton: () => (/* binding */ createButton),\n/* harmony export */   createDivWrapper: () => (/* binding */ createDivWrapper),\n/* harmony export */   createImage: () => (/* binding */ createImage),\n/* harmony export */   createTextElement: () => (/* binding */ createTextElement)\n/* harmony export */ });\nfunction createButton(label, idName) {\n    const button = document.createElement('button');\n    button.textContent = label;\n    button.setAttribute('id', idName);\n\n    return button;\n}\n\nfunction createTextElement(elementType, text, className = null) {\n    const element = document.createElement(elementType);\n    element.textContent = text;\n\n    if (className) {\n        element.setAttribute('class', className);\n    }\n    return element;\n}\n\nfunction createImage(src, alt, width, height, className = null) {\n    const image = document.createElement('img');\n    image.src = src;\n    image.alt = alt;\n    image.width = width;\n    image.height = height;\n\n    if (className) {\n        image.setAttribute('class', className);\n    }\n    return image;\n}\n\nfunction createDivWrapper(className = null) {\n    const div = document.createElement('div');\n\n    if (className) {\n        div.setAttribute('class', className);\n    }\n    return div;\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/components.js?\n}");

/***/ }

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d1c9d13ffe1eb7a7c864")
/******/ })();
/******/ 
/******/ }
);