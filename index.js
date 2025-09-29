import BurgerMenu from './scripts/burger-menu.js';
import ScrollToTop from './scripts/scroll-to-top.js';
import LanguagesProgress from './scripts/languages-progress.js';
import ViewportAnimator from './scripts/viewport-animator.js';

document.addEventListener('DOMContentLoaded', () => {
  new BurgerMenu('#burger', '#nav', '.header__link');
  new ScrollToTop({
    selector: '#backToTop',
  });
  new LanguagesProgress('.languages__bar');
  new ViewportAnimator({
    selector: '.animation-item',
    once: true,
  });
});
