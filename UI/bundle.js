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

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Content */ \"./src/components/Content.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ \"./src/components/Footer.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./src/components/Header.js\");\n\r\n\r\n\r\n\r\nfunction App() {\r\n  return [Object(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), Object(_Content__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), Object(_Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()];\r\n}\r\n\n\n//# sourceURL=webpack:///./src/components/App.js?");

/***/ }),

/***/ "./src/components/Content.js":
/*!***********************************!*\
  !*** ./src/components/Content.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Content; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ \"./src/state.js\");\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../handlers */ \"./src/handlers.js\");\n/* harmony import */ var _PhotoPosts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PhotoPosts */ \"./src/components/PhotoPosts.js\");\n/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Filter */ \"./src/components/Filter.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction Content() {\r\n  const { user } = Object(_state__WEBPACK_IMPORTED_MODULE_1__[\"getState\"])();\r\n\r\n  const element = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"stringToDOMElement\"])(`\r\n    <div class=\"content main-content\">\r\n      <aside class=\"sidebar\">\r\n        ${!user.isGuest ? `\r\n        <ul class=\"menu menu-panel\">\r\n          <li class=\"menu__item\">\r\n            <a href=\"/posts\" class=\"bright\">Impressions</a>\r\n          </li>\r\n          <li class=\"menu__item bright\">\r\n            <a href=\"/posts/user\" class=\"bright\">My impressions</a>\r\n          </li>\r\n          <li class=\"menu__item bright\">\r\n            <a href=\"/posts/create\" class=\"bright\">New impression</a>\r\n          </li>\r\n          <li class=\"menu__item\">\r\n            <a href=\"/user\" class=\"bright\">My account</a>\r\n          </li>\r\n        </ul>`.trim() : ''}\r\n      </aside>\r\n      <main class=\"main\" id = \"main\">\r\n        <button class=\"show-more-button button\">Load more...</button>\r\n      </main>\r\n    </div>\r\n  `.trim());\r\n\r\n  const main = element.querySelector('#main');\r\n  main.insertBefore(Object(_PhotoPosts__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), main.firstChild);\r\n  element.querySelector('.sidebar').appendChild(Object(_Filter__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\r\n\r\n  element.querySelector('.show-more-button').onclick = () => {\r\n    Object(_handlers__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\r\n      type: 'SHOW_MORE_POSTS',\r\n    });\r\n  };\r\n\r\n  return element;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/components/Content.js?");

/***/ }),

