const hamburgerItem = document.querySelector('.fa-bars');
const navMenu = document.querySelector('.nav');
const hamburgerEl = document.querySelector('.hamburger');
const closeNavMenu = document.querySelector('.fa-times');
const navbarEl = document.querySelector('.navigation');

hamburgerItem.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburgerEl.classList.toggle('active');
});

closeNavMenu.addEventListener('click', () => {
  navMenu.classList.remove('active');
  hamburgerEl.classList.remove('active');
});

const closeMenu = () => {
  navMenu.classList.remove('active');
  hamburgerEl.classList.remove('active');
}

window.onscroll = function () { myFunction() };
var sticky = navbarEl.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbarEl.classList.add("sticky");
  } else {
    navbarEl.classList.remove("sticky");
  }
}