import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { navigationConfig } from "../lib/navigation";
import { Link, useLocation } from "react-router-dom";
import { socialLinks } from "../lib/socialLinks";
import ThemeToggle from "../context/ToggleButton";

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const scrollTimeout = useRef(null);

  const isActiveLink = (path) => {
    const currentPath = location.pathname;
    if (path === "/") {
      return currentPath === path;
    }
    return currentPath === path || currentPath.startsWith(`${path}/`);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      // Debounce the scroll event for better performance
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        setScrolled(window.scrollY > 10);
      }, 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      window.removeEventListener("scroll", handleScroll, { passive: true });
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      ref={navRef}
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-0"
          : "bg-transparent dark:bg-transparent py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center transition-all duration-300 ease-in-out ${
            scrolled ? "h-14" : "h-16"
          }`}
        >
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <motion.img
                src="/profile.jpeg"
                alt="Pranav K Jha"
                className={`rounded-full object-cover border-2 border-blue-500 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
                  scrolled ? "h-10 w-10" : "h-12 w-12"
                }`}
                animate={{
                  scale: scrolled ? 1 : 1.1,
                }}
              />
              <div className="hidden sm:block transition-all duration-300 ease-in-out">
                <span
                  className={`font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 dark:from-blue-400 dark:via-purple-400 dark:to-emerald-400 group-hover:from-blue-700 group-hover:via-purple-700 group-hover:to-emerald-700 dark:group-hover:from-blue-300 dark:group-hover:via-purple-300 dark:group-hover:to-emerald-300 transition-all duration-300 ${
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
          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex items-center space-x-4">
              {navigationConfig.map((item) => (
                <div key={item.href} className="relative group">
                  <Link
                    to={item.href}
                    className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                      scrolled ? "text-sm" : "text-sm md:text-base"
                    } ${
                      location.pathname === item.href
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    <div className="flex items-center">
                      {item.title}
                      {item.subItems && (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )}
                    </div>
                  </Link>
                  {item.subItems && (
                    <div className="absolute left-0 mt-1 w-56 origin-top-left rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <div className="md:hidden">
              <ThemeToggle />
            </div>
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-50 transition-colors duration-300"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
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
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b-2 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            <div className="pt-2 pb-3 space-y-1 px-4">
              {navigationConfig.map((item) => {
                const active = isActiveLink(item.href);
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`block px-3 py-2 text-base font-medium ${
                      isActiveLink(item.href)
                        ? "text-blue-600 dark:text-blue-400" // Only text color changes
                        : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-center space-x-4 px-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full ${social.color} text-gray-500 dark:text-gray-400`}
                      aria-label={social.label}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
