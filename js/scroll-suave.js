export default function scrollSuave() {
  const links = document.querySelectorAll('.menu a');

  function scroll(event) {
    event.preventDefault();
    const targetLink = event.target.getAttribute('href');
    const section = document.querySelector(targetLink);
    const top = section.offsetTop;
    window.scrollTo({
      top: top,
      left: 0,
      behavior: 'smooth',
    });
  }

  links.forEach((link) => link.addEventListener('click', scroll));
}
