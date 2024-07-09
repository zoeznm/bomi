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

/***/ "./src/page_1top/top.js":
/*!******************************!*\
  !*** ./src/page_1top/top.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_img_building_3x_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/img/building@3x.png */ \"./src/assets/img/building@3x.png\");\n/* harmony import */ var _assets_img_bird_3x_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/bird@3x.png */ \"./src/assets/img/bird@3x.png\");\n/* harmony import */ var _assets_img_cloud_3x_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/cloud@3x.png */ \"./src/assets/img/cloud@3x.png\");\n/* harmony import */ var _assets_img_cloud2_3x_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/img/cloud2@3x.png */ \"./src/assets/img/cloud2@3x.png\");\n/* harmony import */ var _assets_img_sun_3x_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/img/sun@3x.png */ \"./src/assets/img/sun@3x.png\");\n/* harmony import */ var _assets_img_back_3x_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/img/back@3x.png */ \"./src/assets/img/back@3x.png\");\n\n\n\n\n\n\n\n\nconst img1 = document.createElement('img');\nimg1.src = _assets_img_building_3x_png__WEBPACK_IMPORTED_MODULE_0__;\nimg1.alt = 'Image 1';\ndocument.body.appendChild(img1);\n\nconst img2 = document.createElement('img');\nimg2.src = _assets_img_bird_3x_png__WEBPACK_IMPORTED_MODULE_1__;\nimg2.alt = 'Image 2';\ndocument.body.appendChild(img2);\n\nconst img3 = document.createElement('img');\nimg3.src = _assets_img_cloud_3x_png__WEBPACK_IMPORTED_MODULE_2__;\nimg3.alt = 'Image 3';\ndocument.body.appendChild(img3);\n\nconst img4 = document.createElement('img');\nimg1.src = _assets_img_cloud_3x_png__WEBPACK_IMPORTED_MODULE_2__;\nimg1.alt = 'Image 4';\ndocument.body.appendChild(img4);\n\nconst img5 = document.createElement('img');\nimg2.src = _assets_img_cloud2_3x_png__WEBPACK_IMPORTED_MODULE_3__;\nimg2.alt = 'Image 5';\ndocument.body.appendChild(img5);\n\nconst img6 = document.createElement('img');\nimg3.src = _assets_img_sun_3x_png__WEBPACK_IMPORTED_MODULE_4__;\nimg3.alt = 'Image 6';\ndocument.body.appendChild(img6);\n\nconst img7 = document.createElement('img');\nimg1.src = _assets_img_back_3x_png__WEBPACK_IMPORTED_MODULE_5__;\nimg1.alt = 'Image 7';\ndocument.body.appendChild(img7);\n\nconst bodyEl = document.querySelector('body');\nconst focusEl = document.querySelector('#focus');\n\n// first load\nwindow.onload = () => {\n  resetFocus();\n};\n\n// screen resized\nwindow.addEventListener(\"resize\", resizeScreen = () => {\n  resetFocus();\n});\n\ndocument.addEventListener(\"mousemove\", trackMouse = (event) => {\n  const eventX = event.clientX + \"px\";\n  const eventY = event.clientY + \"px\";\n  focusEl.style.background = `radial-gradient(\n    circle ${getScreenAvg() * 0.2}px at ${eventX} ${eventY},\n    rgba(0, 0, 0, 0.01) 0%,\n    rgba(0, 0, 0, 0.5) 70%,\n    rgba(0, 0, 0, 0.96) 100%)`;\n});\n\nlet isEventRunning = false;\ndocument.addEventListener(\"click\", clickFocus = (event) => {\n  if (!isEventRunning) {\n    isEventRunning = true;\n    window.removeEventListener('resize', resizeScreen);\n    document.removeEventListener(\"mousemove\", trackMouse);\n    document.removeEventListener(\"click\", clickFocus);\n\n    const eventX = event.clientX + \"px\";\n    const eventY = event.clientY + \"px\";\n\n    let i = 0, j = 0;\n    // zoomIn 반복 실행 3ms에 0.001씩 100번(300ms)\n    const zoomIn = setInterval(() => {\n      i += 1;\n      focusEl.style.background = `radial-gradient(\n        circle ${getScreenAvg() * (0.2 - (0.001 * i))}px at ${eventX} ${eventY},\n        rgba(0, 0, 0, 0.01) 0%,\n        rgba(0, 0, 0, 0.5) 70%,\n        rgba(0, 0, 0, 0.96) 100%)`;\n    }, 3);\n\n    // zoomIn 반복 끝\n    setTimeout(() => {\n      clearInterval(zoomIn);\n\n      // zoomOut 반복 실행 10ms에 0.02씩 100번(1000ms)\n      const zoomOut = setInterval(() => {\n        j += 1;\n        focusEl.style.background = `radial-gradient(\n          circle ${getScreenAvg() * (0.1 + (0.02 * j))}px at ${eventX} ${eventY},\n          rgba(0, 0, 0, 0.01) 0%,\n          rgba(0, 0, 0, 0.5) 70%,\n          rgba(0, 0, 0, 0.96) 100%)`;\n      }, 10);\n\n      // zoomOut 반복 끝\n      setTimeout(() => {\n        clearInterval(zoomOut);\n        focusEl.style.display = 'none'; // div를 사라지게 만듭니다\n        isEventRunning = false;\n      }, 1000);\n    }, 300);\n  }\n});\n\nfunction resetFocus() {\n  // reset place if reloaded\n  focusEl.style.display = 'block'; // div를 다시 보이게 만듭니다\n  focusEl.style.background = `radial-gradient(\n    circle ${getScreenAvg() * 0.2}px at ${bodyEl.clientWidth * 0.6}px ${bodyEl.clientHeight * 0.3}px,\n    rgba(0, 0, 0, 0.01) 0%,\n    rgba(0, 0, 0, 0.5) 70%,\n    rgba(0, 0, 0, 0.96) 100%)`;\n}\n\nfunction getScreenAvg() {\n  return Math.floor((bodyEl.clientWidth + bodyEl.clientHeight) * 0.5);\n}\n\n\n\n//# sourceURL=webpack://bomi/./src/page_1top/top.js?");

