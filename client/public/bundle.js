/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: getPost, getPosts, likePost, createPost, updatePost, deletePost, login, logout, poll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPost\", function() { return getPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPosts\", function() { return getPosts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"likePost\", function() { return likePost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPost\", function() { return createPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updatePost\", function() { return updatePost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deletePost\", function() { return deletePost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logout\", function() { return logout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"poll\", function() { return poll; });\n/* harmony import */ var _models_PhotoPost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/PhotoPost */ \"./src/models/PhotoPost.js\");\n\n\nfunction buildRequest(url, params) {\n  const stringParams = Object.keys(params)\n    .filter(key => typeof params[key] !== 'undefined')\n    .reduce(\n      (res, key) => `${res}&${key}=${\n        params[key] instanceof Object ? JSON.stringify(params[key]) : params[key]}`,\n      '',\n    );\n  return `${url}?${stringParams.slice(1)}`;\n}\n\nfunction handleErrors(response) {\n  if (!response.ok) {\n    throw Error(response.statusText);\n  }\n  return response;\n}\n\nfunction objectToFormData(obj) {\n  const data = new FormData();\n  Object.getOwnPropertyNames(obj)\n    .forEach(key => data.append(key, obj[key]));\n  return data;\n}\n\nfunction parsePost(rawPost) {\n  const postObj = Object.assign({}, rawPost, { createdAt: new Date(rawPost.createdAt) });\n  return new _models_PhotoPost__WEBPACK_IMPORTED_MODULE_0__[\"default\"](postObj);\n}\n\nfunction getPost(id) {\n  return fetch(buildRequest(`/posts/${id}`, {\n    credentials: 'include',\n  }))\n    .then(handleErrors)\n    .then(response => response.json())\n    .then(rawPost => parsePost(rawPost));\n}\n\nfunction getPosts(skip = 0, top = 10, filterConfig = {}) {\n  return fetch(buildRequest('/posts', { top, skip }), {\n    method: 'POST',\n    body: JSON.stringify(filterConfig),\n    credentials: 'include',\n  })\n    .then(handleErrors)\n    .then(response => response.json())\n    .then(rawPosts => rawPosts.map(rawPost => parsePost(rawPost)));\n}\n\nfunction likePost(id) {\n  return fetch(`/posts/${id}/like`, {\n    method: 'PUT',\n    credentials: 'include',\n  })\n    .then(handleErrors)\n    .then(response => response.json())\n    .then(json => parsePost(json));\n}\n\nfunction createPost(post) {\n  return fetch('/posts', {\n    method: 'POST',\n    body: objectToFormData(post),\n    credentials: 'include',\n  })\n    .then(handleErrors)\n    .then(response => response.json())\n    .then(json => parsePost(json));\n}\n\nfunction updatePost(id, post) {\n  const data = objectToFormData(post);\n  return fetch(`/posts/${id}`, {\n    method: 'PUT',\n    body: data,\n    credentials: 'include',\n  })\n    .then(handleErrors)\n    .then(response => response.json())\n    .then(json => parsePost(json));\n}\n\nfunction deletePost(id) {\n  return fetch(`/posts/${id}`, {\n    method: 'DELETE',\n    credentials: 'include',\n  });\n}\n\nfunction login(email, password) {\n  return fetch('/auth', {\n    method: 'POST',\n    headers: {\n      'content-type': 'application/json',\n    },\n    body: JSON.stringify({ email, password }),\n    credentials: 'include',\n  }).then((response) => {\n    if (response.ok) {\n      return response.json();\n    }\n    return Promise.reject();\n  });\n}\n\nfunction logout() {\n  return fetch('/logout', {\n    credentials: 'include',\n  })\n    .then(handleErrors);\n}\n\nfunction poll() {\n  return fetch('/poll')\n    .then(handleErrors)\n    .then(response => response.json())\n    .then(postsRaw => postsRaw.map(rawPost => parsePost(rawPost)));\n}\n\n\n//# sourceURL=webpack:///./src/api.js?");

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Content */ \"./src/components/Content.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ \"./src/components/Footer.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./src/components/Header.js\");\n\n\n\n\nfunction App() {\n  return [Object(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), Object(_Content__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), Object(_Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()];\n}\n\n\n//# sourceURL=webpack:///./src/components/App.js?");

/***/ }),