/***/ "./src/components/Filter.js":
/*!**********************************!*\
  !*** ./src/components/Filter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Filter; });\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers */ \"./src/handlers.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n\r\n\r\n\r\nfunction Filter() {\r\n  const element = Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"stringToDOMElement\"])(`\r\n    <form class=\"search menu-panel\">\r\n      <span class=\"search__title bright\">Filter</span>\r\n      <div class=\"search__panel\">\r\n        <div class=\"search__option\">\r\n        <input type=\"text\" name=\"author\" class=\"search__input\" placeholder=\"By author\">\r\n      </div>\r\n      <div class=\"search__option\">\r\n        <label>From date</label>\r\n        <input type=\"date\" name=\"fromDate\" class=\"search__input\">\r\n        <label>To date</label>\r\n        <input type=\"date\" name=\"toDate\" class=\"search__input\">\r\n      </div>\r\n      <div class=\"search__option\">\r\n        <input type=\"text\" name=\"tags\" class=\"search__input\" placeholder=\"By tag\">\r\n      </div>\r\n      <button class=\"search__button button\">Filter</button>\r\n    </form>\r\n  `.trim());\r\n\r\n  element.querySelector('.search__button').onclick = (e) => {\r\n    e.preventDefault();\r\n    const formData = new FormData(element);\r\n    const tags = formData.get('tags').split(/[#, ]/).filter(s => s !== '');\r\n    const author = formData.get('author').trim();\r\n    const fromDate = formData.get('fromDate') === '' ? null : new Date(formData.get('fromDate'));\r\n    const toDate = formData.get('toDate') === '' ? null : new Date(formData.get('toDate'));\r\n    Object(_handlers__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n      type: 'FILTER_POSTS',\r\n      filterConfig: {\r\n        fromDate,\r\n        toDate,\r\n        tags,\r\n        author,\r\n      },\r\n    });\r\n  };\r\n\r\n  return element;\r\n}\n\n//# sourceURL=webpack:///./src/components/Filter.js?");

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Footer; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n\r\n\r\nfunction Footer() {\r\n  return Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"stringToDOMElement\"])(`\r\n    <footer class=\"footer panel\">\r\n      <span class=\"footer__description bright\">\r\n        Impression by Simon Karasik,\r\n        <a class=\"footer__email\" href=\"mailto:senich10@mail.ru\">\r\n            senich10@mail.ru\r\n        </a>\r\n        ,&nbsp FAMCS, group 5\r\n      </span>\r\n      <span class=\"footer__update bright\">\r\n        Last update:\r\n         <span id=\"update-date\">19.02.18</span>\r\n      </span>\r\n    </footer>\r\n    `.trim());\r\n}\r\n\n\n//# sourceURL=webpack:///./src/components/Footer.js?");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ \"./src/state.js\");\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../handlers */ \"./src/handlers.js\");\n\r\n\r\n\r\n\r\nfunction Header() {\r\n  const { user } = Object(_state__WEBPACK_IMPORTED_MODULE_1__[\"getState\"])();\r\n  const element = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"stringToDOMElement\"])(`\r\n    <header class=\"header panel\">\r\n      <div class=\"header__user-wrapper header__sideblock header__user\">\r\n        <img class=\"header__user__avatar\" src=\"${user.avatarLink}\"> &nbsp\r\n        <span class=\"header__user__name\">${user.name}</span>\r\n      </div>\r\n      <h1 class=\"header__title\">IMPRESSION</h1>\r\n      <div class=\"header__sideblock header__logout-wrapper\">\r\n        <a class=\"header__logout\">\r\n          <i class=\"material-icons icon-button\">exit_to_app</i>\r\n        </a>\r\n      </div>\r\n    </header>\r\n  `.trim());\r\n\r\n  element.querySelector('.header__logout').onclick = () => {\r\n    Object(_handlers__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\r\n      type: 'LOGOUT',\r\n    });\r\n  };\r\n\r\n  return element;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/components/Header.js?");

/***/ }),

/***/ "./src/components/PhotoPost.js":
/*!*************************************!*\
  !*** ./src/components/PhotoPost.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PhotoPost; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handlers */ \"./src/handlers.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state */ \"./src/state.js\");\n\r\n\r\n\r\n/**\r\n * @param {PhotoPostModel} post\r\n * @param {Store} store\r\n */\r\n\r\nfunction PhotoPost({ post }) {\r\n  const { user } = Object(_state__WEBPACK_IMPORTED_MODULE_2__[\"getState\"])();\r\n  const pad = s => new String(s).padStart(2, '0');\r\n  const formatDate = date => pad(date.getDate()) + '.' + pad(date.getMonth() + 1) + '.' + pad(date.getFullYear() % 100);\r\n  const makeTag = tag => `<a class=\"post__tag\">#${tag}</a>`;\r\n  const makeTags = tags =>\r\n    tags.reduce((s, tag) => s + makeTag(tag), '');\r\n  const isAuthor = user.isGuest || post.author === user.name;\r\n  const isLiked = user.isGuest || post.likes.indexOf(user.name) !== -1;\r\n  const element = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"stringToDOMElement\"])(`\r\n    <div class=\"post\">\r\n      <header class=\"post__header\">\r\n       <span class=\"post__author\">${post.author}</span>\r\n       <span class=\"post__header__right\">\r\n         <span class=\"post__date\">${formatDate(post.createdAt)}</span>&nbsp\r\n         <span class = ${Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"addClassIf\"])(!isAuthor, 'hidden')}>\r\n          <i class=\"material-icons icon-button post__header__edit\">create</i>\r\n          <i class=\"material-icons icon-button post__header__remove\">close</i>\r\n         </span>\r\n       </span>\r\n      </header>\r\n      <img class=\"post__photo\" src=\"${post.photoLink}\">\r\n      <footer class=\"post__footer\">\r\n        <div class=\"post__like-panel\">\r\n          <i class=\"material-icons post__like ${Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"addClassIf\"])(isLiked, 'post__like--liked')}\">\r\n            ${isLiked ? 'favorite' : 'favorite_border'}\r\n          </i>\r\n         <span class=\"post__likes-count\">${post.likes.length}</span>\r\n       </div>\r\n       <div class=\"post__information\">\r\n         <div class=\"post__tags\">\r\n          ${makeTags(post.tags)}\r\n         </div>\r\n         <p class=\"post__description\">\r\n          ${post.description}\r\n         </p>\r\n       </div>\r\n      </footer>\r\n    </div>\r\n    `.trim());\r\n  element.querySelector('.post__header__edit').onclick = () => {\r\n    Object(_handlers__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\r\n      type: 'EDIT_POST',\r\n      id: post.id,\r\n    });\r\n  };\r\n  element.querySelector('.post__header__remove').onclick = () => {\r\n    Object(_handlers__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\r\n      type: 'REMOVE_POST',\r\n      id: post.id,\r\n    });\r\n  };\r\n  element.querySelector('.post__like').onclick = () => {\r\n    Object(_handlers__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\r\n      type: 'LIKE_POST',\r\n      id: post.id,\r\n    });\r\n  };\r\n  element.setAttribute('data-id', post.id);\r\n  return element;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/components/PhotoPost.js?");

