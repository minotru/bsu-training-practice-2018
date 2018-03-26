import { PhotoPosts as PhotoPostsModel } from './models';
import { setState } from './state';
import handle from './handlers';
import { users as exampleUsers, examplePosts } from './data';

const initialState = {
  posts: PhotoPostsModel.fromArray(examplePosts),
  filterConfig: null,
  postsInViewCnt: 3,
  user: {
    name: 'simon_karasik',
    avatarLink: 'avatar.jpg',
  },
  users: exampleUsers,
};

if (window.localStorage.getItem('posts')) {
  const rawPosts =
    JSON.parse(window.localStorage.getItem('posts'))
      .map(rawPost => Object.assign(
        {},
        rawPost,
        { createdAt: new Date(rawPost.createdAt) },
      ));
  const posts = PhotoPostsModel.fromArray(rawPosts);
  const users = JSON.parse(window.localStorage.getItem('users'));
  const user = JSON.parse(window.localStorage.getItem('user'));
  setState(Object.assign(
    initialState,
    {
      posts,
      users,
      user,
    },
  ));
} else {
  setState(initialState);
}
handle({
  type: 'SET_PAGE',
  pageName: 'app',
});
