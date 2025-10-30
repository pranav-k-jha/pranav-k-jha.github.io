import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const techStack = ["Python", "TensorFlow", "PyTorch", "OpenCV", "NLP"];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      id="home"
      className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 font-sans"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Hero Text */}
        <motion.div className="text-center md:text-left" variants={container}>
          <motion.p
            className="text-blue-600 font-medium mb-4"
            variants={fadeInUp}
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            variants={fadeInUp}
          >
            <span className="block">Pranav Jha</span>
            <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              AI Engineer
            </span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl mx-auto md:mx-0"
            variants={fadeInUp}
          >
            Building intelligent systems and solving complex problems with
            Machine Learning and Deep Learning.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            variants={fadeInUp}
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 inline-flex items-center"
            >
              View My Work
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
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
              href="#contact"
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium transition-all duration-300 hover:bg-blue-50 hover:-translate-y-0.5 inline-flex items-center"
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

          {/* Tech Stack */}
          <motion.div className="mt-12" variants={fadeInUp}>
            <p className="text-sm text-slate-500 mb-4">
              TECHNOLOGIES I WORK WITH
            </p>
            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              variants={container}
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  variants={item}
                  className="bg-white text-slate-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 border border-slate-100"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
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
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -left-6 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
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
              className="absolute -bottom-8 -right-4 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
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
              className="absolute -top-8 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            />

            {/* Code Block */}
            <motion.div
              className="relative z-10 p-1 bg-white/30 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-white/80 p-6 rounded-xl">
                <div className="flex space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="bg-slate-900 p-4 rounded-lg">
                  <pre className="text-green-400 text-sm md:text-base overflow-x-auto">
                    <code>
                      {`class AIEngineer:
    def __init__(self):
        self.name = "Pranav Jha"
        self.role = "AI Engineer"
        self.skills = ["Machine Learning", 
                      "Deep Learning", 
                      "Computer Vision"]
        
    def build_ai_solutions(self):
        return "Transforming ideas into intelligent systems"`}
                    </code>
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
