"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/books/[slug]/page",{

/***/ "(app-pages-browser)/./src/contexts/LanguageContext.tsx":
/*!******************************************!*\
  !*** ./src/contexts/LanguageContext.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LanguageProvider: function() { return /* binding */ LanguageProvider; },\n/* harmony export */   useLanguage: function() { return /* binding */ useLanguage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ LanguageProvider,useLanguage auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nconst defaultContext = {\n    language: \"en\",\n    setLanguage: ()=>{}\n};\nconst LanguageContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(defaultContext);\nfunction LanguageProvider(param) {\n    let { children } = param;\n    _s();\n    // 初始化时从 localStorage 读取语言设置，如果没有则使用浏览器语言\n    const [language, setLanguageState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{\n        if (true) {\n            const savedLanguage = localStorage.getItem(\"language\");\n            if (savedLanguage && (savedLanguage === \"en\" || savedLanguage === \"zh\")) {\n                return savedLanguage;\n            }\n            // 如果没有保存的语言设置，检查浏览器语言\n            const browserLang = navigator.language.toLowerCase();\n            return browserLang.startsWith(\"zh\") ? \"zh\" : \"en\";\n        }\n        return \"en\";\n    });\n    // 同步语言设置到 localStorage 和 document\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (true) {\n            localStorage.setItem(\"language\", language);\n            document.documentElement.lang = language;\n            document.documentElement.setAttribute(\"data-language\", language);\n            // 强制触发重新渲染\n            window.dispatchEvent(new Event(\"languagechange\"));\n        }\n    }, [\n        language\n    ]);\n    // 监听 localStorage 的变化\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleStorageChange = (e)=>{\n            if (e.key === \"language\" && e.newValue) {\n                const newLang = e.newValue;\n                if (newLang === \"en\" || newLang === \"zh\") {\n                    setLanguageState(newLang);\n                }\n            }\n        };\n        window.addEventListener(\"storage\", handleStorageChange);\n        return ()=>window.removeEventListener(\"storage\", handleStorageChange);\n    }, []);\n    const setLanguage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((lang)=>{\n        if (lang === \"en\" || lang === \"zh\") {\n            setLanguageState(lang);\n            // 强制触发重新渲染\n            window.dispatchEvent(new Event(\"languagechange\"));\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LanguageContext.Provider, {\n        value: {\n            language,\n            setLanguage\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\contexts\\\\LanguageContext.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_s(LanguageProvider, \"D0vDFJivy/ox5G2NArKBO1MRbVY=\");\n_c = LanguageProvider;\nfunction useLanguage() {\n    _s1();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LanguageContext);\n    if (context === undefined) {\n        throw new Error(\"useLanguage must be used within a LanguageProvider\");\n    }\n    return context;\n}\n_s1(useLanguage, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\nvar _c;\n$RefreshReg$(_c, \"LanguageProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0cy9MYW5ndWFnZUNvbnRleHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFMkY7QUFRM0YsTUFBTU0saUJBQXNDO0lBQzFDQyxVQUFVO0lBQ1ZDLGFBQWEsS0FBTztBQUN0QjtBQUVBLE1BQU1DLGdDQUFrQlIsb0RBQWFBLENBQXNCSztBQUVwRCxTQUFTSSxpQkFBaUIsS0FBMkM7UUFBM0MsRUFBRUMsUUFBUSxFQUFpQyxHQUEzQzs7SUFDL0IseUNBQXlDO0lBQ3pDLE1BQU0sQ0FBQ0osVUFBVUssaUJBQWlCLEdBQUdULCtDQUFRQSxDQUFXO1FBQ3RELElBQUksSUFBa0IsRUFBYTtZQUNqQyxNQUFNVSxnQkFBZ0JDLGFBQWFDLE9BQU8sQ0FBQztZQUMzQyxJQUFJRixpQkFBa0JBLENBQUFBLGtCQUFrQixRQUFRQSxrQkFBa0IsSUFBRyxHQUFJO2dCQUN2RSxPQUFPQTtZQUNUO1lBQ0Esc0JBQXNCO1lBQ3RCLE1BQU1HLGNBQWNDLFVBQVVWLFFBQVEsQ0FBQ1csV0FBVztZQUNsRCxPQUFPRixZQUFZRyxVQUFVLENBQUMsUUFBUSxPQUFPO1FBQy9DO1FBQ0EsT0FBTztJQUNUO0lBRUEsa0NBQWtDO0lBQ2xDZixnREFBU0EsQ0FBQztRQUNSLElBQUksSUFBa0IsRUFBYTtZQUNqQ1UsYUFBYU0sT0FBTyxDQUFDLFlBQVliO1lBQ2pDYyxTQUFTQyxlQUFlLENBQUNDLElBQUksR0FBR2hCO1lBQ2hDYyxTQUFTQyxlQUFlLENBQUNFLFlBQVksQ0FBQyxpQkFBaUJqQjtZQUN2RCxXQUFXO1lBQ1hrQixPQUFPQyxhQUFhLENBQUMsSUFBSUMsTUFBTTtRQUNqQztJQUNGLEdBQUc7UUFBQ3BCO0tBQVM7SUFFYixzQkFBc0I7SUFDdEJILGdEQUFTQSxDQUFDO1FBQ1IsTUFBTXdCLHNCQUFzQixDQUFDQztZQUMzQixJQUFJQSxFQUFFQyxHQUFHLEtBQUssY0FBY0QsRUFBRUUsUUFBUSxFQUFFO2dCQUN0QyxNQUFNQyxVQUFVSCxFQUFFRSxRQUFRO2dCQUMxQixJQUFJQyxZQUFZLFFBQVFBLFlBQVksTUFBTTtvQkFDeENwQixpQkFBaUJvQjtnQkFDbkI7WUFDRjtRQUNGO1FBRUFQLE9BQU9RLGdCQUFnQixDQUFDLFdBQVdMO1FBQ25DLE9BQU8sSUFBTUgsT0FBT1MsbUJBQW1CLENBQUMsV0FBV047SUFDckQsR0FBRyxFQUFFO0lBRUwsTUFBTXBCLGNBQWNILGtEQUFXQSxDQUFDLENBQUNrQjtRQUMvQixJQUFJQSxTQUFTLFFBQVFBLFNBQVMsTUFBTTtZQUNsQ1gsaUJBQWlCVztZQUNqQixXQUFXO1lBQ1hFLE9BQU9DLGFBQWEsQ0FBQyxJQUFJQyxNQUFNO1FBQ2pDO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNsQixnQkFBZ0IwQixRQUFRO1FBQUNDLE9BQU87WUFBRTdCO1lBQVVDO1FBQVk7a0JBQ3RERzs7Ozs7O0FBR1A7R0F0RGdCRDtLQUFBQTtBQXdEVCxTQUFTMkI7O0lBQ2QsTUFBTUMsVUFBVXBDLGlEQUFVQSxDQUFDTztJQUMzQixJQUFJNkIsWUFBWUMsV0FBVztRQUN6QixNQUFNLElBQUlDLE1BQU07SUFDbEI7SUFDQSxPQUFPRjtBQUNUO0lBTmdCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dHMvTGFuZ3VhZ2VDb250ZXh0LnRzeD80MThlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICdAL2NvbmZpZy90cmFuc2xhdGlvbnMnO1xyXG5cclxuaW50ZXJmYWNlIExhbmd1YWdlQ29udGV4dFR5cGUge1xyXG4gIGxhbmd1YWdlOiBMYW5ndWFnZTtcclxuICBzZXRMYW5ndWFnZTogKGxhbmc6IExhbmd1YWdlKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBkZWZhdWx0Q29udGV4dDogTGFuZ3VhZ2VDb250ZXh0VHlwZSA9IHtcclxuICBsYW5ndWFnZTogJ2VuJyxcclxuICBzZXRMYW5ndWFnZTogKCkgPT4ge30sXHJcbn07XHJcblxyXG5jb25zdCBMYW5ndWFnZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PExhbmd1YWdlQ29udGV4dFR5cGU+KGRlZmF1bHRDb250ZXh0KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMYW5ndWFnZVByb3ZpZGVyKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcclxuICAvLyDliJ3lp4vljJbml7bku44gbG9jYWxTdG9yYWdlIOivu+WPluivreiogOiuvue9ru+8jOWmguaenOayoeacieWImeS9v+eUqOa1j+iniOWZqOivreiogFxyXG4gIGNvbnN0IFtsYW5ndWFnZSwgc2V0TGFuZ3VhZ2VTdGF0ZV0gPSB1c2VTdGF0ZTxMYW5ndWFnZT4oKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGNvbnN0IHNhdmVkTGFuZ3VhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ3VhZ2UnKSBhcyBMYW5ndWFnZTtcclxuICAgICAgaWYgKHNhdmVkTGFuZ3VhZ2UgJiYgKHNhdmVkTGFuZ3VhZ2UgPT09ICdlbicgfHwgc2F2ZWRMYW5ndWFnZSA9PT0gJ3poJykpIHtcclxuICAgICAgICByZXR1cm4gc2F2ZWRMYW5ndWFnZTtcclxuICAgICAgfVxyXG4gICAgICAvLyDlpoLmnpzmsqHmnInkv53lrZjnmoTor63oqIDorr7nva7vvIzmo4Dmn6XmtY/op4jlmajor63oqIBcclxuICAgICAgY29uc3QgYnJvd3NlckxhbmcgPSBuYXZpZ2F0b3IubGFuZ3VhZ2UudG9Mb3dlckNhc2UoKTtcclxuICAgICAgcmV0dXJuIGJyb3dzZXJMYW5nLnN0YXJ0c1dpdGgoJ3poJykgPyAnemgnIDogJ2VuJztcclxuICAgIH1cclxuICAgIHJldHVybiAnZW4nO1xyXG4gIH0pO1xyXG5cclxuICAvLyDlkIzmraXor63oqIDorr7nva7liLAgbG9jYWxTdG9yYWdlIOWSjCBkb2N1bWVudFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhbmd1YWdlJywgbGFuZ3VhZ2UpO1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IGxhbmd1YWdlO1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWxhbmd1YWdlJywgbGFuZ3VhZ2UpO1xyXG4gICAgICAvLyDlvLrliLbop6blj5Hph43mlrDmuLLmn5NcclxuICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdsYW5ndWFnZWNoYW5nZScpKTtcclxuICAgIH1cclxuICB9LCBbbGFuZ3VhZ2VdKTtcclxuXHJcbiAgLy8g55uR5ZCsIGxvY2FsU3RvcmFnZSDnmoTlj5jljJZcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlU3RvcmFnZUNoYW5nZSA9IChlOiBTdG9yYWdlRXZlbnQpID0+IHtcclxuICAgICAgaWYgKGUua2V5ID09PSAnbGFuZ3VhZ2UnICYmIGUubmV3VmFsdWUpIHtcclxuICAgICAgICBjb25zdCBuZXdMYW5nID0gZS5uZXdWYWx1ZSBhcyBMYW5ndWFnZTtcclxuICAgICAgICBpZiAobmV3TGFuZyA9PT0gJ2VuJyB8fCBuZXdMYW5nID09PSAnemgnKSB7XHJcbiAgICAgICAgICBzZXRMYW5ndWFnZVN0YXRlKG5ld0xhbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIGhhbmRsZVN0b3JhZ2VDaGFuZ2UpO1xyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgaGFuZGxlU3RvcmFnZUNoYW5nZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzZXRMYW5ndWFnZSA9IHVzZUNhbGxiYWNrKChsYW5nOiBMYW5ndWFnZSkgPT4ge1xyXG4gICAgaWYgKGxhbmcgPT09ICdlbicgfHwgbGFuZyA9PT0gJ3poJykge1xyXG4gICAgICBzZXRMYW5ndWFnZVN0YXRlKGxhbmcpO1xyXG4gICAgICAvLyDlvLrliLbop6blj5Hph43mlrDmuLLmn5NcclxuICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdsYW5ndWFnZWNoYW5nZScpKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGFuZ3VhZ2VDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGxhbmd1YWdlLCBzZXRMYW5ndWFnZSB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9MYW5ndWFnZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxhbmd1YWdlKCkge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KExhbmd1YWdlQ29udGV4dCk7XHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VMYW5ndWFnZSBtdXN0IGJlIHVzZWQgd2l0aGluIGEgTGFuZ3VhZ2VQcm92aWRlcicpO1xyXG4gIH1cclxuICByZXR1cm4gY29udGV4dDtcclxufSAiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ2FsbGJhY2siLCJkZWZhdWx0Q29udGV4dCIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJMYW5ndWFnZUNvbnRleHQiLCJMYW5ndWFnZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZXRMYW5ndWFnZVN0YXRlIiwic2F2ZWRMYW5ndWFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJicm93c2VyTGFuZyIsIm5hdmlnYXRvciIsInRvTG93ZXJDYXNlIiwic3RhcnRzV2l0aCIsInNldEl0ZW0iLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImxhbmciLCJzZXRBdHRyaWJ1dGUiLCJ3aW5kb3ciLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJoYW5kbGVTdG9yYWdlQ2hhbmdlIiwiZSIsImtleSIsIm5ld1ZhbHVlIiwibmV3TGFuZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUxhbmd1YWdlIiwiY29udGV4dCIsInVuZGVmaW5lZCIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/contexts/LanguageContext.tsx\n"));

/***/ })

});