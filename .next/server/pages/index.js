module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/constanst/Apptheme.js":
/*!***********************************!*\
  !*** ./src/constanst/Apptheme.js ***!
  \***********************************/
/*! exports provided: theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '480px',
  tabletP: '768px',
  tabletL: '1024px',
  desktop: '1440px'
};
const theme = {
  device: {
    mobileS: `only screen and (max-width: ${size.mobileS})`,
    mobileM: `only screen and (max-width: ${size.mobileM})`,
    mobileL: `only screen and (max-width: ${size.mobileL})`,
    tabletP: `only screen and (max-width: ${size.tabletP})`,
    tabletL: `only screen and (max-width: ${size.tabletL})`,
    laptopL: `only screen and (max-width: ${size.laptopL})`,
    desktop: `only screen and (max-width: ${size.desktop})`
  },
  font_color: {
    font_color_main: "#333333",
    font_color_main_light: "#666666",
    light_color_1: "#4d4d4d",
    light_color_2: "#7f7f7f",
    light_color_3: "#7a7d85",
    hightligh_color: "#fe5722",
    color_menu: "#333",
    color_button: "#1890ff",
    white_color: "#fff",
    blue_color: "#0b76cc",
    third_color: "#85bd42"
  },
  background_color: {
    light_color_1: "#161e2c",
    light_color_2: "#7f7f7f",
    background_breadcum: " #F5F5F5",
    background_content: "#F5F5F5",
    hightligh_color: "#fe5722",
    hightlight_second_color: "#fe784b",
    white_color: "#fff",
    instant_color: "#39b54a",
    instant_color2: "#55D0E2"
  },
  font_family: {
    font_main: '400 16px/24px "Poppins",sans-serif',
    font_fam1: 'Arial',
    font_fam2: 'sans-serif'
  },
  font_size: {
    size_main: "1.6rem"
  },
  background_size: {
    width_content: "128rem",
    index_content: "160rem"
  },
  shadow: {
    shadowLight1: "0px 2px 3px 1px rgba(0,0,0,.15)"
  },
  border: {
    border_main: "0.5px solid rgba(0,0,0,.03)",
    border_light: "1px solid rgba(0,0,0,.09)"
  }
};

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: Body, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return Body; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constanst_Apptheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../constanst/Apptheme */ "./src/constanst/Apptheme.js");

var _jsxFileName = "/mnt/e/ESC_LLC/intantep/src/pages/index.js";





const Body = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_2__["Row"])`
    margin: 0 auto !important;
    color: red;
    align-self: auto;
    font-size:100px;
    max-width : ${props => props.theme.background_size.width_content};
`;

