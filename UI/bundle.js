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

/***/ "./src/components/PhotoPost.js":
/*!*************************************!*\
  !*** ./src/components/PhotoPost.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PhotoPost; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n/* harmony import */ var _models_PhotoPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/PhotoPost */ \"./src/models/PhotoPost.js\");\n\r\n\r\n\r\n/**\r\n * @param {PhotoPostModel} post\r\n */\r\n\r\nfunction PhotoPost(post) {\r\n    const pad = s => new String(s).padStart(2, '0'); \r\n    const formatDate = date => pad(date.getDate()) + \".\" + pad(date.getMonth() + 1) + \".\" + pad(date.getFullYear() % 100);\r\n    const makeTag = tag => `<a class=\"post__tag\">#${tag}</a>`;\r\n    const makeTags = tags => {\r\n        if (tags)\r\n            return tags.reduce((s, tag) => s + makeTag(tag) + \"\\n\", \"\");\r\n    };\r\n\r\n    const element =  Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"stringToDOMElement\"])(\r\n    `<div class=\"post\">\r\n        <header class=\"post__header\">\r\n            <span class=\"post__author\">${post.author}</span>\r\n            <span class=\"post__header__right\">\r\n                <span class=\"post__date\">${formatDate(post.createdAt)}</span>&nbsp\r\n                <i class=\"material-icons\">create</i>\r\n                <i class=\"material-icons\">close</i>\r\n            </span>\r\n        </header>\r\n        <img class=\"post__photo\" src=\"${post.photoLink}\">\r\n        <footer class=\"post__footer\">\r\n            <div class=\"post__like-panel\">\r\n                    <a class=\"post__like\">\r\n                        <i class=\"material-icons\">favorite</i>\r\n                    </a>\r\n                <span class=\"post__likes-count\">${post.likes.length}</span>\r\n            </div>\r\n            <div class=\"post__information\">\r\n                <div class=\"post__tags\">\r\n                    ${makeTags(post.tags)}\r\n                </div>\r\n                <p class=\"post__description\">\r\n                    ${post.description}\r\n                </p>\r\n            </div>\r\n        </footer>\r\n    </div>`);\r\n    console.log(element);\r\n\r\n    return element;\r\n}\n\n//# sourceURL=webpack:///./src/components/PhotoPost.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ \"./src/models/index.js\");\n/* harmony import */ var _components_PhotoPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/PhotoPost */ \"./src/components/PhotoPost.js\");\n\r\n\r\n\r\nconst postsData = [\r\n    {\r\n        author: \"simon_karasik\",\r\n        description: \"That was a wonderful sunset in the middle of summer.\",\r\n        createdAt: new Date(2018, 2, 19),\r\n        photoLink: \"photo1.JPEG\",\r\n        tags: [\"beautiful\", \"sunset\", \"worthten\"],\r\n\r\n    },\r\n    {\r\n        author: \"Alex Mukharski\",\r\n        description: \"post #2\",\r\n        createdAt: new Date(2018, 0, 0),\r\n        photoLink: \"http://google.by\",\r\n        tags: [\"tag1\", \"tag2\", \"tag3\"],\r\n        likes: [\"Simon Karasik\", \"Alex Kovalchuk\"]\r\n    },\r\n    {\r\n        author: \"Alex Kovalchuk\",\r\n        description: \"post #3\",\r\n        createdAt: new Date(2017, 0, 5),\r\n        photoLink: \"http://google.ru\",\r\n        tags: [\"hello\", \"it's\", \"me\", \"tag2\"]\r\n    }\r\n];\r\n\r\nconst posts = new _models__WEBPACK_IMPORTED_MODULE_0__[\"PhotoPosts\"]();\r\npostsData.forEach(post => posts.addPhotoPost(new _models__WEBPACK_IMPORTED_MODULE_0__[\"PhotoPost\"](post))); \r\nconst post = Object(_components_PhotoPost__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(posts.getPhotoPost(\"0\"));\r\nconst postsElement = document.getElementById(\"posts\");\r\nposts.getPhotoPosts().forEach(post => postsElement.appendChild(Object(_components_PhotoPost__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(post)));\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/models/PhotoPost.js":
/*!*********************************!*\
  !*** ./src/models/PhotoPost.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PhotoPost; });\nfunction isString(s) {\r\n    return typeof s === \"string\" || s instanceof String;\r\n}\r\n\r\nclass PhotoPost {\r\n    /**\r\n     * @param {String} description \r\n     * @param {Date} createdAt \r\n     * @param {String} author \r\n     * @param {String} photoLink \r\n     * @param {[String]} tags \r\n     * @param {[String]} likes\r\n     */\r\n    constructor({description, createdAt, author, photoLink, tags = [], likes = []}) {\r\n        this.id = PhotoPost.nextId();\r\n        this.description = description;\r\n        this.createdAt = createdAt;\r\n        this.author = author;\r\n        this.photoLink = photoLink;\r\n        this.tags = tags;\r\n        this.likes = likes;\r\n    }\r\n\r\n    getLikesCnt() {\r\n        return this.likes.length;\r\n    }\r\n\r\n    /**\r\n     * Like this post. Calling twice with same userName wont give changes. \r\n     * @param {String} userName User who liked this post.\r\n     */\r\n    like(userName) {\r\n        if(this.likes.indexOf(userName) === -1)\r\n            this.likes.push(userName);\r\n    } \r\n\r\n     /**\r\n     * Dislike this post. Calling twice with same userName wont give changes. \r\n     * @param {String} userName User who liked this post.\r\n     */\r\n    dislike(userName) {\r\n        const ind = this.likes.indexOf(userName);\r\n        if (ind !== -1)\r\n            this.likes.splice(ind, 1);\r\n    }\r\n\r\n    static nextId() {\r\n        let id = 0;\r\n        this.nextId = () => (id++).toString();\r\n        return this.nextId();\r\n    }\r\n\r\n    /**\r\n     * @param {PhotoPost} post \r\n     */\r\n    static validate(post) {\r\n        return (\r\n            post instanceof PhotoPost && \r\n            isString(post.id) && \r\n            isString(post.description) && post.description.length < 200 &&\r\n            (post.createdAt instanceof Date) && \r\n            isString(post.author) && post.author.length > 0 &&\r\n            isString(post.photoLink) && post.photoLink.length > 0 &&\r\n            post.tags instanceof Array && \r\n            post.likes instanceof Array\r\n        );\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/models/PhotoPost.js?");

/***/ }),

