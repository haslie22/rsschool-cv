export default class BurgerMenu {
  constructor(burgerSelector, navSelector, linkSelector) {
    this.body = document.body;
    this.burger = document.querySelector(burgerSelector);
    this.nav = document.querySelector(navSelector);
    this.links = document.querySelectorAll(linkSelector);
    this.linkSelector = linkSelector;

    if (!this.burger || !this.nav) {
      console.error('BurgerMenu: elements not found');
      return;
    }

    this.addEventListeners();
  }

  addEventListeners() {
    this.burger.addEventListener('click', () => this.toggleMenu());

    this.nav.addEventListener('click', (e) => {
      if (e.target === this.nav || e.target.closest(this.linkSelector)) {
        this.closeMenu();
      }
    });
  }

  toggleMenu() {
    const isActive = this.burger.classList.toggle('active');

    this.nav.classList.toggle('active');
    this.body.classList.toggle('no-scroll', isActive);
  }

  closeMenu() {
    this.burger.classList.remove('active');
    this.nav.classList.remove('active');
    this.body.classList.remove('no-scroll');
  }
}