/***/ "./src/components/Content.js":
/*!***********************************!*\
  !*** ./src/components/Content.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Content; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ \"./src/state.js\");\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../handlers */ \"./src/handlers.js\");\n/* harmony import */ var _PhotoPosts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PhotoPosts */ \"./src/components/PhotoPosts.js\");\n/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Filter */ \"./src/components/Filter.js\");\n\n\n\n\n\n\nfunction Content() {\n  const { user } = Object(_state__WEBPACK_IMPORTED_MODULE_1__[\"getState\"])();\n\n  const element = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"stringToDOMElement\"])(`\n    <div class=\"content main-content\">\n      <aside class=\"sidebar\">\n        <ul class=\"menu menu-panel\">\n          <li class=\"menu__item\">\n            <a href=\"#\" class=\"bright\">Impressions</a>\n          </li>\n          ${user ? `\n          <li class=\"menu__item bright\">\n            <a href=\"#\" class=\"bright\">My impressions</a>\n          </li>\n          <li class=\"menu__item bright\">\n            <a href=\"#\" class=\"bright\">New impression</a>\n          </li>`.trim() : ''}\n        </ul>\n      </aside>\n      <main class=\"main\" id = \"main\">\n        <button class=\"show-more-button button\">Load more...</button>\n      </main>\n    </div>\n  `.trim());\n\n  const menuItems = element.querySelector('.menu').children;\n  menuItems[0].onclick = () => Object(_handlers__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n    type: 'SHOW_POSTS',\n  });\n  if (menuItems.length > 1) {\n    menuItems[1].onclick = () => Object(_handlers__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n      type: 'FILTER_POSTS',\n      filterConfig: {\n        author: user.name,\n      },\n    });\n    menuItems[2].onclick = () => Object(_handlers__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n      type: 'CREATE_POST',\n    });\n  }\n\n  const main = element.querySelector('#main');\n  main.insertBefore(Object(_PhotoPosts__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), main.firstChild);\n  element.querySelector('.sidebar').appendChild(Object(_Filter__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n\n  element.querySelector('.show-more-button').onclick = () => {\n    Object(_handlers__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n      type: 'SHOW_MORE_POSTS',\n    });\n  };\n\n  Object(_handlers__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n    type: 'SHOW_POSTS',\n  });\n  return element;\n}\n\n\n//# sourceURL=webpack:///./src/components/Content.js?");

/***/ }),

/***/ "./src/components/EditPost.js":
/*!************************************!*\
  !*** ./src/components/EditPost.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EditPost; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handlers */ \"./src/handlers.js\");\n\n\n\nfunction makeTag(tag) {\n  const element = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"stringToDOMElement\"])(`\n    <span \n      type=\"text\" \n      class=\"post__tag post__tag--editable input\" \n      contenteditable=\"true\">\n      ${tag}\n    </span>&nbsp\n  `.trim());\n\n  element.onkeypress = (event) => {\n    if (event.code === 'Enter') {\n      event.preventDefault();\n      event.target.blur();\n    }\n  };\n\n  element.onblur = (event) => {\n    if (event.target.innerText.length === 0) {\n      event.target.parentNode.removeChild(event.target);\n    }\n  };\n  return element;\n}\n\nfunction EditPost(post = {\n  tags: [],\n  photoLink: '',\n  description: '',\n}) {\n  const element = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"stringToDOMElement\"])(`\n    <div class=\"post\">\n      <form class=\"post__edit-form\">\n        <img class=\"post__photo\" alt=\"Photo preview\" src=${post.photoLink} />\n        <div>Photo link: <input id=\"photoLink\" type=\"text\" value=\"${post.photoLink}\" class=\"input\"/></div>\n        <div><label class=\"input\" for=\"photoFile\">Load photo</label><input type=\"file\" accept=\"image/*\" id=\"photoFile\"></div>\n        <div class=\"post__tags\">\n          Tags:\n          <span id=\"tags\"></span>\n          <a class=\"post__tag post__tag--add input\">Add tag</a>\n        </div>\n        <div>\n          Description:\n          <div>\n            <textarea \n              required \n              maxlength=\"200\"\n              class=\"input post__description post__description--editable\">${post.description}</textarea>\n          </div>\n        </div>\n        <button type=\"submit\" class=\"input bright\">Save</button>\n        <button id=\"cancel\" class=\"input bright\">Cancel</button>\n    </div>\n  `.trim());\n  const tagsWrapper = element.querySelector('#tags');\n  post.tags.forEach(tag => tagsWrapper.appendChild(makeTag(tag)));\n\n  let state = {\n    usePhotoLink: true,\n    photoLink: post.photoLink,\n  };\n\n  element.querySelector('#photoLink').onblur = () => {\n    const url = element.querySelector('#photoLink').value;\n    if (url !== state.photoLink && url !== '') {\n      element.querySelector('.post__photo').src = url;\n      state = {\n        usePhotoLink: true,\n        photoLink: url,\n      };\n    }\n  };\n\n  element.querySelector('#photoFile').onchange = (event) => {\n    const file = event.target.files[0];\n    const reader = new FileReader();\n    reader.onload = () => {\n      state = {\n        usePhotoLink: false,\n        photoFile: file,\n      };\n      element.querySelector('.post__photo').src = reader.result;\n      element.querySelector('#photoLink').value = '';\n    };\n    reader.readAsDataURL(file);\n  };\n\n  element.querySelector('.post__tag--add').onclick = () => {\n    const newTag = makeTag('');\n    tagsWrapper.appendChild(newTag);\n    newTag.focus();\n  };\n\n  element.querySelector('.post__edit-form').onsubmit = (event) => {\n    event.preventDefault();\n    if (!state.photoLink && !state.photoFile) {\n      alert('Please, provide either photo link, either photo file');\n      return;\n    }\n    const tags = Array.prototype.map.call(\n      element.querySelectorAll('.post__tag--editable'),\n      node => node.innerText,\n    );\n    const description = element.querySelector('.post__description').value;\n    const postToSend = Object.assign({}, post, {\n      tags,\n      description,\n    });\n    if (state.usePhotoLink) {\n      postToSend.photoLink = state.photoLink;\n    } else {\n      delete postToSend.photoLink;\n      postToSend.photoFile = state.photoFile;\n    }\n    Object(_handlers__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n      type: 'SAVE_POST',\n      photo: state,\n      post: postToSend,\n    });\n  };\n\n  element.querySelector('#cancel').onclick = (event) => {\n    event.preventDefault();\n    Object(_handlers__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n      type: 'CANCEL_EDITING',\n    });\n  };\n\n  element.querySelector('#photoLink').onkeypress = (event) => {\n    if (event.code === 'Enter') {\n      event.preventDefault();\n    }\n  };\n\n  return element;\n}\n\n\n//# sourceURL=webpack:///./src/components/EditPost.js?");

