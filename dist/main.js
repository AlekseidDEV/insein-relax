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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_btnup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/btnup */ \"./layout/src/modules/btnup.js\");\n/* harmony import */ var _modules_numberdrop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/numberdrop */ \"./layout/src/modules/numberdrop.js\");\n/* harmony import */ var _modules_popupmenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/popupmenu */ \"./layout/src/modules/popupmenu.js\");\n/* harmony import */ var _modules_repairblock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/repairblock */ \"./layout/src/modules/repairblock.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sendForm */ \"./layout/src/modules/sendForm.js\");\n/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/helpers */ \"./layout/src/modules/helpers.js\");\n/* harmony import */ var _modules_privacylink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/privacylink */ \"./layout/src/modules/privacylink.js\");\n/* harmony import */ var _modules_slidertype__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/slidertype */ \"./layout/src/modules/slidertype.js\");\n/* harmony import */ var _modules_formulaitem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/formulaitem */ \"./layout/src/modules/formulaitem.js\");\n/* harmony import */ var _modules_portfolioslider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/portfolioslider */ \"./layout/src/modules/portfolioslider.js\");\n/* harmony import */ var _modules_contractpopup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/contractpopup */ \"./layout/src/modules/contractpopup.js\");\n/* harmony import */ var _modules_popupconsult__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/popupconsult */ \"./layout/src/modules/popupconsult.js\");\n/* harmony import */ var _modules_reviewslider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/reviewslider */ \"./layout/src/modules/reviewslider.js\");\n/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/accordion */ \"./layout/src/modules/accordion.js\");\n/* harmony import */ var _modules_repairmodal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/repairmodal */ \"./layout/src/modules/repairmodal.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_numberdrop__WEBPACK_IMPORTED_MODULE_1__.numbDrop)()\r\nif(window.innerWidth > 576){\r\n    (0,_modules_popupmenu__WEBPACK_IMPORTED_MODULE_2__.popupMenu)('right', 639)\r\n} else if(window.innerWidth <= 576){\r\n    (0,_modules_popupmenu__WEBPACK_IMPORTED_MODULE_2__.popupMenu)('top', 735)\r\n}\r\n(0,_modules_btnup__WEBPACK_IMPORTED_MODULE_0__.btnUpFunc)()\r\n;(0,_modules_repairblock__WEBPACK_IMPORTED_MODULE_3__.repairBlock)()\r\n\r\ndocument.addEventListener('submit', (e) => {\r\n    e.preventDefault()\r\n\r\n    ;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_4__.sendForm)(e.target)\r\n})\r\n\r\ndocument.addEventListener('click', (e) => {\r\n    if(e.target.className === 'link-privacy'){\r\n        (0,_modules_privacylink__WEBPACK_IMPORTED_MODULE_6__.privacyLink)('.popup-privacy')\r\n    } else if(e.target.className === 'transparency-item__img'){\r\n        (0,_modules_contractpopup__WEBPACK_IMPORTED_MODULE_10__.contarctSlider)()\r\n        // *TODO подумать над мобильным слайдером для документов\r\n    } else if(e.target.matches('.button_wide ')){\r\n        (0,_modules_popupconsult__WEBPACK_IMPORTED_MODULE_11__.popupConsult)()\r\n    }\r\n})\r\n;(0,_modules_slidertype__WEBPACK_IMPORTED_MODULE_7__.sliderType)()\r\n;(0,_modules_formulaitem__WEBPACK_IMPORTED_MODULE_8__.formulaItem)()\r\n;(0,_modules_portfolioslider__WEBPACK_IMPORTED_MODULE_9__.portSlider)()\r\n;(0,_modules_reviewslider__WEBPACK_IMPORTED_MODULE_12__.reviewSlider)()\r\n;(0,_modules_accordion__WEBPACK_IMPORTED_MODULE_13__.accordModule)()\r\n;(0,_modules_repairmodal__WEBPACK_IMPORTED_MODULE_14__.repairModule)()\r\n\r\n;(0,_modules_helpers__WEBPACK_IMPORTED_MODULE_5__.maskPhone)('input[name=\"phone\"]')\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://insein-relax/./layout/src/index.js?");

/***/ }),

