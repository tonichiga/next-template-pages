"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/api/user-api.ts":
/*!*****************************!*\
  !*** ./src/api/user-api.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/shared/constants */ \"./src/shared/constants.ts\");\n/* harmony import */ var _shared_lib_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/lib/axios */ \"./src/shared/lib/axios.ts\");\n\n\nclass UserApi {\n    constructor(){\n        this.login = async (payload, thunkAPI)=>{\n            try {\n                const response = await _shared_lib_axios__WEBPACK_IMPORTED_MODULE_1__.axiosForNextApi.post(\"/login\", payload);\n                if (response.status === _shared_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].statusCodes.OK) {\n                    return response.data;\n                }\n                return Promise.reject(response);\n            } catch (error) {\n                var _error_response;\n                return thunkAPI.rejectWithValue(null, (error === null || error === void 0 ? void 0 : (_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) || error);\n            }\n        };\n        this.logout = async ()=>{\n            const response = await _shared_lib_axios__WEBPACK_IMPORTED_MODULE_1__.axiosForNextApi.delete(\"/logout\");\n            return response.status === _shared_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].statusCodes.OK;\n        };\n        this.registration = async (payload)=>{\n            const response = await _shared_lib_axios__WEBPACK_IMPORTED_MODULE_1__.axiosForNextApi.post(\"/registration\", payload);\n            return response;\n        };\n        this.fetchUser = async ()=>{\n            const response = await _shared_lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/auth/me\");\n            return response.data;\n        };\n        this.refresh = async ()=>{\n            const response = await fetch(\"\".concat(\"http://localhost:3000/api\", \"/refresh\"));\n            const data = await response.json();\n            return data.token;\n        };\n        this.resetPassword = async (payload)=>{\n            const response = await _shared_lib_axios__WEBPACK_IMPORTED_MODULE_1__.axiosForPublic.post(\"/auth/forgot/password\", payload);\n            return response;\n        };\n    }\n}\nconst userApi = new UserApi();\n/* harmony default export */ __webpack_exports__[\"default\"] = (userApi);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpL3VzZXItYXBpLnRzIiwibWFwcGluZ3MiOiI7OztBQUEyQztBQUlmO0FBRTVCLE1BQU1JOzthQUNKQyxRQUFRLE9BQU9DLFNBQVNDO1lBQ3RCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNTiw4REFBZUEsQ0FBQ08sSUFBSSxDQUFDLFVBQVVIO2dCQUV0RCxJQUFJRSxTQUFTRSxNQUFNLEtBQUtWLHFFQUFxQixDQUFDWSxFQUFFLEVBQUU7b0JBQ2hELE9BQU9KLFNBQVNLLElBQUk7Z0JBQ3RCO2dCQUVBLE9BQU9DLFFBQVFDLE1BQU0sQ0FBQ1A7WUFDeEIsRUFBRSxPQUFPUSxPQUFZO29CQUNtQkE7Z0JBQXRDLE9BQU9ULFNBQVNVLGVBQWUsQ0FBQyxNQUFNRCxDQUFBQSxrQkFBQUEsNkJBQUFBLGtCQUFBQSxNQUFPUixRQUFRLGNBQWZRLHNDQUFBQSxnQkFBaUJILElBQUksS0FBSUc7WUFDakU7UUFDRjthQUNBRSxTQUFTO1lBQ1AsTUFBTVYsV0FBVyxNQUFNTiw4REFBZUEsQ0FBQ2lCLE1BQU0sQ0FBQztZQUM5QyxPQUFPWCxTQUFTRSxNQUFNLEtBQUtWLHFFQUFxQixDQUFDWSxFQUFFO1FBQ3JEO2FBQ0FRLGVBQWUsT0FBT2Q7WUFDcEIsTUFBTUUsV0FBVyxNQUFNTiw4REFBZUEsQ0FBQ08sSUFBSSxDQUFDLGlCQUFpQkg7WUFDN0QsT0FBT0U7UUFDVDthQUNBYSxZQUFZO1lBQ1YsTUFBTWIsV0FBVyxNQUFNUCw2REFBbUIsQ0FBQztZQUMzQyxPQUFPTyxTQUFTSyxJQUFJO1FBQ3RCO2FBQ0FVLFVBQVU7WUFDUixNQUFNZixXQUFXLE1BQU1nQixNQUFNLEdBQW1DLE9BQWhDQywyQkFBK0IsRUFBQztZQUNoRSxNQUFNWixPQUFPLE1BQU1MLFNBQVNvQixJQUFJO1lBQ2hDLE9BQU9mLEtBQUtnQixLQUFLO1FBQ25CO2FBQ0FDLGdCQUFnQixPQUFPeEI7WUFDckIsTUFBTUUsV0FBVyxNQUFNTCw2REFBY0EsQ0FBQ00sSUFBSSxDQUN4Qyx5QkFDQUg7WUFFRixPQUFPRTtRQUNUOztBQUNGO0FBRUEsTUFBTXVCLFVBQVUsSUFBSTNCO0FBQ3BCLCtEQUFlMkIsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBpL3VzZXItYXBpLnRzP2QzYTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiQC9zaGFyZWQvY29uc3RhbnRzXCI7XG5pbXBvcnQgYXhpb3NGb3JQcml2YXRlLCB7XG4gIGF4aW9zRm9yTmV4dEFwaSxcbiAgYXhpb3NGb3JQdWJsaWMsXG59IGZyb20gXCJAL3NoYXJlZC9saWIvYXhpb3NcIjtcblxuY2xhc3MgVXNlckFwaSB7XG4gIGxvZ2luID0gYXN5bmMgKHBheWxvYWQsIHRodW5rQVBJKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NGb3JOZXh0QXBpLnBvc3QoXCIvbG9naW5cIiwgcGF5bG9hZCk7XG5cbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IGNvbnN0YW50cy5zdGF0dXNDb2Rlcy5PSykge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlc3BvbnNlKTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICByZXR1cm4gdGh1bmtBUEkucmVqZWN0V2l0aFZhbHVlKG51bGwsIGVycm9yPy5yZXNwb25zZT8uZGF0YSB8fCBlcnJvcik7XG4gICAgfVxuICB9O1xuICBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0Zvck5leHRBcGkuZGVsZXRlKFwiL2xvZ291dFwiKTtcbiAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzID09PSBjb25zdGFudHMuc3RhdHVzQ29kZXMuT0s7XG4gIH07XG4gIHJlZ2lzdHJhdGlvbiA9IGFzeW5jIChwYXlsb2FkKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0Zvck5leHRBcGkucG9zdChcIi9yZWdpc3RyYXRpb25cIiwgcGF5bG9hZCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9O1xuICBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0ZvclByaXZhdGUuZ2V0KFwiL2F1dGgvbWVcIik7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gIH07XG4gIHJlZnJlc2ggPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9yZWZyZXNoYCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YS50b2tlbjtcbiAgfTtcbiAgcmVzZXRQYXNzd29yZCA9IGFzeW5jIChwYXlsb2FkKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0ZvclB1YmxpYy5wb3N0KFxuICAgICAgXCIvYXV0aC9mb3Jnb3QvcGFzc3dvcmRcIixcbiAgICAgIHBheWxvYWRcbiAgICApO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfTtcbn1cblxuY29uc3QgdXNlckFwaSA9IG5ldyBVc2VyQXBpKCk7XG5leHBvcnQgZGVmYXVsdCB1c2VyQXBpO1xuIl0sIm5hbWVzIjpbImNvbnN0YW50cyIsImF4aW9zRm9yUHJpdmF0ZSIsImF4aW9zRm9yTmV4dEFwaSIsImF4aW9zRm9yUHVibGljIiwiVXNlckFwaSIsImxvZ2luIiwicGF5bG9hZCIsInRodW5rQVBJIiwicmVzcG9uc2UiLCJwb3N0Iiwic3RhdHVzIiwic3RhdHVzQ29kZXMiLCJPSyIsImRhdGEiLCJQcm9taXNlIiwicmVqZWN0IiwiZXJyb3IiLCJyZWplY3RXaXRoVmFsdWUiLCJsb2dvdXQiLCJkZWxldGUiLCJyZWdpc3RyYXRpb24iLCJmZXRjaFVzZXIiLCJnZXQiLCJyZWZyZXNoIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsImpzb24iLCJ0b2tlbiIsInJlc2V0UGFzc3dvcmQiLCJ1c2VyQXBpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/api/user-api.ts\n"));