/***/ }),

/***/ "./src/components/Editor.js":
/*!**********************************!*\
  !*** ./src/components/Editor.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Editor; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n/* harmony import */ var _EditPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditPost */ \"./src/components/EditPost.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./src/components/Header.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ \"./src/components/Footer.js\");\n\n\n\n\n\nfunction Editor(post) {\n  const content = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"stringToDOMElement\"])(`\n    <div class=\"content main-content\">\n      <main class=\"main\" id = \"main\">\n        <div class=\"posts\"></div>\n      </main>\n    </div>\n  `.trim());\n  content.querySelector('.posts').appendChild(Object(_EditPost__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(post));\n  return [Object(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), content, Object(_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()];\n}\n\n\n//# sourceURL=webpack:///./src/components/Editor.js?");

/***/ }),

/***/ "./src/components/Filter.js":
/*!**********************************!*\
  !*** ./src/components/Filter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Filter; });\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers */ \"./src/handlers.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n\n\n\nfunction Filter() {\n  const element = Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"stringToDOMElement\"])(`\n    <form class=\"search menu-panel\">\n      <span class=\"search__title bright\">Filter</span>\n      <div class=\"search__panel\">\n        <div class=\"search__option\">\n        <input type=\"text\" name=\"author\" class=\"search__input\" placeholder=\"By author\">\n      </div>\n      <div class=\"search__option\">\n        <label>From date</label>\n        <input type=\"date\" name=\"fromDate\" class=\"search__input\">\n        <label>To date</label>\n        <input type=\"date\" name=\"toDate\" class=\"search__input\">\n      </div>\n      <div class=\"search__option\">\n        <input type=\"text\" name=\"tags\" class=\"search__input\" placeholder=\"By tag\">\n      </div>\n      <button class=\"search__button button\">Filter</button>\n    </form>\n  `.trim());\n\n  element.querySelector('.search__button').onclick = (e) => {\n    e.preventDefault();\n    const formData = new FormData(element);\n    const tags = formData.get('tags').split(/[#, ]/).filter(s => s !== '');\n    const author = formData.get('author').trim();\n    const fromDate = formData.get('fromDate') === '' ? null : new Date(formData.get('fromDate'));\n    const toDate = formData.get('toDate') === '' ? null : new Date(formData.get('toDate'));\n    Object(_handlers__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      type: 'FILTER_POSTS',\n      filterConfig: {\n        fromDate,\n        toDate,\n        tags,\n        author,\n      },\n    });\n  };\n\n  return element;\n}\n\n\n//# sourceURL=webpack:///./src/components/Filter.js?");

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Footer; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n\n\nfunction Footer() {\n  return Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"stringToDOMElement\"])(`\n    <footer class=\"footer panel\">\n      <span class=\"footer__description bright\">\n        Impression by Simon Karasik,\n        <a class=\"footer__email\" href=\"mailto:senich10@mail.ru\">\n            senich10@mail.ru\n        </a>\n        ,&nbsp FAMCS, group 5\n      </span>\n      <span class=\"footer__update bright\">\n        Last update:\n         <span id=\"update-date\">19.02.18</span>\n      </span>\n    </footer>\n    `.trim());\n}\n\n\n//# sourceURL=webpack:///./src/components/Footer.js?");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ \"./src/state.js\");\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../handlers */ \"./src/handlers.js\");\n\n\n\n\nfunction Header() {\n  const user = Object(_state__WEBPACK_IMPORTED_MODULE_1__[\"getState\"])().user || {\n    name: 'Guest',\n    avatarLink: 'user_icon.png',\n  };\n  user.avatarLink = user.avatarLink || 'user_icon.png';\n\n  const element = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"stringToDOMElement\"])(`\n    <header class=\"header panel\">\n      <div class=\"header__user-wrapper header__sideblock header__user\">\n        <img class=\"header__user__avatar\" src=\"${user.avatarLink}\"> &nbsp\n        <span class=\"header__user__name\">${user.name}</span>\n      </div>\n      <h1 class=\"header__title\">IMPRESSION</h1>\n      <div class=\"header__sideblock header__logout-wrapper\">\n        <a class=\"header__logout\">\n          <i class=\"material-icons icon-button\">exit_to_app</i>\n        </a>\n      </div>\n    </header>\n  `.trim());\n\n  element.querySelector('.header__logout').onclick = () => {\n    Object(_handlers__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n      type: 'LOGOUT',\n    });\n    Object(_handlers__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n      type: 'SET_PAGE',\n      pageName: 'signIn',\n    });\n  };\n\n  return element;\n}\n\n\n//# sourceURL=webpack:///./src/components/Header.js?");

