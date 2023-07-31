const cross = document.getElementById('cross');
const mobileMenu = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
  mobileMenu.style.left = '0';
});
cross.addEventListener('click', () => {
  mobileMenu.style.left = '-100%';
});

document.querySelectorAll('.link').forEach((n) => n.addEventListener('click', () => {
  mobileMenu.style.left = '-100%';
}));