/***/ }),

/***/ "./src/shared/constants.ts":
/*!*********************************!*\
  !*** ./src/shared/constants.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nconst statusCodes = {\n    OK: 200,\n    BAD_REQUEST: 400,\n    UNAUTHORIZED: 401,\n    UNPROCESSABLE_ENTITY: 422,\n    NOT_FOUND: 404,\n    INTERNAL_SERVER_ERROR: 500\n};\nconst constants = {\n    statusCodes\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (constants);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2hhcmVkL2NvbnN0YW50cy50cyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsY0FBYztJQUNsQkMsSUFBSTtJQUNKQyxhQUFhO0lBQ2JDLGNBQWM7SUFDZEMsc0JBQXNCO0lBQ3RCQyxXQUFXO0lBQ1hDLHVCQUF1QjtBQUN6QjtBQUVBLE1BQU1DLFlBQVk7SUFDaEJQO0FBQ0Y7QUFFQSwrREFBZU8sU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2hhcmVkL2NvbnN0YW50cy50cz8zYzhjIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHN0YXR1c0NvZGVzID0ge1xuICBPSzogMjAwLFxuICBCQURfUkVRVUVTVDogNDAwLFxuICBVTkFVVEhPUklaRUQ6IDQwMSxcbiAgVU5QUk9DRVNTQUJMRV9FTlRJVFk6IDQyMixcbiAgTk9UX0ZPVU5EOiA0MDQsXG4gIElOVEVSTkFMX1NFUlZFUl9FUlJPUjogNTAwLFxufTtcblxuY29uc3QgY29uc3RhbnRzID0ge1xuICBzdGF0dXNDb2Rlcyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnN0YW50cztcbiJdLCJuYW1lcyI6WyJzdGF0dXNDb2RlcyIsIk9LIiwiQkFEX1JFUVVFU1QiLCJVTkFVVEhPUklaRUQiLCJVTlBST0NFU1NBQkxFX0VOVElUWSIsIk5PVF9GT1VORCIsIklOVEVSTkFMX1NFUlZFUl9FUlJPUiIsImNvbnN0YW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/shared/constants.ts\n"));

/***/ })

});