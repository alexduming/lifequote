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

/***/ "(app-pages-browser)/./src/contexts/LanguageContext.tsx":
/*!******************************************!*\
  !*** ./src/contexts/LanguageContext.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LanguageProvider: function() { return /* binding */ LanguageProvider; },\n/* harmony export */   useLanguage: function() { return /* binding */ useLanguage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ LanguageProvider,useLanguage auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nconst defaultContext = {\n    language: \"en\",\n    setLanguage: ()=>{}\n};\nconst LanguageContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(defaultContext);\nfunction LanguageProvider(param) {\n    let { children } = param;\n    _s();\n    const [, forceUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)((x)=>x + 1, 0);\n    const [language, setLanguageState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{\n        if (true) {\n            const savedLanguage = localStorage.getItem(\"language\");\n            if (savedLanguage && (savedLanguage === \"en\" || savedLanguage === \"zh\")) {\n                return savedLanguage;\n            }\n            const browserLang = navigator.language.toLowerCase();\n            return browserLang.startsWith(\"zh\") ? \"zh\" : \"en\";\n        }\n        return \"en\";\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (true) {\n            localStorage.setItem(\"language\", language);\n            document.documentElement.lang = language;\n            document.documentElement.setAttribute(\"data-language\", language);\n            forceUpdate();\n        }\n    }, [\n        language\n    ]);\n    const setLanguage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((lang)=>{\n        if (lang === \"en\" || lang === \"zh\") {\n            setLanguageState(lang);\n            if (true) {\n                window.dispatchEvent(new Event(\"languagechange\"));\n            }\n        }\n    }, []);\n    const contextValue = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(()=>({\n            language,\n            setLanguage\n        }), [\n        language,\n        setLanguage\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LanguageContext.Provider, {\n        value: contextValue,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\contexts\\\\LanguageContext.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_s(LanguageProvider, \"0Sf/V6VcS0tlVbWWF8kcrEwbMbA=\");\n_c = LanguageProvider;\nfunction useLanguage() {\n    _s1();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LanguageContext);\n    if (context === undefined) {\n        throw new Error(\"useLanguage must be used within a LanguageProvider\");\n    }\n    return context;\n}\n_s1(useLanguage, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\nvar _c;\n$RefreshReg$(_c, \"LanguageProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0cy9MYW5ndWFnZUNvbnRleHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFdUc7QUFRdkcsTUFBTU8saUJBQXNDO0lBQzFDQyxVQUFVO0lBQ1ZDLGFBQWEsS0FBTztBQUN0QjtBQUVBLE1BQU1DLGdDQUFrQlQsb0RBQWFBLENBQXNCTTtBQUVwRCxTQUFTSSxpQkFBaUIsS0FBMkM7UUFBM0MsRUFBRUMsUUFBUSxFQUFpQyxHQUEzQzs7SUFDL0IsTUFBTSxHQUFHQyxZQUFZLEdBQUdQLGlEQUFVQSxDQUFDUSxDQUFBQSxJQUFLQSxJQUFJLEdBQUc7SUFDL0MsTUFBTSxDQUFDTixVQUFVTyxpQkFBaUIsR0FBR1osK0NBQVFBLENBQVc7UUFDdEQsSUFBSSxJQUFrQixFQUFhO1lBQ2pDLE1BQU1hLGdCQUFnQkMsYUFBYUMsT0FBTyxDQUFDO1lBQzNDLElBQUlGLGlCQUFrQkEsQ0FBQUEsa0JBQWtCLFFBQVFBLGtCQUFrQixJQUFHLEdBQUk7Z0JBQ3ZFLE9BQU9BO1lBQ1Q7WUFDQSxNQUFNRyxjQUFjQyxVQUFVWixRQUFRLENBQUNhLFdBQVc7WUFDbEQsT0FBT0YsWUFBWUcsVUFBVSxDQUFDLFFBQVEsT0FBTztRQUMvQztRQUNBLE9BQU87SUFDVDtJQUVBbEIsZ0RBQVNBLENBQUM7UUFDUixJQUFJLElBQWtCLEVBQWE7WUFDakNhLGFBQWFNLE9BQU8sQ0FBQyxZQUFZZjtZQUNqQ2dCLFNBQVNDLGVBQWUsQ0FBQ0MsSUFBSSxHQUFHbEI7WUFDaENnQixTQUFTQyxlQUFlLENBQUNFLFlBQVksQ0FBQyxpQkFBaUJuQjtZQUN2REs7UUFDRjtJQUNGLEdBQUc7UUFBQ0w7S0FBUztJQUViLE1BQU1DLGNBQWNKLGtEQUFXQSxDQUFDLENBQUNxQjtRQUMvQixJQUFJQSxTQUFTLFFBQVFBLFNBQVMsTUFBTTtZQUNsQ1gsaUJBQWlCVztZQUNqQixJQUFJLElBQWtCLEVBQWE7Z0JBQ2pDRSxPQUFPQyxhQUFhLENBQUMsSUFBSUMsTUFBTTtZQUNqQztRQUNGO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUMsZUFBZS9CLG9EQUFhLENBQUMsSUFBTztZQUN4Q1E7WUFDQUM7UUFDRixJQUFJO1FBQUNEO1FBQVVDO0tBQVk7SUFFM0IscUJBQ0UsOERBQUNDLGdCQUFnQnVCLFFBQVE7UUFBQ0MsT0FBT0g7a0JBQzlCbkI7Ozs7OztBQUdQO0dBMUNnQkQ7S0FBQUE7QUE0Q1QsU0FBU3dCOztJQUNkLE1BQU1DLFVBQVVsQyxpREFBVUEsQ0FBQ1E7SUFDM0IsSUFBSTBCLFlBQVlDLFdBQVc7UUFDekIsTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0lBQ0EsT0FBT0Y7QUFDVDtJQU5nQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0xhbmd1YWdlQ29udGV4dC50c3g/NDE4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2ssIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExhbmd1YWdlIH0gZnJvbSAnQC9jb25maWcvdHJhbnNsYXRpb25zJztcclxuXHJcbmludGVyZmFjZSBMYW5ndWFnZUNvbnRleHRUeXBlIHtcclxuICBsYW5ndWFnZTogTGFuZ3VhZ2U7XHJcbiAgc2V0TGFuZ3VhZ2U6IChsYW5nOiBMYW5ndWFnZSkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdENvbnRleHQ6IExhbmd1YWdlQ29udGV4dFR5cGUgPSB7XHJcbiAgbGFuZ3VhZ2U6ICdlbicsXHJcbiAgc2V0TGFuZ3VhZ2U6ICgpID0+IHt9LFxyXG59O1xyXG5cclxuY29uc3QgTGFuZ3VhZ2VDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxMYW5ndWFnZUNvbnRleHRUeXBlPihkZWZhdWx0Q29udGV4dCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTGFuZ3VhZ2VQcm92aWRlcih7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XHJcbiAgY29uc3QgWywgZm9yY2VVcGRhdGVdID0gdXNlUmVkdWNlcih4ID0+IHggKyAxLCAwKTtcclxuICBjb25zdCBbbGFuZ3VhZ2UsIHNldExhbmd1YWdlU3RhdGVdID0gdXNlU3RhdGU8TGFuZ3VhZ2U+KCgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBjb25zdCBzYXZlZExhbmd1YWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmd1YWdlJykgYXMgTGFuZ3VhZ2U7XHJcbiAgICAgIGlmIChzYXZlZExhbmd1YWdlICYmIChzYXZlZExhbmd1YWdlID09PSAnZW4nIHx8IHNhdmVkTGFuZ3VhZ2UgPT09ICd6aCcpKSB7XHJcbiAgICAgICAgcmV0dXJuIHNhdmVkTGFuZ3VhZ2U7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgYnJvd3NlckxhbmcgPSBuYXZpZ2F0b3IubGFuZ3VhZ2UudG9Mb3dlckNhc2UoKTtcclxuICAgICAgcmV0dXJuIGJyb3dzZXJMYW5nLnN0YXJ0c1dpdGgoJ3poJykgPyAnemgnIDogJ2VuJztcclxuICAgIH1cclxuICAgIHJldHVybiAnZW4nO1xyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYW5ndWFnZScsIGxhbmd1YWdlKTtcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSBsYW5ndWFnZTtcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1sYW5ndWFnZScsIGxhbmd1YWdlKTtcclxuICAgICAgZm9yY2VVcGRhdGUoKTtcclxuICAgIH1cclxuICB9LCBbbGFuZ3VhZ2VdKTtcclxuXHJcbiAgY29uc3Qgc2V0TGFuZ3VhZ2UgPSB1c2VDYWxsYmFjaygobGFuZzogTGFuZ3VhZ2UpID0+IHtcclxuICAgIGlmIChsYW5nID09PSAnZW4nIHx8IGxhbmcgPT09ICd6aCcpIHtcclxuICAgICAgc2V0TGFuZ3VhZ2VTdGF0ZShsYW5nKTtcclxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdsYW5ndWFnZWNoYW5nZScpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgY29udGV4dFZhbHVlID0gUmVhY3QudXNlTWVtbygoKSA9PiAoe1xyXG4gICAgbGFuZ3VhZ2UsXHJcbiAgICBzZXRMYW5ndWFnZSxcclxuICB9KSwgW2xhbmd1YWdlLCBzZXRMYW5ndWFnZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExhbmd1YWdlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dFZhbHVlfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9MYW5ndWFnZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxhbmd1YWdlKCkge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KExhbmd1YWdlQ29udGV4dCk7XHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VMYW5ndWFnZSBtdXN0IGJlIHVzZWQgd2l0aGluIGEgTGFuZ3VhZ2VQcm92aWRlcicpO1xyXG4gIH1cclxuICByZXR1cm4gY29udGV4dDtcclxufSAiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VSZWR1Y2VyIiwiZGVmYXVsdENvbnRleHQiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwiTGFuZ3VhZ2VDb250ZXh0IiwiTGFuZ3VhZ2VQcm92aWRlciIsImNoaWxkcmVuIiwiZm9yY2VVcGRhdGUiLCJ4Iiwic2V0TGFuZ3VhZ2VTdGF0ZSIsInNhdmVkTGFuZ3VhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYnJvd3NlckxhbmciLCJuYXZpZ2F0b3IiLCJ0b0xvd2VyQ2FzZSIsInN0YXJ0c1dpdGgiLCJzZXRJdGVtIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJsYW5nIiwic2V0QXR0cmlidXRlIiwid2luZG93IiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwiY29udGV4dFZhbHVlIiwidXNlTWVtbyIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VMYW5ndWFnZSIsImNvbnRleHQiLCJ1bmRlZmluZWQiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/contexts/LanguageContext.tsx\n"));

/***/ })

});