/***/ "./layout/src/modules/accordion.js":
/*!*****************************************!*\
  !*** ./layout/src/modules/accordion.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   accordModule: () => (/* binding */ accordModule)\n/* harmony export */ });\nconst accordModule = () => {\r\n    const accordion = document.querySelector('.accordion')\r\n\r\n    accordion.addEventListener('click', (e) => {\r\n        if(e.target.matches(\".title_block\")){\r\n            e.target.classList.toggle('msg-active')\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack://insein-relax/./layout/src/modules/accordion.js?");

/***/ }),

/***/ "./layout/src/modules/btnup.js":
/*!*************************************!*\
  !*** ./layout/src/modules/btnup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   btnUpFunc: () => (/* binding */ btnUpFunc)\n/* harmony export */ });\n/* harmony import */ var _smoothscroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smoothscroll */ \"./layout/src/modules/smoothscroll.js\");\n\r\nconst btnUpFunc = () => {\r\n    const btnUp = document.querySelector('.button-footer')\r\n\r\n    btnUp.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n        \r\n        ;(0,_smoothscroll__WEBPACK_IMPORTED_MODULE_0__.smoothScroll)(e.target.hash.slice(1))\r\n    })\r\n}\n\n//# sourceURL=webpack://insein-relax/./layout/src/modules/btnup.js?");

/***/ }),

/***/ "./layout/src/modules/closethanks.js":
/*!*******************************************!*\
  !*** ./layout/src/modules/closethanks.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeThanks: () => (/* binding */ closeThanks)\n/* harmony export */ });\nconst closeThanks = () => {\r\n    const popupThanks = document.querySelector('.popup-thank')\r\n\r\n    popupThanks.style.visibility = 'visible'\r\n\r\n    \r\n    popupThanks.addEventListener('click', (e) => {\r\n        if(e.target === popupThanks){\r\n            popupThanks.style.visibility = 'hidden'\r\n        } else if(e.target.matches('.close, .close-thank')){\r\n            popupThanks.style.visibility = 'hidden'\r\n        }\r\n    })  \r\n}\n\n//# sourceURL=webpack://insein-relax/./layout/src/modules/closethanks.js?");

/***/ }),

/***/ "./layout/src/modules/contractpopup.js":
/*!*********************************************!*\
  !*** ./layout/src/modules/contractpopup.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contarctSlider: () => (/* binding */ contarctSlider)\n/* harmony export */ });\nconst contarctSlider = () => {\r\n    const popupTrasparency = document.querySelector('.popup-transparency')\r\n    const slides = popupTrasparency.querySelectorAll('.popup-transparency-slider__slide')\r\n\r\n    const slideCount = popupTrasparency.querySelector(\".slider-counter-content__current\")\r\n    const slideTotal = popupTrasparency.querySelector(\".slider-counter-content__total\")\r\n\r\n    let count = 0\r\n\r\n    popupTrasparency.style.visibility = 'visible'\r\n    slideCount.textContent = 1\r\n    slideTotal.textContent = slides.length\r\n\r\n    const nextDocum = () => {\r\n        const activeDocs = popupTrasparency.querySelector('.active_transparancy')\r\n\r\n        count++\r\n\r\n        if(count >= slides.length){\r\n            count = 0\r\n        }\r\n\r\n        slideCount.textContent = count + 1\r\n\r\n        activeDocs.classList.remove('active_transparancy')\r\n        slides[count].classList.add('active_transparancy')\r\n\r\n        console.log(count);\r\n    }\r\n\r\n    const prevDocum = () => {\r\n        const activeDocs = popupTrasparency.querySelector('.active_transparancy')\r\n\r\n        count--\r\n\r\n        if(count < 0){\r\n            count = slides.length - 1\r\n        }\r\n\r\n        slideCount.textContent = count + 1\r\n\r\n        activeDocs.classList.remove('active_transparancy')\r\n        slides[count].classList.add('active_transparancy')\r\n\r\n        console.log(count);\r\n    }\r\n\r\n\r\n    popupTrasparency.addEventListener(\"click\", (e) => {\r\n        if(e.target === popupTrasparency || e.target.closest('.close')){\r\n            popupTrasparency.style.visibility = 'hidden'\r\n        } else if(e.target.closest('#transparency_left')){\r\n            prevDocum()\r\n        } else if(e.target.closest('#transparency_right')){\r\n            nextDocum()\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack://insein-relax/./layout/src/modules/contractpopup.js?");

/***/ }),

