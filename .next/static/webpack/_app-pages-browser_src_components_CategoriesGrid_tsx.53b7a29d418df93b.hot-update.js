"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("_app-pages-browser_src_components_CategoriesGrid_tsx",{

/***/ "(app-pages-browser)/./src/components/CategoriesGrid.tsx":
/*!*******************************************!*\
  !*** ./src/components/CategoriesGrid.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CategoriesGrid; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/LanguageContext */ \"(app-pages-browser)/./src/contexts/LanguageContext.tsx\");\n/* harmony import */ var _config_translations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config/translations */ \"(app-pages-browser)/./src/config/translations.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst categories = [\n    {\n        key: \"philosophy\",\n        count: 1234,\n        icon: \"\\uD83E\\uDD14\",\n        bgClass: \"from-indigo-500/20 to-purple-500/20\"\n    },\n    {\n        key: \"literature\",\n        count: 890,\n        icon: \"\\uD83D\\uDCDA\",\n        bgClass: \"from-yellow-500/20 to-amber-500/20\"\n    },\n    {\n        key: \"science\",\n        count: 567,\n        icon: \"\\uD83D\\uDD2C\",\n        bgClass: \"from-cyan-500/20 to-blue-500/20\"\n    },\n    {\n        key: \"art\",\n        count: 432,\n        icon: \"\\uD83C\\uDFA8\",\n        bgClass: \"from-fuchsia-500/20 to-pink-500/20\"\n    },\n    {\n        key: \"history\",\n        count: 765,\n        icon: \"⌛\",\n        bgClass: \"from-amber-500/20 to-orange-500/20\"\n    },\n    {\n        key: \"politics\",\n        count: 321,\n        icon: \"⚖️\",\n        bgClass: \"from-slate-500/20 to-gray-500/20\"\n    },\n    {\n        key: \"economics\",\n        count: 543,\n        icon: \"\\uD83D\\uDCC8\",\n        bgClass: \"from-emerald-500/20 to-teal-500/20\"\n    },\n    {\n        key: \"education\",\n        count: 678,\n        icon: \"\\uD83C\\uDF93\",\n        bgClass: \"from-violet-500/20 to-purple-500/20\"\n    }\n];\nfunction CategoriesGrid() {\n    _s();\n    const { language } = (0,_contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_2__.useLanguage)();\n    const t = _config_translations__WEBPACK_IMPORTED_MODULE_3__.translations[language];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-4xl md:text-5xl font-[oswald] font-bold text-dark-900 mb-6 tracking-tight uppercase !leading-none\",\n                children: t.sections.explore.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\CategoriesGrid.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-lg md:text-xl text-dark-500 mb-16 font-light max-w-3xl\",\n                children: t.sections.explore.subtitle\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\CategoriesGrid.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8\",\n                children: categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/category/\".concat(category.key),\n                        className: \"group relative overflow-hidden rounded-2xl bg-dark-100/50 hover:scale-105 transition-all duration-300\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute inset-0 bg-gradient-to-br \".concat(category.bgClass, \" opacity-0 group-hover:opacity-80 transition-all duration-300\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\CategoriesGrid.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative p-8 flex flex-col items-center text-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-5xl md:text-6xl mb-4\",\n                                        children: category.icon\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\CategoriesGrid.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"text-xl md:text-2xl font-[oswald] font-medium text-dark-800 mb-2 uppercase tracking-wide\",\n                                        children: t.categories[category.key]\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\CategoriesGrid.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-base text-dark-500\",\n                                        children: [\n                                            category.count,\n                                            \" \",\n                                            t.sections.stats.quotes\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\CategoriesGrid.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\CategoriesGrid.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, category.key, true, {\n                        fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\CategoriesGrid.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\CategoriesGrid.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\components\\\\CategoriesGrid.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(CategoriesGrid, \"d1ORxvPBup+C3Qetit/BVjvgCJk=\", false, function() {\n    return [\n        _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_2__.useLanguage\n    ];\n});\n_c = CategoriesGrid;\nvar _c;\n$RefreshReg$(_c, \"CategoriesGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NhdGVnb3JpZXNHcmlkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUUwQjtBQUMrQjtBQUNTO0FBRWxFLE1BQU1HLGFBQWE7SUFDakI7UUFBRUMsS0FBSztRQUE2QkMsT0FBTztRQUFNQyxNQUFNO1FBQU1DLFNBQVM7SUFBc0M7SUFDNUc7UUFBRUgsS0FBSztRQUE2QkMsT0FBTztRQUFLQyxNQUFNO1FBQU1DLFNBQVM7SUFBcUM7SUFDMUc7UUFBRUgsS0FBSztRQUEwQkMsT0FBTztRQUFLQyxNQUFNO1FBQU1DLFNBQVM7SUFBa0M7SUFDcEc7UUFBRUgsS0FBSztRQUFzQkMsT0FBTztRQUFLQyxNQUFNO1FBQU1DLFNBQVM7SUFBcUM7SUFDbkc7UUFBRUgsS0FBSztRQUEwQkMsT0FBTztRQUFLQyxNQUFNO1FBQUtDLFNBQVM7SUFBcUM7SUFDdEc7UUFBRUgsS0FBSztRQUEyQkMsT0FBTztRQUFLQyxNQUFNO1FBQU1DLFNBQVM7SUFBbUM7SUFDdEc7UUFBRUgsS0FBSztRQUE0QkMsT0FBTztRQUFLQyxNQUFNO1FBQU1DLFNBQVM7SUFBcUM7SUFDekc7UUFBRUgsS0FBSztRQUE0QkMsT0FBTztRQUFLQyxNQUFNO1FBQU1DLFNBQVM7SUFBc0M7Q0FDM0c7QUFFYyxTQUFTQzs7SUFDdEIsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBR1Isc0VBQVdBO0lBQ2hDLE1BQU1TLElBQUlSLDhEQUFZLENBQUNPLFNBQVM7SUFFaEMscUJBQ0UsOERBQUNFO1FBQVFDLFdBQVU7OzBCQUNqQiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQ1hGLEVBQUVJLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDQyxLQUFLOzs7Ozs7MEJBRTNCLDhEQUFDQztnQkFBRUwsV0FBVTswQkFDVkYsRUFBRUksUUFBUSxDQUFDQyxPQUFPLENBQUNHLFFBQVE7Ozs7OzswQkFFOUIsOERBQUNDO2dCQUFJUCxXQUFVOzBCQUNaVCxXQUFXaUIsR0FBRyxDQUFDLENBQUNDLHlCQUNmLDhEQUFDQzt3QkFFQ0MsTUFBTSxhQUEwQixPQUFiRixTQUFTakIsR0FBRzt3QkFDL0JRLFdBQVU7OzBDQUVWLDhEQUFDTztnQ0FBSVAsV0FBVyxzQ0FBdUQsT0FBakJTLFNBQVNkLE9BQU8sRUFBQzs7Ozs7OzBDQUN2RSw4REFBQ1k7Z0NBQUlQLFdBQVU7O2tEQUNiLDhEQUFDWTt3Q0FBS1osV0FBVTtrREFBNkJTLFNBQVNmLElBQUk7Ozs7OztrREFDMUQsOERBQUNtQjt3Q0FBR2IsV0FBVTtrREFDWEYsRUFBRVAsVUFBVSxDQUFDa0IsU0FBU2pCLEdBQUcsQ0FBQzs7Ozs7O2tEQUU3Qiw4REFBQ2E7d0NBQUVMLFdBQVU7OzRDQUNWUyxTQUFTaEIsS0FBSzs0Q0FBQzs0Q0FBRUssRUFBRUksUUFBUSxDQUFDWSxLQUFLLENBQUNDLE1BQU07Ozs7Ozs7Ozs7Ozs7O3VCQVh4Q04sU0FBU2pCLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQjdCO0dBbEN3Qkk7O1FBQ0RQLGtFQUFXQTs7O0tBRFZPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NhdGVnb3JpZXNHcmlkLnRzeD81NjgyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUxhbmd1YWdlIH0gZnJvbSAnQC9jb250ZXh0cy9MYW5ndWFnZUNvbnRleHQnO1xyXG5pbXBvcnQgeyB0cmFuc2xhdGlvbnMsIENhdGVnb3J5S2V5IH0gZnJvbSAnQC9jb25maWcvdHJhbnNsYXRpb25zJztcclxuXHJcbmNvbnN0IGNhdGVnb3JpZXMgPSBbXHJcbiAgeyBrZXk6ICdwaGlsb3NvcGh5JyBhcyBDYXRlZ29yeUtleSwgY291bnQ6IDEyMzQsIGljb246ICfwn6SUJywgYmdDbGFzczogJ2Zyb20taW5kaWdvLTUwMC8yMCB0by1wdXJwbGUtNTAwLzIwJyB9LFxyXG4gIHsga2V5OiAnbGl0ZXJhdHVyZScgYXMgQ2F0ZWdvcnlLZXksIGNvdW50OiA4OTAsIGljb246ICfwn5OaJywgYmdDbGFzczogJ2Zyb20teWVsbG93LTUwMC8yMCB0by1hbWJlci01MDAvMjAnIH0sXHJcbiAgeyBrZXk6ICdzY2llbmNlJyBhcyBDYXRlZ29yeUtleSwgY291bnQ6IDU2NywgaWNvbjogJ/CflKwnLCBiZ0NsYXNzOiAnZnJvbS1jeWFuLTUwMC8yMCB0by1ibHVlLTUwMC8yMCcgfSxcclxuICB7IGtleTogJ2FydCcgYXMgQ2F0ZWdvcnlLZXksIGNvdW50OiA0MzIsIGljb246ICfwn46oJywgYmdDbGFzczogJ2Zyb20tZnVjaHNpYS01MDAvMjAgdG8tcGluay01MDAvMjAnIH0sXHJcbiAgeyBrZXk6ICdoaXN0b3J5JyBhcyBDYXRlZ29yeUtleSwgY291bnQ6IDc2NSwgaWNvbjogJ+KMmycsIGJnQ2xhc3M6ICdmcm9tLWFtYmVyLTUwMC8yMCB0by1vcmFuZ2UtNTAwLzIwJyB9LFxyXG4gIHsga2V5OiAncG9saXRpY3MnIGFzIENhdGVnb3J5S2V5LCBjb3VudDogMzIxLCBpY29uOiAn4pqW77iPJywgYmdDbGFzczogJ2Zyb20tc2xhdGUtNTAwLzIwIHRvLWdyYXktNTAwLzIwJyB9LFxyXG4gIHsga2V5OiAnZWNvbm9taWNzJyBhcyBDYXRlZ29yeUtleSwgY291bnQ6IDU0MywgaWNvbjogJ/Cfk4gnLCBiZ0NsYXNzOiAnZnJvbS1lbWVyYWxkLTUwMC8yMCB0by10ZWFsLTUwMC8yMCcgfSxcclxuICB7IGtleTogJ2VkdWNhdGlvbicgYXMgQ2F0ZWdvcnlLZXksIGNvdW50OiA2NzgsIGljb246ICfwn46TJywgYmdDbGFzczogJ2Zyb20tdmlvbGV0LTUwMC8yMCB0by1wdXJwbGUtNTAwLzIwJyB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcmllc0dyaWQoKSB7XHJcbiAgY29uc3QgeyBsYW5ndWFnZSB9ID0gdXNlTGFuZ3VhZ2UoKTtcclxuICBjb25zdCB0ID0gdHJhbnNsYXRpb25zW2xhbmd1YWdlXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBweS0yMFwiPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgbWQ6dGV4dC01eGwgZm9udC1bb3N3YWxkXSBmb250LWJvbGQgdGV4dC1kYXJrLTkwMCBtYi02IHRyYWNraW5nLXRpZ2h0IHVwcGVyY2FzZSAhbGVhZGluZy1ub25lXCI+XHJcbiAgICAgICAge3Quc2VjdGlvbnMuZXhwbG9yZS50aXRsZX1cclxuICAgICAgPC9oMj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBtZDp0ZXh0LXhsIHRleHQtZGFyay01MDAgbWItMTYgZm9udC1saWdodCBtYXgtdy0zeGxcIj5cclxuICAgICAgICB7dC5zZWN0aW9ucy5leHBsb3JlLnN1YnRpdGxlfVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtMyBsZzpncmlkLWNvbHMtNCBnYXAtOFwiPlxyXG4gICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IChcclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGtleT17Y2F0ZWdvcnkua2V5fVxyXG4gICAgICAgICAgICBocmVmPXtgL2NhdGVnb3J5LyR7Y2F0ZWdvcnkua2V5fWB9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLTJ4bCBiZy1kYXJrLTEwMC81MCBob3ZlcjpzY2FsZS0xMDUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLWJyICR7Y2F0ZWdvcnkuYmdDbGFzc30gb3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktODAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwYH0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBwLTggZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBtZDp0ZXh0LTZ4bCBtYi00XCI+e2NhdGVnb3J5Lmljb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1kOnRleHQtMnhsIGZvbnQtW29zd2FsZF0gZm9udC1tZWRpdW0gdGV4dC1kYXJrLTgwMCBtYi0yIHVwcGVyY2FzZSB0cmFja2luZy13aWRlXCI+XHJcbiAgICAgICAgICAgICAgICB7dC5jYXRlZ29yaWVzW2NhdGVnb3J5LmtleV19XHJcbiAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC1kYXJrLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAge2NhdGVnb3J5LmNvdW50fSB7dC5zZWN0aW9ucy5zdGF0cy5xdW90ZXN9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufSAiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VMYW5ndWFnZSIsInRyYW5zbGF0aW9ucyIsImNhdGVnb3JpZXMiLCJrZXkiLCJjb3VudCIsImljb24iLCJiZ0NsYXNzIiwiQ2F0ZWdvcmllc0dyaWQiLCJsYW5ndWFnZSIsInQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDIiLCJzZWN0aW9ucyIsImV4cGxvcmUiLCJ0aXRsZSIsInAiLCJzdWJ0aXRsZSIsImRpdiIsIm1hcCIsImNhdGVnb3J5IiwiYSIsImhyZWYiLCJzcGFuIiwiaDMiLCJzdGF0cyIsInF1b3RlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/CategoriesGrid.tsx\n"));

/***/ })

});