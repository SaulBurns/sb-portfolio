const typed = new Typed('#js-dynamic-headline', {
  strings: [
    'Software Engineer',
    'College Student',
    'AI/ML Enthusiast',
    'Problem Solver',
    'Random Guy'
  ],
  typeSpeed: 70,
  backSpeed: 30,
  backDelay: 2000,
  loop: true
});

const windowSize = window.matchMedia("(width < 768px)");

const picTwo = document.getElementById('js-picture-two');

const picThree = document.getElementById('js-picture-three');

windowSize.addEventListener('change', (e) => updatePicture(e));

function updatePicture(e) {
  const isMobile = e.matches;
  if(isMobile) {
    picTwo.setAttribute('src', 'images/me/third-photo.jpg');
    picThree.setAttribute('src', 'images/me/second-photo.jpg');
  } else {
    picTwo.setAttribute('src', 'images/me/second-photo.jpg');
    picThree.setAttribute('src', 'images/me/third-photo.jpg');
  }
}

updatePicture(windowSize);