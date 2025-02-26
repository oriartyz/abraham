console.log('helllloooo console works');

// header nav menu button on smaller screen
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('nav-menu')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});

// switch between dark mode and light mode button, also saves theme preference 
const colorThemeBtn = document.getElementById('color-theme');

// Simplification de la gestion du thème
const theme = localStorage.getItem("theme") || "Light";
document.body.classList.toggle("dark-theme", theme === "Dark");
colorThemeBtn.innerHTML = theme === "Dark" ? ".light mode" : ".dark mode";

colorThemeBtn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle("dark-theme");
  const newTheme = isDark ? "Dark" : "Light";
  colorThemeBtn.innerHTML = isDark ? ".light mode" : ".dark mode";
  localStorage.setItem("theme", newTheme);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
