import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const getInitialTheme = () => {
  // Only run on client-side
  if (typeof window === 'undefined') {
    return 'light'; // Default server-side theme
  }
  
  // Check localStorage first
  if (localStorage.getItem('theme')) {
    return localStorage.getItem('theme');
  }
  
  // Then check system preference
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  
  return 'light';
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Start with light by default
  const [mounted, setMounted] = useState(false);

  // Set the theme on component mount
  useEffect(() => {
    setTheme(getInitialTheme());
    setMounted(true);
  }, []);

  // Apply theme changes
  useEffect(() => {
    const root = document.documentElement;
    
    // Remove both classes first to prevent any conflicts
    root.classList.remove('light', 'dark');
    
    // Add the current theme class
    root.classList.add(theme);
    
    // Save to localStorage
    if (mounted) {
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Prevent rendering until we've determined the theme to avoid flicker
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
