export default class BurgerMenu {
  constructor(burgerSelector, navSelector, linkSelector) {
    this.burger = document.querySelector(burgerSelector);
    this.nav = document.querySelector(navSelector);
    this.links = document.querySelectorAll(linkSelector);

    if (!this.burger || !this.nav) {
      console.error('BurgerMenu: elements not found');
      return;
    }

    this.addEventListeners();
  }

  addEventListeners() {
    this.burger.addEventListener('click', () => this.toggleMenu());

    this.links.forEach((link) =>
      link.addEventListener('click', () => this.closeMenu()),
    );
  }

  toggleMenu() {
    this.burger.classList.toggle('active');
    this.nav.classList.toggle('active');
    console.log('Burger menu toggled');
  }

  closeMenu() {
    this.burger.classList.remove('active');
    this.nav.classList.remove('active');
  }
}
