import { PhotoPosts as PhotoPostsModel } from './models';
import { setState } from './state';
import handle from './handlers';
import { users, examplePosts } from './data';

const initialState = {
  page: 'app',
  posts: PhotoPostsModel.fromArray(examplePosts),
  filterConfig: null,
  postsInViewCnt: 1,
  user: {
    name: 'simon_karasik',
    avatarLink: 'avatar.jpg',
  },
  users,
};

setState(initialState);
handle({
  type: 'SET_PAGE',
  pageName: 'app',
});
