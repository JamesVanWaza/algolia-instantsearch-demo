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

/***/ "./src/js/contacts.js":
/*!****************************!*\
  !*** ./src/js/contacts.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! algoliasearch/lite */ \"./node_modules/algoliasearch/dist/algoliasearch-lite.umd.js\");\n/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(algoliasearch_lite__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var instantsearch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! instantsearch.js */ \"./node_modules/instantsearch.js/es/index.js\");\n/* harmony import */ var instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! instantsearch.js/es/widgets */ \"./node_modules/instantsearch.js/es/widgets/search-box/search-box.js\");\n/* harmony import */ var instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! instantsearch.js/es/widgets */ \"./node_modules/instantsearch.js/es/widgets/hits/hits.js\");\n/* harmony import */ var instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! instantsearch.js/es/widgets */ \"./node_modules/instantsearch.js/es/widgets/refinement-list/refinement-list.js\");\n/* harmony import */ var instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! instantsearch.js/es/widgets */ \"./node_modules/instantsearch.js/es/widgets/stats/stats.js\");\n/* harmony import */ var instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! instantsearch.js/es/widgets */ \"./node_modules/instantsearch.js/es/widgets/hits-per-page/hits-per-page.js\");\n/** Algolia JS **/\n\n\n/** InstantsearchJS */\n\n\n/** InstantsearchJS Widgets */\n\nvar searchClient = algoliasearch_lite__WEBPACK_IMPORTED_MODULE_0___default()('N5OLC87R9A', '4ec613d58d623dba86b7fa0ca70cb116');\nvar search = (0,instantsearch_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n  indexName: 'TheContacts',\n  searchClient: searchClient\n});\nif (search) {\n  search.addWidgets([(0,instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n    container: '#contacts',\n    placeholder: 'Search for contacts'\n  }), (0,instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n    container: '#hits',\n    templates: {\n      item: \"\\n                    <article>\\n                        <h1>{{#helpers.highlight}}{ \\\"attribute\\\": \\\"firstname\\\"}{{/helpers.highlight}} \\n                        {{#helpers.highlight}}{ \\\"attribute\\\": \\\"lastname\\\" }{{/helpers.highlight}}</h1>\\n                        <p>{{#helpers.highlight}}{ \\\"attribute\\\": \\\"company\\\" }{{/helpers.highlight}}</p>\\n                        <p>{{#helpers.highlight}}{ \\\"attribute\\\": \\\"email\\\" }{{/helpers.highlight}}</p>\\n                        <p>{{#helpers.highlight}}{ \\\"attribute\\\": \\\"phone\\\" }{{/helpers.highlight}}</p>\\n                        <p>{{#helpers.highlight}}{ \\\"attribute\\\": \\\"address\\\" }{{/helpers.highlight}}</p>\\n                        <p>{{#helpers.highlight}}{ \\\"attribute\\\": \\\"city\\\" }{{/helpers.highlight}}</p>\\n                        <p>{{#helpers.highlight}}{ \\\"attribute\\\": \\\"postcode\\\" }{{/helpers.highlight}}</p>\\n                        <p>{{#helpers.highlight}}{ \\\"attribute\\\": \\\"country\\\" }{{/helpers.highlight}}</p>\\n                    </article>\\n                \"\n    }\n  }), (0,instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n    container: '#refinement-list',\n    attribute: 'brand',\n    searchablePlaceholder: 'Search our products'\n  }), (0,instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n    container: '#stats'\n  }), (0,instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n    container: '#hits-per-page',\n    items: [{\n      label: '12 hits per page',\n      value: 12,\n      \"default\": true\n    }, {\n      label: '24 hits per page',\n      value: 24\n    }]\n  })]);\n}\nsearch.start();\n\n//# sourceURL=webpack://algolia-instantsearch-demo/./src/js/contacts.js?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"contacts": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkalgolia_instantsearch_demo"] = self["webpackChunkalgolia_instantsearch_demo"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_algoliasearch_dist_algoliasearch-lite_umd_js-node_modules_instantsearch_-50985f","vendors-node_modules_instantsearch_js_es_widgets_stats_stats_js","vendors-node_modules_instantsearch_js_es_widgets_refinement-list_refinement-list_js","vendors-node_modules_instantsearch_js_es_widgets_hits-per-page_hits-per-page_js"], () => (__webpack_require__("./src/js/contacts.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;