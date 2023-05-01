/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".main-table{\\r\\n    width: 700px;\\r\\n    border-collapse: collapse;\\r\\n    border: 3px solid black;\\r\\n}\\r\\n.main-table__caption{\\r\\n    font-size: 36px;\\r\\n    font-weight: bold;\\r\\n}\\r\\n.main-table__td{\\r\\n    width: 50px;\\r\\n}\\r\\n.main-table__td-name{\\r\\n    width: 100px;\\r\\n}\\r\\n.main-form__input-mark{\\r\\n    width: 100%;\\r\\n    box-sizing: border-box;\\r\\n    text-align: center;\\r\\n}\\r\\n.main-table__submit, .main-table__input {\\r\\n    text-align: center;\\r\\n    width: 240px;\\r\\n}\\r\\n.main-form{\\r\\n    margin-top: 5px;\\r\\n}\\r\\n.editBtn, .deleteBtn{\\r\\n    width: 120px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://lesson24/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://lesson24/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://lesson24/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://lesson24/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://lesson24/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://lesson24/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://lesson24/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://lesson24/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://lesson24/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://lesson24/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ontroller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Сontroller */ \"./src/Сontroller.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n;\r\n\r\n\r\nconst root = document.querySelector('#root')\r\n\r\nnew _ontroller__WEBPACK_IMPORTED_MODULE_0__.Controller(root)\n\n//# sourceURL=webpack://lesson24/./src/index.js?");

/***/ }),

/***/ "./src/model/MarksAPI.js":
/*!*******************************!*\
  !*** ./src/model/MarksAPI.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MarksAPI\": () => (/* binding */ MarksAPI)\n/* harmony export */ });\nclass MarksAPI{\r\n    static API = 'https://6391adecac688bbe4c4f165a.mockapi.io/api/students/'\r\n\r\n    static getList(){\r\n        return MarksAPI.request('GET', '')\r\n    }\r\n\r\n    static create(student) {\r\n        return MarksAPI.request('POST', '', student)\r\n    }\r\n\r\n    static update (id, changes) {\r\n        return MarksAPI.request('PUT', id, changes)\r\n    }\r\n    \r\n    static delete(id) {\r\n        return MarksAPI.request('DELETE', id)\r\n    }\r\n\r\n    static request(method, url, body){\r\n        return fetch(MarksAPI.API + url, {\r\n            method: method,\r\n            body: body ? JSON.stringify(body) : undefined,\r\n            headers: {\r\n              'Content-type': 'application/json',\r\n            }\r\n        })\r\n        .then((response) => {\r\n            if (response.ok) return response.json()\r\n            switch (method) {\r\n                case 'POST':\r\n                    throw new Error(\"Can't create student on server!\")\r\n                case 'PUT':\r\n                    throw new Error(\"Can't update marks on server!\")\r\n                case 'DELETE':\r\n                    throw new Error(\"Can't delete student from server!\")\r\n                case 'GET':\r\n                    throw new Error(\"Can't load data from server!\")\r\n            }\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack://lesson24/./src/model/MarksAPI.js?");

/***/ }),

/***/ "./src/model/StudentList.js":
/*!**********************************!*\
  !*** ./src/model/StudentList.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StudentList\": () => (/* binding */ StudentList)\n/* harmony export */ });\n/* harmony import */ var _MarksAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MarksAPI */ \"./src/model/MarksAPI.js\");\n\r\n\r\nclass StudentList{\r\n    #studentList = []\r\n\r\n    fetchList() {\r\n        return _MarksAPI__WEBPACK_IMPORTED_MODULE_0__.MarksAPI.getList()\r\n        .then((data) => {\r\n            this.#studentList = data\r\n        })\r\n    }\r\n\r\n    getStudentList(){\r\n        return this.#studentList\r\n    }\r\n\r\n    createListItem(student) {\r\n        return _MarksAPI__WEBPACK_IMPORTED_MODULE_0__.MarksAPI.create(student)\r\n        .then((student) => {\r\n            this.addStudent(student)\r\n            return student\r\n        })\r\n    }\r\n\r\n    deleteListItem(id) {\r\n        return _MarksAPI__WEBPACK_IMPORTED_MODULE_0__.MarksAPI[\"delete\"](id)\r\n        .then(() => {\r\n            this.deleteStudent(id)\r\n        })\r\n    }\r\n\r\n    updateListItem(id, newStudent) {\r\n        return _MarksAPI__WEBPACK_IMPORTED_MODULE_0__.MarksAPI.update(id, newStudent)\r\n        .then((newStudent) => {\r\n            this.editStudent(id, newStudent)\r\n            return newStudent\r\n        })\r\n    }\r\n\r\n    addStudent(student) {\r\n        this.#studentList.push(student)\r\n    }\r\n\r\n    deleteStudent(id) {\r\n        const idInList = this.#studentList.indexOf(this.findListItemByID(id))\r\n\r\n        this.#studentList.splice(idInList, 1)\r\n    }\r\n\r\n    createEditStudent(id, idInput, newMark){\r\n        const newStudent = Object.assign(this.findListItemByID(id))\r\n\r\n        newStudent.marks.splice(idInput-1, 1, Number(newMark))\r\n        return newStudent\r\n    }\r\n\r\n    editStudent(id, newStudent) {\r\n        const number = this.#studentList.indexOf(this.findListItemByID(id))\r\n        \r\n        this.#studentList.splice(number, 1, newStudent)\r\n\r\n    }\r\n\r\n    findListItemByID(id) {\r\n        return this.#studentList.find(student => student.id === id)\r\n    }\r\n}\n\n//# sourceURL=webpack://lesson24/./src/model/StudentList.js?");

