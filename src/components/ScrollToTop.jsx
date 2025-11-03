import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <motion.button
            onClick={scrollToTop}
            className={`p-3 rounded-full backdrop-blur-sm transition-all duration-300 ${
              isHovered
                ? "bg-blue-500/20 dark:bg-blue-500/30 shadow-lg"
                : "bg-white/80 dark:bg-gray-800/80 shadow-md border border-gray-200 dark:border-gray-700"
            }`}
            aria-label="Scroll to top"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{
                y: isHovered ? -5 : 0,
                opacity: isHovered ? 1 : 0.9,
              }}
              transition={{ duration: 0.3 }}
            >
              <FiArrowUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
