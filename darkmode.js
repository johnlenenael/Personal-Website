// =============================== //
// DARK MODE — flicker-free         //
// The inline script in <head>      //
// already sets html.dark-mode.     //
// This just wires up the toggle.   //
// =============================== //

document.addEventListener('DOMContentLoaded', function () {
  // Sync body class from html class (set by inline script before paint)
  if (document.documentElement.classList.contains('dark-mode')) {
    document.body.classList.add('dark-mode');
  }

  var toggle = document.getElementById('darkModeToggle');
  if (!toggle) return;

  toggle.addEventListener('click', function () {
    // Toggle both html and body so CSS works at all times
    var isNowDark = document.documentElement.classList.toggle('dark-mode');
    document.body.classList.toggle('dark-mode', isNowDark);
    localStorage.setItem('darkMode', isNowDark);
  });
});