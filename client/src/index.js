import { PhotoPosts as PhotoPostsModel } from './models';
import { setState } from './state';
import handle from './handlers';
import { users as exampleUsers } from './data';

const initialState = {
  posts: PhotoPostsModel.fromArray([]),
  filterConfig: null,
  postsInViewCnt: 0,
  user: null,
  users: exampleUsers,
  postsPerPage: 10,
};
setState(initialState);
handle({
  type: 'SET_PAGE',
  pageName: 'app',
});
