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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Content */ \"./src/components/Content.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ \"./src/components/Footer.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./src/components/Header.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n\r\n\r\n\r\n\r\n\r\nfunction App ({user}) {\r\n    return [Object(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({user}), Object(_Content__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({user}), Object(_Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()];\r\n}\n\n//# sourceURL=webpack:///./src/components/App.js?");

/***/ }),

/***/ "./src/components/Content.js":
/*!***********************************!*\
  !*** ./src/components/Content.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Content; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n\r\n\r\nfunction Content({user}) {\r\n    return Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"stringToDOMElement\"])(\r\n    `<div class=\"content\">\r\n        <aside class=\"sidebar\">\r\n            ${user ? \r\n            `<ul class=\"menu menu-panel\">\r\n                <li class=\"menu__item\">\r\n                    <a href=\"/posts\" class=\"bright\">Impressions</a>\r\n                </li>\r\n                <li class=\"menu__item bright\">\r\n                    <a href=\"/posts/user\" class=\"bright\">My impressions</a>\r\n                </li>\r\n                <li class=\"menu__item bright\">\r\n                    <a href=\"/posts/create\" class=\"bright\">New impression</a>\r\n                </li>\r\n                <li class=\"menu__item\">\r\n                    <a href=\"/user\" class=\"bright\">My account</a>\r\n                </li>\r\n            </ul>`: \"\"}\r\n            <div class=\"search menu-panel\">\r\n                <span class=\"search__title bright\">Filter</span>\r\n                <div class=\"search__panel\">\r\n                    <div class=\"search__option\">\r\n                        <input type=\"text\" class=\"search__input\" placeholder=\"By author\">\r\n                    </div>\r\n                    <div class=\"search__option\">\r\n                        <input type=\"text\" class=\"search__input\" placeholder=\"By date\">\r\n                    </div>\r\n                    <div class=\"search__option\">\r\n                        <input type=\"text\" class=\"search__input\" placeholder=\"By tag\">\r\n                    </div>\r\n                    <button class=\"search__button button\">Filter</button>\r\n                </div>\r\n            </div>\r\n        </aside>\r\n        <main class=\"main\" id = \"main\">\r\n            <div id = \"posts\">\r\n\r\n            </div>\r\n            <button class=\"load-more-button button\">Load more...</button>\r\n        </main>\r\n    </div>`);\r\n}\n\n//# sourceURL=webpack:///./src/components/Content.js?");

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Footer; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n\r\n\r\nfunction Footer() {\r\n    return Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"stringToDOMElement\"])(\r\n    `<footer class=\"footer panel\">\r\n        <span class=\"footer__description bright\">\r\n            Impression by Simon Karasik,\r\n            <a class=\"footer__email\" href=\"mailto:senich10@mail.ru\">\r\n                senich10@mail.ru\r\n            </a>\r\n            ,&nbsp FAMCS, group 5\r\n        </span>\r\n        <span class=\"footer__updat bright\">\r\n            Last update:\r\n            <span id=\"update-date\">19.02.18</span>\r\n        </span>\r\n    </footer>`);\r\n}\n\n//# sourceURL=webpack:///./src/components/Footer.js?");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n\r\n\r\nfunction Header({user}) {\r\n    const element = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"stringToDOMElement\"])(\r\n    `<header class=\"header panel\">\r\n        <div class=\"header__user-wrapper header__sideblock\">\r\n            ${user ? \r\n            `<div class=\"header__user\">\r\n                <img class=\"header__user__avatar\" src=\"${user.avatarLink}\"> &nbsp\r\n                <span class=\"header__user__name\">${user.name}</span>\r\n            </div>` : \"\"}\r\n        </div>\r\n        <h1 class=\"header__title\">IMPRESSION</h1>\r\n        <div class=\"header__sideblock header__logout-wrapper\">\r\n            <a class=\"header__logout\">\r\n                <i class=\"material-icons icon-button\">exit_to_app</i>\r\n            </a>\r\n        </div>\r\n    </header>\r\n    `);\r\n    return element;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/components/Header.js?");

/***/ }),

