const navbar = document.getElementById('js-nav-links');

const media = window.matchMedia("(width < 700px)");

media.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar(e) {
  const isMobile = e.matches;
  console.log(isMobile);
  if(isMobile) {
    navbar.setAttribute('inert', '');
  } else {
    navbar.removeAttribute('inert');
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