const burger = document.querySelector('.burger');
const header = document.querySelector('.header');
const body = document.querySelector('body');
const mobileMenu = document.querySelector('.menu_mobile');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  header.classList.toggle('active');
  body.classList.toggle('noscroll');
});

menu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  header.classList.toggle('active');
  body.classList.toggle('noscroll');
});
