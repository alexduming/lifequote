"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/authors/page",{

/***/ "(app-pages-browser)/./src/config/translations.ts":
/*!************************************!*\
  !*** ./src/config/translations.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   translations: function() { return /* binding */ translations; }\n/* harmony export */ });\nconst translations = {\n    en: {\n        nav: {\n            home: \"Home\",\n            authors: \"Authors\",\n            topics: \"Topics\",\n            daily: \"Daily Picks\",\n            books: \"Books\"\n        },\n        hero: {\n            title: \"Words That Inspired\\nHumanity for 1000 Years\",\n            subtitle: \"Discover timeless wisdom from history's greatest minds. Find inspiration, motivation, and guidance.\",\n            searchPlaceholder: \"Search quotes, authors, or topics...\"\n        },\n        categories: {\n            motivation: \"Motivation\",\n            life: \"Life\",\n            love: \"Love\",\n            success: \"Success\",\n            wisdom: \"Wisdom\",\n            philosophy: \"Philosophy\",\n            literature: \"Literature\",\n            science: \"Science\",\n            art: \"Art\",\n            history: \"History\",\n            politics: \"Politics\",\n            economics: \"Economics\",\n            education: \"Education\"\n        },\n        sections: {\n            featured: {\n                title: \"Featured Quotes\",\n                subtitle: \"Carefully curated quotes for daily inspiration\",\n                viewMore: \"View More\"\n            },\n            explore: {\n                title: \"Explore Categories\",\n                subtitle: \"Discover wisdom sparks from different fields\"\n            },\n            stats: {\n                quotes: \"quotes\"\n            }\n        },\n        actions: {\n            like: \"Like\",\n            save: \"Save\",\n            share: \"Share\",\n            quotes: \"quotes\",\n            close: \"Close\",\n            viewDetails: \"View Details\"\n        },\n        books: {\n            title: \"Book Quotes\",\n            subtitle: \"Explore timeless wisdom from classic works across centuries\",\n            stats: {\n                books: \"books\",\n                quotes: \"quotes\"\n            }\n        },\n        search: {\n            results: \"Found %d results\",\n            noResults: \"No results found\"\n        }\n    },\n    zh: {\n        nav: {\n            home: \"首页\",\n            authors: \"名人语录\",\n            topics: \"主题分类\",\n            daily: \"每日精选\",\n            books: \"书籍语录\"\n        },\n        hero: {\n            title: \"在过去的1000年中\\n那些鼓励着全人类的句子\",\n            subtitle: \"发现历史上最伟大思想家的智慧之言。在这里找到激励、智慧和行动指引。\",\n            searchPlaceholder: \"搜索语录、作者或主题...\"\n        },\n        categories: {\n            motivation: \"励志\",\n            life: \"生活\",\n            love: \"爱情\",\n            success: \"成功\",\n            wisdom: \"智慧\",\n            philosophy: \"哲学\",\n            literature: \"文学\",\n            science: \"科学\",\n            art: \"艺术\",\n            history: \"历史\",\n            politics: \"政治\",\n            economics: \"经济\",\n            education: \"教育\"\n        },\n        sections: {\n            featured: {\n                title: \"精选语录\",\n                subtitle: \"每日精心挑选的经典语录\",\n                viewMore: \"查看更多\"\n            },\n            explore: {\n                title: \"探索分类\",\n                subtitle: \"发现不同领域的智慧火花\"\n            },\n            stats: {\n                quotes: \"条语录\"\n            }\n        },\n        actions: {\n            like: \"喜欢\",\n            save: \"收藏\",\n            share: \"分享\",\n            quotes: \"条语录\",\n            close: \"关闭\",\n            viewDetails: \"查看详情\"\n        },\n        books: {\n            title: \"书籍语录\",\n            subtitle: \"探索经典著作中的智慧结晶，感受跨越时空的思想火花\",\n            stats: {\n                books: \"本书籍\",\n                quotes: \"条语录\"\n            }\n        },\n        search: {\n            results: \"找到 %d 条结果\",\n            noResults: \"未找到相关结果\"\n        }\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb25maWcvdHJhbnNsYXRpb25zLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUEwRE8sTUFBTUEsZUFBa0Q7SUFDN0RDLElBQUk7UUFDRkMsS0FBSztZQUNIQyxNQUFNO1lBQ05DLFNBQVM7WUFDVEMsUUFBUTtZQUNSQyxPQUFPO1lBQ1BDLE9BQU87UUFDVDtRQUNBQyxNQUFNO1lBQ0pDLE9BQU87WUFDUEMsVUFBVTtZQUNWQyxtQkFBbUI7UUFDckI7UUFDQUMsWUFBWTtZQUNWQyxZQUFZO1lBQ1pDLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxTQUFTO1lBQ1RDLFFBQVE7WUFDUkMsWUFBWTtZQUNaQyxZQUFZO1lBQ1pDLFNBQVM7WUFDVEMsS0FBSztZQUNMQyxTQUFTO1lBQ1RDLFVBQVU7WUFDVkMsV0FBVztZQUNYQyxXQUFXO1FBQ2I7UUFDQUMsVUFBVTtZQUNSQyxVQUFVO2dCQUNSbEIsT0FBTztnQkFDUEMsVUFBVTtnQkFDVmtCLFVBQVU7WUFDWjtZQUNBQyxTQUFTO2dCQUNQcEIsT0FBTztnQkFDUEMsVUFBVTtZQUNaO1lBQ0FvQixPQUFPO2dCQUNMQyxRQUFRO1lBQ1Y7UUFDRjtRQUNBQyxTQUFTO1lBQ1BDLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BKLFFBQVE7WUFDUkssT0FBTztZQUNQQyxhQUFhO1FBQ2Y7UUFDQTlCLE9BQU87WUFDTEUsT0FBTztZQUNQQyxVQUFVO1lBQ1ZvQixPQUFPO2dCQUNMdkIsT0FBTztnQkFDUHdCLFFBQVE7WUFDVjtRQUNGO1FBQ0FPLFFBQVE7WUFDTkMsU0FBUztZQUNUQyxXQUFXO1FBQ2I7SUFDRjtJQUNBQyxJQUFJO1FBQ0Z2QyxLQUFLO1lBQ0hDLE1BQU07WUFDTkMsU0FBUztZQUNUQyxRQUFRO1lBQ1JDLE9BQU87WUFDUEMsT0FBTztRQUNUO1FBQ0FDLE1BQU07WUFDSkMsT0FBTztZQUNQQyxVQUFVO1lBQ1ZDLG1CQUFtQjtRQUNyQjtRQUNBQyxZQUFZO1lBQ1ZDLFlBQVk7WUFDWkMsTUFBTTtZQUNOQyxNQUFNO1lBQ05DLFNBQVM7WUFDVEMsUUFBUTtZQUNSQyxZQUFZO1lBQ1pDLFlBQVk7WUFDWkMsU0FBUztZQUNUQyxLQUFLO1lBQ0xDLFNBQVM7WUFDVEMsVUFBVTtZQUNWQyxXQUFXO1lBQ1hDLFdBQVc7UUFDYjtRQUNBQyxVQUFVO1lBQ1JDLFVBQVU7Z0JBQ1JsQixPQUFPO2dCQUNQQyxVQUFVO2dCQUNWa0IsVUFBVTtZQUNaO1lBQ0FDLFNBQVM7Z0JBQ1BwQixPQUFPO2dCQUNQQyxVQUFVO1lBQ1o7WUFDQW9CLE9BQU87Z0JBQ0xDLFFBQVE7WUFDVjtRQUNGO1FBQ0FDLFNBQVM7WUFDUEMsTUFBTTtZQUNOQyxNQUFNO1lBQ05DLE9BQU87WUFDUEosUUFBUTtZQUNSSyxPQUFPO1lBQ1BDLGFBQWE7UUFDZjtRQUNBOUIsT0FBTztZQUNMRSxPQUFPO1lBQ1BDLFVBQVU7WUFDVm9CLE9BQU87Z0JBQ0x2QixPQUFPO2dCQUNQd0IsUUFBUTtZQUNWO1FBQ0Y7UUFDQU8sUUFBUTtZQUNOQyxTQUFTO1lBQ1RDLFdBQVc7UUFDYjtJQUNGO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29uZmlnL3RyYW5zbGF0aW9ucy50cz9iMmI2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB0eXBlIExhbmd1YWdlID0gJ2VuJyB8ICd6aCc7XHJcblxyXG5leHBvcnQgdHlwZSBDYXRlZ29yeUtleSA9ICdtb3RpdmF0aW9uJyB8ICdsaWZlJyB8ICdsb3ZlJyB8ICdzdWNjZXNzJyB8ICd3aXNkb20nIHwgXHJcbiAgJ3BoaWxvc29waHknIHwgJ2xpdGVyYXR1cmUnIHwgJ3NjaWVuY2UnIHwgJ2FydCcgfCAnaGlzdG9yeScgfCAncG9saXRpY3MnIHwgXHJcbiAgJ2Vjb25vbWljcycgfCAnZWR1Y2F0aW9uJztcclxuXHJcbmV4cG9ydCB0eXBlIFRyYW5zbGF0aW9uVHlwZSA9IHtcclxuICBuYXY6IHtcclxuICAgIGhvbWU6IHN0cmluZztcclxuICAgIGF1dGhvcnM6IHN0cmluZztcclxuICAgIHRvcGljczogc3RyaW5nO1xyXG4gICAgZGFpbHk6IHN0cmluZztcclxuICAgIGJvb2tzOiBzdHJpbmc7XHJcbiAgfTtcclxuICBoZXJvOiB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgc3VidGl0bGU6IHN0cmluZztcclxuICAgIHNlYXJjaFBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgfTtcclxuICBjYXRlZ29yaWVzOiB7XHJcbiAgICBbSyBpbiBDYXRlZ29yeUtleV06IHN0cmluZztcclxuICB9O1xyXG4gIHNlY3Rpb25zOiB7XHJcbiAgICBmZWF0dXJlZDoge1xyXG4gICAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgICBzdWJ0aXRsZTogc3RyaW5nO1xyXG4gICAgICB2aWV3TW9yZTogc3RyaW5nO1xyXG4gICAgfTtcclxuICAgIGV4cGxvcmU6IHtcclxuICAgICAgdGl0bGU6IHN0cmluZztcclxuICAgICAgc3VidGl0bGU6IHN0cmluZztcclxuICAgIH07XHJcbiAgICBzdGF0czoge1xyXG4gICAgICBxdW90ZXM6IHN0cmluZztcclxuICAgIH07XHJcbiAgfTtcclxuICBhY3Rpb25zOiB7XHJcbiAgICBsaWtlOiBzdHJpbmc7XHJcbiAgICBzYXZlOiBzdHJpbmc7XHJcbiAgICBzaGFyZTogc3RyaW5nO1xyXG4gICAgcXVvdGVzOiBzdHJpbmc7XHJcbiAgICBjbG9zZTogc3RyaW5nO1xyXG4gICAgdmlld0RldGFpbHM6IHN0cmluZztcclxuICB9O1xyXG4gIGJvb2tzOiB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgc3VidGl0bGU6IHN0cmluZztcclxuICAgIHN0YXRzOiB7XHJcbiAgICAgIGJvb2tzOiBzdHJpbmc7XHJcbiAgICAgIHF1b3Rlczogc3RyaW5nO1xyXG4gICAgfTtcclxuICB9O1xyXG4gIHNlYXJjaDoge1xyXG4gICAgcmVzdWx0czogc3RyaW5nO1xyXG4gICAgbm9SZXN1bHRzOiBzdHJpbmc7XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0cmFuc2xhdGlvbnM6IFJlY29yZDxMYW5ndWFnZSwgVHJhbnNsYXRpb25UeXBlPiA9IHtcclxuICBlbjoge1xyXG4gICAgbmF2OiB7XHJcbiAgICAgIGhvbWU6ICdIb21lJyxcclxuICAgICAgYXV0aG9yczogJ0F1dGhvcnMnLFxyXG4gICAgICB0b3BpY3M6ICdUb3BpY3MnLFxyXG4gICAgICBkYWlseTogJ0RhaWx5IFBpY2tzJyxcclxuICAgICAgYm9va3M6ICdCb29rcycsXHJcbiAgICB9LFxyXG4gICAgaGVybzoge1xyXG4gICAgICB0aXRsZTogJ1dvcmRzIFRoYXQgSW5zcGlyZWRcXG5IdW1hbml0eSBmb3IgMTAwMCBZZWFycycsXHJcbiAgICAgIHN1YnRpdGxlOiAnRGlzY292ZXIgdGltZWxlc3Mgd2lzZG9tIGZyb20gaGlzdG9yeVxcJ3MgZ3JlYXRlc3QgbWluZHMuIEZpbmQgaW5zcGlyYXRpb24sIG1vdGl2YXRpb24sIGFuZCBndWlkYW5jZS4nLFxyXG4gICAgICBzZWFyY2hQbGFjZWhvbGRlcjogJ1NlYXJjaCBxdW90ZXMsIGF1dGhvcnMsIG9yIHRvcGljcy4uLicsXHJcbiAgICB9LFxyXG4gICAgY2F0ZWdvcmllczoge1xyXG4gICAgICBtb3RpdmF0aW9uOiAnTW90aXZhdGlvbicsXHJcbiAgICAgIGxpZmU6ICdMaWZlJyxcclxuICAgICAgbG92ZTogJ0xvdmUnLFxyXG4gICAgICBzdWNjZXNzOiAnU3VjY2VzcycsXHJcbiAgICAgIHdpc2RvbTogJ1dpc2RvbScsXHJcbiAgICAgIHBoaWxvc29waHk6ICdQaGlsb3NvcGh5JyxcclxuICAgICAgbGl0ZXJhdHVyZTogJ0xpdGVyYXR1cmUnLFxyXG4gICAgICBzY2llbmNlOiAnU2NpZW5jZScsXHJcbiAgICAgIGFydDogJ0FydCcsXHJcbiAgICAgIGhpc3Rvcnk6ICdIaXN0b3J5JyxcclxuICAgICAgcG9saXRpY3M6ICdQb2xpdGljcycsXHJcbiAgICAgIGVjb25vbWljczogJ0Vjb25vbWljcycsXHJcbiAgICAgIGVkdWNhdGlvbjogJ0VkdWNhdGlvbicsXHJcbiAgICB9LFxyXG4gICAgc2VjdGlvbnM6IHtcclxuICAgICAgZmVhdHVyZWQ6IHtcclxuICAgICAgICB0aXRsZTogJ0ZlYXR1cmVkIFF1b3RlcycsXHJcbiAgICAgICAgc3VidGl0bGU6ICdDYXJlZnVsbHkgY3VyYXRlZCBxdW90ZXMgZm9yIGRhaWx5IGluc3BpcmF0aW9uJyxcclxuICAgICAgICB2aWV3TW9yZTogJ1ZpZXcgTW9yZScsXHJcbiAgICAgIH0sXHJcbiAgICAgIGV4cGxvcmU6IHtcclxuICAgICAgICB0aXRsZTogJ0V4cGxvcmUgQ2F0ZWdvcmllcycsXHJcbiAgICAgICAgc3VidGl0bGU6ICdEaXNjb3ZlciB3aXNkb20gc3BhcmtzIGZyb20gZGlmZmVyZW50IGZpZWxkcycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHN0YXRzOiB7XHJcbiAgICAgICAgcXVvdGVzOiAncXVvdGVzJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBhY3Rpb25zOiB7XHJcbiAgICAgIGxpa2U6ICdMaWtlJyxcclxuICAgICAgc2F2ZTogJ1NhdmUnLFxyXG4gICAgICBzaGFyZTogJ1NoYXJlJyxcclxuICAgICAgcXVvdGVzOiAncXVvdGVzJyxcclxuICAgICAgY2xvc2U6ICdDbG9zZScsXHJcbiAgICAgIHZpZXdEZXRhaWxzOiAnVmlldyBEZXRhaWxzJyxcclxuICAgIH0sXHJcbiAgICBib29rczoge1xyXG4gICAgICB0aXRsZTogJ0Jvb2sgUXVvdGVzJyxcclxuICAgICAgc3VidGl0bGU6ICdFeHBsb3JlIHRpbWVsZXNzIHdpc2RvbSBmcm9tIGNsYXNzaWMgd29ya3MgYWNyb3NzIGNlbnR1cmllcycsXHJcbiAgICAgIHN0YXRzOiB7XHJcbiAgICAgICAgYm9va3M6ICdib29rcycsXHJcbiAgICAgICAgcXVvdGVzOiAncXVvdGVzJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzZWFyY2g6IHtcclxuICAgICAgcmVzdWx0czogJ0ZvdW5kICVkIHJlc3VsdHMnLFxyXG4gICAgICBub1Jlc3VsdHM6ICdObyByZXN1bHRzIGZvdW5kJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICB6aDoge1xyXG4gICAgbmF2OiB7XHJcbiAgICAgIGhvbWU6ICfpppbpobUnLFxyXG4gICAgICBhdXRob3JzOiAn5ZCN5Lq66K+t5b2VJyxcclxuICAgICAgdG9waWNzOiAn5Li76aKY5YiG57G7JyxcclxuICAgICAgZGFpbHk6ICfmr4/ml6Xnsr7pgIknLFxyXG4gICAgICBib29rczogJ+S5puexjeivreW9lScsXHJcbiAgICB9LFxyXG4gICAgaGVybzoge1xyXG4gICAgICB0aXRsZTogJ+WcqOi/h+WOu+eahDEwMDDlubTkuK1cXG7pgqPkupvpvJPlirHnnYDlhajkurrnsbvnmoTlj6XlrZAnLFxyXG4gICAgICBzdWJ0aXRsZTogJ+WPkeeOsOWOhuWPsuS4iuacgOS8n+Wkp+aAneaDs+WutueahOaZuuaFp+S5i+iogOOAguWcqOi/memHjOaJvuWIsOa/gOWKseOAgeaZuuaFp+WSjOihjOWKqOaMh+W8leOAgicsXHJcbiAgICAgIHNlYXJjaFBsYWNlaG9sZGVyOiAn5pCc57Si6K+t5b2V44CB5L2c6ICF5oiW5Li76aKYLi4uJyxcclxuICAgIH0sXHJcbiAgICBjYXRlZ29yaWVzOiB7XHJcbiAgICAgIG1vdGl2YXRpb246ICflirHlv5cnLFxyXG4gICAgICBsaWZlOiAn55Sf5rS7JyxcclxuICAgICAgbG92ZTogJ+eIseaDhScsXHJcbiAgICAgIHN1Y2Nlc3M6ICfmiJDlip8nLFxyXG4gICAgICB3aXNkb206ICfmmbrmhacnLFxyXG4gICAgICBwaGlsb3NvcGh5OiAn5ZOy5a2mJyxcclxuICAgICAgbGl0ZXJhdHVyZTogJ+aWh+WtpicsXHJcbiAgICAgIHNjaWVuY2U6ICfnp5HlraYnLFxyXG4gICAgICBhcnQ6ICfoibrmnK8nLFxyXG4gICAgICBoaXN0b3J5OiAn5Y6G5Y+yJyxcclxuICAgICAgcG9saXRpY3M6ICfmlL/msrsnLFxyXG4gICAgICBlY29ub21pY3M6ICfnu4/mtY4nLFxyXG4gICAgICBlZHVjYXRpb246ICfmlZnogrInLFxyXG4gICAgfSxcclxuICAgIHNlY3Rpb25zOiB7XHJcbiAgICAgIGZlYXR1cmVkOiB7XHJcbiAgICAgICAgdGl0bGU6ICfnsr7pgInor63lvZUnLFxyXG4gICAgICAgIHN1YnRpdGxlOiAn5q+P5pel57K+5b+D5oyR6YCJ55qE57uP5YW46K+t5b2VJyxcclxuICAgICAgICB2aWV3TW9yZTogJ+afpeeci+abtOWkmicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGV4cGxvcmU6IHtcclxuICAgICAgICB0aXRsZTogJ+aOoue0ouWIhuexuycsXHJcbiAgICAgICAgc3VidGl0bGU6ICflj5HnjrDkuI3lkIzpoobln5/nmoTmmbrmhafngavoirEnLFxyXG4gICAgICB9LFxyXG4gICAgICBzdGF0czoge1xyXG4gICAgICAgIHF1b3RlczogJ+adoeivreW9lScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYWN0aW9uczoge1xyXG4gICAgICBsaWtlOiAn5Zac5qyiJyxcclxuICAgICAgc2F2ZTogJ+aUtuiXjycsXHJcbiAgICAgIHNoYXJlOiAn5YiG5LqrJyxcclxuICAgICAgcXVvdGVzOiAn5p2h6K+t5b2VJyxcclxuICAgICAgY2xvc2U6ICflhbPpl60nLFxyXG4gICAgICB2aWV3RGV0YWlsczogJ+afpeeci+ivpuaDhScsXHJcbiAgICB9LFxyXG4gICAgYm9va3M6IHtcclxuICAgICAgdGl0bGU6ICfkuabnsY3or63lvZUnLFxyXG4gICAgICBzdWJ0aXRsZTogJ+aOoue0oue7j+WFuOiRl+S9nOS4reeahOaZuuaFp+e7k+aZtu+8jOaEn+WPl+i3qOi2iuaXtuepuueahOaAneaDs+eBq+iKsScsXHJcbiAgICAgIHN0YXRzOiB7XHJcbiAgICAgICAgYm9va3M6ICfmnKzkuabnsY0nLFxyXG4gICAgICAgIHF1b3RlczogJ+adoeivreW9lScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2VhcmNoOiB7XHJcbiAgICAgIHJlc3VsdHM6ICfmib7liLAgJWQg5p2h57uT5p6cJyxcclxuICAgICAgbm9SZXN1bHRzOiAn5pyq5om+5Yiw55u45YWz57uT5p6cJyxcclxuICAgIH0sXHJcbiAgfSxcclxufTsgIl0sIm5hbWVzIjpbInRyYW5zbGF0aW9ucyIsImVuIiwibmF2IiwiaG9tZSIsImF1dGhvcnMiLCJ0b3BpY3MiLCJkYWlseSIsImJvb2tzIiwiaGVybyIsInRpdGxlIiwic3VidGl0bGUiLCJzZWFyY2hQbGFjZWhvbGRlciIsImNhdGVnb3JpZXMiLCJtb3RpdmF0aW9uIiwibGlmZSIsImxvdmUiLCJzdWNjZXNzIiwid2lzZG9tIiwicGhpbG9zb3BoeSIsImxpdGVyYXR1cmUiLCJzY2llbmNlIiwiYXJ0IiwiaGlzdG9yeSIsInBvbGl0aWNzIiwiZWNvbm9taWNzIiwiZWR1Y2F0aW9uIiwic2VjdGlvbnMiLCJmZWF0dXJlZCIsInZpZXdNb3JlIiwiZXhwbG9yZSIsInN0YXRzIiwicXVvdGVzIiwiYWN0aW9ucyIsImxpa2UiLCJzYXZlIiwic2hhcmUiLCJjbG9zZSIsInZpZXdEZXRhaWxzIiwic2VhcmNoIiwicmVzdWx0cyIsIm5vUmVzdWx0cyIsInpoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/config/translations.ts\n"));

/***/ })

});