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

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
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
              Focused on clean code, user experience, and continuous learning to
              deliver high-quality solutions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