/***/ }),

/***/ "./src/components/PhotoPosts.js":
/*!**************************************!*\
  !*** ./src/components/PhotoPosts.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PhotoPosts; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n/* harmony import */ var _PhotoPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhotoPost */ \"./src/components/PhotoPost.js\");\n/* harmony import */ var _PostsNotFound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostsNotFound */ \"./src/components/PostsNotFound.js\");\n\r\n\r\n\r\n\r\nlet element;\r\n\r\nfunction PhotoPosts() {\r\n  element = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"stringToDOMElement\"])(`\r\n    <div class=\"posts\">\r\n      <div></div>\r\n    </div>\r\n  `.trim());\r\n  PhotoPosts.render([]);\r\n  return element;\r\n}\r\n\r\nfunction findNode(id) {\r\n  const posts = element.firstChild.children;\r\n  const node = Array.prototype.find.call(posts, post => post.getAttribute('data-id') === id);\r\n  return node;\r\n}\r\n\r\nPhotoPosts.update = function (id, post) {\r\n  const node = findNode(id);\r\n  if (node) {\r\n    node.parentNode.replaceChild(Object(_PhotoPost__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ post }), node);\r\n  }\r\n};\r\n\r\nPhotoPosts.remove = function (id) {\r\n  const node = findNode(id);\r\n  if (node) {\r\n    node.parentNode.removeChild(node);\r\n  }\r\n};\r\n\r\nPhotoPosts.render = function (posts) {\r\n  Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"removeChildren\"])(element);\r\n  const wrapper = document.createElement('div');\r\n  if (posts.length === 0) {\r\n    wrapper.appendChild(Object(_PostsNotFound__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\n  } else {\r\n    posts.forEach((post) => {\r\n      wrapper.appendChild(Object(_PhotoPost__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ post }));\r\n    });\r\n  }\r\n  element.appendChild(wrapper);\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/components/PhotoPosts.js?");

/***/ }),

/***/ "./src/components/PostsNotFound.js":
/*!*****************************************!*\
  !*** ./src/components/PostsNotFound.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PostsNotFound; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n\n\nfunction PostsNotFound() {\n  const element = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"stringToDOMElement\"])(`\n    <div class = \"post\">\n      No posts found.\n    </div>\n  `.trim());\n  return element;\n}\n\n\n//# sourceURL=webpack:///./src/components/PostsNotFound.js?");

/***/ }),

