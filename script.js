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
const slides = Array.from(track.children);
const miniSlides = document.querySelector('.mini-slide');
const minis = Array.from(miniSlides.children);

hamburger.addEventListener('click', () => {
  mobileMenu.style.left = '0';
});
cross.addEventListener('click', () => {
  mobileMenu.style.left = '-100%';
  window.scroll({
    top: 700,
    left: 100,
    behavior: 'smooth',
  });
});

popCross.addEventListener('click', () => {
  // mobilePop.style.display = 'none';
  mobilePop.style.left = '-100%';
  window.scroll({
    top: 1100,
    left: 100,
    behavior: 'smooth',
  });
});

seeProjectButtons.forEach((button) => {
  if (button.onClick === undefined) {
    // mobilePop.style.display = 'none';
    mobilePop.style.left = '-100%';
    body.style.overflow = 'visible';
  }
  button.addEventListener('click', () => {
    // mobilePop.style.display = 'inline';
    mobilePop.style.left = '0';
    window.scroll({
      top: 0,
      left: 100,
      behavior: 'smooth',
    });
  });
});

document.querySelectorAll('.link').forEach((n) => n.addEventListener('click', () => {
  mobileMenu.style.left = '-100%';
}));
const projects = [
  {
    name: 'one',
    url: 'img/two.png',
  },
  {
    name: 'two',
    url: 'img/two.png',
  },
  {
    name: 'three',
    url: 'img/two.png',
  },
  {
    name: 'four',
    url: 'img/two.png',
  },
];

// eslint-disable-next-line no-plusplus
for (let i = 0; i < images.length; i++) {
  images[i].setAttribute('src', projects[i].url);
  miniImages[i].setAttribute('src', projects[i].url);
}

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

miniSlides.addEventListener('click', (e) => {
  const targetMini = e.target.closest('img');
  if (!targetMini) return;
  const currentImage = track.querySelector('.active');
  const currentMini = miniSlides.querySelector('.active-mini-slide');
  const index = minis.findIndex((i) => i === targetMini);
  const targetSlide = slides[index];

  movingSlide(track, currentImage, targetSlide);
  movingMinis(currentMini, targetMini);
  hideButton(index);
});