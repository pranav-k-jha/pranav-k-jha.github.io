import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { navigationConfig } from "../lib/navigation";
import { Link, useLocation } from "react-router-dom";

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/pranav-k-jha",
    color: "hover:bg-gray-100 dark:hover:bg-gray-800",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/pranav-k-jha",
    color: "hover:bg-blue-50 dark:hover:bg-blue-900/30",
    label: "LinkedIn",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com/pranav_kjha",
    color: "hover:bg-sky-50 dark:hover:bg-sky-900/30",
    label: "Twitter",
  },
  {
    icon: FaEnvelope,
    href: "mailto:pranav.jha@mail.concordia.ca",
    color: "hover:bg-rose-50 dark:hover:bg-rose-900/30",
    label: "Email",
  },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm"
          : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo - Make it non-shrinkable */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/profile.jpeg"
                alt="Pranav K Jha"
                className="h-10 w-10 rounded-full border-2 border-blue-500"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                PRANAV K JHA
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Increased spacing */}
          <nav className="hidden md:flex items-center space-x-4">
            {navigationConfig.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  to={item.href}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    {item.title}
                    {item.subItems && <ChevronDown className="ml-1 h-4 w-4" />}
                  </div>
                </Link>
                {/* ... rest of the dropdown code ... */}
              </div>
            ))}
          </nav>

          {/* Social Icons - Add margin for better spacing */}
          <div className="hidden md:flex items-center space-x-3 ml-6">
            {socialLinks.map((s, i) => {
              const Icon = s.icon; // ✅ define here
              return (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full ${s.color} transition hover:bg-gray-100/40 dark:hover:bg-gray-800/40`}
                  whileHover={{ y: -2 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Menu - Fixed positioning and full viewport height */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-16 left-0 right-0 bottom-0 bg-white dark:bg-gray-900 overflow-y-auto"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navigationConfig.map((item) => (
                <div
                  key={item.href}
                  className="space-y-1 border-b border-gray-100 dark:border-gray-800"
                >
                  <Link
                    to={item.href}
                    className={`block px-4 py-3 text-base font-medium ${
                      location.pathname === item.href
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {item.title}
                  </Link>
                  {item.subItems && (
                    <div className="pl-4 space-y-1 pb-2">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-full ${social.color} text-gray-500 dark:text-gray-400`}
                    aria-label={social.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