/***/ "./src/handlers.js":
/*!*************************!*\
  !*** ./src/handlers.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handle; });\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ \"./src/state.js\");\n/* harmony import */ var _components_PhotoPosts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/PhotoPosts */ \"./src/components/PhotoPosts.js\");\n\r\n\r\n\r\nfunction showPosts() {\r\n  const { posts, filterConfig, postsInViewCnt } = Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])();\r\n  _components_PhotoPosts__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render(posts.getPhotoPosts(0, postsInViewCnt, filterConfig));\r\n};\r\n\r\nfunction addPost(postObj) {\r\n  if (Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().posts.addPhotoPost(postObj)) {\r\n    showPosts();\r\n    return true;\r\n  }\r\n  return false;\r\n}\r\n\r\nfunction showMorePosts() {\r\n  Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().postsInViewCnt +=  10;\r\n  showPosts();\r\n}\r\nfunction removePost(id) {\r\n  if (Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().posts.removePhotoPost(id)) {\r\n    _components_PhotoPosts__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove(id);\r\n    return true;\r\n  }\r\n  return false;\r\n};\r\n\r\nfunction filterPosts(filterConfig) {\r\n  Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().filterConfig = filterConfig;\r\n  Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().postsInViewCnt = 10;\r\n  showPosts();\r\n};\r\n\r\nfunction editPost(id, options) {\r\n  if (Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().posts.editPhotoPost(id, options)) {\r\n    _components_PhotoPosts__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update(id, Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().posts.getPhotoPost(id));\r\n    return true;\r\n  }\r\n  return false;\r\n};\r\n\r\nfunction likePost(id) {\r\n  const post = Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().posts.getPhotoPost(id);\r\n  if (post) {\r\n    post.like(Object(_state__WEBPACK_IMPORTED_MODULE_0__[\"getState\"])().user.name);\r\n    _components_PhotoPosts__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update(id, post);\r\n    return true;\r\n  }\r\n  return false;\r\n};\r\n\r\nfunction logout() {\r\n    \r\n}\r\n\r\nfunction handle(action) {\r\n  switch (action.type) {\r\n    case 'LIKE_POST':\r\n      likePost(action.id);\r\n      break;\r\n    case 'ADD_POST':\r\n      addPost(action.post);\r\n      break;\r\n    case 'REMOVE_POST':\r\n      removePost(action.id);\r\n      break;\r\n    case 'FILTER_POSTS':\r\n      filterPosts(action.filterConfig);\r\n      break;\r\n    case 'SHOW_MORE_POSTS':\r\n      showMorePosts();\r\n      break;\r\n    case 'LOGOUT':\r\n      logout();\r\n      break;\r\n    default:\r\n      break;\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/handlers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ \"./src/models/index.js\");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/App */ \"./src/components/App.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state */ \"./src/state.js\");\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handlers */ \"./src/handlers.js\");\n\n\n\n\n\n\n\nconst initialState = {\n  page: 'app',\n  posts: new _models__WEBPACK_IMPORTED_MODULE_0__[\"PhotoPosts\"](),\n  filterConfig: null,\n  postsInViewCnt: 1,\n  user: {\n    name: 'simon_karasik',\n    avatarLink: 'avatar.jpg',\n  },\n  guestUser: {\n    name: 'Guest',\n    avatarLink: 'user_icon.jpg',\n    isGuest: true,\n  },\n  users: [\n    {\n      email: 'senich10@mail.ru',\n      password: '505137s',\n      avatarLink: 'avatar.jpg',\n      id: '1',\n    },\n    {\n      email: 'admin@example.org',\n      password: 'admin',\n      id: '0',\n    },\n  ],\n};\n\nObject(_state__WEBPACK_IMPORTED_MODULE_3__[\"setState\"])(initialState);\n\nObject(_util__WEBPACK_IMPORTED_MODULE_2__[\"render\"])(Object(_components_App__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), document.body);\n\nconst examplePosts = [\n  {\n    author: 'simon_karasik',\n    description: 'That was a wonderful sunset in the middle of summer.',\n    createdAt: new Date(2018, 2, 19),\n    photoLink: 'photo1.JPEG',\n    tags: ['beautiful', 'sunset', 'worthten'],\n\n  },\n  {\n    author: 'Alex Mukharski',\n    description: 'post #2',\n    createdAt: new Date(2018, 0, 0),\n    photoLink: 'https://scontent-frx5-1.cdninstagram.com/vp/83a88bb2d1dd5aa7deee0029f2f08e53/5B3087E3/t51.2885-15/e35/28152259_336454203529783_1822968559202992128_n.jpg',\n    tags: ['tag1', 'tag2', 'tag3'],\n    likes: ['simon_karasik', 'Alex Kovalchuk'],\n  },\n  {\n    author: 'Alex Kovalchuk',\n    description: 'post #3',\n    createdAt: new Date(2017, 0, 5),\n    photoLink: 'https://scontent-frx5-1.cdninstagram.com/vp/a0915c1f5dc07ee4b473032fd81a4b11/5B3A2469/t51.2885-15/e35/26864741_2070912839806455_6365971865814433792_n.jpg',\n    tags: ['hello', \"it's\", 'me', 'tag2'],\n  },\n];\n\nexamplePosts.forEach(post => Object(_handlers__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n  type: 'ADD_POST',\n  post,\n}));\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/models/PhotoPost.js":
