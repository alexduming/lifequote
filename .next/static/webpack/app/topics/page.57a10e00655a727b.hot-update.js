"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/topics/page",{

/***/ "(app-pages-browser)/./src/components/Navbar.tsx":
/*!***********************************!*\
  !*** ./src/components/Navbar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _barrel_optimize_names_Menu_X_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Menu,X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/x.js\");\n/* harmony import */ var _barrel_optimize_names_Menu_X_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Menu,X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/menu.js\");\n/* harmony import */ var _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contexts/LanguageContext */ \"(app-pages-browser)/./src/contexts/LanguageContext.tsx\");\n/* harmony import */ var _config_translations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/config/translations */ \"(app-pages-browser)/./src/config/translations.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Navbar() {\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { language, setLanguage } = (0,_contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_4__.useLanguage)();\n    const t = _config_translations__WEBPACK_IMPORTED_MODULE_5__.translations[language];\n    const toggleLanguage = ()=>{\n        setLanguage(language === \"en\" ? \"zh\" : \"en\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between h-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-shrink-0 flex items-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"/\",\n                                className: \"flex items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    src: \"/logo.svg\",\n                                    alt: \"LifeQuote Logo\",\n                                    width: 120,\n                                    height: 30,\n                                    className: \"h-8 w-auto\",\n                                    priority: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\Navbar.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\Navbar.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hidden sm:flex sm:space-x-8 sm:items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    href: \"/daily\",\n                                    className: \"text-gray-600 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors\",\n                                    children: t.nav.daily\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\Navbar.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    href: \"/books\",\n                                    className: \"text-gray-600 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors\",\n                                    children: t.nav.books\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\Navbar.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    href: \"/authors\",\n                                    className: \"text-gray-600 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors\",\n                                    children: t.nav.authors\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\Navbar.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    href: \"/topics\",\n                                    className: \"text-gray-600 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors\",\n                                    children: t.nav.topics\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\Navbar.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>setLanguage(language === \"zh\" ? \"en\" : \"zh\"),\n                                    className: \"text-gray-600 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors\",\n                                    children: language === \"zh\" ? \"EN\" : \"中文\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\Navbar.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"sm:hidden flex items-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setIsOpen(!isOpen),\n                                className: \"text-gray-500 hover:text-gray-600 p-2 rounded-md focus:outline-none\",\n                                children: isOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_X_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    className: \"h-6 w-6\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\Navbar.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 25\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_X_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    className: \"h-6 w-6\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\Navbar.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 53\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\Navbar.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\Navbar.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\Navbar.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sm:hidden bg-white/95 backdrop-blur-md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pt-2 pb-3 space-y-1\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: \"/daily\",\n                            className: \"block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-500 hover:bg-gray-50\",\n                            children: t.nav.daily\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: \"/books\",\n                            className: \"block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-500 hover:bg-gray-50\",\n                            children: t.nav.books\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: \"/authors\",\n                            className: \"block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-500 hover:bg-gray-50\",\n                            children: t.nav.authors\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: \"/topics\",\n                            className: \"block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-500 hover:bg-gray-50\",\n                            children: t.nav.topics\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setLanguage(language === \"zh\" ? \"en\" : \"zh\"),\n                            className: \"block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-500 hover:bg-gray-50\",\n                            children: language === \"zh\" ? \"EN\" : \"中文\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\Navbar.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\Navbar.tsx\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\Navbar.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(Navbar, \"idpMSZWpbV8cWWfVVOZ2quaB7xE=\", false, function() {\n    return [\n        _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_4__.useLanguage\n    ];\n});\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL05hdmJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRXdDO0FBQ1g7QUFDRTtBQUNRO0FBQ2tCO0FBQ0o7QUFFdEMsU0FBU1E7O0lBQ3RCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLEVBQUVVLFFBQVEsRUFBRUMsV0FBVyxFQUFFLEdBQUdOLHNFQUFXQTtJQUM3QyxNQUFNTyxJQUFJTiw4REFBWSxDQUFDSSxTQUFTO0lBRWhDLE1BQU1HLGlCQUFpQjtRQUNyQkYsWUFBWUQsYUFBYSxPQUFPLE9BQU87SUFDekM7SUFFQSxxQkFDRSw4REFBQ0k7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDQztvQkFBSUQsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFJRCxXQUFVO3NDQUNiLDRFQUFDZCxpREFBSUE7Z0NBQUNnQixNQUFLO2dDQUFJRixXQUFVOzBDQUN2Qiw0RUFBQ2Isa0RBQUtBO29DQUNKZ0IsS0FBSTtvQ0FDSkMsS0FBSTtvQ0FDSkMsT0FBTztvQ0FDUEMsUUFBUTtvQ0FDUk4sV0FBVTtvQ0FDVk8sUUFBUTs7Ozs7Ozs7Ozs7Ozs7OztzQ0FLZCw4REFBQ047NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDZCxpREFBSUE7b0NBQUNnQixNQUFLO29DQUFTRixXQUFVOzhDQUMzQkgsRUFBRUUsR0FBRyxDQUFDUyxLQUFLOzs7Ozs7OENBRWQsOERBQUN0QixpREFBSUE7b0NBQUNnQixNQUFLO29DQUFTRixXQUFVOzhDQUMzQkgsRUFBRUUsR0FBRyxDQUFDVSxLQUFLOzs7Ozs7OENBRWQsOERBQUN2QixpREFBSUE7b0NBQUNnQixNQUFLO29DQUFXRixXQUFVOzhDQUM3QkgsRUFBRUUsR0FBRyxDQUFDVyxPQUFPOzs7Ozs7OENBRWhCLDhEQUFDeEIsaURBQUlBO29DQUFDZ0IsTUFBSztvQ0FBVUYsV0FBVTs4Q0FDNUJILEVBQUVFLEdBQUcsQ0FBQ1ksTUFBTTs7Ozs7OzhDQUVmLDhEQUFDQztvQ0FDQ0MsU0FBUyxJQUFNakIsWUFBWUQsYUFBYSxPQUFPLE9BQU87b0NBQ3RESyxXQUFVOzhDQUVUTCxhQUFhLE9BQU8sT0FBTzs7Ozs7Ozs7Ozs7O3NDQUloQyw4REFBQ007NEJBQUlELFdBQVU7c0NBQ2IsNEVBQUNZO2dDQUNDQyxTQUFTLElBQU1uQixVQUFVLENBQUNEO2dDQUMxQk8sV0FBVTswQ0FFVFAsdUJBQVMsOERBQUNKLGtGQUFDQTtvQ0FBQ1csV0FBVTs7Ozs7eURBQWUsOERBQUNaLGtGQUFJQTtvQ0FBQ1ksV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTTdEUCx3QkFDQyw4REFBQ1E7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNDO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ2QsaURBQUlBOzRCQUFDZ0IsTUFBSzs0QkFBU0YsV0FBVTtzQ0FDM0JILEVBQUVFLEdBQUcsQ0FBQ1MsS0FBSzs7Ozs7O3NDQUVkLDhEQUFDdEIsaURBQUlBOzRCQUFDZ0IsTUFBSzs0QkFBU0YsV0FBVTtzQ0FDM0JILEVBQUVFLEdBQUcsQ0FBQ1UsS0FBSzs7Ozs7O3NDQUVkLDhEQUFDdkIsaURBQUlBOzRCQUFDZ0IsTUFBSzs0QkFBV0YsV0FBVTtzQ0FDN0JILEVBQUVFLEdBQUcsQ0FBQ1csT0FBTzs7Ozs7O3NDQUVoQiw4REFBQ3hCLGlEQUFJQTs0QkFBQ2dCLE1BQUs7NEJBQVVGLFdBQVU7c0NBQzVCSCxFQUFFRSxHQUFHLENBQUNZLE1BQU07Ozs7OztzQ0FFZiw4REFBQ0M7NEJBQ0NDLFNBQVMsSUFBTWpCLFlBQVlELGFBQWEsT0FBTyxPQUFPOzRCQUN0REssV0FBVTtzQ0FFVEwsYUFBYSxPQUFPLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzFDO0dBcEZ3Qkg7O1FBRVlGLGtFQUFXQTs7O0tBRnZCRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZiYXIudHN4PzlhNmQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IE1lbnUsIFggfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VMYW5ndWFnZSB9IGZyb20gJ0AvY29udGV4dHMvTGFuZ3VhZ2VDb250ZXh0JztcclxuaW1wb3J0IHsgdHJhbnNsYXRpb25zIH0gZnJvbSAnQC9jb25maWcvdHJhbnNsYXRpb25zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHsgbGFuZ3VhZ2UsIHNldExhbmd1YWdlIH0gPSB1c2VMYW5ndWFnZSgpO1xyXG4gIGNvbnN0IHQgPSB0cmFuc2xhdGlvbnNbbGFuZ3VhZ2VdO1xyXG5cclxuICBjb25zdCB0b2dnbGVMYW5ndWFnZSA9ICgpID0+IHtcclxuICAgIHNldExhbmd1YWdlKGxhbmd1YWdlID09PSAnZW4nID8gJ3poJyA6ICdlbicpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCByaWdodC0wIHotNTAgYmctd2hpdGUvODAgYmFja2Ryb3AtYmx1ci1tZCBib3JkZXItYiBib3JkZXItZ3JheS0yMDBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaC0xNlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIGZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9sb2dvLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJMaWZlUXVvdGUgTG9nb1wiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD17MTIwfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXszMH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtOCB3LWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gc206ZmxleCBzbTpzcGFjZS14LTggc206aXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFpbHlcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIGhvdmVyOnRleHQtcHJpbWFyeS01MDAgcHgtMyBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1jb2xvcnNcIj5cclxuICAgICAgICAgICAgICB7dC5uYXYuZGFpbHl9XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ib29rc1wiIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgaG92ZXI6dGV4dC1wcmltYXJ5LTUwMCBweC0zIHB5LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWNvbG9yc1wiPlxyXG4gICAgICAgICAgICAgIHt0Lm5hdi5ib29rc31cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGhvcnNcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIGhvdmVyOnRleHQtcHJpbWFyeS01MDAgcHgtMyBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1jb2xvcnNcIj5cclxuICAgICAgICAgICAgICB7dC5uYXYuYXV0aG9yc31cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3RvcGljc1wiIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgaG92ZXI6dGV4dC1wcmltYXJ5LTUwMCBweC0zIHB5LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWNvbG9yc1wiPlxyXG4gICAgICAgICAgICAgIHt0Lm5hdi50b3BpY3N9XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldExhbmd1YWdlKGxhbmd1YWdlID09PSAnemgnID8gJ2VuJyA6ICd6aCcpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgaG92ZXI6dGV4dC1wcmltYXJ5LTUwMCBweC0zIHB5LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWNvbG9yc1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7bGFuZ3VhZ2UgPT09ICd6aCcgPyAnRU4nIDogJ+S4reaWhyd9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpoaWRkZW4gZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbighaXNPcGVuKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS02MDAgcC0yIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtpc09wZW4gPyA8WCBjbGFzc05hbWU9XCJoLTYgdy02XCIgLz4gOiA8TWVudSBjbGFzc05hbWU9XCJoLTYgdy02XCIgLz59XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge2lzT3BlbiAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpoaWRkZW4gYmctd2hpdGUvOTUgYmFja2Ryb3AtYmx1ci1tZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yIHBiLTMgc3BhY2UteS0xXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFpbHlcIiBjbGFzc05hbWU9XCJibG9jayBweC0zIHB5LTIgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtZ3JheS02MDAgaG92ZXI6dGV4dC1wcmltYXJ5LTUwMCBob3ZlcjpiZy1ncmF5LTUwXCI+XHJcbiAgICAgICAgICAgICAge3QubmF2LmRhaWx5fVxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYm9va3NcIiBjbGFzc05hbWU9XCJibG9jayBweC0zIHB5LTIgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtZ3JheS02MDAgaG92ZXI6dGV4dC1wcmltYXJ5LTUwMCBob3ZlcjpiZy1ncmF5LTUwXCI+XHJcbiAgICAgICAgICAgICAge3QubmF2LmJvb2tzfVxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aG9yc1wiIGNsYXNzTmFtZT1cImJsb2NrIHB4LTMgcHktMiB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTYwMCBob3Zlcjp0ZXh0LXByaW1hcnktNTAwIGhvdmVyOmJnLWdyYXktNTBcIj5cclxuICAgICAgICAgICAgICB7dC5uYXYuYXV0aG9yc31cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3RvcGljc1wiIGNsYXNzTmFtZT1cImJsb2NrIHB4LTMgcHktMiB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTYwMCBob3Zlcjp0ZXh0LXByaW1hcnktNTAwIGhvdmVyOmJnLWdyYXktNTBcIj5cclxuICAgICAgICAgICAgICB7dC5uYXYudG9waWNzfVxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRMYW5ndWFnZShsYW5ndWFnZSA9PT0gJ3poJyA/ICdlbicgOiAnemgnKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgdGV4dC1sZWZ0IHB4LTMgcHktMiB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTYwMCBob3Zlcjp0ZXh0LXByaW1hcnktNTAwIGhvdmVyOmJnLWdyYXktNTBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2xhbmd1YWdlID09PSAnemgnID8gJ0VOJyA6ICfkuK3mlocnfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufSAiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJJbWFnZSIsIk1lbnUiLCJYIiwidXNlTGFuZ3VhZ2UiLCJ0cmFuc2xhdGlvbnMiLCJOYXZiYXIiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwidCIsInRvZ2dsZUxhbmd1YWdlIiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2IiwiaHJlZiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicHJpb3JpdHkiLCJkYWlseSIsImJvb2tzIiwiYXV0aG9ycyIsInRvcGljcyIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Navbar.tsx\n"));

/***/ })

});