import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useMemo, useCallback } from "react";
import { ArrowRight, CheckCircle, Code, Database, Brain } from "lucide-react";

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
  exit: { opacity: 0 },
};

// Animation variants for container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Animation variants for items
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// Animation variants for staggered cards
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// Stagger container
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

// Card variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.08,
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
  hover: {
    y: -4,
    transition: { duration: 0.2 },
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
  // "Data Engineering": {
  //   name: "Data Engineering",
  //   icon: Database,
  //   description: "Data pipelines and analytics platforms",
  //   color: "from-orange-500 to-red-500",
  // },
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
  // {
  //   id: 3,
  //   title: "Data Engineering & Analytics",
  //   slug: "data-engineering",
  //   description:
  //     "Robust data pipelines, ETL processes, and analytics platforms to unlock insights from your data.",
  //   image:
  //     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
  //   icon: Database,
  //   category: "Data Engineering",
  //   features: [
  //     "Data Pipeline Development",
  //     "ETL/ELT Processes",
  //     "Data Warehousing",
  //     "Real-time Analytics",
  //     "Data Visualization",
  //   ],
  //   technologies: ["Python", "Apache Airflow", "PostgreSQL", "Redis", "Docker"],
  //   color: "from-orange-500 to-red-500",
  // },
];

// Hook for filtering services
const useServiceFilter = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const filteredServices = useMemo(() => {
    if (!activeCategory) return services;
    return services.filter((service) => service.category === activeCategory);
  }, [activeCategory]);

  const categoryStats = useMemo(() => {
    return Object.keys(SERVICE_CATEGORIES).reduce((acc, category) => {
      acc[category] = services.filter(
        (service) => service.category === category
      ).length;
      return acc;
    }, {});
  }, []);

  const handleCategoryChange = useCallback((category) => {
    setActiveCategory(category);
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

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
      variants={cardVariants}
      whileHover="hover"
      className="group relative bg-white dark:bg-zinc-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 dark:border-zinc-800 flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
        <div
          className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20`}
        />

        {/* Icon */}
        <motion.div
          className="absolute top-4 right-4"
          whileHover={{ y: -4, rotate: 5 }}
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
            className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            {service.title}
          </motion.h3>

          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            {service.description}
          </p>

          {/* Features */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Key Features:
            </h4>
            <ul className="space-y-2">
              {service.features.slice(0, 3).map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
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
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-3 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full"
                >
                  {tech}
                </motion.span>
              ))}
              {service.technologies.length > 3 && (
                <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
                  +{service.technologies.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-auto">
          <Link to={`/services/${service.slug}`}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 px-4 rounded-xl bg-gradient-to-r ${service.color} text-white font-semibold flex items-center justify-center cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300`}
            >
              Learn More
              <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.div>
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
    totalServices,
  } = useServiceFilter();

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
          {/* Header Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Header with Animation */}
            <div className="space-y-4 mb-12">
              {/* Main Heading */}
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
                  MY SERVICES
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                From AI-powered solutions to full-stack development, I provide
                end-to-end technology services that transform ideas into
                reality.
              </motion.p>
            </div>

            {/* Services Grid */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-20px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-4"
            >
              {filteredServices.slice(0, 2).map((service, index) => (
                <div key={service.id} className="w-full flex justify-center">
                  <div className="w-full max-w-sm">
                    <ServiceCard service={service} index={index} />
                  </div>
                </div>
              ))}
            </motion.div>

            {/* No results message */}
            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-12"
              >
                <div className="text-gray-500 dark:text-gray-400 text-lg">
                  No services found in this category.
                </div>
              </motion.div>
            )}
          </div>

          {/* CTA Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="py-20 px-6 bg-gradient-to-br from-gray-50/50 via-white to-blue-50/50 dark:from-gray-900/50 dark:via-gray-950 dark:to-blue-900/50"
          >
            <div className="container mx-auto max-w-4xl text-center">
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-light tracking-tight mb-4 text-gray-900 dark:text-white">
                  Ready to <span className="font-bold">Transform</span> Your
                  Ideas?
                </h2>
                <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto mb-8">
                  Let's discuss how my services can help you achieve your goals
                  and drive innovation in your organization.
                </p>
                <div className="flex justify-center">
                  <Link to="/contact">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white font-semibold flex items-center justify-center cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                    >
                      Get Started
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </motion.div>
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