/***/ "./layout/src/modules/formulaitem.js":
/*!*******************************************!*\
  !*** ./layout/src/modules/formulaitem.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formulaItem: () => (/* binding */ formulaItem)\n/* harmony export */ });\nconst formulaItem = () => {\r\n    const wrapperFormulaBlock = document.querySelector('#formula')\r\n\r\n    const positionIcon = (target, classItem) => {\r\n        const clientItem = target.querySelector(classItem)\r\n        const rect = clientItem.getBoundingClientRect()\r\n\r\n        if(rect.y < 0){\r\n            clientItem.style.bottom = `-${clientItem.clientHeight + 20}px`\r\n            clientItem.classList.add('problems-item__icon_c')\r\n        }\r\n    }\r\n\r\n    const visibleIcon = (target, visible, opacity, indexVisible = '') => {\r\n        const iconPopup = target.querySelector('.formula-item-popup')\r\n\r\n        iconPopup.style.visibility = visible\r\n        iconPopup.style.opacity = opacity\r\n        \r\n        if(indexVisible !== ''){\r\n            iconPopup.style = {}\r\n            iconPopup.classList.remove('problems-item__icon_c')\r\n        }\r\n    }\r\n\r\n    wrapperFormulaBlock.addEventListener('mouseover', (e) => {\r\n       if(e.target.closest('.formula-item__icon')){\r\n            positionIcon(e.target.closest('.formula-item__icon'), \".formula-item-popup\" )\r\n            visibleIcon(e.target.closest('.formula-item__icon'), 'visible', 1)\r\n       }\r\n    })\r\n\r\n    wrapperFormulaBlock.addEventListener('mouseout', (e) => {\r\n        if(e.target.closest('.formula-item__icon')){\r\n             visibleIcon(e.target.closest('.formula-item__icon'), 'hidden', 0, 1)\r\n        }\r\n     })\r\n}\n\n//# sourceURL=webpack://insein-relax/./layout/src/modules/formulaitem.js?");

/***/ }),

/***/ "./layout/src/modules/gallslider.js":
/*!******************************************!*\
  !*** ./layout/src/modules/gallslider.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gallSlider: () => (/* binding */ gallSlider)\n/* harmony export */ });\nconst gallSlider = () => {\r\n    const popupPortfolio = document.querySelector('.popup-portfolio')\r\n    const contTextPopup = document.querySelectorAll('.popup-portfolio-text')\r\n    const slides = document.querySelectorAll('.popup-portfolio-slider__slide')\r\n\r\n    const slideCount = popupPortfolio.querySelector(\".slider-counter-content__current\")\r\n    const slideTotal = popupPortfolio.querySelector(\".slider-counter-content__total\")\r\n\r\n    let count = 0\r\n\r\n    popupPortfolio.style.visibility = 'visible'\r\n\r\n    slideCount.textContent = 1\r\n    slideTotal.textContent = slides.length\r\n\r\n    const nextSlide = () => {\r\n        const activeSlide = document.querySelector('.active_slide_portfolio')\r\n        const activeDesc = document.querySelector('.active-portfolio-text')\r\n\r\n        count++\r\n\r\n        if(count >= slides.length){\r\n            count = 0\r\n        }\r\n\r\n        slideCount.textContent = count + 1\r\n\r\n        activeSlide.classList.remove('active_slide_portfolio')\r\n        slides[count].classList.add('active_slide_portfolio')\r\n\r\n        activeDesc.classList.remove('active-portfolio-text')\r\n        contTextPopup[count].classList.add('active-portfolio-text')\r\n    }\r\n\r\n\r\n    const prevSlide = () => {\r\n        const activeSlide = document.querySelector('.active_slide_portfolio')\r\n        const activeDesc = document.querySelector('.active-portfolio-text')\r\n\r\n        count--\r\n\r\n        if(count < 0){\r\n            count = slides.length - 1\r\n        }\r\n\r\n        slideCount.textContent = count + 1\r\n\r\n        activeSlide.classList.remove('active_slide_portfolio')\r\n        slides[count].classList.add('active_slide_portfolio')\r\n\r\n        activeDesc.classList.remove('active-portfolio-text')\r\n        contTextPopup[count].classList.add('active-portfolio-text')\r\n    }\r\n\r\n\r\n    popupPortfolio.addEventListener('click', (e) => {\r\n        if(e.target === popupPortfolio || e.target.closest('.close')){\r\n            popupPortfolio.style.visibility = 'hidden'\r\n        } else if(e.target.closest('#popup_portfolio_left')){\r\n            prevSlide()\r\n        } else if(e.target.closest('#popup_portfolio_right')){\r\n            nextSlide()\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack://insein-relax/./layout/src/modules/gallslider.js?");

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

/***/ "./layout/src/modules/popupconsult.js":
/*!********************************************!*\
  !*** ./layout/src/modules/popupconsult.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   popupConsult: () => (/* binding */ popupConsult)\n/* harmony export */ });\nconst popupConsult = () => {\r\n    const popupConsul = document.querySelector('.popup-consultation')\r\n\r\n    popupConsul.style.visibility = 'visible'\r\n\r\n    popupConsul.addEventListener('click', (e) => {\r\n        if(e.target === popupConsul || e.target.closest('.close')){\r\n            popupConsul.style.visibility = 'hidden'\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack://insein-relax/./layout/src/modules/popupconsult.js?");

/***/ }),

/***/ "./layout/src/modules/popupmenu.js":
/*!*****************************************!*\
  !*** ./layout/src/modules/popupmenu.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   popupMenu: () => (/* binding */ popupMenu)\n/* harmony export */ });\n/* harmony import */ var _smoothscroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smoothscroll */ \"./layout/src/modules/smoothscroll.js\");\n\r\n\r\nconst popupMenu = (cord, numb) => {\r\n    const btnMenu = document.querySelector('.menu')\r\n    const modalPopup = document.querySelector('.popup-menu')\r\n    const dialogMenu = document.querySelector('.popup-dialog-menu')\r\n    \r\n    const repairModal = document.querySelector('.popup-repair-types')\r\n\r\n    let statePopup = false\r\n\r\n    const changeVisiblePopup = () => {\r\n        if(statePopup){\r\n            modalPopup.style.visibility = 'visible'\r\n            dialogMenu.style.cssText = `${cord}: ${numb}px;`;\r\n        } else{\r\n            modalPopup.style.visibility = 'hidden'\r\n            dialogMenu.style.cssText = `${cord}: 0px;`;\r\n        }\r\n    }\r\n\r\n    btnMenu.addEventListener('click', () => {\r\n        statePopup = true\r\n        changeVisiblePopup()\r\n    })\r\n    modalPopup.addEventListener('click' ,(e) => {\r\n        e.preventDefault()\r\n\r\n       if(e.target === modalPopup || e.target.matches('.close-menu')){\r\n        statePopup = false\r\n        changeVisiblePopup()\r\n       } else if(e.target.className === 'menu-link'){\r\n            (0,_smoothscroll__WEBPACK_IMPORTED_MODULE_0__.smoothScroll)(e.target.hash.slice(1))\r\n            statePopup = false\r\n            changeVisiblePopup()\r\n       } else if(e.target.matches('.menu-link , .no-overflow')){\r\n            statePopup = false\r\n            changeVisiblePopup()\r\n            repairModal.style.visibility = 'visible'\r\n       }\r\n    })\r\n\r\n\r\n}\n\n//# sourceURL=webpack://insein-relax/./layout/src/modules/popupmenu.js?");

