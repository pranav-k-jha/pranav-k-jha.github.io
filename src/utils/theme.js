// This script runs before React loads to prevent theme flash
export const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light';
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) return savedTheme;
  
  // Check for system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  
  return 'light'; // Default to light theme
};

// Only update the DOM, don't trigger re-renders
export const applyTheme = (theme) => {
  const root = document.documentElement;
  const currentTheme = root.classList.contains('dark') ? 'dark' : 'light';
  
  // Only update if the theme is actually changing
  if (currentTheme !== theme) {
    // Disable transitions during theme change
    const css = document.createElement('style');
    css.type = 'text/css';
    css.appendChild(document.createTextNode(
      `* {
         -webkit-transition: none !important;
         -moz-transition: none !important;
         -o-transition: none !important;
         -ms-transition: none !important;
         transition: none !important;
       }`
    ));
    document.head.appendChild(css);

    // Update the theme
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);

    // Force a reflow, flush the CSS changes, then re-enable transitions
    const _ = window.getComputedStyle(css).opacity;
    document.head.removeChild(css);
  }
};

// Initialize theme immediately when this module loads
if (typeof window !== 'undefined') {
  const theme = getInitialTheme();
  applyTheme(theme);
}
