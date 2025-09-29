import BurgerMenu from './scripts/burger-menu.js';
import ScrollToTop from './scripts/scroll-to-top.js';

document.addEventListener('DOMContentLoaded', () => {
  new BurgerMenu('#burger', '#nav', '.header__link');
  new ScrollToTop({
    selector: '#backToTop',
    offset: 200,
  });
});
