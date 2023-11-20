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

/***/ "./src/api/crm-user-api.ts":
/*!*********************************!*\
  !*** ./src/api/crm-user-api.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/_/_ts_decorate */ \"./node_modules/@swc/helpers/esm/_ts_decorate.js\");\n/* harmony import */ var _shared_lib_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/shared/lib/axios */ \"./src/shared/lib/axios.ts\");\n\n\nclass CrmUsersApi {\n    async deleteCrmUser(userIds) {\n        console.log(\"userIds\", userIds);\n        await _shared_lib_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"][\"delete\"](\"/users\", {\n            headers: {\n                accept: \"*/*\",\n                \"Content-Type\": \"application/json\"\n            },\n            data: userIds\n        });\n        return userIds;\n    }\n    constructor(){\n        this.getCrmUsers = async function() {\n            let pagintaionConfig = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;\n            const response = await _shared_lib_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"\");\n            return response.data;\n        };\n    }\n}\n(0,_swc_helpers_ts_decorate__WEBPACK_IMPORTED_MODULE_1__._)([\n    TransformIdToPropertyId\n], CrmUsersApi.prototype, \"deleteCrmUser\", null);\nconst crmUsersApi = new CrmUsersApi();\n/* harmony default export */ __webpack_exports__[\"default\"] = (crmUsersApi);\nfunction TransformIdToPropertyId(_, __, descriptor) {\n    const originalMethod = descriptor.value;\n    descriptor.value = async function() {\n        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n            args[_key] = arguments[_key];\n        }\n        const payload = args[0];\n        let payloadPerformed = [];\n        return await originalMethod.apply(this, [\n            payloadPerformed\n        ]);\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpL2NybS11c2VyLWFwaS50cyIsIm1hcHBpbmdzIjoiOzs7O0FBQWlEO0FBRWpELE1BQU1DO0lBUUosTUFDTUMsY0FBY0MsT0FBTyxFQUFFO1FBQzNCQyxRQUFRQyxHQUFHLENBQUMsV0FBV0Y7UUFDdkIsTUFBTUgsbUVBQXNCLENBQUUsVUFBUztZQUNyQ08sU0FBUztnQkFDUEMsUUFBUTtnQkFDUixnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTU47UUFDUjtRQUNBLE9BQU9BO0lBQ1Q7SUFsQkFPLGFBQWM7YUFFZEMsY0FBYztnQkFBT0Msb0ZBQW1CO1lBQ3RDLE1BQU1DLFdBQVcsTUFBTWIsNkRBQW1CLENBQUM7WUFDM0MsT0FBT2EsU0FBU0osSUFBSTtRQUN0QjtJQUxlO0FBbUJqQjs7SUFaR007R0FSR2Q7QUFzQk4sTUFBTWUsY0FBYyxJQUFJZjtBQUN4QiwrREFBZWUsV0FBV0EsRUFBQztBQUUzQixTQUFTRCx3QkFBd0JFLENBQUMsRUFBRUMsRUFBRSxFQUFFQyxVQUE4QjtJQUNwRSxNQUFNQyxpQkFBaUJELFdBQVdFLEtBQUs7SUFFdkNGLFdBQVdFLEtBQUssR0FBRztRQUFnQjtZQUFHQyxLQUFILHVCQUFjO1FBQUQ7UUFDOUMsTUFBTUMsVUFBVUQsSUFBSSxDQUFDLEVBQUU7UUFDdkIsSUFBSUUsbUJBQW1CLEVBQUU7UUFFekIsT0FBTyxNQUFNSixlQUFlSyxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQUNEO1NBQWlCO0lBQzVEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwaS9jcm0tdXNlci1hcGkudHM/Nzg4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3NGb3JQcml2YXRlIGZyb20gXCJAL3NoYXJlZC9saWIvYXhpb3NcIjtcblxuY2xhc3MgQ3JtVXNlcnNBcGkge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgZ2V0Q3JtVXNlcnMgPSBhc3luYyAocGFnaW50YWlvbkNvbmZpZyA9IG51bGwpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zRm9yUHJpdmF0ZS5nZXQoXCJcIik7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gIH07XG5cbiAgQFRyYW5zZm9ybUlkVG9Qcm9wZXJ0eUlkXG4gIGFzeW5jIGRlbGV0ZUNybVVzZXIodXNlcklkcykge1xuICAgIGNvbnNvbGUubG9nKFwidXNlcklkc1wiLCB1c2VySWRzKTtcbiAgICBhd2FpdCBheGlvc0ZvclByaXZhdGUuZGVsZXRlKGAvdXNlcnNgLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIGFjY2VwdDogXCIqLypcIixcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgZGF0YTogdXNlcklkcyxcbiAgICB9KTtcbiAgICByZXR1cm4gdXNlcklkcztcbiAgfVxufVxuXG5jb25zdCBjcm1Vc2Vyc0FwaSA9IG5ldyBDcm1Vc2Vyc0FwaSgpO1xuZXhwb3J0IGRlZmF1bHQgY3JtVXNlcnNBcGk7XG5cbmZ1bmN0aW9uIFRyYW5zZm9ybUlkVG9Qcm9wZXJ0eUlkKF8sIF9fLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpIHtcbiAgY29uc3Qgb3JpZ2luYWxNZXRob2QgPSBkZXNjcmlwdG9yLnZhbHVlO1xuXG4gIGRlc2NyaXB0b3IudmFsdWUgPSBhc3luYyBmdW5jdGlvbiAoLi4uYXJnczogYW55W10pIHtcbiAgICBjb25zdCBwYXlsb2FkID0gYXJnc1swXSBhcyBudW1iZXJbXTtcbiAgICBsZXQgcGF5bG9hZFBlcmZvcm1lZCA9IFtdO1xuXG4gICAgcmV0dXJuIGF3YWl0IG9yaWdpbmFsTWV0aG9kLmFwcGx5KHRoaXMsIFtwYXlsb2FkUGVyZm9ybWVkXSk7XG4gIH07XG59XG4iXSwibmFtZXMiOlsiYXhpb3NGb3JQcml2YXRlIiwiQ3JtVXNlcnNBcGkiLCJkZWxldGVDcm1Vc2VyIiwidXNlcklkcyIsImNvbnNvbGUiLCJsb2ciLCJkZWxldGUiLCJoZWFkZXJzIiwiYWNjZXB0IiwiZGF0YSIsImNvbnN0cnVjdG9yIiwiZ2V0Q3JtVXNlcnMiLCJwYWdpbnRhaW9uQ29uZmlnIiwicmVzcG9uc2UiLCJnZXQiLCJUcmFuc2Zvcm1JZFRvUHJvcGVydHlJZCIsImNybVVzZXJzQXBpIiwiXyIsIl9fIiwiZGVzY3JpcHRvciIsIm9yaWdpbmFsTWV0aG9kIiwidmFsdWUiLCJhcmdzIiwicGF5bG9hZCIsInBheWxvYWRQZXJmb3JtZWQiLCJhcHBseSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api/crm-user-api.ts\n"));

/***/ })

});