import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Zap, ArrowRight, Star } from "lucide-react";

// Check for reduced motion preference
const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const ServiceTemplate = ({
  theme = {
    gradient: "from-blue-500 to-cyan-500",
    hoverGradient: "hover:from-blue-600 hover:to-cyan-600",
    text: "text-blue-600",
    border: "border-blue-500",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    iconBg: "bg-gradient-to-r from-blue-500 to-cyan-500",
  },
  title = "AI Solutions Development",
  description = "Transform your business with cutting-edge artificial intelligence solutions tailored to your specific needs.",
  icon: Icon = Zap,
  features = [
    "Custom AI model development",
    "End-to-end pipeline integration",
    "Real-time monitoring & optimization",
    "Scalable cloud infrastructure",
    "24/7 technical support",
    "Regular performance reports",
  ],
  technologies = [
    "Python",
    "PyTorch",
    "TensorFlow",
    "LangChain",
    "Docker",
    "AWS",
  ],
  pricing = [
    {
      name: "Starter",
      price: "150",
      type: "hourly",
      description: "Perfect for small projects",
      features: [
        "10 hours consulting",
        "Basic implementation",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "5000",
      type: "project",
      description: "Most popular for businesses",
      features: [
        "Full project delivery",
        "Custom development",
        "Priority support",
        "3 months maintenance",
      ],
      popular: true,
    },
  ],
  faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity, but most projects are completed within 4-8 weeks. I'll get back to you within 24 hours.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, I offer maintenance packages and ongoing support to ensure your AI solutions continue to perform optimally.",
    },
  ],
  color = "from-blue-600 to-purple-600",
}) => {
  const [activeFaq, setActiveFaq] = useState(null);

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
    hidden: prefersReducedMotion ? {} : { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const location = useLocation();

  // Save scroll position before component unmounts
  useEffect(() => {
    const saveScrollPosition = () => {
      sessionStorage.setItem("serviceTemplateScrollPosition", window.scrollY);
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
      const savedPosition = sessionStorage.getItem(
        "serviceTemplateScrollPosition"
      );
      if (savedPosition) {
        // Use setTimeout to ensure the DOM is fully rendered
        setTimeout(() => {
          window.scrollTo(0, parseInt(savedPosition, 10));
          sessionStorage.removeItem("serviceTemplateScrollPosition");
        }, 0);
      }
    }
  }, [location]);

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-white/80 to-white/30 dark:from-gray-950/80 dark:to-gray-950/30 pt-20`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        {/* Back Button */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Hero Header */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <motion.div
                variants={itemVariants}
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${theme.iconBg} text-white shadow-md shadow-blue-500/20`}
                whileHover={
                  prefersReducedMotion ? {} : { scale: 1.05, rotate: 5 }
                }
              >
                <Icon className="w-8 h-8" />
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent mb-4 leading-tight"
              >
                {title}
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl text-base"
              >
                {description}
              </motion.p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center"
              >
                <span className="w-1 h-6 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mr-2"></span>
                What's Included
              </motion.h2>

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="group relative overflow-hidden p-4 bg-white dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700/50 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all backdrop-blur-sm text-sm"
                    whileHover={
                      prefersReducedMotion
                        ? {}
                        : {
                            y: -2,
                            boxShadow:
                              "0 10px 20px -5px rgba(59, 130, 246, 0.2)",
                          }
                    }
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {feature}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Technologies */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center"
              >
                <span className="w-1 h-8 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full mr-3"></span>
                Technologies Used
              </motion.h2>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-3"
              >
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="px-4 py-2 text-sm bg-white dark:bg-gray-800/50 rounded-full border border-gray-200 dark:border-gray-700/50 hover:border-blue-500/50 dark:hover:border-blue-400/50 font-medium text-gray-700 dark:text-gray-300 transition-all backdrop-blur-sm"
                    whileHover={
                      prefersReducedMotion ? {} : { scale: 1.05, y: -2 }
                    }
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech}
                  </motion.div>
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
              >
                <motion.h2
                  variants={itemVariants}
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center"
                >
                  <span className="w-1 h-8 bg-gradient-to-b from-pink-600 to-orange-600 rounded-full mr-3"></span>
                  Frequently Asked Questions
                </motion.h2>

                <motion.div variants={containerVariants} className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700/50 backdrop-blur-sm"
                    >
                      <button
                        onClick={() =>
                          setActiveFaq(activeFaq === index ? null : index)
                        }
                        className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors"
                      >
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white pr-4">
                          {faq.question}
                        </h3>
                        <motion.div
                          animate={{ rotate: activeFaq === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ArrowRight className="w-5 h-5 text-gray-400 transform rotate-90" />
                        </motion.div>
                      </button>
                      <motion.div
                        initial={false}
                        animate={{
                          height: activeFaq === index ? "auto" : 0,
                          opacity: activeFaq === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-gray-600 dark:text-gray-400">
                          {faq.answer}
                        </p>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </div>

          {/* Pricing Sidebar */}
          <div className="lg:sticky lg:top-8 lg:h-fit">
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50"
            >
              <div
                className={`p-8 bg-gradient-to-r ${theme.gradient} text-white relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-grid-white/10"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-2 text-white">
                    Pricing
                  </h2>
                  <p className="opacity-90 text-white/90 font-medium">
                    Choose what fits you best
                  </p>
                </div>
              </div>

              <div className="p-4 space-y-4">
                {pricing.map((plan, index) => (
                  <motion.div
                    key={index}
                    className={`relative p-4 rounded-lg border-2 transition-all text-sm ${
                      plan.popular
                        ? `border-${theme.border} dark:border-${theme.border} bg-gradient-to-br ${theme.bg} dark:bg-${theme.bg} shadow-md shadow-${theme.border}/10`
                        : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50"
                    }`}
                    whileHover={
                      prefersReducedMotion ? {} : { scale: 1.02, y: -4 }
                    }
                  >
                    {plan.popular && (
                      <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
                        <span className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                          <Star className="w-2.5 h-2.5 mr-1 fill-current" />
                          POPULAR
                        </span>
                      </div>
                    )}

                    <h3
                      className={`text-lg font-semibold ${theme.text} dark:text-white mb-1`}
                    >
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-xs">
                      {plan.description}
                    </p>

                    <div className="mb-4 flex items-center">
                      <div className="relative group">
                        <div className="flex items-center">
                          <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Contact
                          </span>
                          <svg
                            className="w-5 h-5 ml-2 text-gray-400 group-hover:text-blue-500 transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                        </div>
                        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 text-xs leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <motion.div
                      className="w-full"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        to="/contact"
                        className={`w-full py-2.5 px-4 rounded-lg bg-gradient-to-r ${theme.gradient} text-white font-medium flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 ${theme.hoverGradient}`}
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        Contact
                      </Link>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Custom Solution Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700/50">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I understand that every business is unique. Let's discuss your
              project and how I can help create a tailored solution that
              perfectly fits your needs.
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`py-3 px-6 rounded-xl bg-gradient-to-r ${theme.gradient} text-white font-semibold flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 ${theme.hoverGradient}`}
                >
                  Get a Custom Quote
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center"
                  >
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.div>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTemplate;
