const menuBtnRef = document.querySelector('.header__btn-burger');
const mobileMenuRef = document.querySelector('.header__menu-container');

menuBtnRef.addEventListener('click', () => {
  const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

  menuBtnRef.classList.toggle('header__btn-burger--opened');
  menuBtnRef.setAttribute('aria-expanded', !expanded);

  mobileMenuRef.classList.toggle('header__menu-container--opened');
  document.body.classList.toggle('open-menu');
});
