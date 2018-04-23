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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = stringToDOMElement;
/* harmony export (immutable) */ __webpack_exports__["a"] = addClassIf;
/* unused harmony export renderIf */
/* unused harmony export wrap */
/* harmony export (immutable) */ __webpack_exports__["c"] = render;
/* unused harmony export createElement */
/* harmony export (immutable) */ __webpack_exports__["b"] = removeChildren;
function stringToDOMElement(s) {
  const template = document.createElement('template');
  template.innerHTML = s;
  return template.content.firstChild;
}

function addClassIf(condition, className, elseClassName = '') {
  return condition ? (' ' + className) : (' ' + elseClassName);
}

function renderIf(condition, html) {
  return condition ? html : '';
}

function wrap(element) {
  const wrapper = document.createElement('div');
  wrapper.appendChild(element);
  return wrapper;
}

/**
 *
 * @param {[Element]} elements
 * @param {Element} wrapper
 * @returns {Element} Rendered element.
 */
function render(elements, wrapper) {
  if (!Array.isArray(elements)) {
    elements = [elements];
  }

  elements.forEach(element => wrapper.appendChild(element));
  return wrapper;
}

/**
 * @param {String} tag 
 * @param {Object} props 
 * @param {[Element]} children 
 */
function createElement(tag, props, ...children) {
  const element = document.createElement(tag);
  Object.keys(props).forEach((propName) => {
    element[propName] = props[propName]
  });
  children.forEach(child => element.appendChild(child));
  return element;
}

/**
 *
 * @param {Node} element
 * @returns {[Node]} removed children
 */
function removeChildren(element) {
  const children = [];
  while (element.firstChild) {
    children.push(element.removeChild(element.firstChild));
  }
  return children;
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = handle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_PhotoPosts__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_PageNotFound__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_SignIn__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_App__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Editor__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_PhotoPosts__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api__ = __webpack_require__(19);










function clearPostsViewConfig() {
  Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().postsInViewCnt = 0;
  Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().filterConfig = null;
}

function setPage(pageName, args) {
  Object(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* removeChildren */])(document.body);
  clearPostsViewConfig();
  let page = null;
  switch (pageName) {
    case 'signIn':
      page = Object(__WEBPACK_IMPORTED_MODULE_4__components_SignIn__["a" /* default */])();
      break;
    case 'app':
      page = Object(__WEBPACK_IMPORTED_MODULE_5__components_App__["a" /* default */])();
      break;
    case 'editor':
      page = Object(__WEBPACK_IMPORTED_MODULE_6__components_Editor__["a" /* default */])(args);
      break;
    default:
      page = Object(__WEBPACK_IMPORTED_MODULE_3__components_PageNotFound__["a" /* default */])();
  }
  Object(__WEBPACK_IMPORTED_MODULE_1__util__["c" /* render */])(page, document.body);
}

function showPosts() {
  const { posts, postsInViewCnt, filterConfig } = Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])();
  const postsToShow = posts.getPhotoPosts(0, postsInViewCnt, filterConfig);
  __WEBPACK_IMPORTED_MODULE_2__components_PhotoPosts__["a" /* default */].render(postsToShow);
}

function loadMorePostsIfNeeded(wantedPostsCnt) {
  const { filterConfig } = Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])();
  const availablePosts = Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().posts.getPhotoPosts(0, wantedPostsCnt, filterConfig);
  const availablePostsCnt = availablePosts.length;
  if (availablePostsCnt < wantedPostsCnt) {
    return __WEBPACK_IMPORTED_MODULE_8__api__["c" /* getPosts */](availablePostsCnt, wantedPostsCnt - availablePostsCnt, filterConfig)
      .then((posts) => {
        posts.forEach(post => Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().posts.addPhotoPost(post));
        return availablePostsCnt + posts.length;
      });
  }
  return Promise.resolve(wantedPostsCnt);
}

