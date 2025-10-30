import React from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaCode, FaServer } from "react-icons/fa";

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
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
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

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={item}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-blue-500 text-4xl mb-4">
                <FaUserTie className="inline-block" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Who I Am</h3>
              <p className="text-gray-600">
                A passionate developer with a keen eye for design and a love for
                creating beautiful, functional web applications.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-blue-500 text-4xl mb-4">
                <FaCode className="inline-block" />
              </div>
              <h3 className="text-xl font-semibold mb-3">What I Do</h3>
              <p className="text-gray-600">
                I build responsive, accessible, and performant web applications
                using modern technologies and best practices.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-blue-500 text-4xl mb-4">
                <FaServer className="inline-block" />
              </div>
              <h3 className="text-xl font-semibold mb-3">My Approach</h3>
              <p className="text-gray-600">
                Focused on clean code, user experience, and continuous learning
                to deliver high-quality solutions.
              </p>
            </motion.div>
          </motion.div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Hi, I'm <span className="text-primary-600">Pranav Jha</span>
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                I'm an AI Engineer with a passion for building intelligent
                systems that solve real-world problems. I specialize in Machine
                Learning, Deep Learning, and Computer Vision, with experience in
                developing and deploying AI models in production environments.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                My journey in AI started with a curiosity about how machines can
                learn from data. Since then, I've worked on various projects
                involving natural language processing, computer vision, and
                predictive modeling.
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
      </section>
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Hi, I'm <span className="text-primary-600">Pranav Jha</span>
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                I'm an AI Engineer with a passion for building intelligent
                systems that solve real-world problems. I specialize in Machine
                Learning, Deep Learning, and Computer Vision, with experience in
                developing and deploying AI models in production environments.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                My journey in AI started with a curiosity about how machines can
                learn from data. Since then, I've worked on various projects
                involving natural language processing, computer vision, and
                predictive modeling.
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
      </section>
    </>
  );
};

export default About;
