import { stringToDOMElement } from '../util';
import { getState } from '../state';
import handle from '../handlers';
import PhotoPosts from './PhotoPosts';
import Filter from './Filter';

export default function Content() {
  const { user } = getState();

  const element = stringToDOMElement(`
    <div class="content main-content">
      <aside class="sidebar">
        ${!user.isGuest ? `
        <ul class="menu menu-panel">
          <li class="menu__item">
            <a href="/posts" class="bright">Impressions</a>
          </li>
          <li class="menu__item bright">
            <a href="/posts/user" class="bright">My impressions</a>
          </li>
          <li class="menu__item bright">
            <a href="/posts/create" class="bright">New impression</a>
          </li>
          <li class="menu__item">
            <a href="/user" class="bright">My account</a>
          </li>
        </ul>`.trim() : ''}
      </aside>
      <main class="main" id = "main">
        <button class="show-more-button button">Load more...</button>
      </main>
    </div>
  `.trim());

  const main = element.querySelector('#main');
  main.insertBefore(PhotoPosts(), main.firstChild);
  element.querySelector('.sidebar').appendChild(Filter());

  element.querySelector('.show-more-button').onclick = () => {
    handle({
      type: 'SHOW_MORE_POSTS',
    });
  };

  return element;
}