/*!*********************************!*\
  !*** ./src/models/PhotoPost.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PhotoPost; });\nfunction isString(s) {\n  return typeof s === 'string' || s instanceof String;\n}\n\nlet id = 0;\n\nclass PhotoPost {\n/**\n  * @param {String} description\n  * @param {Date} createdAt\n  * @param {String} author\n  * @param {String} photoLink\n  * @param {[String]} tags\n  * @param {[String]} likes\n  */\n  constructor({ description, createdAt, author, photoLink, tags = [], likes = [] }) {\n    this.id = PhotoPost.nextId();\n    this.description = description;\n    this.createdAt = createdAt;\n    this.author = author;\n    this.photoLink = photoLink;\n    this.tags = tags;\n    this.likes = likes;\n  }\n\n  getLikesCnt() {\n    return this.likes.length;\n  }\n\n  /**\n  * Like this post. Calling twice with same userName will unlike\n  * @param {String} userName User who liked this post.\n  */\n  like(userName) {\n    const ind = this.likes.indexOf(userName);\n    if (ind === -1) {\n      this.likes.push(userName);\n    } else {\n      this.likes.splice(ind, 1);\n    }\n  }\n\n  static nextId() {\n    return (id++).toString();\n  }\n\n  /**\n  * @param {PhotoPost} post\n  */\n  static validate(post) {\n    return (\n      post instanceof PhotoPost &&\n      isString(post.id) && post.id.length > 0 &&\n      isString(post.description) && post.description.length < 200 &&\n      (post.createdAt instanceof Date) &&\n      isString(post.author) && post.author.length > 0 &&\n      isString(post.photoLink) && post.photoLink.length > 0 &&\n      post.tags instanceof Array &&\n      post.likes instanceof Array\n    );\n  }\n}\n\n\n//# sourceURL=webpack:///./src/models/PhotoPost.js?");

/***/ }),

