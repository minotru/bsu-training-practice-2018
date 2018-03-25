import { getState, setState } from './state';
import { removeChildren, render } from './util';
import PhotoPosts from './components/PhotoPosts';
import PhotoPost from './components/PhotoPost';
import PageNotFound from './components/PageNotFound';
import SignIn from './components/SignIn';
import App from './components/App';
import { default as PhotoPostModel } from './models/PhotoPost';

function showPosts() {
  const { posts, filterConfig, postsInViewCnt } = getState();
  PhotoPosts.render(posts.getPhotoPosts(0, postsInViewCnt, filterConfig));
}

function addPost(postObj) {
  if (getState().posts.addPhotoPost(postObj)) {
    showPosts();
    return true;
  }
  return false;
}

function showMorePosts() {
  getState().postsInViewCnt += 10;
  showPosts();
}
function removePost(id) {
  if (getState().posts.removePhotoPost(id)) {
    PhotoPosts.remove(id);
    return true;
  }
  return false;
}

function filterPosts(filterConfig) {
  getState().filterConfig = filterConfig;
  getState().postsInViewCnt = 10;
  showPosts();
}

function likePost(id) {
  const post = getState().posts.getPhotoPost(id);
  if (post) {
    post.like(getState().user.name);
    PhotoPosts.update(id, post);
    return true;
  }
  return false;
}

function editPost(id) {
  PhotoPosts.edit(id, getState().posts.getPhotoPost(id));
}

function createPost() {
  PhotoPosts.create();
}

function savePost(postObj, editor) {
  let post;
  if (postObj.id) {
    getState().posts.editPhotoPost(postObj.id, postObj);
    post = getState().posts.getPhotoPost(postObj.id);
  } else {
    post = new PhotoPostModel(Object.assign(
      {
        createdAt: new Date(),
        author: getState().user.name,
      },
      postObj,
    ));
    getState().posts.addPhotoPost(post);
  }
  PhotoPosts.save(post, editor);
}

function setPage(pageName) {
  removeChildren(document.body);
  let page = null;
  switch (pageName) {
    case 'signIn':
      page = SignIn();
      break;
    case 'app':
      page = App();
      break;
    default:
      page = PageNotFound();
  }
  render(page, document.body);
}

function logout() {
  getState().user = getState().guestUser;
}

function login({
  email,
  password,
  onLoggedIn,
  onError,
  asGuest,
}) {
  if (asGuest) {
    getState().user = getState().guestUser;
    onLoggedIn();
  } else {
    const foundUser = getState().users.find(user =>
      (user.email === email && user.password === password));
    if (foundUser) {
      getState().user = foundUser;
      onLoggedIn();
    } else {
      onError();
    }
  }
}

export default function handle(action) {
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
      getState().postsInViewCnt = 1;
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
