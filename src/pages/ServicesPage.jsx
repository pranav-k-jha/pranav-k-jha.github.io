import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useMemo, useCallback, useEffect, useState } from "react";
import { ArrowRight, Code, Database, Brain, Smartphone } from "lucide-react";
import ServiceCard from "../components/ServiceCard";

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
  "Mobile Development": {
    name: "Mobile Development",
    icon: Smartphone,
    description: "Cross-platform mobile applications",
    color: "from-teal-500 to-emerald-600",
  },
};

const services = [
  {
    id: 1,
    isActive: true, // Mark this service as active
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
    isActive: true, //
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
  {
    id: 4,
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description:
      "Cross-platform mobile applications built with React Native and Expo Router, powered by a robust Node.js and GraphQL backend.",
    image:
      "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&q=80&w=1000",
    icon: Smartphone,
    category: "Mobile Development",
    features: [
      "Cross-platform iOS & Android Apps",
      "Expo Router for Navigation",
      "GraphQL API Integration",
      "Offline-First Capabilities",
      "Push Notifications",
    ],
    technologies: [
      "React Native",
      "Expo Router",
      "Node.js",
      "GraphQL",
      "TypeScript",
    ],
    color: "from-green-500 to-emerald-500",
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
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
            <motion.div className="text-center mb-12">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-2xl sm:text-3xl font-bold tracking-tight"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 dark:from-purple-400 dark:via-blue-400 dark:to-emerald-400">
                  MY SERVICES
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
                className="mt-3 sm:mt-4 text-base sm:text-lg font-light text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              >
                I provide freelance services to individuals, startups, and
                organizations—offering AI solutions, full-stack development, and
                end-to-end technology support to bring ideas to life.
              </motion.p>
            </motion.div>

            {/* Services Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
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
            className="py-16 sm:py-20 bg-gradient-to-br from-gray-50/50 via-white to-blue-50/50 dark:from-gray-900/50 dark:via-gray-950 dark:to-blue-900/50"
          >
            <div className="container max-w-4xl mx-auto px-4 sm:px-6 text-center">
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl sm:text-3xl font-light tracking-tight mb-3 sm:mb-4 text-gray-900 dark:text-white">
                  Ready to <span className="font-bold">Transform</span> Your
                  Ideas?
                </h2>
                <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base">
                  Let's discuss how my services can help you achieve your goals
                  and drive innovation in your organization.
                </p>
                <Link to="/contact">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    Get Started
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="ml-1.5 sm:ml-2"
                    >
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
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
