import { PhotoPosts as PhotoPostsModel } from './models';
import PhotoPost from './components/PhotoPost';
import PostsNotFound from './components/PostsNotFound';
import App from './components/App';
import { removeChildren, render } from './util';

const state = {
  posts: new PhotoPostsModel(),
  postNodesCache: {},
  filterConfig: null,
  postsToShow: [],
  user: {
    name: 'simon_karasik',
    avatarLink: 'avatar.jpg',
  },
};

render(App({ user: state.user }), document.body);
state.postsWrapper = document.getElementById('posts');

const showPosts = function (posts) {
  removeChildren(state.postsWrapper);
  if (posts.length === 0) {
    state.postsWrapper.appendChild(PostsNotFound());
  } else {
    posts.forEach((post) => {
      if (!state.postNodesCache[post.id]) {
        state.postNodesCache[post.id] = PhotoPost({
          post, 
          user: state.user, 
        });
      }
      state.postsWrapper.appendChild(state.postNodesCache[post.id]);
    });
  }
};

const addPost = function (postObj) {
  if (state.posts.addPhotoPost(postObj)) {
    showPosts(state.posts.getPhotoPosts());
    return true;
  }
  return false;
};

const removePost = function (id) {
  if (state.posts.removePhotoPost()) {
    const node = state.postNodesCache[id];
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
    delete state.postNodesCache.id;
    return true;
  }
  return false;
};

const filterPosts = function (filterConfig) {
  const posts = state.posts.getPhotoPosts(0, 10, filterConfig);
  showPosts(posts);
};

const updatePost = function (id) {
  if (state.postNodesCache[id].parentNode) {
    const oldNode = state.postNodesCache[id];
    const node = PhotoPost({
      post: state.posts.getPhotoPost(id),
      user: state.user,
    });
    state.postNodesCache[id] = node;
    if (oldNode && oldNode.parentNode) {
      oldNode.parentNode.replaceChild(node, oldNode);
    }
  } else {
    state.postNodesCache[id] = null;
  }
};

const editPost = function (id, options) {
  if (state.posts.editPhotoPost(id, options)) {
    updatePost(id);
    return true;
  }
  return false;
};

const likePost = function (id) {
  const post = state.posts.getPhotoPost(id);
  if (post) {
    post.like(state.user.name);
    updatePost(id);
    return true;
  }
  return false;
};

Object.assign(window, {
  addPost,
  editPost,
  removePost,
  likePost,
  filterPosts,
});

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

examplePosts.forEach(post => addPost(post));
