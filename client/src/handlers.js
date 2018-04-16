import { getState, setState } from './state';
import { removeChildren, render } from './util';
import PhotoPosts from './components/PhotoPosts';
import PageNotFound from './components/PageNotFound';
import SignIn from './components/SignIn';
import App from './components/App';
import Editor from './components/Editor';
import { default as PhotoPostsModel } from './models/PhotoPosts';
import * as api from './api';

function setPage(pageName, args) {
  removeChildren(document.body);
  let page = null;
  switch (pageName) {
    case 'signIn':
      page = SignIn();
      break;
    case 'app':
      page = App();
      break;
    case 'editor':
      page = Editor(args);
      break;
    default:
      page = PageNotFound();
  }
  render(page, document.body);
}

function loadMorePostsIfNeeded() {
  const { postsPerPage, postsInViewCnt, filterConfig } = getState();
  const availablePosts = getState().posts.getPhotoPosts(postsInViewCnt, postsPerPage, filterConfig);
  if (availablePosts.length < getState().postsPerPage) {
    let availablePostsCnt = availablePosts.length;
    return api.getPosts(postsInViewCnt, postsPerPage, filterConfig)
      .then((posts) => {
        posts.forEach(post => getState().posts.addPhotoPost(post));
        availablePostsCnt += posts.length;
        return availablePostsCnt;
      });
  }
  return Promise.resolve(postsPerPage);
}

function showPosts() {
  loadMorePostsIfNeeded()
    .then((availablePostsCnt) => {
      getState().postsInViewCnt += availablePostsCnt;
      const { posts, postsInViewCnt, filterConfig } = getState();
      PhotoPosts.render(posts.getPhotoPosts(0, postsInViewCnt, filterConfig));
    });
}

function showMorePosts() {
  showPosts();
}
function removePost(id) {
  api.deletePost(id)
    .then(() => {
      PhotoPosts.remove(id);
      getState().postsInViewCnt--;
      getState().posts.removePhotoPost(id);
    })
    .catch(err => console.log(err));
}

function filterPosts(filterConfig) {
  getState().filterConfig = filterConfig;
  getState().postsInViewCnt = 0;
  showPosts();
}

function likePost(id) {
  api.likePost(id, getState().user.name)
    .then(() => {
      getState().posts.getPhotoPost(id).like(getState().user.name);
    });
}

function editPost(id) {
  setPage('editor', getState().posts.getPhotoPost(id));
}

function createPost() {
  setPage('editor');
}

function savePost(postObj) {
  if (!postObj.id) {
    const postObj1 = Object.create({}, postObj, { author: getState().user.name });
    api.createPost(postObj1)
      .then((post) => {
        getState().posts.addPhotoPost(post);
        setPage('app');
      });
  } else {
    api.updatePost(postObj)
      .then((post) => {
        getState().posts.editPhotoPost(post.id, post);
        setPage('app');
      });
  }
}

function logout() {
  getState().user = null;
  getState().posts = PhotoPostsModel.fromArray([]);
  getState().postsInViewCnt = 0;
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
    getState().user = null;
    onLoggedIn();
  } else {
    api.login(email, password)
      .then((user) => {
        getState().user = user;
        onLoggedIn();
      })
      .catch(onError);
  }
}

export default function handle(action) {
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
      getState().postsInViewCnt = 0;
      getState().filterConfig = null;
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