function loadMorePostsIfNeededAndShow(wantedPostsCnt) {
  loadMorePostsIfNeeded(wantedPostsCnt)
    .then((availablePostsCnt) => {
      Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().postsInViewCnt = availablePostsCnt;
      showPosts();
    });
}

function showMorePosts() {
  loadMorePostsIfNeededAndShow(Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().postsInViewCnt + Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().postsPerPage);
}
function removePost(id) {
  __WEBPACK_IMPORTED_MODULE_8__api__["b" /* deletePost */](id)
    .then(() => {
      Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().postsInViewCnt--;
      Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().posts.removePhotoPost(id);
      __WEBPACK_IMPORTED_MODULE_2__components_PhotoPosts__["a" /* default */].remove(id);
    })
    .catch(err => console.log(err));
}

function filterPosts(filterConfig) {
  clearPostsViewConfig();
  Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().filterConfig = filterConfig;
  loadMorePostsIfNeededAndShow(Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().postsPerPage);
}

function likePost(id) {
  __WEBPACK_IMPORTED_MODULE_8__api__["d" /* likePost */](id, Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().user.name)
    .then((post) => {
      Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().posts.editPhotoPost(id, post);
      __WEBPACK_IMPORTED_MODULE_2__components_PhotoPosts__["a" /* default */].update(id, post);
    });
}

function editPost(id) {
  setPage('editor', Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().posts.getPhotoPost(id));
}

function createPost() {
  setPage('editor');
}

function savePost(postToSave) {
  if (postToSave.id) {
    __WEBPACK_IMPORTED_MODULE_8__api__["f" /* updatePost */](postToSave.id, postToSave)
      .then((post) => {
        Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().posts.editPhotoPost(post.id, post);
        setPage('app');
      });
  } else {
    postToSave.author = Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().user.name;
    __WEBPACK_IMPORTED_MODULE_8__api__["a" /* createPost */](postToSave)
      .then((post) => {
        Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().posts.addPhotoPost(post);
        setPage('app');
      });
  }
}

function logout() {
  Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().user = null;
  Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().posts = __WEBPACK_IMPORTED_MODULE_7__models_PhotoPosts__["a" /* default */].fromArray([]);
  Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().postsInViewCnt = 0;
  setPage('signIn');
}

function login({
  email,
  password,
  onLoggedIn,
  onError,
  asGuest,
}) {
  if (asGuest) {
    Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().user = null;
    onLoggedIn();
  } else {
    __WEBPACK_IMPORTED_MODULE_8__api__["e" /* login */](email, password)
      .then((user) => {
        Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().user = user;
        onLoggedIn();
      })
      .catch(onError);
  }
}

function handle(action) {
  switch (action.type) {
    case 'LIKE_POST':
      likePost(action.id);
      break;
    case 'REMOVE_POST':
      removePost(action.id);
      break;
    case 'CREATE_POST':
      createPost();
      break;
    case 'FILTER_POSTS':
      filterPosts(action.filterConfig);
      break;
    case 'SHOW_POSTS': {
      clearPostsViewConfig();
      loadMorePostsIfNeededAndShow(Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().postsPerPage);
      break;
    }
    case 'EDIT_POST':
      editPost(action.id);
      break;
    case 'SAVE_POST':
      savePost(action.post);
      break;
    case 'SHOW_MORE_POSTS':
      showMorePosts();
      break;
    case 'CANCEL_EDITING':
      setPage('app');
      break;
    case 'SET_PAGE':
      setPage(action.pageName);
      break;
    case 'LOGIN':
      login(action);
      break;
    case 'LOGOUT':
      logout();
      break;
    default:
      break;
  }
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getState;
/* harmony export (immutable) */ __webpack_exports__["b"] = setState;
let state = {

};

function getState() {
  return state;
}

function setState(stateUpdate) {
  state = Object.assign(state, stateUpdate);
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Footer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);


function Footer() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* stringToDOMElement */])(`
    <footer class="footer panel">
      <span class="footer__description bright">
        Impression by Simon Karasik,
        <a class="footer__email" href="mailto:senich10@mail.ru">
            senich10@mail.ru
        </a>
        ,&nbsp FAMCS, group 5
      </span>
      <span class="footer__update bright">
        Last update:
         <span id="update-date">19.02.18</span>
      </span>
    </footer>
    `.trim());
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function isString(s) {
  return typeof s === 'string' || s instanceof String;
}

