import {stringToDOMElement} from "../util"

export default function NoPostsFound() {
    const element = stringToDOMElement(
    `<div class = "post">
        No posts found.
    </div>`);
    return element;
}