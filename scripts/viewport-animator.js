export default class ViewportAnimator {
  constructor({
    selector,
    activeClass = '_active',
    endedClass = '_animation-ended',
    once = false,
    root = null,
    rootMargin = '0px 0px -20%', // NB! -20% to trigger animation a bit earlier
    threshold = 0,
  } = {}) {
    this.activeClass = activeClass;
    this.endedClass = endedClass;
    this.once = once;

    this.items = Array.from(document.querySelectorAll(selector));
    if (!this.items.length) return;

    this.observer = new IntersectionObserver(this.onIntersect.bind(this), {
      root,
      rootMargin,
      threshold,
    });

    this.items.forEach((el) =>
      requestAnimationFrame(() => this.observer.observe(el)),
    );
  }

  onIntersect(entries) {
    entries.forEach((entry) => {
      const el = entry.target;

      if (entry.isIntersecting) {
        el.classList.add(this.activeClass);
        if (this.once || el.classList.contains(this.endedClass)) {
          this.observer.unobserve(el);
        }
      } else {
        if (!this.once && !el.classList.contains(this.endedClass)) {
          el.classList.remove(this.activeClass);
        }
      }
    });
  }
}
