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
___CSS_LOADER_EXPORT___.push([module.id, "/* HOME PAGE */\n\n@font-face {\n  font-family: 'Panic';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'RobotoSerif';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n  font-weight: 500;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'RobotoSerif';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n  font-weight: 700;\n  font-style: normal;\n}\n\nbody {\n  font-family: 'RobotoSerif';\n  margin: 0;\n}\n\nbody > * {\n  box-sizing: border-box;\n}\n\na {\n  color: white;\n  text-decoration: none;\n  cursor: pointer;\n}\n\nheader {\n  font-size: 1.5rem;\n  height: 3rem;\n  display: flex;\n  justify-content: center;\n  gap: 5vw;\n}\n\nheader a {\n  background-color: rgba(0, 0, 0, 0.8);\n  border-radius: 0 0 1.5rem 1.5rem;\n  padding: 0 clamp(1rem, 2.5vw, 4rem);\n  display: flex;\n  align-items: center;\n  transition: all 0.25s ease-in-out;\n}\n\nheader a:hover, header a.active-btn {\n  color: #EFDA2A;\n  background-color: rgba(0, 0, 0, 1);\n}\n\n.banner {\n  color: white;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") 50% 100% no-repeat;\n  width: 100vw;\n  height: 100vh;\n  background-size: auto 115%;\n  overflow: hidden;\n  display: grid;\n  grid-template: auto 1fr auto / 1fr;\n  align-items: center;\n  justify-content: center;\n}\n\nh1 {\n  font-family: 'Panic';\n  font-size: 6rem;\n  line-height: 4rem;\n  text-shadow: 0 0 2rem black;\n  text-align: center;\n  margin: 0;\n}\n\nh1 span {\n  font-family: 'RobotoSerif';\n  font-size: 2.5rem;\n  margin: 0;\n}\n\nfooter {\n  font-size: 1rem;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  text-shadow: 0 0 0.4rem black;\n}\n\nfooter a:hover {\n  text-decoration: underline;\n}\n\nfooter p:first-child {\n  padding-left: 3vw;\n}\n\nfooter p:last-child {\n  padding-right: 3vw;\n}\n\n/* COFFEE PAGE */\n\nmain.repeat {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat;\n  background-repeat: repeat-y;\n  background-size: contain;\n  width: auto;\n  height: auto;\n}\n\nsection {\n  background-color: rgba(32, 34, 113, 0.92);\n  border-radius: 1rem;\n  margin: 2rem 3vw;\n  padding: 3rem 4vw;\n}\n\nsection h1 {\n  font-size: 4rem;\n  grid-column: 1 / -1;\n}\n\n.coffee-grid {\n  padding-top: 2rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n\na.grid-item {\n  background-color: #CB687D;\n  border-radius: 0.5rem;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\na.grid-item h2 {\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin: 0.5em 0 0.3rem 0;\n  text-align: center;\n}\n\na.grid-item p {\n  color:rgba(255, 255, 255, 0.8);\n  margin: 0 0 0.75em 0;\n}\n\na.grid-item img {\n  height: auto;\n  width: 100%;\n  overflow: hidden;\n}\n\n/* CONTACT PAGE */\n\nsection.contact-section {\n  text-align: center;\n  padding-bottom: 1rem;\n  margin: auto;\n}\n\nsection.contact-section h1 {\n  font-size: 4rem;\n  padding-bottom: 1.5rem;\n}\n\nsection.contact-section p {\n  font-size: 1.5rem;\n  line-height: 1.75rem;\n}\n\n/* MEDIA QUERIES */\n\n@media screen and (max-width: 1100px) {\n  section.contact-section {\n    margin: 2rem 3vw;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  header {\n    font-size: 1.25rem;\n  }\n\n  h1 {\n    font-size: 5.5rem;\n    line-height: 5.5rem;\n  }\n\n  h1 span {\n    font-size: 2rem;\n  }\n\n  footer {\n    font-size: 0.8rem;\n  }\n\n  section {\n    padding-top: 2rem;\n  }\n\n  section h1 {\n    font-size: 3.25rem;\n  }\n\n  .coffee-grid {\n    padding-top: 1rem;\n  }\n\n  section.contact-section h1 {\n    font-size: 3rem;\n    padding-bottom: 0;\n  }\n\n  section.contact-section p {\n    font-size: 1.25rem;\n  }\n  \n}\n\n@media screen and (max-width: 480px) {\n  section h1 {\n    font-size: 2.8rem;\n  }\n\n  h1.contact-heading {\n    font-size: 3rem;\n  }\n\n  section.contact-section h1 {\n    font-size: 2.5rem;\n  }\n\n  section.contact-section p {\n    font-size: 1rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA,cAAc;;AAEd;EACE,oBAAoB;EACpB,+DAAiD;EACjD,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;EAC1B,+DAAuD;EACvD,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,0BAA0B;EAC1B,+DAAuD;EACvD,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;EAC1B,SAAS;AACX;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,QAAQ;AACV;;AAEA;EACE,oCAAoC;EACpC,gCAAgC;EAChC,mCAAmC;EACnC,aAAa;EACb,mBAAmB;EACnB,iCAAiC;AACnC;;AAEA;EACE,cAAc;EACd,kCAAkC;AACpC;;AAEA;EACE,YAAY;EACZ,sEAA2D;EAC3D,YAAY;EACZ,aAAa;EACb,0BAA0B;EAC1B,gBAAgB;EAChB,aAAa;EACb,kCAAkC;EAClC,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,oBAAoB;EACpB,eAAe;EACf,iBAAiB;EACjB,2BAA2B;EAC3B,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,0BAA0B;EAC1B,iBAAiB;EACjB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,6BAA6B;AAC/B;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA,gBAAgB;;AAEhB;EACE,6DAAkD;EAClD,2BAA2B;EAC3B,wBAAwB;EACxB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,yCAAyC;EACzC,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,2DAA2D;EAC3D,WAAW;AACb;;AAEA;EACE,yBAAyB;EACzB,qBAAqB;EACrB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,wBAAwB;EACxB,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;EAC9B,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,gBAAgB;AAClB;;AAEA,iBAAiB;;AAEjB;EACE,kBAAkB;EAClB,oBAAoB;EACpB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA,kBAAkB;;AAElB;EACE;IACE,gBAAgB;EAClB;AACF;;AAEA;EACE;IACE,kBAAkB;EACpB;;EAEA;IACE,iBAAiB;IACjB,mBAAmB;EACrB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,eAAe;IACf,iBAAiB;EACnB;;EAEA;IACE,kBAAkB;EACpB;;AAEF;;AAEA;EACE;IACE,iBAAiB;EACnB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,eAAe;EACjB;AACF","sourcesContent":["/* HOME PAGE */\n\n@font-face {\n  font-family: 'Panic';\n  src: url('../fonts/Panic.ttf') format('truetype');\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'RobotoSerif';\n  src: url('../fonts/RobotoSerif.ttf') format('truetype');\n  font-weight: 500;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'RobotoSerif';\n  src: url('../fonts/RobotoSerif.ttf') format('truetype');\n  font-weight: 700;\n  font-style: normal;\n}\n\nbody {\n  font-family: 'RobotoSerif';\n  margin: 0;\n}\n\nbody > * {\n  box-sizing: border-box;\n}\n\na {\n  color: white;\n  text-decoration: none;\n  cursor: pointer;\n}\n\nheader {\n  font-size: 1.5rem;\n  height: 3rem;\n  display: flex;\n  justify-content: center;\n  gap: 5vw;\n}\n\nheader a {\n  background-color: rgba(0, 0, 0, 0.8);\n  border-radius: 0 0 1.5rem 1.5rem;\n  padding: 0 clamp(1rem, 2.5vw, 4rem);\n  display: flex;\n  align-items: center;\n  transition: all 0.25s ease-in-out;\n}\n\nheader a:hover, header a.active-btn {\n  color: #EFDA2A;\n  background-color: rgba(0, 0, 0, 1);\n}\n\n.banner {\n  color: white;\n  background: url('../img/mind-blown.jpg') 50% 100% no-repeat;\n  width: 100vw;\n  height: 100vh;\n  background-size: auto 115%;\n  overflow: hidden;\n  display: grid;\n  grid-template: auto 1fr auto / 1fr;\n  align-items: center;\n  justify-content: center;\n}\n\nh1 {\n  font-family: 'Panic';\n  font-size: 6rem;\n  line-height: 4rem;\n  text-shadow: 0 0 2rem black;\n  text-align: center;\n  margin: 0;\n}\n\nh1 span {\n  font-family: 'RobotoSerif';\n  font-size: 2.5rem;\n  margin: 0;\n}\n\nfooter {\n  font-size: 1rem;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  text-shadow: 0 0 0.4rem black;\n}\n\nfooter a:hover {\n  text-decoration: underline;\n}\n\nfooter p:first-child {\n  padding-left: 3vw;\n}\n\nfooter p:last-child {\n  padding-right: 3vw;\n}\n\n/* COFFEE PAGE */\n\nmain.repeat {\n  background: url('../img/mind-blown.jpg') no-repeat;\n  background-repeat: repeat-y;\n  background-size: contain;\n  width: auto;\n  height: auto;\n}\n\nsection {\n  background-color: rgba(32, 34, 113, 0.92);\n  border-radius: 1rem;\n  margin: 2rem 3vw;\n  padding: 3rem 4vw;\n}\n\nsection h1 {\n  font-size: 4rem;\n  grid-column: 1 / -1;\n}\n\n.coffee-grid {\n  padding-top: 2rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n\na.grid-item {\n  background-color: #CB687D;\n  border-radius: 0.5rem;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\na.grid-item h2 {\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin: 0.5em 0 0.3rem 0;\n  text-align: center;\n}\n\na.grid-item p {\n  color:rgba(255, 255, 255, 0.8);\n  margin: 0 0 0.75em 0;\n}\n\na.grid-item img {\n  height: auto;\n  width: 100%;\n  overflow: hidden;\n}\n\n/* CONTACT PAGE */\n\nsection.contact-section {\n  text-align: center;\n  padding-bottom: 1rem;\n  margin: auto;\n}\n\nsection.contact-section h1 {\n  font-size: 4rem;\n  padding-bottom: 1.5rem;\n}\n\nsection.contact-section p {\n  font-size: 1.5rem;\n  line-height: 1.75rem;\n}\n\n/* MEDIA QUERIES */\n\n@media screen and (max-width: 1100px) {\n  section.contact-section {\n    margin: 2rem 3vw;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  header {\n    font-size: 1.25rem;\n  }\n\n  h1 {\n    font-size: 5.5rem;\n    line-height: 5.5rem;\n  }\n\n  h1 span {\n    font-size: 2rem;\n  }\n\n  footer {\n    font-size: 0.8rem;\n  }\n\n  section {\n    padding-top: 2rem;\n  }\n\n  section h1 {\n    font-size: 3.25rem;\n  }\n\n  .coffee-grid {\n    padding-top: 1rem;\n  }\n\n  section.contact-section h1 {\n    font-size: 3rem;\n    padding-bottom: 0;\n  }\n\n  section.contact-section p {\n    font-size: 1.25rem;\n  }\n  \n}\n\n@media screen and (max-width: 480px) {\n  section h1 {\n    font-size: 2.8rem;\n  }\n\n  h1.contact-heading {\n    font-size: 3rem;\n  }\n\n  section.contact-section h1 {\n    font-size: 2.5rem;\n  }\n\n  section.contact-section p {\n    font-size: 1rem;\n  }\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/script/header.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.js */ "./src/script/footer.js");
/* harmony import */ var _img_Ethiopia_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/Ethiopia.jpg */ "./src/img/Ethiopia.jpg");
/* harmony import */ var _img_Kenya_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/Kenya.jpg */ "./src/img/Kenya.jpg");
/* harmony import */ var _img_Colombia_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/Colombia.jpg */ "./src/img/Colombia.jpg");
/* harmony import */ var _img_Brazil_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/Brazil.jpg */ "./src/img/Brazil.jpg");
/* harmony import */ var _img_El_Salvador_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/El-Salvador.jpg */ "./src/img/El-Salvador.jpg");
/* harmony import */ var _img_Guatemala_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/Guatemala.jpg */ "./src/img/Guatemala.jpg");










