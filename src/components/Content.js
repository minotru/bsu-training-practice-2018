import { stringToDOMElement } from '../util';
import { getState } from '../state';
import handle from '../handlers';
import PhotoPosts from './PhotoPosts';

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
        <div class="search menu-panel">
          <form>
            <span class="search__title bright">Filter</span>
            <div class="search__panel">
              <div class="search__option">
              <input type="text" id="author" class="search__input" placeholder="By author">
            </div>
            <div class="search__option">
              <input type="text" id="date" class="search__input" placeholder="By date">
            </div>
            <div class="search__option">
              <input type="text" id="tags" class="search__input" placeholder="By tag">
            </div>
            <button class="search__button button">Filter</button>
          </form>
        </div>
      </div>
    </aside>
    <main class="main" id = "main">
      <button class="show-more-button button">Load more...</button>
    </main>
  </div>
  `.trim());

  const main = element.querySelector('#main');
  main.insertBefore(PhotoPosts(), main.firstChild);
  element.querySelector('.search__button').onclick = () => {
    const date = element.querySelector('#date').value;
    const tags = element.querySelector('#tags').value.split(/[#, ]/).filter(s => s !== '');
    const author = element.querySelector('#author').value;
    handle({
      type: 'FILTER_POSTS',
      filterConfig: {
        date,
        tags,
        author,
      },
    });
  };

  element.querySelector('.show-more-button').onclick = () => {
    handle({
      type: 'SHOW_MORE_POSTS',
    });
  };

  return element;
}
