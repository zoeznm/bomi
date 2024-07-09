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

/***/ "./src/page_3bag/bag.js":
/*!******************************!*\
  !*** ./src/page_3bag/bag.js ***!
  \******************************/
/***/ (() => {

eval("console.log(\"hello\")// ! 팝업창 \ndocument.addEventListener('DOMContentLoaded', (event) => {\n  const popup = document.getElementById('popup');\n  const closePopupBtn = document.getElementById('closePopupBtn');\n\n  // 페이지 로드 시 팝업 창을 표시\n  popup.style.display = 'block';\n\n  closePopupBtn.addEventListener('click', () => {\n    popup.style.display = 'none';\n  });\n\n  window.addEventListener('click', (event) => {\n    if (event.target === popup) {\n      popup.style.display = 'none';\n    }\n  });\n});\n\n// ! enter 클릭시 text 나오게 하기 \nvar currentIndex = 0;\ndocument.addEventListener(\"keydown\", function(event) {\n    if (event.key === \"Enter\") {\n        var currentText = document.getElementById(\"text\" + (currentIndex + 1));\n        if (currentText) {\n            currentText.style.display = \"block\";\n            currentIndex++;\n            currentText.scrollIntoView({ behavior: \"smooth\", block: \"center\", inline: \"nearest\" });\n        }\n    }\n});\n\nlet currentView = 'home';\nlet enterCount = 0; // Enter 키 누른 횟수를 저장하는 변수\nlet isSwitched = false; // 화면이 전환되었는지를 추적하는 변수\n\ndocument.addEventListener('keydown', function(event) {\n  if (event.key === 'Enter' && !isSwitched) {\n    enterCount++;\n    if (enterCount === 6) {\n      toggleView();\n      enterCount = 0; // 카운트를 리셋하여 다시 6번 셀 수 있도록 합니다.\n    }\n  }\n});\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const inputContainer = document.getElementById('input-container');\n  const enterZone = document.querySelector('.enterzone');\n  const words = [\"wishlist\", \"lemaire\", \"amomento\", \"heritagefloss\", \"032c\", \"kapital\", \"THX☻\"];\n  const infoTexts = [\n    '<span>▶ <a href=\"https://www.lemaire.fr/products/mini-fortune-croissant-bag-soft-nappa-leather-dark-chocolate\" target=\"_blank\">lemaire</a> &nbsp; : MINI FORTUNE CROISSANT BAG</span>',\n    '<span>▶ <a href=\"https://example.com/amomento\" target=\"_blank\">amomento</a> &nbsp; : HAND MADE BIG CROCHET BAG</span>',\n    '<span>▶ <a href=\"https://example.com/heritagefloss\" target=\"_blank\">heritagefloss</a> &nbsp; : NYLON WASHER SPORTS BAG</span>',\n    '<span>▶ <a href=\"https://example.com/032c\" target=\"_blank\">032c</a> &nbsp; : \\'TEAM\\' TAG SHOULDER BAG</span>',\n    '<span>▶ <a href=\"https://example.com/kapital\" target=\"_blank\">kapital</a> &nbsp; : 箔キャンバス　ブリックツールBAG</span>'\n  ];\n\n  const clickText = \"click the text\";\n  let index = 0;\n\n  // Function to create a new input box\n  function createNewInput() {\n    const newInput = document.createElement('input');\n    newInput.type = 'text';\n    newInput.maxLength = words[index].length;\n    newInput.placeholder = words[index];\n    newInput.style.setProperty('--n', words[index].length);\n    inputContainer.appendChild(newInput);\n    newInput.focus(); // Focus the new input\n\n    // Event listener to handle input submission\n    newInput.addEventListener('keydown', (event) => {\n      if (event.key === 'Enter') {\n        event.preventDefault(); // Prevent default behavior (form submission)\n        const currentText = newInput.value.trim().toLowerCase();\n        if (currentText === words[index]) {\n          // Show corresponding infoText in enterZone\n          const infoP = document.createElement('p');\n          infoP.className = 'enter1';\n          infoP.innerHTML = `${infoTexts[index]} &nbsp; : ${clickText}`;\n          enterZone.appendChild(infoP);\n\n          newInput.remove(); // Remove current input\n          index++;\n          if (index < words.length) {\n            createNewInput(); // Create next input\n          } else {\n            // Show enterZone when all inputs are correct\n            enterZone.style.display = 'block';\n          }\n        } else {\n          // Incorrect input: Show alert and keep the input box\n          alert('다시 쓰세요!');\n          newInput.value = ''; // Clear input value\n          newInput.focus(); // Focus back on the input\n        }\n      }\n    });\n  }\n\n  // Initial setup: hide enterZone and create the first input box\n\n  createNewInput();\n});\n\n\n\n\n\n//# sourceURL=webpack://bomi/./src/page_3bag/bag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/page_3bag/bag.js"]();
/******/ 	
/******/ })()
;