function HomePage() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: _constanst_Apptheme__WEBPACK_IMPORTED_MODULE_4__["theme"],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Body, {
      children: "Welcome"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW5zdC9BcHB0aGVtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsic2l6ZSIsIm1vYmlsZVMiLCJtb2JpbGVNIiwibW9iaWxlTCIsInRhYmxldFAiLCJ0YWJsZXRMIiwiZGVza3RvcCIsInRoZW1lIiwiZGV2aWNlIiwibGFwdG9wTCIsImZvbnRfY29sb3IiLCJmb250X2NvbG9yX21haW4iLCJmb250X2NvbG9yX21haW5fbGlnaHQiLCJsaWdodF9jb2xvcl8xIiwibGlnaHRfY29sb3JfMiIsImxpZ2h0X2NvbG9yXzMiLCJoaWdodGxpZ2hfY29sb3IiLCJjb2xvcl9tZW51IiwiY29sb3JfYnV0dG9uIiwid2hpdGVfY29sb3IiLCJibHVlX2NvbG9yIiwidGhpcmRfY29sb3IiLCJiYWNrZ3JvdW5kX2NvbG9yIiwiYmFja2dyb3VuZF9icmVhZGN1bSIsImJhY2tncm91bmRfY29udGVudCIsImhpZ2h0bGlnaHRfc2Vjb25kX2NvbG9yIiwiaW5zdGFudF9jb2xvciIsImluc3RhbnRfY29sb3IyIiwiZm9udF9mYW1pbHkiLCJmb250X21haW4iLCJmb250X2ZhbTEiLCJmb250X2ZhbTIiLCJmb250X3NpemUiLCJzaXplX21haW4iLCJiYWNrZ3JvdW5kX3NpemUiLCJ3aWR0aF9jb250ZW50IiwiaW5kZXhfY29udGVudCIsInNoYWRvdyIsInNoYWRvd0xpZ2h0MSIsImJvcmRlciIsImJvcmRlcl9tYWluIiwiYm9yZGVyX2xpZ2h0IiwiQm9keSIsInN0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QU0sRUFBRTtBQUNKQyxnQkFBWSxFQUFFO0FBRFYsR0EvQ1M7QUFrRGpCQyxRQUFNLEVBQUU7QUFDSkMsZUFBVyxFQUFFLDZCQURUO0FBRUpDLGdCQUFZLEVBQUU7QUFGVjtBQWxEUyxDQUFkLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTUMsSUFBSSxHQUFHQyx3REFBTSxDQUFDQyx3Q0FBRCxDQUFNO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCQyxLQUFLLElBQUlBLEtBQUssQ0FBQ3RDLEtBQU4sQ0FBWTJCLGVBQVosQ0FBNEJDLGFBQWM7QUFDckUsQ0FOTzs7QUFPUCxTQUFTVyxRQUFULEdBQW9CO0FBQ2hCLHNCQUNJLHFFQUFDLCtEQUFEO0FBQWUsU0FBSyxFQUFFdkMseURBQXRCO0FBQUEsNEJBR0kscUVBQUMsZ0RBQUQ7QUFBQSw2QkFFSTtBQUFNLFlBQUksRUFBQyxVQUFYO0FBQXNCLGVBQU8sRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKLGVBUUkscUVBQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBY0g7O0FBQ2N1Qyx1RUFBZixFOzs7Ozs7Ozs7OztBQzlCQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiY29uc3Qgc2l6ZSA9IHtcclxuICAgIG1vYmlsZVM6ICczMjBweCcsXHJcbiAgICBtb2JpbGVNOiAnMzc1cHgnLFxyXG4gICAgbW9iaWxlTDogJzQ4MHB4JyxcclxuICAgIHRhYmxldFA6ICc3NjhweCcsXHJcbiAgICB0YWJsZXRMOiAnMTAyNHB4JyxcclxuICAgIGRlc2t0b3A6ICcxNDQwcHgnLFxyXG59XHJcbmV4cG9ydCBjb25zdCB0aGVtZSA9IHtcclxuICAgIGRldmljZToge1xyXG4gICAgICAgIG1vYmlsZVM6IGBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtzaXplLm1vYmlsZVN9KWAsXHJcbiAgICAgICAgbW9iaWxlTTogYG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke3NpemUubW9iaWxlTX0pYCxcclxuICAgICAgICBtb2JpbGVMOiBgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7c2l6ZS5tb2JpbGVMfSlgLFxyXG4gICAgICAgIHRhYmxldFA6IGBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtzaXplLnRhYmxldFB9KWAsXHJcbiAgICAgICAgdGFibGV0TDogYG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke3NpemUudGFibGV0TH0pYCxcclxuICAgICAgICBsYXB0b3BMOiBgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7c2l6ZS5sYXB0b3BMfSlgLFxyXG4gICAgICAgIGRlc2t0b3A6IGBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtzaXplLmRlc2t0b3B9KWAsXHJcbiAgICB9LFxyXG4gICAgZm9udF9jb2xvcjoge1xyXG4gICAgICAgIGZvbnRfY29sb3JfbWFpbjogXCIjMzMzMzMzXCIsXHJcbiAgICAgICAgZm9udF9jb2xvcl9tYWluX2xpZ2h0OiBcIiM2NjY2NjZcIixcclxuICAgICAgICBsaWdodF9jb2xvcl8xOiBcIiM0ZDRkNGRcIixcclxuICAgICAgICBsaWdodF9jb2xvcl8yOiBcIiM3ZjdmN2ZcIixcclxuICAgICAgICBsaWdodF9jb2xvcl8zOiBcIiM3YTdkODVcIixcclxuICAgICAgICBoaWdodGxpZ2hfY29sb3I6IFwiI2ZlNTcyMlwiLFxyXG4gICAgICAgIGNvbG9yX21lbnU6IFwiIzMzM1wiLFxyXG4gICAgICAgIGNvbG9yX2J1dHRvbjogXCIjMTg5MGZmXCIsXHJcbiAgICAgICAgd2hpdGVfY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgIGJsdWVfY29sb3I6IFwiIzBiNzZjY1wiLFxyXG4gICAgICAgIHRoaXJkX2NvbG9yOiBcIiM4NWJkNDJcIixcclxuICAgIH0sXHJcbiAgICBiYWNrZ3JvdW5kX2NvbG9yOiB7XHJcbiAgICAgICAgbGlnaHRfY29sb3JfMTogXCIjMTYxZTJjXCIsXHJcbiAgICAgICAgbGlnaHRfY29sb3JfMjogXCIjN2Y3ZjdmXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZF9icmVhZGN1bTogXCIgI0Y1RjVGNVwiLFxyXG4gICAgICAgIGJhY2tncm91bmRfY29udGVudDogXCIjRjVGNUY1XCIsXHJcbiAgICAgICAgaGlnaHRsaWdoX2NvbG9yOiBcIiNmZTU3MjJcIixcclxuICAgICAgICBoaWdodGxpZ2h0X3NlY29uZF9jb2xvcjogXCIjZmU3ODRiXCIsXHJcbiAgICAgICAgd2hpdGVfY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgIGluc3RhbnRfY29sb3I6IFwiIzM5YjU0YVwiLFxyXG4gICAgICAgIGluc3RhbnRfY29sb3IyOiBcIiM1NUQwRTJcIixcclxuICAgIH0sXHJcbiAgICBmb250X2ZhbWlseToge1xyXG4gICAgICAgIGZvbnRfbWFpbjogJzQwMCAxNnB4LzI0cHggXCJQb3BwaW5zXCIsc2Fucy1zZXJpZicsXHJcbiAgICAgICAgZm9udF9mYW0xOiAnQXJpYWwnLFxyXG4gICAgICAgIGZvbnRfZmFtMjogJ3NhbnMtc2VyaWYnLFxyXG4gICAgfSxcclxuICAgIGZvbnRfc2l6ZToge1xyXG4gICAgICAgIHNpemVfbWFpbjogXCIxLjZyZW1cIixcclxuICAgIH0sXHJcbiAgICBiYWNrZ3JvdW5kX3NpemU6XHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGhfY29udGVudDogXCIxMjhyZW1cIixcclxuICAgICAgICBpbmRleF9jb250ZW50OiBcIjE2MHJlbVwiLFxyXG4gICAgfSxcclxuICAgIHNoYWRvdzoge1xyXG4gICAgICAgIHNoYWRvd0xpZ2h0MTogXCIwcHggMnB4IDNweCAxcHggcmdiYSgwLDAsMCwuMTUpXCIsXHJcbiAgICB9LFxyXG4gICAgYm9yZGVyOiB7XHJcbiAgICAgICAgYm9yZGVyX21haW46IFwiMC41cHggc29saWQgcmdiYSgwLDAsMCwuMDMpXCIsXHJcbiAgICAgICAgYm9yZGVyX2xpZ2h0OiBcIjFweCBzb2xpZCByZ2JhKDAsMCwwLC4wOSlcIixcclxuICAgIH1cclxufVxyXG5cclxuIiwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBSb3cgfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLy4uL2NvbnN0YW5zdC9BcHB0aGVtZSc7XHJcblxyXG5leHBvcnQgY29uc3QgQm9keSA9IHN0eWxlZChSb3cpYFxyXG4gICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBhbGlnbi1zZWxmOiBhdXRvO1xyXG4gICAgZm9udC1zaXplOjEwMHB4O1xyXG4gICAgbWF4LXdpZHRoIDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5iYWNrZ3JvdW5kX3NpemUud2lkdGhfY29udGVudH07XHJcbmBcclxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcblxyXG5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8Qm9keT5cclxuICAgICAgICAgICAgICAgIFdlbGNvbWVcclxuICAgICAgICA8L0JvZHk+XHJcbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=