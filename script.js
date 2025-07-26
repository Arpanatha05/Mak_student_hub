//this is for redirect one page to another
      function goToaNewPage() {
      window.location.href = "sign.html";
    }
      function goToNewPage() {
      window.location.href = "index.html";
    }


 
//this is toggle fun of hamburger
  function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
  }
  
  function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.getElementById('navLinks');

  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}
