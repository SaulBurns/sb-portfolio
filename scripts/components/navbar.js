const navbar = document.getElementById('js-nav-links');

const media = window.matchMedia("(width < 768px)");

const picTwo = document.getElementById('js-picture-two');

const picThree = document.getElementById('js-picture-three');

media.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar(e) {
  const isMobile = e.matches;
  if(isMobile) {
    navbar.setAttribute('inert', '');
    picTwo.setAttribute('src', 'images/me/third-photo.jpg');
    picThree.setAttribute('src', 'images/me/second-photo.jpg');
  } else {
    navbar.removeAttribute('inert');
    picTwo.setAttribute('src', 'images/me/second-photo.jpg');
    picThree.setAttribute('src', 'images/me/third-photo.jpg');
  }
}

function openSidebar() {
  navbar.classList.add('show-nav-links');
  navbar.removeAttribute('inert');
}

function closeSidebar() {
  navbar.classList.remove('show-nav-links');
  navbar.setAttribute('inert', '');
}

updateNavbar(media);