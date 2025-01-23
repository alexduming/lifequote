"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/QuoteCard.tsx":
/*!**************************************!*\
  !*** ./src/components/QuoteCard.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ QuoteCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_BookmarkPlus_Heart_Share2_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=BookmarkPlus,Heart,Share2!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/heart.js\");\n/* harmony import */ var _barrel_optimize_names_BookmarkPlus_Heart_Share2_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=BookmarkPlus,Heart,Share2!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/bookmark-plus.js\");\n/* harmony import */ var _barrel_optimize_names_BookmarkPlus_Heart_Share2_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=BookmarkPlus,Heart,Share2!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/share-2.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _config_translations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config/translations */ \"(app-pages-browser)/./src/config/translations.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nfunction QuoteCard(param) {\n    let { quote, author, authorTitle, category, likes = 0, isLiked = false, language = \"en\" } = param;\n    const t = _config_translations__WEBPACK_IMPORTED_MODULE_3__.translations[language];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card p-6 group bg-white rounded-xl shadow-sm hover:shadow-md transition-all\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"blockquote\", {\n                className: \"text-xl font-display text-dark-800 mb-6 relative leading-relaxed\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"absolute -top-4 -left-2 text-6xl text-primary-200/50 font-display select-none\",\n                        children: '\"'\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"relative z-10\",\n                        children: quote[language]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-start justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"/author/\".concat(author.en.toLowerCase().replace(/\\s+/g, \"-\")),\n                                className: \"font-display font-medium text-primary-600 hover:text-primary-700 transition-colors\",\n                                children: author[language]\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this),\n                            authorTitle && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-dark-500 mt-1 font-light\",\n                                children: authorTitle[language]\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/category/\".concat(category),\n                        className: \"text-sm px-3 py-1 rounded-full bg-primary-50 text-primary-700 hover:bg-primary-100 transition-colors font-medium\",\n                        children: t.categories[category]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between mt-6 pt-4 border-t border-dark-100\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"flex items-center space-x-1.5 text-dark-500 hover:text-primary-600 transition-colors relative group/btn\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BookmarkPlus_Heart_Share2_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                size: 18,\n                                className: \"transition-all duration-300 transform group-hover:scale-110 \".concat(isLiked ? \"fill-current text-red-500\" : \"\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-sm font-medium\",\n                                children: likes\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"absolute -top-10 left-1/2 -translate-x-1/2 bg-dark-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity\",\n                                children: t.actions.like\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center space-x-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"text-dark-400 hover:text-primary-600 transition-colors relative group/btn\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BookmarkPlus_Heart_Share2_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        size: 18,\n                                        className: \"transform group-hover:scale-110 transition-transform duration-300\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"absolute -top-10 left-1/2 -translate-x-1/2 bg-dark-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap\",\n                                        children: t.actions.save\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"text-dark-400 hover:text-primary-600 transition-colors relative group/btn\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BookmarkPlus_Heart_Share2_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        size: 18,\n                                        className: \"transform group-hover:scale-110 transition-transform duration-300\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"absolute -top-10 left-1/2 -translate-x-1/2 bg-dark-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap\",\n                                        children: t.actions.share\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_c = QuoteCard;\nvar _c;\n$RefreshReg$(_c, \"QuoteCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1F1b3RlQ2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUUwQjtBQUNpQztBQUM5QjtBQUMrQztBQWlCN0QsU0FBU00sVUFBVSxLQVFqQjtRQVJpQixFQUNoQ0MsS0FBSyxFQUNMQyxNQUFNLEVBQ05DLFdBQVcsRUFDWEMsUUFBUSxFQUNSQyxRQUFRLENBQUMsRUFDVEMsVUFBVSxLQUFLLEVBQ2ZDLFdBQVcsSUFBSSxFQUNBLEdBUmlCO0lBU2hDLE1BQU1DLElBQUlULDhEQUFZLENBQUNRLFNBQVM7SUFFaEMscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7OzBCQUViLDhEQUFDQztnQkFBV0QsV0FBVTs7a0NBQ3BCLDhEQUFDRTt3QkFBS0YsV0FBVTtrQ0FBZ0Y7Ozs7OztrQ0FDaEcsOERBQUNFO3dCQUFLRixXQUFVO2tDQUFpQlQsS0FBSyxDQUFDTSxTQUFTOzs7Ozs7Ozs7Ozs7MEJBSWxELDhEQUFDRTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEOzswQ0FDQyw4REFBQ1gsaURBQUlBO2dDQUNIZSxNQUFNLFdBQXdELE9BQTdDWCxPQUFPWSxFQUFFLENBQUNDLFdBQVcsR0FBR0MsT0FBTyxDQUFDLFFBQVE7Z0NBQ3pETixXQUFVOzBDQUVUUixNQUFNLENBQUNLLFNBQVM7Ozs7Ozs0QkFFbEJKLDZCQUNDLDhEQUFDYztnQ0FBRVAsV0FBVTswQ0FDVlAsV0FBVyxDQUFDSSxTQUFTOzs7Ozs7Ozs7Ozs7a0NBTTVCLDhEQUFDVCxpREFBSUE7d0JBQ0hlLE1BQU0sYUFBc0IsT0FBVFQ7d0JBQ25CTSxXQUFVO2tDQUVURixFQUFFVSxVQUFVLENBQUNkLFNBQVM7Ozs7Ozs7Ozs7OzswQkFLM0IsOERBQUNLO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ1M7d0JBQU9ULFdBQVU7OzBDQUNoQiw4REFBQ2YscUdBQUtBO2dDQUNKeUIsTUFBTTtnQ0FDTlYsV0FBVywrREFFVixPQURDSixVQUFVLDhCQUE4Qjs7Ozs7OzBDQUc1Qyw4REFBQ007Z0NBQUtGLFdBQVU7MENBQXVCTDs7Ozs7OzBDQUN2Qyw4REFBQ087Z0NBQUtGLFdBQVU7MENBQ2JGLEVBQUVhLE9BQU8sQ0FBQ0MsSUFBSTs7Ozs7Ozs7Ozs7O2tDQUduQiw4REFBQ2I7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDUztnQ0FBT1QsV0FBVTs7a0RBQ2hCLDhEQUFDYixxR0FBWUE7d0NBQUN1QixNQUFNO3dDQUFJVixXQUFVOzs7Ozs7a0RBQ2xDLDhEQUFDRTt3Q0FBS0YsV0FBVTtrREFDYkYsRUFBRWEsT0FBTyxDQUFDRSxJQUFJOzs7Ozs7Ozs7Ozs7MENBR25CLDhEQUFDSjtnQ0FBT1QsV0FBVTs7a0RBQ2hCLDhEQUFDZCxxR0FBTUE7d0NBQUN3QixNQUFNO3dDQUFJVixXQUFVOzs7Ozs7a0RBQzVCLDhEQUFDRTt3Q0FBS0YsV0FBVTtrREFDYkYsRUFBRWEsT0FBTyxDQUFDRyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPOUI7S0EzRXdCeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUXVvdGVDYXJkLnRzeD8yZmQyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEhlYXJ0LCBTaGFyZTIsIEJvb2ttYXJrUGx1cyB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHRyYW5zbGF0aW9ucywgQ2F0ZWdvcnlLZXksIExhbmd1YWdlIH0gZnJvbSAnQC9jb25maWcvdHJhbnNsYXRpb25zJztcclxuXHJcbmludGVyZmFjZSBCaWxpbmd1YWxUZXh0IHtcclxuICBlbjogc3RyaW5nO1xyXG4gIHpoOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBRdW90ZUNhcmRQcm9wcyB7XHJcbiAgcXVvdGU6IEJpbGluZ3VhbFRleHQ7XHJcbiAgYXV0aG9yOiBCaWxpbmd1YWxUZXh0O1xyXG4gIGF1dGhvclRpdGxlPzogQmlsaW5ndWFsVGV4dDtcclxuICBjYXRlZ29yeTogQ2F0ZWdvcnlLZXk7XHJcbiAgbGlrZXM/OiBudW1iZXI7XHJcbiAgaXNMaWtlZD86IGJvb2xlYW47XHJcbiAgbGFuZ3VhZ2U/OiBMYW5ndWFnZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVvdGVDYXJkKHtcclxuICBxdW90ZSxcclxuICBhdXRob3IsXHJcbiAgYXV0aG9yVGl0bGUsXHJcbiAgY2F0ZWdvcnksXHJcbiAgbGlrZXMgPSAwLFxyXG4gIGlzTGlrZWQgPSBmYWxzZSxcclxuICBsYW5ndWFnZSA9ICdlbicsXHJcbn06IFF1b3RlQ2FyZFByb3BzKSB7XHJcbiAgY29uc3QgdCA9IHRyYW5zbGF0aW9uc1tsYW5ndWFnZV07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgcC02IGdyb3VwIGJnLXdoaXRlIHJvdW5kZWQteGwgc2hhZG93LXNtIGhvdmVyOnNoYWRvdy1tZCB0cmFuc2l0aW9uLWFsbFwiPlxyXG4gICAgICB7LyogUXVvdGUgQ29udGVudCAqL31cclxuICAgICAgPGJsb2NrcXVvdGUgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWRpc3BsYXkgdGV4dC1kYXJrLTgwMCBtYi02IHJlbGF0aXZlIGxlYWRpbmctcmVsYXhlZFwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIC10b3AtNCAtbGVmdC0yIHRleHQtNnhsIHRleHQtcHJpbWFyeS0yMDAvNTAgZm9udC1kaXNwbGF5IHNlbGVjdC1ub25lXCI+XCI8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMFwiPntxdW90ZVtsYW5ndWFnZV19PC9zcGFuPlxyXG4gICAgICA8L2Jsb2NrcXVvdGU+XHJcblxyXG4gICAgICB7LyogQXV0aG9yIEluZm8gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICAgIGhyZWY9e2AvYXV0aG9yLyR7YXV0aG9yLmVuLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCAnLScpfWB9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtZGlzcGxheSBmb250LW1lZGl1bSB0ZXh0LXByaW1hcnktNjAwIGhvdmVyOnRleHQtcHJpbWFyeS03MDAgdHJhbnNpdGlvbi1jb2xvcnNcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7YXV0aG9yW2xhbmd1YWdlXX1cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIHthdXRob3JUaXRsZSAmJiAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1kYXJrLTUwMCBtdC0xIGZvbnQtbGlnaHRcIj5cclxuICAgICAgICAgICAgICB7YXV0aG9yVGl0bGVbbGFuZ3VhZ2VdfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogQ2F0ZWdvcnkgVGFnICovfVxyXG4gICAgICAgIDxMaW5rXHJcbiAgICAgICAgICBocmVmPXtgL2NhdGVnb3J5LyR7Y2F0ZWdvcnl9YH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gcHgtMyBweS0xIHJvdW5kZWQtZnVsbCBiZy1wcmltYXJ5LTUwIHRleHQtcHJpbWFyeS03MDAgaG92ZXI6YmctcHJpbWFyeS0xMDAgdHJhbnNpdGlvbi1jb2xvcnMgZm9udC1tZWRpdW1cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0LmNhdGVnb3JpZXNbY2F0ZWdvcnldfVxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogQWN0aW9uIEJ1dHRvbnMgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG10LTYgcHQtNCBib3JkZXItdCBib3JkZXItZGFyay0xMDBcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMS41IHRleHQtZGFyay01MDAgaG92ZXI6dGV4dC1wcmltYXJ5LTYwMCB0cmFuc2l0aW9uLWNvbG9ycyByZWxhdGl2ZSBncm91cC9idG5cIj5cclxuICAgICAgICAgIDxIZWFydFxyXG4gICAgICAgICAgICBzaXplPXsxOH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHRyYW5zZm9ybSBncm91cC1ob3ZlcjpzY2FsZS0xMTAgJHtcclxuICAgICAgICAgICAgICBpc0xpa2VkID8gJ2ZpbGwtY3VycmVudCB0ZXh0LXJlZC01MDAnIDogJydcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bVwiPntsaWtlc308L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLTEwIGxlZnQtMS8yIC10cmFuc2xhdGUteC0xLzIgYmctZGFyay04MDAgdGV4dC13aGl0ZSB0ZXh0LXhzIHB4LTIgcHktMSByb3VuZGVkIG9wYWNpdHktMCBncm91cC1ob3Zlci9idG46b3BhY2l0eS0xMDAgdHJhbnNpdGlvbi1vcGFjaXR5XCI+XHJcbiAgICAgICAgICAgIHt0LmFjdGlvbnMubGlrZX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LWRhcmstNDAwIGhvdmVyOnRleHQtcHJpbWFyeS02MDAgdHJhbnNpdGlvbi1jb2xvcnMgcmVsYXRpdmUgZ3JvdXAvYnRuXCI+XHJcbiAgICAgICAgICAgIDxCb29rbWFya1BsdXMgc2l6ZT17MTh9IGNsYXNzTmFtZT1cInRyYW5zZm9ybSBncm91cC1ob3ZlcjpzY2FsZS0xMTAgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwXCIgLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXRvcC0xMCBsZWZ0LTEvMiAtdHJhbnNsYXRlLXgtMS8yIGJnLWRhcmstODAwIHRleHQtd2hpdGUgdGV4dC14cyBweC0yIHB5LTEgcm91bmRlZCBvcGFjaXR5LTAgZ3JvdXAtaG92ZXIvYnRuOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tb3BhY2l0eSB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgIHt0LmFjdGlvbnMuc2F2ZX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtZGFyay00MDAgaG92ZXI6dGV4dC1wcmltYXJ5LTYwMCB0cmFuc2l0aW9uLWNvbG9ycyByZWxhdGl2ZSBncm91cC9idG5cIj5cclxuICAgICAgICAgICAgPFNoYXJlMiBzaXplPXsxOH0gY2xhc3NOYW1lPVwidHJhbnNmb3JtIGdyb3VwLWhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDBcIiAvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLTEwIGxlZnQtMS8yIC10cmFuc2xhdGUteC0xLzIgYmctZGFyay04MDAgdGV4dC13aGl0ZSB0ZXh0LXhzIHB4LTIgcHktMSByb3VuZGVkIG9wYWNpdHktMCBncm91cC1ob3Zlci9idG46b3BhY2l0eS0xMDAgdHJhbnNpdGlvbi1vcGFjaXR5IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAge3QuYWN0aW9ucy5zaGFyZX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSAiXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFydCIsIlNoYXJlMiIsIkJvb2ttYXJrUGx1cyIsIkxpbmsiLCJ0cmFuc2xhdGlvbnMiLCJRdW90ZUNhcmQiLCJxdW90ZSIsImF1dGhvciIsImF1dGhvclRpdGxlIiwiY2F0ZWdvcnkiLCJsaWtlcyIsImlzTGlrZWQiLCJsYW5ndWFnZSIsInQiLCJkaXYiLCJjbGFzc05hbWUiLCJibG9ja3F1b3RlIiwic3BhbiIsImhyZWYiLCJlbiIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsInAiLCJjYXRlZ29yaWVzIiwiYnV0dG9uIiwic2l6ZSIsImFjdGlvbnMiLCJsaWtlIiwic2F2ZSIsInNoYXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/QuoteCard.tsx\n"));

/***/ })

});