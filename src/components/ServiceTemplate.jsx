import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Code2,
  Layers3,
  Mail,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                              Reduced Motion                                */
/* -------------------------------------------------------------------------- */

const getReducedMotionPreference = () => {
  if (typeof window === "undefined") return false;

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/* -------------------------------------------------------------------------- */
/*                              Service Template                              */
/* -------------------------------------------------------------------------- */

const ServiceTemplate = ({
  theme = {
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    softGradient:
      "from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20",

    hoverGradient:
      "hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700",

    text: "text-blue-600 dark:text-blue-400",

    border: "border-blue-500 dark:border-blue-400",

    softBorder: "border-blue-200/70 dark:border-blue-800/50",

    bg: "bg-blue-50 dark:bg-blue-900/20",

    iconBg: "bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600",
  },

  title = "AI Solutions Development",

  eyebrow = "AI & Automation Services",

  description = "Transform your business with intelligent, production-ready AI solutions designed around your workflows, data, and long-term goals.",

  icon: Icon = Zap,

  features = [
    "Custom AI model development",
    "End-to-end pipeline integration",
    "Real-time monitoring & optimization",
    "Scalable cloud infrastructure",
    "Secure API and application integration",
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

  process = [
    {
      title: "Discovery",
      description:
        "We define your business problem, technical requirements, constraints, data sources, and expected outcomes.",
    },
    {
      title: "Architecture",
      description:
        "I design the application architecture, AI workflow, integration strategy, and implementation roadmap.",
    },
    {
      title: "Development",
      description:
        "The solution is developed iteratively with testing, validation, documentation, and regular progress updates.",
    },
    {
      title: "Delivery & Support",
      description:
        "The completed solution is deployed, documented, monitored, and supported based on your selected engagement.",
    },
  ],

  pricing = [
    {
      name: "Starter",
      price: "Custom",
      type: "consulting",
      description:
        "Ideal for consultations, prototypes, technical reviews, and smaller implementations.",

      features: [
        "Technical consultation",
        "Architecture recommendations",
        "Prototype or proof of concept",
        "Implementation guidance",
        "Email support",
      ],

      popular: false,
    },

    {
      name: "Professional",
      price: "Custom",
      type: "project",
      description:
        "Designed for complete AI, automation, or software development projects.",

      features: [
        "End-to-end project delivery",
        "Custom application development",
        "AI / ML integration",
        "Deployment assistance",
        "Priority communication",
        "Post-delivery support",
      ],

      popular: true,
    },
  ],

  faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines depend on the scope and technical complexity. Smaller prototypes may take a few weeks, while larger production systems can require several development phases. After reviewing your requirements, I can provide a clearer project roadmap and estimated timeline.",
    },

    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes. Ongoing support can include maintenance, monitoring, bug fixes, model updates, infrastructure improvements, feature development, and performance optimization.",
    },

    {
      question: "Can you work with an existing system?",
      answer:
        "Yes. A project does not need to start from scratch. I can review your existing architecture, APIs, applications, models, databases, or cloud infrastructure and design an integration or modernization strategy.",
    },

    {
      question: "Can you build a proof of concept first?",
      answer:
        "Yes. For larger or technically uncertain projects, starting with a focused proof of concept is often a practical way to validate feasibility before committing to full implementation.",
    },
  ],
}) => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  const location = useLocation();

  /* ------------------------------------------------------------------------ */
  /*                         Reduced Motion Detection                         */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updatePreference = () => {
      setReducedMotion(mediaQuery.matches);
    };

    updatePreference();

    mediaQuery.addEventListener?.("change", updatePreference);

    return () => {
      mediaQuery.removeEventListener?.("change", updatePreference);
    };
  }, []);

  /* ------------------------------------------------------------------------ */
  /*                          Scroll Position Restore                         */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    const saveScrollPosition = () => {
      sessionStorage.setItem(
        "serviceTemplateScrollPosition",
        window.scrollY.toString(),
      );
    };

    window.addEventListener("beforeunload", saveScrollPosition);

    return () => {
      window.removeEventListener("beforeunload", saveScrollPosition);
    };
  }, []);

  useEffect(() => {
    const navigationEntry = performance.getEntriesByType?.("navigation")?.[0];

    const isReload = navigationEntry?.type === "reload";

    if (!isReload) return;

    const savedPosition = sessionStorage.getItem(
      "serviceTemplateScrollPosition",
    );

    if (!savedPosition) return;

    requestAnimationFrame(() => {
      window.scrollTo({
        top: Number(savedPosition),
        behavior: "instant",
      });

      sessionStorage.removeItem("serviceTemplateScrollPosition");
    });
  }, [location]);

  /* ------------------------------------------------------------------------ */
  /*                              Animations                                  */
  /* ------------------------------------------------------------------------ */

  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: reducedMotion ? 0 : 0.08,
        delayChildren: reducedMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: reducedMotion
      ? {}
      : {
          opacity: 0,
          y: 18,
        },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: reducedMotion ? 0 : 0.45,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  /* ------------------------------------------------------------------------ */
  /*                                  UI                                      */
  /* ------------------------------------------------------------------------ */

  return (
    <main
      className="
        min-h-screen
        bg-white
        text-gray-950
        dark:bg-gray-950
        dark:text-white
      "
    >
      {/* ==================================================================== */}
      {/* HERO BACKGROUND                                                      */}
      {/* ==================================================================== */}

      <section className="relative overflow-hidden pt-24">
        {/* Background gradient */}

        <div
          className={`
            pointer-events-none
            absolute inset-x-0 top-0
            h-[720px]
            bg-gradient-to-br
            ${theme.softGradient}
          `}
        />

        {/* Decorative glow */}

        <div
          className="
            pointer-events-none
            absolute
            -left-40 top-28
            h-96 w-96
            rounded-full
            bg-blue-500/10
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-40 top-20
            h-[420px] w-[420px]
            rounded-full
            bg-purple-500/10
            blur-3xl
          "
        />

        {/* Grid overlay */}

        <div
          className="
            pointer-events-none
            absolute inset-0
            opacity-[0.025]
            dark:opacity-[0.04]
            [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Back */}

          <motion.button
            initial={
              reducedMotion
                ? {}
                : {
                    opacity: 0,
                    x: -10,
                  }
            }
            animate={{
              opacity: 1,
              x: 0,
            }}
            onClick={() => window.history.back()}
            className="
              group
              mb-10
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-gray-200/80
              bg-white/70
              px-4
              py-2
              text-sm
              font-medium
              text-gray-600
              shadow-sm
              backdrop-blur-xl
              transition
              hover:border-gray-300
              hover:bg-white
              hover:text-gray-950

              dark:border-gray-800
              dark:bg-gray-900/60
              dark:text-gray-400
              dark:hover:bg-gray-900
              dark:hover:text-white
            "
          >
            <ArrowLeft
              className="
                h-4 w-4
                transition-transform
                duration-200
                group-hover:-translate-x-1
              "
            />
            Back to Services
          </motion.button>

          {/* ================================================================= */}
          {/* MAIN GRID                                                         */}
          {/* ================================================================= */}

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-14">
            {/* =============================================================== */}
            {/* LEFT CONTENT                                                    */}
            {/* =============================================================== */}

            <div className="min-w-0">
              {/* Hero */}

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-4xl"
              >
                {/* Eyebrow */}

                <motion.div
                  variants={itemVariants}
                  className={`
                    mb-6
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    ${theme.softBorder}
                    bg-white/70
                    px-3.5
                    py-1.5
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    backdrop-blur-xl

                    dark:bg-gray-900/60

                    ${theme.text}
                  `}
                >
                  <Sparkles className="h-3.5 w-3.5" />

                  {eyebrow}
                </motion.div>

                {/* Icon + Title */}

                <div className="mb-6 flex items-start gap-5">
                  <motion.div
                    variants={itemVariants}
                    whileHover={
                      reducedMotion
                        ? {}
                        : {
                            y: -3,
                            rotate: 3,
                          }
                    }
                    className={`
                      hidden
                      h-16
                      w-16
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      ${theme.iconBg}
                      text-white
                      shadow-xl
                      shadow-blue-500/20

                      sm:flex
                    `}
                  >
                    <Icon className="h-8 w-8" />
                  </motion.div>

                  <motion.h1
                    variants={itemVariants}
                    className="
                      max-w-3xl
                      text-4xl
                      font-bold
                      tracking-tight
                      text-gray-950

                      sm:text-5xl
                      lg:text-[3.6rem]
                      lg:leading-[1.08]

                      dark:text-white
                    "
                  >
                    {title}
                  </motion.h1>
                </div>

                {/* Description */}

                <motion.p
                  variants={itemVariants}
                  className="
                    max-w-3xl
                    text-base
                    leading-8
                    text-gray-600

                    sm:text-lg

                    dark:text-gray-400
                  "
                >
                  {description}
                </motion.p>

                {/* Hero Buttons */}

                <motion.div
                  variants={itemVariants}
                  className="
                    mt-8
                    flex
                    flex-col
                    gap-3

                    sm:flex-row
                  "
                >
                  <Link
                    to="/contact"
                    className={`
                      group
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-gradient-to-r
                      ${theme.gradient}
                      ${theme.hoverGradient}
                      px-6
                      py-3.5
                      text-sm
                      font-semibold
                      text-white
                      shadow-lg
                      shadow-blue-500/20
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:shadow-xl
                    `}
                  >
                    Discuss Your Project
                    <ArrowRight
                      className="
                        h-4 w-4
                        transition-transform
                        group-hover:translate-x-1
                      "
                    />
                  </Link>

                  <a
                    href="#service-details"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-gray-200
                      bg-white/70
                      px-6
                      py-3.5
                      text-sm
                      font-semibold
                      text-gray-700
                      backdrop-blur
                      transition
                      hover:bg-white
                      hover:text-gray-950

                      dark:border-gray-800
                      dark:bg-gray-900/60
                      dark:text-gray-300
                      dark:hover:bg-gray-900
                      dark:hover:text-white
                    "
                  >
                    Explore Service
                  </a>
                </motion.div>

                {/* Trust indicators */}

                <motion.div
                  variants={itemVariants}
                  className="
                    mt-9
                    flex
                    flex-wrap
                    gap-x-6
                    gap-y-3
                    border-t
                    border-gray-200/70
                    pt-6
                    text-sm
                    text-gray-500

                    dark:border-gray-800
                    dark:text-gray-400
                  "
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-500" />
                    Secure development
                  </div>

                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-blue-500" />
                    Direct communication
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4 text-purple-500" />
                    Flexible engagement
                  </div>
                </motion.div>
              </motion.div>

              {/* ============================================================= */}
              {/* SERVICE DETAILS                                               */}
              {/* ============================================================= */}

              <div id="service-details" className="mt-24 space-y-24 pb-20">
                {/* =========================================================== */}
                {/* WHAT'S INCLUDED                                             */}
                {/* =========================================================== */}

                <motion.section
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    margin: "-80px",
                  }}
                >
                  <SectionHeading
                    icon={CheckCircle2}
                    eyebrow="Deliverables"
                    title="What's included"
                    description="A complete service designed to take your project from initial concept to a reliable implementation."
                    theme={theme}
                  />

                  <div
                    className="
                      mt-8
                      grid
                      gap-4

                      md:grid-cols-2
                    "
                  >
                    {features.map((feature, index) => (
                      <motion.div
                        key={`${feature}-${index}`}
                        variants={itemVariants}
                        whileHover={
                          reducedMotion
                            ? {}
                            : {
                                y: -4,
                              }
                        }
                        className="
                          group
                          relative
                          overflow-hidden
                          rounded-2xl
                          border
                          border-gray-200/70
                          bg-white/70
                          p-5
                          shadow-sm
                          backdrop-blur-xl
                          transition-all
                          duration-300

                          hover:border-blue-300
                          hover:shadow-lg

                          dark:border-gray-800
                          dark:bg-gray-900/50
                          dark:hover:border-blue-800
                        "
                      >
                        <div
                          className="
                            absolute inset-0
                            bg-gradient-to-br
                            from-blue-500/[0.04]
                            via-transparent
                            to-purple-500/[0.06]
                            opacity-0
                            transition-opacity
                            duration-300
                            group-hover:opacity-100
                          "
                        />

                        <div className="relative flex items-start gap-4">
                          <div
                            className="
                              flex
                              h-9
                              w-9
                              shrink-0
                              items-center
                              justify-center
                              rounded-xl
                              bg-emerald-50
                              text-emerald-600

                              dark:bg-emerald-950/40
                              dark:text-emerald-400
                            "
                          >
                            <Check className="h-4 w-4" />
                          </div>

                          <div>
                            <p
                              className="
                                font-medium
                                leading-6
                                text-gray-800

                                dark:text-gray-200
                              "
                            >
                              {feature}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                {/* =========================================================== */}
                {/* PROCESS                                                     */}
                {/* =========================================================== */}

                <motion.section
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    margin: "-80px",
                  }}
                >
                  <SectionHeading
                    icon={Layers3}
                    eyebrow="Workflow"
                    title="How the project works"
                    description="A structured development process keeps the project transparent, technically sound, and aligned with your goals."
                    theme={theme}
                  />

                  <div className="relative mt-10">
                    {/* Vertical line desktop */}

                    <div
                      className="
                        absolute
                        bottom-0
                        left-[27px]
                        top-0
                        hidden
                        w-px
                        bg-gradient-to-b
                        from-blue-500
                        via-purple-400
                        to-transparent

                        md:block
                      "
                    />

                    <div className="space-y-5">
                      {process.map((step, index) => (
                        <motion.div
                          key={step.title}
                          variants={itemVariants}
                          className="
                            relative
                            grid
                            gap-4

                            md:grid-cols-[56px_1fr]
                          "
                        >
                          <div
                            className={`
                              relative
                              z-10
                              flex
                              h-14
                              w-14
                              items-center
                              justify-center
                              rounded-2xl
                              bg-gradient-to-br
                              ${theme.gradient}
                              text-base
                              font-bold
                              text-white
                              shadow-lg
                              shadow-blue-500/15
                            `}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </div>

                          <div
                            className="
                              rounded-2xl
                              border
                              border-gray-200/70
                              bg-white/60
                              p-6
                              backdrop-blur-xl

                              dark:border-gray-800
                              dark:bg-gray-900/40
                            "
                          >
                            <h3
                              className="
                                mb-2
                                text-lg
                                font-semibold
                                text-gray-950

                                dark:text-white
                              "
                            >
                              {step.title}
                            </h3>

                            <p
                              className="
                                text-sm
                                leading-7
                                text-gray-600

                                dark:text-gray-400
                              "
                            >
                              {step.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.section>

                {/* =========================================================== */}
                {/* TECHNOLOGIES                                                */}
                {/* =========================================================== */}

                <motion.section
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    margin: "-80px",
                  }}
                >
                  <SectionHeading
                    icon={Code2}
                    eyebrow="Technology"
                    title="Modern technology stack"
                    description="Technology choices are based on the requirements of the project rather than forcing every project into the same architecture."
                    theme={theme}
                  />

                  <motion.div
                    variants={itemVariants}
                    className="mt-8 flex flex-wrap gap-3"
                  >
                    {technologies.map((tech) => (
                      <motion.div
                        key={tech}
                        whileHover={
                          reducedMotion
                            ? {}
                            : {
                                y: -3,
                                scale: 1.025,
                              }
                        }
                        className="
                          flex
                          items-center
                          gap-2
                          rounded-xl
                          border
                          border-gray-200
                          bg-white
                          px-4
                          py-2.5
                          text-sm
                          font-medium
                          text-gray-700
                          shadow-sm
                          transition-colors
                          hover:border-blue-300

                          dark:border-gray-800
                          dark:bg-gray-900
                          dark:text-gray-300
                          dark:hover:border-blue-800
                        "
                      >
                        <span
                          className={`
                            h-2
                            w-2
                            rounded-full
                            bg-gradient-to-r
                            ${theme.gradient}
                          `}
                        />

                        {tech}
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.section>

                {/* =========================================================== */}
                {/* FAQ                                                         */}
                {/* =========================================================== */}

                {faqs?.length > 0 && (
                  <motion.section
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      margin: "-80px",
                    }}
                  >
                    <SectionHeading
                      icon={MessageSquare}
                      eyebrow="FAQ"
                      title="Frequently asked questions"
                      description="A few common questions about project scope, delivery, support, and implementation."
                      theme={theme}
                    />

                    <motion.div
                      variants={itemVariants}
                      className="mt-8 space-y-3"
                    >
                      {faqs.map((faq, index) => {
                        const isOpen = activeFaq === index;

                        return (
                          <div
                            key={faq.question}
                            className={`
                              overflow-hidden
                              rounded-2xl
                              border
                              bg-white/70
                              backdrop-blur-xl
                              transition-colors

                              dark:bg-gray-900/50

                              ${
                                isOpen
                                  ? theme.softBorder
                                  : "border-gray-200/70 dark:border-gray-800"
                              }
                            `}
                          >
                            <button
                              type="button"
                              aria-expanded={isOpen}
                              onClick={() =>
                                setActiveFaq(isOpen ? null : index)
                              }
                              className="
                                flex
                                w-full
                                items-center
                                justify-between
                                gap-6
                                px-6
                                py-5
                                text-left
                              "
                            >
                              <span
                                className="
                                  font-semibold
                                  text-gray-900

                                  dark:text-white
                                "
                              >
                                {faq.question}
                              </span>

                              <motion.span
                                animate={{
                                  rotate: isOpen ? 180 : 0,
                                }}
                                transition={{
                                  duration: reducedMotion ? 0 : 0.2,
                                }}
                                className={`
                                  flex
                                  h-8
                                  w-8
                                  shrink-0
                                  items-center
                                  justify-center
                                  rounded-full
                                  ${theme.bg}
                                  ${theme.text}
                                `}
                              >
                                <ChevronDown className="h-4 w-4" />
                              </motion.span>
                            </button>

                            <AnimatePresence initial={false}>
                              {isOpen && (
                                <motion.div
                                  initial={
                                    reducedMotion
                                      ? {}
                                      : {
                                          height: 0,
                                          opacity: 0,
                                        }
                                  }
                                  animate={{
                                    height: "auto",
                                    opacity: 1,
                                  }}
                                  exit={
                                    reducedMotion
                                      ? {}
                                      : {
                                          height: 0,
                                          opacity: 0,
                                        }
                                  }
                                  transition={{
                                    duration: reducedMotion ? 0 : 0.25,
                                  }}
                                  className="overflow-hidden"
                                >
                                  <div
                                    className="
                                      border-t
                                      border-gray-100
                                      px-6
                                      py-5
                                      text-sm
                                      leading-7
                                      text-gray-600

                                      dark:border-gray-800
                                      dark:text-gray-400
                                    "
                                  >
                                    {faq.answer}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </motion.div>
                  </motion.section>
                )}
              </div>
            </div>

            {/* =============================================================== */}
            {/* PRICING                                                         */}
            {/* =============================================================== */}

            <aside className="relative">
              <motion.div
                initial={
                  reducedMotion
                    ? {}
                    : {
                        opacity: 0,
                        y: 24,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: reducedMotion ? 0 : 0.5,
                  delay: reducedMotion ? 0 : 0.15,
                }}
                className="
                  lg:sticky
                  lg:top-24
                "
              >
                <div
                  className="
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-gray-200/70
                    bg-white/80
                    shadow-2xl
                    shadow-gray-900/[0.07]
                    backdrop-blur-2xl

                    dark:border-gray-800
                    dark:bg-gray-900/80
                    dark:shadow-black/20
                  "
                >
                  {/* Pricing header */}

                  <div
                    className={`
                      relative
                      overflow-hidden
                      bg-gradient-to-br
                      ${theme.gradient}
                      p-7
                      text-white
                    `}
                  >
                    <div
                      className="
                        absolute
                        -right-16
                        -top-20
                        h-48
                        w-48
                        rounded-full
                        bg-white/10
                        blur-2xl
                      "
                    />

                    <div className="relative">
                      <div
                        className="
                          mb-3
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          bg-white/15
                          px-3
                          py-1
                          text-xs
                          font-semibold
                          backdrop-blur
                        "
                      >
                        <Sparkles className="h-3 w-3" />
                        Flexible Engagement
                      </div>

                      <h2 className="text-2xl font-bold">Project Pricing</h2>

                      <p className="mt-2 text-sm leading-6 text-white/80">
                        Pricing is based on project requirements, complexity,
                        integrations, and delivery scope.
                      </p>
                    </div>
                  </div>

                  {/* Plans */}

                  <div className="space-y-4 p-4">
                    {pricing.map((plan, index) => (
                      <motion.div
                        key={plan.name}
                        whileHover={
                          reducedMotion
                            ? {}
                            : {
                                y: -3,
                              }
                        }
                        className={`
                          relative
                          rounded-2xl
                          p-5
                          transition-all
                          duration-300

                          ${
                            plan.popular
                              ? `
                                border-2
                                ${theme.border}
                                bg-gradient-to-br
                                from-white
                                to-blue-50/60
                                shadow-lg
                                shadow-blue-500/10

                                dark:from-gray-900
                                dark:to-blue-950/20
                              `
                              : `
                                border
                                border-gray-200
                                bg-white/70

                                dark:border-gray-800
                                dark:bg-gray-950/30
                              `
                          }
                        `}
                      >
                        {plan.popular && (
                          <div
                            className="
                              absolute
                              -top-3
                              right-4
                            "
                          >
                            <span
                              className={`
                                inline-flex
                                items-center
                                gap-1.5
                                rounded-full
                                bg-gradient-to-r
                                ${theme.gradient}
                                px-3
                                py-1
                                text-[10px]
                                font-bold
                                tracking-wide
                                text-white
                                shadow-lg
                              `}
                            >
                              <Star
                                className="
                                  h-3
                                  w-3
                                  fill-current
                                "
                              />
                              RECOMMENDED
                            </span>
                          </div>
                        )}

                        <h3
                          className="
                            text-lg
                            font-bold
                            text-gray-950

                            dark:text-white
                          "
                        >
                          {plan.name}
                        </h3>

                        <p
                          className="
                            mt-1
                            text-xs
                            leading-5
                            text-gray-500

                            dark:text-gray-400
                          "
                        >
                          {plan.description}
                        </p>

                        {/* Price */}

                        <div className="my-5">
                          <span
                            className={`
                              bg-gradient-to-r
                              ${theme.gradient}
                              bg-clip-text
                              text-3xl
                              font-bold
                              tracking-tight
                              text-transparent
                            `}
                          >
                            {plan.price}
                          </span>

                          <span
                            className="
                              ml-2
                              text-xs
                              text-gray-400
                            "
                          >
                            pricing
                          </span>
                        </div>

                        {/* Features */}

                        <ul className="space-y-3">
                          {plan.features.map((feature) => (
                            <li
                              key={feature}
                              className="
                                flex
                                items-start
                                gap-2.5
                                text-xs
                                leading-5
                                text-gray-600

                                dark:text-gray-300
                              "
                            >
                              <CheckCircle2
                                className={`
                                  mt-0.5
                                  h-4
                                  w-4
                                  shrink-0

                                  ${theme.text}
                                `}
                              />

                              {feature}
                            </li>
                          ))}
                        </ul>

                        {/* CTA */}

                        <Link
                          to="/contact"
                          className={`
                            group
                            mt-6
                            flex
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            bg-gradient-to-r
                            ${theme.gradient}
                            ${theme.hoverGradient}
                            px-4
                            py-3
                            text-sm
                            font-semibold
                            text-white
                            shadow-md
                            transition-all
                            hover:shadow-lg
                          `}
                        >
                          <Mail className="h-4 w-4" />
                          Contact Me
                          <ArrowRight
                            className="
                              h-4
                              w-4
                              transition-transform
                              group-hover:translate-x-1
                            "
                          />
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Footer */}

                  <div
                    className="
                      border-t
                      border-gray-100
                      px-6
                      py-5
                      text-center

                      dark:border-gray-800
                    "
                  >
                    <p
                      className="
                        text-xs
                        leading-5
                        text-gray-500

                        dark:text-gray-400
                      "
                    >
                      Have something different in mind? Contact me and I can
                      prepare an engagement based on your requirements.
                    </p>
                  </div>
                </div>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* CUSTOM PROJECT CTA                                                   */}
      {/* ==================================================================== */}

      <section className="border-t border-gray-100 dark:border-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <motion.div
            initial={
              reducedMotion
                ? {}
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className={`
              relative
              overflow-hidden
              rounded-[32px]
              bg-gradient-to-br
              ${theme.gradient}
              px-6
              py-14
              text-white
              shadow-2xl
              shadow-blue-500/15

              sm:px-10
              lg:px-16
              lg:py-16
            `}
          >
            {/* Glow */}

            <div
              className="
                absolute
                -right-20
                -top-24
                h-80
                w-80
                rounded-full
                bg-white/10
                blur-3xl
              "
            />

            <div
              className="
                absolute
                -bottom-32
                -left-20
                h-80
                w-80
                rounded-full
                bg-purple-950/20
                blur-3xl
              "
            />

            <div
              className="
                relative
                z-10
                mx-auto
                max-w-3xl
                text-center
              "
            >
              <div
                className="
                  mx-auto
                  mb-6
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/20
                  bg-white/10
                  backdrop-blur-xl
                "
              >
                <Sparkles className="h-6 w-6" />
              </div>

              <h2
                className="
                  text-3xl
                  font-bold
                  tracking-tight

                  sm:text-4xl
                "
              >
                Have a custom project in mind?
              </h2>

              <p
                className="
                  mx-auto
                  mt-5
                  max-w-2xl
                  text-sm
                  leading-7
                  text-white/80

                  sm:text-base
                "
              >
                Every project has different technical, operational, and business
                requirements. Tell me what you're trying to build, improve,
                automate, or integrate, and we can identify the right approach.
              </p>

              <div
                className="
                  mt-8
                  flex
                  flex-col
                  justify-center
                  gap-3

                  sm:flex-row
                "
              >
                <Link
                  to="/contact"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-white
                    px-6
                    py-3.5
                    text-sm
                    font-semibold
                    text-gray-950
                    shadow-lg
                    transition-all
                    hover:-translate-y-0.5
                    hover:bg-gray-50
                  "
                >
                  Get a Custom Quote
                  <ArrowRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      group-hover:translate-x-1
                    "
                  />
                </Link>

                <Link
                  to="/contact"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-white/20
                    bg-white/10
                    px-6
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    backdrop-blur
                    transition
                    hover:bg-white/15
                  "
                >
                  <MessageSquare className="h-4 w-4" />
                  Start a Conversation
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

/* -------------------------------------------------------------------------- */
/*                           Section Heading                                  */
/* -------------------------------------------------------------------------- */

const SectionHeading = ({ icon: Icon, eyebrow, title, description, theme }) => {
  return (
    <div className="max-w-3xl">
      <div
        className={`
          mb-3
          flex
          items-center
          gap-2
          text-xs
          font-bold
          uppercase
          tracking-[0.16em]

          ${theme.text}
        `}
      >
        <Icon className="h-4 w-4" />

        {eyebrow}
      </div>

      <h2
        className="
          text-2xl
          font-bold
          tracking-tight
          text-gray-950

          sm:text-3xl

          dark:text-white
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            mt-3
            max-w-2xl
            text-sm
            leading-7
            text-gray-600

            sm:text-base

            dark:text-gray-400
          "
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default ServiceTemplate;
