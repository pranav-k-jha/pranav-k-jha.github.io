import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, CheckCircle, Zap, ArrowRight, Star } from "lucide-react";

// Check for reduced motion preference
const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const ServiceTemplate = ({
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
        "Project timelines vary based on complexity, but most projects are completed within 4-8 weeks.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, we offer maintenance packages and ongoing support to ensure your AI solutions continue to perform optimally.",
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        {/* Back Button */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors font-medium"
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
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-gradient-to-r ${color} text-white shadow-lg shadow-blue-500/30`}
                whileHover={
                  prefersReducedMotion ? {} : { scale: 1.05, rotate: 5 }
                }
              >
                <Icon className="w-8 h-8" />
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent mb-6 leading-tight"
              >
                {title}
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl"
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
                className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
              >
                <span className="w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mr-3"></span>
                What's Included
              </motion.h2>

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="group relative overflow-hidden p-5 bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700/50 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all backdrop-blur-sm"
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
                className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
              >
                <span className="w-1 h-8 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full mr-3"></span>
                Technologies We Use
              </motion.h2>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-3"
              >
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="px-6 py-3 bg-white dark:bg-gray-800/50 rounded-full border border-gray-200 dark:border-gray-700/50 hover:border-blue-500/50 dark:hover:border-blue-400/50 font-medium text-gray-700 dark:text-gray-300 transition-all backdrop-blur-sm"
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
                  className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
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
                className={`p-8 bg-gradient-to-r ${color} text-white relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-grid-white/10"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-2">Pricing</h2>
                  <p className="opacity-90">Choose what fits you best</p>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {pricing.map((plan, index) => (
                  <motion.div
                    key={index}
                    className={`relative p-6 rounded-2xl border-2 transition-all ${
                      plan.popular
                        ? "border-blue-500 dark:border-blue-400 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 shadow-lg shadow-blue-500/20"
                        : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50"
                    }`}
                    whileHover={
                      prefersReducedMotion ? {} : { scale: 1.02, y: -4 }
                    }
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                          <Star className="w-3 h-3 mr-1 fill-current" />
                          MOST POPULAR
                        </span>
                      </div>
                    )}

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                      {plan.description}
                    </p>

                    <div className="mb-6">
                      <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        ${plan.price}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 ml-2">
                        /{plan.type}
                      </span>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <motion.button
                      className={`w-full px-6 py-3.5 rounded-xl font-semibold transition-all ${
                        plan.popular
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40"
                          : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Started
                    </motion.button>
                  </motion.div>
                ))}

                <div className="text-center pt-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Need something custom?
                  </p>
                  <button className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm">
                    Contact us for a tailored solution →
                  </button>
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
