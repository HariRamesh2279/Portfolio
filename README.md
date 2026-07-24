# Ex01 Portfolio
## Date:24/07/2026

## AIM
To create a Portfolio using HTML and CSS.

## ALGORITHM
### STEP 1
Create an HTML file (index.html)

### STEP 2
Create a CSS file (style.css)

### STEP 3
Include a navigation bar with links to different sections.

### STEP 4
Add structured sections for introduction, about, projects, and contact details.

### STEP 5
Define global styles for fonts, colors, and layout.

### STEP 6
Style the header, navigation bar, and sections.

### STEP 7
Use Flexbox or CSS Grid for layout design.

### STEP 8
Add hover effects and transitions for interactivity.

### STEP 9
Add Images and Media.

### STEP 10
Use optimized images for a professional look.

### STEP 11
Open the HTML file in a browser to check layout and functionality.

### STEP 12
Fix styling issues and refine content placement.

### STEP 13
Deploy the Portfolio.

### STEP 14
Upload to GitHub Pages for free hosting.

## PROGRAM
```
HTML code
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Personal portfolio website showcasing skills,education, and contact details."
    />
    <title>Hari Ramesh | Portfolio</title>

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="page-shell">
      <header class="site-header">
        <div class="container nav-wrapper">
          <a href="#home" class="logo">Hari</a><span>Ramesh</span></a>
          <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">
            <i class="fa-solid fa-moon"></i>
          </button>
          <nav class="nav-links" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
          <button class="menu-toggle" id="menuToggle" aria-label="Open navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        
      </header>

      <main>
        <section class="hero section" id="home">
          <div class="container hero-grid">
            <div class="hero-copy reveal">
              <p class="eyebrow">Hello, I'm</p>
              <h1>Hari Ramesh</h1>
              <h2>Cybersecurity & Software Developer</h2>
              <p class="intro">
                I design secure digital experiences, build elegant web products,
                and turn complex problems into practical solutions.
              </p>
              <div class="cta-group">
                <a class="btn btn-primary" href="#about">About Me</a>
                <a class="btn btn-secondary" href="#contact">Contact Me</a>
              </div>

            </div>

            
          </div>
        </section>

        <section class="section" id="about">
          <div class="container">
            <div class="section-heading reveal">
              <p class="section-tag">About Me</p>
              <h3>Building secure and modern digital experiences.</h3>
            </div>
            <div class="about-grid">
              <div class="about-card reveal">
                <p>
                  I am a multidisciplinary developer focused on Python, web
                  development, and cybersecurity. My work blends problem solving,
                  performance optimization, and strong user-centered design.
                </p>
              </div>
              <div class="about-card reveal">
                <p>
                  I enjoy turning complex requirements into clean interfaces,
                  scalable applications, and resilient systems that users can trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="section alt-bg" id="skills">
          <div class="container">
            <div class="section-heading reveal">
              <p class="section-tag">Skills</p>
              <h3>Tools, technologies, and practice areas.</h3>
            </div>

            <div class="skills-grid">
              <article class="skill-card reveal">
                <h4>Programming Languages</h4>
                <ul>
                  <li>Python</li>
                  <li>JavaScript</li>
                  <li>C++</li>
                  <li>SQL</li>
                </ul>
              </article>

              <article class="skill-card reveal">
                <h4>Web Development</h4>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>React</li>
                  <li>Node.js</li>
                </ul>
              </article>

              <article class="skill-card reveal">
                <h4>Cyber Security</h4>
                <ul>
                  <li>Network Security</li>
                  <li>Threat Analysis</li>
                  <li>Vulnerability Testing</li>
                  <li>Secure Coding</li>
                </ul>
              </article>

              <article class="skill-card reveal">
                <h4>Tools</h4>
                <ul>
                  <li>Git & GitHub</li>
                  <li>VS Code</li>
                  <li>Postman</li>
                  <li>Linux</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" class="contact">
        <div class="container">
        <h2>Contact Me</h2>

        <div class="contact-info">
            <div class="contact-card">
                <h4>Email</h4>
                <a>2279hari@gmail.com</a>
            </div>

            <div class="contact-card">
                <h4>Phone</h4>
                <a >+91 8903212279</a>
            </div>

            <div class="contact-card">
                <h4>Location</h4>
                <p>Chennai, Tamil Nadu, India</p>
            </div>

           
        </div>
    
        </section>
      </main>

      <footer class="site-footer">
        <div class="container footer-wrapper">
          <p>© <span id="year"></span> Hari Ramesh. All rights reserved.</p>
          <a href="#home" class="back-to-top">Back to Top</a>
        </div>
      </footer>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```