/***/ "./src/components/PhotoPost.js":
/*!*************************************!*\
  !*** ./src/components/PhotoPost.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PhotoPost; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n/* harmony import */ var _models_PhotoPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/PhotoPost */ \"./src/models/PhotoPost.js\");\n\r\n\r\n\r\n/**\r\n * @param {PhotoPostModel} post\r\n * @param {Store} store\r\n */\r\n\r\nfunction PhotoPost({post, onEdit, onRemove, userName, onLike} ) {\r\n    const pad = s => new String(s).padStart(2, '0'); \r\n    const formatDate = date => pad(date.getDate()) + \".\" + pad(date.getMonth() + 1) + \".\" + pad(date.getFullYear() % 100);\r\n    const makeTag = tag => `<a class=\"post__tag\">#${tag}</a>`;\r\n    const makeTags = tags => {\r\n        if (tags)\r\n            return tags.reduce((s, tag) => s + makeTag(tag) + \"\\n\", \"\");\r\n    };\r\n    const isAuthor = userName == post.author;\r\n    const isLiked = post.likes.indexOf(userName) !== -1; \r\n\r\n    const element =  Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"stringToDOMElement\"])(\r\n    `<div class=\"post\">\r\n        <header class=\"post__header\">\r\n            <span class=\"post__author\">${post.author}</span>\r\n            <span class=\"post__header__right\">\r\n                <span class=\"post__date\">${formatDate(post.createdAt)}</span>&nbsp\r\n                <span class = ${Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"addClassIf\"])(!isAuthor, \"hidden\")}>\r\n                    <i class=\"material-icons icon-button post__header__edit\">create</i>\r\n                    <i class=\"material-icons icon-button post__header__remove\">close</i>\r\n                </span>\r\n            </span>\r\n        </header>\r\n        <img class=\"post__photo\" src=\"${post.photoLink}\">\r\n        <footer class=\"post__footer\">\r\n            <div class=\"post__like-panel\">\r\n                <i class=\"material-icons post__like ${Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"addClassIf\"])(isLiked, \"post__like--liked\")}\">favorite</i>\r\n                <span class=\"post__likes-count\">${post.likes.length}</span>\r\n            </div>\r\n            <div class=\"post__information\">\r\n                <div class=\"post__tags\">\r\n                    ${makeTags(post.tags)}\r\n                </div>\r\n                <p class=\"post__description\">\r\n                    ${post.description}\r\n                </p>\r\n            </div>\r\n        </footer>\r\n    </div>`);\r\n\r\n    element.querySelector(\".post__header__edit\").onclick = onEdit\r\n    element.querySelector(\".post__header__remove\").onclick = onRemove;\r\n\r\n    return element;\r\n}\n\n//# sourceURL=webpack:///./src/components/PhotoPost.js?");

/***/ }),

