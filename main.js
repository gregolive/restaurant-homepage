/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Panic.ttf */ "./src/fonts/Panic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/RobotoSerif.ttf */ "./src/fonts/RobotoSerif.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/mind-blown.jpg */ "./src/img/mind-blown.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* HOME PAGE */\n\n@font-face {\n  font-family: 'Panic';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'RobotoSerif';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n  font-weight: 500;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'RobotoSerif';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n  font-weight: 700;\n  font-style: normal;\n}\n\nbody {\n  font-family: 'RobotoSerif';\n  margin: 0;\n}\n\nbody > * {\n  box-sizing: border-box;\n}\n\na {\n  color: white;\n  text-decoration: none;\n  cursor: pointer;\n}\n\nheader {\n  font-size: 1.5rem;\n  height: 3rem;\n  display: flex;\n  justify-content: center;\n  gap: 5vw;\n}\n\nheader a {\n  background-color: rgba(0, 0, 0, 0.8);\n  border-radius: 0 0 1.5rem 1.5rem;\n  padding: 0 clamp(1rem, 2.5vw, 4rem);\n  display: flex;\n  align-items: center;\n  transition: all 0.25s ease-in-out;\n}\n\nheader a:hover {\n  color: #EFDA2A;\n  background-color: rgba(0, 0, 0, 1);\n}\n\n.banner {\n  color: white;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") 50% 100% no-repeat;\n  width: 100vw;\n  height: 100vh;\n  background-size: auto 115%;\n  overflow: hidden;\n  display: grid;\n  grid-template: auto 1fr auto / 1fr;\n  align-items: center;\n  justify-content: center;\n}\n\nh1 {\n  font-family: 'Panic';\n  font-size: 6rem;\n  line-height: 4rem;\n  text-shadow: 0 0 2rem black;\n  text-align: center;\n  margin: 0;\n}\n\nh1 span {\n  font-family: 'RobotoSerif';\n  font-size: 2.5rem;\n  margin: 0;\n}\n\nfooter {\n  font-size: 1rem;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  text-shadow: 0 0 0.4rem black;\n}\n\nfooter a:hover {\n  text-decoration: underline;\n}\n\nfooter p:first-child {\n  padding-left: 3vw;\n}\n\nfooter p:last-child {\n  padding-right: 3vw;\n}\n\n/* COFFEE PAGE */\n\n.banner.repeat {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat;\n  background-repeat: repeat-y;\n  background-size: contain;\n  width: auto;\n  height: auto;\n}\n\nsection.page-section {\n  background-color: rgba(32, 34, 113, 0.92);\n  border-radius: 1rem;\n  margin: 2rem 3vw;\n  padding: 3rem 4vw;\n}\n\nsection.page-section h1 {\n  font-size: 4rem;\n  grid-column: 1 / -1;\n}\n\n.coffee-grid {\n  padding-top: 2rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n\na.grid-item {\n  background-color: #CB687D;\n  border-radius: 0.5rem;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\na.grid-item h2 {\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin: 0.5em 0 0.3rem 0;\n  text-align: center;\n}\n\na.grid-item p {\n  color:rgba(255, 255, 255, 0.8);\n  margin: 0 0 0.75em 0;\n}\n\na.grid-item img {\n  height: auto;\n  width: 100%;\n  overflow: hidden;\n}\n\n/* CONTACT PAGE */\n\nsection.contact-section {\n  text-align: center;\n  padding-bottom: 1rem;\n  margin: auto;\n}\n\nsection.contact-section h1 {\n  font-size: 4rem;\n  padding-bottom: 1.5rem;\n}\n\nsection.contact-section p {\n  font-size: 1.5rem;\n  line-height: 1.75rem;\n}\n\n/* MEDIA QUERIES */\n\n@media screen and (max-width: 1100px) {\n  section.contact-section {\n    margin: 2rem 3vw;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  header {\n    font-size: 1.25rem;\n  }\n\n  h1 {\n    font-size: 5.5rem;\n    line-height: 5.5rem;\n  }\n\n  h1 span {\n    font-size: 2rem;\n  }\n\n  footer {\n    font-size: 0.8rem;\n  }\n\n  section.page-section {\n    padding-top: 2rem;\n  }\n\n  section.page-section h1 {\n    font-size: 3.25rem;\n  }\n\n  .coffee-grid {\n    padding-top: 1rem;\n  }\n\n  section.contact-section h1 {\n    font-size: 3rem;\n    padding-bottom: 0;\n  }\n\n  section.contact-section p {\n    font-size: 1.25rem;\n  }\n}\n\n@media screen and (max-width: 480px) {\n  section.page-section h1 {\n    font-size: 2.8rem;\n  }\n\n  h1.contact-heading {\n    font-size: 3rem;\n  }\n\n  section.contact-section h1 {\n    font-size: 2.5rem;\n  }\n\n  section.contact-section p {\n    font-size: 1rem;\n  }\n\n  footer {\n    font-size: 0.6rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA,cAAc;;AAEd;EACE,oBAAoB;EACpB,+DAAiD;EACjD,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;EAC1B,+DAAuD;EACvD,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,0BAA0B;EAC1B,+DAAuD;EACvD,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;EAC1B,SAAS;AACX;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,QAAQ;AACV;;AAEA;EACE,oCAAoC;EACpC,gCAAgC;EAChC,mCAAmC;EACnC,aAAa;EACb,mBAAmB;EACnB,iCAAiC;AACnC;;AAEA;EACE,cAAc;EACd,kCAAkC;AACpC;;AAEA;EACE,YAAY;EACZ,sEAA2D;EAC3D,YAAY;EACZ,aAAa;EACb,0BAA0B;EAC1B,gBAAgB;EAChB,aAAa;EACb,kCAAkC;EAClC,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,oBAAoB;EACpB,eAAe;EACf,iBAAiB;EACjB,2BAA2B;EAC3B,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,0BAA0B;EAC1B,iBAAiB;EACjB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,6BAA6B;AAC/B;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA,gBAAgB;;AAEhB;EACE,6DAAkD;EAClD,2BAA2B;EAC3B,wBAAwB;EACxB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,yCAAyC;EACzC,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,2DAA2D;EAC3D,WAAW;AACb;;AAEA;EACE,yBAAyB;EACzB,qBAAqB;EACrB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,wBAAwB;EACxB,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;EAC9B,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,gBAAgB;AAClB;;AAEA,iBAAiB;;AAEjB;EACE,kBAAkB;EAClB,oBAAoB;EACpB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA,kBAAkB;;AAElB;EACE;IACE,gBAAgB;EAClB;AACF;;AAEA;EACE;IACE,kBAAkB;EACpB;;EAEA;IACE,iBAAiB;IACjB,mBAAmB;EACrB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,eAAe;IACf,iBAAiB;EACnB;;EAEA;IACE,kBAAkB;EACpB;AACF;;AAEA;EACE;IACE,iBAAiB;EACnB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,iBAAiB;EACnB;AACF","sourcesContent":["/* HOME PAGE */\n\n@font-face {\n  font-family: 'Panic';\n  src: url('../fonts/Panic.ttf') format('truetype');\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'RobotoSerif';\n  src: url('../fonts/RobotoSerif.ttf') format('truetype');\n  font-weight: 500;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'RobotoSerif';\n  src: url('../fonts/RobotoSerif.ttf') format('truetype');\n  font-weight: 700;\n  font-style: normal;\n}\n\nbody {\n  font-family: 'RobotoSerif';\n  margin: 0;\n}\n\nbody > * {\n  box-sizing: border-box;\n}\n\na {\n  color: white;\n  text-decoration: none;\n  cursor: pointer;\n}\n\nheader {\n  font-size: 1.5rem;\n  height: 3rem;\n  display: flex;\n  justify-content: center;\n  gap: 5vw;\n}\n\nheader a {\n  background-color: rgba(0, 0, 0, 0.8);\n  border-radius: 0 0 1.5rem 1.5rem;\n  padding: 0 clamp(1rem, 2.5vw, 4rem);\n  display: flex;\n  align-items: center;\n  transition: all 0.25s ease-in-out;\n}\n\nheader a:hover {\n  color: #EFDA2A;\n  background-color: rgba(0, 0, 0, 1);\n}\n\n.banner {\n  color: white;\n  background: url('../img/mind-blown.jpg') 50% 100% no-repeat;\n  width: 100vw;\n  height: 100vh;\n  background-size: auto 115%;\n  overflow: hidden;\n  display: grid;\n  grid-template: auto 1fr auto / 1fr;\n  align-items: center;\n  justify-content: center;\n}\n\nh1 {\n  font-family: 'Panic';\n  font-size: 6rem;\n  line-height: 4rem;\n  text-shadow: 0 0 2rem black;\n  text-align: center;\n  margin: 0;\n}\n\nh1 span {\n  font-family: 'RobotoSerif';\n  font-size: 2.5rem;\n  margin: 0;\n}\n\nfooter {\n  font-size: 1rem;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  text-shadow: 0 0 0.4rem black;\n}\n\nfooter a:hover {\n  text-decoration: underline;\n}\n\nfooter p:first-child {\n  padding-left: 3vw;\n}\n\nfooter p:last-child {\n  padding-right: 3vw;\n}\n\n/* COFFEE PAGE */\n\n.banner.repeat {\n  background: url('../img/mind-blown.jpg') no-repeat;\n  background-repeat: repeat-y;\n  background-size: contain;\n  width: auto;\n  height: auto;\n}\n\nsection.page-section {\n  background-color: rgba(32, 34, 113, 0.92);\n  border-radius: 1rem;\n  margin: 2rem 3vw;\n  padding: 3rem 4vw;\n}\n\nsection.page-section h1 {\n  font-size: 4rem;\n  grid-column: 1 / -1;\n}\n\n.coffee-grid {\n  padding-top: 2rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n\na.grid-item {\n  background-color: #CB687D;\n  border-radius: 0.5rem;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\na.grid-item h2 {\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin: 0.5em 0 0.3rem 0;\n  text-align: center;\n}\n\na.grid-item p {\n  color:rgba(255, 255, 255, 0.8);\n  margin: 0 0 0.75em 0;\n}\n\na.grid-item img {\n  height: auto;\n  width: 100%;\n  overflow: hidden;\n}\n\n/* CONTACT PAGE */\n\nsection.contact-section {\n  text-align: center;\n  padding-bottom: 1rem;\n  margin: auto;\n}\n\nsection.contact-section h1 {\n  font-size: 4rem;\n  padding-bottom: 1.5rem;\n}\n\nsection.contact-section p {\n  font-size: 1.5rem;\n  line-height: 1.75rem;\n}\n\n/* MEDIA QUERIES */\n\n@media screen and (max-width: 1100px) {\n  section.contact-section {\n    margin: 2rem 3vw;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  header {\n    font-size: 1.25rem;\n  }\n\n  h1 {\n    font-size: 5.5rem;\n    line-height: 5.5rem;\n  }\n\n  h1 span {\n    font-size: 2rem;\n  }\n\n  footer {\n    font-size: 0.8rem;\n  }\n\n  section.page-section {\n    padding-top: 2rem;\n  }\n\n  section.page-section h1 {\n    font-size: 3.25rem;\n  }\n\n  .coffee-grid {\n    padding-top: 1rem;\n  }\n\n  section.contact-section h1 {\n    font-size: 3rem;\n    padding-bottom: 0;\n  }\n\n  section.contact-section p {\n    font-size: 1.25rem;\n  }\n}\n\n@media screen and (max-width: 480px) {\n  section.page-section h1 {\n    font-size: 2.8rem;\n  }\n\n  h1.contact-heading {\n    font-size: 3rem;\n  }\n\n  section.contact-section h1 {\n    font-size: 2.5rem;\n  }\n\n  section.contact-section p {\n    font-size: 1rem;\n  }\n\n  footer {\n    font-size: 0.6rem;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/script/coffee.js":
/*!******************************!*\
  !*** ./src/script/coffee.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_Ethiopia_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/Ethiopia.jpg */ "./src/img/Ethiopia.jpg");
/* harmony import */ var _img_Kenya_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/Kenya.jpg */ "./src/img/Kenya.jpg");
/* harmony import */ var _img_Colombia_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/Colombia.jpg */ "./src/img/Colombia.jpg");
/* harmony import */ var _img_Brazil_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/Brazil.jpg */ "./src/img/Brazil.jpg");
/* harmony import */ var _img_El_Salvador_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/El-Salvador.jpg */ "./src/img/El-Salvador.jpg");
/* harmony import */ var _img_Guatemala_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/Guatemala.jpg */ "./src/img/Guatemala.jpg");







