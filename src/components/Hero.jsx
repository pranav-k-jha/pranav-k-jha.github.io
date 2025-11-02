import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { socialLinks } from "../lib/socialLinks";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const { theme } = useTheme(); // Get current theme from context
  const techStack = ["Python", "TensorFlow", "NLP", "LLM", "RAG", "Gen AI"];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const techContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  // Dynamic background gradients
  const bgGradient =
    theme === "dark"
      ? "bg-gradient-to-br from-gray-900 via-purple-900 to-blue-950"
      : "bg-gradient-to-br from-blue-50 via-white to-cyan-50";

  const headingGradient =
    theme === "dark"
      ? "bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300"
      : "bg-gradient-to-r from-blue-800 via-purple-800 to-emerald-800";

  const buttonGradient =
    theme === "dark"
      ? "from-blue-700 to-cyan-600 hover:shadow-blue-900/50"
      : "from-blue-600 to-cyan-500 hover:shadow-blue-500/30";

  return (
    <motion.section
      id="home"
      className={`relative pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-44 lg:pb-44 overflow-hidden font-sans transition-colors duration-500 ${bgGradient}`}
      initial="hidden"
      animate="show"
      variants={container}
    >
      <div className="container max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Hero Text */}
        <motion.div className="text-center md:text-left" variants={container}>
          <motion.p
            className={`font-semibold mb-4 ${
              theme === "dark" ? "text-cyan-300" : "text-blue-600"
            }`}
            variants={fadeInUp}
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            className={`text-2xl md:text-3xl lg:text-6xl font-bold mb-6 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
            variants={fadeInUp}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 dark:from-blue-400 dark:via-purple-400 dark:to-emerald-400">
              PRANAV
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-purple-600 to-blue-600 dark:from-emerald-400 dark:via-purple-400 dark:to-blue-400">
              {" "}
              JHA
            </span>
            <div className="w-full text-center md:text-left">
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
                style={{
                  display: "inline-block",
                  lineHeight: "1.2",
                  padding: "0.2em 0",
                }}
                repeat={Infinity}
                className={`bg-clip-text text-transparent ${headingGradient} w-full`}
              />
            </div>
          </motion.h1>
          <motion.p
            className={`text-lg  md:text-xl mb-8 max-w-xl mx-auto md:mx-0 ${
              theme === "dark" ? "text-gray-300" : "text-slate-600"
            }`}
            variants={fadeInUp}
          >
            Building intelligent systems and solving complex problems with
            Machine Learning and Deep Learning.
          </motion.p>
          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            variants={fadeInUp}
          >
            <a
              href="/resources"
              className={`
                px-6 py-3 rounded-lg font-medium 
                transition-all duration-300 
                inline-flex items-center group
                bg-gradient-to-r ${buttonGradient}
                text-white hover:text-gray-100 
                transform hover:-translate-y-0.5 
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                shadow-md hover:shadow-lg
              `}
            >
              View My Work
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a
              href="mailto:pranav.jha@pranavjha.com"
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center ${
                theme === "dark"
                  ? "border border-cyan-300 text-cyan-300 hover:bg-gray-800/50"
                  : "border border-blue-600 text-blue-600 hover:bg-blue-50"
              }`}
            >
              Let's Talk
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
          </motion.div>
          {/* Currently Working With */}
          <motion.div
            className="flex items-center justify-center md:justify-start mt-8 space-x-3"
            variants={fadeInUp}
            transition={{ delay: 0.8 }}
          >
            <span
              className={`text-sm ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Currently working with
            </span>
            <img
              src="/Fujitsu-Logo.png"
              alt="Fujitsu"
              className="h-7 object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
            <span className="text-gray-400 mx-1">•</span>
            <img
              src="/western-logo.svg"
              alt="Western University"
              className="h-7 object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="mt-8 flex justify-center md:justify-start space-x-6"
            variants={fadeInUp}
            transition={{ delay: 0.6 }}
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition-colors ${social.color} text-gray-600 dark:text-gray-400`}
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Hero Illustration */}
        <motion.div
          className="relative hidden md:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative z-10 w-full max-w-lg mx-auto">
            {/* Animated Blobs */}
            <motion.div
              animate={{
                x: [0, 30, -20, 0],
                y: [0, -50, 20, 0],
                scale: [1, 1.1, 0.9, 1],
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute -top-6 -left-6 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 ${
                theme === "dark" ? "bg-purple-700" : "bg-blue-500"
              }`}
            />
            <motion.div
              animate={{
                x: [0, 30, -20, 0],
                y: [0, -50, 20, 0],
                scale: [1, 1.1, 0.9, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                delay: 2,
                ease: "easeInOut",
              }}
              className={`absolute -bottom-8 -right-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 ${
                theme === "dark" ? "bg-blue-700" : "bg-cyan-400"
              }`}
            />
            <motion.div
              animate={{
                x: [0, 30, -20, 0],
                y: [0, -50, 20, 0],
                scale: [1, 1.1, 0.9, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                delay: 4,
                ease: "easeInOut",
              }}
              className={`absolute -top-8 -right-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 ${
                theme === "dark" ? "bg-teal-600" : "bg-indigo-500"
              }`}
            />

            {/* Code Block */}
            <motion.div
              className={`relative z-10 p-1 rounded-2xl shadow-2xl border ${
                theme === "dark"
                  ? "bg-gray-800/50 border-gray-700"
                  : "bg-white/30 border-white/20"
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div
                className={`p-6 rounded-xl ${
                  theme === "dark" ? "bg-gray-800/80" : "bg-white/80"
                }`}
              >
                <div className="flex space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div
                  className={`p-4 rounded-lg ${
                    theme === "dark" ? "bg-gray-900" : "bg-slate-900"
                  }`}
                >
                  <pre className="text-green-400 text-sm md:text-base overflow-x-auto">
                    <code>{`class AIEngineer:
    def __init__(self):
        self.name = "Pranav Jha"
        self.role = "AI Engineer"
        self.skills = ["Machine Learning", "Deep Learning", "Computer Vision"]
        
    def build_ai_solutions(self):
        return "Transforming ideas into intelligent systems"`}</code>
                  </pre>
                </div>
              </div>
            </motion.div>
            {/* Tech Stack */}
            <motion.div className="mt-12" variants={fadeInUp}>
              <p
                className={`text-sm mb-4 ${
                  theme === "dark" ? "text-gray-400" : "text-slate-500"
                }`}
              >
                TECHNOLOGIES I WORK WITH
              </p>
              <motion.div
                className="flex flex-wrap gap-4 justify-center md:justify-start"
                variants={techContainer}
                initial="hidden"
                animate="show"
              >
                {techStack.map((tech) => (
                  <motion.div
                    key={tech}
                    variants={item}
                    className={`text-xs font-medium px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 border ${
                      theme === "dark"
                        ? "bg-gray-800 text-cyan-300 border-gray-700"
                        : "bg-white text-slate-800 border-slate-100"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            {/* Compact Stats */}
            <motion.div
              className="mt-6 flex flex-wrap gap-3"
              variants={fadeInUp}
              transition={{ delay: 0.7 }}
            >
              {/* Blog Posts */}
              {/* <div
                className={`text-xs px-3 py-1.5 rounded-full flex items-center ${
                  theme === "dark"
                    ? "bg-gray-800/40 text-gray-300"
                    : "bg-white/80 text-gray-700 border border-gray-100"
                }`}
              >
                <span className="mr-1.5">📝</span>
                <span>12+ Blogs</span>
              </div> */}

              {/* Projects */}
              <div
                className={`text-xs px-3 py-1.5 rounded-full flex items-center ${
                  theme === "dark"
                    ? "bg-gray-800/40 text-gray-300"
                    : "bg-white/80 text-gray-700 border border-gray-100"
                }`}
              >
                <span className="mr-1.5">📚</span>
                <span>8+ Publications</span>
              </div>

              {/* Experience */}
              <div
                className={`text-xs px-3 py-1.5 rounded-full flex items-center ${
                  theme === "dark"
                    ? "bg-gray-800/40 text-gray-300"
                    : "bg-white/80 text-gray-700 border border-gray-100"
                }`}
              >
                <span className="mr-1.5">🏆</span>
                <span>5+ Yrs Exp</span>
              </div>
              {/* Last Updated */}
              <div
                className={`text-xs px-3 py-1.5 rounded-full flex items-center ${
                  theme === "dark"
                    ? "bg-gray-800/40 text-gray-300"
                    : "bg-white/80 text-gray-700 border border-gray-100"
                }`}
              >
                <span className="mr-1.5">🔄</span>
                <span>
                  Updated:{" "}
                  {new Date().toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