/***/ "./src/models/PhotoPosts.js":
/*!**********************************!*\
  !*** ./src/models/PhotoPosts.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PhotoPosts; });\n/* harmony import */ var _PhotoPost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhotoPost */ \"./src/models/PhotoPost.js\");\n\n\nclass PhotoPosts {\n  constructor() {\n    this.photoPosts = [];\n    this.isSorted = true;\n  }\n\n\n  /**\n  * @param {number} skip\n  * @param {number} top\n  * @param {{author? : String, fromDate? : Date, toDate? : Date, tags? : [String]}} filterConfig\n  * @returns {[PhotoPost]}\n  */\n  getPhotoPosts(skip = 0, top = 10, filterConfig) {\n    if (!this.isSorted) {\n      this.photoPosts.sort((p1, p2) => p1.createdAt < p2.createdAt);\n      this.isSorted = true;\n    }\n    const result = [];\n    for (let i = skip; i < Math.min(this.photoPosts.length, skip + top); i++) {\n      let isGood = true;\n      const post = this.photoPosts[i];\n      if (filterConfig) {\n        if (filterConfig.author && post.author !== filterConfig.author) {\n          isGood = false;\n        }\n        if (filterConfig.fromDate && post.createdAt < filterConfig.fromDate) {\n          isGood = false;\n        }\n        if (filterConfig.toDate && post.createdAt > filterConfig.toDate) {\n          isGood = false;\n        }\n        if (filterConfig.tags && !filterConfig.tags.every(tag => post.tags.indexOf(tag) !== -1)) {\n          isGood = false;\n        }\n      }\n      if (isGood) {\n        result.push(post);\n      }\n    }\n    return result;\n  }\n\n  /**\n  * @param {PhotoPost} post\n  * @returns {Boolean} success / failure\n  */\n  addPhotoPost(_post) {\n    let post = _post;\n    if (!(post instanceof _PhotoPost__WEBPACK_IMPORTED_MODULE_0__[\"default\"])) {\n      post = new _PhotoPost__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_post);\n    }\n    if (!_PhotoPost__WEBPACK_IMPORTED_MODULE_0__[\"default\"].validate(post)) {\n      return false;\n    }\n    this.photoPosts.push(post);\n    this.isSorted = false;\n    return true;\n  }\n\n  getAllPosts() {\n    return this.photoPosts.slice();\n  }\n\n  getPhotoPostsCnt() {\n    return this.photoPosts.length;\n  }\n\n  /**\n  * @param {String} id\n  * @returns {PhotoPost | null} Returns post with such id or null if not found.\n  */\n  getPhotoPost(id) {\n    return this.photoPosts.find(post => post.id === id) || null;\n  }\n\n  /**\n  * @returns {Boolean} success / failure\n  */\n  editPhotoPost(id, { description, tags, photoLink }) {\n    const ind = this.photoPosts.findIndex(post => post.id === id);\n    if (ind === -1) {\n      return false;\n    }\n    const editedPost = Object.assign(new _PhotoPost__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({}), this.photoPosts[ind]);\n    if (typeof photoLink !== 'undefined') {\n      editedPost.photoLink = photoLink;\n    }\n    if (tags) {\n      editedPost.tags = tags;\n    }\n    if (typeof description !== 'undefined') {\n      editedPost.description = description;\n    }\n    if (!_PhotoPost__WEBPACK_IMPORTED_MODULE_0__[\"default\"].validate(editedPost)) {\n      return false;\n    }\n    this.photoPosts[ind] = editedPost;\n    return true;\n  }\n\n  /**\n  * @param {String} id\n  * @returns {Boolean} success / failure\n  */\n  removePhotoPost(id) {\n    const ind = this.photoPosts.findIndex(post => post.id === id);\n    if (ind === -1) {\n      return false;\n    }\n    this.photoPosts.splice(ind, 1);\n    return true;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/models/PhotoPosts.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getState\", function() { return getState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setState\", function() { return setState; });\nlet state = {\r\n\r\n};\r\n\r\nfunction getState() {\r\n  return state;\r\n}\r\n\r\nfunction setState(newState) {\r\n  state = newState;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/state.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: stringToDOMElement, addClassIf, renderIf, wrap, render, createElement, removeChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stringToDOMElement\", function() { return stringToDOMElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addClassIf\", function() { return addClassIf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderIf\", function() { return renderIf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wrap\", function() { return wrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeChildren\", function() { return removeChildren; });\nfunction stringToDOMElement(s) {\n  const template = document.createElement('template');\n  template.innerHTML = s;\n  return template.content.firstChild;\n}\n\nfunction addClassIf(condition, className, elseClassName = '') {\n  return condition ? (' ' + className) : (' ' + elseClassName);\n}\n\nfunction renderIf(condition, html) {\n  return condition ? html : '';\n}\n\nfunction wrap(element) {\n  const wrapper = document.createElement('div');\n  wrapper.appendChild(element);\n  return wrapper;\n}\n\n/**\n *\n * @param {[Element]} elements\n * @param {Element} wrapper\n * @returns {Element} Rendered element.\n */\nfunction render(elements, wrapper) {\n  if (!Array.isArray(elements)) {\n    elements = [elements];\n  }\n\n  elements.forEach(element => wrapper.appendChild(element));\n  return wrapper;\n}\n\n/**\n * @param {String} tag \n * @param {Object} props \n * @param {[Element]} children \n */\nfunction createElement(tag, props, ...children) {\n  const element = document.createElement(tag);\n  Object.keys(props).forEach((propName) => {\n    element[propName] = props[propName]\n  });\n  children.forEach(child => element.appendChild(child));\n  return element;\n}\n\n/**\n *\n * @param {Node} element\n * @returns {[Node]} removed children\n */\nfunction removeChildren(element) {\n  const children = [];\n  while (element.firstChild) {\n    children.push(element.removeChild(element.firstChild));\n  }\n  return children;\n}\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });