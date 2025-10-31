import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { navigationConfig } from "../lib/navigation";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
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
          to={item.href} // Changed from href to to
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
                  to={subItem.href} // Changed from href to to
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

          <div className="hidden md:flex items-center space-x-2">
            {navigationConfig.map(renderNavItem)}
          </div>

          <button className="md:hidden p-2 text-gray-700 dark:text-gray-200">
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