/***/ }),

/***/ "./src/view/FormStudentView.js":
/*!*************************************!*\
  !*** ./src/view/FormStudentView.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FormStudent\": () => (/* binding */ FormStudent)\n/* harmony export */ });\nclass FormStudent{\r\n    static FORM_ID = '#form'\r\n\r\n    constructor(root, options){\r\n        this.createForm(root)\r\n        this.form = document.querySelector(FormStudent.FORM_ID)\r\n        this.options = options\r\n        this.form.addEventListener('submit', this.onFormSubmit.bind(this))\r\n    }\r\n\r\n    createForm(root) {        \r\n        root.insertAdjacentHTML('beforeend', `\r\n            <form id=\"form\" class=\"main-form\" action=\"\" method=\"post\">\r\n                <input id=\"inputName\" class=\"main-form__input-name\" type=\"text\" placeholder=\"Enter name\"/>\r\n                <button class=\"main-form__submit\" id=\"submitButton\">Save</button>\r\n            </form>\r\n        `)\r\n    }\r\n\r\n    onFormSubmit(e){\r\n        e.preventDefault()  \r\n          \r\n        const studentName = this.getData()\r\n        console.log(studentName)\r\n        this.clearForm()\r\n    \r\n        if(!this.isValidName(studentName)){\r\n            Controller.showError(new Error('Введенные данные не валидны!'))\r\n            return\r\n        }\r\n\r\n        this.options.onSubmit(studentName)    \r\n    }\r\n\r\n    getData(){\r\n        return {\r\n            id: this.form.id.value,\r\n            name: this.form.inputName.value\r\n        }\r\n    }\r\n\r\n    findForm(){\r\n        return document.querySelector(FormStudent.FORM_ID)\r\n    }\r\n\r\n    clearForm(){\r\n        this.form.reset()\r\n    }\r\n\r\n    isValidName(value){\r\n        return this.isNotEmpty(value.name) && !this.isNumber(value.name)\r\n    }\r\n\r\n    isNotEmpty(value){\r\n        return value.trim()\r\n    }\r\n\r\n    isNumber(value){\r\n        return !isNaN(value) && this.isNotEmpty(value)\r\n    }\r\n}\n\n//# sourceURL=webpack://lesson24/./src/view/FormStudentView.js?");

/***/ }),

