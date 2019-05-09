
document.addEventListener('DOMContentLoaded', (e) => {

  const navBar = document.getElementById('nav-bar');
  const ddNav = document.getElementById('dd-nav');
  const anchorRay = Array.from(document.getElementsByClassName('anchor'));

  // if small screen adjust nav display property
  window.innerWidth <= 500 ?
    ddNav.style.display = 'none' : ddNav.style.display = 'flex';
  
  // Event listeners 
  window.addEventListener('resize', resized);
  window.addEventListener('scroll', scrolled);

  // if window resized
  function resized(e) {
    if (e.target.innerWidth <= 500) {
      ddNav.style.display = 'none';
    } else {
      ddNav.style.display = 'flex';
    }
  }

  //if scrolled
  function scrolled(e) {

    if (window.scrollY >= 100) {
      navBar.style.backgroundColor = '#011627';
      anchorRay.forEach(a => {
        a.style.fontWeight = 300;
      })
    } else {
      navBar.style.backgroundColor = '';
      anchorRay.forEach(a => {
        a.style.fontWeight = 500;
      })
    }
  }
  
})