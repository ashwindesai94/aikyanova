// Shared UI hooks for navigation state and timestamps
const currentPage = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

const navLinks = document.querySelectorAll('[data-nav] a');
navLinks.forEach(link => {
  const href = link.getAttribute('href');
  if (!href) return;
  const normalizedHref = href.toLowerCase();
  if (normalizedHref === currentPage || (currentPage === '' && normalizedHref === 'index.html')) {
    link.classList.add('active');
  }
});

const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    navToggle.classList.toggle('is-active', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('nav-open', isOpen);
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        navToggle.classList.remove('is-active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
      }
    });
  });
}

const year = new Date().getFullYear();
document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = year;
});
