
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

document.querySelectorAll('.toggle-abstract').forEach(button => {
  button.addEventListener('click', () => {
    const abstract = button.nextElementSibling;
    abstract.classList.toggle('visible');
    button.textContent = abstract.classList.contains('visible') ? 'Hide Abstract' : 'Show Abstract';
  });
});
