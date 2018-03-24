import { getState, setState } from './state';
import PhotoPosts from './components/PhotoPosts';

function showPosts() {
  const { posts, filterConfig, postsInViewCnt } = getState();
  PhotoPosts.render(posts.getPhotoPosts(0, postsInViewCnt, filterConfig));
};

function addPost(postObj) {
  if (getState().posts.addPhotoPost(postObj)) {
    showPosts();
    return true;
  }
  return false;
}

function showMorePosts() {
  getState().postsInViewCnt +=  10;
  showPosts();
}
function removePost(id) {
  if (getState().posts.removePhotoPost(id)) {
    PhotoPosts.remove(id);
    return true;
  }
  return false;
};

function filterPosts(filterConfig) {
  getState().filterConfig = filterConfig;
  getState().postsInViewCnt = 10;
  showPosts();
};

function editPost(id, options) {
  if (getState().posts.editPhotoPost(id, options)) {
    PhotoPosts.update(id, getState().posts.getPhotoPost(id));
    return true;
  }
  return false;
};

function likePost(id) {
  const post = getState().posts.getPhotoPost(id);
  if (post) {
    post.like(getState().user.name);
    PhotoPosts.update(id, post);
    return true;
  }
  return false;
};

function logout() {
    
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
    case 'FILTER_POSTS':
      filterPosts(action.filterConfig);
      break;
    case 'SHOW_MORE_POSTS':
      showMorePosts();
      break;
    case 'LOGOUT':
      logout();
      break;
    default:
      break;
  }
}