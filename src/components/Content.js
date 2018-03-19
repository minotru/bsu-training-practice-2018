import { stringToDOMElement } from '../util';

export default function Content({ user }) {
  return stringToDOMElement(
  `<div class="content">
   <aside class="sidebar">
    ${user ?
    `<ul class="menu menu-panel">
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
    </ul>` : ''}
    <div class="search menu-panel">
    <span class="search__title bright">Filter</span>
    <div class="search__panel">
      <div class="search__option">
       <input type="text" class="search__input" placeholder="By author">
      </div>
      <div class="search__option">
       <input type="text" class="search__input" placeholder="By date">
      </div>
      <div class="search__option">
       <input type="text" class="search__input" placeholder="By tag">
      </div>
      <button class="search__button button">Filter</button>
    </div>
    </div>
   </aside>
   <main class="main" id = "main">
    <div id = "posts">

    </div>
    <button class="load-more-button button">Load more...</button>
   </main>
  </div>`);
}