class PhotoPost {
/**
  * @param {String} description
  * @param {Date} createdAt
  * @param {String} author
  * @param {String} photoLink
  * @param {[String]} tags
  * @param {[String]} likes
  */
  constructor({
    description,
    createdAt,
    author,
    photoLink,
    tags = [],
    likes = [],
    id,
  }) {
    this.id = id;
    this.description = description;
    this.createdAt = createdAt;
    this.author = author;
    this.photoLink = photoLink;
    this.tags = tags;
    this.likes = likes;
  }

  getLikesCnt() {
    return this.likes.length;
  }

  /**
  * Like this post. Calling twice with same userName will unlike
  * @param {String} userName User who liked this post.
  */
  like(userName) {
    const ind = this.likes.indexOf(userName);
    if (ind === -1) {
      this.likes.push(userName);
    } else {
      this.likes.splice(ind, 1);
    }
  }

  /**
  * @param {PhotoPost} post
  */
  static validate(post) {
    return (
      post instanceof PhotoPost &&
      isString(post.id) && post.id.length > 0 &&
      isString(post.description) && post.description.length < 200 &&
      (post.createdAt instanceof Date) &&
      isString(post.author) && post.author.length > 0 &&
      isString(post.photoLink) && post.photoLink.length > 0 &&
      post.tags instanceof Array &&
      post.likes instanceof Array
    );
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PhotoPost;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class PhotoPosts {
  constructor() {
    this.photoPosts = [];
    this.isSorted = true;
  }

  static fromArray(arr) {
    const posts = new PhotoPosts();
    arr.forEach(post => posts.addPhotoPost(post));
    return posts;
  }

  /**
  * @param {number} skip
  * @param {number} top
  * @param {{author? : String, fromDate? : Date, toDate? : Date, tags? : [String]}} filterConfig
  * @returns {[PhotoPost]}
  */
  getPhotoPosts(skip = 0, top = 10, filterConfig) {
    if (!this.isSorted) {
      this.photoPosts.sort((p1, p2) => p1.createdAt < p2.createdAt);
      this.isSorted = true;
    }
    const result = [];
    for (let i = skip; i < Math.min(this.photoPosts.length, skip + top); i++) {
      let isGood = true;
      const post = this.photoPosts[i];
      if (filterConfig) {
        if (filterConfig.author && post.author !== filterConfig.author) {
          isGood = false;
        }
        if (filterConfig.fromDate && post.createdAt < filterConfig.fromDate) {
          isGood = false;
        }
        if (filterConfig.toDate && post.createdAt > filterConfig.toDate) {
          isGood = false;
        }
        if (filterConfig.tags && !filterConfig.tags.every(tag => post.tags.indexOf(tag) !== -1)) {
          isGood = false;
        }
      }
      if (isGood) {
        result.push(post);
      }
    }
    return result;
  }

  /**
  * @param {PhotoPost} post
  * @returns {Boolean} success / failure
  */
  addPhotoPost(post) {
    this.photoPosts.push(post);
    this.isSorted = false;
    return post;
  }

  /**
  * @param {String} id
  * @returns {PhotoPost | null} Returns post with such id or null if not found.
  */
  getPhotoPost(id) {
    return this.photoPosts.find(post => post.id === id) || null;
  }

  /**
  * @returns {Boolean} success / failure
  */
  editPhotoPost(id, fieldsToEdit) {
    const ind = this.photoPosts.findIndex(post => post.id === id);
    if (ind === -1) {
      return false;
    }
    Object.assign(this.photoPosts[ind], fieldsToEdit);
    return true;
  }

  /**
  * @param {String} id
  * @returns {Boolean} success / failure
  */
  removePhotoPost(id) {
    const ind = this.photoPosts.findIndex(post => post.id === id);
    if (ind === -1) {
      return false;
    }
    this.photoPosts.splice(ind, 1);
    return true;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PhotoPosts;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PhotoPosts;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PhotoPost__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PostsNotFound__ = __webpack_require__(11);




let element;

function PhotoPosts() {
  element = Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* stringToDOMElement */])(`
    <div class="posts" id="posts">
      <div></div>
    </div>
  `.trim());
  PhotoPosts.render([]);
  return element;
}

function findNode(id) {
  const posts = element.firstChild.children;
  const node = Array.prototype.find.call(posts, post => post.getAttribute('data-id') === id);
  return node;
}

PhotoPosts.update = function (id, post) {
  const node = findNode(id);
  if (node) {
    node.parentNode.replaceChild(Object(__WEBPACK_IMPORTED_MODULE_1__PhotoPost__["a" /* default */])({ post }), node);
  }
};

PhotoPosts.remove = function (id) {
  const node = findNode(id);
  if (node) {
    node.parentNode.removeChild(node);
  }
};

PhotoPosts.render = function (posts) {
  Object(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* removeChildren */])(element);
  const wrapper = document.createElement('div');
  if (posts.length === 0) {
    wrapper.appendChild(Object(__WEBPACK_IMPORTED_MODULE_2__PostsNotFound__["a" /* default */])());
  } else {
    posts.forEach((post) => {
      wrapper.appendChild(Object(__WEBPACK_IMPORTED_MODULE_1__PhotoPost__["a" /* default */])({ post }));
    });
  }
  element.appendChild(wrapper);
};



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Header;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__handlers__ = __webpack_require__(1);




function Header() {
  let user = Object(__WEBPACK_IMPORTED_MODULE_1__state__["a" /* getState */])().user || {
    name: 'Guest',
    avatarLink: 'user_icon.png',
  };
  user.avatarLink = user.avatarLink || 'user_icon.png';
  
  const element = Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* stringToDOMElement */])(`
    <header class="header panel">
      <div class="header__user-wrapper header__sideblock header__user">
        <img class="header__user__avatar" src="${user.avatarLink}"> &nbsp
        <span class="header__user__name">${user.name}</span>
      </div>
      <h1 class="header__title">IMPRESSION</h1>
      <div class="header__sideblock header__logout-wrapper">
        <a class="header__logout">
          <i class="material-icons icon-button">exit_to_app</i>
        </a>
      </div>
    </header>
  `.trim());

  element.querySelector('.header__logout').onclick = () => {
    Object(__WEBPACK_IMPORTED_MODULE_2__handlers__["a" /* default */])({
      type: 'LOGOUT',
    });
    Object(__WEBPACK_IMPORTED_MODULE_2__handlers__["a" /* default */])({
      type: 'SET_PAGE',
      pageName: 'signIn',
    });
  };

  return element;
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__handlers__ = __webpack_require__(1);




