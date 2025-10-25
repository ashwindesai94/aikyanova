// Shared UI hooks for navigation state and timestamps
const currentPage = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

document.querySelectorAll('nav a').forEach(link => {
  const href = link.getAttribute('href');
  if (!href) return;
  const normalizedHref = href.toLowerCase();
  if (normalizedHref === currentPage || (currentPage === '' && normalizedHref === 'index.html')) {
    link.classList.add('active');
  }
});

const year = new Date().getFullYear();
document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = year;
});
