import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useMemo, useCallback, useRef, useEffect, useState } from "react";
import { ArrowRight, CheckCircle, Code, Database, Brain } from "lucide-react";

// Animation variants
const pageTransition = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: { opacity: 0 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

const fadeInUp = (i) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
});

const SERVICE_CATEGORIES = {
  "AI & ML": {
    name: "AI & ML",
    icon: Brain,
    description: "Artificial Intelligence and Machine Learning solutions",
    color: "from-purple-500 to-pink-500",
  },
  "Web Development": {
    name: "Web Development",
    icon: Code,
    description: "Full-stack web applications and platforms",
    color: "from-blue-500 to-cyan-500",
  },
  "Data Engineering": {
    name: "Data Engineering",
    icon: Database,
    description: "Data pipelines and analytics platforms",
    color: "from-orange-500 to-red-500",
  },
};

const services = [
  {
    id: 1,
    title: "AI & Machine Learning Solutions",
    slug: "ai-ml",
    description:
      "Custom AI models, machine learning pipelines, and intelligent automation solutions tailored to your business needs.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
    icon: Brain,
    category: "AI & ML",
    features: [
      "Custom ML Model Development",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Predictive Analytics",
      "AI Strategy Consulting",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "OpenAI API",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "Web Development",
    slug: "web-development",
    description:
      "Modern, scalable web applications built with cutting-edge technologies and best practices.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000",
    icon: Code,
    category: "Web Development",
    features: [
      "React & Next.js Applications",
      "Backend API Development",
      "Database Design & Optimization",
      "Cloud Deployment",
      "Performance Optimization",
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Data Engineering & Analytics",
    slug: "data-engineering",
    description:
      "Robust data pipelines, ETL processes, and analytics platforms to unlock insights from your data.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    icon: Database,
    category: "Data Engineering",
    features: [
      "Data Pipeline Development",
      "ETL/ELT Processes",
      "Data Warehousing",
      "Real-time Analytics",
      "Data Visualization",
    ],
    technologies: ["Python", "Apache Airflow", "PostgreSQL", "Redis", "Docker"],
    color: "from-orange-500 to-red-500",
  },
];

// Preload images to prevent flicker on first load
const usePreloadImages = () => {
  useEffect(() => {
    services.forEach((service) => {
      const img = new Image();
      img.src = service.image;
    });
  }, []);
};

// Hook for filtering services
const useServiceFilter = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const filteredServices = useMemo(() => {
    if (!activeCategory) return services;
    return services.filter((service) => service.category === activeCategory);
  }, [activeCategory]);

  const categoryStats = useMemo(() => {
    return Object.keys(SERVICE_CATEGORIES).reduce((acc, category) => {
      acc[category] = services.filter((s) => s.category === category).length;
      return acc;
    }, {});
  }, []);

  const handleCategoryChange = useCallback((category) => {
    setActiveCategory((prev) => (prev === category ? null : category));
  }, []);

  return {
    activeCategory,
    filteredServices,
    categoryStats,
    handleCategoryChange,
    totalServices: services.length,
  };
};

const ServiceCard = ({ service, index }) => {
  const IconComponent = service.icon;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp(index)}
      whileHover={{
        y: -6,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="group relative bg-white dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm hover:shadow-lg dark:shadow-xl dark:hover:shadow-2xl border border-gray-100 dark:border-zinc-800 flex flex-col h-full transition-shadow duration-300 isolate"
      style={{ transform: "translateZ(0)" }} // GPU layer
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={service.image}
          alt={service.title}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="w-full h-full object-cover will-change-transform"
          style={{ transform: "translateZ(0)" }}
          loading="lazy"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-30`}
        />

        {/* Icon Badge */}
        <motion.div
          className="absolute top-4 right-4"
          whileHover={{ y: -4, rotate: 8 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className={`p-3 rounded-xl bg-gradient-to-r ${service.color} shadow-lg backdrop-blur-sm`}
          >
            <IconComponent className="w-6 h-6 text-white" />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex-1">
          <motion.h3
            className={`text-xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-3`}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            {service.title}
          </motion.h3>

          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
            {service.description}
          </p>

          {/* Features */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Key Features:
            </h4>
            <ul className="space-y-1.5">
              {service.features.slice(0, 3).map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                >
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Technologies:
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.technologies.slice(0, 3).map((tech, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-3 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full"
                >
                  {tech}
                </motion.span>
              ))}
              {service.technologies.length > 3 && (
                <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
                  +{service.technologies.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-auto">
          <Link to={`/services/${service.slug}`}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 px-6 rounded-xl bg-gradient-to-r ${service.color} text-white font-semibold flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300`}
            >
              <span className="mr-2">Learn More</span>
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default function ServicesPage() {
  const {
    activeCategory,
    filteredServices,
    categoryStats,
    handleCategoryChange,
  } = useServiceFilter();

  usePreloadImages(); // Preload images

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <AnimatePresence mode="wait">
        <motion.div
          key="services-content"
          variants={pageTransition}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Header */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div className="text-center mb-12">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 dark:from-purple-400 dark:via-blue-400 dark:to-emerald-400">
                  MY SERVICES
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-4 text-lg sm:text-xl  text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              >
                From AI-powered solutions to full-stack development, I provide
                end-to-end technology services that transform ideas into
                reality.
              </motion.p>
            </motion.div>

            {/* Services Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="w-full"
                >
                  <ServiceCard service={service} index={index} />
                </motion.div>
              ))}
            </motion.div>

            {filteredServices.length === 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-gray-500 dark:text-gray-400 py-12 text-lg"
              >
                No services found in this category.
              </motion.p>
            )}
          </div>

          {/* CTA Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="py-20 px-6 bg-gradient-to-br from-gray-50/50 via-white to-blue-50/50 dark:from-gray-900/50 dark:via-gray-950 dark:to-blue-900/50"
          >
            <div className="container mx-auto max-w-4xl text-center">
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4 text-gray-900 dark:text-white">
                  Ready to <span className="font-bold">Transform</span> Your
                  Ideas?
                </h2>
                <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto mb-8">
                  Let's discuss how my services can help you achieve your goals
                  and drive innovation in your organization.
                </p>
                <Link to="/contact">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white font-semibold shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    Get Started
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="ml-2"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </motion.section>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