const initialState = {
  posts: __WEBPACK_IMPORTED_MODULE_0__models__["a" /* PhotoPosts */].fromArray([]),
  filterConfig: null,
  postsInViewCnt: 0,
  user: null,
  postsPerPage: 10,
};
Object(__WEBPACK_IMPORTED_MODULE_1__state__["b" /* setState */])(initialState);
Object(__WEBPACK_IMPORTED_MODULE_2__handlers__["a" /* default */])({
  type: 'SET_PAGE',
  pageName: 'app',
});


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PhotoPost__ = __webpack_require__(4);
/* unused harmony reexport PhotoPost */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PhotoPosts__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__PhotoPosts__["a"]; });




/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PhotoPost;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__handlers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state__ = __webpack_require__(2);



/**
 * @param {PhotoPostModel} post
 * @param {Store} store
 */

function PhotoPost({ post }) {
  const { user } = Object(__WEBPACK_IMPORTED_MODULE_2__state__["a" /* getState */])();
  const pad = s => new String(s).padStart(2, '0');
  const formatDate = date => pad(date.getDate()) + '.' + pad(date.getMonth() + 1) + '.' + pad(date.getFullYear() % 100);
  const makeTag = tag => `<a class="post__tag">${tag}</a>`;
  const makeTags = tags =>
    tags.reduce((s, tag) => s + makeTag(tag) + ' ', '');
  const isAuthor = user && post.author === user.name;
  const isLiked = user && post.likes.indexOf(user.name) !== -1;
  const element = Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* stringToDOMElement */])(`
    <div class="post">
      <header class="post__header">
       <span class="post__author">${post.author}</span>
       <span class="post__header__right">
         <span class="post__date">${formatDate(post.createdAt)}</span>&nbsp
         <span class = ${Object(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* addClassIf */])(!isAuthor, 'hidden')}>
          <i class="material-icons icon-button post__header__edit">create</i>
          <i class="material-icons icon-button post__header__remove">close</i>
         </span>
       </span>
      </header>
      <img class="post__photo" src="${post.photoLink}">
      <footer class="post__footer">
        <div class="post__like-panel">
          <i class="material-icons post__like ${Object(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* addClassIf */])(isLiked, 'post__like--liked')}">
            ${isLiked ? 'favorite' : 'favorite_border'}
          </i>
         <span class="post__likes-count">${post.likes.length}</span>
       </div>
       <div class="post__information">
         <div class="post__tags">
          ${makeTags(post.tags)}
         </div>
         <p class="post__description">
          ${post.description}
         </p>
       </div>
      </footer>
    </div>
    `.trim());
  element.querySelector('.post__header__edit').onclick = () => {
    Object(__WEBPACK_IMPORTED_MODULE_1__handlers__["a" /* default */])({
      type: 'EDIT_POST',
      id: post.id,
    });
  };
  element.querySelector('.post__header__remove').onclick = () => {
    Object(__WEBPACK_IMPORTED_MODULE_1__handlers__["a" /* default */])({
      type: 'REMOVE_POST',
      id: post.id,
    });
  };
  element.querySelector('.post__like').onclick = () => {
    Object(__WEBPACK_IMPORTED_MODULE_1__handlers__["a" /* default */])({
      type: 'LIKE_POST',
      id: post.id,
    });
  };
  element.setAttribute('data-id', post.id);
  return element;
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PostsNotFound;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);