/***/ }),

/***/ "./layout/src/modules/portfolioslider.js":
/*!***********************************************!*\
  !*** ./layout/src/modules/portfolioslider.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   portSlider: () => (/* binding */ portSlider)\n/* harmony export */ });\n/* harmony import */ var _gallslider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallslider */ \"./layout/src/modules/gallslider.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./layout/src/modules/helpers.js\");\n\r\n\r\n\r\nconst portSlider = () => {\r\n    const portfolioBlock = document.querySelector('#portfolio')\r\n    const wrapperSlides = document.querySelector('.wrapper-port_slider')\r\n    const overflowContainer = document.querySelector('.portfolio-slider')\r\n    const allSlides = document.querySelectorAll('.portfolio-slider__slide')\r\n\r\n    let prevTranslate = 0\r\n    let initTrans = 0\r\n\r\n    const innerVisibSlides = () => {\r\n        allSlides.forEach((slide) => {\r\n            const rect = slide.getBoundingClientRect()\r\n\r\n            if(rect.x > wrapperSlides.clientWidth + 5){\r\n                slide.classList.add('fade-tab_next')\r\n            } else if(rect.x < 0){\r\n                console.log(slide);\r\n            }\r\n        })\r\n    }\r\n\r\n\r\n    const fadeNext = () => {\r\n        const fadeSlides = document.querySelectorAll('.fade-tab_next')\r\n         \r\n\r\n        // animate({\r\n        //     duration: 200,\r\n        //     timing(timeFraction) {\r\n        //         return timeFraction;\r\n        //     },\r\n        //     draw(progress){\r\n         \r\n        //     },\r\n        // });\r\n        // *TODO: продумать как сделать переключение слайдера\r\n    }\r\n\r\n\r\n    innerVisibSlides()\r\n\r\n    portfolioBlock.addEventListener('click', (e) => {\r\n        if(e.target.className === 'portfolio-slider__slide-frame'){\r\n            (0,_gallslider__WEBPACK_IMPORTED_MODULE_0__.gallSlider)()\r\n        } else if(e.target.closest('#portfolio-arrow_right')){\r\n            fadeNext()\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack://insein-relax/./layout/src/modules/portfolioslider.js?");

