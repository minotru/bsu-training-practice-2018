import { stringToDOMElement, addClassIf } from '../util';
/**
 * @param {PhotoPostModel} post
 * @param {Store} store
 */

export default function PhotoPost({ post, onEdit, onRemove, user, onLike }) {
  const pad = s => new String(s).padStart(2, '0');
  const formatDate = date => pad(date.getDate()) + '.' + pad(date.getMonth() + 1) + '.' + pad(date.getFullYear() % 100);
  const makeTag = tag => `<a class="post__tag">#${tag}</a>`;
  const makeTags = tags =>
    tags.reduce((s, tag) => s + makeTag(tag) + '\n', '');
  const userName = user ? user.name : null;
  const isAuthor = userName;
  const isLiked = post.likes.indexOf(userName) !== -1;
  const element = stringToDOMElement(`
    <div class="post">
      <header class="post__header">
       <span class="post__author">${post.author}</span>
       <span class="post__header__right">
         <span class="post__date">${formatDate(post.createdAt)}</span>&nbsp
         <span class = ${addClassIf(!isAuthor, 'hidden')}>
          <i class="material-icons icon-button post__header__edit">create</i>
          <i class="material-icons icon-button post__header__remove">close</i>
         </span>
       </span>
      </header>
      <img class="post__photo" src="${post.photoLink}">
      <footer class="post__footer">
       <div class="post__like-panel">
         <i class="material-icons post__like ${addClassIf(isLiked, 'post__like--liked')}">favorite</i>
         <span class="post__likes-count">${post.likes.length}</span>
       </div>
       <div class="post__information">
         <div class="post__tags">
          ${post.tags ? makeTags(post.tags) : ''}
         </div>
         <p class="post__description">
          ${post.description}
         </p>
       </div>
      </footer>
    </div>
    `.trim());
  element.querySelector('.post__header__edit').onclick = onEdit;
  element.querySelector('.post__header__remove').onclick = onRemove;
  element.querySelector('.post__like').onclick = onLike;
  return element;
}
