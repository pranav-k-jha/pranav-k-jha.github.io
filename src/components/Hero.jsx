import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-gray-950"
    >
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <div
            className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 border ${
              theme === "dark"
                ? "bg-white/5 border-white/10 text-gray-300"
                : "bg-gray-100 border-gray-200 text-gray-600"
            }`}
          >
            AI Engineer · LLM Specialist · RAG Architect
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
            <span className="block text-gray-900 dark:text-white">
              PRANAV JHA
            </span>
          </h1>

          {/* Animated Role */}
          <div className="h-14 flex justify-center mb-6">
            <TypeAnimation
              sequence={[
                "Building Scalable LLM Systems",
                2000,
                "Designing Production RAG Pipelines",
                2000,
                "Deploying Enterprise AI Solutions",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
            />
          </div>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
            I transform complex AI research into scalable, production-ready
            systems powering real-world applications.
          </p>

          {/* CTAs */}
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/projects"
              className="px-6 py-3 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className={`px-6 py-3 rounded-xl font-semibold border transition-all duration-300 ${
                theme === "dark"
                  ? "border-white/20 text-white hover:bg-white/10"
                  : "border-gray-300 text-gray-800 hover:bg-gray-100"
              }`}
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