/***/ }),

/***/ "./src/assets/img/back@3x.png":
/*!************************************!*\
  !*** ./src/assets/img/back@3x.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/back@3x.png\";\n\n//# sourceURL=webpack://bomi/./src/assets/img/back@3x.png?");

/***/ }),

/***/ "./src/assets/img/bird@3x.png":
/*!************************************!*\
  !*** ./src/assets/img/bird@3x.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/bird@3x.png\";\n\n//# sourceURL=webpack://bomi/./src/assets/img/bird@3x.png?");

/***/ }),

/***/ "./src/assets/img/building@3x.png":
/*!****************************************!*\
  !*** ./src/assets/img/building@3x.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/building@3x.png\";\n\n//# sourceURL=webpack://bomi/./src/assets/img/building@3x.png?");

/***/ }),

/***/ "./src/assets/img/cloud2@3x.png":
/*!**************************************!*\
  !*** ./src/assets/img/cloud2@3x.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/cloud2@3x.png\";\n\n//# sourceURL=webpack://bomi/./src/assets/img/cloud2@3x.png?");

/***/ }),

/***/ "./src/assets/img/cloud@3x.png":
/*!*************************************!*\
  !*** ./src/assets/img/cloud@3x.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/cloud@3x.png\";\n\n//# sourceURL=webpack://bomi/./src/assets/img/cloud@3x.png?");

/***/ }),

/***/ "./src/assets/img/sun@3x.png":
/*!***********************************!*\
  !*** ./src/assets/img/sun@3x.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/sun@3x.png\";\n\n//# sourceURL=webpack://bomi/./src/assets/img/sun@3x.png?");

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/page_1top/top.js");
/******/ 	
/******/ })()
;