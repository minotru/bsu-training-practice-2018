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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Content */ \"./src/components/Content.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ \"./src/components/Footer.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./src/components/Header.js\");\n\n\n\n\nfunction App({ user }) {\n  return [Object(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({ user }), Object(_Content__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ user }), Object(_Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()];\n}\n\n\n//# sourceURL=webpack:///./src/components/App.js?");

/***/ }),

/***/ "./src/components/Content.js":
/*!***********************************!*\
  !*** ./src/components/Content.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Content; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n\n\nfunction Content({ user }) {\n  return Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"stringToDOMElement\"])(`\n    <div class=\"content\">\n      <aside class=\"sidebar\">\n      ${user ? `\n        <ul class=\"menu menu-panel\">\n          <li class=\"menu__item\">\n            <a href=\"/posts\" class=\"bright\">Impressions</a>\n          </li>\n          <li class=\"menu__item bright\">\n            <a href=\"/posts/user\" class=\"bright\">My impressions</a>\n          </li>\n          <li class=\"menu__item bright\">\n            <a href=\"/posts/create\" class=\"bright\">New impression</a>\n          </li>\n          <li class=\"menu__item\">\n            <a href=\"/user\" class=\"bright\">My account</a>\n          </li>\n        </ul>`.trim() : ''}\n        <div class=\"search menu-panel\">\n          <span class=\"search__title bright\">Filter</span>\n          <div class=\"search__panel\">\n            <div class=\"search__option\">\n            <input type=\"text\" class=\"search__input\" placeholder=\"By author\">\n          </div>\n          <div class=\"search__option\">\n            <input type=\"text\" class=\"search__input\" placeholder=\"By date\">\n          </div>\n          <div class=\"search__option\">\n            <input type=\"text\" class=\"search__input\" placeholder=\"By tag\">\n          </div>\n          <button class=\"search__button button\">Filter</button>\n        </div>\n      </div>\n  </aside>\n   <main class=\"main\" id = \"main\">\n    <div id = \"posts\">\n\n    </div>\n    <button class=\"load-more-button button\">Load more...</button>\n   </main>\n  </div>\n  `.trim());\n}\n\n\n//# sourceURL=webpack:///./src/components/Content.js?");

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Footer; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n\n\nfunction Footer() {\n  return Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"stringToDOMElement\"])(`\n    <footer class=\"footer panel\">\n      <span class=\"footer__description bright\">\n        Impression by Simon Karasik,\n        <a class=\"footer__email\" href=\"mailto:senich10@mail.ru\">\n            senich10@mail.ru\n        </a>\n        ,&nbsp FAMCS, group 5\n      </span>\n      <span class=\"footer__updat bright\">\n        Last update:\n         <span id=\"update-date\">19.02.18</span>\n      </span>\n    </footer>\n    `.trim());\n}\n\n\n//# sourceURL=webpack:///./src/components/Footer.js?");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n\n\nfunction Header({ user }) {\n  const element = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"stringToDOMElement\"])(`\n    <header class=\"header panel\">\n      <div class=\"header__user-wrapper header__sideblock header__user\">\n        <img class=\"header__user__avatar\" src=\"${user ? user.avatarLink : 'user_icon.png'}\"> &nbsp\n        <span class=\"header__user__name\">${user ? user.name : 'Guest'}</span>\n      </div>\n      <h1 class=\"header__title\">IMPRESSION</h1>\n      <div class=\"header__sideblock header__logout-wrapper\">\n        <a class=\"header__logout\">\n          <i class=\"material-icons icon-button\">exit_to_app</i>\n        </a>\n      </div>\n    </header>\n  `.trim());\n  return element;\n}\n\n\n//# sourceURL=webpack:///./src/components/Header.js?");

/***/ }),

