// Mobile Menü öffnen/schließen
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Abstracts auf- und zuklappen
const abstractButtons = document.querySelectorAll('.toggle-abstract');

abstractButtons.forEach(button => {
  button.addEventListener('click', () => {
    const abstract = button.nextElementSibling;
    abstract.classList.toggle('visible');
    if (abstract.classList.contains('visible')) {
      button.textContent = "Hide Abstract";
    } else {
      button.textContent = "Show Abstract";
    }
  });
});
