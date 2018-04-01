import { stringToDOMElement, removeChildren } from '../util';
import PhotoPost from './PhotoPost';
import PostsNotFound from './PostsNotFound';

let element;

export default function PhotoPosts() {
  element = stringToDOMElement(`
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
    node.parentNode.replaceChild(PhotoPost({ post }), node);
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
  removeChildren(element);
  const wrapper = document.createElement('div');
  if (posts.length === 0) {
    wrapper.appendChild(PostsNotFound());
  } else {
    posts.forEach((post) => {
      wrapper.appendChild(PhotoPost({ post }));
    });
  }
  element.appendChild(wrapper);
};

