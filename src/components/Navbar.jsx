// Navbar.jsx
import { memo, useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { navigationConfig, allNavItems } from "../lib/navigation";
import { Link, useLocation } from "react-router-dom";
import { socialLinks } from "../lib/socialLinks";
import ThemeToggle from "../context/ToggleButton";

// Memoize the Navbar to prevent unnecessary re-renders
const Navbar = memo(function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const navRef = useRef(null);
  const moreButtonRef = useRef(null);
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
    if (moreButtonRef.current && !moreButtonRef.current.contains(e.target)) {
      setIsMoreOpen(false);
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

  // Toggle more dropdown
  const toggleMoreMenu = useCallback((e) => {
    e?.preventDefault();
    setIsMoreOpen((prev) => !prev);
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    scrolled ? "text-sm leading-5" : "text-lg leading-7"
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
            {/* First 5 main navigation items */}
            {navigationConfig.mainNav.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  to={item.href}
                  aria-current={isActiveLink(item.href) ? "page" : undefined}
                  className={`block font-medium transition-all duration-300 relative group ${
                    scrolled ? "py-2 text-xs" : "py-3 text-[0.8rem]"
                  } leading-relaxed ${
                    isActiveLink(item.href)
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <div className="relative">
                    <div className="flex items-center">{item.title}</div>
                    <span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"
                      aria-hidden="true"
                    ></span>
                  </div>
                </Link>
              </div>
            ))}

            {/* More dropdown */}
            {navigationConfig.moreNav.length > 0 && (
              <div ref={moreButtonRef} className="relative group">
                <div className="relative group">
                  <button
                    onClick={toggleMoreMenu}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleMoreMenu(e);
                      } else if (e.key === "Escape" && isMoreOpen) {
                        e.preventDefault();
                        setIsMoreOpen(false);
                        moreButtonRef.current?.focus();
                      }
                    }}
                    className={`p-2 rounded-full transition-all duration-200 ${
                      isMoreOpen
                        ? "bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400"
                        : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-200"
                    }`}
                    aria-expanded={isMoreOpen}
                    aria-haspopup="true"
                    aria-label="More options"
                    ref={moreButtonRef}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-200 ${
                        isMoreOpen ? "rotate-90" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="12" cy="5" r="1"></circle>
                      <circle cx="12" cy="19" r="1"></circle>
                    </svg>
                  </button>
                  <span
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs bg-gray-800 dark:bg-gray-700 text-white rounded whitespace-nowrap z-[9999] shadow-lg transition-opacity duration-150 ${
                      isMoreOpen
                        ? "opacity-0"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    More Options
                  </span>
                </div>

                {/* Dropdown menu */}
                <AnimatePresence>
                  {isMoreOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{
                        duration: 0.15,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 z-50 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      tabIndex={-1}
                    >
                      <div className="py-1" role="none">
                        {navigationConfig.moreNav.map((item, index) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            onClick={() => {
                              setIsMoreOpen(false);
                              moreButtonRef.current?.focus();
                            }}
                            className={`block px-4 py-2 text-[0.8rem] ${
                              isActiveLink(item.href)
                                ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            }`}
                            role="menuitem"
                            tabIndex={-1}
                            ref={(el) => {
                              if (index === 0) {
                                // Focus first item when dropdown opens
                                requestAnimationFrame(() => el?.focus());
                              }
                            }}
                            onKeyDown={(e) => {
                              if (e.key === "Escape") {
                                e.preventDefault();
                                setIsMoreOpen(false);
                                moreButtonRef.current?.focus();
                              }
                            }}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="lg:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-xl border-t border-gray-100 dark:border-gray-800"
          >
            <div className="px-4 py-2 space-y-1">
              {navigationConfig.mainNav.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.1 + index * 0.05,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    to={item.href}
                    onClick={toggleMobileMenu}
                    className={`block px-4 py-3.5 rounded-lg text-base font-medium transition-colors duration-200 ${
                      isActiveLink(item.href)
                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                        : "text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/70"
                    }`}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}

              <div className="border-t border-gray-100 dark:border-gray-800 my-2"></div>

              {navigationConfig.moreNav.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay:
                      0.1 + (navigationConfig.mainNav.length + index) * 0.05,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    to={item.href}
                    onClick={toggleMobileMenu}
                    className={`block px-4 py-3.5 rounded-lg text-base font-medium transition-colors duration-200 ${
                      isActiveLink(item.href)
                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                        : "text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/70"
                    }`}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}

              {/* Social Links */}
              <div className="flex items-center justify-center space-x-4 py-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    aria-label={link.name}
                  >
                    <span className="sr-only">{link.name}</span>
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
});

export default Navbar;