/***/ "./src/components/PhotoPost.js":
/*!*************************************!*\
  !*** ./src/components/PhotoPost.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PhotoPost; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n\n/**\n * @param {PhotoPostModel} post\n * @param {Store} store\n */\n\nfunction PhotoPost({ post, onEdit, onRemove, user, onLike }) {\n  const pad = s => new String(s).padStart(2, '0');\n  const formatDate = date => pad(date.getDate()) + '.' + pad(date.getMonth() + 1) + '.' + pad(date.getFullYear() % 100);\n  const makeTag = tag => `<a class=\"post__tag\">#${tag}</a>`;\n  const makeTags = tags =>\n    tags.reduce((s, tag) => s + makeTag(tag) + '\\n', '');\n  const userName = user ? user.name : null;\n  const isAuthor = userName;\n  const isLiked = post.likes.indexOf(userName) !== -1;\n  const element = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"stringToDOMElement\"])(`\n    <div class=\"post\">\n      <header class=\"post__header\">\n       <span class=\"post__author\">${post.author}</span>\n       <span class=\"post__header__right\">\n         <span class=\"post__date\">${formatDate(post.createdAt)}</span>&nbsp\n         <span class = ${Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"addClassIf\"])(!isAuthor, 'hidden')}>\n          <i class=\"material-icons icon-button post__header__edit\">create</i>\n          <i class=\"material-icons icon-button post__header__remove\">close</i>\n         </span>\n       </span>\n      </header>\n      <img class=\"post__photo\" src=\"${post.photoLink}\">\n      <footer class=\"post__footer\">\n       <div class=\"post__like-panel\">\n         <i class=\"material-icons post__like ${Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"addClassIf\"])(isLiked, 'post__like--liked')}\">favorite</i>\n         <span class=\"post__likes-count\">${post.likes.length}</span>\n       </div>\n       <div class=\"post__information\">\n         <div class=\"post__tags\">\n          ${post.tags ? makeTags(post.tags) : ''}\n         </div>\n         <p class=\"post__description\">\n          ${post.description}\n         </p>\n       </div>\n      </footer>\n    </div>\n    `.trim());\n  element.querySelector('.post__header__edit').onclick = onEdit;\n  element.querySelector('.post__header__remove').onclick = onRemove;\n  element.querySelector('.post__like').onclick = onLike;\n  return element;\n}\n\n\n//# sourceURL=webpack:///./src/components/PhotoPost.js?");

/***/ }),

