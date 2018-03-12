import {addClassIf, stringToDOMElement, renderIf} from '../util';

export default function Header({user}) {
    const element = stringToDOMElement(
    `<header class="header panel">
        <div class="header__user-wrapper header__sideblock">
            ${user ? 
            `<div class="header__user">
                <img class="header__user__avatar" src="${user.avatarLink}"> &nbsp
                <span class="header__user__name">${user.name}</span>
            </div>` : ""}
        </div>
        <h1 class="header__title">IMPRESSION</h1>
        <div class="header__sideblock header__logout-wrapper">
            <a class="header__logout">
                <i class="material-icons icon-button">exit_to_app</i>
            </a>
        </div>
    </header>
    `);
    return element;
}
