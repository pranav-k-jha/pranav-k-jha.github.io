import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Loader2, ArrowRight, ShieldAlert } from "lucide-react";
import emailjs from "@emailjs/browser";

// List of common profane words to filter
const PROFANE_WORDS = [
  // Add your list of profane words here
  "badword1",
  "badword2", // Replace with actual profane words
];

// Rate limiting - 3 messages per 10 minutes
const RATE_LIMIT = {
  MAX_REQUESTS: 3,
  WINDOW_MS: 10 * 60 * 1000, // 10 minutes
};

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

// Simple math question for bot protection
const generateMathQuestion = () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 5) + 1;
  return {
    question: `What is ${num1} + ${num2}?`,
    answer: num1 + num2,
  };
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    // Honeypot field - should remain empty
    website: "",
    // Math question for bot protection
    botCheck: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: null,
    message: "",
  });
  const [mathQuestion, setMathQuestion] = useState(generateMathQuestion());
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const submitTimeoutRef = useRef(null);

  // Clear any pending timeouts when component unmounts
  useEffect(() => {
    return () => {
      if (submitTimeoutRef.current) {
        clearTimeout(submitTimeoutRef.current);
      }
    };
  }, []);

  const [requestTimestamps, setRequestTimestamps] = useState(() => {
    // Load timestamps from localStorage
    const saved = localStorage.getItem("contactFormTimestamps");
    return saved ? JSON.parse(saved) : [];
  });

  const cleanInput = (str) => {
    if (!str) return "";
    // Basic XSS protection
    return String(str)
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  };

  const containsProfanity = (text) => {
    const lowerText = text.toLowerCase();
    return PROFANE_WORDS.some((word) => lowerText.includes(word));
  };

  const isRateLimited = () => {
    const now = Date.now();
    const recentRequests = requestTimestamps.filter(
      (timestamp) => now - timestamp < RATE_LIMIT.WINDOW_MS
    );
    return recentRequests.length >= RATE_LIMIT.MAX_REQUESTS;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: cleanInput(value),
    }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic rate limiting (5 seconds between submissions)
    const now = Date.now();
    if (now - lastSubmitTime < 5000) {
      setSubmitStatus({
        success: false,
        message: "Please wait a moment before sending another message.",
      });
      return;
    }

    // Honeypot check
    if (formData.website) {
      console.log("Bot detected by honeypot");
      return;
    }

    // Math question check
    if (parseInt(formData.botCheck) !== mathQuestion.answer) {
      setSubmitStatus({
        success: false,
        message:
          "Please answer the math question correctly to prove you're human.",
      });
      // Generate a new math question
      setMathQuestion(generateMathQuestion());
      return;
    }

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        success: false,
        message: "Please fill in all required fields.",
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      setSubmitStatus({
        success: false,
        message: "Please enter a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: "" });
    setLastSubmitTime(now);

    // Check rate limit
    if (isRateLimited()) {
      setSubmitStatus({
        success: false,
        message: "Too many requests. Please try again later.",
      });
      setIsSubmitting(false);
      return;
    }

    // Check for profanity
    if (
      containsProfanity(formData.name) ||
      containsProfanity(formData.message) ||
      containsProfanity(formData.subject)
    ) {
      setSubmitStatus({
        success: false,
        message:
          "Your message contains inappropriate language. Please revise and try again.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Add current timestamp for rate limiting
      setRequestTimestamps((prev) => [...prev, Date.now()]);

      // Prepare data for email (excluding honeypot and bot check fields)
      const { website, botCheck, ...emailData } = formData;

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        emailData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus({
        success: true,
        message:
          "Your message has been sent successfully! I'll get back to you soon.",
      });

      // Reset form and generate new math question
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        website: "",
        botCheck: "",
      });
      setMathQuestion(generateMathQuestion());
    } catch (error) {
      console.error("Email sending error:", error);
      setSubmitStatus({
        success: false,
        message:
          "Failed to send message. Please try again later or contact me directly at your.email@example.com",
      });
    } finally {
      setIsSubmitting(false);
      // Auto-clear success message after 5 seconds
      if (submitStatus.success) {
        submitTimeoutRef.current = setTimeout(() => {
          setSubmitStatus({ success: null, message: "" });
        }, 5000);
      }
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

          <form onSubmit={handleSubmit} className="space-y-4 relative">
            {/* Honeypot field - hidden from users but visible to bots */}
            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <label htmlFor="website">
                Don't fill this out if you're human:
              </label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex="-1"
                value={formData.website}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
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

              {/* Math Question */}
              <motion.div
                variants={fadeUp}
                custom={4}
                className="sm:col-span-2 space-y-2"
              >
                <label
                  htmlFor="botCheck"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {mathQuestion.question}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="botCheck"
                  name="botCheck"
                  required
                  value={formData.botCheck}
                  onChange={handleChange}
                  placeholder="Answer to prove you're human"
                  className="block w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-gray-800/80 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                  <ShieldAlert className="w-3 h-3" />
                  This helps prevent spam messages
                </p>
              </motion.div>
            </div>

            {/* Submit Button */}
            <motion.div variants={fadeUp} custom={5} className="pt-2">
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
                  <>
                    <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
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
