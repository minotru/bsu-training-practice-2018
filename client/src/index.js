import { PhotoPosts as PhotoPostsModel } from './models';
import { setState } from './state';
import handle from './handlers';

const initialState = {
  posts: PhotoPostsModel.fromArray([]),
  filterConfig: null,
  postsInViewCnt: 0,
  user: JSON.parse(localStorage.getItem('user')) || null,
  postsPerPage: 10,
};
setState(initialState);
handle({
  type: 'SET_PAGE',
  pageName: 'app',
});
