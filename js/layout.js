// async function loadPartial(id, file) {
//   const res = await fetch(file);
//   const html = await res.text();
//   document.getElementById(id).innerHTML = html;
// }

//initialize theme toggle after navbar is loaded
async function loadPartial(id, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;

  // If we just loaded the navbar, initialize the theme toggle
  if (id === 'navbar') {
    initThemeToggle(); // call the function from theme-toggle.js
  }
}

// Load shared layout
loadPartial('navbar', 'navbar.html');
loadPartial('footer', 'footer.html');