/***/ "./src/components/PostsNotFound.js":
/*!*****************************************!*\
  !*** ./src/components/PostsNotFound.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PostsNotFound; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n\r\n\r\nfunction PostsNotFound() {\r\n    const element = Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"stringToDOMElement\"])(\r\n    `<div class = \"post\">\r\n        No posts found.\r\n    </div>`);\r\n    return element;\r\n}\n\n//# sourceURL=webpack:///./src/components/PostsNotFound.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ \"./src/models/index.js\");\n/* harmony import */ var _components_PhotoPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/PhotoPost */ \"./src/components/PhotoPost.js\");\n/* harmony import */ var _components_PostsNotFound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/PostsNotFound */ \"./src/components/PostsNotFound.js\");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/App */ \"./src/components/App.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n//todo: hide/show elements depending on the current user\r\n\r\nconst state = {\r\n    posts: new _models__WEBPACK_IMPORTED_MODULE_0__[\"PhotoPosts\"](),\r\n    postNodesCash: {},\r\n    filterConfig: null,\r\n    postsToShow: [],\r\n    user: {\r\n        name: \"simon_karasik\",\r\n        avatarLink: \"avatar.jpg\",\r\n    },\r\n}\r\n\r\nObject(_util__WEBPACK_IMPORTED_MODULE_4__[\"render\"])(Object(_components_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({user:state.user}), document.body);\r\nstate.postsWrapper = document.getElementById(\"posts\");\r\n\r\nconst showPosts = function(posts) {\r\n    Object(_util__WEBPACK_IMPORTED_MODULE_4__[\"removeChildren\"])(state.postsWrapper);\r\n    if (posts.length === 0)\r\n        state.postsWrapper.appendChild(Object(_components_PostsNotFound__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\n    else\r\n        posts.forEach(post => state.postsWrapper.appendChild(state.postNodesCash[post.id])); \r\n}\r\n\r\nconst addPost = function(post) {\r\n    post = new _models__WEBPACK_IMPORTED_MODULE_0__[\"PhotoPost\"](post);\r\n    if (state.posts.addPhotoPost(post)) {\r\n        state.postNodesCash[post.id] = Object(_components_PhotoPost__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\r\n            post, \r\n            userName: state.user.name});\r\n        showPosts(state.posts.getPhotoPosts());\r\n        return true;\r\n    }\r\n    return false;\r\n}\r\n\r\nconst removePost = function(id) {\r\n    if (state.posts.removePhotoPost()) {\r\n        const node = state.postNodesCash[id];\r\n        if (node.parentNode) \r\n            node.parentNode.removeChild(node);\r\n        delete state.postNodesCash.id;\r\n        return true;\r\n    }\r\n    return false;\r\n}\r\n\r\nconst cashPostsIfNeeded = function(posts) {\r\n    posts.forEach(post => {\r\n        if (!state.postNodesCash[post.id])\r\n            state.postNodesCash[post.ind] = Object(_components_PhotoPost__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({post, userName: (state.user ? state.user.name : null)});\r\n    })\r\n}\r\n\r\nconst filterPosts = function(filterConfig) {\r\n    const posts = state.posts.getPhotoPosts(0, 10, filterConfig);\r\n    cashPostsIfNeeded(posts);\r\n    showPosts(posts);\r\n}\r\n\r\nconst updatePost = function(id) {\r\n    const oldNode = state.postNodesCash[id];\r\n    const node = Object(_components_PhotoPost__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\r\n        post: state.posts.getPhotoPost(id), \r\n        userName: state.user ? state.user.name : undefined});\r\n    state.postNodesCash[id] = node;\r\n    if (oldNode && oldNode.parentNode)\r\n        oldNode.parentNode.replaceChild(node, oldNode);\r\n}\r\n\r\nconst editPost = function(id, options) {\r\n    if (state.posts.editPhotoPost(id, options)) {\r\n        updatePost(id);\r\n        return true;\r\n    }\r\n    return false;\r\n}\r\n\r\nconst likePost = function(id) {\r\n    const post  = state.posts.getPhotoPost(id);\r\n    if (post) {\r\n        post.like(state.user.name);\r\n        updatePost(id);\r\n        return true;\r\n    }\r\n    return false;\r\n}\r\n\r\nObject.assign(window, {\r\n    addPost, \r\n    editPost, \r\n    removePost, \r\n    likePost,\r\n    filterPosts\r\n});\r\n\r\nconst examplePosts = [\r\n    {\r\n        author: \"simon_karasik\",\r\n        description: \"That was a wonderful sunset in the middle of summer.\",\r\n        createdAt: new Date(2018, 2, 19),\r\n        photoLink: \"photo1.JPEG\",\r\n        tags: [\"beautiful\", \"sunset\", \"worthten\"],\r\n\r\n    },\r\n    {\r\n        author: \"Alex Mukharski\",\r\n        description: \"post #2\",\r\n        createdAt: new Date(2018, 0, 0),\r\n        photoLink: \"https://scontent-frx5-1.cdninstagram.com/vp/83a88bb2d1dd5aa7deee0029f2f08e53/5B3087E3/t51.2885-15/e35/28152259_336454203529783_1822968559202992128_n.jpg\",\r\n        tags: [\"tag1\", \"tag2\", \"tag3\"],\r\n        likes: [\"simon_karasik\", \"Alex Kovalchuk\"]\r\n    },\r\n    {\r\n        author: \"Alex Kovalchuk\",\r\n        description: \"post #3\",\r\n        createdAt: new Date(2017, 0, 5),\r\n        photoLink: \"https://scontent-frx5-1.cdninstagram.com/vp/a0915c1f5dc07ee4b473032fd81a4b11/5B3A2469/t51.2885-15/e35/26864741_2070912839806455_6365971865814433792_n.jpg\",\r\n        tags: [\"hello\", \"it's\", \"me\", \"tag2\"]\r\n    }\r\n].map(postData => new _models__WEBPACK_IMPORTED_MODULE_0__[\"PhotoPost\"](postData));\r\n\r\nexamplePosts.forEach(post => addPost(post));\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/models/PhotoPost.js":
