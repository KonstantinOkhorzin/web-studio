const refs = {
  openModalBtn: document.querySelector('[data-open-modal]'),
  closeModalBtn: document.querySelector('[data-close-modal]'),
  backdrop: document.querySelector('[data-backdrop]'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.backdrop.classList.toggle('backdrop--hidden');
  document.body.classList.toggle('open-modal');
}

const menuBtnRef = document.querySelector('.header__btn-burger');
// const mobileMenuRef = document.querySelector('.header__icon-burger');

menuBtnRef.addEventListener('click', () => {
  const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

  menuBtnRef.classList.toggle('header__btn-burger--opened');
  menuBtnRef.setAttribute('aria-expanded', !expanded);

  // mobileMenuRef.classList.toggle('is-open');
});