/***/ }),

/***/ "./src/components/PageNotFound.js":
/*!****************************************!*\
  !*** ./src/components/PageNotFound.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PageNotFound; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n\n\nfunction PageNotFound() {\n  return Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"stringToDOMElement\"])(`\n    Ooops! Page not found!\n  `.trim());\n}\n\n\n//# sourceURL=webpack:///./src/components/PageNotFound.js?");

/***/ }),

/***/ "./src/components/PhotoPost.js":
/*!*************************************!*\
  !*** ./src/components/PhotoPost.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PhotoPost; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handlers */ \"./src/handlers.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state */ \"./src/state.js\");\n\n\n\n/**\n * @param {PhotoPostModel} post\n * @param {Store} store\n */\n\nfunction PhotoPost({ post }) {\n  const { user } = Object(_state__WEBPACK_IMPORTED_MODULE_2__[\"getState\"])();\n  const pad = number => new String(number).padStart(2, '0');\n  const formatDate = date => `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${pad(date.getFullYear() % 100)}`;\n  const makeTag = tag => `<a class=\"post__tag\">${tag}</a>`;\n  const makeTags = tags =>\n    tags.reduce((s, tag) => `${s + makeTag(tag)} `, '');\n  const isAuthor = user && post.author === user.name;\n  const isLiked = user && post.likes.indexOf(user.name) !== -1;\n  const element = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"stringToDOMElement\"])(`\n    <div class=\"post\">\n      <header class=\"post__header\">\n       <span class=\"post__author\">${post.author}</span>\n       <span class=\"post__header__right\">\n         <span class=\"post__date\">${formatDate(post.createdAt)}</span>&nbsp\n         <span class = ${Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"addClassIf\"])(!isAuthor, 'hidden')}>\n          <i class=\"material-icons icon-button post__header__edit\">create</i>\n          <i class=\"material-icons icon-button post__header__remove\">close</i>\n         </span>\n       </span>\n      </header>\n      <img class=\"post__photo\" src=\"${post.photoLink}\">\n      <footer class=\"post__footer\">\n        <div class=\"post__like-panel\">\n          <i class=\"material-icons post__like ${Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"addClassIf\"])(isLiked, 'post__like--liked')}\">\n            ${isLiked ? 'favorite' : 'favorite_border'}\n          </i>\n         <span class=\"post__likes-count\">${post.likes.length}</span>\n       </div>\n       <div class=\"post__information\">\n         <div class=\"post__tags\">\n          ${makeTags(post.tags)}\n         </div>\n         <p class=\"post__description\">\n          ${post.description}\n         </p>\n       </div>\n      </footer>\n    </div>\n    `.trim());\n  element.querySelector('.post__header__edit').onclick = () => {\n    Object(_handlers__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n      type: 'EDIT_POST',\n      id: post.id,\n    });\n  };\n  element.querySelector('.post__header__remove').onclick = () => {\n    Object(_handlers__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n      type: 'REMOVE_POST',\n      id: post.id,\n    });\n  };\n  element.querySelector('.post__like').onclick = () => {\n    Object(_handlers__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n      type: 'LIKE_POST',\n      id: post.id,\n    });\n  };\n  element.setAttribute('data-id', post.id);\n  return element;\n}\n\n\n//# sourceURL=webpack:///./src/components/PhotoPost.js?");

/***/ }),

