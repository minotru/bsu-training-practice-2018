import { stringToDOMElement } from '../util';
import { getState } from '../state';
import handle from '../handlers';

function makeTag(tag) {
  const element = stringToDOMElement(`
    <span 
      type="text" 
      class="post__tag post__tag--editable input" 
      contenteditable="true">
      ${tag}
    </span>&nbsp
  `.trim());

  element.onkeypress = (event) => {
    if (event.code === 'Enter') {
      event.preventDefault();
      event.target.blur();
    }
  };

  element.onblur = (event) => {
    if (event.target.innerText.length === 0) {
      event.target.parentNode.removeChild(event.target);
    }
  };
  return element;
}

export default function EditPost(post = {
  tags: [],
  photoLink: '',
  description: '',
}, postNode) {
  const element = stringToDOMElement(`
    <div class="post">
      <form class="post__edit-form">
        <img class="post__photo" alt="Photo preview" src=${post.photoLink} />
        <div>Photo link: <input id="photoLink" type="text" value="${post.photoLink}" class="input"/></div>
        <div class="post__tags">
          Tags:
          <span id="tags"></span>
          <a class="post__tag post__tag--add input">Add tag</a>
        </div>
        <div>
          Description:
          <div>
            <textarea class="input post__description post__description--editable">${post.description}</textarea>
          </div>
        </div>
        <button type="submit" class="input bright">Save</button>
        <button id="cancel" class="input bright">Cancel</button>
    </div>
  `.trim());
  const tagsWrapper = element.querySelector('#tags');
  post.tags.forEach(tag => tagsWrapper.appendChild(makeTag(tag)));

  element.querySelector('#photoLink').onblur = (event) => {
    const url = event.target.value;
    element.querySelector('.post__photo').src = url;
  };

  element.querySelector('.post__tag--add').onclick = () => {
    const newTag = makeTag('');
    tagsWrapper.appendChild(newTag);
    newTag.focus();
  };

  element.querySelector('.post__edit-form').onsubmit = (event) => {
    event.preventDefault();
    const tags = Array.prototype.map.call(
      element.querySelectorAll('.post__tag--editable'),
      node => node.innerText,
    );
    const photoLink = element.querySelector('#photoLink').value;
    const description = element.querySelector('.post__description').value;
    handle({
      type: 'SAVE_POST',
      post: Object.assign(post, {
        tags,
        photoLink,
        description,
      }),
      editor: element,
    });
  };

  element.querySelector('#cancel').onclick = (event) => {
    event.preventDefault();
    if (postNode) {
      element.parentNode.replaceChild(postNode, element);
    } else {
      element.parentElement.removeChild(element);
    }
  };

  return element;
}
