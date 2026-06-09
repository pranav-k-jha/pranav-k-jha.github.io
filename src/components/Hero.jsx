import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { socialLinks } from "../lib/socialLinks";
import { useTheme } from "../context/ThemeContext";
import { useMemo, useEffect, useState } from "react";
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
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const westernImages = [
    "/western/western-1.jpg",
    "/western/western-2.jpg",
    "/western/western-3.jpg",
    "/western/western-4.jpg",
    "/western/western-5.jpg",
    "/western/western-6.jpg",
    "/western/western-7.jpg",
    "/western/western-8.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % westernImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const techStack = useMemo(
    () => ["Python", "TensorFlow", "NLP", "LLM", "RAG", "Gen AI"],
    [],
  );

  // Save scroll position before component unmounts
  useEffect(() => {
    const saveScrollPosition = () => {
      sessionStorage.setItem("homeScrollPosition", window.scrollY);
    };

    window.addEventListener("beforeunload", saveScrollPosition);
    return () => {
      window.removeEventListener("beforeunload", saveScrollPosition);
    };
  }, []);

  // Restore scroll position on mount if coming from a page reload
  useEffect(() => {
    if (performance.navigation?.type === 1) {
      // Check if page was reloaded
      const savedPosition = sessionStorage.getItem("homeScrollPosition");
      if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition, 10));
        sessionStorage.removeItem("homeScrollPosition");
      }
    }
  }, [location]);

  return (
    <motion.section
      id="home"
      className="relative h-screen overflow-hidden font-sans"
      initial="hidden"
      animate="show"
      variants={animationVariants.container}
    >
      {/* Full-height Background Carousel */}
      <div className="absolute inset-0 overflow-hidden">
        {westernImages.map((image, index) => (
          <motion.img
            key={image}
            src={image}
            alt={`Western University ${index + 1}`}
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: index === currentImageIndex ? 1 : 0,
              scale: index === currentImageIndex ? 1 : 1.1,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-black/75" />
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {westernImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-white w-8"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-12 relative z-10 h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-8 items-center w-full">
          {/* Left Column - Hero Text */}
          <motion.div
            className="text-center md:text-left space-y-6 p-2"
            variants={animationVariants.container}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2"
              variants={animationVariants.fadeInUp}
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs sm:text-sm font-medium backdrop-blur-xl border bg-white/10 border-white/20 text-white">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-cyan-400"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                Available for opportunities
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={animationVariants.fadeInUp}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 text-white">
                <span className="block mb-2 text-5xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  PRANAV JHA
                </span>
              </h1>

              {/* Animated Roles */}
              <div className="h-10 sm:h-14 md:h-16 flex items-start justify-center md:justify-start mt-2">
                <TypeAnimation
                  sequence={[
                    "NLP ENGINEER",
                    1500,
                    "LLM DEVELOPER",
                    1500,
                    "RAG SPECIALIST",
                    1500,
                    "AI/ML ENGINEER",
                    1500,
                    "GEN AI EXPERT",
                    1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="inline-block text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent"
                  style={{ lineHeight: "1.2" }}
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg md:text-xl font-light max-w-xl mx-auto md:mx-0 leading-relaxed text-gray-200"
              variants={animationVariants.fadeInUp}
            >
              Transforming complex AI research into scalable, production-ready
              solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4"
              variants={animationVariants.fadeInUp}
            >
              <Link
                to="/services"
                className={`group relative px-5 py-3 rounded-xl font-semibold text-sm sm:text-base text-white hover:text-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500"
                }`}
              >
                <span className="relative z-10 flex items-center justify-center">
                  View Services
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
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </Link>

              <Link
                to="/llm-course"
                className={`group relative px-5 py-3 rounded-xl font-semibold text-sm sm:text-base text-white hover:text-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500"
                    : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500"
                }`}
              >
                <span className="relative z-10 flex items-center justify-center">
                  LLM Course
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
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </Link>
            </motion.div>

            {/* Scroll indicator - Hero section only */}
            <div
              className={`absolute bottom-[-2rem] md:bottom-[-1rem] left-0 right-0 z-10 transition-opacity duration-300 ${
                isScrolling ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              <motion.div
                className="mx-auto w-fit flex flex-col items-center cursor-pointer"
                onClick={() =>
                  window.scrollTo({
                    top: window.innerHeight - 80,
                    behavior: "smooth",
                  })
                }
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  y: [10, 0, -10, -20],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <span className="text-xs mb-1 text-white/80">
                  Scroll to explore
                </span>
                <div className="w-5 h-8 border-2 rounded-full flex justify-center p-1 border-white/50">
                  <motion.div
                    className="w-1 h-2 rounded-full bg-white/80"
                    animate={{ y: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Company Logos */}
            <motion.div
              className="flex items-center justify-center md:justify-start gap-6 pt-6"
              variants={animationVariants.fadeInUp}
            >
              <span className="text-sm font-medium text-gray-300">
                Working with
              </span>
              <div className="flex items-center gap-4">
                <span className="text-gray-500">•</span>
                <img
                  src="/western-logo.svg"
                  alt="Western University"
                  className="h-8 object-contain opacity-80 hover:opacity-100 transition-opacity rounded-sm"
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
                  className="p-3 rounded-xl backdrop-blur-xl border transition-all duration-300 hover:scale-110 hover:-translate-y-1 bg-white/10 border-white/20 hover:bg-white/20"
                  aria-label={social.label}
                >
                  {social.label === "GitHub" && (
                    <FaGithub
                      className="w-5 h-5"
                      style={{ color: "#f0f0f0" }}
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
            <div className="relative w-full max-w-md mx-auto">
              {/* Main Code Card with Glassmorphism */}
              <motion.div
                className="relative backdrop-blur-2xl rounded-3xl p-6 sm:p-8 shadow-2xl border bg-white/10 border-white/20"
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
                  <pre className="text-xs sm:text-sm max-h-80 overflow-y-auto">
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
              <div className="mt-6 space-y-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <p className="text-xs font-semibold tracking-wider mb-3 text-gray-400">
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
                        className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl backdrop-blur-xl border font-medium text-xs shadow-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border-cyan-500/30 text-cyan-300"
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
                    { icon: "🔄", text: "Updated Feb 2026" },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl backdrop-blur-xl border text-xs font-medium bg-white/10 border-white/20 text-gray-200"
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
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <img
          src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer"
          alt="Wave divider"
          className="w-full h-auto"
          style={{ transform: "translateY(1px)" }}
        />
      </div>
    </motion.section>
  );
};

export default Hero;
