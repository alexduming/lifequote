"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/category/[slug]/page",{

/***/ "(app-pages-browser)/./src/contexts/LanguageContext.tsx":
/*!******************************************!*\
  !*** ./src/contexts/LanguageContext.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LanguageProvider: function() { return /* binding */ LanguageProvider; },\n/* harmony export */   useLanguage: function() { return /* binding */ useLanguage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/**\r\n * @version 0.8\r\n * @description 语言上下文实现，包含以下功能：\r\n * - 支持中英文切换\r\n * - 本地存储语言偏好\r\n * - 浏览器语言检测\r\n * - SSR 支持\r\n * - 客户端水合优化\r\n */ /* __next_internal_client_entry_do_not_use__ LanguageProvider,useLanguage auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nconst defaultContext = {\n    language: \"en\",\n    setLanguage: ()=>{}\n};\nconst LanguageContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(defaultContext);\nfunction LanguageProvider(param) {\n    let { children } = param;\n    _s();\n    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [, forceUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)((x)=>x + 1, 0);\n    const [language, setLanguageState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"en\");\n    // 只在客户端初始化语言设置\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedLanguage = localStorage.getItem(\"language\");\n        if (savedLanguage && (savedLanguage === \"en\" || savedLanguage === \"zh\")) {\n            setLanguageState(savedLanguage);\n        } else {\n            const browserLang = navigator.language.toLowerCase();\n            const initialLang = browserLang.startsWith(\"zh\") ? \"zh\" : \"en\";\n            setLanguageState(initialLang);\n            localStorage.setItem(\"language\", initialLang);\n        }\n        setMounted(true);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (mounted) {\n            localStorage.setItem(\"language\", language);\n            document.documentElement.lang = language;\n            document.documentElement.setAttribute(\"data-language\", language);\n            forceUpdate();\n        }\n    }, [\n        language,\n        mounted\n    ]);\n    const setLanguage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((lang)=>{\n        if (lang === \"en\" || lang === \"zh\") {\n            setLanguageState(lang);\n            if (true) {\n                window.dispatchEvent(new Event(\"languagechange\"));\n            }\n        }\n    }, []);\n    const contextValue = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(()=>({\n            language,\n            setLanguage\n        }), [\n        language,\n        setLanguage\n    ]);\n    // 在客户端挂载前使用默认语言\n    if (!mounted) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: children\n        }, void 0, false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LanguageContext.Provider, {\n        value: contextValue,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\contexts\\\\LanguageContext.tsx\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, this);\n}\n_s(LanguageProvider, \"XODONbQTa3dnqBJDt9CdOvKHCWY=\");\n_c = LanguageProvider;\nfunction useLanguage() {\n    _s1();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LanguageContext);\n    if (context === undefined) {\n        throw new Error(\"useLanguage must be used within a LanguageProvider\");\n    }\n    return context;\n}\n_s1(useLanguage, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\nvar _c;\n$RefreshReg$(_c, \"LanguageProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0cy9MYW5ndWFnZUNvbnRleHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0NBUUM7O0FBSXNHO0FBUXZHLE1BQU1PLGlCQUFzQztJQUMxQ0MsVUFBVTtJQUNWQyxhQUFhLEtBQU87QUFDdEI7QUFFQSxNQUFNQyxnQ0FBa0JULG9EQUFhQSxDQUFzQk07QUFFcEQsU0FBU0ksaUJBQWlCLEtBQTJDO1FBQTNDLEVBQUVDLFFBQVEsRUFBaUMsR0FBM0M7O0lBQy9CLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLEdBQUdZLFlBQVksR0FBR1QsaURBQVVBLENBQUNVLENBQUFBLElBQUtBLElBQUksR0FBRztJQUMvQyxNQUFNLENBQUNSLFVBQVVTLGlCQUFpQixHQUFHZCwrQ0FBUUEsQ0FBVztJQUV4RCxlQUFlO0lBQ2ZDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWMsZ0JBQWdCQyxhQUFhQyxPQUFPLENBQUM7UUFDM0MsSUFBSUYsaUJBQWtCQSxDQUFBQSxrQkFBa0IsUUFBUUEsa0JBQWtCLElBQUcsR0FBSTtZQUN2RUQsaUJBQWlCQztRQUNuQixPQUFPO1lBQ0wsTUFBTUcsY0FBY0MsVUFBVWQsUUFBUSxDQUFDZSxXQUFXO1lBQ2xELE1BQU1DLGNBQWNILFlBQVlJLFVBQVUsQ0FBQyxRQUFRLE9BQU87WUFDMURSLGlCQUFpQk87WUFDakJMLGFBQWFPLE9BQU8sQ0FBQyxZQUFZRjtRQUNuQztRQUNBVixXQUFXO0lBQ2IsR0FBRyxFQUFFO0lBRUxWLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSVMsU0FBUztZQUNYTSxhQUFhTyxPQUFPLENBQUMsWUFBWWxCO1lBQ2pDbUIsU0FBU0MsZUFBZSxDQUFDQyxJQUFJLEdBQUdyQjtZQUNoQ21CLFNBQVNDLGVBQWUsQ0FBQ0UsWUFBWSxDQUFDLGlCQUFpQnRCO1lBQ3ZETztRQUNGO0lBQ0YsR0FBRztRQUFDUDtRQUFVSztLQUFRO0lBRXRCLE1BQU1KLGNBQWNKLGtEQUFXQSxDQUFDLENBQUN3QjtRQUMvQixJQUFJQSxTQUFTLFFBQVFBLFNBQVMsTUFBTTtZQUNsQ1osaUJBQWlCWTtZQUNqQixJQUFJLElBQWtCLEVBQWE7Z0JBQ2pDRSxPQUFPQyxhQUFhLENBQUMsSUFBSUMsTUFBTTtZQUNqQztRQUNGO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUMsZUFBZWxDLG9EQUFhLENBQUMsSUFBTztZQUN4Q1E7WUFDQUM7UUFDRixJQUFJO1FBQUNEO1FBQVVDO0tBQVk7SUFFM0IsZ0JBQWdCO0lBQ2hCLElBQUksQ0FBQ0ksU0FBUztRQUNaLHFCQUFPO3NCQUFHRDs7SUFDWjtJQUVBLHFCQUNFLDhEQUFDRixnQkFBZ0IwQixRQUFRO1FBQUNDLE9BQU9IO2tCQUM5QnRCOzs7Ozs7QUFHUDtHQXBEZ0JEO0tBQUFBO0FBc0RULFNBQVMyQjs7SUFDZCxNQUFNQyxVQUFVckMsaURBQVVBLENBQUNRO0lBQzNCLElBQUk2QixZQUFZQyxXQUFXO1FBQ3pCLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtJQUNBLE9BQU9GO0FBQ1Q7SUFOZ0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0cy9MYW5ndWFnZUNvbnRleHQudHN4PzQxOGUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEB2ZXJzaW9uIDAuOFxyXG4gKiBAZGVzY3JpcHRpb24g6K+t6KiA5LiK5LiL5paH5a6e546w77yM5YyF5ZCr5Lul5LiL5Yqf6IO977yaXHJcbiAqIC0g5pSv5oyB5Lit6Iux5paH5YiH5o2iXHJcbiAqIC0g5pys5Zyw5a2Y5YKo6K+t6KiA5YGP5aW9XHJcbiAqIC0g5rWP6KeI5Zmo6K+t6KiA5qOA5rWLXHJcbiAqIC0gU1NSIOaUr+aMgVxyXG4gKiAtIOWuouaIt+err+awtOWQiOS8mOWMllxyXG4gKi9cclxuXHJcbid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjaywgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICdAL2NvbmZpZy90cmFuc2xhdGlvbnMnO1xyXG5cclxuaW50ZXJmYWNlIExhbmd1YWdlQ29udGV4dFR5cGUge1xyXG4gIGxhbmd1YWdlOiBMYW5ndWFnZTtcclxuICBzZXRMYW5ndWFnZTogKGxhbmc6IExhbmd1YWdlKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBkZWZhdWx0Q29udGV4dDogTGFuZ3VhZ2VDb250ZXh0VHlwZSA9IHtcclxuICBsYW5ndWFnZTogJ2VuJyxcclxuICBzZXRMYW5ndWFnZTogKCkgPT4ge30sXHJcbn07XHJcblxyXG5jb25zdCBMYW5ndWFnZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PExhbmd1YWdlQ29udGV4dFR5cGU+KGRlZmF1bHRDb250ZXh0KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMYW5ndWFnZVByb3ZpZGVyKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcclxuICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgWywgZm9yY2VVcGRhdGVdID0gdXNlUmVkdWNlcih4ID0+IHggKyAxLCAwKTtcclxuICBjb25zdCBbbGFuZ3VhZ2UsIHNldExhbmd1YWdlU3RhdGVdID0gdXNlU3RhdGU8TGFuZ3VhZ2U+KCdlbicpO1xyXG5cclxuICAvLyDlj6rlnKjlrqLmiLfnq6/liJ3lp4vljJbor63oqIDorr7nva5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc2F2ZWRMYW5ndWFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5ndWFnZScpIGFzIExhbmd1YWdlO1xyXG4gICAgaWYgKHNhdmVkTGFuZ3VhZ2UgJiYgKHNhdmVkTGFuZ3VhZ2UgPT09ICdlbicgfHwgc2F2ZWRMYW5ndWFnZSA9PT0gJ3poJykpIHtcclxuICAgICAgc2V0TGFuZ3VhZ2VTdGF0ZShzYXZlZExhbmd1YWdlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGJyb3dzZXJMYW5nID0gbmF2aWdhdG9yLmxhbmd1YWdlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIGNvbnN0IGluaXRpYWxMYW5nID0gYnJvd3Nlckxhbmcuc3RhcnRzV2l0aCgnemgnKSA/ICd6aCcgOiAnZW4nO1xyXG4gICAgICBzZXRMYW5ndWFnZVN0YXRlKGluaXRpYWxMYW5nKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhbmd1YWdlJywgaW5pdGlhbExhbmcpO1xyXG4gICAgfVxyXG4gICAgc2V0TW91bnRlZCh0cnVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobW91bnRlZCkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFuZ3VhZ2UnLCBsYW5ndWFnZSk7XHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gbGFuZ3VhZ2U7XHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGFuZ3VhZ2UnLCBsYW5ndWFnZSk7XHJcbiAgICAgIGZvcmNlVXBkYXRlKCk7XHJcbiAgICB9XHJcbiAgfSwgW2xhbmd1YWdlLCBtb3VudGVkXSk7XHJcblxyXG4gIGNvbnN0IHNldExhbmd1YWdlID0gdXNlQ2FsbGJhY2soKGxhbmc6IExhbmd1YWdlKSA9PiB7XHJcbiAgICBpZiAobGFuZyA9PT0gJ2VuJyB8fCBsYW5nID09PSAnemgnKSB7XHJcbiAgICAgIHNldExhbmd1YWdlU3RhdGUobGFuZyk7XHJcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnbGFuZ3VhZ2VjaGFuZ2UnKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGNvbnRleHRWYWx1ZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gKHtcclxuICAgIGxhbmd1YWdlLFxyXG4gICAgc2V0TGFuZ3VhZ2UsXHJcbiAgfSksIFtsYW5ndWFnZSwgc2V0TGFuZ3VhZ2VdKTtcclxuXHJcbiAgLy8g5Zyo5a6i5oi356uv5oyC6L295YmN5L2/55So6buY6K6k6K+t6KiAXHJcbiAgaWYgKCFtb3VudGVkKSB7XHJcbiAgICByZXR1cm4gPD57Y2hpbGRyZW59PC8+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYW5ndWFnZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHRWYWx1ZX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTGFuZ3VhZ2VDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VMYW5ndWFnZSgpIHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChMYW5ndWFnZUNvbnRleHQpO1xyXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcigndXNlTGFuZ3VhZ2UgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIExhbmd1YWdlUHJvdmlkZXInKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn0gIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNhbGxiYWNrIiwidXNlUmVkdWNlciIsImRlZmF1bHRDb250ZXh0IiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsIkxhbmd1YWdlQ29udGV4dCIsIkxhbmd1YWdlUHJvdmlkZXIiLCJjaGlsZHJlbiIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwiZm9yY2VVcGRhdGUiLCJ4Iiwic2V0TGFuZ3VhZ2VTdGF0ZSIsInNhdmVkTGFuZ3VhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYnJvd3NlckxhbmciLCJuYXZpZ2F0b3IiLCJ0b0xvd2VyQ2FzZSIsImluaXRpYWxMYW5nIiwic3RhcnRzV2l0aCIsInNldEl0ZW0iLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImxhbmciLCJzZXRBdHRyaWJ1dGUiLCJ3aW5kb3ciLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJjb250ZXh0VmFsdWUiLCJ1c2VNZW1vIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUxhbmd1YWdlIiwiY29udGV4dCIsInVuZGVmaW5lZCIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/contexts/LanguageContext.tsx\n"));

/***/ })

});