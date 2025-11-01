import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { navigationConfig } from "../lib/navigation";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/pranav-k-jha",
    color:
      "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/pranav-k-jha",
    color:
      "text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300",
    label: "LinkedIn",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com/pranav_kjha",
    color:
      "text-sky-500 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300",
    label: "Twitter",
  },
  {
    icon: FaEnvelope,
    href: "mailto:pranav.jha@mail.concordia.ca",
    color:
      "text-rose-600 hover:text-rose-700 dark:text-rose-400 dark:hover:text-rose-300",
    label: "Email",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderNavItem = (item) => {
    const hasSubItems = item.subItems && item.subItems.length > 0;

    return (
      <div
        key={item.href}
        className="relative group"
        onMouseEnter={() => setOpenMenu(hasSubItems ? item.title : null)}
        onMouseLeave={() => setOpenMenu(null)}
      >
        <Link
          to={item.href}
          className="relative px-4 py-2 text-sm font-medium text-navy-900 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 group/link rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
        >
          <span className="relative z-10">{item.title}</span>
          {hasSubItems && (
            <ChevronDown
              className={`inline-block ml-1 h-4 w-4 text-gray-400 dark:text-gray-500 transition-transform duration-300 ${
                openMenu === item.title ? "rotate-180" : ""
              }`}
            />
          )}
        </Link>

        <AnimatePresence>
          {hasSubItems && openMenu === item.title && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => setOpenMenu(item.title)}
              onMouseLeave={() => setOpenMenu(null)}
              className="absolute top-full left-0 mt-2 w-64 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-xl shadow-xl overflow-hidden divide-y divide-gray-100 dark:divide-gray-800"
            >
              {item.subItems.map((subItem) => (
                <Link
                  key={subItem.href}
                  to={subItem.href}
                  className="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300 group"
                >
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm text-gray-900 dark:text-gray-100 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {subItem.title}
                    </span>
                    {subItem.description && (
                      <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {subItem.description}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-sm dark:bg-navy-900/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center space-x-3">
            <img
              src="/profile.jpeg"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover border-2 border-primary-600"
            />
            <div className="hidden md:block">
              <h1 className="bg-gradient-to-r from-orange-900 via-blue-500 to-cyan-500 bg-clip-text text-transparent text-xl font-bold">
                PRANAV K JHA
              </h1>
              <p className="text-sm text-black dark:text-gray-600">
                AI Engineer
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navigationConfig.map(renderNavItem)}

            {/* Social Icons - Desktop */}
            <div className="flex items-center space-x-3 ml-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xl p-2 rounded-full ${social.color} transition-all duration-300 hover:bg-gray-100/30 dark:hover:bg-gray-800/50`}
                    aria-label={social.label}
                    whileHover={{ y: -2, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 dark:text-gray-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigationConfig.map((item) => (
                  <div key={item.href}>
                    <Link
                      to={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                    {item.subItems && (
                      <div className="pl-4">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            className="block px-3 py-2 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Social Links - Mobile */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center px-3 py-2 text-base font-medium ${social.color} transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md`}
                        aria-label={social.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                      >
                        <Icon className="mr-3 h-5 w-5" />
                        {social.label}
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