/*!*********************************!*\
  !*** ./src/models/PhotoPost.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PhotoPost; });\nfunction isString(s) {\r\n    return typeof s === \"string\" || s instanceof String;\r\n}\r\n\r\nclass PhotoPost {\r\n    /**\r\n     * @param {String} description \r\n     * @param {Date} createdAt \r\n     * @param {String} author \r\n     * @param {String} photoLink \r\n     * @param {[String]} tags \r\n     * @param {[String]} likes\r\n     */\r\n    constructor({description, createdAt, author, photoLink, tags = [], likes = []}) {\r\n        this.id = PhotoPost.nextId();\r\n        this.description = description;\r\n        this.createdAt = createdAt;\r\n        this.author = author;\r\n        this.photoLink = photoLink;\r\n        this.tags = tags;\r\n        this.likes = likes;\r\n    }\r\n\r\n    getLikesCnt() {\r\n        return this.likes.length;\r\n    }\r\n\r\n    /**\r\n     * Like this post. Calling twice with same userName will unlike \r\n     * @param {String} userName User who liked this post.\r\n     */\r\n    like(userName) {\r\n        const ind = this.likes.indexOf(userName);\r\n        if (ind === -1)\r\n            this.likes.push(userName);\r\n        else\r\n            this.likes.splice(ind, 1);\r\n    } \r\n\r\n    static nextId() {\r\n        let id = 0;\r\n        this.nextId = () => (id++).toString();\r\n        return this.nextId();\r\n    }\r\n\r\n    /**\r\n     * @param {PhotoPost} post \r\n     */\r\n    static validate(post) {\r\n        return (\r\n            post instanceof PhotoPost && \r\n            isString(post.id) && \r\n            isString(post.description) && post.description.length < 200 &&\r\n            (post.createdAt instanceof Date) && \r\n            isString(post.author) && post.author.length > 0 &&\r\n            isString(post.photoLink) && post.photoLink.length > 0 &&\r\n            post.tags instanceof Array && \r\n            post.likes instanceof Array\r\n        );\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/models/PhotoPost.js?");

/***/ }),

