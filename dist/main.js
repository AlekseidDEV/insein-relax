/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./layout/src/index.js":
/*!*****************************!*\
  !*** ./layout/src/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_btnup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/btnup */ \"./layout/src/modules/btnup.js\");\n/* harmony import */ var _modules_numberdrop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/numberdrop */ \"./layout/src/modules/numberdrop.js\");\n/* harmony import */ var _modules_popupmenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/popupmenu */ \"./layout/src/modules/popupmenu.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_numberdrop__WEBPACK_IMPORTED_MODULE_1__.numbDrop)()\r\nif(window.innerWidth > 576){\r\n    (0,_modules_popupmenu__WEBPACK_IMPORTED_MODULE_2__.popupMenu)('right', 639)\r\n} else if(window.innerWidth <= 576){\r\n    (0,_modules_popupmenu__WEBPACK_IMPORTED_MODULE_2__.popupMenu)('top', 735)\r\n}\r\n(0,_modules_btnup__WEBPACK_IMPORTED_MODULE_0__.btnUpFunc)()\r\n\r\n\n\n//# sourceURL=webpack://insein-relax/./layout/src/index.js?");

/***/ }),

/***/ "./layout/src/modules/btnup.js":
/*!*************************************!*\
  !*** ./layout/src/modules/btnup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   btnUpFunc: () => (/* binding */ btnUpFunc)\n/* harmony export */ });\n/* harmony import */ var _smoothscroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smoothscroll */ \"./layout/src/modules/smoothscroll.js\");\n\r\nconst btnUpFunc = () => {\r\n    const btnUp = document.querySelector('.button-footer')\r\n\r\n    btnUp.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n        \r\n        ;(0,_smoothscroll__WEBPACK_IMPORTED_MODULE_0__.smoothScroll)(e.target.hash.slice(1))\r\n    })\r\n}\n\n//# sourceURL=webpack://insein-relax/./layout/src/modules/btnup.js?");

/***/ }),

/***/ "./layout/src/modules/helpers.js":
/*!***************************************!*\
  !*** ./layout/src/modules/helpers.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animate: () => (/* binding */ animate),\n/* harmony export */   maskPhone: () => (/* binding */ maskPhone)\n/* harmony export */ });\nconst animate =({timing, draw, duration}) => {\r\n\r\n    let start = performance.now();\r\n  \r\n    requestAnimationFrame(function animate(time) {\r\n      // timeFraction изменяется от 0 до 1\r\n      let timeFraction = (time - start) / duration;\r\n      if (timeFraction > 1) timeFraction = 1;\r\n  \r\n      // вычисление текущего состояния анимации\r\n      let progress = timing(timeFraction);\r\n  \r\n      draw(progress); // отрисовать её\r\n  \r\n      if (timeFraction < 1) {\r\n        requestAnimationFrame(animate);\r\n      }\r\n  \r\n    });\r\n  }\r\n\r\nfunction maskPhone(selector, masked = '+7 (___) ___-__-__') {\r\n    const elems = document.querySelectorAll(selector);\r\n\r\n    function mask(event) {\r\n        const keyCode = event.keyCode;\r\n        const template = masked,\r\n            def = template.replace(/\\D/g, \"\"),\r\n            val = this.value.replace(/\\D/g, \"\");\r\n        let i = 0,\r\n            newValue = template.replace(/[_\\d]/g, function (a) {\r\n                return i < val.length ? val.charAt(i++) || def.charAt(i) : a;\r\n            });\r\n        i = newValue.indexOf(\"_\");\r\n        if (i !== -1) {\r\n            newValue = newValue.slice(0, i);\r\n        }\r\n        let reg = template.substr(0, this.value.length).replace(/_+/g,\r\n            function (a) {\r\n                return \"\\\\d{1,\" + a.length + \"}\";\r\n            }).replace(/[+()]/g, \"\\\\$&\");\r\n        reg = new RegExp(\"^\" + reg + \"$\");\r\n        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {\r\n            this.value = newValue;\r\n        }\r\n        if (event.type === \"blur\" && this.value.length < 5) {\r\n            this.value = \"\";\r\n        }\r\n\r\n    }\r\n\r\n    for (const elem of elems) {\r\n        elem.addEventListener(\"input\", mask);\r\n        elem.addEventListener(\"focus\", mask);\r\n        elem.addEventListener(\"blur\", mask);\r\n    }\r\n\r\n}\r\n  \r\n  \r\n  \n\n//# sourceURL=webpack://insein-relax/./layout/src/modules/helpers.js?");

/***/ }),

/***/ "./layout/src/modules/numberdrop.js":
/*!******************************************!*\
  !*** ./layout/src/modules/numberdrop.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   numbDrop: () => (/* binding */ numbDrop)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./layout/src/modules/helpers.js\");\n\r\n\r\nconst numbDrop = () => {\r\n    const contactBlock = document.querySelector(\".header-contacts\")\r\n    const accordion = document.querySelector('.header-contacts__phone-number-accord')\r\n    const hideNumber = accordion.querySelector('a')\r\n\r\n    let clicker = false\r\n\r\n    const dropDown = (arrow) => {\r\n        clicker = !clicker\r\n\r\n        if(clicker){\r\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 100,\r\n                timing(timeFraction) {\r\n                    return timeFraction;\r\n                },\r\n                draw(progress) {\r\n                    arrow.style.transform = `rotate(${progress * 180}deg)`\r\n                    accordion.style.position = 'static'\r\n                    hideNumber.style.opacity = `${progress * 1}`\r\n                },\r\n            });\r\n        }else{\r\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 100,\r\n                timing(timeFraction) {\r\n                    return timeFraction;\r\n                },\r\n                draw(progress) {\r\n                    arrow.style.transform = `rotate(${180 - progress * 180}deg)`\r\n                    hideNumber.style.opacity = `${1 - progress * 1}`\r\n                   \r\n                    if(hideNumber.style.opacity === '0'){\r\n                        accordion.style.position = 'absolute'\r\n                    }\r\n                },\r\n            });\r\n        }\r\n    }\r\n\r\n    contactBlock.addEventListener('click', (e) => {\r\n        if(e.target.localName === 'img'){\r\n            dropDown(e.target)\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack://insein-relax/./layout/src/modules/numberdrop.js?");

