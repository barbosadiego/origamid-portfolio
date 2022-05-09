export default function initMenu() {
  const menuBtn = document.querySelector('[data-menu]');
  const menu = document.querySelector('.menu');
  const links = document.querySelectorAll('.menu a');

  function showMenu() {
    menu.classList.toggle('active');
  }

  function removeActive() {
    menu.classList.remove('active');
  }

  menuBtn.addEventListener('click', showMenu);
  links.forEach((link) => link.addEventListener('click', removeActive));
}
