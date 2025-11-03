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

export const applyTheme = (theme) => {
  const root = document.documentElement;
  root.classList.remove('light', 'dark');
  root.classList.add(theme);
  localStorage.setItem('theme', theme);
};

// Initialize theme immediately when this module loads
if (typeof window !== 'undefined') {
  const theme = getInitialTheme();
  applyTheme(theme);
}
