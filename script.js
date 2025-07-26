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
//dark and light mode
const toggle = document.getElementById("theme-toggle");

    // Apply saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
      toggle.checked = true;
    } else {
      document.body.classList.add("light-mode");
      toggle.checked = false;
    }

    // Toggle logic
    toggle.addEventListener("change", () => {
      if (toggle.checked) {
        document.body.classList.replace("light-mode", "dark-mode");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.replace("dark-mode", "light-mode");
        localStorage.setItem("theme", "light");
      }
    });