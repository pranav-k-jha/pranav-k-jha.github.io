import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, CheckCircle, Clock, Users, Code, Zap } from "lucide-react";

const ServiceTemplate = ({
  title,
  description,
  image,
  icon: Icon,
  features,
  technologies,
  pricing,
  faqs,
  color,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle back navigation
  const handleBackClick = (e) => {
    e.preventDefault();
    // Use history API to navigate back
    window.history.back();
    // Scroll to top after navigation
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <a
            href="#"
            onClick={handleBackClick}
            className="inline-flex items-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mb-12"
            >
              <motion.div
                variants={itemVariants}
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 bg-gradient-to-r ${color} text-white shadow-lg`}
              >
                <Icon className="w-7 h-7" />
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
              >
                {title}
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
              >
                {description}
              </motion.p>
            </motion.div>

            {/* Features */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16"
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
              >
                What's Included
              </motion.h2>
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Technologies */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16"
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r from-blue-500 to-cyan-500 after:rounded-full"
              >
                Technologies We Use
              </motion.h2>
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-3"
              >
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium"
                  >
                    {tech}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* FAQ */}
            {faqs && faqs.length > 0 && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="mb-16"
              >
                <motion.h2
                  variants={itemVariants}
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
                >
                  Frequently Asked Questions
                </motion.h2>
                <motion.div variants={containerVariants} className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {faq.answer}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </div>

          {/* Pricing Card */}
          <div className="lg:sticky lg:top-8 lg:h-fit">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700/50"
            >
              <div className={`p-6 bg-gradient-to-r ${color} text-white`}>
                <h2 className="text-2xl font-bold text-white">Pricing</h2>
                <p className="text-white/95">
                  Choose the right plan for your needs
                </p>
              </div>

              <div className="p-6">
                {pricing.map((plan, index) => (
                  <div
                    key={index}
                    className={`mb-6 p-6 rounded-xl border ${
                      plan.popular
                        ? "border-2 border-blue-500 dark:border-blue-400 bg-blue-50/50 dark:bg-blue-900/20"
                        : "border-gray-200 dark:border-gray-700"
                    }`}
                  >
                    {plan.popular && (
                      <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                        Most Popular
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {plan.description}
                    </p>
                    <div className="mb-6">
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-lg shadow-md transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Contact for Pricing
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                  <p>
                    Need a custom solution?{" "}
                    <a
                      href="#contact"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Contact us
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTemplate;