/***/ "./src/components/PostsNotFound.js":
/*!*****************************************!*\
  !*** ./src/components/PostsNotFound.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PostsNotFound; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n\n\nfunction PostsNotFound() {\n  const element = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"stringToDOMElement\"])(`\n    <div class = \"post\">\n      No posts found.\n    </div>`);\n  return element;\n}\n\n\n//# sourceURL=webpack:///./src/components/PostsNotFound.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ \"./src/models/index.js\");\n/* harmony import */ var _components_PhotoPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/PhotoPost */ \"./src/components/PhotoPost.js\");\n/* harmony import */ var _components_PostsNotFound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/PostsNotFound */ \"./src/components/PostsNotFound.js\");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/App */ \"./src/components/App.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\n\n\n\n\nconst state = {\n  posts: new _models__WEBPACK_IMPORTED_MODULE_0__[\"PhotoPosts\"](),\n  postNodesCache: {},\n  filterConfig: null,\n  postsToShow: [],\n  user: {\n    name: 'simon_karasik',\n    avatarLink: 'avatar.jpg',\n  },\n};\n\nObject(_util__WEBPACK_IMPORTED_MODULE_4__[\"render\"])(Object(_components_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({ user: state.user }), document.body);\nstate.postsWrapper = document.getElementById('posts');\n\nconst showPosts = function (posts) {\n  Object(_util__WEBPACK_IMPORTED_MODULE_4__[\"removeChildren\"])(state.postsWrapper);\n  if (posts.length === 0) {\n    state.postsWrapper.appendChild(Object(_components_PostsNotFound__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n  } else {\n    posts.forEach((post) => {\n      if (!state.postNodesCache[post.id]) {\n        state.postNodesCache[post.id] = Object(_components_PhotoPost__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ post, user: state.user });\n      }\n      state.postsWrapper.appendChild(state.postNodesCache[post.id]);\n    });\n  }\n};\n\nconst addPost = function (postObj) {\n  if (state.posts.addPhotoPost(postObj)) {\n    showPosts(state.posts.getPhotoPosts());\n    return true;\n  }\n  return false;\n};\n\nconst removePost = function (id) {\n  if (state.posts.removePhotoPost()) {\n    const node = state.postNodesCache[id];\n    if (node.parentNode) {\n      node.parentNode.removeChild(node);\n    }\n    delete state.postNodesCache.id;\n    return true;\n  }\n  return false;\n};\n\nconst filterPosts = function (filterConfig) {\n  const posts = state.posts.getPhotoPosts(0, 10, filterConfig);\n  showPosts(posts);\n};\n\nconst updatePost = function (id) {\n  if (state.postNodesCache[id].parentNode) {\n    const oldNode = state.postNodesCache[id];\n    const node = Object(_components_PhotoPost__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n      post: state.posts.getPhotoPost(id),\n      user: state.user,\n    });\n    state.postNodesCache[id] = node;\n    if (oldNode && oldNode.parentNode) {\n      oldNode.parentNode.replaceChild(node, oldNode);\n    }\n  } else {\n    state.postNodesCache[id] = null;\n  }\n};\n\nconst editPost = function (id, options) {\n  if (state.posts.editPhotoPost(id, options)) {\n    updatePost(id);\n    return true;\n  }\n  return false;\n};\n\nconst likePost = function (id) {\n  const post = state.posts.getPhotoPost(id);\n  if (post) {\n    post.like(state.user.name);\n    updatePost(id);\n    return true;\n  }\n  return false;\n};\n\nObject.assign(window, {\n  addPost,\n  editPost,\n  removePost,\n  likePost,\n  filterPosts,\n});\n\nconst examplePosts = [\n  {\n    author: 'simon_karasik',\n    description: 'That was a wonderful sunset in the middle of summer.',\n    createdAt: new Date(2018, 2, 19),\n    photoLink: 'photo1.JPEG',\n    tags: ['beautiful', 'sunset', 'worthten'],\n\n  },\n  {\n    author: 'Alex Mukharski',\n    description: 'post #2',\n    createdAt: new Date(2018, 0, 0),\n    photoLink: 'https://scontent-frx5-1.cdninstagram.com/vp/83a88bb2d1dd5aa7deee0029f2f08e53/5B3087E3/t51.2885-15/e35/28152259_336454203529783_1822968559202992128_n.jpg',\n    tags: ['tag1', 'tag2', 'tag3'],\n    likes: ['simon_karasik', 'Alex Kovalchuk'],\n  },\n  {\n    author: 'Alex Kovalchuk',\n    description: 'post #3',\n    createdAt: new Date(2017, 0, 5),\n    photoLink: 'https://scontent-frx5-1.cdninstagram.com/vp/a0915c1f5dc07ee4b473032fd81a4b11/5B3A2469/t51.2885-15/e35/26864741_2070912839806455_6365971865814433792_n.jpg',\n    tags: ['hello', \"it's\", 'me', 'tag2'],\n  },\n];\n\nexamplePosts.forEach(post => addPost(post));\n\n\n//# sourceURL=webpack:///./src/index.js?");

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

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: stringToDOMElement, addClassIf, renderIf, render, removeChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stringToDOMElement\", function() { return stringToDOMElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addClassIf\", function() { return addClassIf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderIf\", function() { return renderIf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeChildren\", function() { return removeChildren; });\nfunction stringToDOMElement(s) {\n  const template = document.createElement('template');\n  template.innerHTML = s;\n  return template.content.firstChild;\n}\n\nfunction addClassIf(condition, className, elseClassName = '') {\n  return condition ? (' ' + className) : (' ' + elseClassName);\n}\n\nfunction renderIf(condition, html) {\n  return condition ? html : '';\n}\n\n/**\n *\n * @param {[Element]} elements\n * @param {Element} wrapper\n * @returns {Element} Rendered element.\n */\nfunction render(elements, wrapper) {\n  if (!Array.isArray(elements)) {\n    elements = [elements];\n  }\n\n  elements.forEach(element => wrapper.appendChild(element));\n  return wrapper;\n}\n\n/**\n *\n * @param {Node} element\n * @returns {[Node]} removed children\n */\nfunction removeChildren(element) {\n  const children = [];\n  while (element.firstChild) {\n    children.push(element.removeChild(element.firstChild));\n  }\n  return children;\n}\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });