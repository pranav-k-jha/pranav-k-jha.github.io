import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Loader2, ArrowRight, ShieldAlert } from "lucide-react";
import emailjs from "@emailjs/browser";

/* ------------------------------------------------------------------ */
/*  Configuration constants                                            */
/* ------------------------------------------------------------------ */
const PROFANE_WORDS = [
  // add real words here
  "badword1",
  "badword2",
];

const RATE_LIMIT = {
  MAX_REQUESTS: 3,
  WINDOW_MS: 10 * 60 * 1000, // 10 minutes
};

const MIN_PARAGRAPHS = 2; // at least 2 real paragraphs
const MIN_WORDS = 20; // total words
const MAX_WORDS = 500; // optional upper bound

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */
const pageTransition = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
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

/* ------------------------------------------------------------------ */
/*  Simple math question for bot protection                           */
/* ------------------------------------------------------------------ */
const generateMathQuestion = () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 5) + 1;
  return { question: `What is ${num1} + ${num2}?`, answer: num1 + num2 };
};

/* ------------------------------------------------------------------ */
/*  Helper – word count (ignores extra spaces)                        */
/* ------------------------------------------------------------------ */
const countWords = (text) => {
  return text
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0).length;
};

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "", // honeypot
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

  /* ---------------------------------------------------------------- */
  /*  Load / save rate‑limit timestamps from localStorage            */
  /* ---------------------------------------------------------------- */
  const [requestTimestamps, setRequestTimestamps] = useState(() => {
    const saved = localStorage.getItem("contactFormTimestamps");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "contactFormTimestamps",
      JSON.stringify(requestTimestamps)
    );
  }, [requestTimestamps]);

  /* ---------------------------------------------------------------- */
  /*  Clean up timeout on unmount                                     */
  /* ---------------------------------------------------------------- */
  useEffect(() => {
    return () => {
      if (submitTimeoutRef.current) clearTimeout(submitTimeoutRef.current);
    };
  }, []);

  /* ---------------------------------------------------------------- */
  /*  Input sanitisation & profanity check                           */
  /* ---------------------------------------------------------------- */
  const cleanInput = (str) => {
    if (!str) return "";
    return String(str)
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  };

  const containsProfanity = (text) => {
    const lower = text.toLowerCase();
    return PROFANE_WORDS.some((w) => lower.includes(w));
  };

  const isRateLimited = () => {
    const now = Date.now();
    const recent = requestTimestamps.filter(
      (t) => now - t < RATE_LIMIT.WINDOW_MS
    );
    return recent.length >= RATE_LIMIT.MAX_REQUESTS;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: cleanInput(value) }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  /* ---------------------------------------------------------------- */
  /*  Form submission                                                */
  /* ---------------------------------------------------------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    /* ---- 5‑second debounce ---- */
    const now = Date.now();
    if (now - lastSubmitTime < 5000) {
      setSubmitStatus({
        success: false,
        message: "Please wait a moment before sending another message.",
      });
      return;
    }

    /* ---- Honeypot ---- */
    if (formData.website) {
      console.log("Bot detected (honeypot)");
      return;
    }

    /* ---- Math question ---- */
    if (parseInt(formData.botCheck, 10) !== mathQuestion.answer) {
      setSubmitStatus({
        success: false,
        message: "Please answer the math question correctly.",
      });
      setMathQuestion(generateMathQuestion());
      return;
    }

    /* ---- Required fields ---- */
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

    /* ---- NEW: Paragraph & word‑count validation ---- */
    const paragraphs = formData.message
      .split(/\n/)
      .filter((p) => p.trim().length > 0);
    const totalWords = countWords(formData.message);

    if (paragraphs.length < MIN_PARAGRAPHS) {
      setSubmitStatus({
        success: false,
        message: `Your message must contain at least ${MIN_PARAGRAPHS} paragraphs (use a blank line to separate).`,
      });
      return;
    }
    if (totalWords < MIN_WORDS) {
      setSubmitStatus({
        success: false,
        message: `Message too short – please write at least ${MIN_WORDS} words (you have ${totalWords}).`,
      });
      return;
    }
    if (totalWords > MAX_WORDS) {
      setSubmitStatus({
        success: false,
        message: `Message too long – keep it under ${MAX_WORDS} words.`,
      });
      return;
    }

    /* ---- Rate limiting ---- */
    if (isRateLimited()) {
      setSubmitStatus({
        success: false,
        message: "Too many requests. Try again later.",
      });
      return;
    }

    /* ---- Profanity ---- */
    if (
      containsProfanity(formData.name) ||
      containsProfanity(formData.message) ||
      containsProfanity(formData.subject)
    ) {
      setSubmitStatus({
        success: false,
        message: "Your message contains inappropriate language.",
      });
      return;
    }

    /* ---- Submit ---- */
    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: "" });
    setLastSubmitTime(now);
    setRequestTimestamps((prev) => [...prev, now]);

    try {
      const { website, botCheck, ...emailData } = formData;
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        emailData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus({
        success: true,
        message: "Your message has been sent! I'll reply soon.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        website: "",
        botCheck: "",
      });
      setMathQuestion(generateMathQuestion());
    } catch (err) {
      console.error(err);
      setSubmitStatus({
        success: false,
        message: "Failed to send. Try again later or email me directly.",
      });
    } finally {
      setIsSubmitting(false);
      if (submitStatus.success) {
        submitTimeoutRef.current = setTimeout(() => {
          setSubmitStatus({ success: null, message: "" });
        }, 5000);
      }
    }
  };

  /* ---------------------------------------------------------------- */
  /*  Render                                                          */
  /* ---------------------------------------------------------------- */
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
      variants={pageTransition}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="space-y-4 mb-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
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
            className="space-y-2"
          >
            <p className="text-lg sm:text-xl font-light text-gray-600 dark:text-gray-400">
              Have a project in mind or want to discuss potential opportunities?
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              I'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>

        {/* Form Card */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            hidden: { opacity: 0, y: 20 },
          }}
          className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg dark:shadow-gray-800/10"
        >
          {/* Status message */}
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
            {/* Honeypot (hidden) */}
            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <label htmlFor="website">Leave blank if human</label>
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
              {/* Name */}
              <motion.div
                variants={fadeUp}
                custom={0}
                whileHover={{ scale: 1.02 }}
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
                  className="block w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-gray-800/80 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200"
                />
              </motion.div>

              {/* Email */}
              <motion.div
                variants={fadeUp}
                custom={1}
                whileHover={{ scale: 1.02 }}
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
                  placeholder="you@example.com"
                  className="block w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-gray-800/80 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200"
                />
              </motion.div>

              {/* Subject */}
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
                  placeholder="How can I help?"
                  className="block w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-gray-800/80 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200"
                />
              </motion.div>

              {/* Message */}
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
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write at least two paragraphs (use a blank line to separate)…"
                  className="block w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-gray-800/80 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200 resize-none"
                />
                {/* Live counter (optional) */}
                <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  {countWords(formData.message)} words •{" "}
                  {formData.message.split(/\n/).filter((p) => p.trim()).length}{" "}
                  paragraph(s)
                </div>
              </motion.div>

              {/* Bot check */}
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
                  placeholder="Answer"
                  className="block w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-gray-800/80 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                  <ShieldAlert className="w-3 h-3" />
                  Spam protection
                </p>
              </motion.div>
            </div>

            {/* Submit */}
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
                    Sending…
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
}