function PostsNotFound() {
  const element = Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* stringToDOMElement */])(`
    <div class = "post posts-not-found">
      No posts found.
    </div>
  `.trim());
  return element;
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PageNotFound;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);


function PageNotFound() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* stringToDOMElement */])(`
    Ooops! Page not found!
  `.trim());
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = SignIn;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Footer__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__handlers__ = __webpack_require__(1);




function SignIn() {
  const form = `
    <form class="sign-in__form">
      <h1 class="sign-in__form__header bright">Sign in</h1>
      <input type="email" required class="sign-in__input input" name="email" placeholder="Email Address">
      <input type="password" required class="sign-in__input input" name="password" placeholder="Password">
      <button type="submit" class="button bright sign-in__button">Sign in</button>
      <button id="signAsGuest" class="button bright sign-in__button">Sign in as a guest</button>  
    </form>
  `.trim();

  const element = Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* stringToDOMElement */])(`
    <div class="sign-in">
      <div class="sign-in__content">
        <h1 class="sign-in__header bright">Impression</h1>
        ${form}
      </div>
    </div>
  `.trim());
  element.appendChild(Object(__WEBPACK_IMPORTED_MODULE_1__Footer__["a" /* default */])());

  element.querySelector('.sign-in__form').onsubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    Object(__WEBPACK_IMPORTED_MODULE_2__handlers__["a" /* default */])({
      type: 'LOGIN',
      email: formData.get('email'),
      password: formData.get('password'),
      onLoggedIn: () => Object(__WEBPACK_IMPORTED_MODULE_2__handlers__["a" /* default */])({
        type: 'SET_PAGE',
        pageName: 'app',
      }),
      onError: () => {
        alert('Wrong email or password');
      },
    });
  };

  element.querySelector('#signAsGuest').onclick = (event) => {
    event.preventDefault();
    Object(__WEBPACK_IMPORTED_MODULE_2__handlers__["a" /* default */])({
      type: 'LOGIN',
      asGuest: true,
      onLoggedIn: () => Object(__WEBPACK_IMPORTED_MODULE_2__handlers__["a" /* default */])({
        type: 'SET_PAGE',
        pageName: 'app',
      }),
    });
  };

  return element;
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = App;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Content__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Footer__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header__ = __webpack_require__(7);




function App() {
  return [Object(__WEBPACK_IMPORTED_MODULE_2__Header__["a" /* default */])(), Object(__WEBPACK_IMPORTED_MODULE_0__Content__["a" /* default */])(), Object(__WEBPACK_IMPORTED_MODULE_1__Footer__["a" /* default */])()];
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Content;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__handlers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PhotoPosts__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Filter__ = __webpack_require__(16);






function Content() {
  const { user } = Object(__WEBPACK_IMPORTED_MODULE_1__state__["a" /* getState */])();

  const element = Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* stringToDOMElement */])(`
    <div class="content main-content">
      <aside class="sidebar">
        <ul class="menu menu-panel">
          <li class="menu__item">
            <a href="#" class="bright">Impressions</a>
          </li>
          ${user ? `
          <li class="menu__item bright">
            <a href="#" class="bright">My impressions</a>
          </li>
          <li class="menu__item bright">
            <a href="#" class="bright">New impression</a>
          </li>`.trim() : ''}
        </ul>
      </aside>
      <main class="main" id = "main">
        <button class="show-more-button button">Load more...</button>
      </main>
    </div>
  `.trim());

  const menuItems = element.querySelector('.menu').children;
  menuItems[0].onclick = () => Object(__WEBPACK_IMPORTED_MODULE_2__handlers__["a" /* default */])({
    type: 'SHOW_POSTS',
  });
  if (menuItems.length > 1) {
    menuItems[1].onclick = () => Object(__WEBPACK_IMPORTED_MODULE_2__handlers__["a" /* default */])({
      type: 'FILTER_POSTS',
      filterConfig: {
        author: user.name,
      },
    });
    menuItems[2].onclick = () => Object(__WEBPACK_IMPORTED_MODULE_2__handlers__["a" /* default */])({
      type: 'CREATE_POST',
    });
  }

  const main = element.querySelector('#main');
  main.insertBefore(Object(__WEBPACK_IMPORTED_MODULE_3__PhotoPosts__["a" /* default */])(), main.firstChild);
  element.querySelector('.sidebar').appendChild(Object(__WEBPACK_IMPORTED_MODULE_4__Filter__["a" /* default */])());

  element.querySelector('.show-more-button').onclick = () => {
    Object(__WEBPACK_IMPORTED_MODULE_2__handlers__["a" /* default */])({
      type: 'SHOW_MORE_POSTS',
    });
  };

  Object(__WEBPACK_IMPORTED_MODULE_2__handlers__["a" /* default */])({
    type: 'SHOW_POSTS',
  });
  return element;
}


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Filter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__handlers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(0);



