//initialize theme toggle after navbar is loaded
async function loadPartial(id, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;

  // If we just loaded the navbar, initialize the theme toggle
  if (id === 'navbar') {
    initThemeToggle(); // call the function from theme-toggle.js
  }
   // If we just loaded the footer, set the year
  if (id === 'footer') {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }
}

// Load shared layout
loadPartial('navbar', 'navbar.html');
loadPartial('footer', 'footer.html');
