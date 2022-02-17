"use strict";
(self["webpackChunkregistration_form"] = self["webpackChunkregistration_form"] || []).push([["src_components_testApp_js"],{

/***/ "./src/components/testApp.js":
/*!***********************************!*\
  !*** ./src/components/testApp.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");


var TestApp = function TestApp(props) {
  var alertClicked = function alertClicked() {
    alert('alert is triggered');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "testApp calling", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: function onClick() {
      props.parentCallback();
    }
  }, "Alert"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestApp);

/***/ })

}]);