// Navbar.jsx
import { memo, useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { navigationConfig } from "../lib/navigation";
import { Link, useLocation } from "react-router-dom";
import { socialLinks } from "../lib/socialLinks";
import ThemeToggle from "../context/ToggleButton";

// Memoize the Navbar to prevent unnecessary re-renders
const Navbar = memo(function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const scrollTimeout = useRef(null);

  // Memoize event handlers
  const handleScroll = useCallback(() => {
    if (mobileMenuOpen) return;
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      setScrolled(window.scrollY > 10);
    }, 10);
  }, [mobileMenuOpen]);

  // Memoize the active link check
  const isActiveLink = useCallback(
    (path) => {
      const cur = location.pathname;
      return path === "/"
        ? cur === path
        : cur === path || cur.startsWith(`${path}/`);
    },
    [location.pathname]
  );

  // Effects
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  // Click outside handler
  const handleClickOutside = useCallback((e) => {
    if (navRef.current && !navRef.current.contains(e.target)) {
      setMobileMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside, {
      passive: true,
    });
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [handleClickOutside]);

  // Toggle mobile menu with keyboard support
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") {
      setMobileMenuOpen(false);
    }
  }, []);

  return (
    <header
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 navbar-gradient ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-md py-0"
          : "py-2"
      }`}
      onKeyDown={handleKeyDown}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center transition-all duration-300 ${
            scrolled ? "h-14" : "h-16"
          }`}
        >
          {/* Logo - Added aria-label for better accessibility */}
          <div className="flex-shrink-0 flex items-center z-50">
            <Link
              to="/"
              className="flex items-center space-x-3"
              aria-label="Home"
            >
              <motion.img
                src="/profile.jpeg"
                alt="Pranav K Jha"
                className={`rounded-full object-cover border-2 border-blue-500 transition-all duration-300 ${
                  scrolled ? "h-10 w-10" : "h-12 w-12"
                }`}
                animate={{ scale: scrolled ? 1 : 1.1 }}
                loading="lazy"
              />
              <div className="hidden sm:block">
                <span
                  className={`font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 dark:from-blue-400 dark:via-purple-400 dark:to-emerald-400 transition-all duration-300 ${
                    scrolled ? "text-base leading-5" : "text-xl leading-7"
                  }`}
                >
                  PRANAV K JHA
                </span>
                <p
                  className={`text-gray-500 dark:text-gray-400 transition-all duration-300 ${
                    scrolled ? "text-xs opacity-90" : "text-sm opacity-100"
                  }`}
                >
                  AI Engineer
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-4"
            aria-label="Main navigation"
          >
            {navigationConfig.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  to={item.href}
                  aria-current={isActiveLink(item.href) ? "page" : undefined}
                  className={`px-4 font-medium transition-all duration-300 relative group ${
                    scrolled ? "py-2 text-sm" : "py-3 text-base"
                  } leading-relaxed ${
                    isActiveLink(item.href)
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <div className="relative">
                    <div
                      className={`flex items-center transition-all duration-300 ${
                        scrolled ? "space-x-2" : "space-x-3"
                      }`}
                    >
                      {item.title}
                      {item.subItems && (
                        <ChevronDown
                          className={`transition-all duration-300 ${
                            scrolled ? "h-3.5 w-3.5" : "h-4 w-4"
                          }`}
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"
                      aria-hidden="true"
                    ></span>
                  </div>
                </Link>

                {/* Dropdown Menu */}
                {item.subItems && (
                  <div
                    className="absolute left-0 mt-1 w-56 origin-top-left rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby={`${item.href}-button`}
                  >
                    <div className="py-1">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          role="menuitem"
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex items-center space-x-4 lg:hidden">
            <ThemeToggle />
            <motion.button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-50 transition-colors"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white dark:bg-gray-900 shadow-lg"
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigationConfig.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActiveLink(item.href)
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
});

export default Navbar;
