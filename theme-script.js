// This script runs before React loads to prevent theme flash
(function() {
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  
  // Check for system preference
  const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Determine theme
  const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  
  // Apply theme
  document.documentElement.classList.add(theme);
  
  // Save to localStorage if not already set
  if (!savedTheme) {
    localStorage.setItem('theme', theme);
  }
})();
