import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";

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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-2xl mx-4 sm:mx-6 lg:mx-0">
        <div className="space-y-6 mb-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 dark:from-purple-400 dark:via-blue-400 dark:to-emerald-400">
              SEND ME A MESSAGE
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-gray-600 dark:text-gray-300 text-sm sm:text-base"
          >
            Have a project in mind or want to discuss potential opportunities?
            Let's talk.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg dark:shadow-gray-800/10"
        >
          {submitStatus.message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
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
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="block w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-gray-900/50 text-gray-900 dark:text-white placeholder-gray-400 transition-all duration-200"
                  placeholder="John Doe"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
              >
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="block w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-gray-900/50 text-gray-900 dark:text-white placeholder-gray-400 transition-all duration-200"
                  placeholder="your@email.com"
                />
              </motion.div>

              <motion.div
                className="sm:col-span-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label
                  htmlFor="subject"
                  className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1"
                >
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="block w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-gray-900/50 text-gray-900 dark:text-white placeholder-gray-400 transition-all duration-200"
                  placeholder="How can I help you?"
                />
              </motion.div>

              <motion.div
                className="sm:col-span-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="block w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-gray-900/50 text-gray-900 dark:text-white placeholder-gray-400 transition-all duration-200 resize-none"
                  placeholder="Your message..."
                />
              </motion.div>
            </div>

            <motion.div
              className="pt-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className={`group w-full flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-sm hover:shadow-md ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="ml-2 -mr-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
