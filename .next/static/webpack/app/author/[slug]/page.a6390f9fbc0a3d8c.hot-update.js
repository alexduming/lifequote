"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/author/[slug]/page",{

/***/ "(app-pages-browser)/./src/contexts/LanguageContext.tsx":
/*!******************************************!*\
  !*** ./src/contexts/LanguageContext.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LanguageProvider: function() { return /* binding */ LanguageProvider; },\n/* harmony export */   useLanguage: function() { return /* binding */ useLanguage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ LanguageProvider,useLanguage auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nconst defaultContext = {\n    language: \"en\",\n    setLanguage: ()=>{}\n};\nconst LanguageContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(defaultContext);\nfunction LanguageProvider(param) {\n    let { children } = param;\n    _s();\n    // 初始化时从 localStorage 读取语言设置，如果没有则使用浏览器语言\n    const [language, setLanguageState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{\n        if (true) {\n            const savedLanguage = localStorage.getItem(\"language\");\n            if (savedLanguage && (savedLanguage === \"en\" || savedLanguage === \"zh\")) {\n                return savedLanguage;\n            }\n            // 如果没有保存的语言设置，检查浏览器语言\n            const browserLang = navigator.language.toLowerCase();\n            return browserLang.startsWith(\"zh\") ? \"zh\" : \"en\";\n        }\n        return \"en\";\n    });\n    // 监听 localStorage 的变化\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleStorageChange = (e)=>{\n            if (e.key === \"language\" && e.newValue) {\n                const newLang = e.newValue;\n                if (newLang === \"en\" || newLang === \"zh\") {\n                    setLanguageState(newLang);\n                }\n            }\n        };\n        window.addEventListener(\"storage\", handleStorageChange);\n        return ()=>window.removeEventListener(\"storage\", handleStorageChange);\n    }, []);\n    // 同步语言设置到 localStorage 和 document\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (true) {\n            localStorage.setItem(\"language\", language);\n            document.documentElement.lang = language;\n            document.documentElement.setAttribute(\"data-language\", language);\n        }\n    }, [\n        language\n    ]);\n    const setLanguage = (lang)=>{\n        if (lang === \"en\" || lang === \"zh\") {\n            setLanguageState(lang);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LanguageContext.Provider, {\n        value: {\n            language,\n            setLanguage\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\contexts\\\\LanguageContext.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_s(LanguageProvider, \"ZZNgYvYsCkAgxNgVRI/y9rQ70u8=\");\n_c = LanguageProvider;\nfunction useLanguage() {\n    _s1();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LanguageContext);\n    if (context === undefined) {\n        throw new Error(\"useLanguage must be used within a LanguageProvider\");\n    }\n    return context;\n}\n_s1(useLanguage, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\nvar _c;\n$RefreshReg$(_c, \"LanguageProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0cy9MYW5ndWFnZUNvbnRleHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFOEU7QUFROUUsTUFBTUssaUJBQXNDO0lBQzFDQyxVQUFVO0lBQ1ZDLGFBQWEsS0FBTztBQUN0QjtBQUVBLE1BQU1DLGdDQUFrQlAsb0RBQWFBLENBQXNCSTtBQUVwRCxTQUFTSSxpQkFBaUIsS0FBMkM7UUFBM0MsRUFBRUMsUUFBUSxFQUFpQyxHQUEzQzs7SUFDL0IseUNBQXlDO0lBQ3pDLE1BQU0sQ0FBQ0osVUFBVUssaUJBQWlCLEdBQUdSLCtDQUFRQSxDQUFXO1FBQ3RELElBQUksSUFBa0IsRUFBYTtZQUNqQyxNQUFNUyxnQkFBZ0JDLGFBQWFDLE9BQU8sQ0FBQztZQUMzQyxJQUFJRixpQkFBa0JBLENBQUFBLGtCQUFrQixRQUFRQSxrQkFBa0IsSUFBRyxHQUFJO2dCQUN2RSxPQUFPQTtZQUNUO1lBQ0Esc0JBQXNCO1lBQ3RCLE1BQU1HLGNBQWNDLFVBQVVWLFFBQVEsQ0FBQ1csV0FBVztZQUNsRCxPQUFPRixZQUFZRyxVQUFVLENBQUMsUUFBUSxPQUFPO1FBQy9DO1FBQ0EsT0FBTztJQUNUO0lBRUEsc0JBQXNCO0lBQ3RCZCxnREFBU0EsQ0FBQztRQUNSLE1BQU1lLHNCQUFzQixDQUFDQztZQUMzQixJQUFJQSxFQUFFQyxHQUFHLEtBQUssY0FBY0QsRUFBRUUsUUFBUSxFQUFFO2dCQUN0QyxNQUFNQyxVQUFVSCxFQUFFRSxRQUFRO2dCQUMxQixJQUFJQyxZQUFZLFFBQVFBLFlBQVksTUFBTTtvQkFDeENaLGlCQUFpQlk7Z0JBQ25CO1lBQ0Y7UUFDRjtRQUVBQyxPQUFPQyxnQkFBZ0IsQ0FBQyxXQUFXTjtRQUNuQyxPQUFPLElBQU1LLE9BQU9FLG1CQUFtQixDQUFDLFdBQVdQO0lBQ3JELEdBQUcsRUFBRTtJQUVMLGtDQUFrQztJQUNsQ2YsZ0RBQVNBLENBQUM7UUFDUixJQUFJLElBQWtCLEVBQWE7WUFDakNTLGFBQWFjLE9BQU8sQ0FBQyxZQUFZckI7WUFDakNzQixTQUFTQyxlQUFlLENBQUNDLElBQUksR0FBR3hCO1lBQ2hDc0IsU0FBU0MsZUFBZSxDQUFDRSxZQUFZLENBQUMsaUJBQWlCekI7UUFDekQ7SUFDRixHQUFHO1FBQUNBO0tBQVM7SUFFYixNQUFNQyxjQUFjLENBQUN1QjtRQUNuQixJQUFJQSxTQUFTLFFBQVFBLFNBQVMsTUFBTTtZQUNsQ25CLGlCQUFpQm1CO1FBQ25CO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ3RCLGdCQUFnQndCLFFBQVE7UUFBQ0MsT0FBTztZQUFFM0I7WUFBVUM7UUFBWTtrQkFDdERHOzs7Ozs7QUFHUDtHQWxEZ0JEO0tBQUFBO0FBb0RULFNBQVN5Qjs7SUFDZCxNQUFNQyxVQUFVakMsaURBQVVBLENBQUNNO0lBQzNCLElBQUkyQixZQUFZQyxXQUFXO1FBQ3pCLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtJQUNBLE9BQU9GO0FBQ1Q7SUFOZ0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0cy9MYW5ndWFnZUNvbnRleHQudHN4PzQxOGUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExhbmd1YWdlIH0gZnJvbSAnQC9jb25maWcvdHJhbnNsYXRpb25zJztcclxuXHJcbmludGVyZmFjZSBMYW5ndWFnZUNvbnRleHRUeXBlIHtcclxuICBsYW5ndWFnZTogTGFuZ3VhZ2U7XHJcbiAgc2V0TGFuZ3VhZ2U6IChsYW5nOiBMYW5ndWFnZSkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdENvbnRleHQ6IExhbmd1YWdlQ29udGV4dFR5cGUgPSB7XHJcbiAgbGFuZ3VhZ2U6ICdlbicsXHJcbiAgc2V0TGFuZ3VhZ2U6ICgpID0+IHt9LFxyXG59O1xyXG5cclxuY29uc3QgTGFuZ3VhZ2VDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxMYW5ndWFnZUNvbnRleHRUeXBlPihkZWZhdWx0Q29udGV4dCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTGFuZ3VhZ2VQcm92aWRlcih7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XHJcbiAgLy8g5Yid5aeL5YyW5pe25LuOIGxvY2FsU3RvcmFnZSDor7vlj5bor63oqIDorr7nva7vvIzlpoLmnpzmsqHmnInliJnkvb/nlKjmtY/op4jlmajor63oqIBcclxuICBjb25zdCBbbGFuZ3VhZ2UsIHNldExhbmd1YWdlU3RhdGVdID0gdXNlU3RhdGU8TGFuZ3VhZ2U+KCgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBjb25zdCBzYXZlZExhbmd1YWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmd1YWdlJykgYXMgTGFuZ3VhZ2U7XHJcbiAgICAgIGlmIChzYXZlZExhbmd1YWdlICYmIChzYXZlZExhbmd1YWdlID09PSAnZW4nIHx8IHNhdmVkTGFuZ3VhZ2UgPT09ICd6aCcpKSB7XHJcbiAgICAgICAgcmV0dXJuIHNhdmVkTGFuZ3VhZ2U7XHJcbiAgICAgIH1cclxuICAgICAgLy8g5aaC5p6c5rKh5pyJ5L+d5a2Y55qE6K+t6KiA6K6+572u77yM5qOA5p+l5rWP6KeI5Zmo6K+t6KiAXHJcbiAgICAgIGNvbnN0IGJyb3dzZXJMYW5nID0gbmF2aWdhdG9yLmxhbmd1YWdlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIHJldHVybiBicm93c2VyTGFuZy5zdGFydHNXaXRoKCd6aCcpID8gJ3poJyA6ICdlbic7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJ2VuJztcclxuICB9KTtcclxuXHJcbiAgLy8g55uR5ZCsIGxvY2FsU3RvcmFnZSDnmoTlj5jljJZcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlU3RvcmFnZUNoYW5nZSA9IChlOiBTdG9yYWdlRXZlbnQpID0+IHtcclxuICAgICAgaWYgKGUua2V5ID09PSAnbGFuZ3VhZ2UnICYmIGUubmV3VmFsdWUpIHtcclxuICAgICAgICBjb25zdCBuZXdMYW5nID0gZS5uZXdWYWx1ZSBhcyBMYW5ndWFnZTtcclxuICAgICAgICBpZiAobmV3TGFuZyA9PT0gJ2VuJyB8fCBuZXdMYW5nID09PSAnemgnKSB7XHJcbiAgICAgICAgICBzZXRMYW5ndWFnZVN0YXRlKG5ld0xhbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIGhhbmRsZVN0b3JhZ2VDaGFuZ2UpO1xyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgaGFuZGxlU3RvcmFnZUNoYW5nZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyDlkIzmraXor63oqIDorr7nva7liLAgbG9jYWxTdG9yYWdlIOWSjCBkb2N1bWVudFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhbmd1YWdlJywgbGFuZ3VhZ2UpO1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IGxhbmd1YWdlO1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWxhbmd1YWdlJywgbGFuZ3VhZ2UpO1xyXG4gICAgfVxyXG4gIH0sIFtsYW5ndWFnZV0pO1xyXG5cclxuICBjb25zdCBzZXRMYW5ndWFnZSA9IChsYW5nOiBMYW5ndWFnZSkgPT4ge1xyXG4gICAgaWYgKGxhbmcgPT09ICdlbicgfHwgbGFuZyA9PT0gJ3poJykge1xyXG4gICAgICBzZXRMYW5ndWFnZVN0YXRlKGxhbmcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGFuZ3VhZ2VDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGxhbmd1YWdlLCBzZXRMYW5ndWFnZSB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9MYW5ndWFnZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxhbmd1YWdlKCkge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KExhbmd1YWdlQ29udGV4dCk7XHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VMYW5ndWFnZSBtdXN0IGJlIHVzZWQgd2l0aGluIGEgTGFuZ3VhZ2VQcm92aWRlcicpO1xyXG4gIH1cclxuICByZXR1cm4gY29udGV4dDtcclxufSAiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZGVmYXVsdENvbnRleHQiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwiTGFuZ3VhZ2VDb250ZXh0IiwiTGFuZ3VhZ2VQcm92aWRlciIsImNoaWxkcmVuIiwic2V0TGFuZ3VhZ2VTdGF0ZSIsInNhdmVkTGFuZ3VhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYnJvd3NlckxhbmciLCJuYXZpZ2F0b3IiLCJ0b0xvd2VyQ2FzZSIsInN0YXJ0c1dpdGgiLCJoYW5kbGVTdG9yYWdlQ2hhbmdlIiwiZSIsImtleSIsIm5ld1ZhbHVlIiwibmV3TGFuZyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0SXRlbSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwibGFuZyIsInNldEF0dHJpYnV0ZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VMYW5ndWFnZSIsImNvbnRleHQiLCJ1bmRlZmluZWQiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/contexts/LanguageContext.tsx\n"));

/***/ })

});