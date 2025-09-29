export default class LanguagesProgress {
  constructor(selector, threshold = 0.3) {
    this.bars = document.querySelectorAll(selector);

    this.observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            const finalWidth = `${bar.getAttribute('data-width')}%`;
            bar.style.width = finalWidth;
            observer.unobserve(bar);
          }
        });
      },
      { threshold },
    );

    this.init();
  }

  init() {
    this.bars.forEach((bar) => this.observer.observe(bar));
  }
}
