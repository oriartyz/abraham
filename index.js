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
colorThemeBtn.innerHTML = theme === "Dark" ? "Light Mode" : "Dark Mode";

colorThemeBtn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle("dark-theme");
  const newTheme = isDark ? "Dark" : "Light";
  colorThemeBtn.innerHTML = isDark ? "Light Mode" : "Dark Mode";
  localStorage.setItem("theme", newTheme);
});
