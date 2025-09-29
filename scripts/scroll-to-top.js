export default class ScrollToTop {
  constructor(options = {}) {
    this.button = document.querySelector(options.selector);
    this.offset = options.offset || 200;

    if (!this.button) {
      console.warn('ScrollToTop: Button not found.');
      return;
    }

    this.init();
  }

  init() {
    window.addEventListener('scroll', this.toggleVisibility.bind(this));
    this.button.addEventListener('click', this.scrollToTop.bind(this));
  }

  toggleVisibility() {
    if (window.scrollY > this.offset) {
      this.button.style.display = 'flex';
      this.button.style.opacity = '1';
    } else {
      this.button.style.display = 'none';
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
