// wait for the dom to load then hide toggle enabled nav if screen small screen.

document.addEventListener('DOMContentLoaded', (e) => {

  const ddNav = document.getElementById('dd-nav');

  window.innerWidth <= 500 ?
    ddNav.style.display = 'none' : ddNav.style.display = 'flex';

  window.addEventListener('resize', resized);

  function resized(e) {
    if (e.target.innerWidth <= 500) {
      ddNav.style.display = 'none';
    } else {
      ddNav.style.display = 'flex';
    }
  }
  
})