/***/ "./src/view/TableMarksView.js":
/*!************************************!*\
  !*** ./src/view/TableMarksView.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TableMarks\": () => (/* binding */ TableMarks)\n/* harmony export */ });\nclass TableMarks{\r\n    static ID_TABLE = '#table-marks'\r\n    static NUMBER_OF_MARKS = 10\r\n    static CLASS_STUDENT_ROW = '.main-table__tr'\r\n    static CLASS_DELETE_BTN = 'deleteBtn'\r\n    static CLASS_INPUT = 'main-form__input-mark'\r\n\r\n    constructor(root, options){\r\n        this.createTable(root)\r\n        this.table = this.findTable()\r\n        this.options = options\r\n        this.table.addEventListener('click', this.onDltButtonClick.bind(this))\r\n        this.table.addEventListener('focusout', this.onInputClick.bind(this))\r\n        // this.table.addEventListener('click', this.onTableClick.bind(this))\r\n    }\r\n\r\n    // onTableClick(e){\r\n    //     const target = e.target\r\n    //     const studentRow = this.findStudentRow(target)\r\n    //     const id = studentRow.dataset.id\r\n\r\n    //     if(this.isDeleteButton(target)) {\r\n    //         console.log('Delete pressed')\r\n    //         this.options.onDelete(id, studentRow)\r\n    //     }\r\n    //     else if(this.isInput(target)){\r\n    //         console.log('Input Focused')\r\n    //         console.log(target)\r\n    //         target.onfocusout = () => {\r\n    //             console.log('onfocusout')\r\n    //             const idInput = target.dataset.id\r\n    //             const newMark = target.value\r\n\r\n    //             this.options.onEdit(id, idInput, newMark)\r\n    //         }\r\n    //     }\r\n    // }\r\n\r\n    onDltButtonClick(e){\r\n        console.log('onDltButtonClick')\r\n        const target = e.target\r\n        const studentRow = this.findStudentRow(target)\r\n        const id = studentRow.dataset.id\r\n\r\n        if(this.isDeleteButton(target)) {\r\n            console.log('Delete pressed')\r\n            this.options.onDelete(id, studentRow)\r\n        }\r\n    }\r\n\r\n    onInputClick(e){\r\n        console.log('onInputClick')\r\n        const target = e.target\r\n        const id = this.findStudentRow(target).dataset.id\r\n\r\n        if(this.isInput(target)){\r\n            console.log('Input Focused')\r\n            const idInput = target.dataset.id\r\n            const newMark = target.value\r\n\r\n            this.options.onEdit(id, idInput, newMark)\r\n        }\r\n    }\r\n\r\n    createTable(root) {\r\n        root.insertAdjacentHTML('afterbegin', `\r\n            <table id='table-marks' class=\"main-table\">\r\n                <tr>\r\n                    <th class=\"main-table__th\">Name</th>\r\n                    <th class=\"main-table__th\" colspan=10>Marks</th>\r\n                    <th class=\"main-table__th\">Actions</th>\r\n                </tr>            \r\n            </table>\r\n        `)\r\n    }\r\n\r\n    findTable(){\r\n        return document.querySelector(TableMarks.ID_TABLE)\r\n    }\r\n\r\n    renderList(list){\r\n        const html = list.map(this.createNewTableRow).join('')\r\n\r\n        this.table.insertAdjacentHTML('beforeend', html)\r\n    }\r\n\r\n    renderListItem(student){\r\n        const html = this.createNewTableRow(student)\r\n\r\n        this.table.insertAdjacentHTML('beforeend', html)\r\n    }\r\n\r\n    createNewTableRow(data){\r\n        let html = `\r\n        <tr class='main-table__tr' data-id=${data.id}>\r\n            <td class=\"main-table__td main-table__td-name\">\r\n                <span>${data.name}</span>\r\n            </td>\r\n        `\r\n\r\n        for(let i = 0; i < data.marks.length; i++){\r\n            html += `<td class=\"main-table__td\">\r\n                     <input id=\"inputMark\" class=\"main-form__input-mark\" type=\"text\" data-id=\"${[i+1]}\" value=\"${data.marks[i]}\"/>\r\n                 </td>`\r\n        }  \r\n\r\n        html += `\r\n            <td>\r\n               <button type=\"button\" class=\"deleteBtn\">Delete</button>\r\n            </td></tr>`\r\n        return html    \r\n    }\r\n\r\n    isDeleteButton(target){\r\n        return target.classList.contains(TableMarks.CLASS_DELETE_BTN)\r\n    }\r\n\r\n    isInput(target){\r\n        return target.classList.contains(TableMarks.CLASS_INPUT)\r\n    }\r\n\r\n    findIdInput(target){\r\n        return target.dataset.id\r\n    }\r\n\r\n    findStudentRow(element){\r\n        return element.closest(TableMarks.CLASS_STUDENT_ROW)\r\n    }\r\n\r\n    deleteRow(row){\r\n        row.remove()\r\n    }\r\n}\n\n//# sourceURL=webpack://lesson24/./src/view/TableMarksView.js?");

/***/ }),

