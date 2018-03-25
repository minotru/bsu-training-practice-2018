let state = {

};

export function getState() {
  return state;
}

export function setState(stateUpdate) {
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