function Coffee(name, country, price, image) { 
  this.name = name; 
  this.country = country; 
  this.price = price;
  this.image = image;
}

const buildCoffeeGrid = () => {
  const coffeeGrid = document.createElement('div'),
        coffees = [
          new Coffee('YIRGACHEFFE', 'Ethopia', '1,160', _img_Ethiopia_jpg__WEBPACK_IMPORTED_MODULE_0__),
          new Coffee('PB KAMWANGI', 'Kenya', '980', _img_Kenya_jpg__WEBPACK_IMPORTED_MODULE_1__),
          new Coffee('FRUTA MERCADAO', 'Brazil', '950', _img_Brazil_jpg__WEBPACK_IMPORTED_MODULE_3__),
          new Coffee('HUILA', 'Colombia', '890', _img_Colombia_jpg__WEBPACK_IMPORTED_MODULE_2__),
          new Coffee('DON JAMIE', 'El Salvador', '1,020', _img_El_Salvador_jpg__WEBPACK_IMPORTED_MODULE_4__),
          new Coffee('EL INJERTO BOURBON', 'Guatemala', '1,100', _img_Guatemala_jpg__WEBPACK_IMPORTED_MODULE_5__)
        ];

  coffeeGrid.className = 'coffee-grid';
  
  coffees.forEach(coffee => {
    const gridItem = document.createElement('a'),
          title = document.createElement('h2'),
          description = document.createElement('p'),
          img = document.createElement('img');

    title.textContent = coffee.name;
    description.textContent = `${coffee.country} | ¥${coffee.price}/100g`;
    img.src = coffee.image;
    img.alt = `Coffee beans from ${coffee.country}`;

    gridItem.className = 'grid-item';
    gridItem.appendChild(title);
    gridItem.appendChild(description);
    gridItem.appendChild(img);

    coffeeGrid.appendChild(gridItem);
  });

  return coffeeGrid;
}

