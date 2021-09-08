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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://03-webpack-inicial/./src/styles.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_componentes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/componentes */ \"./src/js/componentes.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n// import { cargarPokemon } from './js/componentes';\n\n\n(0,_js_componentes__WEBPACK_IMPORTED_MODULE_0__.init)();\n\n\n\n\n//# sourceURL=webpack://03-webpack-inicial/./src/index.js?");

/***/ }),

/***/ "./src/js/componentes.js":
/*!*******************************!*\
  !*** ./src/js/componentes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cargarPokemon\": () => (/* binding */ cargarPokemon),\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\nconst urlPokeAPI = 'https://pokeapi.co/api/v2/pokemon';\r\nconst divPerfil = document.querySelector('.perfil');\r\n\r\nfunction getRandomInt(min, max) {\r\n    return Math.floor(Math.random() * (max - min)) + min;\r\n}\r\n\r\n\r\nconst cargarPokemon = async() => {\r\n\r\n    //fetc-data\r\n    const resp = await fetch(`${urlPokeAPI}/${getRandomInt(1,150)}`);\r\n    const data = await resp.json();\r\n\r\n    //nombre pokemon\r\n    let namePoke = data.name;\r\n    //foto de pokemon\r\n    let fotoPoke = data.sprites.other.dream_world.front_default;\r\n    //Experiencia de pokemon\r\n    let expPoke = data.base_experience;\r\n    let attack = data.stats[1].base_stat;\r\n    let special = data.stats[3].base_stat;\r\n    let defense = data.stats[2].base_stat;\r\n    \r\n\r\n    let tarjetaPokeHTML = `\r\n                <img src=\"${fotoPoke}\" class=\"foto-perfil\" alt=\"foto perfil\">\r\n                <h2 class=\"nombre-perfil\">${namePoke}</h2>\r\n                <p class=\"experiencePoke\">${expPoke}xp</p>\r\n                <div class=\"habilidades\">\r\n                <p class=\"attack\">Ataque</p>\r\n                <p class=\"special-attack\">Ataque Especial</p>\r\n                <p class=\"defense\">Defensa</p>                     \r\n                <h3 class=\"n-attack\">${attack}</h3>\r\n                <h3 class=\"n-special\">${special}</h3>\r\n                <h3 class=\"n-defense\">${defense}</h3>`;\r\n    divPerfil.innerHTML = tarjetaPokeHTML\r\n\r\n\r\n}\r\n\r\nconst init = () => {\r\n    cargarPokemon();\r\n    \r\n}\r\n\n\n//# sourceURL=webpack://03-webpack-inicial/./src/js/componentes.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;