/***/ "./src/components/PhotoPosts.js":
/*!**************************************!*\
  !*** ./src/components/PhotoPosts.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PhotoPosts; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n/* harmony import */ var _PhotoPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhotoPost */ \"./src/components/PhotoPost.js\");\n/* harmony import */ var _PostsNotFound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostsNotFound */ \"./src/components/PostsNotFound.js\");\n\n\n\n\nlet element;\n\nfunction PhotoPosts() {\n  element = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"stringToDOMElement\"])(`\n    <div class=\"posts\" id=\"posts\">\n      <div></div>\n    </div>\n  `.trim());\n  PhotoPosts.render([]);\n  return element;\n}\n\nfunction findNode(id) {\n  const posts = element.firstChild.children;\n  const node = Array.prototype.find.call(posts, post => post.getAttribute('data-id') === id);\n  return node;\n}\n\nPhotoPosts.update = function (id, post) {\n  const node = findNode(id);\n  if (node) {\n    node.parentNode.replaceChild(Object(_PhotoPost__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ post }), node);\n  }\n};\n\nPhotoPosts.remove = function (id) {\n  const node = findNode(id);\n  if (node) {\n    node.parentNode.removeChild(node);\n  }\n};\n\nPhotoPosts.render = function (posts) {\n  Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"removeChildren\"])(element);\n  const wrapper = document.createElement('div');\n  if (posts.length === 0) {\n    wrapper.appendChild(Object(_PostsNotFound__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n  } else {\n    posts.forEach((post) => {\n      wrapper.appendChild(Object(_PhotoPost__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ post }));\n    });\n  }\n  element.appendChild(wrapper);\n};\n\n\n\n//# sourceURL=webpack:///./src/components/PhotoPosts.js?");

/***/ }),

/***/ "./src/components/PostsNotFound.js":
/*!*****************************************!*\
  !*** ./src/components/PostsNotFound.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PostsNotFound; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n\n\nfunction PostsNotFound() {\n  const element = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"stringToDOMElement\"])(`\n    <div class = \"post posts-not-found\">\n      No posts found.\n    </div>\n  `.trim());\n  return element;\n}\n\n\n//# sourceURL=webpack:///./src/components/PostsNotFound.js?");

/***/ }),

/***/ "./src/components/SignIn.js":
/*!**********************************!*\
  !*** ./src/components/SignIn.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SignIn; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ \"./src/components/Footer.js\");\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../handlers */ \"./src/handlers.js\");\n\n\n\n\nfunction SignIn() {\n  const form = `\n    <form class=\"sign-in__form\">\n      <h1 class=\"sign-in__form__header bright\">Sign in</h1>\n      <input type=\"email\" required class=\"sign-in__input input\" name=\"email\" placeholder=\"Email Address\">\n      <input type=\"password\" required class=\"sign-in__input input\" name=\"password\" placeholder=\"Password\">\n      <button type=\"submit\" class=\"button bright sign-in__button\">Sign in</button>\n      <button id=\"signAsGuest\" class=\"button bright sign-in__button\">Sign in as a guest</button>  \n    </form>\n  `.trim();\n\n  const element = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"stringToDOMElement\"])(`\n    <div class=\"sign-in\">\n      <div class=\"sign-in__content\">\n        <h1 class=\"sign-in__header bright\">Impression</h1>\n        ${form}\n      </div>\n    </div>\n  `.trim());\n  element.appendChild(Object(_Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n\n  element.querySelector('.sign-in__form').onsubmit = (event) => {\n    event.preventDefault();\n    const formData = new FormData(event.target);\n    Object(_handlers__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n      type: 'LOGIN',\n      email: formData.get('email'),\n      password: formData.get('password'),\n      onLoggedIn: () => Object(_handlers__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        type: 'SET_PAGE',\n        pageName: 'app',\n      }),\n      onError: () => {\n        alert('Wrong email or password');\n      },\n    });\n  };\n\n  element.querySelector('#signAsGuest').onclick = (event) => {\n    event.preventDefault();\n    Object(_handlers__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n      type: 'LOGIN',\n      asGuest: true,\n      onLoggedIn: () => Object(_handlers__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        type: 'SET_PAGE',\n        pageName: 'app',\n      }),\n    });\n  };\n\n  return element;\n}\n\n\n//# sourceURL=webpack:///./src/components/SignIn.js?");

/***/ }),

