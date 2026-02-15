export default class HeaderOffset {
  constructor(headerSelector) {
    this.header = document.querySelector(headerSelector);

    if (!this.header) {
      console.error('HeaderOffset: header not found');
      return;
    }

    this.init();
  }

  init() {
    this.updateOffset();

    window.addEventListener('resize', () => this.updateOffset());
    window.addEventListener('load', () => this.updateOffset());
  }

  updateOffset() {
    const height = this.header.getBoundingClientRect().height;

    document.documentElement.style.setProperty(
      '--header-offset',
      `${height}px`,
    );
  }
}