/***/ }),

/***/ "./layout/src/modules/privacylink.js":
/*!*******************************************!*\
  !*** ./layout/src/modules/privacylink.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   privacyLink: () => (/* binding */ privacyLink)\n/* harmony export */ });\nconst privacyLink = (classPopup) => {\r\n    const popupPrivacy = document.querySelector(classPopup)\r\n\r\n\r\n    popupPrivacy.style.visibility = 'visible'\r\n    \r\n    popupPrivacy.addEventListener(\"click\", (e) => {\r\n        if(e.target === popupPrivacy){\r\n            popupPrivacy.style.visibility = 'hidden'\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack://insein-relax/./layout/src/modules/privacylink.js?");

/***/ }),

/***/ "./layout/src/modules/repairblock.js":
/*!*******************************************!*\
  !*** ./layout/src/modules/repairblock.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   repairBlock: () => (/* binding */ repairBlock)\n/* harmony export */ });\n/* harmony import */ var _tabsslider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabsslider */ \"./layout/src/modules/tabsslider.js\");\n\r\n\r\nconst repairBlock = () => {\r\n    const repairBlock = document.querySelector('#repair-types')\r\n    const repairModal = document.querySelector('.popup-repair-types')\r\n\r\n    let count = 0\r\n    \r\n    repairBlock.addEventListener('click', (e) => {\r\n        if(e.target.closest('.link-list') && e.target.localName === 'a'){\r\n            repairModal.style.visibility = 'visible'\r\n        } else if(e.target.matches('.repair-types-nav__item')){\r\n            (0,_tabsslider__WEBPACK_IMPORTED_MODULE_0__.tabsSlider)(e.target.classList[2].slice(-1), e.target)\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack://insein-relax/./layout/src/modules/repairblock.js?");

/***/ }),

/***/ "./layout/src/modules/repairmodal.js":
/*!*******************************************!*\
  !*** ./layout/src/modules/repairmodal.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   repairModule: () => (/* binding */ repairModule)\n/* harmony export */ });\nconst repairModule = () => {\r\n    const repairModal = document.querySelector('.popup-repair-types')\r\n\r\n\r\n    // const test = () => {\r\n    //     return fetch('../crm-backend/db.json', {\r\n    //         method: 'GET'\r\n    //     }).then((r) => console.log(r.json()))\r\n    // }\r\n\r\n    // test()\r\n\r\n    const getContent = () => {\r\n        return fetch('../crm-backend/db.json', {\r\n            method: 'GET'\r\n        }).then((r) => r.json())\r\n    }\r\n\r\n    const changeContent = (target) => {\r\n        const activeBtn = document.querySelector('.active_o')\r\n        \r\n        if(!target.matches('.active_o')){\r\n            activeBtn.classList.remove('active_o')\r\n            target.classList.add('active_o')\r\n\r\n            getContent()\r\n            .then((data) => {\r\n                const filteredData = data.filter((item) => item.type === activeBtn.textContent)\r\n\r\n                console.log(filteredData);\r\n            })\r\n            .catch(() => {\r\n                alert('возникла ошибка, попробуйте позже')\r\n            })\r\n        }\r\n    }\r\n\r\n    repairModal.addEventListener('click', (e) => {\r\n        if(e.target === repairModal || e.target.closest('.close')){\r\n            repairModal.style.visibility = 'hidden'\r\n        }else if(e.target.matches('.popup-repair-types-nav__item')){\r\n            changeContent(e.target)\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack://insein-relax/./layout/src/modules/repairmodal.js?");

/***/ }),

