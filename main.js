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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3JCMEI7QUFDRztBQUNJO0FBQ0U7OztBQUduQyxFQUFFLG9EQUFJOztBQUVOO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsSUFBSSxvREFBSTtBQUNSO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBSSxzREFBTTtBQUNWO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBSSx1REFBTztBQUNYO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9zY3JpcHQvY29mZmVlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvc2NyaXB0L2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9zY3JpcHQvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvc2NyaXB0L2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL3NjcmlwdC9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9zY3JpcHQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1BhbmljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1JvYm90b1NlcmlmLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltZy9taW5kLWJsb3duLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogSE9NRSBQQUdFICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1BhbmljJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvU2VyaWYnO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG9TZXJpZic7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90b1NlcmlmJztcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSA+ICoge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmhlYWRlciB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNXZ3O1xcbn1cXG5cXG5oZWFkZXIgYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMS41cmVtIDEuNXJlbTtcXG4gIHBhZGRpbmc6IDAgY2xhbXAoMXJlbSwgMi41dncsIDRyZW0pO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmhlYWRlciBhOmhvdmVyLCBoZWFkZXIgYS5hY3RpdmUtYnRuIHtcXG4gIGNvbG9yOiAjRUZEQTJBO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcXG59XFxuXFxuLmJhbm5lciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIDUwJSAxMDAlIG5vLXJlcGVhdDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTE1JTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogYXV0byAxZnIgYXV0byAvIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1mYW1pbHk6ICdQYW5pYyc7XFxuICBmb250LXNpemU6IDZyZW07XFxuICBsaW5lLWhlaWdodDogNHJlbTtcXG4gIHRleHQtc2hhZG93OiAwIDAgMnJlbSBibGFjaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaDEgc3BhbiB7XFxuICBmb250LWZhbWlseTogJ1JvYm90b1NlcmlmJztcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCAwLjRyZW0gYmxhY2s7XFxufVxcblxcbmZvb3RlciBhOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5mb290ZXIgcDpmaXJzdC1jaGlsZCB7XFxuICBwYWRkaW5nLWxlZnQ6IDN2dztcXG59XFxuXFxuZm9vdGVyIHA6bGFzdC1jaGlsZCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAzdnc7XFxufVxcblxcbi8qIENPRkZFRSBQQUdFICovXFxuXFxubWFpbi5yZXBlYXQge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuc2VjdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMyLCAzNCwgMTEzLCAwLjkyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBtYXJnaW46IDJyZW0gM3Z3O1xcbiAgcGFkZGluZzogM3JlbSA0dnc7XFxufVxcblxcbnNlY3Rpb24gaDEge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG59XFxuXFxuLmNvZmZlZS1ncmlkIHtcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgZ2FwOiAxLjVyZW07XFxufVxcblxcbmEuZ3JpZC1pdGVtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDQjY4N0Q7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5hLmdyaWQtaXRlbSBoMiB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luOiAwLjVlbSAwIDAuM3JlbSAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5hLmdyaWQtaXRlbSBwIHtcXG4gIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIG1hcmdpbjogMCAwIDAuNzVlbSAwO1xcbn1cXG5cXG5hLmdyaWQtaXRlbSBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKiBDT05UQUNUIFBBR0UgKi9cXG5cXG5zZWN0aW9uLmNvbnRhY3Qtc2VjdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuc2VjdGlvbi5jb250YWN0LXNlY3Rpb24gaDEge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcXG59XFxuXFxuc2VjdGlvbi5jb250YWN0LXNlY3Rpb24gcCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcbn1cXG5cXG4vKiBNRURJQSBRVUVSSUVTICovXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XFxuICBzZWN0aW9uLmNvbnRhY3Qtc2VjdGlvbiB7XFxuICAgIG1hcmdpbjogMnJlbSAzdnc7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICBoZWFkZXIge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICB9XFxuXFxuICBoMSB7XFxuICAgIGZvbnQtc2l6ZTogNS41cmVtO1xcbiAgICBsaW5lLWhlaWdodDogNS41cmVtO1xcbiAgfVxcblxcbiAgaDEgc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgfVxcblxcbiAgc2VjdGlvbiB7XFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgfVxcblxcbiAgc2VjdGlvbiBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMy4yNXJlbTtcXG4gIH1cXG5cXG4gIC5jb2ZmZWUtZ3JpZCB7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgfVxcblxcbiAgc2VjdGlvbi5jb250YWN0LXNlY3Rpb24gaDEge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgfVxcblxcbiAgc2VjdGlvbi5jb250YWN0LXNlY3Rpb24gcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIH1cXG4gIFxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgc2VjdGlvbiBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgfVxcblxcbiAgaDEuY29udGFjdC1oZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgfVxcblxcbiAgc2VjdGlvbi5jb250YWN0LXNlY3Rpb24gaDEge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gIH1cXG5cXG4gIHNlY3Rpb24uY29udGFjdC1zZWN0aW9uIHAge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGNBQWM7O0FBRWQ7RUFDRSxvQkFBb0I7RUFDcEIsK0RBQWlEO0VBQ2pELGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsK0RBQXVEO0VBQ3ZELGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQiwrREFBdUQ7RUFDdkQsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsUUFBUTtBQUNWOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdDQUFnQztFQUNoQyxtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHNFQUEyRDtFQUMzRCxZQUFZO0VBQ1osYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsZ0JBQWdCOztBQUVoQjtFQUNFLDZEQUFrRDtFQUNsRCwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiwyREFBMkQ7RUFDM0QsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUEsa0JBQWtCOztBQUVsQjtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7QUFFRjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBIT01FIFBBR0UgKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUGFuaWMnO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL1BhbmljLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG9TZXJpZic7XFxuICBzcmM6IHVybCgnLi4vZm9udHMvUm9ib3RvU2VyaWYudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90b1NlcmlmJztcXG4gIHNyYzogdXJsKCcuLi9mb250cy9Sb2JvdG9TZXJpZi50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvU2VyaWYnO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5ID4gKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1dnc7XFxufVxcblxcbmhlYWRlciBhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxLjVyZW0gMS41cmVtO1xcbiAgcGFkZGluZzogMCBjbGFtcCgxcmVtLCAyLjV2dywgNHJlbSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcXG59XFxuXFxuaGVhZGVyIGE6aG92ZXIsIGhlYWRlciBhLmFjdGl2ZS1idG4ge1xcbiAgY29sb3I6ICNFRkRBMkE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xcbn1cXG5cXG4uYmFubmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vaW1nL21pbmQtYmxvd24uanBnJykgNTAlIDEwMCUgbm8tcmVwZWF0O1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMTUlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiBhdXRvIDFmciBhdXRvIC8gMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LWZhbWlseTogJ1BhbmljJztcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiA0cmVtO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCAycmVtIGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oMSBzcGFuIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvU2VyaWYnO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmZvb3RlciB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB0ZXh0LXNoYWRvdzogMCAwIDAuNHJlbSBibGFjaztcXG59XFxuXFxuZm9vdGVyIGE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbmZvb3RlciBwOmZpcnN0LWNoaWxkIHtcXG4gIHBhZGRpbmctbGVmdDogM3Z3O1xcbn1cXG5cXG5mb290ZXIgcDpsYXN0LWNoaWxkIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDN2dztcXG59XFxuXFxuLyogQ09GRkVFIFBBR0UgKi9cXG5cXG5tYWluLnJlcGVhdCB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltZy9taW5kLWJsb3duLmpwZycpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzIsIDM0LCAxMTMsIDAuOTIpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIG1hcmdpbjogMnJlbSAzdnc7XFxuICBwYWRkaW5nOiAzcmVtIDR2dztcXG59XFxuXFxuc2VjdGlvbiBoMSB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbn1cXG5cXG4uY29mZmVlLWdyaWQge1xcbiAgcGFkZGluZy10b3A6IDJyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICBnYXA6IDEuNXJlbTtcXG59XFxuXFxuYS5ncmlkLWl0ZW0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NCNjg3RDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmEuZ3JpZC1pdGVtIGgyIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW46IDAuNWVtIDAgMC4zcmVtIDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmEuZ3JpZC1pdGVtIHAge1xcbiAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgbWFyZ2luOiAwIDAgMC43NWVtIDA7XFxufVxcblxcbmEuZ3JpZC1pdGVtIGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qIENPTlRBQ1QgUEFHRSAqL1xcblxcbnNlY3Rpb24uY29udGFjdC1zZWN0aW9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG5zZWN0aW9uLmNvbnRhY3Qtc2VjdGlvbiBoMSB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG5zZWN0aW9uLmNvbnRhY3Qtc2VjdGlvbiBwIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XFxufVxcblxcbi8qIE1FRElBIFFVRVJJRVMgKi9cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcXG4gIHNlY3Rpb24uY29udGFjdC1zZWN0aW9uIHtcXG4gICAgbWFyZ2luOiAycmVtIDN2dztcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIGhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIH1cXG5cXG4gIGgxIHtcXG4gICAgZm9udC1zaXplOiA1LjVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiA1LjVyZW07XFxuICB9XFxuXFxuICBoMSBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcblxcbiAgZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICB9XFxuXFxuICBzZWN0aW9uIHtcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxuICB9XFxuXFxuICBzZWN0aW9uIGgxIHtcXG4gICAgZm9udC1zaXplOiAzLjI1cmVtO1xcbiAgfVxcblxcbiAgLmNvZmZlZS1ncmlkIHtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxuICB9XFxuXFxuICBzZWN0aW9uLmNvbnRhY3Qtc2VjdGlvbiBoMSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDA7XFxuICB9XFxuXFxuICBzZWN0aW9uLmNvbnRhY3Qtc2VjdGlvbiBwIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgfVxcbiAgXFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICBzZWN0aW9uIGgxIHtcXG4gICAgZm9udC1zaXplOiAyLjhyZW07XFxuICB9XFxuXFxuICBoMS5jb250YWN0LWhlYWRpbmcge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxuXFxuICBzZWN0aW9uLmNvbnRhY3Qtc2VjdGlvbiBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgfVxcblxcbiAgc2VjdGlvbi5jb250YWN0LXNlY3Rpb24gcCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBidWlsZEhlYWRlciBmcm9tICcuL2hlYWRlci5qcyc7XG5pbXBvcnQgYnVpbGRGb290ZXIgZnJvbSAnLi9mb290ZXIuanMnO1xuXG5pbXBvcnQgRXRoaW9waWEgZnJvbSAnLi4vaW1nL0V0aGlvcGlhLmpwZyc7XG5pbXBvcnQgS2VueWEgZnJvbSAnLi4vaW1nL0tlbnlhLmpwZyc7XG5pbXBvcnQgQ29sb21iaWEgZnJvbSAnLi4vaW1nL0NvbG9tYmlhLmpwZyc7XG5pbXBvcnQgQnJhemlsIGZyb20gJy4uL2ltZy9CcmF6aWwuanBnJztcbmltcG9ydCBFbFNhbHZhZG9yIGZyb20gJy4uL2ltZy9FbC1TYWx2YWRvci5qcGcnO1xuaW1wb3J0IEd1YXRlbWFsYSBmcm9tICcuLi9pbWcvR3VhdGVtYWxhLmpwZyc7XG5cbmZ1bmN0aW9uIENvZmZlZShuYW1lLCBjb3VudHJ5LCBwcmljZSwgaW1hZ2UpIHsgXG4gIHRoaXMubmFtZSA9IG5hbWU7IFxuICB0aGlzLmNvdW50cnkgPSBjb3VudHJ5OyBcbiAgdGhpcy5wcmljZSA9IHByaWNlO1xuICB0aGlzLmltYWdlID0gaW1hZ2U7XG59XG5cbmNvbnN0IGJ1aWxkQ29mZmVlR3JpZCA9ICgpID0+IHtcbiAgY29uc3QgY29mZmVlR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICBjb2ZmZWVzID0gW1xuICAgICAgICAgIG5ldyBDb2ZmZWUoJ1lJUkdBQ0hFRkZFJywgJ0V0aG9waWEnLCAnMSwxNjAnLCBFdGhpb3BpYSksXG4gICAgICAgICAgbmV3IENvZmZlZSgnUEIgS0FNV0FOR0knLCAnS2VueWEnLCAnOTgwJywgS2VueWEpLFxuICAgICAgICAgIG5ldyBDb2ZmZWUoJ0ZSVVRBIE1FUkNBREFPJywgJ0JyYXppbCcsICc5NTAnLCBCcmF6aWwpLFxuICAgICAgICAgIG5ldyBDb2ZmZWUoJ0hVSUxBJywgJ0NvbG9tYmlhJywgJzg5MCcsIENvbG9tYmlhKSxcbiAgICAgICAgICBuZXcgQ29mZmVlKCdET04gSkFNSUUnLCAnRWwgU2FsdmFkb3InLCAnMSwwMjAnLCBFbFNhbHZhZG9yKSxcbiAgICAgICAgICBuZXcgQ29mZmVlKCdFTCBJTkpFUlRPIEJPVVJCT04nLCAnR3VhdGVtYWxhJywgJzEsMTAwJywgR3VhdGVtYWxhKVxuICAgICAgICBdO1xuXG4gIGNvZmZlZUdyaWQuY2xhc3NOYW1lID0gJ2NvZmZlZS1ncmlkJztcbiAgXG4gIGNvZmZlZXMuZm9yRWFjaChjb2ZmZWUgPT4ge1xuICAgIGNvbnN0IGdyaWRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpLFxuICAgICAgICAgIHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKSxcbiAgICAgICAgICBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSxcbiAgICAgICAgICBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gY29mZmVlLm5hbWU7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHtjb2ZmZWUuY291bnRyeX0gfCDCpSR7Y29mZmVlLnByaWNlfS8xMDBnYDtcbiAgICBpbWcuc3JjID0gY29mZmVlLmltYWdlO1xuICAgIGltZy5hbHQgPSBgQ29mZmVlIGJlYW5zIGZyb20gJHtjb2ZmZWUuY291bnRyeX1gO1xuXG4gICAgZ3JpZEl0ZW0uY2xhc3NOYW1lID0gJ2dyaWQtaXRlbSc7XG4gICAgZ3JpZEl0ZW0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGdyaWRJdGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBncmlkSXRlbS5hcHBlbmRDaGlsZChpbWcpO1xuXG4gICAgY29mZmVlR3JpZC5hcHBlbmRDaGlsZChncmlkSXRlbSk7XG4gIH0pO1xuXG4gIHJldHVybiBjb2ZmZWVHcmlkO1xufVxuXG5jb25zdCBidWlsZENvZmZlZVNlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyksXG4gICAgICAgIGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gIHNlY3Rpb24uY2xhc3NOYW1lID0gJ2NvZmZlZS1zZWN0aW9uJztcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdPVVIgUk9BU1RTJztcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChidWlsZENvZmZlZUdyaWQoKSk7XG5cbiAgcmV0dXJuIHNlY3Rpb247XG59XG5cbmNvbnN0IGNvZmZlZSA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JyksXG4gICAgICAgIG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cbiAgbWFpbi5jbGFzc05hbWUgPSAnYmFubmVyIHJlcGVhdCc7XG4gIG1haW4uYXBwZW5kQ2hpbGQoYnVpbGRIZWFkZXIoKSk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoYnVpbGRDb2ZmZWVTZWN0aW9uKCkpO1xuICBtYWluLmFwcGVuZENoaWxkKGJ1aWxkRm9vdGVyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb2ZmZWU7IiwiaW1wb3J0IGJ1aWxkSGVhZGVyIGZyb20gJy4vaGVhZGVyLmpzJztcbmltcG9ydCBidWlsZEZvb3RlciBmcm9tICcuL2Zvb3Rlci5qcyc7XG5cbmNvbnN0IGJ1aWxkQ29udGFjdEluZm8gPSAoKSA9PiB7XG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyksXG4gICAgICAgIGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpLFxuICAgICAgICBibHVyYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSxcbiAgICAgICAgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyksXG4gICAgICAgIGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIHNlY3Rpb24uY2xhc3NOYW1lID0gJ2NvbnRhY3Qtc2VjdGlvbidcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdHRVQgSU4gVE9VQ0gnO1xuICBibHVyYi50ZXh0Q29udGVudCA9ICdIZXkgdGhlcmUhIFdlIHdvdWxkIGxvdmUgdG8gaGVhciBmcm9tIHlvdS4gUGxlYXNlIGdpdmUgdXMgYSBjYWxsIG9yIHNlbmQgdXMgYW4gZW1haWwuJ1xuICBwaG9uZS50ZXh0Q29udGVudCA9ICdQaG9uZTogMDEtMjM0NS02Nzg5JztcbiAgZW1haWwudGV4dENvbnRlbnQgPSAnRW1haWw6IGluZm9AbWluZGJsb3duY29mZmVlLmNvbSc7XG5cbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChibHVyYik7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQocGhvbmUpO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKGVtYWlsKTtcblxuICByZXR1cm4gc2VjdGlvbjtcbn1cblxuY29uc3QgY29udGFjdCA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JyksXG4gICAgICAgIGJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGJhbm5lci5jbGFzc05hbWUgPSAnYmFubmVyJztcbiAgYmFubmVyLmFwcGVuZENoaWxkKGJ1aWxkSGVhZGVyKCkpO1xuICBiYW5uZXIuYXBwZW5kQ2hpbGQoYnVpbGRDb250YWN0SW5mbygpKTtcbiAgYmFubmVyLmFwcGVuZENoaWxkKGJ1aWxkRm9vdGVyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGJhbm5lcik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0OyIsImNvbnN0IGJ1aWxkQXV0aG9yID0gKCkgPT4ge1xuICBjb25zdCBhdXRob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyksXG4gICAgICAgIGdpdGh1YiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgXG4gIGF1dGhvci5pbm5lckhUTUwgPSAnJmNvcHk7ICAnO1xuICBnaXRodWIuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9ncmVnb2xpdmUnKTtcbiAgZ2l0aHViLnRleHRDb250ZW50ID0gJ2dyZWdvbGl2ZSc7XG4gIGF1dGhvci5hcHBlbmRDaGlsZChnaXRodWIpO1xuXG4gIHJldHVybiBhdXRob3I7XG59XG5cbmNvbnN0IGJ1aWxkQXR0cmlidXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGF0dHJpYnV0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLFxuICAgICAgICBpbWdBdXRob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyksXG4gICAgICAgIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXG4gICAgICAgIGJlaGFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgYXR0cmlidXRpb24udGV4dENvbnRlbnQgPSAnUGhvdG8gYnkgJztcbiAgaW1nQXV0aG9yLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL3d3dy5iZWhhbmNlLm5ldC9QbV9naHN0MTk5MicpO1xuICBpbWdBdXRob3IudGV4dENvbnRlbnQgPSAnUGVkcm8gTW9yZW5vIEEuIEZyYW7Dp2EnO1xuICBzcGFuLnRleHRDb250ZW50ID0gJyBvbiAnO1xuICBiZWhhbmNlLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL3d3dy5iZWhhbmNlLm5ldC8nKTtcbiAgYmVoYW5jZS50ZXh0Q29udGVudCA9ICdCZWhhbmNlJztcblxuICBhdHRyaWJ1dGlvbi5hcHBlbmRDaGlsZChpbWdBdXRob3IpO1xuICBhdHRyaWJ1dGlvbi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgYXR0cmlidXRpb24uYXBwZW5kQ2hpbGQoYmVoYW5jZSk7XG4gIFxuICByZXR1cm4gYXR0cmlidXRpb247XG59XG5cbmNvbnN0IGJ1aWxkRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGJ1aWxkQXV0aG9yKCkpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoYnVpbGRBdHRyaWJ1dGlvbigpKTtcblxuICByZXR1cm4gZm9vdGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBidWlsZEZvb3RlcjsiLCJjb25zdCBidWlsZEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyksXG4gICAgICAgIGxpbmtUZXh0ID0gW1xuICAgICAgICAgIHsgdGV4dDogJ0hvbWUnLCBjbGFzczogJ2J0biBob21lLWJ0bicgfSxcbiAgICAgICAgICB7IHRleHQ6ICdDb2ZmZWUnLCBjbGFzczogJ2J0biBjb2ZmZWUtYnRuJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0NvbnRhY3QnLCBjbGFzczogJ2J0biBjb250YWN0LWJ0bicgfVxuICAgICAgICBdO1xuXG4gIGxpbmtUZXh0LmZvckVhY2gobGluayA9PntcbiAgICBsZXQgaGVhZGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBoZWFkZXJMaW5rLmlubmVySFRNTCA9IGxpbmsudGV4dDtcbiAgICBoZWFkZXJMaW5rLmNsYXNzTmFtZSA9IGxpbmsuY2xhc3M7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckxpbmspO1xuICB9KTtcblxuICByZXR1cm4gaGVhZGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBidWlsZEhlYWRlcjsiLCJpbXBvcnQgYnVpbGRIZWFkZXIgZnJvbSAnLi9oZWFkZXIuanMnO1xuaW1wb3J0IGJ1aWxkRm9vdGVyIGZyb20gJy4vZm9vdGVyLmpzJztcblxuY29uc3QgYnVpbGRIZWFkaW5nID0gKCkgPT4ge1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKSxcbiAgICAgICAgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSxcbiAgICAgICAgbGluZWJyZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpO1xuXG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnTUlORCBCTE9XTic7XG4gIHNwYW4udGV4dENvbnRlbnQgPSAnQ29mZmVlIFJvYXN0ZXJzJztcbiAgaGVhZGluZy5hcHBlbmRDaGlsZChsaW5lYnJlYWspO1xuICBoZWFkaW5nLmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gIHJldHVybiBoZWFkaW5nO1xufVxuXG5jb25zdCBob21lID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKSxcbiAgICAgICAgYmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgYmFubmVyLmNsYXNzTmFtZSA9ICdiYW5uZXInO1xuICBiYW5uZXIuYXBwZW5kQ2hpbGQoYnVpbGRIZWFkZXIoKSk7XG4gIGJhbm5lci5hcHBlbmRDaGlsZChidWlsZEhlYWRpbmcoKSk7XG4gIGJhbm5lci5hcHBlbmRDaGlsZChidWlsZEZvb3RlcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChiYW5uZXIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaG9tZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi4vY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgaG9tZSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IGNvZmZlZSBmcm9tICcuL2NvZmZlZS5qcyc7XG5pbXBvcnQgY29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5cbiAgaG9tZSgpO1xuXG4gIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZS1idG4nKSxcbiAgICAgICAgY29mZmVlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvZmZlZS1idG4nKSxcbiAgICAgICAgY29udGFjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LWJ0bicpLFxuICAgICAgICBhY3RpdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlLWJ0bicpO1xuXG5cbiAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgcmVzZXRQYWdlKCk7XG4gICAgaG9tZSgpO1xuICAgIGFzc2lnbkFjdGl2ZVRhYihlKTtcbiAgfSlcblxuICBjb2ZmZWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHJlc2V0UGFnZSgpO1xuICAgIGNvZmZlZSgpO1xuICAgIGFzc2lnbkFjdGl2ZVRhYihlKTtcbiAgfSlcblxuICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICByZXNldFBhZ2UoKTtcbiAgICBjb250YWN0KCk7XG4gICAgYXNzaWduQWN0aXZlVGFiKGUpO1xuICB9KVxuXG4gIGZ1bmN0aW9uIHJlc2V0UGFnZSgpIHtcbiAgICBjb25zdCBiYW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFubmVyJyksXG4gICAgICAgICAgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4nKTtcbiAgICBcbiAgICBiYW5uZXIucmVtb3ZlKCk7XG4gICAgXG4gICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICBidXR0b24uY2xhc3NOYW1lID0gXCJcIjtcbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFzc2lnbkFjdGl2ZVRhYihlKSB7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1idG4nKTtcbiAgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9