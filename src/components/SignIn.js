import { stringToDOMElement, wrap } from '../util';
import Footer from './Footer';

export default function SignIn({ onSignIn, checkCredentials }) {
  const form = `
    <form class="sign-in__form">
      <h1 class="sign-in__form__header bright">Sign in</h1>
      <input type="email" required class="sign-in__input" id="email" placeholder="Email Address">
      <input type="password" required class="sign-in__input" id="password" placeholder="Password">
      <button type="submit" class="button bright sign-in__button">Sign in</button>
    </form>  
  `.trim();

  const element = stringToDOMElement(`
    <div class="sign-in">
      <div class="sign-in__content">
        <h1 class="sign-in__header bright">Impression</h1>
        ${form}
      </div>
      ${wrap(Footer()).innerHTML}
    </div>
  `.trim());
  element.querySelector('.sign-in__form').onsubmit = (event) => {
    console.log('kek');
    event.preventDefault();
    const email = element.querySelector('#email').value;
    const password = element.querySelector('#password').value;
    if (checkCredentials(email, password)) {
      onSignIn(email, password);
    } else {
      alert('Wrong login or password');
    }
  };

  return element;
}
