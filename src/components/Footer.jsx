import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  SiTensorflow,
  SiPytorch,
  SiNextdotjs,
  SiTailwindcss,
  SiOrcid,
  SiGooglescholar,
} from "react-icons/si";
import { FaBrain } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social media links with platform-specific styling
  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/pranav-k-jha",
      label: "LinkedIn",
      color: "text-blue-600 hover:text-blue-800",
    },
    {
      icon: FaTwitter,
      href: "https://x.com/pranav_kjha",
      label: "Twitter",
      color: "text-sky-500 hover:text-sky-700",
    },
    {
      icon: FaGithub,
      href: "https://github.com/pranav-k-jha",
      label: "GitHub",
      color: "text-purple-600 hover:text-purple-800",
    },
    {
      icon: SiOrcid,
      href: "https://orcid.org/0000-0001-8053-988X",
      label: "ORCiD",
      color: "text-green-600 hover:text-green-800",
    },
    {
      icon: SiGooglescholar,
      href: "https://scholar.google.ca/citations?user=_KvkPzkAAAAJ&hl=en",
      label: "Google Scholar",
      color: "text-blue-500 hover:text-blue-700",
    },
  ];

  // Technology stack icons and names
  const techStack = [
    { Icon: FaBrain, name: "AI/ML", color: "text-purple-600" },
    { Icon: SiTensorflow, name: "TensorFlow", color: "text-orange-600" },
    { Icon: SiPytorch, name: "PyTorch", color: "text-red-600" },
    { Icon: SiNextdotjs, name: "Next.js", color: "text-white" },
    { Icon: SiTailwindcss, name: "Tailwind", color: "text-teal-600" },
  ];

  // Quick navigation links
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Publications", href: "/publications" },
    { name: "Resources", href: "/resources" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900/90 via-gray-950 to-blue-900/90 backdrop-blur-xl border-t border-gray-800/50 py-16 px-4 sm:px-6 lg:px-8 transition-all duration-500 ease-out">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-center md:text-left"
          >
            <div className="flex justify-center md:justify-start items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-blue-500/30 ring-offset-2 ring-offset-gray-950 shadow-xl"
              >
                <img
                  src="/profile.jpeg"
                  alt="Pranav K Jha"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 dark:from-blue-400 dark:via-purple-400 dark:to-emerald-400">
                  PRANAV K JHA
                </h3>
                <p className="text-sm text-gray-400">AI Engineer</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Specializing in LLM fine-tuning, AI infrastructure, and
              cutting-edge machine learning solutions that drive real-world
              impact.
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-sm font-semibold text-gray-400 dark:text-gray-300 mb-4">
              Contact Information
            </h4>
            <div className="space-y-3">
              <motion.div
                className="flex items-center space-x-3 text-gray-400"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-2 rounded-lg bg-blue-500/10 dark:bg-blue-500/5">
                  <FaMapMarkerAlt className="text-blue-400 text-sm" />
                </div>
                <span className="text-sm">Montreal, QC, Canada</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3 text-gray-400"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-2 rounded-lg bg-blue-500/10 dark:bg-blue-500/5">
                  <FaEnvelope className="text-blue-400 text-sm" />
                </div>
                <a
                  href="mailto:pranav.jha@mail.concordia.ca"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                >
                  pranav.jha@mail.concordia.ca
                </a>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3 text-gray-400"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-2 rounded-lg bg-blue-500/10 dark:bg-blue-500/5">
                  <FaEnvelope className="text-blue-400 text-sm" />
                </div>
                <a
                  href="mailto:pranav.jha@fujitsu.com"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                >
                  pranav.jha@fujitsu.com
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <h4 className="text-sm font-semibold text-gray-400 dark:text-gray-300 mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center text-sm text-gray-400 hover:text-blue-400 transition-colors group"
                >
                  <FaExternalLinkAlt className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-400 dark:text-gray-300 mb-3">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 px-2 py-1.5 bg-white/10 border border-white/20 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <tech.Icon
                      className={`h-3 w-3 ${tech.color}`}
                      title={tech.name}
                    />
                    <span className="text-xs font-medium text-gray-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links & Bottom Section */}
        <div className="border-t border-gray-200/50 dark:border-gray-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`text-xl ${social.color} transition-all duration-300 hover:shadow-lg`}
                    aria-label={social.label}
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-400 flex items-center gap-3">
              <span>&copy; {currentYear} Pranav K Jha</span>
              <span className="h-4 w-px bg-gray-700"></span>
              <span className="text-xs opacity-75">All Rights Reserved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