/***/ "./layout/src/modules/reviewslider.js":
/*!********************************************!*\
  !*** ./layout/src/modules/reviewslider.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   reviewSlider: () => (/* binding */ reviewSlider)\n/* harmony export */ });\nconst reviewSlider = () => {\r\n    const sliderWrapper = document.querySelector('.reviews-slider-wrap')\r\n    const slides = document.querySelectorAll('.reviews-slider__slide')\r\n\r\n    let count = 0\r\n\r\n    const prevSlide = () => {\r\n        const activeSlide = document.querySelector('.active_review_slide')\r\n\r\n        count--\r\n\r\n        if(count < 0){\r\n            count = slides.length - 1\r\n        }\r\n\r\n        activeSlide.classList.remove('active_review_slide')\r\n        slides[count].classList.add('active_review_slide')\r\n    }\r\n\r\n    const nextSlide = () => {\r\n        const activeSlide = document.querySelector('.active_review_slide')\r\n\r\n        count++\r\n\r\n        if(count >= slides.length){\r\n            count = 0\r\n        }\r\n\r\n        activeSlide.classList.remove('active_review_slide')\r\n        slides[count].classList.add('active_review_slide')\r\n    }\r\n\r\n    sliderWrapper.addEventListener('click', (e) => {\r\n       if(e.target.closest('#reviews-arrow_left')){\r\n            prevSlide()\r\n       } else if(e.target.closest('#reviews-arrow_right')){\r\n            nextSlide()\r\n       }\r\n    })\r\n}\n\n//# sourceURL=webpack://insein-relax/./layout/src/modules/reviewslider.js?");

/***/ }),

/***/ "./layout/src/modules/sendForm.js":
/*!****************************************!*\
  !*** ./layout/src/modules/sendForm.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sendForm: () => (/* binding */ sendForm)\n/* harmony export */ });\n/* harmony import */ var _closethanks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./closethanks */ \"./layout/src/modules/closethanks.js\");\n\r\n\r\nconst sendForm = (form) => {\r\n  const inputs = form.querySelectorAll('input[type=\"text\"]')\r\n  const ckeckBox = form.querySelector('input[type=\"checkbox\"]')\r\n\r\n  const formData = new FormData(form)\r\n  const formBody = {}\r\n\r\n  formData.forEach((value, key) => {\r\n    formBody[key] = value\r\n  })\r\n\r\n  const inputValid = (inputs) => {\r\n    let succes = false\r\n\r\n    inputs.forEach((input) => {\r\n      if (input.value === '') {\r\n        succes = false\r\n      } else {\r\n        succes = true\r\n      }\r\n    })\r\n\r\n    return succes\r\n  }\r\n\r\n\r\n  const sendFormSever = (data) => {\r\n    return fetch(\"https://jsonplaceholder.typicode.com/posts\", {\r\n      method: \"POST\",\r\n      body: JSON.stringify(data),\r\n      headers: {\r\n        \"Content-Type\": \"application/json;charset=utf-8\",\r\n      },\r\n    }).then((r) => r.json())\r\n  }\r\n\r\n  if (inputValid(inputs) && ckeckBox.checked) {\r\n    sendFormSever(formBody)\r\n      .then(() => {\r\n        (0,_closethanks__WEBPACK_IMPORTED_MODULE_0__.closeThanks)()\r\n        inputs.forEach((input) =>\r\n          input.value = ''\r\n        )\r\n        ckeckBox.checked = false\r\n        document.querySelector('.popup-consultation').style.visibility = 'hidden'\r\n      })\r\n      .catch(() => alert('форма не отравлена, на сервере временные неполадки'))\r\n  } else if (inputValid(inputs) && !ckeckBox.checked) {\r\n    alert('Поставьте галочку, на согласие обработки данных')\r\n  } else {\r\n    alert('Заполните поля')\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://insein-relax/./layout/src/modules/sendForm.js?");

