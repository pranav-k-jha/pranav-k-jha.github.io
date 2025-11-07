import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";

// Animation variants
const pageTransition = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      type: "spring",
      stiffness: 80,
      damping: 14,
    },
  }),
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: "" });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus({
        success: true,
        message: "Your message has been sent successfully!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      setSubmitStatus({
        success: false,
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
      variants={pageTransition}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-4 mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-center"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 dark:from-purple-400 dark:via-blue-400 dark:to-emerald-400">
              GET IN TOUCH
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="space-y-2 text-center"
          >
            <p className="text-lg sm:text-xl font-light text-gray-700 dark:text-gray-300">
              Have a project in mind or want to discuss potential opportunities?
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              I'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
            },
          }}
          className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg dark:shadow-gray-800/10"
        >
          {submitStatus.message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 12 }}
              className={`mb-4 p-3 rounded-lg text-sm ${
                submitStatus.success
                  ? "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-200"
                  : "bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-200"
              }`}
            >
              {submitStatus.message}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
              initial="hidden"
              animate="visible"
            >
              {/* Name Field */}
              <motion.div
                variants={fadeUp}
                custom={0}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 12 }}
              >
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="block w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-gray-800/80 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200 min-w-0 [&:-webkit-autofill]:dark:!text-white [&:-webkit-autofill]:dark:!bg-gray-800/80"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                variants={fadeUp}
                custom={1}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 12 }}
              >
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="block w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-gray-800/80 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200 min-w-0 [&:-webkit-autofill]:dark:!text-white [&:-webkit-autofill]:dark:!bg-gray-800/80"
                />
              </motion.div>

              {/* Subject Field */}
              <motion.div
                variants={fadeUp}
                custom={2}
                className="sm:col-span-2"
              >
                <label
                  htmlFor="subject"
                  className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1"
                >
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  className="block w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-gray-800/80 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200 min-w-0 [&:-webkit-autofill]:dark:!text-white [&:-webkit-autofill]:dark:!bg-gray-800/80"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                variants={fadeUp}
                custom={3}
                className="sm:col-span-2"
              >
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  className="block w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-gray-800/80 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200 resize-none [&:-webkit-autofill]:dark:!text-white [&:-webkit-autofill]:dark:!bg-gray-800/80"
                />
              </motion.div>
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={fadeUp} custom={4} className="pt-2">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className={`relative w-full flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-sm hover:shadow-md ${
                  isSubmitting ? "opacity-85 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <motion.div
                    key="sending"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center gap-2"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Loader2 className="h-4 w-4 text-white" />
                    </motion.div>
                    <span>Sending...</span>
                  </motion.div>
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                )}
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
