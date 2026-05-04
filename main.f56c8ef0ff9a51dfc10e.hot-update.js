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

/***/ "./src/contactPage.js"
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderContactSection),\n/* harmony export */   loadContactPage: () => (/* binding */ loadContactPage)\n/* harmony export */ });\n/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components.js */ \"./src/components.js\");\n/* harmony import */ var _images_kobu_agency_FyvE6XPs5gk_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/kobu-agency-FyvE6XPs5gk-unsplash.jpg */ \"./src/images/kobu-agency-FyvE6XPs5gk-unsplash.jpg\");\n\n\n\nconst loadContactPage = () => {\n    const content = document.getElementById('content');\n    const div = document.createElement('div');\n\n    // Add Text, classes, etc\n    content.appendChild(div);\n}\n\n\n\nconst textData = {\n    email: {\n        heading: 'Email',\n        info: 'mynameisbarry@.com'\n    },\n\n    phone: {\n        heading: 'Phone',\n        info: '123-456-789'\n    },\n\n    address: {\n        heading: 'Address',\n        info: '456 pancake street, star 124535'\n    },\n\n    hours: {\n        heading: 'Hours',\n        info: 'Mon - Fri: 11am - 6pm'\n    }\n}\n\nconst imageData = {\n    map: {\n        src: _images_kobu_agency_FyvE6XPs5gk_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__,\n        alt: 'Map of cities',\n        width: '400',\n        height: '400',\n    }\n}\n\n\n// Page Structure\nfunction createHeading() {\n    const headerWrapper = _components_js__WEBPACK_IMPORTED_MODULE_0__.createDivWrapper('header');\n    const logo = _components_js__WEBPACK_IMPORTED_MODULE_0__.createTextElement('h1', 'The Restaurant');\n    const btnWrapper = _components_js__WEBPACK_IMPORTED_MODULE_0__.createDivWrapper('button-wrapper');\n    const homeBtn = _components_js__WEBPACK_IMPORTED_MODULE_0__.createButton('Home', 'home-btn');\n    const menuBtn = _components_js__WEBPACK_IMPORTED_MODULE_0__.createButton('Menu', 'menu-btn');\n    const contactBtn = _components_js__WEBPACK_IMPORTED_MODULE_0__.createButton('Contact', 'contact-btn');\n    const contactHeading = _components_js__WEBPACK_IMPORTED_MODULE_0__.createDivWrapper('contact-heading');\n    const contactTitle = _components_js__WEBPACK_IMPORTED_MODULE_0__.createTextElement('h1', 'contact');\n    contactHeading.appendChild(contactTitle);\n\n    btnWrapper.append(homeBtn, menuBtn, contactBtn);\n    headerWrapper.append(logo, btnWrapper)\n\n    return contactHeading;\n}\n\nfunction createContactDetails(textObject) {\n    const contactWrapper = _components_js__WEBPACK_IMPORTED_MODULE_0__.createDivWrapper('contact-wrapper');\n\n    // Loop\n    for (const key in textObject) {\n        const heading = _components_js__WEBPACK_IMPORTED_MODULE_0__.createTextElement('h2', textObject[key].heading);\n        const info = _components_js__WEBPACK_IMPORTED_MODULE_0__.createTextElement('p', textObject[key].info);\n        contactWrapper.append(heading, info);\n    }\n\n    return contactWrapper;\n}\n\nfunction createMap() {\n    const imageHolder = _components_js__WEBPACK_IMPORTED_MODULE_0__.createDivWrapper('map-holder');\n    const map = _components_js__WEBPACK_IMPORTED_MODULE_0__.createImage(imageData.map.src, imageData.map.alt, imageData.map.width, imageData.map.height, 'map');\n\n    imageHolder.appendChild(map);\n\n    return imageHolder;\n}\n\nfunction renderContactSection(parentElement) {\n    const contactSection = _components_js__WEBPACK_IMPORTED_MODULE_0__.createDivWrapper('contact-section');\n\n    contactSection.append(createHeading(), createContactDetails(textData), createMap());\n\n    parentElement.append(contactSection);\n}\n\n//# sourceURL=webpack://restaurant/./src/contactPage.js?\n}");

/***/ }

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("042f8b9bff7b2bf4c3b5")
/******/ })();
/******/ 
/******/ }
);