/***/ "./src/Сontroller.js":
/*!***************************!*\
  !*** ./src/Сontroller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Controller\": () => (/* binding */ Controller)\n/* harmony export */ });\n/* harmony import */ var _model_StudentList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/StudentList */ \"./src/model/StudentList.js\");\n/* harmony import */ var _view_FormStudentView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/FormStudentView */ \"./src/view/FormStudentView.js\");\n/* harmony import */ var _view_TableMarksView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/TableMarksView */ \"./src/view/TableMarksView.js\");\n\r\n\r\n\r\n\r\nclass Controller{\r\n    static root = document.querySelector('#root')\r\n\r\n    constructor(){\r\n        this.studentList = new _model_StudentList__WEBPACK_IMPORTED_MODULE_0__.StudentList()\r\n        this.tableMarks = new _view_TableMarksView__WEBPACK_IMPORTED_MODULE_2__.TableMarks(root, {\r\n            onDelete: this.deleteContact.bind(this),\r\n            onEdit: this.updateMark.bind(this)\r\n        })\r\n        this.formStudent = new _view_FormStudentView__WEBPACK_IMPORTED_MODULE_1__.FormStudent(root, { onSubmit: this.createStudent.bind(this)})\r\n        this.studentList.fetchList()\r\n            .then(() => {\r\n                this.tableMarks.renderList(this.studentList.getStudentList())\r\n                console.log(this.studentList.getStudentList())\r\n            })\r\n    }\r\n\r\n    createStudent(student){\r\n        this.studentList.createListItem(student)\r\n            .then((student) => {\r\n                this.tableMarks.renderListItem(student)\r\n                console.log(this.studentList.getStudentList())\r\n                console.log('Удача')\r\n            })\r\n            .catch((error) => {\r\n                Controller.showError(error)\r\n            })\r\n    }\r\n\r\n    deleteContact(id, studentRow){\r\n        console.log(id)\r\n        this.studentList.deleteListItem(id)\r\n            .then(() => {\r\n                this.tableMarks.deleteRow(studentRow)\r\n                console.log(this.studentList.getStudentList())\r\n            })\r\n            .catch((error) => {\r\n                Controller.showError(error)\r\n            })\r\n    }\r\n\r\n    updateMark(idStudent, idInput, newMark){\r\n        // console.log('Зашли')\r\n        // console.log(idInput)\r\n        // console.log(newMark)\r\n        // console.log(idStudent)\r\n        const newStudent = this.studentList.createEditStudent(idStudent, idInput, newMark)\r\n\r\n        this.studentList.updateListItem(idStudent, newStudent)\r\n            .then(() => {\r\n                console.log(this.studentList.getStudentList())\r\n            })\r\n            .catch((error) => {\r\n                Controller.showError(error)\r\n            })\r\n    }\r\n\r\n    static showError(error){\r\n        alert(error.message)\r\n    }\r\n}\n\n//# sourceURL=webpack://lesson24/./src/%D0%A1ontroller.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;