function Coffee(name, country, price, image) { 
  this.name = name; 
  this.country = country; 
  this.price = price;
  this.image = image;
}

const buildCoffeeGrid = () => {
  const coffeeGrid = document.createElement('div'),
        coffees = [
          new Coffee('YIRGACHEFFE', 'Ethopia', '1,160', _img_Ethiopia_jpg__WEBPACK_IMPORTED_MODULE_2__),
          new Coffee('PB KAMWANGI', 'Kenya', '980', _img_Kenya_jpg__WEBPACK_IMPORTED_MODULE_3__),
          new Coffee('FRUTA MERCADAO', 'Brazil', '950', _img_Brazil_jpg__WEBPACK_IMPORTED_MODULE_5__),
          new Coffee('HUILA', 'Colombia', '890', _img_Colombia_jpg__WEBPACK_IMPORTED_MODULE_4__),
          new Coffee('DON JAMIE', 'El Salvador', '1,020', _img_El_Salvador_jpg__WEBPACK_IMPORTED_MODULE_6__),
          new Coffee('EL INJERTO BOURBON', 'Guatemala', '1,100', _img_Guatemala_jpg__WEBPACK_IMPORTED_MODULE_7__)
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

  section.className = 'coffee-section';
  heading.textContent = 'OUR ROASTS';
  section.appendChild(heading);
  section.appendChild(buildCoffeeGrid());

  return section;
}

const coffee = () => {
  const content = document.querySelector('.content'),
        main = document.createElement('main');

  main.className = 'banner repeat';
  main.appendChild((0,_header_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
  main.appendChild(buildCoffeeSection());
  main.appendChild((0,_footer_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
  content.appendChild(main);
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
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/script/header.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.js */ "./src/script/footer.js");



const buildContactInfo = () => {
  const section = document.createElement('section'),
        heading = document.createElement('h1'),
        blurb = document.createElement('p'),
        phone = document.createElement('p'),
        email = document.createElement('p');

  section.className = 'contact-section'
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
  const content = document.querySelector('.content'),
        banner = document.createElement('div');

  banner.className = 'banner';
  banner.appendChild((0,_header_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
  banner.appendChild(buildContactInfo());
  banner.appendChild((0,_footer_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
  content.appendChild(banner);
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
    headerLink.textContent = link.text;
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



const buildHeading = () => {
  const heading = document.createElement('h1'),
        span = document.createElement('span'),
        linebreak = document.createElement("br");

  heading.textContent = 'MIND BLOWN';
  span.textContent = 'Coffee Roasters';
  heading.appendChild(linebreak);
  heading.appendChild(span);

  return heading;
}

const home = () => {
  const content = document.querySelector('.content'),
        banner = document.createElement('div');

  banner.className = 'banner';
  banner.appendChild((0,_header_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
  banner.appendChild(buildHeading());
  banner.appendChild((0,_footer_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
  content.appendChild(banner);
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

module.exports = __webpack_require__.p + "e9dfba7ff5c6a7e10cad.jpg";

/***/ }),

/***/ "./src/img/Colombia.jpg":
/*!******************************!*\
  !*** ./src/img/Colombia.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ab5dd3c0339f99378a29.jpg";

/***/ }),

/***/ "./src/img/El-Salvador.jpg":
/*!*********************************!*\
  !*** ./src/img/El-Salvador.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "727dc83a7b3ad758018e.jpg";

/***/ }),

/***/ "./src/img/Ethiopia.jpg":
/*!******************************!*\
  !*** ./src/img/Ethiopia.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "368a4d41c53858f42010.jpg";

/***/ }),

/***/ "./src/img/Guatemala.jpg":
/*!*******************************!*\
  !*** ./src/img/Guatemala.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a614409fa31acc33471b.jpg";

/***/ }),

/***/ "./src/img/Kenya.jpg":
/*!***************************!*\
  !*** ./src/img/Kenya.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7ca17a76edfac8407aa5.jpg";

/***/ }),

/***/ "./src/img/mind-blown.jpg":
/*!********************************!*\
  !*** ./src/img/mind-blown.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a2f914491ba542e46074.jpg";

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





(function() {
  (0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

  const homeBtn = document.querySelector('.home-btn'),
        coffeeBtn = document.querySelector('.coffee-btn'),
        contactBtn = document.querySelector('.contact-btn'),
        activeBtn = document.querySelector('.active-btn');


  homeBtn.addEventListener('click', (e) => {
    resetPage();
    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    assignActiveTab(e);
  })

  coffeeBtn.addEventListener('click', (e) => {
    resetPage();
    (0,_coffee_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    assignActiveTab(e);
  })

  contactBtn.addEventListener('click', (e) => {
    resetPage();
    (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    assignActiveTab(e);
  })

  function resetPage() {
    const banner = document.querySelector('.banner'),
          buttons = document.querySelectorAll('.btn');
    
    banner.remove();
    
    buttons.forEach(button => {
      button.className = "";
    });
    return true;
  }

  function assignActiveTab(e) {
    console.log(e.target);
    e.target.classList.add('active-btn');
  }
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3JCMEI7QUFDRztBQUNJO0FBQ0U7O0FBRW5DO0FBQ0EsRUFBRSxvREFBSTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLElBQUksb0RBQUk7QUFDUjtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUksc0RBQU07QUFDVjtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUksdURBQU87QUFDWDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL3NjcmlwdC9jb2ZmZWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9zY3JpcHQvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL3NjcmlwdC9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9zY3JpcHQvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvc2NyaXB0L2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL3NjcmlwdC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvUGFuaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvUm9ib3RvU2VyaWYudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1nL21pbmQtYmxvd24uanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBIT01FIFBBR0UgKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUGFuaWMnO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG9TZXJpZic7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90b1NlcmlmJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvU2VyaWYnO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5ID4gKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1dnc7XFxufVxcblxcbmhlYWRlciBhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxLjVyZW0gMS41cmVtO1xcbiAgcGFkZGluZzogMCBjbGFtcCgxcmVtLCAyLjV2dywgNHJlbSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcXG59XFxuXFxuaGVhZGVyIGE6aG92ZXIsIGhlYWRlciBhLmFjdGl2ZS1idG4ge1xcbiAgY29sb3I6ICNFRkRBMkE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xcbn1cXG5cXG4uYmFubmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgNTAlIDEwMCUgbm8tcmVwZWF0O1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMTUlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiBhdXRvIDFmciBhdXRvIC8gMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LWZhbWlseTogJ1BhbmljJztcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiA0cmVtO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCAycmVtIGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oMSBzcGFuIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvU2VyaWYnO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmZvb3RlciB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB0ZXh0LXNoYWRvdzogMCAwIDAuNHJlbSBibGFjaztcXG59XFxuXFxuZm9vdGVyIGE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbmZvb3RlciBwOmZpcnN0LWNoaWxkIHtcXG4gIHBhZGRpbmctbGVmdDogM3Z3O1xcbn1cXG5cXG5mb290ZXIgcDpsYXN0LWNoaWxkIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDN2dztcXG59XFxuXFxuLyogQ09GRkVFIFBBR0UgKi9cXG5cXG5tYWluLnJlcGVhdCB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzIsIDM0LCAxMTMsIDAuOTIpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIG1hcmdpbjogMnJlbSAzdnc7XFxuICBwYWRkaW5nOiAzcmVtIDR2dztcXG59XFxuXFxuc2VjdGlvbiBoMSB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbn1cXG5cXG4uY29mZmVlLWdyaWQge1xcbiAgcGFkZGluZy10b3A6IDJyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICBnYXA6IDEuNXJlbTtcXG59XFxuXFxuYS5ncmlkLWl0ZW0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NCNjg3RDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmEuZ3JpZC1pdGVtIGgyIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW46IDAuNWVtIDAgMC4zcmVtIDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmEuZ3JpZC1pdGVtIHAge1xcbiAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgbWFyZ2luOiAwIDAgMC43NWVtIDA7XFxufVxcblxcbmEuZ3JpZC1pdGVtIGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qIENPTlRBQ1QgUEFHRSAqL1xcblxcbnNlY3Rpb24uY29udGFjdC1zZWN0aW9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG5zZWN0aW9uLmNvbnRhY3Qtc2VjdGlvbiBoMSB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG5zZWN0aW9uLmNvbnRhY3Qtc2VjdGlvbiBwIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XFxufVxcblxcbi8qIE1FRElBIFFVRVJJRVMgKi9cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcXG4gIHNlY3Rpb24uY29udGFjdC1zZWN0aW9uIHtcXG4gICAgbWFyZ2luOiAycmVtIDN2dztcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIGhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIH1cXG5cXG4gIGgxIHtcXG4gICAgZm9udC1zaXplOiA1LjVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiA1LjVyZW07XFxuICB9XFxuXFxuICBoMSBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcblxcbiAgZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICB9XFxuXFxuICBzZWN0aW9uIHtcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxuICB9XFxuXFxuICBzZWN0aW9uIGgxIHtcXG4gICAgZm9udC1zaXplOiAzLjI1cmVtO1xcbiAgfVxcblxcbiAgLmNvZmZlZS1ncmlkIHtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxuICB9XFxuXFxuICBzZWN0aW9uLmNvbnRhY3Qtc2VjdGlvbiBoMSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDA7XFxuICB9XFxuXFxuICBzZWN0aW9uLmNvbnRhY3Qtc2VjdGlvbiBwIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgfVxcbiAgXFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICBzZWN0aW9uIGgxIHtcXG4gICAgZm9udC1zaXplOiAyLjhyZW07XFxuICB9XFxuXFxuICBoMS5jb250YWN0LWhlYWRpbmcge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxuXFxuICBzZWN0aW9uLmNvbnRhY3Qtc2VjdGlvbiBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgfVxcblxcbiAgc2VjdGlvbi5jb250YWN0LXNlY3Rpb24gcCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsY0FBYzs7QUFFZDtFQUNFLG9CQUFvQjtFQUNwQiwrREFBaUQ7RUFDakQsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiwrREFBdUQ7RUFDdkQsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLCtEQUF1RDtFQUN2RCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZ0NBQWdDO0VBQ2hDLG1DQUFtQztFQUNuQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0VBQTJEO0VBQzNELFlBQVk7RUFDWixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSxnQkFBZ0I7O0FBRWhCO0VBQ0UsNkRBQWtEO0VBQ2xELDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQSxrQkFBa0I7O0FBRWxCO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztBQUVGOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEhPTUUgUEFHRSAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdQYW5pYyc7XFxuICBzcmM6IHVybCgnLi4vZm9udHMvUGFuaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90b1NlcmlmJztcXG4gIHNyYzogdXJsKCcuLi9mb250cy9Sb2JvdG9TZXJpZi50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvU2VyaWYnO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL1JvYm90b1NlcmlmLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG9TZXJpZic7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkgPiAqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDV2dztcXG59XFxuXFxuaGVhZGVyIGEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEuNXJlbSAxLjVyZW07XFxuICBwYWRkaW5nOiAwIGNsYW1wKDFyZW0sIDIuNXZ3LCA0cmVtKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5oZWFkZXIgYTpob3ZlciwgaGVhZGVyIGEuYWN0aXZlLWJ0biB7XFxuICBjb2xvcjogI0VGREEyQTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XFxufVxcblxcbi5iYW5uZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWcvbWluZC1ibG93bi5qcGcnKSA1MCUgMTAwJSBuby1yZXBlYXQ7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDExNSU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IGF1dG8gMWZyIGF1dG8gLyAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtZmFtaWx5OiAnUGFuaWMnO1xcbiAgZm9udC1zaXplOiA2cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDRyZW07XFxuICB0ZXh0LXNoYWRvdzogMCAwIDJyZW0gYmxhY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgxIHNwYW4ge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG9TZXJpZic7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHRleHQtc2hhZG93OiAwIDAgMC40cmVtIGJsYWNrO1xcbn1cXG5cXG5mb290ZXIgYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuZm9vdGVyIHA6Zmlyc3QtY2hpbGQge1xcbiAgcGFkZGluZy1sZWZ0OiAzdnc7XFxufVxcblxcbmZvb3RlciBwOmxhc3QtY2hpbGQge1xcbiAgcGFkZGluZy1yaWdodDogM3Z3O1xcbn1cXG5cXG4vKiBDT0ZGRUUgUEFHRSAqL1xcblxcbm1haW4ucmVwZWF0IHtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vaW1nL21pbmQtYmxvd24uanBnJykgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMiwgMzQsIDExMywgMC45Mik7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgbWFyZ2luOiAycmVtIDN2dztcXG4gIHBhZGRpbmc6IDNyZW0gNHZ3O1xcbn1cXG5cXG5zZWN0aW9uIGgxIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxufVxcblxcbi5jb2ZmZWUtZ3JpZCB7XFxuICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gIGdhcDogMS41cmVtO1xcbn1cXG5cXG5hLmdyaWQtaXRlbSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0I2ODdEO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYS5ncmlkLWl0ZW0gaDIge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbjogMC41ZW0gMCAwLjNyZW0gMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuYS5ncmlkLWl0ZW0gcCB7XFxuICBjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICBtYXJnaW46IDAgMCAwLjc1ZW0gMDtcXG59XFxuXFxuYS5ncmlkLWl0ZW0gaW1nIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLyogQ09OVEFDVCBQQUdFICovXFxuXFxuc2VjdGlvbi5jb250YWN0LXNlY3Rpb24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbnNlY3Rpb24uY29udGFjdC1zZWN0aW9uIGgxIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XFxufVxcblxcbnNlY3Rpb24uY29udGFjdC1zZWN0aW9uIHAge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsaW5lLWhlaWdodDogMS43NXJlbTtcXG59XFxuXFxuLyogTUVESUEgUVVFUklFUyAqL1xcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xcbiAgc2VjdGlvbi5jb250YWN0LXNlY3Rpb24ge1xcbiAgICBtYXJnaW46IDJyZW0gM3Z3O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgfVxcblxcbiAgaDEge1xcbiAgICBmb250LXNpemU6IDUuNXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDUuNXJlbTtcXG4gIH1cXG5cXG4gIGgxIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxuXFxuICBmb290ZXIge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gIH1cXG5cXG4gIHNlY3Rpb24ge1xcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gIH1cXG5cXG4gIHNlY3Rpb24gaDEge1xcbiAgICBmb250LXNpemU6IDMuMjVyZW07XFxuICB9XFxuXFxuICAuY29mZmVlLWdyaWQge1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gIH1cXG5cXG4gIHNlY3Rpb24uY29udGFjdC1zZWN0aW9uIGgxIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gIH1cXG5cXG4gIHNlY3Rpb24uY29udGFjdC1zZWN0aW9uIHAge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICB9XFxuICBcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gIHNlY3Rpb24gaDEge1xcbiAgICBmb250LXNpemU6IDIuOHJlbTtcXG4gIH1cXG5cXG4gIGgxLmNvbnRhY3QtaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gIH1cXG5cXG4gIHNlY3Rpb24uY29udGFjdC1zZWN0aW9uIGgxIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICB9XFxuXFxuICBzZWN0aW9uLmNvbnRhY3Qtc2VjdGlvbiBwIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGJ1aWxkSGVhZGVyIGZyb20gJy4vaGVhZGVyLmpzJztcbmltcG9ydCBidWlsZEZvb3RlciBmcm9tICcuL2Zvb3Rlci5qcyc7XG5cbmltcG9ydCBFdGhpb3BpYSBmcm9tICcuLi9pbWcvRXRoaW9waWEuanBnJztcbmltcG9ydCBLZW55YSBmcm9tICcuLi9pbWcvS2VueWEuanBnJztcbmltcG9ydCBDb2xvbWJpYSBmcm9tICcuLi9pbWcvQ29sb21iaWEuanBnJztcbmltcG9ydCBCcmF6aWwgZnJvbSAnLi4vaW1nL0JyYXppbC5qcGcnO1xuaW1wb3J0IEVsU2FsdmFkb3IgZnJvbSAnLi4vaW1nL0VsLVNhbHZhZG9yLmpwZyc7XG5pbXBvcnQgR3VhdGVtYWxhIGZyb20gJy4uL2ltZy9HdWF0ZW1hbGEuanBnJztcblxuZnVuY3Rpb24gQ29mZmVlKG5hbWUsIGNvdW50cnksIHByaWNlLCBpbWFnZSkgeyBcbiAgdGhpcy5uYW1lID0gbmFtZTsgXG4gIHRoaXMuY291bnRyeSA9IGNvdW50cnk7IFxuICB0aGlzLnByaWNlID0gcHJpY2U7XG4gIHRoaXMuaW1hZ2UgPSBpbWFnZTtcbn1cblxuY29uc3QgYnVpbGRDb2ZmZWVHcmlkID0gKCkgPT4ge1xuICBjb25zdCBjb2ZmZWVHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgIGNvZmZlZXMgPSBbXG4gICAgICAgICAgbmV3IENvZmZlZSgnWUlSR0FDSEVGRkUnLCAnRXRob3BpYScsICcxLDE2MCcsIEV0aGlvcGlhKSxcbiAgICAgICAgICBuZXcgQ29mZmVlKCdQQiBLQU1XQU5HSScsICdLZW55YScsICc5ODAnLCBLZW55YSksXG4gICAgICAgICAgbmV3IENvZmZlZSgnRlJVVEEgTUVSQ0FEQU8nLCAnQnJhemlsJywgJzk1MCcsIEJyYXppbCksXG4gICAgICAgICAgbmV3IENvZmZlZSgnSFVJTEEnLCAnQ29sb21iaWEnLCAnODkwJywgQ29sb21iaWEpLFxuICAgICAgICAgIG5ldyBDb2ZmZWUoJ0RPTiBKQU1JRScsICdFbCBTYWx2YWRvcicsICcxLDAyMCcsIEVsU2FsdmFkb3IpLFxuICAgICAgICAgIG5ldyBDb2ZmZWUoJ0VMIElOSkVSVE8gQk9VUkJPTicsICdHdWF0ZW1hbGEnLCAnMSwxMDAnLCBHdWF0ZW1hbGEpXG4gICAgICAgIF07XG5cbiAgY29mZmVlR3JpZC5jbGFzc05hbWUgPSAnY29mZmVlLWdyaWQnO1xuICBcbiAgY29mZmVlcy5mb3JFYWNoKGNvZmZlZSA9PiB7XG4gICAgY29uc3QgZ3JpZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyksXG4gICAgICAgICAgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpLFxuICAgICAgICAgIGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLFxuICAgICAgICAgIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBjb2ZmZWUubmFtZTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke2NvZmZlZS5jb3VudHJ5fSB8IMKlJHtjb2ZmZWUucHJpY2V9LzEwMGdgO1xuICAgIGltZy5zcmMgPSBjb2ZmZWUuaW1hZ2U7XG4gICAgaW1nLmFsdCA9IGBDb2ZmZWUgYmVhbnMgZnJvbSAke2NvZmZlZS5jb3VudHJ5fWA7XG5cbiAgICBncmlkSXRlbS5jbGFzc05hbWUgPSAnZ3JpZC1pdGVtJztcbiAgICBncmlkSXRlbS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgZ3JpZEl0ZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIGdyaWRJdGVtLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICBjb2ZmZWVHcmlkLmFwcGVuZENoaWxkKGdyaWRJdGVtKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvZmZlZUdyaWQ7XG59XG5cbmNvbnN0IGJ1aWxkQ29mZmVlU2VjdGlvbiA9ICgpID0+IHtcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKSxcbiAgICAgICAgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cbiAgc2VjdGlvbi5jbGFzc05hbWUgPSAnY29mZmVlLXNlY3Rpb24nO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ09VUiBST0FTVFMnO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKGJ1aWxkQ29mZmVlR3JpZCgpKTtcblxuICByZXR1cm4gc2VjdGlvbjtcbn1cblxuY29uc3QgY29mZmVlID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKSxcbiAgICAgICAgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuICBtYWluLmNsYXNzTmFtZSA9ICdiYW5uZXIgcmVwZWF0JztcbiAgbWFpbi5hcHBlbmRDaGlsZChidWlsZEhlYWRlcigpKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChidWlsZENvZmZlZVNlY3Rpb24oKSk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoYnVpbGRGb290ZXIoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvZmZlZTsiLCJpbXBvcnQgYnVpbGRIZWFkZXIgZnJvbSAnLi9oZWFkZXIuanMnO1xuaW1wb3J0IGJ1aWxkRm9vdGVyIGZyb20gJy4vZm9vdGVyLmpzJztcblxuY29uc3QgYnVpbGRDb250YWN0SW5mbyA9ICgpID0+IHtcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKSxcbiAgICAgICAgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyksXG4gICAgICAgIGJsdXJiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLFxuICAgICAgICBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSxcbiAgICAgICAgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgc2VjdGlvbi5jbGFzc05hbWUgPSAnY29udGFjdC1zZWN0aW9uJ1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ0dFVCBJTiBUT1VDSCc7XG4gIGJsdXJiLnRleHRDb250ZW50ID0gJ0hleSB0aGVyZSEgV2Ugd291bGQgbG92ZSB0byBoZWFyIGZyb20geW91LiBQbGVhc2UgZ2l2ZSB1cyBhIGNhbGwgb3Igc2VuZCB1cyBhbiBlbWFpbC4nXG4gIHBob25lLnRleHRDb250ZW50ID0gJ1Bob25lOiAwMS0yMzQ1LTY3ODknO1xuICBlbWFpbC50ZXh0Q29udGVudCA9ICdFbWFpbDogaW5mb0BtaW5kYmxvd25jb2ZmZWUuY29tJztcblxuICBzZWN0aW9uLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKGJsdXJiKTtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChwaG9uZSk7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoZW1haWwpO1xuXG4gIHJldHVybiBzZWN0aW9uO1xufVxuXG5jb25zdCBjb250YWN0ID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKSxcbiAgICAgICAgYmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgYmFubmVyLmNsYXNzTmFtZSA9ICdiYW5uZXInO1xuICBiYW5uZXIuYXBwZW5kQ2hpbGQoYnVpbGRIZWFkZXIoKSk7XG4gIGJhbm5lci5hcHBlbmRDaGlsZChidWlsZENvbnRhY3RJbmZvKCkpO1xuICBiYW5uZXIuYXBwZW5kQ2hpbGQoYnVpbGRGb290ZXIoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYmFubmVyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3Q7IiwiY29uc3QgYnVpbGRBdXRob3IgPSAoKSA9PiB7XG4gIGNvbnN0IGF1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSxcbiAgICAgICAgZ2l0aHViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBcbiAgYXV0aG9yLmlubmVySFRNTCA9ICcmY29weTsgICc7XG4gIGdpdGh1Yi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9naXRodWIuY29tL2dyZWdvbGl2ZScpO1xuICBnaXRodWIudGV4dENvbnRlbnQgPSAnZ3JlZ29saXZlJztcbiAgYXV0aG9yLmFwcGVuZENoaWxkKGdpdGh1Yik7XG5cbiAgcmV0dXJuIGF1dGhvcjtcbn1cblxuY29uc3QgYnVpbGRBdHRyaWJ1dGlvbiA9ICgpID0+IHtcbiAgY29uc3QgYXR0cmlidXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyksXG4gICAgICAgIGltZ0F1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKSxcbiAgICAgICAgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSxcbiAgICAgICAgYmVoYW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICBhdHRyaWJ1dGlvbi50ZXh0Q29udGVudCA9ICdQaG90byBieSAnO1xuICBpbWdBdXRob3Iuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vd3d3LmJlaGFuY2UubmV0L1BtX2doc3QxOTkyJyk7XG4gIGltZ0F1dGhvci50ZXh0Q29udGVudCA9ICdQZWRybyBNb3Jlbm8gQS4gRnJhbsOnYSc7XG4gIHNwYW4udGV4dENvbnRlbnQgPSAnIG9uICc7XG4gIGJlaGFuY2Uuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vd3d3LmJlaGFuY2UubmV0LycpO1xuICBiZWhhbmNlLnRleHRDb250ZW50ID0gJ0JlaGFuY2UnO1xuXG4gIGF0dHJpYnV0aW9uLmFwcGVuZENoaWxkKGltZ0F1dGhvcik7XG4gIGF0dHJpYnV0aW9uLmFwcGVuZENoaWxkKHNwYW4pO1xuICBhdHRyaWJ1dGlvbi5hcHBlbmRDaGlsZChiZWhhbmNlKTtcbiAgXG4gIHJldHVybiBhdHRyaWJ1dGlvbjtcbn1cblxuY29uc3QgYnVpbGRGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoYnVpbGRBdXRob3IoKSk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChidWlsZEF0dHJpYnV0aW9uKCkpO1xuXG4gIHJldHVybiBmb290ZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkRm9vdGVyOyIsImNvbnN0IGJ1aWxkSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKSxcbiAgICAgICAgbGlua1RleHQgPSBbXG4gICAgICAgICAgeyB0ZXh0OiAnSG9tZScsIGNsYXNzOiAnYnRuIGhvbWUtYnRuJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0NvZmZlZScsIGNsYXNzOiAnYnRuIGNvZmZlZS1idG4nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQ29udGFjdCcsIGNsYXNzOiAnYnRuIGNvbnRhY3QtYnRuJyB9XG4gICAgICAgIF07XG5cbiAgbGlua1RleHQuZm9yRWFjaChsaW5rID0+e1xuICAgIGxldCBoZWFkZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGhlYWRlckxpbmsudGV4dENvbnRlbnQgPSBsaW5rLnRleHQ7XG4gICAgaGVhZGVyTGluay5jbGFzc05hbWUgPSBsaW5rLmNsYXNzO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJMaW5rKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYnVpbGRIZWFkZXI7IiwiaW1wb3J0IGJ1aWxkSGVhZGVyIGZyb20gJy4vaGVhZGVyLmpzJztcbmltcG9ydCBidWlsZEZvb3RlciBmcm9tICcuL2Zvb3Rlci5qcyc7XG5cbmNvbnN0IGJ1aWxkSGVhZGluZyA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyksXG4gICAgICAgIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXG4gICAgICAgIGxpbmVicmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcblxuICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ01JTkQgQkxPV04nO1xuICBzcGFuLnRleHRDb250ZW50ID0gJ0NvZmZlZSBSb2FzdGVycyc7XG4gIGhlYWRpbmcuYXBwZW5kQ2hpbGQobGluZWJyZWFrKTtcbiAgaGVhZGluZy5hcHBlbmRDaGlsZChzcGFuKTtcblxuICByZXR1cm4gaGVhZGluZztcbn1cblxuY29uc3QgaG9tZSA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JyksXG4gICAgICAgIGJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGJhbm5lci5jbGFzc05hbWUgPSAnYmFubmVyJztcbiAgYmFubmVyLmFwcGVuZENoaWxkKGJ1aWxkSGVhZGVyKCkpO1xuICBiYW5uZXIuYXBwZW5kQ2hpbGQoYnVpbGRIZWFkaW5nKCkpO1xuICBiYW5uZXIuYXBwZW5kQ2hpbGQoYnVpbGRGb290ZXIoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYmFubmVyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4uL2Nzcy9zdHlsZS5jc3MnO1xuaW1wb3J0IGhvbWUgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBjb2ZmZWUgZnJvbSAnLi9jb2ZmZWUuanMnO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJztcblxuKGZ1bmN0aW9uKCkge1xuICBob21lKCk7XG5cbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLWJ0bicpLFxuICAgICAgICBjb2ZmZWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29mZmVlLWJ0bicpLFxuICAgICAgICBjb250YWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QtYnRuJyksXG4gICAgICAgIGFjdGl2ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUtYnRuJyk7XG5cblxuICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICByZXNldFBhZ2UoKTtcbiAgICBob21lKCk7XG4gICAgYXNzaWduQWN0aXZlVGFiKGUpO1xuICB9KVxuXG4gIGNvZmZlZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgcmVzZXRQYWdlKCk7XG4gICAgY29mZmVlKCk7XG4gICAgYXNzaWduQWN0aXZlVGFiKGUpO1xuICB9KVxuXG4gIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHJlc2V0UGFnZSgpO1xuICAgIGNvbnRhY3QoKTtcbiAgICBhc3NpZ25BY3RpdmVUYWIoZSk7XG4gIH0pXG5cbiAgZnVuY3Rpb24gcmVzZXRQYWdlKCkge1xuICAgIGNvbnN0IGJhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYW5uZXInKSxcbiAgICAgICAgICBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bicpO1xuICAgIFxuICAgIGJhbm5lci5yZW1vdmUoKTtcbiAgICBcbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBcIlwiO1xuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gYXNzaWduQWN0aXZlVGFiKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWJ0bicpO1xuICB9XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9