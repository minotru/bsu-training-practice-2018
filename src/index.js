import { PhotoPosts as PhotoPostsModel } from './models';
import App from './components/App';
import { render } from './util';
import { setState } from './state';
import handle from './handlers';


const initialState = {
  page: 'app',
  posts: new PhotoPostsModel(),
  filterConfig: null,
  postsInViewCnt: 10,
  user: {
    name: 'simon_karasik',
    avatarLink: 'avatar.jpg',
  },
  guestUser: {
    name: 'Guest',
    avatarLink: 'user_icon.jpg',
    isGuest: true,
  },
  users: [
    {
      email: 'senich10@mail.ru',
      password: '505137s',
      avatarLink: 'avatar.jpg',
      id: '1',
    },
    {
      email: 'admin@example.org',
      password: 'admin',
      id: '0',
    },
  ],
};

setState(initialState);

render(App(), document.body);

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

examplePosts.forEach(post => handle({
  type: 'ADD_POST',
  post,
}));
