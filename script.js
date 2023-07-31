const cross = document.getElementById('cross');
const mobileMenu = document.querySelector('.mobile-menu');
const humburger = document.querySelector('.humburger');
humburger.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
});
cross.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});