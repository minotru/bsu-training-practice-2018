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

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: editPost, removePost, addPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editPost\", function() { return editPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removePost\", function() { return removePost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\nfunction editPost(postId) {\r\n    return {\r\n        type: \"EDIT_POST\",\r\n        postId\r\n    }\r\n}\r\n\r\nfunction removePost(postId) {\r\n    return {\r\n        type: \"REMOVE_POST\",\r\n        postId\r\n    }\r\n}\r\n\r\nfunction addPost(post) {\r\n    return {\r\n        type: \"ADD_POST\",\r\n        post\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/actions/index.js?");

/***/ }),

/***/ "./src/components/PhotoPost.js":
/*!*************************************!*\
  !*** ./src/components/PhotoPost.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PhotoPost; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n/* harmony import */ var _models_PhotoPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/PhotoPost */ \"./src/models/PhotoPost.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ \"./src/actions/index.js\");\n\r\n\r\n\r\n\r\n/**\r\n * @param {PhotoPostModel} post\r\n * @param {Store} store\r\n */\r\n\r\nfunction PhotoPost({post, onEdit, onRemove, userName} ) {\r\n    const pad = s => new String(s).padStart(2, '0'); \r\n    const formatDate = date => pad(date.getDate()) + \".\" + pad(date.getMonth() + 1) + \".\" + pad(date.getFullYear() % 100);\r\n    const makeTag = tag => `<a class=\"post__tag\">#${tag}</a>`;\r\n    const makeTags = tags => {\r\n        if (tags)\r\n            return tags.reduce((s, tag) => s + makeTag(tag) + \"\\n\", \"\");\r\n    };\r\n    const isAuthor = userName == post.author;\r\n    const isLiked = post.likes.indexOf(userName) !== -1; \r\n\r\n    const element =  Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"stringToDOMElement\"])(\r\n    `<div class=\"post\">\r\n        <header class=\"post__header\">\r\n            <span class=\"post__author\">${post.author}</span>\r\n            <span class=\"post__header__right\">\r\n                <span class=\"post__date\">${formatDate(post.createdAt)}</span>&nbsp\r\n                <span class = ${Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"addClassIf\"])(!isAuthor, \"hidden\")}>\r\n                    <i class=\"material-icons icon-button post__header__edit\">create</i>\r\n                    <i class=\"material-icons icon-button post__header__remove\">close</i>\r\n                </span>\r\n            </span>\r\n        </header>\r\n        <img class=\"post__photo\" src=\"${post.photoLink}\">\r\n        <footer class=\"post__footer\">\r\n            <div class=\"post__like-panel\">\r\n                    <a class=\"post__like\">\r\n                        <i class=\"material-icons ${Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"addClassIf\"])(isLiked, \"post__like--liked\")}\">favorite</i>\r\n                    </a>\r\n                <span class=\"post__likes-count\">${post.likes.length}</span>\r\n            </div>\r\n            <div class=\"post__information\">\r\n                <div class=\"post__tags\">\r\n                    ${makeTags(post.tags)}\r\n                </div>\r\n                <p class=\"post__description\">\r\n                    ${post.description}\r\n                </p>\r\n            </div>\r\n        </footer>\r\n    </div>`);\r\n\r\n    element.querySelector(\".post__header__edit\").onclick = onEdit\r\n    element.querySelector(\".post__header__remove\").onclick = onRemove;\r\n    element.data = {};\r\n    element.data.post = post;\r\n\r\n    return element;\r\n}\n\n//# sourceURL=webpack:///./src/components/PhotoPost.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ \"./src/models/index.js\");\n/* harmony import */ var _components_PhotoPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/PhotoPost */ \"./src/components/PhotoPost.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ \"./src/store.js\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ \"./src/reducers/index.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ \"./src/actions/index.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst initalState = {\r\n    posts: new _models__WEBPACK_IMPORTED_MODULE_0__[\"PhotoPosts\"](),\r\n    filterOptions: null,\r\n    postsToShow: [],\r\n    userName: \"simon_karasik\",\r\n    postsChangeCnt: 0\r\n}\r\n\r\nconst store = new _store__WEBPACK_IMPORTED_MODULE_2__[\"default\"](_reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], initalState);\r\n\r\nconst examplePosts = [\r\n    {\r\n        author: \"simon_karasik\",\r\n        description: \"That was a wonderful sunset in the middle of summer.\",\r\n        createdAt: new Date(2018, 2, 19),\r\n        photoLink: \"photo1.JPEG\",\r\n        tags: [\"beautiful\", \"sunset\", \"worthten\"],\r\n\r\n    },\r\n    {\r\n        author: \"Alex Mukharski\",\r\n        description: \"post #2\",\r\n        createdAt: new Date(2018, 0, 0),\r\n        photoLink: \"http://google.by\",\r\n        tags: [\"tag1\", \"tag2\", \"tag3\"],\r\n        likes: [\"Simon Karasik\", \"Alex Kovalchuk\"]\r\n    },\r\n    {\r\n        author: \"Alex Kovalchuk\",\r\n        description: \"post #3\",\r\n        createdAt: new Date(2017, 0, 5),\r\n        photoLink: \"http://google.ru\",\r\n        tags: [\"hello\", \"it's\", \"me\", \"tag2\"]\r\n    }\r\n].map(postData => new _models__WEBPACK_IMPORTED_MODULE_0__[\"PhotoPost\"](postData));\r\n\r\nconst postsHandler = (function() {\r\n    let nodesCash = {};\r\n    let postsChangeCnt = null;\r\n    const wrapper = document.getElementById(\"posts\");\r\n    return function() {\r\n        if (store.getState().postsChangeCnt !== postsChangeCnt) {\r\n            postsChangeCnt = store.getState().postsChangeCnt;\r\n            Object(_util__WEBPACK_IMPORTED_MODULE_5__[\"removeChildren\"])(wrapper);\r\n            store.getState().postsToShow.forEach(post => {\r\n                if (!nodesCash[post.id] || nodesCash[post.id].data.post !== post)\r\n                    nodesCash[post.id] = Object(_components_PhotoPost__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\r\n                        post,\r\n                        userName: store.getState().userName,\r\n                        onRemove: () => store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_4__[\"removePost\"](post.id)),\r\n                        onEdit: () => store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_4__[\"editPost\"](post.id))\r\n                    });\r\n                wrapper.appendChild(nodesCash[post.id]);\r\n            });\r\n        }\r\n    \r\n    }\r\n})();\r\n\r\nstore.subscribe(postsHandler);\r\nexamplePosts.forEach(post => store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_4__[\"addPost\"](post)));\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PhotoPosts; });\n/* harmony import */ var _PhotoPost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhotoPost */ \"./src/models/PhotoPost.js\");\n\r\n\r\nclass PhotoPosts {\r\n    constructor() {\r\n        this.photoPosts = [];\r\n        this.isSorted = true;\r\n    }\r\n\r\n\r\n    /**\r\n     * @param {number} skip \r\n     * @param {number} top \r\n     * @param {{author? : String, fromDate? : Date, toDate? : Date, tags? : [String]}} filterConfig \r\n     * @returns {[PhotoPost]}\r\n     */\r\n    getPhotoPosts(skip = 0, top = 10, filterConfig) {\r\n        if (!this.isSorted) {\r\n            this.photoPosts.sort((p1, p2) => p1.createdAt < p2.createdAt);\r\n            this.isSorted = true;\r\n        }\r\n        const result = [];\r\n        for (let i = skip; i < Math.min(this.photoPosts.length, skip + top); i++) {\r\n            let isGood = true;\r\n            const post = this.photoPosts[i];\r\n            if (filterConfig) {\r\n                if (filterConfig.author && post.author !== filterConfig.author)\r\n                    isGood = false;\r\n                if (filterConfig.fromDate && post.createdAt < filterConfig.fromDate)\r\n                    isGood = false;\r\n                if (filterConfig.toDate && post.createdAt > filterConfig.toDate)\r\n                    isGood = false;\r\n                if (filterConfig.tags && !filterConfig.tags.every(tag => post.tags.indexOf(tag) !== -1))\r\n                    isGood = false;\r\n            }\r\n            if (isGood)\r\n                result.push(post);\r\n        }\r\n        return result;\r\n    }\r\n\r\n    /**\r\n     * @param {PhotoPost} post \r\n     * @returns {Boolean} success / failure\r\n     */\r\n    addPhotoPost(post) {\r\n        if (!_PhotoPost__WEBPACK_IMPORTED_MODULE_0__[\"default\"].validate(post))\r\n            return false;\r\n        this.photoPosts.push(post);\r\n        this.isSorted = false;\r\n        return true;\r\n    }\r\n\r\n    getAllPosts() {\r\n        return this.photoPosts;\r\n    }\r\n\r\n    getPhotoPostsCnt() {\r\n        return this.photoPosts.length;\r\n    }\r\n\r\n    /**\r\n     * @param {String} id \r\n     * @returns {PhotoPost | null} Returns post with such id or null if not found.\r\n     */\r\n    getPhotoPost(id) {\r\n        return this.photoPosts.find(post => post.id === id) || null;\r\n    }\r\n\r\n    /**\r\n     * @returns {Boolean} success / failure\r\n     */\r\n    editPhotoPost(id, {description, tags, photoLink}) {\r\n        const ind = this.photoPosts.findIndex(post => post.id === id);\r\n        if (ind == -1)\r\n            return false;\r\n        const editedPost = Object.assign(new _PhotoPost__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({}), this.photoPosts[ind]);\r\n        if (typeof photoLink !== \"undefined\")\r\n            editedPost.photoLink = photoLink;\r\n        if (tags)\r\n            editedPost.tags = tags;\r\n        if (typeof description !== \"undefined\")\r\n            editedPost.description = description;\r\n        if (!_PhotoPost__WEBPACK_IMPORTED_MODULE_0__[\"default\"].validate(editedPost))\r\n            return false;\r\n        this.photoPosts[ind] = editedPost;\r\n        return true;        \r\n    }\r\n\r\n    /**\r\n     * @param {String} id \r\n     * @returns {Boolean} success / failure\r\n     */\r\n    removePhotoPost(id) {\r\n        const ind = this.photoPosts.findIndex(post => post.id === id);\r\n        if (ind === -1)\r\n            return false;\r\n        this.photoPosts.splice(ind, 1);\r\n        return true;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/models/PhotoPosts.js?");

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

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return reducer; });\nfunction reducer(prevState, action) {\r\n    switch (action.type) {\r\n        case \"ADD_POST\": {\r\n            const state = Object.assign({}, prevState);\r\n            state.posts.addPhotoPost(action.post);\r\n            state.postsToShow = state.posts.getAllPosts();\r\n            state.postsChangeCnt++;\r\n            return state;\r\n        }\r\n\r\n        case \"REMOVE_POST\": {\r\n            const state = Object.assign({}, prevState);\r\n            state.posts.removePhotoPost(action.postId);\r\n            state.postsToShow = state.posts.getAllPosts();\r\n            state.postsChangeCnt++;\r\n            return state;\r\n        }\r\n\r\n        default:\r\n            return prevState;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/reducers/index.js?");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Store; });\nclass Store {\r\n    constructor(reducer, initialState = {}) {\r\n        this.reducer = reducer;\r\n        this.state = initialState;\r\n        this.listeners = [];\r\n    }\r\n\r\n    getState() {\r\n        return this.state;\r\n    }\r\n\r\n    dispatch(action) {\r\n        this.state = this.reducer(this.state, action);\r\n        this.listeners.forEach(listener => listener());\r\n    }\r\n\r\n    subscribe(listener) {\r\n        this.listeners.push(listener);\r\n        return function unsubscribe() {\r\n            const ind = this.listeners.indexOf(listener);\r\n            if (ind !== -1)\r\n                this.listeners.splice(ind, 1);\r\n        }\r\n    }\r\n\r\n    replaceReducer(nextReducer) {\r\n        this.reducer = nextReducer;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/store.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: stringToDOMElement, addClassIf, removeChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stringToDOMElement\", function() { return stringToDOMElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addClassIf\", function() { return addClassIf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeChildren\", function() { return removeChildren; });\nfunction stringToDOMElement(s) {\r\n    const template = document.createElement(\"template\");\r\n    template.innerHTML = s;\r\n    return template.content.firstChild;\r\n}\r\n\r\nfunction addClassIf(condition, className, elseClassName = \"\") {\r\n    if (condition)\r\n        return (\" \" + className);\r\n    else\r\n        return (\" \" + elseClassName);\r\n}\r\n\r\n/**\r\n * \r\n * @param {Node} element \r\n * @returns {[Node]} removed children\r\n */\r\nfunction removeChildren(element) {\r\n    const children = [];\r\n    while (element.firstChild)\r\n        children.push(element.removeChild(element.firstChild));\r\n    return children;\r\n}\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });