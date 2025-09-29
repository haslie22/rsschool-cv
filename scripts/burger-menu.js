export default class BurgerMenu {
  constructor(burgerSelector, navSelector, linkSelector) {
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
      if (e.target === this.nav) {
        this.closeMenu();
      }

      if (e.target.closest(this.linkSelector)) {
        this.closeMenu();
      }
    });
  }

  toggleMenu() {
    this.burger.classList.toggle('active');
    this.nav.classList.toggle('active');
  }

  closeMenu() {
    this.burger.classList.remove('active');
    this.nav.classList.remove('active');
  }
}