/***/ }),

/***/ "./layout/src/modules/popupmenu.js":
/*!*****************************************!*\
  !*** ./layout/src/modules/popupmenu.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   popupMenu: () => (/* binding */ popupMenu)\n/* harmony export */ });\n/* harmony import */ var _smoothscroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smoothscroll */ \"./layout/src/modules/smoothscroll.js\");\n\r\n\r\nconst popupMenu = (cord, numb) => {\r\n    const btnMenu = document.querySelector('.menu')\r\n    const modalPopup = document.querySelector('.popup-menu')\r\n    const dialogMenu = document.querySelector('.popup-dialog-menu')\r\n\r\n    let statePopup = false\r\n\r\n    const changeVisiblePopup = () => {\r\n        if(statePopup){\r\n            modalPopup.style.visibility = 'visible'\r\n            dialogMenu.style.cssText = `${cord}: ${numb}px;`;\r\n        } else{\r\n            modalPopup.style.visibility = 'hidden'\r\n            dialogMenu.style.cssText = `${cord}: 0px;`;\r\n        }\r\n    }\r\n\r\n    btnMenu.addEventListener('click', () => {\r\n        statePopup = true\r\n        changeVisiblePopup()\r\n    })\r\n    modalPopup.addEventListener('click' ,(e) => {\r\n        e.preventDefault()\r\n\r\n\r\n        \r\n\r\n       if(e.target === modalPopup || e.target.matches('.close-menu')){\r\n        statePopup = false\r\n        changeVisiblePopup()\r\n       } else if(e.target.className === 'menu-link'){\r\n            (0,_smoothscroll__WEBPACK_IMPORTED_MODULE_0__.smoothScroll)(e.target.hash.slice(1))\r\n            statePopup = false\r\n            changeVisiblePopup()\r\n       }\r\n    })\r\n\r\n\r\n}\n\n//# sourceURL=webpack://insein-relax/./layout/src/modules/popupmenu.js?");

/***/ }),

/***/ "./layout/src/modules/smoothscroll.js":
/*!********************************************!*\
  !*** ./layout/src/modules/smoothscroll.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   smoothScroll: () => (/* binding */ smoothScroll)\n/* harmony export */ });\nconst smoothScroll = (id) => {\r\n        document.getElementById(id).scrollIntoView({\r\n            behavior: 'smooth', \r\n            block: 'start'\r\n        })\r\n}\n\n//# sourceURL=webpack://insein-relax/./layout/src/modules/smoothscroll.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./layout/src/index.js");
/******/ 	
/******/ })()
;