import PhotoPost from './models/PhotoPost';

function buildRequest(url, params = {}) {
  const stringParams = Object.keys(params)
    .filter(key => typeof params[key] !== 'undefined')
    .reduce((res, key) => res + '&' + key + '=' + JSON.stringify(params[key]), '');
  return url + '?' + stringParams.slice(1);
}

function parsePost(rawPost) {
  const postObj =  Object.assign({}, rawPost, { createdAt: new Date(rawPost.createdAt) });
  return new PhotoPost(postObj);
}

export function getPost(id) {
  return fetch(buildRequest(`/posts/${id}`))
    .then(response => response.json())
    .then(rawPost => parsePost(rawPost));
}

export function getPosts(skip = 0, top = 10, filterConfig = {}) {
  return fetch(buildRequest('/posts', { top, skip, filterConfig }))
    .then(response => response.json())
    .then(rawPosts => rawPosts.map(rawPost => parsePost(rawPost)));
}

export function likePost(id, user) {
  return fetch(buildRequest(`/posts/${id}/like`, { user }), {
    method: 'PUT',
  });
}

export function createPost(post) {
  return fetch('/posts', {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(response => parsePost(response.json()));
}

export function updatePost(id, fields) {
  return fetch(`/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify(fields),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(response => parsePost(response.json()));
}

export function deletePost(id) {
  return fetch(`/posts/${id}`, {
    method: 'DELETE',
  });
}