/***/ "./src/models/PhotoPosts.js":
/*!**********************************!*\
  !*** ./src/models/PhotoPosts.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PhotoPosts; });\n/* harmony import */ var _PhotoPost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhotoPost */ \"./src/models/PhotoPost.js\");\n\r\n\r\nclass PhotoPosts {\r\n    constructor() {\r\n        this.photoPosts = [];\r\n        this.isSorted = true;\r\n    }\r\n\r\n\r\n    /**\r\n     * @param {number} skip \r\n     * @param {number} top \r\n     * @param {{author? : String, fromDate? : Date, toDate? : Date, tags? : [String]}} filterConfig \r\n     * @returns {[PhotoPost]}\r\n     */\r\n    getPhotoPosts(skip = 0, top = 10, filterConfig) {\r\n        if (!this.isSorted) {\r\n            this.photoPosts.sort((p1, p2) => p1.createdAt < p2.createdAt);\r\n            this.isSorted = true;\r\n        }\r\n        const result = [];\r\n        for (let i = skip; i < Math.min(this.photoPosts.length, skip + top); i++) {\r\n            let isGood = true;\r\n            const post = this.photoPosts[i];\r\n            if (filterConfig) {\r\n                if (filterConfig.author && post.author !== filterConfig.author)\r\n                    isGood = false;\r\n                if (filterConfig.fromDate && post.createdAt < filterConfig.fromDate)\r\n                    isGood = false;\r\n                if (filterConfig.toDate && post.createdAt > filterConfig.toDate)\r\n                    isGood = false;\r\n                if (filterConfig.tags && !filterConfig.tags.every(tag => post.tags.indexOf(tag) !== -1))\r\n                    isGood = false;\r\n            }\r\n            if (isGood)\r\n                result.push(post);\r\n        }\r\n        return result;\r\n    }\r\n\r\n    /**\r\n     * @param {PhotoPost} post \r\n     * @returns {Boolean} success / failure\r\n     */\r\n    addPhotoPost(post) {\r\n        if (!_PhotoPost__WEBPACK_IMPORTED_MODULE_0__[\"default\"].validate(post))\r\n            return false;\r\n        this.photoPosts.push(post);\r\n        this.isSorted = false;\r\n        return true;\r\n    }\r\n\r\n    getPhotoPostsCnt() {\r\n        return this.photoPosts.length;\r\n    }\r\n\r\n    /**\r\n     * @param {String} id \r\n     * @returns {PhotoPost | null} Returns post with such id or null if not found.\r\n     */\r\n    getPhotoPost(id) {\r\n        return this.photoPosts.find(post => post.id === id) || null;\r\n    }\r\n\r\n    /**\r\n     * @returns {Boolean} success / failure\r\n     */\r\n    editPhotoPost(id, {description, tags, photoLink}) {\r\n        const ind = this.photoPosts.findIndex(post => post.id === id);\r\n        if (ind == -1)\r\n            return false;\r\n        const editedPost = Object.assign(new _PhotoPost__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({}), this.photoPosts[ind]);\r\n        if (typeof photoLink !== \"undefined\")\r\n            editedPost.photoLink = photoLink;\r\n        if (tags)\r\n            editedPost.tags = tags;\r\n        if (typeof description !== \"undefined\")\r\n            editedPost.description = description;\r\n        if (!_PhotoPost__WEBPACK_IMPORTED_MODULE_0__[\"default\"].validate(editedPost))\r\n            return false;\r\n        this.photoPosts[ind] = editedPost;\r\n        return true;        \r\n    }\r\n\r\n    /**\r\n     * @param {String} id \r\n     * @returns {Boolean} success / failure\r\n     */\r\n    removePhotoPost(id) {\r\n        const ind = this.photoPosts.findIndex(post => post.id === id);\r\n        if (ind === -1)\r\n            return false;\r\n        this.photoPosts.splice(ind, 1);\r\n        return true;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/models/PhotoPosts.js?");

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
/*! exports provided: stringToDOMElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stringToDOMElement\", function() { return stringToDOMElement; });\nfunction stringToDOMElement(s) {\r\n    const template = document.createElement(\"template\");\r\n    template.innerHTML = s;\r\n    return template.content.firstChild;\r\n}\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });