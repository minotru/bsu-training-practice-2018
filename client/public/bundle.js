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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_PhotoPosts__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_PageNotFound__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_SignIn__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_App__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Editor__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_PhotoPost__ = __webpack_require__(3);









function setPage(pageName, args) {
  Object(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* removeChildren */])(document.body);
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
  const { posts, filterConfig, postsInViewCnt } = Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])();
  __WEBPACK_IMPORTED_MODULE_2__components_PhotoPosts__["a" /* default */].render(posts.getPhotoPosts(0, postsInViewCnt, filterConfig));
}

function addPost(postObj) {
  if (Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().posts.addPhotoPost(postObj)) {
    showPosts();
    return true;
  }
  Object(__WEBPACK_IMPORTED_MODULE_0__state__["b" /* setState */])({ posts: Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().posts });
  return false;
}

function showMorePosts() {
  Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().postsInViewCnt += 10;
  showPosts();
}
function removePost(id) {
  if (Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().posts.removePhotoPost(id)) {
    __WEBPACK_IMPORTED_MODULE_2__components_PhotoPosts__["a" /* default */].remove(id);
    Object(__WEBPACK_IMPORTED_MODULE_0__state__["b" /* setState */])({ posts: Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().posts });
    return true;
  }
  return false;
}

function filterPosts(filterConfig) {
  Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().filterConfig = filterConfig;
  Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().postsInViewCnt = 10;
  showPosts();
}

function likePost(id) {
  const post = Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().posts.getPhotoPost(id);
  if (post) {
    post.like(Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().user.name);
    __WEBPACK_IMPORTED_MODULE_2__components_PhotoPosts__["a" /* default */].update(id, post);
    Object(__WEBPACK_IMPORTED_MODULE_0__state__["b" /* setState */])({ posts: Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().posts });
    return true;
  }
  return false;
}

function editPost(id) {
  setPage('editor', Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().posts.getPhotoPost(id));
}

function createPost() {
  setPage('editor');
}

function savePost(postObj) {
  let post;
  if (postObj.id) {
    Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().posts.editPhotoPost(postObj.id, postObj);
    post = Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().posts.getPhotoPost(postObj.id);
  } else {
    post = new __WEBPACK_IMPORTED_MODULE_7__models_PhotoPost__["a" /* default */](Object.assign(
      {
        createdAt: new Date(),
        author: Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().user.name,
      },
      postObj,
    ));
    Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().posts.addPhotoPost(post);
  }
  Object(__WEBPACK_IMPORTED_MODULE_0__state__["b" /* setState */])({ posts: Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().posts });
  setPage('app');
}

function logout() {
  Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().user = null;
  Object(__WEBPACK_IMPORTED_MODULE_0__state__["b" /* setState */])({ user: Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().user });
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
    Object(__WEBPACK_IMPORTED_MODULE_0__state__["b" /* setState */])({ user: Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().user });
    onLoggedIn();
  } else {
    const foundUser = Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().users.find(user =>
      (user.email === email && user.password === password));
    if (foundUser) {
      Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().user = foundUser;
      Object(__WEBPACK_IMPORTED_MODULE_0__state__["b" /* setState */])({ user: Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().user });
      onLoggedIn();
    } else {
      onError();
    }
  }
}

function handle(action) {
  switch (action.type) {
    case 'LIKE_POST':
      likePost(action.id);
      break;
    case 'ADD_POST':
      addPost(action.post);
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
      Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().postsInViewCnt = 10;
      Object(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* getState */])().filterConfig = null;
      showPosts();
      break;
    }
    case 'EDIT_POST':
      editPost(action.id);
      break;
    case 'SAVE_POST':
      savePost(action.post, action.editor);
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
  if (stateUpdate.users) {
    window.localStorage.setItem('users', JSON.stringify(stateUpdate.users));
  }
  if (stateUpdate.hasOwnProperty('user')) {
    window.localStorage.setItem('user', JSON.stringify(stateUpdate.user));
  }
  if (stateUpdate.posts) {
    window.localStorage.setItem('posts',
      JSON.stringify(stateUpdate.posts.photoPosts)
    );
  }
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function isString(s) {
  return typeof s === 'string' || s instanceof String;
}

let idCnt = 0;

class PhotoPost {
/**
  * @param {String} description
  * @param {Date} createdAt
  * @param {String} author
  * @param {String} photoLink
  * @param {[String]} tags
  * @param {[String]} likes
  */
  constructor({ description, createdAt, author, photoLink, tags = [], likes = [], id = ''}) {
    this.id = id || PhotoPost.nextId();
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

  static nextId() {
    return (idCnt++).toString();
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
/* 4 */
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PhotoPosts;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PhotoPost__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PostsNotFound__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__EditPost__ = __webpack_require__(6);





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

// PhotoPosts.create = function () {
//   element.removeChild(element.firstChild);
//   element.appendChild(EditPost());
// };

// PhotoPosts.edit = function (post) {
//   element.removeChild(element.firstChild);
//   element.appendChild(EditPost(post));
// };

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
/* 6 */
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
        <div class="post__tags">
          Tags:
          <span id="tags"></span>
          <a class="post__tag post__tag--add input">Add tag</a>
        </div>
        <div>
          Description:
          <div>
            <textarea class="input post__description post__description--editable">${post.description}</textarea>
          </div>
        </div>
        <button type="submit" class="input bright">Save</button>
        <button id="cancel" class="input bright">Cancel</button>
    </div>
  `.trim());
  const tagsWrapper = element.querySelector('#tags');
  post.tags.forEach(tag => tagsWrapper.appendChild(makeTag(tag)));

  element.querySelector('#photoLink').onblur = (event) => {
    const url = event.target.value;
    element.querySelector('.post__photo').src = url;
  };

  element.querySelector('.post__tag--add').onclick = () => {
    const newTag = makeTag('');
    tagsWrapper.appendChild(newTag);
    newTag.focus();
  };

  element.querySelector('.post__edit-form').onsubmit = (event) => {
    event.preventDefault();
    const tags = Array.prototype.map.call(
      element.querySelectorAll('.post__tag--editable'),
      node => node.innerText,
    );
    const photoLink = element.querySelector('#photoLink').value;
    const description = element.querySelector('.post__description').value;
    Object(__WEBPACK_IMPORTED_MODULE_1__handlers__["a" /* default */])({
      type: 'SAVE_POST',
      post: Object.assign(post, {
        tags,
        photoLink,
        description,
      }),
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Header;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__handlers__ = __webpack_require__(1);




function Header() {
  const user = Object(__WEBPACK_IMPORTED_MODULE_1__state__["a" /* getState */])().user || {
    name: 'Guest',
    avatarLink: 'user_icon.png',
  };
  
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data__ = __webpack_require__(19);





const initialState = {
  posts: __WEBPACK_IMPORTED_MODULE_0__models__["a" /* PhotoPosts */].fromArray(__WEBPACK_IMPORTED_MODULE_3__data__["a" /* examplePosts */]),
  filterConfig: null,
  postsInViewCnt: 3,
  user: {
    name: 'simon_karasik',
    avatarLink: 'avatar.jpg',
  },
  users: __WEBPACK_IMPORTED_MODULE_3__data__["b" /* users */],
};

if (window.localStorage.getItem('posts')) {
  const rawPosts =
    JSON.parse(window.localStorage.getItem('posts'))
      .map(rawPost => Object.assign(
        {},
        rawPost,
        { createdAt: new Date(rawPost.createdAt) },
      ));
  const posts = __WEBPACK_IMPORTED_MODULE_0__models__["a" /* PhotoPosts */].fromArray(rawPosts);
  const users = JSON.parse(window.localStorage.getItem('users'));
  const user = JSON.parse(window.localStorage.getItem('user'));
  Object(__WEBPACK_IMPORTED_MODULE_1__state__["b" /* setState */])(Object.assign(
    initialState,
    {
      posts,
      users,
      user,
    },
  ));
} else {
  Object(__WEBPACK_IMPORTED_MODULE_1__state__["b" /* setState */])(initialState);
}
Object(__WEBPACK_IMPORTED_MODULE_2__handlers__["a" /* default */])({
  type: 'SET_PAGE',
  pageName: 'app',
});


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PhotoPost__ = __webpack_require__(3);
/* unused harmony reexport PhotoPost */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PhotoPosts__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__PhotoPosts__["a"]; });




/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PhotoPost__ = __webpack_require__(3);


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
  addPhotoPost(_post) {
    let post = _post;
    if (!(post instanceof __WEBPACK_IMPORTED_MODULE_0__PhotoPost__["a" /* default */])) {
      post = new __WEBPACK_IMPORTED_MODULE_0__PhotoPost__["a" /* default */](_post);
    }
    if (!__WEBPACK_IMPORTED_MODULE_0__PhotoPost__["a" /* default */].validate(post)) {
      return false;
    }
    this.photoPosts.push(post);
    this.isSorted = false;
    return post;
  }

  getAllPosts() {
    return this.photoPosts.slice();
  }

  getPhotoPostsCnt() {
    return this.photoPosts.length;
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
  editPhotoPost(id, { description, tags, photoLink }) {
    const ind = this.photoPosts.findIndex(post => post.id === id);
    if (ind === -1) {
      return false;
    }
    const editedPost = Object.assign(new __WEBPACK_IMPORTED_MODULE_0__PhotoPost__["a" /* default */]({}), this.photoPosts[ind]);
    if (typeof photoLink !== 'undefined') {
      editedPost.photoLink = photoLink;
    }
    if (tags) {
      editedPost.tags = tags;
    }
    if (typeof description !== 'undefined') {
      editedPost.description = description;
    }
    if (!__WEBPACK_IMPORTED_MODULE_0__PhotoPost__["a" /* default */].validate(editedPost)) {
      return false;
    }
    this.photoPosts[ind] = editedPost;
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
/* 11 */
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
/* 12 */
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
/* 13 */
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = SignIn;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Footer__ = __webpack_require__(4);
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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = App;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Content__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Footer__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header__ = __webpack_require__(7);




function App() {
  return [Object(__WEBPACK_IMPORTED_MODULE_2__Header__["a" /* default */])(), Object(__WEBPACK_IMPORTED_MODULE_0__Content__["a" /* default */])(), Object(__WEBPACK_IMPORTED_MODULE_1__Footer__["a" /* default */])()];
}


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Content;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__handlers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PhotoPosts__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Filter__ = __webpack_require__(17);






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
/* 17 */
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
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Editor;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EditPost__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Footer__ = __webpack_require__(4);





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
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return users; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return examplePosts; });
const examplePosts = [
  {
    author: 'simon_karasik',
    description: 'That was a wonderful sunset in the middle of summer.',
    createdAt: new Date(2018, 2, 19),
    photoLink: 'photo1.JPEG',
    tags: ['beautiful', 'sunset', 'worthten'], 
  },
  {
    author: 'Alex Mukharski',
    description: 'post #2',
    createdAt: new Date(2018, 0, 0),
    photoLink: 'https://scontent-frx5-1.cdninstagram.com/vp/83a88bb2d1dd5aa7deee0029f2f08e53/5B3087E3/t51.2885-15/e35/28152259_336454203529783_1822968559202992128_n.jpg',
    tags: ['tag1', 'tag2', 'tag3'],
    likes: ['simon_karasik', 'Alex Kovalchuk'],
  },
  {
    author: 'Alex Kovalchuk',
    description: 'post #3',
    createdAt: new Date(2017, 0, 5),
    photoLink: 'https://scontent-frx5-1.cdninstagram.com/vp/a0915c1f5dc07ee4b473032fd81a4b11/5B3A2469/t51.2885-15/e35/26864741_2070912839806455_6365971865814433792_n.jpg',
    tags: ['hello', "it's", 'me', 'tag2'],
  },
];

const users = [
  {
    email: 'senich10@mail.ru',
    name: 'simon_karasik',
    password: '505137s',
    avatarLink: 'avatar.jpg',
    id: '1',
  },
  {
    email: 'admin@example.org',
    password: 'admin',
    name: 'admin',
    id: '0',
  },
];




/***/ })
/******/ ]);