/***/ "./src/handlers.js":
/*!*************************!*\
  !*** ./src/handlers.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handle; });\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ \"./src/state.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _components_PhotoPosts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/PhotoPosts */ \"./src/components/PhotoPosts.js\");\n/* harmony import */ var _components_PageNotFound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/PageNotFound */ \"./src/components/PageNotFound.js\");\n/* harmony import */ var _components_SignIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/SignIn */ \"./src/components/SignIn.js\");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/App */ \"./src/components/App.js\");\n/* harmony import */ var _components_Editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Editor */ \"./src/components/Editor.js\");\n/* harmony import */ var _models_PhotoPosts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/PhotoPosts */ \"./src/models/PhotoPosts.js\");\n/* harmony import */ var _models_PhotoPost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/PhotoPost */ \"./src/models/PhotoPost.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n\n\n\n\n\n\n\n\n\n\n\nfunction clearPostsViewConfig() {\n  Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().postsInViewCnt = 0;\n  Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().filterConfig = null;\n}\n\nfunction setPage(pageName, args) {\n  Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"removeChildren\"])(document.body);\n  clearPostsViewConfig();\n  let page = null;\n  switch (pageName) {\n    case 'signIn':\n      page = Object(_components_SignIn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n      break;\n    case 'app':\n      page = Object(_components_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n      break;\n    case 'editor':\n      page = Object(_components_Editor__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(args);\n      break;\n    default:\n      page = Object(_components_PageNotFound__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  }\n  Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"render\"])(page, document.body);\n}\n\nfunction showPosts() {\n  const { posts, postsInViewCnt, filterConfig } = Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])();\n  const postsToShow = posts.getPhotoPosts(0, postsInViewCnt, filterConfig);\n  _components_PhotoPosts__WEBPACK_IMPORTED_MODULE_2__[\"default\"].render(postsToShow);\n}\n\nasync function loadMorePostsIfNeeded(wantedPostsCnt) {\n  const { filterConfig } = Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])();\n  const availablePosts = Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().posts.getPhotoPosts(0, wantedPostsCnt, filterConfig);\n  const availablePostsCnt = availablePosts.length;\n  if (availablePostsCnt < wantedPostsCnt) {\n    return _api__WEBPACK_IMPORTED_MODULE_9__[\"getPosts\"](availablePostsCnt, wantedPostsCnt - availablePostsCnt, filterConfig)\n      .then((posts) => {\n        posts.forEach(post => Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().posts.addPhotoPost(post));\n        return availablePostsCnt + posts.length;\n      });\n  }\n  return Promise.resolve(wantedPostsCnt);\n}\n\nasync function loadMorePostsIfNeededAndShow(wantedPostsCnt) {\n  const availablePostsCnt = await loadMorePostsIfNeeded(wantedPostsCnt);\n  Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().postsInViewCnt = availablePostsCnt;\n  showPosts();\n}\n\nfunction showMorePosts() {\n  loadMorePostsIfNeededAndShow(Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().postsInViewCnt + Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().postsPerPage);\n}\nasync function removePost(id) {\n  try {\n    await _api__WEBPACK_IMPORTED_MODULE_9__[\"deletePost\"](id);\n    Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().postsInViewCnt--;\n    Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().posts.removePhotoPost(id);\n    _components_PhotoPosts__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove(id);\n  } catch (e) {\n    console.log(e);\n  }\n}\n\nfunction filterPosts(filterConfig) {\n  clearPostsViewConfig();\n  Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().filterConfig = filterConfig;\n  loadMorePostsIfNeededAndShow(Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().postsPerPage);\n}\n\nasync function likePost(id) {\n  const post = await _api__WEBPACK_IMPORTED_MODULE_9__[\"likePost\"](id);\n  Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().posts.editPhotoPost(id, post);\n  _components_PhotoPosts__WEBPACK_IMPORTED_MODULE_2__[\"default\"].update(id, post);\n}\n\nfunction editPost(id) {\n  setPage('editor', Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().posts.getPhotoPost(id));\n}\n\nfunction createPost() {\n  setPage('editor');\n}\n\nasync function savePost(postToSave) {\n  if (postToSave.id) {\n    const post = await _api__WEBPACK_IMPORTED_MODULE_9__[\"updatePost\"](postToSave.id, postToSave);\n    Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().posts.editPhotoPost(post.id, post);\n  } else {\n    const postToSaveWithAuthor = new _models_PhotoPost__WEBPACK_IMPORTED_MODULE_8__[\"default\"]({\n      ...postToSave,\n      author: Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().user.name,\n    });\n    const post = await _api__WEBPACK_IMPORTED_MODULE_9__[\"createPost\"](postToSaveWithAuthor);\n    Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().posts.addPhotoPost(post);\n  }\n  setPage('app');\n}\n\nasync function logout() {\n  await _api__WEBPACK_IMPORTED_MODULE_9__[\"logout\"]();\n  localStorage.setItem('user', null);\n  Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().user = null;\n  Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().posts = _models_PhotoPosts__WEBPACK_IMPORTED_MODULE_7__[\"default\"].fromArray([]);\n  Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().postsInViewCnt = 0;\n  setPage('signIn');\n}\n\nasync function login({\n  email,\n  password,\n  onLoggedIn,\n  onError,\n  asGuest,\n}) {\n  if (asGuest) {\n    Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().user = null;\n    onLoggedIn();\n  } else {\n    try {\n      const user = await _api__WEBPACK_IMPORTED_MODULE_9__[\"login\"](email, password);\n      Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().user = user;\n      localStorage.setItem('user', JSON.stringify(user));\n      onLoggedIn();\n    } catch (err) {\n      onError();\n    }\n  }\n}\n\nfunction handle(action) {\n  switch (action.type) {\n    case 'LIKE_POST':\n      likePost(action.id);\n      break;\n    case 'REMOVE_POST':\n      removePost(action.id);\n      break;\n    case 'CREATE_POST':\n      createPost();\n      break;\n    case 'FILTER_POSTS':\n      filterPosts(action.filterConfig);\n      break;\n    case 'SHOW_POSTS': {\n      clearPostsViewConfig();\n      loadMorePostsIfNeededAndShow(Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().postsPerPage);\n      break;\n    }\n    case 'EDIT_POST':\n      editPost(action.id);\n      break;\n    case 'SAVE_POST':\n      savePost(action.post);\n      break;\n    case 'SHOW_MORE_POSTS':\n      showMorePosts();\n      break;\n    case 'CANCEL_EDITING':\n      setPage('app');\n      break;\n    case 'SET_PAGE':\n      setPage(action.pageName);\n      break;\n    case 'LOGIN':\n      login(action);\n      break;\n    case 'LOGOUT':\n      logout();\n      break;\n    default:\n      break;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/handlers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ \"./src/models/index.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ \"./src/state.js\");\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers */ \"./src/handlers.js\");\n\n\n\n\nconst initialState = {\n  posts: _models__WEBPACK_IMPORTED_MODULE_0__[\"PhotoPosts\"].fromArray([]),\n  filterConfig: null,\n  postsInViewCnt: 0,\n  user: JSON.parse(localStorage.getItem('user')) || null,\n  postsPerPage: 10,\n};\nObject(_state__WEBPACK_IMPORTED_MODULE_1__[\"setState\"])(initialState);\nObject(_handlers__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n  type: 'SET_PAGE',\n  pageName: 'app',\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/models/PhotoPost.js":
