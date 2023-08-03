/* eslint-disable no-plusplus */
const body = document.querySelector('body');
const cross = document.getElementById('cross');
const popCross = document.getElementById('pop-cross');
const mobileMenu = document.querySelector('.mobile-menu');
const mobilePop = document.querySelector('.mobile-popup');
const seeProjectButtons = document.querySelectorAll('.description button');
const hamburger = document.querySelector('.hamburger');
const images = document.getElementsByClassName('slide-img');
const miniImages = document.getElementsByClassName('mini-slide-img');
const prevButton = document.querySelector('.slide-btn-prev');
const nextButton = document.querySelector('.slide-btn-next');
const track = document.querySelector('.slide-tracker');
const miniSlides = document.querySelector('.mini-slide');
const ul = document.querySelector('.slide-tracker');
const miniUl = document.querySelector('.mini-slide');

hamburger.addEventListener('click', () => {
  mobileMenu.style.left = '0';
  mobilePop.style.height = '100%';
  mobilePop.style.overflow = 'scroll';
  body.style.overflow = 'hidden';
});
cross.addEventListener('click', () => {
  mobileMenu.style.left = '-100%';
  window.scroll({
    top: 700,
    left: 100,
    behavior: 'smooth',
  });
  body.style.overflow = 'visible';
});

popCross.addEventListener('click', () => {
  // mobilePop.style.display = 'none';
  mobilePop.style.left = '-100%';
  window.scroll({
    top: 1100,
    left: 100,
    behavior: 'smooth',
  });
  body.style.overflow = 'visible';
});

document.querySelectorAll('.link').forEach((n) => n.addEventListener('click', () => {
  mobileMenu.style.left = '-100%';
}));
const projects = [
  {
    name: 'one',
    url: 'img/one.png',
  },
  {
    name: 'two',
    url: 'img/two.png',
  },
  {
    name: 'three',
    url: 'img/three.png',
  },
  {
    name: 'four',
    url: 'img/four.png',
  },
];
const data = [projects[0].url, projects[1].url, projects[2].url, projects[3].url];
for (let i = 0; i < data.length; i++) {
  const li = document.createElement('li');
  li.classList.add('slide');
  const img = document.createElement('img');
  img.classList.add('slide-img');
  li.appendChild(img);
  ul.appendChild(li);

  // for minis
  const miniImg = document.createElement('img');
  miniImg.classList.add('mini-slide-img');
  miniUl.appendChild(miniImg);
  miniUl.firstElementChild.classList.add('active-mini-slide');

  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute('src', projects[i].url);
    miniImages[i].setAttribute('src', projects[i].url);
  }
}

ul.firstElementChild.classList.add('active');

seeProjectButtons.forEach((button) => {
  if (button.onClick === undefined) {
    mobilePop.style.left = '-100%';
    body.style.overflow = 'visible';
  }
  button.addEventListener('click', () => {
    mobilePop.style.left = '0';
    window.scroll({
      top: 0,
      left: 100,
      behavior: 'smooth',
    });
    mobilePop.style.height = '100%';
    mobilePop.style.overflow = 'scroll';
    body.style.overflow = 'hidden';
  });
});

const slides = Array.from(track.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setPositions = (slide, index) => {
  slide.style.left = `${slideWidth * index}px`;
};

slides.forEach(setPositions);
const movingSlide = (track, currentSlide, nextSlide) => {
  currentSlide.classList.remove('active');
  nextSlide.classList.add('active');
};

const movingMinis = (currentMini, targetMini) => {
  currentMini.classList.remove('active-mini-slide');
  targetMini.classList.add('active-mini-slide');
};

const hideButton = (index) => {
  if (index === 0) {
    prevButton.classList.add('btn-none');
    nextButton.classList.remove('btn-none');
  } else if (index === slides.length - 1) {
    prevButton.classList.remove('btn-none');
    nextButton.classList.add('btn-none');
  } else {
    prevButton.classList.remove('btn-none');
    nextButton.classList.remove('btn-none');
  }
};
prevButton.classList.add('btn-none');
prevButton.addEventListener('click', () => {
  const currentImage = track.querySelector('.active');
  const prevImage = currentImage.previousElementSibling;
  const currentMini = miniSlides.querySelector('.active-mini-slide');
  const targetMini = currentMini.previousElementSibling;
  const index = slides.findIndex((i) => i === prevImage);
  movingSlide(track, currentImage, prevImage);
  movingMinis(currentMini, targetMini);
  hideButton(index);
});

nextButton.addEventListener('click', () => {
  const currentImage = track.querySelector('.active');
  const nextImage = currentImage.nextElementSibling;
  const currentMini = miniSlides.querySelector('.active-mini-slide');
  const targetMini = currentMini.nextElementSibling;
  const index = slides.findIndex((i) => i === nextImage);
  movingSlide(track, currentImage, nextImage);
  movingMinis(currentMini, targetMini);
  hideButton(index);
});