function Filter() {
  const element = Object(__WEBPACK_IMPORTED_MODULE_1__util__["d" /* stringToDOMElement */])(`
    <form class="search menu-panel">
      <span class="search__title bright">Filter</span>
      <div class="search__panel">
        <div class="search__option">
        <input type="text" name="author" class="search__input" placeholder="By author">
      </div>
      <div class="search__option">
        <label>From date</label>
        <input type="date" name="fromDate" class="search__input">
        <label>To date</label>
        <input type="date" name="toDate" class="search__input">
      </div>
      <div class="search__option">
        <input type="text" name="tags" class="search__input" placeholder="By tag">
      </div>
      <button class="search__button button">Filter</button>
    </form>
  `.trim());

  element.querySelector('.search__button').onclick = (e) => {
    e.preventDefault();
    const formData = new FormData(element);
    const tags = formData.get('tags').split(/[#, ]/).filter(s => s !== '');
    const author = formData.get('author').trim();
    const fromDate = formData.get('fromDate') === '' ? null : new Date(formData.get('fromDate'));
    const toDate = formData.get('toDate') === '' ? null : new Date(formData.get('toDate'));
    Object(__WEBPACK_IMPORTED_MODULE_0__handlers__["a" /* default */])({
      type: 'FILTER_POSTS',
      filterConfig: {
        fromDate,
        toDate,
        tags,
        author,
      },
    });
  };

  return element;
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Editor;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EditPost__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Footer__ = __webpack_require__(3);





function Editor(post) {
  const content = Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* stringToDOMElement */])(`
    <div class="content main-content">
      <main class="main" id = "main">
        <div class="posts"></div>
      </main>
    </div>
  `.trim());
  content.querySelector('.posts').appendChild(Object(__WEBPACK_IMPORTED_MODULE_1__EditPost__["a" /* default */])(post));
  return [Object(__WEBPACK_IMPORTED_MODULE_2__Header__["a" /* default */])(), content, Object(__WEBPACK_IMPORTED_MODULE_3__Footer__["a" /* default */])()];
}


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = EditPost;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__handlers__ = __webpack_require__(1);



function makeTag(tag) {
  const element = Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* stringToDOMElement */])(`
    <span 
      type="text" 
      class="post__tag post__tag--editable input" 
      contenteditable="true">
      ${tag}
    </span>&nbsp
  `.trim());

  element.onkeypress = (event) => {
    if (event.code === 'Enter') {
      event.preventDefault();
      event.target.blur();
    }
  };

  element.onblur = (event) => {
    if (event.target.innerText.length === 0) {
      event.target.parentNode.removeChild(event.target);
    }
  };
  return element;
}

function EditPost(post = {
  tags: [],
  photoLink: '',
  description: '',
}) {
  const element = Object(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* stringToDOMElement */])(`
    <div class="post">
      <form class="post__edit-form">
        <img class="post__photo" alt="Photo preview" src=${post.photoLink} />
        <div>Photo link: <input id="photoLink" type="text" value="${post.photoLink}" class="input"/></div>
        <div><label class="input" for="photoFile">Load photo</label><input type="file" accept="image/*" id="photoFile"></div>
        <div class="post__tags">
          Tags:
          <span id="tags"></span>
          <a class="post__tag post__tag--add input">Add tag</a>
        </div>
        <div>
          Description:
          <div>
            <textarea 
              required 
              maxlength="200"
              class="input post__description post__description--editable">${post.description}
            </textarea>
          </div>
        </div>
        <button type="submit" class="input bright">Save</button>
        <button id="cancel" class="input bright">Cancel</button>
    </div>
  `.trim());
  const tagsWrapper = element.querySelector('#tags');
  post.tags.forEach(tag => tagsWrapper.appendChild(makeTag(tag)));

  let state = {
    usePhotoLink: true,
    photoLink: post.photoLink,
  };

  element.querySelector('#photoLink').onblur = (event) => {
    const url = event.target.value;
    if (url !== state.photoLink && url !== '') {
      element.querySelector('.post__photo').src = url;
      state = {
        usePhotoLink: true,
        photoLink: url,
      };
    }
  };

  element.querySelector('#photoFile').onchange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      state = {
        usePhotoLink: false,
        photoFile: file,
      };
      element.querySelector('.post__photo').src = reader.result;
      element.querySelector('#photoLink').value = '';
    };
    reader.readAsDataURL(file);
  };

  element.querySelector('.post__tag--add').onclick = () => {
    const newTag = makeTag('');
    tagsWrapper.appendChild(newTag);
    newTag.focus();
  };

  element.querySelector('.post__edit-form').onsubmit = (event) => {
    event.preventDefault();
    if (!state.photoLink && !state.photoFile) {
      alert('Please, provide either photo link, either photo file');
      return;
    }
    const tags = Array.prototype.map.call(
      element.querySelectorAll('.post__tag--editable'),
      node => node.innerText,
    );
    const description = element.querySelector('.post__description').value;
    const postToSend = Object.assign({}, post, {
      tags,
      description,
    });
    if (state.usePhotoLink) {
      postToSend.photoLink = state.photoLink;
    } else {
      delete postToSend.photoLink;
      postToSend.photoFile = state.photoFile;
    }
    Object(__WEBPACK_IMPORTED_MODULE_1__handlers__["a" /* default */])({
      type: 'SAVE_POST',
      photo: state,
      post: postToSend,
    });
  };

  element.querySelector('#cancel').onclick = (event) => {
    event.preventDefault();
    Object(__WEBPACK_IMPORTED_MODULE_1__handlers__["a" /* default */])({
      type: 'CANCEL_EDITING',
    });
  };

  element.querySelector('#photoLink').onkeypress = (event) => {
    if (event.code === 'Enter') {
      event.preventDefault();
    }
  };

  return element;
}


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getPost */
/* harmony export (immutable) */ __webpack_exports__["c"] = getPosts;
/* harmony export (immutable) */ __webpack_exports__["d"] = likePost;
/* harmony export (immutable) */ __webpack_exports__["a"] = createPost;
/* harmony export (immutable) */ __webpack_exports__["f"] = updatePost;
/* harmony export (immutable) */ __webpack_exports__["b"] = deletePost;
/* harmony export (immutable) */ __webpack_exports__["e"] = login;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_PhotoPost__ = __webpack_require__(4);