/*!*********************************!*\
  !*** ./src/models/PhotoPost.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PhotoPost; });\nfunction isString(s) {\n  return typeof s === 'string' || s instanceof String;\n}\n\nclass PhotoPost {\n/**\n  * @param {String} description\n  * @param {Date} createdAt\n  * @param {String} author\n  * @param {String} photoLink\n  * @param {[String]} tags\n  * @param {[String]} likes\n  */\n  constructor({\n    description,\n    createdAt,\n    author,\n    photoLink,\n    tags = [],\n    likes = [],\n    id,\n  }) {\n    this.id = id;\n    this.description = description;\n    this.createdAt = createdAt;\n    this.author = author;\n    this.photoLink = photoLink;\n    this.tags = tags;\n    this.likes = likes;\n  }\n\n  getLikesCnt() {\n    return this.likes.length;\n  }\n\n  /**\n  * Like this post. Calling twice with same userName will unlike\n  * @param {String} userName User who liked this post.\n  */\n  like(userName) {\n    const ind = this.likes.indexOf(userName);\n    if (ind === -1) {\n      this.likes.push(userName);\n    } else {\n      this.likes.splice(ind, 1);\n    }\n  }\n\n  /**\n  * @param {PhotoPost} post\n  */\n  static validate(post) {\n    return (\n      post instanceof PhotoPost &&\n      isString(post.id) && post.id.length > 0 &&\n      isString(post.description) && post.description.length < 200 &&\n      (post.createdAt instanceof Date) &&\n      isString(post.author) && post.author.length > 0 &&\n      isString(post.photoLink) && post.photoLink.length > 0 &&\n      post.tags instanceof Array &&\n      post.likes instanceof Array\n    );\n  }\n}\n\n\n//# sourceURL=webpack:///./src/models/PhotoPost.js?");

/***/ }),

