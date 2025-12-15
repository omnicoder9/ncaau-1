function initThemeToggle() {
  const html = document.documentElement;
  const toggleBtn = document.getElementById('themeToggle');
  const icon = toggleBtn.querySelector('i');

  function syncIcon(theme) {
    icon.className = theme === 'dark'
      ? 'bi bi-sun-fill'
      : 'bi bi-moon-fill';
  }

// Sync icon on load
syncIcon(html.getAttribute('data-bs-theme'));

toggleBtn.addEventListener('click', () => {
  const next = html.getAttribute('data-bs-theme') === 'dark'
    ? 'light'
    : 'dark';

  html.setAttribute('data-bs-theme', next);
  localStorage.setItem('theme', next);
  syncIcon(next);
});

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

}
