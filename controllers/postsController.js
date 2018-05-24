const fs = require('fs');
const PhotoPost = require('../models/PhotoPost');
const PhotoPosts = require('../models/PhotoPosts');

const filePath = './data/posts.json';
const content = JSON.parse(fs.readFileSync(filePath));
const postsRaw = content.posts.map(post =>
  Object.assign({}, post, { createdAt: new Date(post.createdAt) }));
const posts = PhotoPosts.fromArray(postsRaw);

PhotoPost.resetIdCounter(content.idCounter);

function updateFile() {
  fs.writeFile(filePath, JSON.stringify({
    idCounter: PhotoPost.getIdCounter(),
    posts: posts.getArray(),
  }), () => {});
}

function createPost(postNoDate) {
  const post = Object.assign({}, postNoDate, { createdAt: new Date() });
  const createdPost = posts.addPhotoPost(post);
  if (createdPost) {
    updateFile();
    return createdPost;
  }
  return false;
}

function updatePost(id, fields) {
  if (posts.editPhotoPost(id, fields)) {
    updateFile();
    return posts.getPhotoPost(id);
  }
  return false;
}

function getPosts(skip, top, filterConfig) {
  return posts.getPhotoPosts(skip, top, filterConfig);
}

function getPost(id) {
  return posts.getPhotoPost(id);
}

function removePost(id) {
  const success = posts.removePhotoPost(id);
  if (success) {
    updateFile();
    return true;
  }
  return false;
}

function likePost(id, user) {
  const post = posts.getPhotoPost(id);
  if (post) {
    post.like(user);
    updateFile();
    return posts.getPhotoPost(id);
  }
  return false;
}

module.exports = {
  likePost,
  updatePost,
  removePost,
  createPost,
  getPost,
  getPosts,
};