/***/ "./src/models/PhotoPosts.js":
/*!**********************************!*\
  !*** ./src/models/PhotoPosts.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PhotoPosts; });\nclass PhotoPosts {\n  constructor() {\n    this.photoPosts = [];\n    this.isSorted = true;\n  }\n\n  static fromArray(arr) {\n    const posts = new PhotoPosts();\n    arr.forEach(post => posts.addPhotoPost(post));\n    return posts;\n  }\n\n  /**\n  * @param {number} skip\n  * @param {number} top\n  * @param {{author? : String, fromDate? : Date, toDate? : Date, tags? : [String]}} filterConfig\n  * @returns {[PhotoPost]}\n  */\n  getPhotoPosts(skip = 0, top = 10, filterConfig) {\n    if (!this.isSorted) {\n      this.photoPosts.sort((p1, p2) => p1.createdAt < p2.createdAt);\n      this.isSorted = true;\n    }\n    const result = [];\n    for (let i = skip; i < Math.min(this.photoPosts.length, skip + top); i++) {\n      let isGood = true;\n      const post = this.photoPosts[i];\n      if (filterConfig) {\n        if (filterConfig.author && post.author !== filterConfig.author) {\n          isGood = false;\n        }\n        if (filterConfig.fromDate && post.createdAt < filterConfig.fromDate) {\n          isGood = false;\n        }\n        if (filterConfig.toDate && post.createdAt > filterConfig.toDate) {\n          isGood = false;\n        }\n        if (filterConfig.tags && !filterConfig.tags.every(tag => post.tags.indexOf(tag) !== -1)) {\n          isGood = false;\n        }\n      }\n      if (isGood) {\n        result.push(post);\n      }\n    }\n    return result;\n  }\n\n  /**\n  * @param {PhotoPost} post\n  * @returns {Boolean} success / failure\n  */\n  addPhotoPost(post) {\n    this.photoPosts.push(post);\n    this.isSorted = false;\n    return post;\n  }\n\n  /**\n  * @param {String} id\n  * @returns {PhotoPost | null} Returns post with such id or null if not found.\n  */\n  getPhotoPost(id) {\n    return this.photoPosts.find(post => post.id === id) || null;\n  }\n\n  /**\n  * @returns {Boolean} success / failure\n  */\n  editPhotoPost(id, fieldsToEdit) {\n    const ind = this.photoPosts.findIndex(post => post.id === id);\n    if (ind === -1) {\n      return false;\n    }\n    Object.assign(this.photoPosts[ind], fieldsToEdit);\n    return true;\n  }\n\n  /**\n  * @param {String} id\n  * @returns {Boolean} success / failure\n  */\n  removePhotoPost(id) {\n    const ind = this.photoPosts.findIndex(post => post.id === id);\n    if (ind === -1) {\n      return false;\n    }\n    this.photoPosts.splice(ind, 1);\n    return true;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/models/PhotoPosts.js?");

/***/ }),

/***/ "./src/models/index.js":
/*!*****************************!*\
  !*** ./src/models/index.js ***!
  \*****************************/
/*! exports provided: PhotoPost, PhotoPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PhotoPost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhotoPost */ \"./src/models/PhotoPost.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PhotoPost\", function() { return _PhotoPost__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _PhotoPosts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhotoPosts */ \"./src/models/PhotoPosts.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PhotoPosts\", function() { return _PhotoPosts__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/models/index.js?");

/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/*! exports provided: getState, setState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getState\", function() { return getState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setState\", function() { return setState; });\nlet state = {\n\n};\n\nfunction getState() {\n  return state;\n}\n\nfunction setState(stateUpdate) {\n  state = Object.assign(state, stateUpdate);\n}\n\n\n//# sourceURL=webpack:///./src/state.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: stringToDOMElement, addClassIf, renderIf, wrap, render, createElement, removeChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stringToDOMElement\", function() { return stringToDOMElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addClassIf\", function() { return addClassIf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderIf\", function() { return renderIf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wrap\", function() { return wrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeChildren\", function() { return removeChildren; });\nfunction stringToDOMElement(s) {\n  const template = document.createElement('template');\n  template.innerHTML = s;\n  return template.content.firstChild;\n}\n\nfunction addClassIf(condition, className, elseClassName = '') {\n  return condition ? (` ${className}`) : (` ${elseClassName}`);\n}\n\nfunction renderIf(condition, html) {\n  return condition ? html : '';\n}\n\nfunction wrap(element) {\n  const wrapper = document.createElement('div');\n  wrapper.appendChild(element);\n  return wrapper;\n}\n\n/**\n *\n * @param {[Element]} elements\n * @param {Element} wrapper\n * @returns {Element} Rendered element.\n */\nfunction render(elements, wrapper) {\n  if (!Array.isArray(elements)) {\n    wrapper.appendChild(elements);\n  } else {\n    elements.forEach(element => wrapper.appendChild(element));\n  }\n  return wrapper;\n}\n\n/**\n * @param {String} tag\n * @param {Object} props\n * @param {[Element]} children\n */\nfunction createElement(tag, props, ...children) {\n  const element = document.createElement(tag);\n  Object.keys(props).forEach((propName) => {\n    element[propName] = props[propName];\n  });\n  children.forEach(child => element.appendChild(child));\n  return element;\n}\n\n/**\n *\n * @param {Node} element\n * @returns {[Node]} removed children\n */\nfunction removeChildren(element) {\n  const children = [];\n  while (element.firstChild) {\n    children.push(element.removeChild(element.firstChild));\n  }\n  return children;\n}\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });