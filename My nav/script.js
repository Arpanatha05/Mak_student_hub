// Redirects
function goToaNewPage() {
  window.location.href = "sign.html";
}
function goToNewPage() {
  window.location.href = "index.html";
}

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close menu when a link is clicked (mobile UX)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Dark & light mode
const toggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  toggle.checked = true;
} else {
  document.body.classList.add("light-mode");
  toggle.checked = false;
}

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    document.body.classList.replace("light-mode", "dark-mode");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.replace("dark-mode", "light-mode");
    localStorage.setItem("theme", "light");
  }
});

