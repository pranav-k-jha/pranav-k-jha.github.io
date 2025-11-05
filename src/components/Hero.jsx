import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { socialLinks } from "../lib/socialLinks";
import { useTheme } from "../context/ThemeContext";
import { useMemo, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const animationVariants = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  },
};

const Hero = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const techStack = useMemo(
    () => ["Python", "TensorFlow", "NLP", "LLM", "RAG", "Gen AI"],
    []
  );

  // Save scroll position before component unmounts
  useEffect(() => {
    const saveScrollPosition = () => {
      sessionStorage.setItem('homeScrollPosition', window.scrollY);
    };
    
    window.addEventListener('beforeunload', saveScrollPosition);
    return () => {
      window.removeEventListener('beforeunload', saveScrollPosition);
    };
  }, []);

  // Restore scroll position on mount if coming from a page reload
  useEffect(() => {
    if (performance.navigation?.type === 1) { // Check if page was reloaded
      const savedPosition = sessionStorage.getItem('homeScrollPosition');
      if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition, 10));
        sessionStorage.removeItem('homeScrollPosition');
      }
    }
  }, [location]);

  return (
    <motion.section
      id="home"
      className="relative min-h-screen pt-20 pb-20 overflow-hidden font-sans bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-900/50 dark:via-gray-950 dark:to-purple-900/50"
      initial="hidden"
      animate="show"
      variants={animationVariants.container}
    >
      <div className="container max-w-7xl mx-auto px-6 md:px-12 relative z-10 ">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-10rem)]">
          {/* Left Column - Hero Text */}
          <motion.div
            className="text-center md:text-left space-y-6"
            variants={animationVariants.container}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2"
              variants={animationVariants.fadeInUp}
            >
              <span
                className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium backdrop-blur-xl border ${
                  theme === "dark"
                    ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-300"
                    : "bg-blue-500/10 border-blue-500/20 text-blue-700"
                }`}
              >
                <span className="relative flex h-2 w-2 mr-2">
                  <span
                    className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                      theme === "dark" ? "bg-cyan-400" : "bg-blue-600"
                    }`}
                  ></span>
                  <span
                    className={`relative inline-flex rounded-full h-2 w-2 ${
                      theme === "dark" ? "bg-cyan-500" : "bg-blue-600"
                    }`}
                  ></span>
                </span>
                Available for opportunities
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={animationVariants.fadeInUp}>
              <h1
                className={`text-3xl md:text-4xl lg:text-6xl font-black mb-4 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                <span className="block mb-2 font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                  PRANAV JHA
                </span>
              </h1>

              {/* Animated Roles */}
              <div className="h-16 flex items-start justify-center md:justify-start">
                <TypeAnimation
                  sequence={[
                    "NLP Engineer",
                    1500,
                    "LLM Developer",
                    1500,
                    "RAG Specialist",
                    1500,
                    "AI/ML Engineer",
                    1500,
                    "Gen AI Expert",
                    1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="inline-block text-3xl md:text-4xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 dark:from-purple-400 dark:via-pink-400 dark:to-orange-400 bg-clip-text text-transparent"
                  style={{ lineHeight: "1.2" }}
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              className={`text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
              variants={animationVariants.fadeInUp}
            >
              Transforming complex AI research into scalable, production-ready
              solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start pt-4"
              variants={animationVariants.fadeInUp}
            >
              <Link
                to="/resources"
                className={`group relative px-6 py-3 rounded-xl font-semibold text-sm text-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500"
                }`}
              >
                <span className="relative z-10 flex items-center justify-center">
                  Learning Resources
                  <svg
                    className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              </Link>

              <a
                href="mailto:pranav.jha@mail.concordia.ca"
                className={`group px-6 py-3 rounded-xl text-sm font-semibold backdrop-blur-xl border-2 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg ${
                  theme === "dark"
                    ? "bg-white/5 border-cyan-400/50 text-cyan-300 hover:bg-white/10 hover:border-cyan-400"
                    : "bg-white/50 border-blue-500/50 text-blue-700 hover:bg-white/80 hover:border-blue-600"
                }`}
              >
                <span className="flex items-center justify-center">
                  Let's Talk
                  <svg
                    className="w-4 h-4 ml-1.5 group-hover:rotate-12 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
              </a>
            </motion.div>

            {/* Company Logos */}
            <motion.div
              className="flex items-center justify-center md:justify-start gap-6 pt-6"
              variants={animationVariants.fadeInUp}
            >
              <span
                className={`text-sm font-medium ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Working with
              </span>
              <div className="flex items-center gap-4">
                <img
                  src="/Fujitsu-Logo.png"
                  alt="Fujitsu"
                  className="h-8 object-contain opacity-100 hover:opacity-100 transition-opacity"
                />
                <span
                  className={
                    theme === "dark" ? "text-gray-600" : "text-gray-400"
                  }
                >
                  •
                </span>
                <img
                  src="/western-logo.svg"
                  alt="Western University"
                  className="h-8 object-contain opacity-100 dark:opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center md:justify-start gap-4 pt-6"
              variants={animationVariants.fadeInUp}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl backdrop-blur-xl border transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                    theme === "dark"
                      ? "bg-white/5 border-white/10 hover:bg-white/10"
                      : "bg-white/50 border-gray-200 hover:bg-white"
                  } ${social.color}`}
                  aria-label={social.label}
                >
                  {social.label === "GitHub" && (
                    <FaGithub
                      className="w-5 h-5"
                      style={{
                        color: theme === "dark" ? "#f0f0f0" : "#181717",
                      }}
                    />
                  )}
                  {social.label === "LinkedIn" && (
                    <FaLinkedin
                      className="w-5 h-5"
                      style={{ color: "#0A66C2" }}
                    />
                  )}
                  {social.label === "Twitter" && (
                    <FaTwitter
                      className="w-5 h-5"
                      style={{ color: "#1DA1F2" }}
                    />
                  )}
                  {social.label === "Email" && (
                    <FaEnvelope
                      className="w-5 h-5"
                      style={{ color: "#EA4335" }}
                    />
                  )}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Card Stack */}
          <motion.div
            className="relative hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Code Card with Glassmorphism */}
              <motion.div
                className={`relative backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10"
                    : "bg-white/60 border-white/40"
                }`}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                  transform: "translateZ(0)",
                }}
              >
                {/* Browser Controls */}
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
                </div>

                {/* Code Window */}
                <div
                  className={`rounded-2xl p-6 overflow-hidden ${
                    theme === "dark" ? "bg-slate-950" : "bg-slate-900"
                  }`}
                >
                  <pre className="text-sm md:text-base max-h-80 overflow-y-auto">
                    <code>
                      <span className="text-purple-400">class</span>{" "}
                      <span className="text-yellow-400">AIEngineer</span>
                      <span className="text-gray-400">:</span>
                      {"\n  "}
                      <span className="text-purple-400">def</span>{" "}
                      <span className="text-blue-400">__init__</span>
                      <span className="text-gray-400">(</span>
                      <span className="text-orange-400">self</span>
                      <span className="text-gray-400">):</span>
                      {"\n    "}
                      <span className="text-orange-400">self</span>
                      <span className="text-gray-400">.</span>
                      <span className="text-cyan-400">name</span>
                      <span className="text-gray-400"> = </span>
                      <span className="text-green-400">"Pranav Jha"</span>
                      {"\n    "}
                      <span className="text-orange-400">self</span>
                      <span className="text-gray-400">.</span>
                      <span className="text-cyan-400">role</span>
                      <span className="text-gray-400"> = </span>
                      <span className="text-green-400">"AI Engineer"</span>
                      {"\n    "}
                      <span className="text-orange-400">self</span>
                      <span className="text-gray-400">.</span>
                      <span className="text-cyan-400">skills</span>
                      <span className="text-gray-400"> = [</span>
                      <span className="text-green-400">"Machine Learning"</span>
                      <span className="text-gray-400">,</span>
                      <span className="text-green-400">"Deep Learning"</span>
                      <span className="text-gray-400">,</span>
                      <span className="text-green-400">"NLP"</span>
                      <span className="text-gray-400">,</span>
                      <span className="text-green-400">"Computer Vision"</span>
                      <span className="text-gray-400">]</span>
                      {"\n\n  "}
                      <span className="text-purple-400">def</span>{" "}
                      <span className="text-blue-400">innovate</span>
                      <span className="text-gray-400">(</span>
                      <span className="text-orange-400">self</span>
                      <span className="text-gray-400">):</span>
                      {"\n    "}
                      <span className="text-purple-400">return</span>{" "}
                      <span className="text-green-400">
                        "Building intelligent systems"
                      </span>
                    </code>
                  </pre>
                </div>
              </motion.div>

              {/* Floating Tech Stack Pills */}
              <div className="mt-8 space-y-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <p
                    className={`text-xs font-semibold tracking-wider mb-4 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    TECH STACK
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {techStack.map((tech, i) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        whileHover={{ scale: 1.1, y: -4 }}
                        className={`px-4 py-2 rounded-xl backdrop-blur-xl border font-medium text-xs shadow-lg ${
                          theme === "dark"
                            ? "bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border-cyan-500/20 text-cyan-300"
                            : "bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20 text-blue-700"
                        }`}
                        style={{
                          willChange: "transform",
                          backfaceVisibility: "hidden",
                        }}
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Stats Pills */}
                <motion.div
                  className="flex flex-wrap gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {[
                    { icon: "📚", text: "8+ Publications" },
                    { icon: "🏆", text: "5+ Yrs Exp" },
                    { icon: "🔄", text: "Updated Nov 2024" },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className={`px-4 py-2 rounded-xl backdrop-blur-xl border text-xs font-medium ${
                        theme === "dark"
                          ? "bg-white/5 border-white/10 text-gray-300"
                          : "bg-white/60 border-white/40 text-gray-700"
                      }`}
                    >
                      <span className="mr-2">{stat.icon}</span>
                      {stat.text}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
