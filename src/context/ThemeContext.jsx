import { createContext, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Always use light theme
  const theme = "light";

  // Remove dark class if it exists
  if (typeof document !== "undefined") {
    document.documentElement.classList.remove("dark");
  }

  // Return context with theme (always light) and a no-op toggle function
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
