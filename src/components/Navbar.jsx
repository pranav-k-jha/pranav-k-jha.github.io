// Navbar.jsx
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
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef(null);
  const scrollTimeout = useRef(null);

  // ---------- Active link ----------
  const isActiveLink = (path) => {
    const cur = location.pathname;
    return path === "/"
      ? cur === path
      : cur === path || cur.startsWith(`${path}/`);
  };

  // ---------- Close menu on route change ----------
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // ---------- Scroll handling (disabled when menu open) ----------
  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) return;
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setScrolled(window.scrollY > 10);
      }, 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mobileMenuOpen]);

  // ---------- Click outside to close mobile menu ----------
  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, []);

  // ---------- Lock body scroll when mobile menu open ----------
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // ---------- Track navbar height ----------
  useEffect(() => {
    if (!navRef.current) return;
    const observer = new ResizeObserver((entries) => {
      setNavHeight(entries[0].contentRect.height);
    });
    observer.observe(navRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 navbar-gradient ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-md py-0"
          : "py-2"
      }`}
    >
      {/* ---------- Main navbar ---------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center transition-all duration-300 ${
            scrolled ? "h-14" : "h-16"
          }`}
        >
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center z-50">
            <Link to="/" className="flex items-center space-x-3">
              <motion.img
                src="/profile.jpeg"
                alt="Pranav K Jha"
                className={`rounded-full object-cover border-2 border-blue-500 transition-all duration-300 ${
                  scrolled ? "h-10 w-10" : "h-12 w-12"
                }`}
                animate={{ scale: scrolled ? 1 : 1.1 }}
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
          <nav className="hidden md:flex items-center space-x-4">
            {navigationConfig.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  to={item.href}
                  className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                    scrolled ? "text-xs" : "text-sm"
                  } ${
                    location.pathname === item.href
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <div
                    className={`flex items-center transition-all duration-300 ${
                      scrolled ? "space-x-1" : "space-x-2"
                    }`}
                  >
                    {item.title}
                    {item.subItems && (
                      <ChevronDown
                        className={`transition-all duration-300 ${
                          scrolled ? "h-3 w-3" : "h-4 w-4"
                        }`}
                      />
                    )}
                  </div>
                </Link>

                {/* Dropdown */}
                {item.subItems && (
                  <div className="absolute left-0 mt-1 w-56 origin-top-left rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
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
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <motion.button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="p-2 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-50 transition-colors"
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

      {/* ---------- Mobile Menu ---------- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: navHeight,
              maxHeight: `calc(100vh - ${navHeight}px)`,
              overflowY: "auto",
              WebkitOverflowScrolling: "touch",
              zIndex: 10,
            }}
          >
            {/* Menu links */}
            <div className="px-4 py-3 space-y-1">
              {navigationConfig.map((item) => {
                const active = isActiveLink(item.href);
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      active
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>

            {/* Social links */}
            <div className="border-t border-gray-200 dark:border-gray-800 py-4">
              <div className="flex justify-center space-x-4 px-4">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full ${social.color} text-gray-500 dark:text-gray-400`}
                      whileHover={{ scale: 1.12 }}
                      whileTap={{ scale: 0.92 }}
                      aria-label={social.label}
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
