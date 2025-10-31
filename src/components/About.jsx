import { motion } from "framer-motion";
import { FaBrain, FaSearch, FaRobot } from "react-icons/fa";

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-lg text-gray-600 mb-6">
                  I'm an AI Engineer with a passion for building intelligent
                  systems that solve real-world problems. I specialize in
                  Machine Learning, Deep Learning, and Computer Vision, with
                  experience in developing and deploying AI models in production
                  environments.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  My journey in AI started with a curiosity about how machines
                  can learn from data. Since then, I've worked on various
                  projects involving natural language processing, computer
                  vision, and predictive modeling.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Contact Me
                  </a>
                  <a
                    href="#projects"
                    className="px-6 py-3 border-2 border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    View My Work
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                <div className="relative z-10 w-full max-w-md mx-auto">
                  <div className="aspect-w-3 aspect-h-4 rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                      alt="Pranav Jha"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-100 rounded-full -z-10"></div>
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-200 rounded-full -z-10"></div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* LLM Development Card */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
            >
              <div className="text-blue-500 text-4xl mb-4">
                <FaBrain className="inline-block" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                LLM & Fine-tuning
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Custom LLM development and optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Domain-specific model fine-tuning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Instruction tuning for specific tasks</span>
                </li>
              </ul>
            </motion.div>

            {/* RAG Systems Card */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
            >
              <div className="text-blue-500 text-4xl mb-4">
                <FaSearch className="inline-block" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                RAG Systems
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Vector database integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Context-aware retrieval systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Hybrid search implementations</span>
                </li>
              </ul>
            </motion.div>

            {/* Agentic AI & GenAI Card */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
            >
              <div className="text-blue-500 text-4xl mb-4">
                <FaRobot className="inline-block" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                AI Solutions
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Autonomous agent development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>End-to-end GenAI applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Multi-agent systems</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
