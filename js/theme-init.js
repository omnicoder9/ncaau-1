(function () {
  const theme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-bs-theme', theme);
})();
