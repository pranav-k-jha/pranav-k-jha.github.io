import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Loader2,
  Mail,
  MessageSquare,
  Send,
  ShieldCheck,
  Sparkles,
  UserRound,
  BriefcaseBusiness,
  ChevronDown,
  CircleCheck,
  AlertCircle,
} from "lucide-react";

import emailjs from "@emailjs/browser";

/* -------------------------------------------------------------------------- */
/*                               Configuration                                */
/* -------------------------------------------------------------------------- */

const PROFANE_WORDS = ["badword1", "badword2"];

const RATE_LIMIT = {
  MAX_REQUESTS: 3,
  WINDOW_MS: 10 * 60 * 1000,
};

const MIN_WORDS = 10;
const MAX_WORDS = 500;

/* -------------------------------------------------------------------------- */
/*                                Animations                                  */
/* -------------------------------------------------------------------------- */

const pageVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.08,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                            Utility Functions                               */
/* -------------------------------------------------------------------------- */

const generateMathQuestion = () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 5) + 1;

  return {
    question: `${num1} + ${num2}`,
    answer: num1 + num2,
  };
};

const countWords = (text = "") => {
  return text.trim().split(/\s+/).filter(Boolean).length;
};

/* -------------------------------------------------------------------------- */
/*                               Contact Page                                 */
/* -------------------------------------------------------------------------- */

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    subject: "",
    message: "",
    website: "",
    botCheck: "",
  });

  const [mathQuestion, setMathQuestion] = useState(generateMathQuestion);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitStatus, setSubmitStatus] = useState({
    success: null,
    message: "",
  });

  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const [reducedMotion, setReducedMotion] = useState(false);

  const submitTimeoutRef = useRef(null);

  /* ------------------------------------------------------------------------ */
  /*                           Reduced Motion                                 */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateMotionPreference = () => {
      setReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();

    mediaQuery.addEventListener?.("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener?.("change", updateMotionPreference);
    };
  }, []);

  /* ------------------------------------------------------------------------ */
  /*                            Rate Limiting                                 */
  /* ------------------------------------------------------------------------ */

  const [requestTimestamps, setRequestTimestamps] = useState(() => {
    try {
      const saved = localStorage.getItem("contactFormTimestamps");

      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "contactFormTimestamps",
      JSON.stringify(requestTimestamps),
    );
  }, [requestTimestamps]);

  /* ------------------------------------------------------------------------ */
  /*                           Timeout Cleanup                                */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    return () => {
      if (submitTimeoutRef.current) {
        clearTimeout(submitTimeoutRef.current);
      }
    };
  }, []);

  /* ------------------------------------------------------------------------ */
  /*                              Validation                                  */
  /* ------------------------------------------------------------------------ */

  const cleanInput = (value) => {
    if (!value) return "";

    return String(value)
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  };

  const containsProfanity = (text = "") => {
    const normalized = text.toLowerCase();

    return PROFANE_WORDS.some((word) => normalized.includes(word));
  };

  const validateEmail = (email) => {
    const expression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return expression.test(String(email).toLowerCase());
  };

  const isRateLimited = () => {
    const now = Date.now();

    const recentRequests = requestTimestamps.filter(
      (timestamp) => now - timestamp < RATE_LIMIT.WINDOW_MS,
    );

    return recentRequests.length >= RATE_LIMIT.MAX_REQUESTS;
  };

  /* ------------------------------------------------------------------------ */
  /*                               Handlers                                   */
  /* ------------------------------------------------------------------------ */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: cleanInput(value),
    }));

    if (submitStatus.message) {
      setSubmitStatus({
        success: null,
        message: "",
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const now = Date.now();

    /* -------------------------------------------------------------------- */
    /* Debounce                                                             */
    /* -------------------------------------------------------------------- */

    if (now - lastSubmitTime < 5000) {
      setSubmitStatus({
        success: false,
        message: "Please wait a few seconds before sending another message.",
      });

      return;
    }

    /* -------------------------------------------------------------------- */
    /* Honeypot                                                             */
    /* -------------------------------------------------------------------- */

    if (formData.website) {
      return;
    }

    /* -------------------------------------------------------------------- */
    /* Bot Verification                                                     */
    /* -------------------------------------------------------------------- */

    if (Number.parseInt(formData.botCheck, 10) !== mathQuestion.answer) {
      setSubmitStatus({
        success: false,
        message: "Please answer the verification question correctly.",
      });

      setMathQuestion(generateMathQuestion());

      setFormData((previous) => ({
        ...previous,
        botCheck: "",
      }));

      return;
    }

    /* -------------------------------------------------------------------- */
    /* Required Fields                                                      */
    /* -------------------------------------------------------------------- */

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        success: false,
        message: "Please complete all required fields.",
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

    /* -------------------------------------------------------------------- */
    /* Message Length                                                       */
    /* -------------------------------------------------------------------- */

    const totalWords = countWords(formData.message);

    if (totalWords < MIN_WORDS) {
      setSubmitStatus({
        success: false,
        message: `Please provide a little more detail. Your message should contain at least ${MIN_WORDS} words.`,
      });

      return;
    }

    if (totalWords > MAX_WORDS) {
      setSubmitStatus({
        success: false,
        message: `Please keep your message under ${MAX_WORDS} words.`,
      });

      return;
    }

    /* -------------------------------------------------------------------- */
    /* Rate Limit                                                           */
    /* -------------------------------------------------------------------- */

    if (isRateLimited()) {
      setSubmitStatus({
        success: false,
        message:
          "Too many messages have been submitted recently. Please try again later.",
      });

      return;
    }

    /* -------------------------------------------------------------------- */
    /* Profanity Check                                                      */
    /* -------------------------------------------------------------------- */

    if (
      containsProfanity(formData.name) ||
      containsProfanity(formData.subject) ||
      containsProfanity(formData.message)
    ) {
      setSubmitStatus({
        success: false,
        message: "Your message contains language that cannot be submitted.",
      });

      return;
    }

    /* -------------------------------------------------------------------- */
    /* EmailJS                                                              */
    /* -------------------------------------------------------------------- */

    setIsSubmitting(true);

    setSubmitStatus({
      success: null,
      message: "",
    });

    try {
      const { website, botCheck, ...emailData } = formData;

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        emailData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setLastSubmitTime(now);

      setRequestTimestamps((previous) => [...previous, now]);

      setSubmitStatus({
        success: true,
        message:
          "Thanks! Your message has been sent successfully. I'll get back to you as soon as possible.",
      });

      setFormData({
        name: "",
        email: "",
        projectType: "",
        subject: "",
        message: "",
        website: "",
        botCheck: "",
      });

      setMathQuestion(generateMathQuestion());

      submitTimeoutRef.current = setTimeout(() => {
        setSubmitStatus({
          success: null,
          message: "",
        });
      }, 7000);
    } catch (error) {
      console.error("Contact form error:", error);

      setSubmitStatus({
        success: false,
        message:
          "The message could not be sent right now. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const totalWords = countWords(formData.message);

  /* ------------------------------------------------------------------------ */
  /*                                  UI                                      */
  /* ------------------------------------------------------------------------ */

  return (
    <motion.main
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-white
        pt-24
        text-gray-950

        dark:bg-gray-950
        dark:text-white
      "
    >
      {/* ================================================================ */}
      {/* BACKGROUND                                                       */}
      {/* ================================================================ */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-[760px]
          bg-gradient-to-br
          from-purple-50
          via-blue-50
          to-cyan-50

          dark:from-purple-950/20
          dark:via-blue-950/20
          dark:to-cyan-950/20
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-36
          top-24
          h-[420px]
          w-[420px]
          rounded-full
          bg-purple-500/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-16
          h-[460px]
          w-[460px]
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.022]

          dark:opacity-[0.035]

          [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      {/* ================================================================ */}
      {/* CONTENT                                                          */}
      {/* ================================================================ */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-4
          pb-24
          sm:px-6
          lg:px-8
        "
      >
        {/* ============================================================= */}
        {/* PAGE HEADER                                                   */}
        {/* ============================================================= */}

        <motion.div
          variants={fadeUp}
          className="
            mx-auto
            mb-14
            max-w-3xl
            text-center
          "
        >
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-200/70
              bg-white/70
              px-4
              py-2
              text-xs
              font-bold
              uppercase
              tracking-[0.16em]
              text-blue-600
              shadow-sm
              backdrop-blur-xl

              dark:border-blue-800/50
              dark:bg-gray-900/60
              dark:text-blue-400
            "
          >
            <Sparkles className="h-3.5 w-3.5" />
            Let's Work Together
          </div>

          <h1
            className="
              text-4xl
              font-bold
              tracking-tight
              text-gray-950

              sm:text-5xl
              lg:text-6xl

              dark:text-white
            "
          >
            Have a project in mind?
            <span
              className="
                mt-2
                block
                bg-gradient-to-r
                from-purple-600
                via-blue-600
                to-cyan-500
                bg-clip-text
                text-transparent

                dark:from-purple-400
                dark:via-blue-400
                dark:to-cyan-400
              "
            >
              Let's talk.
            </span>
          </h1>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-gray-600

              sm:text-lg

              dark:text-gray-400
            "
          >
            Tell me what you're building, improving, or exploring. Share as much
            detail as you can, and I'll respond with the best way to move
            forward.
          </p>
        </motion.div>

        {/* ============================================================= */}
        {/* CONTACT GRID                                                  */}
        {/* ============================================================= */}

        <div
          className="
            grid
            gap-8

            lg:grid-cols-[380px_minmax(0,1fr)]
            lg:gap-10
          "
        >
          {/* =========================================================== */}
          {/* LEFT INFORMATION                                           */}
          {/* =========================================================== */}

          <motion.aside
            variants={fadeUp}
            className="
              space-y-5

              lg:sticky
              lg:top-24
              lg:self-start
            "
          >
            {/* Intro Card */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[28px]
                bg-gradient-to-br
                from-purple-600
                via-blue-600
                to-cyan-500
                p-7
                text-white
                shadow-2xl
                shadow-blue-500/20
              "
            >
              <div
                className="
                  absolute
                  -right-16
                  -top-20
                  h-52
                  w-52
                  rounded-full
                  bg-white/10
                  blur-2xl
                "
              />

              <div
                className="
                  relative
                  z-10
                "
              >
                <div
                  className="
                    mb-5
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/20
                    bg-white/10
                    backdrop-blur
                  "
                >
                  <MessageSquare className="h-6 w-6" />
                </div>

                <h2
                  className="
                    text-2xl
                    font-bold
                  "
                >
                  Start a conversation
                </h2>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-7
                    text-white/80
                  "
                >
                  Whether you need a complete application, AI solution, data
                  platform, mobile app, technical consultation, or help
                  improving an existing system, send me the details.
                </p>
              </div>
            </div>

            {/* Contact Information */}

            <div
              className="
                rounded-[24px]
                border
                border-gray-200/70
                bg-white/80
                p-6
                shadow-lg
                shadow-gray-900/[0.04]
                backdrop-blur-xl

                dark:border-gray-800
                dark:bg-gray-900/70
              "
            >
              <h3
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-gray-400
                "
              >
                What to expect
              </h3>

              <div className="mt-6 space-y-5">
                <ContactDetail
                  icon={Clock3}
                  title="Quick Response"
                  description="I review project inquiries as soon as possible."
                />

                <ContactDetail
                  icon={ShieldCheck}
                  title="Private Discussion"
                  description="Project information is treated professionally and confidentially."
                />

                <ContactDetail
                  icon={BriefcaseBusiness}
                  title="Flexible Projects"
                  description="Available for new development, improvements, integrations, and consulting."
                />
              </div>
            </div>

            {/* Process */}

            <div
              className="
                rounded-[24px]
                border
                border-gray-200/70
                bg-white/70
                p-6
                backdrop-blur-xl

                dark:border-gray-800
                dark:bg-gray-900/50
              "
            >
              <h3
                className="
                  mb-5
                  font-semibold
                  text-gray-950

                  dark:text-white
                "
              >
                What happens next?
              </h3>

              <div className="space-y-4">
                {[
                  "Send your project details",
                  "I review your requirements",
                  "We discuss the best approach",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <div
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-blue-50
                        text-xs
                        font-bold
                        text-blue-600

                        dark:bg-blue-950/40
                        dark:text-blue-400
                      "
                    >
                      {index + 1}
                    </div>

                    <span
                      className="
                        text-sm
                        text-gray-600

                        dark:text-gray-300
                      "
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>

          {/* =========================================================== */}
          {/* FORM                                                        */}
          {/* =========================================================== */}

          <motion.section
            variants={fadeUp}
            className="
              overflow-hidden
              rounded-[30px]
              border
              border-gray-200/70
              bg-white/85
              shadow-2xl
              shadow-gray-900/[0.06]
              backdrop-blur-2xl

              dark:border-gray-800
              dark:bg-gray-900/80
            "
          >
            {/* Form Heading */}

            <div
              className="
                border-b
                border-gray-100
                px-6
                py-7

                sm:px-8

                dark:border-gray-800
              "
            >
              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-5
                "
              >
                <div>
                  <h2
                    className="
                      text-2xl
                      font-bold
                      tracking-tight
                      text-gray-950

                      dark:text-white
                    "
                  >
                    Tell me about your project
                  </h2>

                  <p
                    className="
                      mt-2
                      max-w-2xl
                      text-sm
                      leading-6
                      text-gray-500

                      dark:text-gray-400
                    "
                  >
                    The more context you provide, the easier it is to understand
                    your requirements.
                  </p>
                </div>

                <div
                  className="
                    hidden
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-gradient-to-br
                    from-blue-600
                    to-cyan-500
                    text-white
                    shadow-lg
                    shadow-blue-500/20

                    sm:flex
                  "
                >
                  <Send className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              {/* ======================================================= */}
              {/* STATUS                                                  */}
              {/* ======================================================= */}

              <AnimatePresence mode="wait">
                {submitStatus.message && (
                  <motion.div
                    key={submitStatus.message}
                    initial={{
                      opacity: 0,
                      y: -8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -8,
                    }}
                    className={`
                      mb-6
                      flex
                      items-start
                      gap-3
                      rounded-xl
                      border
                      p-4
                      text-sm
                      leading-6

                      ${
                        submitStatus.success
                          ? `
                            border-emerald-200
                            bg-emerald-50
                            text-emerald-700

                            dark:border-emerald-900
                            dark:bg-emerald-950/30
                            dark:text-emerald-300
                          `
                          : `
                            border-red-200
                            bg-red-50
                            text-red-700

                            dark:border-red-900
                            dark:bg-red-950/30
                            dark:text-red-300
                          `
                      }
                    `}
                  >
                    {submitStatus.success ? (
                      <CircleCheck className="mt-0.5 h-5 w-5 shrink-0" />
                    ) : (
                      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                    )}

                    <span>{submitStatus.message}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ======================================================= */}
              {/* FORM                                                    */}
              {/* ======================================================= */}

              <form onSubmit={handleSubmit} className="relative space-y-6">
                {/* Honeypot */}

                <div
                  className="
                    absolute
                    left-[-9999px]
                    top-auto
                    h-px
                    w-px
                    overflow-hidden
                  "
                  aria-hidden="true"
                >
                  <label htmlFor="website">Website</label>

                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={handleChange}
                  />
                </div>

                {/* Name / Email */}

                <div
                  className="
                    grid
                    gap-5

                    md:grid-cols-2
                  "
                >
                  <FormField label="Your name" required icon={UserRound}>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={inputClasses}
                    />
                  </FormField>

                  <FormField label="Email address" required icon={Mail}>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputClasses}
                    />
                  </FormField>
                </div>

                {/* Project Type */}

                <FormField
                  label="What can I help with?"
                  icon={BriefcaseBusiness}
                >
                  <div className="relative">
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className={`
                        ${inputClasses}
                        appearance-none
                        pr-10
                      `}
                    >
                      <option value="">Select a service</option>

                      <option value="Web Development">Web Development</option>

                      <option value="AI & Machine Learning">
                        AI & Machine Learning
                      </option>

                      <option value="Data Engineering">
                        Data Engineering & Analytics
                      </option>

                      <option value="Mobile App Development">
                        Mobile App Development
                      </option>

                      <option value="Software Development">
                        Custom Software Development
                      </option>

                      <option value="Consulting">Technical Consulting</option>

                      <option value="Other">Something Else</option>
                    </select>

                    <ChevronDown
                      className="
                        pointer-events-none
                        absolute
                        right-4
                        top-1/2
                        h-4
                        w-4
                        -translate-y-1/2
                        text-gray-400
                      "
                    />
                  </div>
                </FormField>

                {/* Subject */}

                <FormField label="Subject" icon={MessageSquare}>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Briefly describe your project"
                    className={inputClasses}
                  />
                </FormField>

                {/* Message */}

                <FormField
                  label="Project details"
                  required
                  icon={MessageSquare}
                >
                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, what you're trying to achieve, important features, existing systems, or anything else that would help me understand your requirements."
                    className={`
                      ${inputClasses}
                      min-h-[180px]
                      resize-y
                    `}
                  />

                  <div
                    className="
                      mt-2
                      flex
                      items-center
                      justify-between
                      gap-4
                      text-xs
                    "
                  >
                    <span
                      className={
                        totalWords > MAX_WORDS
                          ? "text-red-500"
                          : "text-gray-400"
                      }
                    >
                      {totalWords} / {MAX_WORDS} words
                    </span>

                    <span className="text-gray-400">
                      Minimum {MIN_WORDS} words
                    </span>
                  </div>
                </FormField>

                {/* Verification */}

                <div
                  className="
                    rounded-2xl
                    border
                    border-gray-200
                    bg-gray-50/80
                    p-5

                    dark:border-gray-800
                    dark:bg-gray-950/40
                  "
                >
                  <div
                    className="
                      flex
                      flex-col
                      gap-4

                      sm:flex-row
                      sm:items-end
                      sm:justify-between
                    "
                  >
                    <div className="flex-1">
                      <div
                        className="
                          mb-2
                          flex
                          items-center
                          gap-2
                        "
                      >
                        <ShieldCheck
                          className="
                            h-4
                            w-4
                            text-emerald-500
                          "
                        />

                        <label
                          htmlFor="botCheck"
                          className="
                            text-sm
                            font-semibold
                            text-gray-700

                            dark:text-gray-300
                          "
                        >
                          Quick verification
                        </label>
                      </div>

                      <p
                        className="
                          text-xs
                          leading-5
                          text-gray-500

                          dark:text-gray-400
                        "
                      >
                        Help prevent automated spam by answering this simple
                        question.
                      </p>
                    </div>

                    <div
                      className="
                        flex
                        items-center
                        gap-3
                      "
                    >
                      <span
                        className="
                          whitespace-nowrap
                          rounded-lg
                          bg-white
                          px-4
                          py-3
                          text-sm
                          font-bold
                          text-gray-700
                          shadow-sm

                          dark:bg-gray-900
                          dark:text-gray-200
                        "
                      >
                        {mathQuestion.question} =
                      </span>

                      <input
                        type="number"
                        id="botCheck"
                        name="botCheck"
                        required
                        value={formData.botCheck}
                        onChange={handleChange}
                        placeholder="?"
                        aria-label="Verification answer"
                        className="
                          h-11
                          w-20
                          rounded-lg
                          border
                          border-gray-300
                          bg-white
                          px-3
                          text-center
                          text-sm
                          font-semibold
                          text-gray-900
                          outline-none
                          transition-all

                          focus:border-blue-500
                          focus:ring-4
                          focus:ring-blue-500/10

                          dark:border-gray-700
                          dark:bg-gray-900
                          dark:text-white
                        "
                      />
                    </div>
                  </div>
                </div>

                {/* Submit */}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={
                    reducedMotion || isSubmitting
                      ? {}
                      : {
                          y: -2,
                        }
                  }
                  whileTap={
                    reducedMotion || isSubmitting
                      ? {}
                      : {
                          scale: 0.99,
                        }
                  }
                  className={`
                    group
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-gradient-to-r
                    from-purple-600
                    via-blue-600
                    to-cyan-500
                    px-6
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    shadow-lg
                    shadow-blue-500/20
                    transition-all
                    duration-300

                    hover:from-purple-700
                    hover:via-blue-700
                    hover:to-cyan-600
                    hover:shadow-xl
                    hover:shadow-blue-500/25

                    focus:outline-none
                    focus:ring-4
                    focus:ring-blue-500/20

                    ${isSubmitting ? "cursor-not-allowed opacity-70" : ""}
                  `}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight
                        className="
                          h-4
                          w-4
                          transition-transform
                          duration-200

                          group-hover:translate-x-1
                        "
                      />
                    </>
                  )}
                </motion.button>

                {/* Footer */}

                <div
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    text-center
                    text-xs
                    leading-5
                    text-gray-400
                  "
                >
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
                  Your information is used only to respond to your inquiry.
                </div>
              </form>
            </div>
          </motion.section>
        </div>
      </div>
    </motion.main>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Form Components                               */
/* -------------------------------------------------------------------------- */

const inputClasses = `
  block
  w-full
  rounded-xl
  border
  border-gray-300
  bg-white/80
  px-4
  py-3
  text-sm
  text-gray-900
  outline-none
  transition-all
  duration-200

  placeholder:text-gray-400

  hover:border-gray-400

  focus:border-blue-500
  focus:ring-4
  focus:ring-blue-500/10

  dark:border-gray-700
  dark:bg-gray-950/60
  dark:text-white
  dark:placeholder:text-gray-600
  dark:hover:border-gray-600
  dark:focus:border-blue-500
`;

const FormField = ({ label, required = false, icon: Icon, children }) => {
  return (
    <div>
      <label
        className="
          mb-2
          flex
          items-center
          gap-2
          text-sm
          font-semibold
          text-gray-700

          dark:text-gray-300
        "
      >
        {Icon && (
          <Icon
            className="
              h-4
              w-4
              text-gray-400
            "
          />
        )}

        {label}

        {required && <span className="text-red-500">*</span>}
      </label>

      {children}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                             Contact Detail                                 */
/* -------------------------------------------------------------------------- */

const ContactDetail = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex gap-3.5">
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-blue-50
          text-blue-600

          dark:bg-blue-950/40
          dark:text-blue-400
        "
      >
        <Icon className="h-5 w-5" />
      </div>

      <div>
        <h4
          className="
            text-sm
            font-semibold
            text-gray-900

            dark:text-white
          "
        >
          {title}
        </h4>

        <p
          className="
            mt-1
            text-xs
            leading-5
            text-gray-500

            dark:text-gray-400
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
};
