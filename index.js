import BurgerMenu from './scripts/burger-menu.js';

document.addEventListener('DOMContentLoaded', () => {
  new BurgerMenu('#burger', '#nav', '.header__link');
});