function buildRequest(url, params = {}) {
  const stringParams = Object.keys(params)
    .filter(key => typeof params[key] !== 'undefined')
    .reduce((res, key) => `${res}&${key}=${
      params[key] instanceof Object ? JSON.stringify(params[key]) : params[key]}`, 
    '');
  return `${url}?${stringParams.slice(1)}`;
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

function objectToFormData(obj) {
  const data = new FormData();
  Object.getOwnPropertyNames(obj)
    .forEach(key => data.append(key, obj[key]));
  return data;
}

function parsePost(rawPost) {
  const postObj = Object.assign({}, rawPost, { createdAt: new Date(rawPost.createdAt) });
  return new __WEBPACK_IMPORTED_MODULE_0__models_PhotoPost__["a" /* default */](postObj);
}

function getPost(id) {
  return fetch(buildRequest(`/posts/${id}`))
    .then(handleErrors)
    .then(response => response.json())
    .then(rawPost => parsePost(rawPost));
}

function getPosts(skip = 0, top = 10, filterConfig = {}) {
  return fetch(buildRequest('/posts', { top, skip, filterConfig }))
    .then(handleErrors)
    .then(response => response.json())
    .then(rawPosts => rawPosts.map(rawPost => parsePost(rawPost)));
}

function likePost(id, user) {
  return fetch(buildRequest(`/posts/${id}/like`, { user }), {
    method: 'PUT',
  })
    .then(handleErrors)
    .then(response => response.json())
    .then(json => parsePost(json));
}

function createPost(post) {
  return fetch('/posts', {
    method: 'POST',
    body: objectToFormData(post),
  })
    .then(handleErrors)
    .then(response => response.json())
    .then(json => parsePost(json));
}

function updatePost(id, post) {
  const data = objectToFormData(post);
  return fetch(`/posts/${id}`, {
    method: 'PUT',
    body: data,
  })
    .then(handleErrors)
    .then(response => response.json())
    .then(json => parsePost(json));
}

function deletePost(id) {
  return fetch(`/posts/${id}`, {
    method: 'DELETE',
  });
}

function login(email, password) {
  return fetch('/auth', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject();
  });
}


/***/ })
/******/ ]);