/***/ "./src/models/PhotoPosts.js":
/*!**********************************!*\
  !*** ./src/models/PhotoPosts.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PhotoPosts; });\n/* harmony import */ var _PhotoPost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhotoPost */ \"./src/models/PhotoPost.js\");\n\r\n\r\nclass PhotoPosts {\r\n    constructor() {\r\n        this.photoPosts = [];\r\n        this.isSorted = true;\r\n    }\r\n\r\n\r\n    /**\r\n     * @param {number} skip \r\n     * @param {number} top \r\n     * @param {{author? : String, fromDate? : Date, toDate? : Date, tags? : [String]}} filterConfig \r\n     * @returns {[PhotoPost]}\r\n     */\r\n    getPhotoPosts(skip = 0, top = 10, filterConfig) {\r\n        if (!this.isSorted) {\r\n            this.photoPosts.sort((p1, p2) => p1.createdAt < p2.createdAt);\r\n            this.isSorted = true;\r\n        }\r\n        const result = [];\r\n        for (let i = skip; i < Math.min(this.photoPosts.length, skip + top); i++) {\r\n            let isGood = true;\r\n            const post = this.photoPosts[i];\r\n            if (filterConfig) {\r\n                if (filterConfig.author && post.author !== filterConfig.author)\r\n                    isGood = false;\r\n                if (filterConfig.fromDate && post.createdAt < filterConfig.fromDate)\r\n                    isGood = false;\r\n                if (filterConfig.toDate && post.createdAt > filterConfig.toDate)\r\n                    isGood = false;\r\n                if (filterConfig.tags && !filterConfig.tags.every(tag => post.tags.indexOf(tag) !== -1))\r\n                    isGood = false;\r\n            }\r\n            if (isGood)\r\n                result.push(post);\r\n        }\r\n        return result;\r\n    }\r\n\r\n    /**\r\n     * @param {PhotoPost} post \r\n     * @returns {Boolean} success / failure\r\n     */\r\n    addPhotoPost(post) {\r\n        if (!_PhotoPost__WEBPACK_IMPORTED_MODULE_0__[\"default\"].validate(post))\r\n            return false;\r\n        this.photoPosts.push(post);\r\n        this.isSorted = false;\r\n        return true;\r\n    }\r\n\r\n    getAllPosts() {\r\n        return this.photoPosts.slice();\r\n    }\r\n\r\n    getPhotoPostsCnt() {\r\n        return this.photoPosts.length;\r\n    }\r\n\r\n    /**\r\n     * @param {String} id \r\n     * @returns {PhotoPost | null} Returns post with such id or null if not found.\r\n     */\r\n    getPhotoPost(id) {\r\n        return this.photoPosts.find(post => post.id === id) || null;\r\n    }\r\n\r\n    /**\r\n     * @returns {Boolean} success / failure\r\n     */\r\n    editPhotoPost(id, {description, tags, photoLink}) {\r\n        const ind = this.photoPosts.findIndex(post => post.id === id);\r\n        if (ind == -1)\r\n            return false;\r\n        const editedPost = Object.assign(new _PhotoPost__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({}), this.photoPosts[ind]);\r\n        if (typeof photoLink !== \"undefined\")\r\n            editedPost.photoLink = photoLink;\r\n        if (tags)\r\n            editedPost.tags = tags;\r\n        if (typeof description !== \"undefined\")\r\n            editedPost.description = description;\r\n        if (!_PhotoPost__WEBPACK_IMPORTED_MODULE_0__[\"default\"].validate(editedPost))\r\n            return false;\r\n        this.photoPosts[ind] = editedPost;\r\n        return true;        \r\n    }\r\n\r\n    /**\r\n     * @param {String} id \r\n     * @returns {Boolean} success / failure\r\n     */\r\n    removePhotoPost(id) {\r\n        const ind = this.photoPosts.findIndex(post => post.id === id);\r\n        if (ind === -1)\r\n            return false;\r\n        this.photoPosts.splice(ind, 1);\r\n        return true;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/models/PhotoPosts.js?");

/***/ }),

/***/ "./src/models/index.js":
/*!*****************************!*\
  !*** ./src/models/index.js ***!
  \*****************************/
/*! exports provided: PhotoPost, PhotoPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PhotoPost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhotoPost */ \"./src/models/PhotoPost.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PhotoPost\", function() { return _PhotoPost__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _PhotoPosts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhotoPosts */ \"./src/models/PhotoPosts.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PhotoPosts\", function() { return _PhotoPosts__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/models/index.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: stringToDOMElement, addClassIf, renderIf, render, removeChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stringToDOMElement\", function() { return stringToDOMElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addClassIf\", function() { return addClassIf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderIf\", function() { return renderIf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeChildren\", function() { return removeChildren; });\nfunction stringToDOMElement(s) {\r\n    const template = document.createElement(\"template\");\r\n    template.innerHTML = s;\r\n    return template.content.firstChild;\r\n}\r\n\r\nfunction addClassIf(condition, className, elseClassName = \"\") {\r\n    if (condition)\r\n        return (\" \" + className);\r\n    else\r\n        return (\" \" + elseClassName);\r\n}\r\n\r\nfunction renderIf(condition, html) {\r\n    if (condition)\r\n        return html;\r\n}\r\n\r\n/**\r\n * \r\n * @param {[Element]} elements \r\n * @param {Element} wrapper \r\n * @returns {Element} Rendered element.\r\n */\r\nfunction render(elements, wrapper) {\r\n    if (!Array.isArray(elements))\r\n        elements = [elements];\r\n    elements.forEach(element => wrapper.appendChild(element));\r\n    return wrapper;\r\n}\r\n\r\n/**\r\n * \r\n * @param {Node} element \r\n * @returns {[Node]} removed children\r\n */\r\nfunction removeChildren(element) {\r\n    const children = [];\r\n    while (element.firstChild)\r\n        children.push(element.removeChild(element.firstChild));\r\n    return children;\r\n}\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });