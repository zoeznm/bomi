/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/page_4shoes/shoes.js":
/*!**********************************!*\
  !*** ./src/page_4shoes/shoes.js ***!
  \**********************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function() {\n  var squares = document.querySelectorAll(\".square\");\n\n  squares.forEach(function(square) {\n    square.addEventListener(\"mouseenter\", function() {\n      var randomX = Math.random() * 400 - 200; // -200부터 200 사이의 랜덤한 값\n      var randomY = Math.random() * 400 - 200; // -200부터 200 사이의 랜덤한 값\n      square.style.transform = \"translate(\" + randomX + \"px, \" + randomY + \"px)\";\n    });\n\n    square.addEventListener(\"transitionend\", function() {\n      var rect = square.getBoundingClientRect();\n      if (\n        rect.left + rect.width < 0 || // 왼쪽 벽 밖으로 나갔을 때\n        rect.right - rect.width > window.innerWidth || // 오른쪽 벽 밖으로 나갔을 때\n        rect.top + rect.height < 0 || // 위쪽 벽 밖으로 나갔을 때\n        rect.bottom - rect.height > window.innerHeight // 아래쪽 벽 밖으로 나갔을 때\n      ) {\n        square.style.transition = \"opacity 2s ease\";\n        square.style.opacity = \"0\"; // 천천히 사라지게 함\n      }\n    });\n  });\n});\n\n//! 추가하고싶은 기술\n//! 1. 사각형을 치우면 delete 버튼이 생성돼서 버튼을 누르면 사각형들이 사라지게 하기\n//! 2. 버튼을 누르고 사각형들이 사라지면 wish 신발이 나오게 하기 \n//! 3. 액자 밑에 4~5개의 액자를 두고 액자에 hover를 하면 애니메이션 설정하기 (어떤 애니메이션을 넣을지는 고민 중)\n//! 4.  4~5개의 액자마다 다 다른 애니메이션을 넣기 1. 눈 깜빡 2. 문 열리고 닫히고 3. 투명도 조절 4. 생각해보기 \n\n//# sourceURL=webpack://bomi/./src/page_4shoes/shoes.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/page_4shoes/shoes.js"]();
/******/ 	
/******/ })()
;