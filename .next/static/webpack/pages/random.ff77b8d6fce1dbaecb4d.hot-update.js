webpackHotUpdate_N_E("pages/random",{

/***/ "./components/random-card.tsx":
/*!************************************!*\
  !*** ./components/random-card.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Profile; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ \"./node_modules/@material-ui/core/esm/Card/index.js\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"./node_modules/@material-ui/core/esm/CardContent/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\nvar _jsxFileName = \"/home/yusard/MirasFrontend/components/random-card.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])({\n  root: {\n    minWidth: 275\n  },\n  bullet: {\n    display: 'inline-block',\n    margin: '0 2px',\n    transform: 'scale(0.8)'\n  },\n  title: {\n    fontSize: 14\n  },\n  pos: {\n    marginBottom: 12\n  }\n});\nfunction Profile() {\n  _s();\n\n  var classes = useStyles();\n\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"https://miras-backend.herokuapp.com/random\"),\n      data = _useSWR.data,\n      error = _useSWR.error;\n\n  if (error) return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 21\n    }\n  }, \"failed to load\");\n  if (!data) return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 21\n    }\n  }, \"loading...\");\n  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    className: classes.title,\n    color: \"textSecondary\",\n    gutterBottom: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, \"Eserin Ad\\u0131\"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    variant: \"h5\",\n    component: \"h2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, data.title), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    className: classes.pos,\n    color: \"textSecondary\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, data.adress, __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }\n  }), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 11\n    }\n  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    variant: \"body2\",\n    component: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, data.about)));\n}\n\n_s(Profile, \"r0AAMx8OqK6CpZfd6ddqn5KBQAM=\", false, function () {\n  return [useStyles, swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n});\n\n_c = Profile;\n\nvar _c;\n\n$RefreshReg$(_c, \"Profile\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yYW5kb20tY2FyZC50c3g/MDlhMiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsIm1pbldpZHRoIiwiYnVsbGV0IiwiZGlzcGxheSIsIm1hcmdpbiIsInRyYW5zZm9ybSIsInRpdGxlIiwiZm9udFNpemUiLCJwb3MiLCJtYXJnaW5Cb3R0b20iLCJQcm9maWxlIiwiY2xhc3NlcyIsInVzZVNXUiIsImRhdGEiLCJlcnJvciIsImFkcmVzcyIsImFib3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQzNCQyxNQUFJLEVBQUU7QUFDSkMsWUFBUSxFQUFFO0FBRE4sR0FEcUI7QUFJM0JDLFFBQU0sRUFBRTtBQUNOQyxXQUFPLEVBQUUsY0FESDtBQUVOQyxVQUFNLEVBQUUsT0FGRjtBQUdOQyxhQUFTLEVBQUU7QUFITCxHQUptQjtBQVMzQkMsT0FBSyxFQUFFO0FBQ0xDLFlBQVEsRUFBRTtBQURMLEdBVG9CO0FBWTNCQyxLQUFHLEVBQUU7QUFDSEMsZ0JBQVksRUFBRTtBQURYO0FBWnNCLENBQUQsQ0FBNUI7QUFpQmUsU0FBU0MsT0FBVCxHQUFtQjtBQUFBOztBQUNoQyxNQUFNQyxPQUFPLEdBQUdiLFNBQVMsRUFBekI7O0FBRGdDLGdCQUVYYyxtREFBTSxDQUFDLDRDQUFELENBRks7QUFBQSxNQUV6QkMsSUFGeUIsV0FFekJBLElBRnlCO0FBQUEsTUFFcEJDLEtBRm9CLFdBRXBCQSxLQUZvQjs7QUFHaEMsTUFBSUEsS0FBSixFQUFXLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBUDtBQUNYLE1BQUksQ0FBQ0QsSUFBTCxFQUFXLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBUDtBQUNYLFNBR0UsTUFBQyw4REFBRDtBQUFNLGFBQVMsRUFBRUYsT0FBTyxDQUFDWCxJQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUFZLGFBQVMsRUFBRVcsT0FBTyxDQUFDTCxLQUEvQjtBQUFzQyxTQUFLLEVBQUMsZUFBNUM7QUFBNEQsZ0JBQVksTUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixFQUlFLE1BQUMsb0VBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsYUFBUyxFQUFDLElBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR08sSUFBSSxDQUFDUCxLQURSLENBSkYsRUFPRSxNQUFDLG9FQUFEO0FBQVksYUFBUyxFQUFFSyxPQUFPLENBQUNILEdBQS9CO0FBQW9DLFNBQUssRUFBQyxlQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dLLElBQUksQ0FBQ0UsTUFEUixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQVBGLEVBWUUsTUFBQyxvRUFBRDtBQUFZLFdBQU8sRUFBQyxPQUFwQjtBQUE0QixhQUFTLEVBQUMsR0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRixJQUFJLENBQUNHLEtBRFIsQ0FaRixDQURGLENBSEY7QUF1QkQ7O0dBNUJ1Qk4sTztVQUNOWixTLEVBQ0tjLDJDOzs7S0FGQ0YsTyIsImZpbGUiOiIuL2NvbXBvbmVudHMvcmFuZG9tLWNhcmQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9ucyc7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICByb290OiB7XG4gICAgbWluV2lkdGg6IDI3NSxcbiAgfSxcbiAgYnVsbGV0OiB7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgbWFyZ2luOiAnMCAycHgnLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknLFxuICB9LFxuICB0aXRsZToge1xuICAgIGZvbnRTaXplOiAxNCxcbiAgfSxcbiAgcG9zOiB7XG4gICAgbWFyZ2luQm90dG9tOiAxMixcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHtkYXRhLGVycm9yfSA9IHVzZVNXUihcImh0dHBzOi8vbWlyYXMtYmFja2VuZC5oZXJva3VhcHAuY29tL3JhbmRvbVwiKTtcbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5mYWlsZWQgdG8gbG9hZDwvZGl2PlxuICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PmxvYWRpbmcuLi48L2Rpdj5cbiAgcmV0dXJuIChcbiAgXG4gICAgXG4gICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICBFc2VyaW4gQWTEsSAgICAgIFxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgyXCI+XG4gICAgICAgICAge2RhdGEudGl0bGV9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnBvc30gY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XG4gICAgICAgICAge2RhdGEuYWRyZXNzfVxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb21wb25lbnQ9XCJwXCI+XG4gICAgICAgICAge2RhdGEuYWJvdXR9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICBcbiAgICA8L0NhcmQ+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/random-card.tsx\n");

/***/ })

})