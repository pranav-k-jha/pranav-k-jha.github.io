import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useMemo, useCallback, useRef, useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Code,
  Database,
  Brain,
  Smartphone,
  Zap,
} from "lucide-react";
import services from "../data/services";

// --- [ ANIMATION VARIANTS ] ---
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
    transition: {
      when: "beforeChildren",
      staggerChildren: 0,
    },
  },
};

const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const fadeInUp = (i) => ({
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.01,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

// --- [ DATA ] ---
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

// --- [ HOOKS ] ---
const usePreloadImages = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const totalImages = services.length;

  useEffect(() => {
    let loadedCount = 0;
    let isMounted = true;

    if (totalImages === 0) {
      if (isMounted) {
        setIsLoading(false);
        setImagesLoaded(true);
      }
      return;
    }

    const loadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          setProgress(Math.round((loadedCount / totalImages) * 100));
          resolve();
        };
        img.onerror = () => {
          loadedCount++;
          setProgress(Math.round((loadedCount / totalImages) * 100));
          resolve();
        };
        img.src = src;
      });
    };

    const loadAllImages = async () => {
      try {
        await Promise.all(services.map((service) => loadImage(service.image)));
        if (isMounted) {
          setImagesLoaded(true);
        }
      } catch (error) {
        console.error("Error loading images:", error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadAllImages();

    return () => {
      isMounted = false;
    };
  }, [totalImages]);

  return {
    isLoading: isLoading || (!imagesLoaded && progress < 100),
    imagesLoaded,
    progress,
  };
};

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

// --- [ ServiceRow Component - MAXIMUM iOS COMPATIBILITY ] ---
const ServiceRow = ({ service, index }) => {
  const IconComponent = service.icon;
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });
  const isReverse = index % 2 !== 0;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeIn}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-gray-100 dark:border-blue-900/50 overflow-hidden bg-white dark:bg-slate-900 transition-all duration-300"
      style={{
        transform: isHovered ? "translateY(-2px)" : "translateY(0)",
      }}
    >
      {/* Background Gradient - NO ANIMATION on iOS */}
      <div
        className="absolute inset-0 z-0 pointer-events-none rounded-xl transition-all duration-300"
        style={{
          background: "transparent",
          boxShadow: isHovered
            ? "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03)"
            : "0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)",
        }}
      />

      <Link
        to={`/services/${service.slug}`}
        className={`relative z-10 flex flex-col md:flex-row items-stretch gap-6 md:gap-10 lg:gap-12 cursor-pointer ${
          isReverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image/Visual Section - NO SCALE ANIMATION */}
        <div className="md:w-5/12 lg:w-4/12 relative flex-shrink-0">
          <div
            className="w-full h-48 sm:h-64 md:h-full rounded-lg sm:rounded-xl overflow-hidden shadow-xl transition-transform duration-300"
            style={{
              transform: isHovered ? "scale(1.02)" : "scale(1)",
            }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              loading="lazy"
              style={{
                WebkitTransform: "translateZ(0)",
                transform: "translateZ(0)",
              }}
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-40`}
            />
          </div>

          {/* Icon Badge Overlay - Simple animation */}
          <div className="absolute top-4 left-4">
            <div
              className={`p-3 rounded-xl bg-gradient-to-r ${service.color} shadow-2xl`}
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "scale(1)" : "scale(0.9)",
                transition: "opacity 0.3s ease 0.3s, transform 0.3s ease 0.3s",
              }}
            >
              <IconComponent className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Active Badge */}
          {service.isActive && (
            <div
              className="absolute top-4 right-4 flex items-center px-2 py-1 text-xs font-bold text-yellow-300 bg-black/50 rounded-full border border-yellow-300/30"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(-5px)",
                transition: "opacity 0.3s ease 0.5s, transform 0.3s ease 0.5s",
              }}
            >
              <Zap className="w-3 h-3 mr-1 text-yellow-300 flex-shrink-0" />
              <span>Active</span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="md:w-7/12 lg:w-8/12 flex flex-col justify-center">
          <h3
            className={`text-2xl sm:text-3xl font-extrabold mb-3 leading-snug bg-clip-text text-transparent bg-gradient-to-r ${service.color}`}
          >
            {service.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mb-6 text-base sm:text-lg font-light leading-relaxed">
            {service.description}
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-6 ${
              isReverse ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Features List - Using CSS transitions instead of Framer Motion */}
            <div className="w-full sm:w-1/2">
              <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-2">
                Key Deliverables:
              </h4>
              <ul className="space-y-2">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-sm text-gray-700 dark:text-gray-400"
                    style={{
                      opacity: isInView ? 1 : 0,
                      transform: isInView
                        ? "translateX(0)"
                        : `translateX(${isReverse ? "20px" : "-20px"})`,
                      transition: `opacity 0.4s ease ${
                        0.6 + idx * 0.1
                      }s, transform 0.4s ease ${0.6 + idx * 0.1}s`,
                    }}
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="w-full sm:w-1/2">
              <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-2">
                Core Technologies:
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.technologies.slice(0, 4).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-semibold bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 rounded-full shadow-sm"
                    style={{
                      opacity: isInView ? 1 : 0,
                      transform: isInView ? "scale(1)" : "scale(0.9)",
                      transition: `opacity 0.4s ease ${
                        0.8 + idx * 0.08
                      }s, transform 0.4s ease ${0.8 + idx * 0.08}s`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Button - CSS only */}
              <div className="mt-6">
                <div
                  className={`inline-flex items-center py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl bg-gradient-to-r ${service.color} text-white font-semibold text-sm shadow-md hover:shadow-xl transition-all duration-300`}
                  style={{
                    transform: isHovered ? "scale(1.02)" : "scale(1)",
                  }}
                >
                  <span className="mr-2">Explore {service.category}</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-200"
                    style={{
                      transform: isHovered
                        ? "translateX(4px)"
                        : "translateX(0)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

// --- [ Loading Skeleton Component ] ---
const ServiceCardSkeleton = ({ count = 4 }) => {
  return (
    <div className="space-y-12 sm:space-y-16">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="h-64 w-full bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse"
        />
      ))}
    </div>
  );
};

// --- [ ServicesPage Component ] ---
export default function ServicesPage() {
  const { filteredServices } = useServiceFilter();
  const { isLoading, imagesLoaded, progress } = usePreloadImages();

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
          <div className="container max-w-7xl mt-10 mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-10">
            <motion.div className="text-center mb-16">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-3"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 dark:from-purple-400 dark:via-blue-400 dark:to-emerald-400">
                  SPECIALIZED SERVICES
                </span>
              </motion.h1>

              <motion.div
                className="space-y-2 text-center"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <h2 className="text-base sm:text-lg font-light text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  End-to-end technology solutions in AI, full-stack development,
                  and data engineering to power your next big idea.
                </h2>
              </motion.div>
            </motion.div>

            {/* Services List */}
            {isLoading ? (
              <div className="text-center py-12">
                <div className="w-full max-w-md mx-auto bg-gray-100 dark:bg-gray-800 rounded-full h-2.5 mb-4">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Loading services... {progress}%
                </p>
                <ServiceCardSkeleton count={filteredServices.length} />
              </div>
            ) : !imagesLoaded ? (
              <ServiceCardSkeleton count={filteredServices.length} />
            ) : (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-12 sm:space-y-16"
              >
                {filteredServices.map((service, index) => (
                  <ServiceRow
                    key={service.id}
                    service={service}
                    index={index}
                  />
                ))}
              </motion.div>
            )}

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
              <motion.div variants={fadeInUp(0)}>
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
