"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/daily/page",{

/***/ "(app-pages-browser)/./src/components/QuoteCard.tsx":
/*!**************************************!*\
  !*** ./src/components/QuoteCard.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ QuoteCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_BookmarkPlus_Heart_Share2_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=BookmarkPlus,Heart,Share2!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/heart.js\");\n/* harmony import */ var _barrel_optimize_names_BookmarkPlus_Heart_Share2_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=BookmarkPlus,Heart,Share2!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/bookmark-plus.js\");\n/* harmony import */ var _barrel_optimize_names_BookmarkPlus_Heart_Share2_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=BookmarkPlus,Heart,Share2!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/share-2.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _config_translations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config/translations */ \"(app-pages-browser)/./src/config/translations.ts\");\n/* harmony import */ var _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contexts/LanguageContext */ \"(app-pages-browser)/./src/contexts/LanguageContext.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction QuoteCard(param) {\n    let { quote, author, authorTitle, category, likes = 0, isLiked = false } = param;\n    _s();\n    const { language } = (0,_contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_4__.useLanguage)();\n    const t = _config_translations__WEBPACK_IMPORTED_MODULE_3__.translations[language];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card p-6 group bg-white rounded-xl shadow-sm hover:shadow-md transition-all\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"blockquote\", {\n                className: \"text-xl font-display text-dark-800 mb-6 relative leading-relaxed\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"absolute -top-4 -left-2 text-6xl text-primary-200/50 font-display select-none\",\n                        children: '\"'\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"relative z-10\",\n                        children: quote[language]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-start justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"/author/\".concat(author.en.toLowerCase().replace(/\\s+/g, \"-\")),\n                                className: \"font-display font-medium text-primary-600 hover:text-primary-700 transition-colors\",\n                                children: author[language]\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this),\n                            authorTitle && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-dark-500 mt-1 font-light\",\n                                children: authorTitle[language]\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/category/\".concat(category),\n                        className: \"text-sm px-3 py-1 rounded-full bg-primary-50 text-primary-700 hover:bg-primary-100 transition-colors font-medium\",\n                        children: t.categories[category]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between mt-6 pt-4 border-t border-dark-100\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"flex items-center space-x-1.5 text-dark-500 hover:text-primary-600 transition-colors relative group/btn\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BookmarkPlus_Heart_Share2_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                size: 18,\n                                className: \"transition-all duration-300 transform group-hover:scale-110 \".concat(isLiked ? \"fill-current text-red-500\" : \"\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-sm font-medium\",\n                                children: likes\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"absolute -top-10 left-1/2 -translate-x-1/2 bg-dark-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity\",\n                                children: t.actions.like\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center space-x-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"text-dark-400 hover:text-primary-600 transition-colors relative group/btn\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BookmarkPlus_Heart_Share2_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        size: 18,\n                                        className: \"transform group-hover:scale-110 transition-transform duration-300\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"absolute -top-10 left-1/2 -translate-x-1/2 bg-dark-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap\",\n                                        children: t.actions.save\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"text-dark-400 hover:text-primary-600 transition-colors relative group/btn\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BookmarkPlus_Heart_Share2_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        size: 18,\n                                        className: \"transform group-hover:scale-110 transition-transform duration-300\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"absolute -top-10 left-1/2 -translate-x-1/2 bg-dark-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap\",\n                                        children: t.actions.share\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\QuoteCard.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(QuoteCard, \"d1ORxvPBup+C3Qetit/BVjvgCJk=\", false, function() {\n    return [\n        _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_4__.useLanguage\n    ];\n});\n_c = QuoteCard;\nvar _c;\n$RefreshReg$(_c, \"QuoteCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1F1b3RlQ2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRTBCO0FBQ2lDO0FBQzlCO0FBQytDO0FBQ25CO0FBZ0IxQyxTQUFTTyxVQUFVLEtBT2pCO1FBUGlCLEVBQ2hDQyxLQUFLLEVBQ0xDLE1BQU0sRUFDTkMsV0FBVyxFQUNYQyxRQUFRLEVBQ1JDLFFBQVEsQ0FBQyxFQUNUQyxVQUFVLEtBQUssRUFDQSxHQVBpQjs7SUFRaEMsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBR1Isc0VBQVdBO0lBQ2hDLE1BQU1TLElBQUlWLDhEQUFZLENBQUNTLFNBQVM7SUFFaEMscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7OzBCQUViLDhEQUFDQztnQkFBV0QsV0FBVTs7a0NBQ3BCLDhEQUFDRTt3QkFBS0YsV0FBVTtrQ0FBZ0Y7Ozs7OztrQ0FDaEcsOERBQUNFO3dCQUFLRixXQUFVO2tDQUFpQlQsS0FBSyxDQUFDTSxTQUFTOzs7Ozs7Ozs7Ozs7MEJBSWxELDhEQUFDRTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEOzswQ0FDQyw4REFBQ1osaURBQUlBO2dDQUNIZ0IsTUFBTSxXQUF3RCxPQUE3Q1gsT0FBT1ksRUFBRSxDQUFDQyxXQUFXLEdBQUdDLE9BQU8sQ0FBQyxRQUFRO2dDQUN6RE4sV0FBVTswQ0FFVFIsTUFBTSxDQUFDSyxTQUFTOzs7Ozs7NEJBRWxCSiw2QkFDQyw4REFBQ2M7Z0NBQUVQLFdBQVU7MENBQ1ZQLFdBQVcsQ0FBQ0ksU0FBUzs7Ozs7Ozs7Ozs7O2tDQU01Qiw4REFBQ1YsaURBQUlBO3dCQUNIZ0IsTUFBTSxhQUFzQixPQUFUVDt3QkFDbkJNLFdBQVU7a0NBRVRGLEVBQUVVLFVBQVUsQ0FBQ2QsU0FBUzs7Ozs7Ozs7Ozs7OzBCQUszQiw4REFBQ0s7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDUzt3QkFBT1QsV0FBVTs7MENBQ2hCLDhEQUFDaEIscUdBQUtBO2dDQUNKMEIsTUFBTTtnQ0FDTlYsV0FBVywrREFFVixPQURDSixVQUFVLDhCQUE4Qjs7Ozs7OzBDQUc1Qyw4REFBQ007Z0NBQUtGLFdBQVU7MENBQXVCTDs7Ozs7OzBDQUN2Qyw4REFBQ087Z0NBQUtGLFdBQVU7MENBQ2JGLEVBQUVhLE9BQU8sQ0FBQ0MsSUFBSTs7Ozs7Ozs7Ozs7O2tDQUduQiw4REFBQ2I7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDUztnQ0FBT1QsV0FBVTs7a0RBQ2hCLDhEQUFDZCxxR0FBWUE7d0NBQUN3QixNQUFNO3dDQUFJVixXQUFVOzs7Ozs7a0RBQ2xDLDhEQUFDRTt3Q0FBS0YsV0FBVTtrREFDYkYsRUFBRWEsT0FBTyxDQUFDRSxJQUFJOzs7Ozs7Ozs7Ozs7MENBR25CLDhEQUFDSjtnQ0FBT1QsV0FBVTs7a0RBQ2hCLDhEQUFDZixxR0FBTUE7d0NBQUN5QixNQUFNO3dDQUFJVixXQUFVOzs7Ozs7a0RBQzVCLDhEQUFDRTt3Q0FBS0YsV0FBVTtrREFDYkYsRUFBRWEsT0FBTyxDQUFDRyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPOUI7R0EzRXdCeEI7O1FBUURELGtFQUFXQTs7O0tBUlZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1F1b3RlQ2FyZC50c3g/MmZkMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIZWFydCwgU2hhcmUyLCBCb29rbWFya1BsdXMgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB0cmFuc2xhdGlvbnMsIENhdGVnb3J5S2V5LCBMYW5ndWFnZSB9IGZyb20gJ0AvY29uZmlnL3RyYW5zbGF0aW9ucyc7XHJcbmltcG9ydCB7IHVzZUxhbmd1YWdlIH0gZnJvbSAnQC9jb250ZXh0cy9MYW5ndWFnZUNvbnRleHQnO1xyXG5cclxuaW50ZXJmYWNlIEJpbGluZ3VhbFRleHQge1xyXG4gIGVuOiBzdHJpbmc7XHJcbiAgemg6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFF1b3RlQ2FyZFByb3BzIHtcclxuICBxdW90ZTogQmlsaW5ndWFsVGV4dDtcclxuICBhdXRob3I6IEJpbGluZ3VhbFRleHQ7XHJcbiAgYXV0aG9yVGl0bGU/OiBCaWxpbmd1YWxUZXh0O1xyXG4gIGNhdGVnb3J5OiBDYXRlZ29yeUtleTtcclxuICBsaWtlcz86IG51bWJlcjtcclxuICBpc0xpa2VkPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVvdGVDYXJkKHtcclxuICBxdW90ZSxcclxuICBhdXRob3IsXHJcbiAgYXV0aG9yVGl0bGUsXHJcbiAgY2F0ZWdvcnksXHJcbiAgbGlrZXMgPSAwLFxyXG4gIGlzTGlrZWQgPSBmYWxzZSxcclxufTogUXVvdGVDYXJkUHJvcHMpIHtcclxuICBjb25zdCB7IGxhbmd1YWdlIH0gPSB1c2VMYW5ndWFnZSgpO1xyXG4gIGNvbnN0IHQgPSB0cmFuc2xhdGlvbnNbbGFuZ3VhZ2VdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHAtNiBncm91cCBiZy13aGl0ZSByb3VuZGVkLXhsIHNoYWRvdy1zbSBob3ZlcjpzaGFkb3ctbWQgdHJhbnNpdGlvbi1hbGxcIj5cclxuICAgICAgey8qIFF1b3RlIENvbnRlbnQgKi99XHJcbiAgICAgIDxibG9ja3F1b3RlIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1kaXNwbGF5IHRleHQtZGFyay04MDAgbWItNiByZWxhdGl2ZSBsZWFkaW5nLXJlbGF4ZWRcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLTQgLWxlZnQtMiB0ZXh0LTZ4bCB0ZXh0LXByaW1hcnktMjAwLzUwIGZvbnQtZGlzcGxheSBzZWxlY3Qtbm9uZVwiPlwiPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTBcIj57cXVvdGVbbGFuZ3VhZ2VdfTwvc3Bhbj5cclxuICAgICAgPC9ibG9ja3F1b3RlPlxyXG5cclxuICAgICAgey8qIEF1dGhvciBJbmZvICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICBocmVmPXtgL2F1dGhvci8ke2F1dGhvci5lbi50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgJy0nKX1gfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWRpc3BsYXkgZm9udC1tZWRpdW0gdGV4dC1wcmltYXJ5LTYwMCBob3Zlcjp0ZXh0LXByaW1hcnktNzAwIHRyYW5zaXRpb24tY29sb3JzXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2F1dGhvcltsYW5ndWFnZV19XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICB7YXV0aG9yVGl0bGUgJiYgKFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZGFyay01MDAgbXQtMSBmb250LWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAge2F1dGhvclRpdGxlW2xhbmd1YWdlXX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIENhdGVnb3J5IFRhZyAqL31cclxuICAgICAgICA8TGlua1xyXG4gICAgICAgICAgaHJlZj17YC9jYXRlZ29yeS8ke2NhdGVnb3J5fWB9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtIHB4LTMgcHktMSByb3VuZGVkLWZ1bGwgYmctcHJpbWFyeS01MCB0ZXh0LXByaW1hcnktNzAwIGhvdmVyOmJnLXByaW1hcnktMTAwIHRyYW5zaXRpb24tY29sb3JzIGZvbnQtbWVkaXVtXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dC5jYXRlZ29yaWVzW2NhdGVnb3J5XX1cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIEFjdGlvbiBCdXR0b25zICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtdC02IHB0LTQgYm9yZGVyLXQgYm9yZGVyLWRhcmstMTAwXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTEuNSB0ZXh0LWRhcmstNTAwIGhvdmVyOnRleHQtcHJpbWFyeS02MDAgdHJhbnNpdGlvbi1jb2xvcnMgcmVsYXRpdmUgZ3JvdXAvYnRuXCI+XHJcbiAgICAgICAgICA8SGVhcnRcclxuICAgICAgICAgICAgc2l6ZT17MTh9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCB0cmFuc2Zvcm0gZ3JvdXAtaG92ZXI6c2NhbGUtMTEwICR7XHJcbiAgICAgICAgICAgICAgaXNMaWtlZCA/ICdmaWxsLWN1cnJlbnQgdGV4dC1yZWQtNTAwJyA6ICcnXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW1cIj57bGlrZXN9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXRvcC0xMCBsZWZ0LTEvMiAtdHJhbnNsYXRlLXgtMS8yIGJnLWRhcmstODAwIHRleHQtd2hpdGUgdGV4dC14cyBweC0yIHB5LTEgcm91bmRlZCBvcGFjaXR5LTAgZ3JvdXAtaG92ZXIvYnRuOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tb3BhY2l0eVwiPlxyXG4gICAgICAgICAgICB7dC5hY3Rpb25zLmxpa2V9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTRcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC1kYXJrLTQwMCBob3Zlcjp0ZXh0LXByaW1hcnktNjAwIHRyYW5zaXRpb24tY29sb3JzIHJlbGF0aXZlIGdyb3VwL2J0blwiPlxyXG4gICAgICAgICAgICA8Qm9va21hcmtQbHVzIHNpemU9ezE4fSBjbGFzc05hbWU9XCJ0cmFuc2Zvcm0gZ3JvdXAtaG92ZXI6c2NhbGUtMTEwIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMFwiIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIC10b3AtMTAgbGVmdC0xLzIgLXRyYW5zbGF0ZS14LTEvMiBiZy1kYXJrLTgwMCB0ZXh0LXdoaXRlIHRleHQteHMgcHgtMiBweS0xIHJvdW5kZWQgb3BhY2l0eS0wIGdyb3VwLWhvdmVyL2J0bjpvcGFjaXR5LTEwMCB0cmFuc2l0aW9uLW9wYWNpdHkgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICB7dC5hY3Rpb25zLnNhdmV9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LWRhcmstNDAwIGhvdmVyOnRleHQtcHJpbWFyeS02MDAgdHJhbnNpdGlvbi1jb2xvcnMgcmVsYXRpdmUgZ3JvdXAvYnRuXCI+XHJcbiAgICAgICAgICAgIDxTaGFyZTIgc2l6ZT17MTh9IGNsYXNzTmFtZT1cInRyYW5zZm9ybSBncm91cC1ob3ZlcjpzY2FsZS0xMTAgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwXCIgLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXRvcC0xMCBsZWZ0LTEvMiAtdHJhbnNsYXRlLXgtMS8yIGJnLWRhcmstODAwIHRleHQtd2hpdGUgdGV4dC14cyBweC0yIHB5LTEgcm91bmRlZCBvcGFjaXR5LTAgZ3JvdXAtaG92ZXIvYnRuOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tb3BhY2l0eSB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgIHt0LmFjdGlvbnMuc2hhcmV9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0gIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhcnQiLCJTaGFyZTIiLCJCb29rbWFya1BsdXMiLCJMaW5rIiwidHJhbnNsYXRpb25zIiwidXNlTGFuZ3VhZ2UiLCJRdW90ZUNhcmQiLCJxdW90ZSIsImF1dGhvciIsImF1dGhvclRpdGxlIiwiY2F0ZWdvcnkiLCJsaWtlcyIsImlzTGlrZWQiLCJsYW5ndWFnZSIsInQiLCJkaXYiLCJjbGFzc05hbWUiLCJibG9ja3F1b3RlIiwic3BhbiIsImhyZWYiLCJlbiIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsInAiLCJjYXRlZ29yaWVzIiwiYnV0dG9uIiwic2l6ZSIsImFjdGlvbnMiLCJsaWtlIiwic2F2ZSIsInNoYXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/QuoteCard.tsx\n"));

/***/ })

});