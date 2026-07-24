// Portfolio interaction logic
const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');
const yearEl = document.getElementById('year');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

// Theme switcher
const setTheme = (theme) => {
  if (theme === 'light') {
    body.classList.add('light-theme');
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    body.classList.remove('light-theme');
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
};

const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  const isLight = body.classList.contains('light-theme');
  const nextTheme = isLight ? 'dark' : 'light';
  localStorage.setItem('portfolio-theme', nextTheme);
  setTheme(nextTheme);
});

// Mobile nav menu
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Footer year
yearEl.textContent = new Date().getFullYear();

// Contact form simulation
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = formData.get('name');
  formMessage.textContent = `Thanks ${name}! Your message has been noted.`;
  contactForm.reset();
});

// Simple reveal animation timing
const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${Math.random() * 0.15}s`;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealItems.forEach((item) => observer.observe(item));