/***/ }),

/***/ "./layout/src/modules/slidertype.js":
/*!******************************************!*\
  !*** ./layout/src/modules/slidertype.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sliderType: () => (/* binding */ sliderType)\n/* harmony export */ });\nconst sliderType = () => {\r\n    const sliderWrapper = document.querySelector('.repair-types-slider-wrap')\r\n    const activeSlider = document.querySelector('.active_slider')\r\n    const slides = activeSlider.querySelectorAll('div')\r\n    \r\n    const slideCount = sliderWrapper.querySelector(\".slider-counter-content__current\")\r\n    const slideTotal = sliderWrapper.querySelector(\".slider-counter-content__total\")\r\n\r\n    let count = 0\r\n\r\n    slideCount.textContent = count + 1\r\n    slideTotal.textContent = slides.length\r\n\r\n    const prevSlide = () => {\r\n         const activeSlide = activeSlider.querySelector('.active-slide-repair')\r\n\r\n        count--\r\n\r\n        if(count < 0){\r\n            count = slides.length - 1\r\n        }\r\n\r\n        slideCount.textContent = count + 1\r\n\r\n        activeSlide.classList.remove('active-slide-repair')\r\n        slides[count].classList.add('active-slide-repair')\r\n    }\r\n\r\n    const nextSlide = () => {\r\n        const activeSlide = activeSlider.querySelector('.active-slide-repair')\r\n\r\n        count++\r\n        \r\n        if(count > slides.length - 1){\r\n            count = 0\r\n        }\r\n\r\n        slideCount.textContent = count + 1\r\n\r\n        activeSlide.classList.remove('active-slide-repair')\r\n        slides[count].classList.add('active-slide-repair')\r\n    }\r\n\r\n\r\n    sliderWrapper.addEventListener('click', (e) => {\r\n         if(e.target.closest('#repair-types-arrow_left')){\r\n                prevSlide()\r\n        } else if(e.target.closest('#repair-types-arrow_right')){\r\n                nextSlide()\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack://insein-relax/./layout/src/modules/slidertype.js?");

/***/ }),

/***/ "./layout/src/modules/smoothscroll.js":
/*!********************************************!*\
  !*** ./layout/src/modules/smoothscroll.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   smoothScroll: () => (/* binding */ smoothScroll)\n/* harmony export */ });\nconst smoothScroll = (id) => {\r\n        document.getElementById(id).scrollIntoView({\r\n            behavior: 'smooth', \r\n            block: 'start'\r\n        })\r\n}\n\n//# sourceURL=webpack://insein-relax/./layout/src/modules/smoothscroll.js?");

/***/ }),

/***/ "./layout/src/modules/tabsslider.js":
/*!******************************************!*\
  !*** ./layout/src/modules/tabsslider.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   tabsSlider: () => (/* binding */ tabsSlider)\n/* harmony export */ });\n/* harmony import */ var _slidertype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slidertype */ \"./layout/src/modules/slidertype.js\");\n \r\n\r\nconst tabsSlider = (indexSlider, target) => {\r\n    const activeBtn = document.querySelector('.repair-types-nav__item.active')\r\n    const activeSlider = document.querySelector('.active_slider')\r\n    const slidersType = document.querySelectorAll('.repair-types-slider > div')\r\n    \r\n    activeBtn.classList.remove('active')\r\n    target.classList.add('active')\r\n\r\n    activeSlider.classList.remove('active_slider')\r\n    slidersType[indexSlider - 1].classList.add('active_slider')\r\n\r\n    ;(0,_slidertype__WEBPACK_IMPORTED_MODULE_0__.sliderType)()\r\n}\n\n//# sourceURL=webpack://insein-relax/./layout/src/modules/tabsslider.js?");

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