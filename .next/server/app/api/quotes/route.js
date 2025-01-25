"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/quotes/route";
exports.ids = ["app/api/quotes/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "constants":
/*!****************************!*\
  !*** external "constants" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("constants");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fquotes%2Froute&page=%2Fapi%2Fquotes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fquotes%2Froute.ts&appDir=C%3A%5CUsers%5CAlex%5CDocuments%5CAI%5Cwebsites%5Clifequote%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAlex%5CDocuments%5CAI%5Cwebsites%5Clifequote&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fquotes%2Froute&page=%2Fapi%2Fquotes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fquotes%2Froute.ts&appDir=C%3A%5CUsers%5CAlex%5CDocuments%5CAI%5Cwebsites%5Clifequote%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAlex%5CDocuments%5CAI%5Cwebsites%5Clifequote&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Alex_Documents_AI_websites_lifequote_src_app_api_quotes_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/quotes/route.ts */ \"(rsc)/./src/app/api/quotes/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/quotes/route\",\n        pathname: \"/api/quotes\",\n        filename: \"route\",\n        bundlePath: \"app/api/quotes/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Alex\\\\Documents\\\\AI\\\\websites\\\\lifequote\\\\src\\\\app\\\\api\\\\quotes\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Alex_Documents_AI_websites_lifequote_src_app_api_quotes_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/quotes/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZxdW90ZXMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnF1b3RlcyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnF1b3RlcyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNBbGV4JTVDRG9jdW1lbnRzJTVDQUklNUN3ZWJzaXRlcyU1Q2xpZmVxdW90ZSU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDQWxleCU1Q0RvY3VtZW50cyU1Q0FJJTVDd2Vic2l0ZXMlNUNsaWZlcXVvdGUmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDb0M7QUFDakg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saWZlcXVvdGUvPzI2ZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcQWxleFxcXFxEb2N1bWVudHNcXFxcQUlcXFxcd2Vic2l0ZXNcXFxcbGlmZXF1b3RlXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHF1b3Rlc1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcXVvdGVzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcXVvdGVzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9xdW90ZXMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxBbGV4XFxcXERvY3VtZW50c1xcXFxBSVxcXFx3ZWJzaXRlc1xcXFxsaWZlcXVvdGVcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxccXVvdGVzXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3F1b3Rlcy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fquotes%2Froute&page=%2Fapi%2Fquotes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fquotes%2Froute.ts&appDir=C%3A%5CUsers%5CAlex%5CDocuments%5CAI%5Cwebsites%5Clifequote%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAlex%5CDocuments%5CAI%5Cwebsites%5Clifequote&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/quotes/route.ts":
/*!*************************************!*\
  !*** ./src/app/api/quotes/route.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs-extra */ \"(rsc)/./node_modules/fs-extra/lib/index.js\");\n/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var csv_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! csv-parser */ \"(rsc)/./node_modules/csv-parser/index.js\");\n/* harmony import */ var csv_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(csv_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n// 读取CSV文件\nasync function readQuotesFromCsv() {\n    return new Promise((resolve, reject)=>{\n        const results = [];\n        const csvPath = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), \"src\", \"data\", \"quotes.csv\");\n        fs_extra__WEBPACK_IMPORTED_MODULE_3___default().createReadStream(csvPath).pipe(csv_parser__WEBPACK_IMPORTED_MODULE_1___default()()).on(\"data\", (data)=>{\n            const quote = {\n                id: parseInt(data.id),\n                quote: {\n                    zh: data.quote_zh,\n                    en: data.quote_en\n                },\n                author: {\n                    zh: data.author_zh,\n                    en: data.author_en\n                },\n                authorTitle: {\n                    zh: data.author_title_zh,\n                    en: data.author_title_en\n                },\n                category: data.category,\n                period: {\n                    zh: data.period_zh,\n                    en: data.period_en\n                },\n                likes: parseInt(data.likes),\n                views: parseInt(data.views),\n                created_at: data.created_at,\n                book: data.book,\n                book_en: data.book_en\n            };\n            results.push(quote);\n        }).on(\"end\", ()=>{\n            resolve(results);\n        }).on(\"error\", reject);\n    });\n}\nasync function GET() {\n    try {\n        const quotes = await readQuotesFromCsv();\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(quotes);\n    } catch (error) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Failed to fetch quotes\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9xdW90ZXMvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMkM7QUFDakI7QUFDRztBQUNMO0FBOEJ4QixVQUFVO0FBQ1YsZUFBZUk7SUFDYixPQUFPLElBQUlDLFFBQVEsQ0FBQ0MsU0FBU0M7UUFDM0IsTUFBTUMsVUFBbUIsRUFBRTtRQUMzQixNQUFNQyxVQUFVTixnREFBUyxDQUFDUSxRQUFRQyxHQUFHLElBQUksT0FBTyxRQUFRO1FBRXhEWCxnRUFBbUIsQ0FBQ1EsU0FDakJLLElBQUksQ0FBQ1osaURBQUdBLElBQ1JhLEVBQUUsQ0FBQyxRQUFRLENBQUNDO1lBQ1gsTUFBTUMsUUFBZTtnQkFDbkJDLElBQUlDLFNBQVNILEtBQUtFLEVBQUU7Z0JBQ3BCRCxPQUFPO29CQUNMRyxJQUFJSixLQUFLSyxRQUFRO29CQUNqQkMsSUFBSU4sS0FBS08sUUFBUTtnQkFDbkI7Z0JBQ0FDLFFBQVE7b0JBQ05KLElBQUlKLEtBQUtTLFNBQVM7b0JBQ2xCSCxJQUFJTixLQUFLVSxTQUFTO2dCQUNwQjtnQkFDQUMsYUFBYTtvQkFDWFAsSUFBSUosS0FBS1ksZUFBZTtvQkFDeEJOLElBQUlOLEtBQUthLGVBQWU7Z0JBQzFCO2dCQUNBQyxVQUFVZCxLQUFLYyxRQUFRO2dCQUN2QkMsUUFBUTtvQkFDTlgsSUFBSUosS0FBS2dCLFNBQVM7b0JBQ2xCVixJQUFJTixLQUFLaUIsU0FBUztnQkFDcEI7Z0JBQ0FDLE9BQU9mLFNBQVNILEtBQUtrQixLQUFLO2dCQUMxQkMsT0FBT2hCLFNBQVNILEtBQUttQixLQUFLO2dCQUMxQkMsWUFBWXBCLEtBQUtvQixVQUFVO2dCQUMzQkMsTUFBTXJCLEtBQUtxQixJQUFJO2dCQUNmQyxTQUFTdEIsS0FBS3NCLE9BQU87WUFDdkI7WUFDQTlCLFFBQVErQixJQUFJLENBQUN0QjtRQUNmLEdBQ0NGLEVBQUUsQ0FBQyxPQUFPO1lBQ1RULFFBQVFFO1FBQ1YsR0FDQ08sRUFBRSxDQUFDLFNBQVNSO0lBQ2pCO0FBQ0Y7QUFFTyxlQUFlaUM7SUFDcEIsSUFBSTtRQUNGLE1BQU1DLFNBQVMsTUFBTXJDO1FBQ3JCLE9BQU9KLGtGQUFZQSxDQUFDMEMsSUFBSSxDQUFDRDtJQUMzQixFQUFFLE9BQU9FLE9BQU87UUFDZCxPQUFPM0Msa0ZBQVlBLENBQUMwQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUF5QixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUM5RTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlmZXF1b3RlLy4vc3JjL2FwcC9hcGkvcXVvdGVzL3JvdXRlLnRzP2NkNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5pbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnO1xyXG5pbXBvcnQgY3N2IGZyb20gJ2Nzdi1wYXJzZXInO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgQ2F0ZWdvcnlLZXkgfSBmcm9tICdAL2NvbmZpZy90cmFuc2xhdGlvbnMnO1xyXG5cclxuLy8g5a6a5LmJ5pWw5o2u57G75Z6LXHJcbmV4cG9ydCBpbnRlcmZhY2UgUXVvdGUge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgcXVvdGU6IHtcclxuICAgIHpoOiBzdHJpbmc7XHJcbiAgICBlbjogc3RyaW5nO1xyXG4gIH07XHJcbiAgYXV0aG9yOiB7XHJcbiAgICB6aDogc3RyaW5nO1xyXG4gICAgZW46IHN0cmluZztcclxuICB9O1xyXG4gIGF1dGhvclRpdGxlOiB7XHJcbiAgICB6aDogc3RyaW5nO1xyXG4gICAgZW46IHN0cmluZztcclxuICB9O1xyXG4gIGNhdGVnb3J5OiBDYXRlZ29yeUtleTtcclxuICBwZXJpb2Q6IHtcclxuICAgIHpoOiBzdHJpbmc7XHJcbiAgICBlbjogc3RyaW5nO1xyXG4gIH07XHJcbiAgbGlrZXM6IG51bWJlcjtcclxuICB2aWV3czogbnVtYmVyO1xyXG4gIGNyZWF0ZWRfYXQ6IHN0cmluZztcclxuICBib29rOiBzdHJpbmc7XHJcbiAgYm9va19lbjogc3RyaW5nO1xyXG59XHJcblxyXG4vLyDor7vlj5ZDU1bmlofku7ZcclxuYXN5bmMgZnVuY3Rpb24gcmVhZFF1b3Rlc0Zyb21Dc3YoKTogUHJvbWlzZTxRdW90ZVtdPiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdHM6IFF1b3RlW10gPSBbXTtcclxuICAgIGNvbnN0IGNzdlBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3NyYycsICdkYXRhJywgJ3F1b3Rlcy5jc3YnKTtcclxuXHJcbiAgICBmcy5jcmVhdGVSZWFkU3RyZWFtKGNzdlBhdGgpXHJcbiAgICAgIC5waXBlKGNzdigpKVxyXG4gICAgICAub24oJ2RhdGEnLCAoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcXVvdGU6IFF1b3RlID0ge1xyXG4gICAgICAgICAgaWQ6IHBhcnNlSW50KGRhdGEuaWQpLFxyXG4gICAgICAgICAgcXVvdGU6IHtcclxuICAgICAgICAgICAgemg6IGRhdGEucXVvdGVfemgsXHJcbiAgICAgICAgICAgIGVuOiBkYXRhLnF1b3RlX2VuLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGF1dGhvcjoge1xyXG4gICAgICAgICAgICB6aDogZGF0YS5hdXRob3JfemgsXHJcbiAgICAgICAgICAgIGVuOiBkYXRhLmF1dGhvcl9lbixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBhdXRob3JUaXRsZToge1xyXG4gICAgICAgICAgICB6aDogZGF0YS5hdXRob3JfdGl0bGVfemgsXHJcbiAgICAgICAgICAgIGVuOiBkYXRhLmF1dGhvcl90aXRsZV9lbixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSBhcyBDYXRlZ29yeUtleSxcclxuICAgICAgICAgIHBlcmlvZDoge1xyXG4gICAgICAgICAgICB6aDogZGF0YS5wZXJpb2RfemgsXHJcbiAgICAgICAgICAgIGVuOiBkYXRhLnBlcmlvZF9lbixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBsaWtlczogcGFyc2VJbnQoZGF0YS5saWtlcyksXHJcbiAgICAgICAgICB2aWV3czogcGFyc2VJbnQoZGF0YS52aWV3cyksXHJcbiAgICAgICAgICBjcmVhdGVkX2F0OiBkYXRhLmNyZWF0ZWRfYXQsXHJcbiAgICAgICAgICBib29rOiBkYXRhLmJvb2ssXHJcbiAgICAgICAgICBib29rX2VuOiBkYXRhLmJvb2tfZW4sXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXN1bHRzLnB1c2gocXVvdGUpO1xyXG4gICAgICB9KVxyXG4gICAgICAub24oJ2VuZCcsICgpID0+IHtcclxuICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xyXG4gICAgICB9KVxyXG4gICAgICAub24oJ2Vycm9yJywgcmVqZWN0KTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcXVvdGVzID0gYXdhaXQgcmVhZFF1b3Rlc0Zyb21Dc3YoKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihxdW90ZXMpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byBmZXRjaCBxdW90ZXMnIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59ICJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJmcyIsImNzdiIsInBhdGgiLCJyZWFkUXVvdGVzRnJvbUNzdiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVzdWx0cyIsImNzdlBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImNyZWF0ZVJlYWRTdHJlYW0iLCJwaXBlIiwib24iLCJkYXRhIiwicXVvdGUiLCJpZCIsInBhcnNlSW50IiwiemgiLCJxdW90ZV96aCIsImVuIiwicXVvdGVfZW4iLCJhdXRob3IiLCJhdXRob3JfemgiLCJhdXRob3JfZW4iLCJhdXRob3JUaXRsZSIsImF1dGhvcl90aXRsZV96aCIsImF1dGhvcl90aXRsZV9lbiIsImNhdGVnb3J5IiwicGVyaW9kIiwicGVyaW9kX3poIiwicGVyaW9kX2VuIiwibGlrZXMiLCJ2aWV3cyIsImNyZWF0ZWRfYXQiLCJib29rIiwiYm9va19lbiIsInB1c2giLCJHRVQiLCJxdW90ZXMiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/quotes/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/fs-extra","vendor-chunks/graceful-fs","vendor-chunks/csv-parser","vendor-chunks/jsonfile","vendor-chunks/universalify"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fquotes%2Froute&page=%2Fapi%2Fquotes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fquotes%2Froute.ts&appDir=C%3A%5CUsers%5CAlex%5CDocuments%5CAI%5Cwebsites%5Clifequote%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAlex%5CDocuments%5CAI%5Cwebsites%5Clifequote&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();