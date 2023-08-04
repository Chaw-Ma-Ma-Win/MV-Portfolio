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
const prevProject = document.querySelector('.proj-prev');
const nextProject = document.querySelector('.proj-next');
const track = document.querySelector('.slide-tracker');
const miniSlides = document.querySelector('.mini-slide');
const ul = document.querySelector('.slide-tracker');
const miniUl = document.querySelector('.mini-slide');
const text = document.querySelector('.textarea');
const titles = document.querySelector('.names');
const liveButton = document.querySelector('.live');
const sourceButton = document.querySelector('.source');
const aTag = document.querySelector('.live-a');
const sourceTag = document.querySelector('.source-a');

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
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, assumenda ullam sunt molestias non sit accusantium facilis fugiat maxime distinctio voluptas provident rerum temporibus accusamus consequuntur sed quo maiores animi!',
    live: 'https://chaw-ma-ma-win.github.io/Rock-Paper-Scissors/',
    source: 'https://github.com/Chaw-Ma-Ma-Win/Rock-Paper-Scissors',
  },
  {
    name: 'two',
    url: 'img/two.png',
    description: 'Selling software?Reach more buyers.Your future customers are researching their next purchase on G2. Make sure they can find you.',
    live: 'https://chaw-ma-ma-win.github.io/NETFLIX-movies/',
    source: 'https://github.com/Chaw-Ma-Ma-Win/NETFLIX-movies',
  },
  {
    name: 'three',
    url: 'img/three.png',
    description: 'If you are a teacher looking for a set of calculators for your classroom, these reviews should help you make your decision. We have taken into consideration things like convenience of the set, as well as the overall usability and capabilities of the calculators in these reviews.',
    live: 'https://chaw-ma-ma-win.github.io/Calculator/',
    source: 'https://github.com/Chaw-Ma-Ma-Win/Calculator',
  },
  {
    name: 'four',
    url: 'img/four.png',
    description: 'Kids love it! Not quite as bright as the photos, but still works great and has been a lot of fun.',
    live: 'https://chaw-ma-ma-win.github.io/Etch-A-Sketch/',
    source: 'https://github.com/Chaw-Ma-Ma-Win/Etch-A-Sketch',
  },
];

for (let i = 0; i < projects.length; i++) {
  // for names
  const name = document.createElement('h2');
  name.innerHTML = projects[i].name;
  name.classList.add('title');
  titles.appendChild(name);

  // for imgs
  const li = document.createElement('li');
  li.classList.add('slide');
  const img = document.createElement('img');
  img.classList.add('slide-img');
  li.appendChild(img);
  ul.appendChild(li);

  // for p
  const p = document.createElement('p');
  p.innerHTML = projects[i].description;
  p.classList.add('paragraph');
  text.appendChild(p);

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
text.firstElementChild.classList.add('active-paragraph');
titles.firstElementChild.classList.add('active-title');

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

const movingText = (track, currentText, nextText) => {
  currentText.classList.remove('active-paragraph');
  nextText.classList.add('active-paragraph');
};

const movingTitle = (track, prevTitle, nextTitle) => {
  prevTitle.classList.remove('active-title');
  nextTitle.classList.add('active-title');
};

let count = 0;
aTag.setAttribute('href', projects[count].live);
nextButton.addEventListener('click', () => {
  count++;
  aTag.setAttribute('href', projects[count].live);
  liveButton.append(aTag);
});

nextProject.addEventListener('click', () => {
  count++;
  aTag.setAttribute('href', projects[count].live);
  liveButton.append(aTag);
});

prevButton.addEventListener('click', () => {
  count--;
  aTag.setAttribute('href', projects[count].live);
  liveButton.append(aTag);
});

prevProject.addEventListener('click', () => {
  count--;
  aTag.setAttribute('href', projects[count].live);
  liveButton.append(aTag);
});

let num = 0;
sourceTag.setAttribute('href', projects[num].source);
nextButton.addEventListener('click', () => {
  num++;
  sourceTag.setAttribute('href', projects[num].source);
  sourceButton.append(sourceTag);
});

nextProject.addEventListener('click', () => {
  num++;
  sourceTag.setAttribute('href', projects[num].source);
  sourceButton.append(sourceTag);
});

prevButton.addEventListener('click', () => {
  num--;
  sourceTag.setAttribute('href', projects[num].source);
  sourceButton.append(sourceTag);
});

prevProject.addEventListener('click', () => {
  num--;
  sourceTag.setAttribute('href', projects[num].source);
  sourceButton.append(sourceTag);
});

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

const hideProject = (index) => {
  if (index === 0) {
    prevProject.classList.add('btn-none');
    nextProject.classList.remove('btn-none');
  } else if (index === slides.length - 1) {
    prevProject.classList.remove('btn-none');
    nextProject.classList.add('btn-none');
  } else {
    prevProject.classList.remove('btn-none');
    nextProject.classList.remove('btn-none');
  }
};

prevButton.classList.add('btn-none');
prevButton.addEventListener('click', () => {
  const currentImage = track.querySelector('.active');
  const prevImage = currentImage.previousElementSibling;
  const currentText = text.querySelector('.active-paragraph');
  const prevText = currentText.previousElementSibling;
  const currentTitle = titles.querySelector('.active-title');
  const prevTitle = currentTitle.previousElementSibling;
  movingText(text, currentText, prevText);
  const currentMini = miniSlides.querySelector('.active-mini-slide');
  const targetMini = currentMini.previousElementSibling;
  const index = slides.findIndex((i) => i === prevImage);
  movingSlide(track, currentImage, prevImage);
  movingMinis(currentMini, targetMini);
  movingTitle(titles, currentTitle, prevTitle);
  hideButton(index);
});

prevProject.classList.add('btn-none');
prevProject.addEventListener('click', () => {
  const currentImage = track.querySelector('.active');
  const prevImage = currentImage.previousElementSibling;
  const currentText = text.querySelector('.active-paragraph');
  const prevText = currentText.previousElementSibling;
  const currentTitle = titles.querySelector('.active-title');
  const prevTitle = currentTitle.previousElementSibling;
  const currentMini = miniSlides.querySelector('.active-mini-slide');
  const targetMini = currentMini.previousElementSibling;
  const index = slides.findIndex((i) => i === prevImage);
  movingSlide(track, currentImage, prevImage);
  movingText(text, currentText, prevText);
  movingMinis(currentMini, targetMini);
  movingTitle(titles, currentTitle, prevTitle);
  hideProject(index);
});

nextButton.addEventListener('click', () => {
  const currentImage = track.querySelector('.active');
  const nextImage = currentImage.nextElementSibling;
  const currentText = text.querySelector('.active-paragraph');
  const nextText = currentText.nextElementSibling;
  const currentTitle = titles.querySelector('.active-title');
  const nextTitle = currentTitle.nextElementSibling;
  const currentMini = miniSlides.querySelector('.active-mini-slide');
  const targetMini = currentMini.nextElementSibling;
  const index = slides.findIndex((i) => i === nextImage);
  movingSlide(track, currentImage, nextImage);
  movingText(text, currentText, nextText);
  movingMinis(currentMini, targetMini);
  movingTitle(titles, currentTitle, nextTitle);
  hideButton(index);
});

nextProject.addEventListener('click', () => {
  const currentImage = track.querySelector('.active');
  const nextImage = currentImage.nextElementSibling;
  const currentText = text.querySelector('.active-paragraph');
  const nextText = currentText.nextElementSibling;
  const currentTitle = titles.querySelector('.active-title');
  const nextTitle = currentTitle.nextElementSibling;
  const currentMini = miniSlides.querySelector('.active-mini-slide');
  const targetMini = currentMini.nextElementSibling;
  const index = slides.findIndex((i) => i === nextImage);
  movingSlide(track, currentImage, nextImage);
  movingText(text, currentText, nextText);
  movingTitle(titles, currentTitle, nextTitle);
  movingMinis(currentMini, targetMini);
  hideProject(index);
});