const buildCoffeeSection = () => {
  const section = document.createElement('section'),
        heading = document.createElement('h1');

  section.className = 'page-section coffee-section';
  heading.textContent = 'OUR ROASTS';
  section.appendChild(heading);
  section.appendChild(buildCoffeeGrid());

  return section;
}

const coffee = () => {
  const banner = document.querySelector('.banner'),
        footer = document.querySelector('footer');

  banner.className = 'banner repeat';
  banner.insertBefore(buildCoffeeSection(), footer);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (coffee);

/***/ }),

/***/ "./src/script/contact.js":
/*!*******************************!*\
  !*** ./src/script/contact.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const buildContactInfo = () => {
  const section = document.createElement('section'),
        heading = document.createElement('h1'),
        blurb = document.createElement('p'),
        phone = document.createElement('p'),
        email = document.createElement('p');

  section.className = 'page-section contact-section'
  heading.textContent = 'GET IN TOUCH';
  blurb.textContent = 'Hey there! We would love to hear from you. Please give us a call or send us an email.'
  phone.textContent = 'Phone: 01-2345-6789';
  email.textContent = 'Email: info@mindblowncoffee.com';

  section.appendChild(heading);
  section.appendChild(blurb);
  section.appendChild(phone);
  section.appendChild(email);

  return section;
}

const contact = () => {
  const banner = document.querySelector('.banner'),
        footer = document.querySelector('footer');

  banner.className = 'banner';
  banner.insertBefore(buildContactInfo(), footer);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);

/***/ }),

/***/ "./src/script/footer.js":
/*!******************************!*\
  !*** ./src/script/footer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const buildAuthor = () => {
  const author = document.createElement('p'),
        github = document.createElement('a');
  
  author.innerHTML = '&copy;  ';
  github.setAttribute('href', 'https://github.com/gregolive');
  github.textContent = 'gregolive';
  author.appendChild(github);

  return author;
}

const buildAttribution = () => {
  const attribution = document.createElement('p'),
        imgAuthor = document.createElement('a'),
        span = document.createElement('span'),
        behance = document.createElement('a');

  attribution.textContent = 'Photo by ';
  imgAuthor.setAttribute('href', 'https://www.behance.net/Pm_ghst1992');
  imgAuthor.textContent = 'Pedro Moreno A. França';
  span.textContent = ' on ';
  behance.setAttribute('href', 'https://www.behance.net/');
  behance.textContent = 'Behance';

  attribution.appendChild(imgAuthor);
  attribution.appendChild(span);
  attribution.appendChild(behance);
  
  return attribution;
}

const buildFooter = () => {
  const footer = document.createElement('footer');
  footer.appendChild(buildAuthor());
  footer.appendChild(buildAttribution());

  return footer;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildFooter);

/***/ }),

/***/ "./src/script/header.js":
/*!******************************!*\
  !*** ./src/script/header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const buildHeader = () => {
  const header = document.createElement('header'),
        linkText = [
          { text: 'Home', class: 'btn home-btn' },
          { text: 'Coffee', class: 'btn coffee-btn' },
          { text: 'Contact', class: 'btn contact-btn' }
        ];

  linkText.forEach(link =>{
    let headerLink = document.createElement('a');
    headerLink.innerHTML = link.text;
    headerLink.className = link.class;
    header.appendChild(headerLink);
  });

  return header;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildHeader);

/***/ }),

/***/ "./src/script/home.js":
/*!****************************!*\
  !*** ./src/script/home.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/script/header.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.js */ "./src/script/footer.js");



const buildSection = () => {
  const section = document.createElement('section'),
        heading = document.createElement('h1'),
        span = document.createElement('span'),
        linebreak = document.createElement("br");

  heading.textContent = 'MIND BLOWN';
  span.textContent = 'Coffee Roasters';
  heading.appendChild(linebreak);
  heading.appendChild(span);
  section.appendChild(heading);

  return section;
}

const home = () => {
  if (!document.querySelector('.content')) {
    const content = document.createElement('div'),
          banner = document.createElement('div');

    content.className = 'content';
    banner.className = 'banner';
    document.body.appendChild(content);
    banner.appendChild((0,_header_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
    banner.appendChild(buildSection());
    banner.appendChild((0,_footer_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
    content.appendChild(banner);
  } else {
    const banner = document.querySelector('.banner'),
          footer = document.querySelector('footer');

    banner.className = 'banner';
    banner.insertBefore(buildSection(), footer);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);

/***/ }),

/***/ "./src/fonts/Panic.ttf":
/*!*****************************!*\
  !*** ./src/fonts/Panic.ttf ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f9c1f8970f413bd8d043.ttf";

/***/ }),

/***/ "./src/fonts/RobotoSerif.ttf":
/*!***********************************!*\
  !*** ./src/fonts/RobotoSerif.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4114767323e8221dc2f4.ttf";

/***/ }),

/***/ "./src/img/Brazil.jpg":
/*!****************************!*\
  !*** ./src/img/Brazil.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "82c00a07884b82885ac8.jpg";

/***/ }),

/***/ "./src/img/Colombia.jpg":
/*!******************************!*\
  !*** ./src/img/Colombia.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "db8cfafafd487c0c7894.jpg";

/***/ }),

/***/ "./src/img/El-Salvador.jpg":
/*!*********************************!*\
  !*** ./src/img/El-Salvador.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "41b62922f9065ca25dcd.jpg";

/***/ }),

/***/ "./src/img/Ethiopia.jpg":
/*!******************************!*\
  !*** ./src/img/Ethiopia.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "086441b0a7105a5ed22d.jpg";

/***/ }),

/***/ "./src/img/Guatemala.jpg":
/*!*******************************!*\
  !*** ./src/img/Guatemala.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c0df445a7a9722555ff3.jpg";

/***/ }),

/***/ "./src/img/Kenya.jpg":
/*!***************************!*\
  !*** ./src/img/Kenya.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d7568adc7101d3f93b84.jpg";

/***/ }),

/***/ "./src/img/mind-blown.jpg":
/*!********************************!*\
  !*** ./src/img/mind-blown.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "08ac0556fb436ec6c935.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/script/index.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/script/home.js");
/* harmony import */ var _coffee_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coffee.js */ "./src/script/coffee.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/script/contact.js");





