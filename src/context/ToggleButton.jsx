import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeContext";

const ThemeToggle = () => {
  const { theme = "dark", toggleTheme } = useTheme(); // Provide default value
  const isLight = theme === "light";

  // Remove the early return to always render the button
  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative flex items-center w-16 h-8 rounded-full p-1 
        transition-all duration-500 shadow-inner focus:outline-none focus:ring-2 
        focus:ring-offset-2 ${
          isLight
            ? "bg-gradient-to-r from-gray-200 to-gray-300 focus:ring-yellow-400"
            : "bg-gradient-to-r from-gray-800 to-gray-700 focus:ring-blue-500"
        }`}
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
    >
      {/* Glow background */}
      <motion.div
        className={`absolute inset-0 rounded-full blur-md opacity-40 ${
          isLight
            ? "bg-gradient-to-r from-yellow-300 to-amber-400"
            : "bg-gradient-to-r from-blue-500 to-indigo-500"
        }`}
        animate={{ opacity: isLight ? 0.3 : 0.5 }}
        transition={{ duration: 0.4 }}
      />

      {/* Knob */}
      <motion.div
        layout={false} // ❌ disable layout animation to prevent reflow jumps
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        className={`relative z-10 w-6 h-6 rounded-full flex items-center justify-center shadow-md
    ${isLight ? "bg-white text-yellow-500" : "bg-gray-900 text-blue-400"}
  `}
        animate={{
          x: isLight ? 0 : 28, // smooth horizontal slide
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isLight ? "sun" : "moon"}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {isLight ? (
              <Sun size={16} className="text-amber-500" />
            ) : (
              <Moon size={16} className="text-blue-400" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