```
Script JS
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
```
```
Style css
:root {
  --bg: #0b1020;
  --bg-soft: #10172e;
  --panel: rgba(16, 23, 46, 0.78);
  --text: #f6f7fb;
  --muted: #aab3d1;
  --primary: #6c8cff;
  --primary-strong: #4f70ff;
  --accent: #6af0d9;
  --border: rgba(255, 255, 255, 0.08);
  --shadow: 0 20px 45px rgba(0, 0, 0, 0.25);
  --radius: 18px;
}

body.light-theme {
  --bg: #f4f7fb;
  --bg-soft: #ffffff;
  --panel: rgba(255, 255, 255, 0.92);
  --text: #0f172a;
  --muted: #58627a;
  --primary: #315cff;
  --primary-strong: #2146d7;
  --accent: #0ea5e9;
  --border: rgba(15, 23, 42, 0.08);
  --shadow: 0 18px 40px rgba(37, 74, 119, 0.12);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Poppins", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(108, 140, 255, 0.18), transparent 22%),
    radial-gradient(circle at bottom right, rgba(106, 240, 217, 0.16), transparent 24%),
    var(--bg);
  color: var(--text);
  line-height: 1.6;
  transition: background 0.35s ease, color 0.35s ease;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
}

.section {
  padding: 5.5rem 0;
}

.alt-bg {
  background: rgba(255, 255, 255, 0.02);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(14px);
  background: rgba(11, 16, 32, 0.72);
  border-bottom: 1px solid var(--border);
}

body.light-theme .site-header {
  background: rgba(244, 247, 251, 0.8);
}

.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 0;
}

.logo {
  color: var(--text);
  text-decoration: none;
  font-size: 1.35rem;
  font-weight: 800;
}

.logo span {
  color: var(--accent);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.35rem;
}

.nav-links a,
.back-to-top {
  color: var(--text);
  text-decoration: none;
  transition: color 0.25s ease;
}

.nav-links a:hover,
.back-to-top:hover {
  color: var(--accent);
}

.menu-toggle,
.theme-toggle {
  display: none;
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: 50%;
  width: 44px;
  height: 44px;
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  width: 18px;
  height: 2px;
  background: var(--text);
  margin: 4px auto;
}

.hero-grid,
.about-grid,
.contact-grid,
.skills-grid,
.projects-grid,
.cert-grid {
  display: grid;
  gap: 1.5rem;
}

.hero-grid {
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
}

.eyebrow,
.section-tag {
  text-transform: uppercase;
  color: var(--accent);
  letter-spacing: 0.12em;
  font-size: 0.78rem;
  font-weight: 700;
}

.hero-copy h1 {
  font-size: clamp(2.4rem, 5vw, 4.2rem);
  line-height: 1.06;
}

.hero-copy h2 {
  margin: 0.2rem 0 1rem;
  font-size: clamp(1.2rem, 2.2vw, 1.8rem);
  color: var(--muted);
}

.intro {
  max-width: 62ch;
  color: var(--muted);
}

.cta-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1.6rem 0 1.8rem;
}

.btn {
  padding: 0.9rem 1.2rem;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.25s ease, box-shadow 0.3s ease, background 0.3s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: #fff;
  box-shadow: var(--shadow);
}

.btn-secondary {
  border: 1px solid var(--border);
  color: var(--text);
  background: transparent;
}

.socials {
  display: flex;
  gap: 0.9rem;
  margin-top: 1rem;
}

.socials a {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--panel);
  border: 1px solid var(--border);
  color: var(--text);
  text-decoration: none;
}

.profile-card,
.about-card,
.skill-card,
.cert-card,
.project-card,
.contact-form,
.timeline-item,
.achievement-item {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.profile-card {
  padding: 1.5rem;
}

.profile-image-placeholder {
  height: 360px;
  display: grid;
  place-items: center;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(108, 140, 255, 0.24), rgba(106, 240, 217, 0.24));
  font-size: 5rem;
  border: 1px dashed rgba(255, 255, 255, 0.2);
}

.profile-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1.2rem;
}

.profile-stats div {
  padding: 1rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.04);
}

.profile-stats strong {
  display: block;
  font-size: 1.4rem;
}

.section-heading {
  margin-bottom: 1.5rem;
}

.section-heading h3 {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
}

.about-grid,
.skills-grid,
.cert-grid,
.projects-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.about-card,
.skill-card,
.cert-card,
.project-card,
.contact-form {
  padding: 1.4rem;
}

.skill-card ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1rem;
}

.skill-card li,
.tech-stack span {
  padding: 0.45rem 0.75rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  font-size: 0.9rem;
}

.timeline {
  display: grid;
  gap: 1rem;
}

.timeline-item {
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 1rem;
  padding: 1.2rem;
}

.year {
  color: var(--accent);
  font-weight: 700;
}

.cert-card {
  display: grid;
  place-items: center;
  text-align: center;
}

.cert-card i,
.project-image i {
  font-size: 2rem;
  color: var(--accent);
}

.project-image {
  min-height: 180px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(108, 140, 255, 0.22), rgba(106, 240, 217, 0.15));
  margin-bottom: 1rem;
}

.project-content a {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.9rem 0 1rem;
}

.achievement-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.achievement-item {
  padding: 1.2rem;
}

.contact-grid {
  grid-template-columns: 0.9fr 1.1fr;
  align-items: start;
}

.contact-form {
  display: grid;
  gap: 1rem;
}

.contact-form label {
  display: grid;
  gap: 0.45rem;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.9rem 1rem;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  font: inherit;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: 2px solid rgba(108, 140, 255, 0.5);
  border-color: transparent;
}

.form-message {
  min-height: 1.2rem;
  color: var(--accent);
  font-weight: 500;
}

.site-footer {
  padding: 1.4rem 0 2rem;
  border-top: 1px solid var(--border);
}

.footer-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.reveal {
  opacity: 0;
  transform: translateY(18px);
  animation: revealUp 0.75s ease forwards;
}

@keyframes revealUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 900px) {
  .hero-grid,
  .about-grid,
  .contact-grid,
  .skills-grid,
  .projects-grid,
  .cert-grid,
  .achievement-list {
    grid-template-columns: 1fr;
  }

  .nav-links {
    position: absolute;
    top: 72px;
    right: 1rem;
    flex-direction: column;
    align-items: flex-start;
    background: var(--panel);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 1rem;
    display: none;
    box-shadow: var(--shadow);
  }

  .nav-links.open {
    display: flex;
  }

  .menu-toggle,
  .theme-toggle {
    display: inline-grid;
    place-items: center;
  }

  .theme-toggle {
    margin-left: auto;
  }
}

@media (max-width: 640px) {
  .section {
    padding: 4rem 0;
  }

  .timeline-item {
    grid-template-columns: 1fr;
  }

  .footer-wrapper {
    flex-direction: column;
  }
}
```
## OUTPUT
<img width="816" height="353" alt="Screenshot 2026-07-24 145518" src="https://github.com/user-attachments/assets/decaedd4-dd52-4062-aff4-7a2d46f34a10" />
<img width="822" height="520" alt="Screenshot 2026-07-24 145510" src="https://github.com/user-attachments/assets/55709175-abc0-41d0-a8af-d4aa37fb0f27" />
<img width="820" height="598" alt="Screenshot 2026-07-24 145456" src="https://github.com/user-attachments/assets/f527d724-184c-49c0-b92d-8fe59f10caab" />
<img width="822" height="682" alt="Screenshot 2026-07-24 145442" src="https://github.com/user-attachments/assets/47cdca86-318f-4c9a-9f2a-57da06c525b3" />
<img width="812" height="691" alt="Screenshot 2026-07-24 145430" src="https://github.com/user-attachments/assets/56e45dbb-7063-42e6-aa59-e3c1a8fba476" />



## RESULT
The program for creating Portfolio using HTML and CSS is executed successfully.
