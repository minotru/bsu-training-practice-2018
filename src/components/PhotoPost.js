import {stringToDOMElement} from "../util"
import {PhotoPost as PhotoPostModel} from "../models/PhotoPost"

/**
 * @param {PhotoPostModel} post
 */

export default function PhotoPost(post) {
    const pad = s => new String(s).padStart(2, '0'); 
    const formatDate = date => pad(date.getDate()) + "." + pad(date.getMonth() + 1) + "." + pad(date.getFullYear() % 100);
    const makeTag = tag => `<a class="post__tag">#${tag}</a>`;
    const makeTags = tags => {
        if (tags)
            return tags.reduce((s, tag) => s + makeTag(tag) + "\n", "");
    };

    const element =  stringToDOMElement(
    `<div class="post">
        <header class="post__header">
            <span class="post__author">${post.author}</span>
            <span class="post__header__right">
                <span class="post__date">${formatDate(post.createdAt)}</span>&nbsp
                <i class="material-icons">create</i>
                <i class="material-icons">close</i>
            </span>
        </header>
        <img class="post__photo" src="${post.photoLink}">
        <footer class="post__footer">
            <div class="post__like-panel">
                    <a class="post__like">
                        <i class="material-icons">favorite</i>
                    </a>
                <span class="post__likes-count">${post.likes.length}</span>
            </div>
            <div class="post__information">
                <div class="post__tags">
                    ${makeTags(post.tags)}
                </div>
                <p class="post__description">
                    ${post.description}
                </p>
            </div>
        </footer>
    </div>`);

    return element;
}