import { stringToDOMElement, removeChildren } from '../util';
import PhotoPost from './PhotoPost';
import PostsNotFound from './PostsNotFound';
import EditPost from './EditPost';

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

PhotoPosts.edit = function (id, post) {
  const node = findNode(id);
  node.parentNode.replaceChild(EditPost(post), node);
};

PhotoPosts.save = function (post, editor) {
  editor.parentNode.replaceChild(PhotoPost({ post }), editor);
};

PhotoPosts.remove = function (id) {
  const node = findNode(id);
  if (node) {
    node.parentNode.removeChild(node);
  }
};

PhotoPosts.create = function () {
  element.firstChild.insertBefore(
    EditPost(),
    element.firstChild.firstChild,
  );
}

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