(0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

const homeBtn = document.querySelector('.home-btn'),
      coffeeBtn = document.querySelector('.coffee-btn'),
      contactBtn = document.querySelector('.contact-btn');

homeBtn.addEventListener('click', () => {
  resetPage();
  (0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
})

coffeeBtn.addEventListener('click', () => {
  resetPage();
  (0,_coffee_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
})

contactBtn.addEventListener('click', () => {
  resetPage();
  (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
})

const resetPage = () => {
  let section = document.querySelector('section');
  section.remove();
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLGdIQUFxQztBQUNqRiw0Q0FBNEMsNEhBQTJDO0FBQ3ZGLDRDQUE0QyxzSEFBd0M7QUFDcEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLHlFQUF5RSx5QkFBeUIsNEVBQTRFLHFCQUFxQix1QkFBdUIsR0FBRyxnQkFBZ0IsK0JBQStCLDRFQUE0RSxxQkFBcUIsdUJBQXVCLEdBQUcsY0FBYywrQkFBK0IsNEVBQTRFLHFCQUFxQix1QkFBdUIsR0FBRyxVQUFVLCtCQUErQixjQUFjLEdBQUcsY0FBYywyQkFBMkIsR0FBRyxPQUFPLGlCQUFpQiwwQkFBMEIsb0JBQW9CLEdBQUcsWUFBWSxzQkFBc0IsaUJBQWlCLGtCQUFrQiw0QkFBNEIsYUFBYSxHQUFHLGNBQWMseUNBQXlDLHFDQUFxQyx3Q0FBd0Msa0JBQWtCLHdCQUF3QixzQ0FBc0MsR0FBRyxvQkFBb0IsbUJBQW1CLHVDQUF1QyxHQUFHLGFBQWEsaUJBQWlCLG1GQUFtRixpQkFBaUIsa0JBQWtCLCtCQUErQixxQkFBcUIsa0JBQWtCLHVDQUF1Qyx3QkFBd0IsNEJBQTRCLEdBQUcsUUFBUSx5QkFBeUIsb0JBQW9CLHNCQUFzQixnQ0FBZ0MsdUJBQXVCLGNBQWMsR0FBRyxhQUFhLCtCQUErQixzQkFBc0IsY0FBYyxHQUFHLFlBQVksb0JBQW9CLGdCQUFnQixrQkFBa0IsbUNBQW1DLGtDQUFrQyxHQUFHLG9CQUFvQiwrQkFBK0IsR0FBRywwQkFBMEIsc0JBQXNCLEdBQUcseUJBQXlCLHVCQUF1QixHQUFHLHlDQUF5QywwRUFBMEUsZ0NBQWdDLDZCQUE2QixnQkFBZ0IsaUJBQWlCLEdBQUcsMEJBQTBCLDhDQUE4Qyx3QkFBd0IscUJBQXFCLHNCQUFzQixHQUFHLDZCQUE2QixvQkFBb0Isd0JBQXdCLEdBQUcsa0JBQWtCLHNCQUFzQixrQkFBa0IsZ0VBQWdFLGdCQUFnQixHQUFHLGlCQUFpQiw4QkFBOEIsMEJBQTBCLGtCQUFrQixrQkFBa0IsMkJBQTJCLHdCQUF3QixHQUFHLG9CQUFvQixzQkFBc0Isc0JBQXNCLDZCQUE2Qix1QkFBdUIsR0FBRyxtQkFBbUIsbUNBQW1DLHlCQUF5QixHQUFHLHFCQUFxQixpQkFBaUIsZ0JBQWdCLHFCQUFxQixHQUFHLG1EQUFtRCx1QkFBdUIseUJBQXlCLGlCQUFpQixHQUFHLGdDQUFnQyxvQkFBb0IsMkJBQTJCLEdBQUcsK0JBQStCLHNCQUFzQix5QkFBeUIsR0FBRyxrRUFBa0UsNkJBQTZCLHVCQUF1QixLQUFLLEdBQUcsMENBQTBDLFlBQVkseUJBQXlCLEtBQUssVUFBVSx3QkFBd0IsMEJBQTBCLEtBQUssZUFBZSxzQkFBc0IsS0FBSyxjQUFjLHdCQUF3QixLQUFLLDRCQUE0Qix3QkFBd0IsS0FBSywrQkFBK0IseUJBQXlCLEtBQUssb0JBQW9CLHdCQUF3QixLQUFLLGtDQUFrQyxzQkFBc0Isd0JBQXdCLEtBQUssaUNBQWlDLHlCQUF5QixLQUFLLEdBQUcsMENBQTBDLDZCQUE2Qix3QkFBd0IsS0FBSywwQkFBMEIsc0JBQXNCLEtBQUssa0NBQWtDLHdCQUF3QixLQUFLLGlDQUFpQyxzQkFBc0IsS0FBSyxjQUFjLHdCQUF3QixLQUFLLEdBQUcsT0FBTywwRkFBMEYsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE1BQU0sd0RBQXdELHlCQUF5QixzREFBc0QscUJBQXFCLHVCQUF1QixHQUFHLGdCQUFnQiwrQkFBK0IsNERBQTRELHFCQUFxQix1QkFBdUIsR0FBRyxjQUFjLCtCQUErQiw0REFBNEQscUJBQXFCLHVCQUF1QixHQUFHLFVBQVUsK0JBQStCLGNBQWMsR0FBRyxjQUFjLDJCQUEyQixHQUFHLE9BQU8saUJBQWlCLDBCQUEwQixvQkFBb0IsR0FBRyxZQUFZLHNCQUFzQixpQkFBaUIsa0JBQWtCLDRCQUE0QixhQUFhLEdBQUcsY0FBYyx5Q0FBeUMscUNBQXFDLHdDQUF3QyxrQkFBa0Isd0JBQXdCLHNDQUFzQyxHQUFHLG9CQUFvQixtQkFBbUIsdUNBQXVDLEdBQUcsYUFBYSxpQkFBaUIsZ0VBQWdFLGlCQUFpQixrQkFBa0IsK0JBQStCLHFCQUFxQixrQkFBa0IsdUNBQXVDLHdCQUF3Qiw0QkFBNEIsR0FBRyxRQUFRLHlCQUF5QixvQkFBb0Isc0JBQXNCLGdDQUFnQyx1QkFBdUIsY0FBYyxHQUFHLGFBQWEsK0JBQStCLHNCQUFzQixjQUFjLEdBQUcsWUFBWSxvQkFBb0IsZ0JBQWdCLGtCQUFrQixtQ0FBbUMsa0NBQWtDLEdBQUcsb0JBQW9CLCtCQUErQixHQUFHLDBCQUEwQixzQkFBc0IsR0FBRyx5QkFBeUIsdUJBQXVCLEdBQUcseUNBQXlDLHVEQUF1RCxnQ0FBZ0MsNkJBQTZCLGdCQUFnQixpQkFBaUIsR0FBRywwQkFBMEIsOENBQThDLHdCQUF3QixxQkFBcUIsc0JBQXNCLEdBQUcsNkJBQTZCLG9CQUFvQix3QkFBd0IsR0FBRyxrQkFBa0Isc0JBQXNCLGtCQUFrQixnRUFBZ0UsZ0JBQWdCLEdBQUcsaUJBQWlCLDhCQUE4QiwwQkFBMEIsa0JBQWtCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLEdBQUcsb0JBQW9CLHNCQUFzQixzQkFBc0IsNkJBQTZCLHVCQUF1QixHQUFHLG1CQUFtQixtQ0FBbUMseUJBQXlCLEdBQUcscUJBQXFCLGlCQUFpQixnQkFBZ0IscUJBQXFCLEdBQUcsbURBQW1ELHVCQUF1Qix5QkFBeUIsaUJBQWlCLEdBQUcsZ0NBQWdDLG9CQUFvQiwyQkFBMkIsR0FBRywrQkFBK0Isc0JBQXNCLHlCQUF5QixHQUFHLGtFQUFrRSw2QkFBNkIsdUJBQXVCLEtBQUssR0FBRywwQ0FBMEMsWUFBWSx5QkFBeUIsS0FBSyxVQUFVLHdCQUF3QiwwQkFBMEIsS0FBSyxlQUFlLHNCQUFzQixLQUFLLGNBQWMsd0JBQXdCLEtBQUssNEJBQTRCLHdCQUF3QixLQUFLLCtCQUErQix5QkFBeUIsS0FBSyxvQkFBb0Isd0JBQXdCLEtBQUssa0NBQWtDLHNCQUFzQix3QkFBd0IsS0FBSyxpQ0FBaUMseUJBQXlCLEtBQUssR0FBRywwQ0FBMEMsNkJBQTZCLHdCQUF3QixLQUFLLDBCQUEwQixzQkFBc0IsS0FBSyxrQ0FBa0Msd0JBQXdCLEtBQUssaUNBQWlDLHNCQUFzQixLQUFLLGNBQWMsd0JBQXdCLEtBQUssR0FBRyxtQkFBbUI7QUFDM3NVO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDZDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzVCYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXNHO0FBQ3RHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJZ0Q7QUFDeEUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2YyQztBQUNOO0FBQ007QUFDSjtBQUNTO0FBQ0g7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsOENBQVE7QUFDaEUsb0RBQW9ELDJDQUFLO0FBQ3pELHdEQUF3RCw0Q0FBTTtBQUM5RCxpREFBaUQsOENBQVE7QUFDekQsMERBQTBELGlEQUFVO0FBQ3BFLGlFQUFpRSwrQ0FBUztBQUMxRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQyxnQkFBZ0IsS0FBSyxhQUFhO0FBQ25FO0FBQ0EsbUNBQW1DLGVBQWU7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7QUNyRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxPQUFPOzs7Ozs7Ozs7Ozs7OztBQzdCdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7QUN4QzFCO0FBQ0E7QUFDQTtBQUNBLFlBQVkscUNBQXFDO0FBQ2pELFlBQVkseUNBQXlDO0FBQ3JELFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQlk7QUFDQTs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNEQUFXO0FBQ2xDO0FBQ0EsdUJBQXVCLHNEQUFXO0FBQ2xDO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkNuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7O0FDckIwQjtBQUNHO0FBQ0k7QUFDRTs7QUFFbkMsb0RBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLG9EQUFJO0FBQ04sQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsRUFBRSxzREFBTTtBQUNSLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEVBQUUsdURBQU87QUFDVCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvc2NyaXB0L2NvZmZlZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL3NjcmlwdC9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvc2NyaXB0L2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL3NjcmlwdC9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9zY3JpcHQvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvc2NyaXB0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9QYW5pYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Sb2JvdG9TZXJpZi50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvbWluZC1ibG93bi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEhPTUUgUEFHRSAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdQYW5pYyc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90b1NlcmlmJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvU2VyaWYnO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG9TZXJpZic7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkgPiAqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDV2dztcXG59XFxuXFxuaGVhZGVyIGEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEuNXJlbSAxLjVyZW07XFxuICBwYWRkaW5nOiAwIGNsYW1wKDFyZW0sIDIuNXZ3LCA0cmVtKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5oZWFkZXIgYTpob3ZlciB7XFxuICBjb2xvcjogI0VGREEyQTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XFxufVxcblxcbi5iYW5uZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSA1MCUgMTAwJSBuby1yZXBlYXQ7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDExNSU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IGF1dG8gMWZyIGF1dG8gLyAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtZmFtaWx5OiAnUGFuaWMnO1xcbiAgZm9udC1zaXplOiA2cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDRyZW07XFxuICB0ZXh0LXNoYWRvdzogMCAwIDJyZW0gYmxhY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgxIHNwYW4ge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG9TZXJpZic7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHRleHQtc2hhZG93OiAwIDAgMC40cmVtIGJsYWNrO1xcbn1cXG5cXG5mb290ZXIgYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuZm9vdGVyIHA6Zmlyc3QtY2hpbGQge1xcbiAgcGFkZGluZy1sZWZ0OiAzdnc7XFxufVxcblxcbmZvb3RlciBwOmxhc3QtY2hpbGQge1xcbiAgcGFkZGluZy1yaWdodDogM3Z3O1xcbn1cXG5cXG4vKiBDT0ZGRUUgUEFHRSAqL1xcblxcbi5iYW5uZXIucmVwZWF0IHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbnNlY3Rpb24ucGFnZS1zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzIsIDM0LCAxMTMsIDAuOTIpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIG1hcmdpbjogMnJlbSAzdnc7XFxuICBwYWRkaW5nOiAzcmVtIDR2dztcXG59XFxuXFxuc2VjdGlvbi5wYWdlLXNlY3Rpb24gaDEge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG59XFxuXFxuLmNvZmZlZS1ncmlkIHtcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgZ2FwOiAxLjVyZW07XFxufVxcblxcbmEuZ3JpZC1pdGVtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDQjY4N0Q7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5hLmdyaWQtaXRlbSBoMiB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luOiAwLjVlbSAwIDAuM3JlbSAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5hLmdyaWQtaXRlbSBwIHtcXG4gIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIG1hcmdpbjogMCAwIDAuNzVlbSAwO1xcbn1cXG5cXG5hLmdyaWQtaXRlbSBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKiBDT05UQUNUIFBBR0UgKi9cXG5cXG5zZWN0aW9uLmNvbnRhY3Qtc2VjdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuc2VjdGlvbi5jb250YWN0LXNlY3Rpb24gaDEge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcXG59XFxuXFxuc2VjdGlvbi5jb250YWN0LXNlY3Rpb24gcCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcbn1cXG5cXG4vKiBNRURJQSBRVUVSSUVTICovXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XFxuICBzZWN0aW9uLmNvbnRhY3Qtc2VjdGlvbiB7XFxuICAgIG1hcmdpbjogMnJlbSAzdnc7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICBoZWFkZXIge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICB9XFxuXFxuICBoMSB7XFxuICAgIGZvbnQtc2l6ZTogNS41cmVtO1xcbiAgICBsaW5lLWhlaWdodDogNS41cmVtO1xcbiAgfVxcblxcbiAgaDEgc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgfVxcblxcbiAgc2VjdGlvbi5wYWdlLXNlY3Rpb24ge1xcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gIH1cXG5cXG4gIHNlY3Rpb24ucGFnZS1zZWN0aW9uIGgxIHtcXG4gICAgZm9udC1zaXplOiAzLjI1cmVtO1xcbiAgfVxcblxcbiAgLmNvZmZlZS1ncmlkIHtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxuICB9XFxuXFxuICBzZWN0aW9uLmNvbnRhY3Qtc2VjdGlvbiBoMSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDA7XFxuICB9XFxuXFxuICBzZWN0aW9uLmNvbnRhY3Qtc2VjdGlvbiBwIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgc2VjdGlvbi5wYWdlLXNlY3Rpb24gaDEge1xcbiAgICBmb250LXNpemU6IDIuOHJlbTtcXG4gIH1cXG5cXG4gIGgxLmNvbnRhY3QtaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gIH1cXG5cXG4gIHNlY3Rpb24uY29udGFjdC1zZWN0aW9uIGgxIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICB9XFxuXFxuICBzZWN0aW9uLmNvbnRhY3Qtc2VjdGlvbiBwIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcblxcbiAgZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiAwLjZyZW07XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGNBQWM7O0FBRWQ7RUFDRSxvQkFBb0I7RUFDcEIsK0RBQWlEO0VBQ2pELGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsK0RBQXVEO0VBQ3ZELGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQiwrREFBdUQ7RUFDdkQsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsUUFBUTtBQUNWOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdDQUFnQztFQUNoQyxtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHNFQUEyRDtFQUMzRCxZQUFZO0VBQ1osYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsZ0JBQWdCOztBQUVoQjtFQUNFLDZEQUFrRDtFQUNsRCwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiwyREFBMkQ7RUFDM0QsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUEsa0JBQWtCOztBQUVsQjtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEhPTUUgUEFHRSAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdQYW5pYyc7XFxuICBzcmM6IHVybCgnLi4vZm9udHMvUGFuaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90b1NlcmlmJztcXG4gIHNyYzogdXJsKCcuLi9mb250cy9Sb2JvdG9TZXJpZi50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvU2VyaWYnO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL1JvYm90b1NlcmlmLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG9TZXJpZic7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkgPiAqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDV2dztcXG59XFxuXFxuaGVhZGVyIGEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEuNXJlbSAxLjVyZW07XFxuICBwYWRkaW5nOiAwIGNsYW1wKDFyZW0sIDIuNXZ3LCA0cmVtKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5oZWFkZXIgYTpob3ZlciB7XFxuICBjb2xvcjogI0VGREEyQTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XFxufVxcblxcbi5iYW5uZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWcvbWluZC1ibG93bi5qcGcnKSA1MCUgMTAwJSBuby1yZXBlYXQ7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDExNSU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IGF1dG8gMWZyIGF1dG8gLyAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtZmFtaWx5OiAnUGFuaWMnO1xcbiAgZm9udC1zaXplOiA2cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDRyZW07XFxuICB0ZXh0LXNoYWRvdzogMCAwIDJyZW0gYmxhY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgxIHNwYW4ge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG9TZXJpZic7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHRleHQtc2hhZG93OiAwIDAgMC40cmVtIGJsYWNrO1xcbn1cXG5cXG5mb290ZXIgYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuZm9vdGVyIHA6Zmlyc3QtY2hpbGQge1xcbiAgcGFkZGluZy1sZWZ0OiAzdnc7XFxufVxcblxcbmZvb3RlciBwOmxhc3QtY2hpbGQge1xcbiAgcGFkZGluZy1yaWdodDogM3Z3O1xcbn1cXG5cXG4vKiBDT0ZGRUUgUEFHRSAqL1xcblxcbi5iYW5uZXIucmVwZWF0IHtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vaW1nL21pbmQtYmxvd24uanBnJykgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbnNlY3Rpb24ucGFnZS1zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzIsIDM0LCAxMTMsIDAuOTIpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIG1hcmdpbjogMnJlbSAzdnc7XFxuICBwYWRkaW5nOiAzcmVtIDR2dztcXG59XFxuXFxuc2VjdGlvbi5wYWdlLXNlY3Rpb24gaDEge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG59XFxuXFxuLmNvZmZlZS1ncmlkIHtcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgZ2FwOiAxLjVyZW07XFxufVxcblxcbmEuZ3JpZC1pdGVtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDQjY4N0Q7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5hLmdyaWQtaXRlbSBoMiB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luOiAwLjVlbSAwIDAuM3JlbSAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5hLmdyaWQtaXRlbSBwIHtcXG4gIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIG1hcmdpbjogMCAwIDAuNzVlbSAwO1xcbn1cXG5cXG5hLmdyaWQtaXRlbSBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKiBDT05UQUNUIFBBR0UgKi9cXG5cXG5zZWN0aW9uLmNvbnRhY3Qtc2VjdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuc2VjdGlvbi5jb250YWN0LXNlY3Rpb24gaDEge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcXG59XFxuXFxuc2VjdGlvbi5jb250YWN0LXNlY3Rpb24gcCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcbn1cXG5cXG4vKiBNRURJQSBRVUVSSUVTICovXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XFxuICBzZWN0aW9uLmNvbnRhY3Qtc2VjdGlvbiB7XFxuICAgIG1hcmdpbjogMnJlbSAzdnc7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICBoZWFkZXIge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICB9XFxuXFxuICBoMSB7XFxuICAgIGZvbnQtc2l6ZTogNS41cmVtO1xcbiAgICBsaW5lLWhlaWdodDogNS41cmVtO1xcbiAgfVxcblxcbiAgaDEgc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgfVxcblxcbiAgc2VjdGlvbi5wYWdlLXNlY3Rpb24ge1xcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gIH1cXG5cXG4gIHNlY3Rpb24ucGFnZS1zZWN0aW9uIGgxIHtcXG4gICAgZm9udC1zaXplOiAzLjI1cmVtO1xcbiAgfVxcblxcbiAgLmNvZmZlZS1ncmlkIHtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxuICB9XFxuXFxuICBzZWN0aW9uLmNvbnRhY3Qtc2VjdGlvbiBoMSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDA7XFxuICB9XFxuXFxuICBzZWN0aW9uLmNvbnRhY3Qtc2VjdGlvbiBwIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgc2VjdGlvbi5wYWdlLXNlY3Rpb24gaDEge1xcbiAgICBmb250LXNpemU6IDIuOHJlbTtcXG4gIH1cXG5cXG4gIGgxLmNvbnRhY3QtaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gIH1cXG5cXG4gIHNlY3Rpb24uY29udGFjdC1zZWN0aW9uIGgxIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICB9XFxuXFxuICBzZWN0aW9uLmNvbnRhY3Qtc2VjdGlvbiBwIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcblxcbiAgZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiAwLjZyZW07XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgRXRoaW9waWEgZnJvbSAnLi4vaW1nL0V0aGlvcGlhLmpwZyc7XG5pbXBvcnQgS2VueWEgZnJvbSAnLi4vaW1nL0tlbnlhLmpwZyc7XG5pbXBvcnQgQ29sb21iaWEgZnJvbSAnLi4vaW1nL0NvbG9tYmlhLmpwZyc7XG5pbXBvcnQgQnJhemlsIGZyb20gJy4uL2ltZy9CcmF6aWwuanBnJztcbmltcG9ydCBFbFNhbHZhZG9yIGZyb20gJy4uL2ltZy9FbC1TYWx2YWRvci5qcGcnO1xuaW1wb3J0IEd1YXRlbWFsYSBmcm9tICcuLi9pbWcvR3VhdGVtYWxhLmpwZyc7XG5cbmZ1bmN0aW9uIENvZmZlZShuYW1lLCBjb3VudHJ5LCBwcmljZSwgaW1hZ2UpIHsgXG4gIHRoaXMubmFtZSA9IG5hbWU7IFxuICB0aGlzLmNvdW50cnkgPSBjb3VudHJ5OyBcbiAgdGhpcy5wcmljZSA9IHByaWNlO1xuICB0aGlzLmltYWdlID0gaW1hZ2U7XG59XG5cbmNvbnN0IGJ1aWxkQ29mZmVlR3JpZCA9ICgpID0+IHtcbiAgY29uc3QgY29mZmVlR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICBjb2ZmZWVzID0gW1xuICAgICAgICAgIG5ldyBDb2ZmZWUoJ1lJUkdBQ0hFRkZFJywgJ0V0aG9waWEnLCAnMSwxNjAnLCBFdGhpb3BpYSksXG4gICAgICAgICAgbmV3IENvZmZlZSgnUEIgS0FNV0FOR0knLCAnS2VueWEnLCAnOTgwJywgS2VueWEpLFxuICAgICAgICAgIG5ldyBDb2ZmZWUoJ0ZSVVRBIE1FUkNBREFPJywgJ0JyYXppbCcsICc5NTAnLCBCcmF6aWwpLFxuICAgICAgICAgIG5ldyBDb2ZmZWUoJ0hVSUxBJywgJ0NvbG9tYmlhJywgJzg5MCcsIENvbG9tYmlhKSxcbiAgICAgICAgICBuZXcgQ29mZmVlKCdET04gSkFNSUUnLCAnRWwgU2FsdmFkb3InLCAnMSwwMjAnLCBFbFNhbHZhZG9yKSxcbiAgICAgICAgICBuZXcgQ29mZmVlKCdFTCBJTkpFUlRPIEJPVVJCT04nLCAnR3VhdGVtYWxhJywgJzEsMTAwJywgR3VhdGVtYWxhKVxuICAgICAgICBdO1xuXG4gIGNvZmZlZUdyaWQuY2xhc3NOYW1lID0gJ2NvZmZlZS1ncmlkJztcbiAgXG4gIGNvZmZlZXMuZm9yRWFjaChjb2ZmZWUgPT4ge1xuICAgIGNvbnN0IGdyaWRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpLFxuICAgICAgICAgIHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKSxcbiAgICAgICAgICBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSxcbiAgICAgICAgICBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gY29mZmVlLm5hbWU7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHtjb2ZmZWUuY291bnRyeX0gfCDCpSR7Y29mZmVlLnByaWNlfS8xMDBnYDtcbiAgICBpbWcuc3JjID0gY29mZmVlLmltYWdlO1xuICAgIGltZy5hbHQgPSBgQ29mZmVlIGJlYW5zIGZyb20gJHtjb2ZmZWUuY291bnRyeX1gO1xuXG4gICAgZ3JpZEl0ZW0uY2xhc3NOYW1lID0gJ2dyaWQtaXRlbSc7XG4gICAgZ3JpZEl0ZW0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGdyaWRJdGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBncmlkSXRlbS5hcHBlbmRDaGlsZChpbWcpO1xuXG4gICAgY29mZmVlR3JpZC5hcHBlbmRDaGlsZChncmlkSXRlbSk7XG4gIH0pO1xuXG4gIHJldHVybiBjb2ZmZWVHcmlkO1xufVxuXG5jb25zdCBidWlsZENvZmZlZVNlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyksXG4gICAgICAgIGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gIHNlY3Rpb24uY2xhc3NOYW1lID0gJ3BhZ2Utc2VjdGlvbiBjb2ZmZWUtc2VjdGlvbic7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnT1VSIFJPQVNUUyc7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoYnVpbGRDb2ZmZWVHcmlkKCkpO1xuXG4gIHJldHVybiBzZWN0aW9uO1xufVxuXG5jb25zdCBjb2ZmZWUgPSAoKSA9PiB7XG4gIGNvbnN0IGJhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYW5uZXInKSxcbiAgICAgICAgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJyk7XG5cbiAgYmFubmVyLmNsYXNzTmFtZSA9ICdiYW5uZXIgcmVwZWF0JztcbiAgYmFubmVyLmluc2VydEJlZm9yZShidWlsZENvZmZlZVNlY3Rpb24oKSwgZm9vdGVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29mZmVlOyIsImNvbnN0IGJ1aWxkQ29udGFjdEluZm8gPSAoKSA9PiB7XG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyksXG4gICAgICAgIGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpLFxuICAgICAgICBibHVyYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSxcbiAgICAgICAgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyksXG4gICAgICAgIGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIHNlY3Rpb24uY2xhc3NOYW1lID0gJ3BhZ2Utc2VjdGlvbiBjb250YWN0LXNlY3Rpb24nXG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnR0VUIElOIFRPVUNIJztcbiAgYmx1cmIudGV4dENvbnRlbnQgPSAnSGV5IHRoZXJlISBXZSB3b3VsZCBsb3ZlIHRvIGhlYXIgZnJvbSB5b3UuIFBsZWFzZSBnaXZlIHVzIGEgY2FsbCBvciBzZW5kIHVzIGFuIGVtYWlsLidcbiAgcGhvbmUudGV4dENvbnRlbnQgPSAnUGhvbmU6IDAxLTIzNDUtNjc4OSc7XG4gIGVtYWlsLnRleHRDb250ZW50ID0gJ0VtYWlsOiBpbmZvQG1pbmRibG93bmNvZmZlZS5jb20nO1xuXG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoYmx1cmIpO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKHBob25lKTtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChlbWFpbCk7XG5cbiAgcmV0dXJuIHNlY3Rpb247XG59XG5cbmNvbnN0IGNvbnRhY3QgPSAoKSA9PiB7XG4gIGNvbnN0IGJhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYW5uZXInKSxcbiAgICAgICAgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJyk7XG5cbiAgYmFubmVyLmNsYXNzTmFtZSA9ICdiYW5uZXInO1xuICBiYW5uZXIuaW5zZXJ0QmVmb3JlKGJ1aWxkQ29udGFjdEluZm8oKSwgZm9vdGVyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3Q7IiwiY29uc3QgYnVpbGRBdXRob3IgPSAoKSA9PiB7XG4gIGNvbnN0IGF1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSxcbiAgICAgICAgZ2l0aHViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBcbiAgYXV0aG9yLmlubmVySFRNTCA9ICcmY29weTsgICc7XG4gIGdpdGh1Yi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9naXRodWIuY29tL2dyZWdvbGl2ZScpO1xuICBnaXRodWIudGV4dENvbnRlbnQgPSAnZ3JlZ29saXZlJztcbiAgYXV0aG9yLmFwcGVuZENoaWxkKGdpdGh1Yik7XG5cbiAgcmV0dXJuIGF1dGhvcjtcbn1cblxuY29uc3QgYnVpbGRBdHRyaWJ1dGlvbiA9ICgpID0+IHtcbiAgY29uc3QgYXR0cmlidXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyksXG4gICAgICAgIGltZ0F1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKSxcbiAgICAgICAgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSxcbiAgICAgICAgYmVoYW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICBhdHRyaWJ1dGlvbi50ZXh0Q29udGVudCA9ICdQaG90byBieSAnO1xuICBpbWdBdXRob3Iuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vd3d3LmJlaGFuY2UubmV0L1BtX2doc3QxOTkyJyk7XG4gIGltZ0F1dGhvci50ZXh0Q29udGVudCA9ICdQZWRybyBNb3Jlbm8gQS4gRnJhbsOnYSc7XG4gIHNwYW4udGV4dENvbnRlbnQgPSAnIG9uICc7XG4gIGJlaGFuY2Uuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vd3d3LmJlaGFuY2UubmV0LycpO1xuICBiZWhhbmNlLnRleHRDb250ZW50ID0gJ0JlaGFuY2UnO1xuXG4gIGF0dHJpYnV0aW9uLmFwcGVuZENoaWxkKGltZ0F1dGhvcik7XG4gIGF0dHJpYnV0aW9uLmFwcGVuZENoaWxkKHNwYW4pO1xuICBhdHRyaWJ1dGlvbi5hcHBlbmRDaGlsZChiZWhhbmNlKTtcbiAgXG4gIHJldHVybiBhdHRyaWJ1dGlvbjtcbn1cblxuY29uc3QgYnVpbGRGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoYnVpbGRBdXRob3IoKSk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChidWlsZEF0dHJpYnV0aW9uKCkpO1xuXG4gIHJldHVybiBmb290ZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkRm9vdGVyOyIsImNvbnN0IGJ1aWxkSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKSxcbiAgICAgICAgbGlua1RleHQgPSBbXG4gICAgICAgICAgeyB0ZXh0OiAnSG9tZScsIGNsYXNzOiAnYnRuIGhvbWUtYnRuJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0NvZmZlZScsIGNsYXNzOiAnYnRuIGNvZmZlZS1idG4nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQ29udGFjdCcsIGNsYXNzOiAnYnRuIGNvbnRhY3QtYnRuJyB9XG4gICAgICAgIF07XG5cbiAgbGlua1RleHQuZm9yRWFjaChsaW5rID0+e1xuICAgIGxldCBoZWFkZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGhlYWRlckxpbmsuaW5uZXJIVE1MID0gbGluay50ZXh0O1xuICAgIGhlYWRlckxpbmsuY2xhc3NOYW1lID0gbGluay5jbGFzcztcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTGluayk7XG4gIH0pO1xuXG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkSGVhZGVyOyIsImltcG9ydCBidWlsZEhlYWRlciBmcm9tICcuL2hlYWRlci5qcyc7XG5pbXBvcnQgYnVpbGRGb290ZXIgZnJvbSAnLi9mb290ZXIuanMnO1xuXG5jb25zdCBidWlsZFNlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyksXG4gICAgICAgIGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpLFxuICAgICAgICBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuICAgICAgICBsaW5lYnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XG5cbiAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdNSU5EIEJMT1dOJztcbiAgc3Bhbi50ZXh0Q29udGVudCA9ICdDb2ZmZWUgUm9hc3RlcnMnO1xuICBoZWFkaW5nLmFwcGVuZENoaWxkKGxpbmVicmVhayk7XG4gIGhlYWRpbmcuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgcmV0dXJuIHNlY3Rpb247XG59XG5cbmNvbnN0IGhvbWUgPSAoKSA9PiB7XG4gIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgICBiYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnRlbnQuY2xhc3NOYW1lID0gJ2NvbnRlbnQnO1xuICAgIGJhbm5lci5jbGFzc05hbWUgPSAnYmFubmVyJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIGJhbm5lci5hcHBlbmRDaGlsZChidWlsZEhlYWRlcigpKTtcbiAgICBiYW5uZXIuYXBwZW5kQ2hpbGQoYnVpbGRTZWN0aW9uKCkpO1xuICAgIGJhbm5lci5hcHBlbmRDaGlsZChidWlsZEZvb3RlcigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJhbm5lcik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgYmFubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhbm5lcicpLFxuICAgICAgICAgIGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xuXG4gICAgYmFubmVyLmNsYXNzTmFtZSA9ICdiYW5uZXInO1xuICAgIGJhbm5lci5pbnNlcnRCZWZvcmUoYnVpbGRTZWN0aW9uKCksIGZvb3Rlcik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4uL2Nzcy9zdHlsZS5jc3MnO1xuaW1wb3J0IGhvbWUgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBjb2ZmZWUgZnJvbSAnLi9jb2ZmZWUuanMnO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJztcblxuaG9tZSgpO1xuXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUtYnRuJyksXG4gICAgICBjb2ZmZWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29mZmVlLWJ0bicpLFxuICAgICAgY29udGFjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LWJ0bicpO1xuXG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICByZXNldFBhZ2UoKTtcbiAgaG9tZSgpO1xufSlcblxuY29mZmVlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICByZXNldFBhZ2UoKTtcbiAgY29mZmVlKCk7XG59KVxuXG5jb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICByZXNldFBhZ2UoKTtcbiAgY29udGFjdCgpO1xufSlcblxuY29uc3QgcmVzZXRQYWdlID0gKCkgPT4ge1xuICBsZXQgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKTtcbiAgc2VjdGlvbi5yZW1vdmUoKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==