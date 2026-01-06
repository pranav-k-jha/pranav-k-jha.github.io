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

// ============================================================================
// ANIMATION VARIANTS - Optimized for 60fps performance
// ============================================================================

const pageTransition = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const fadeInUp = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ============================================================================
// SERVICE CATEGORIES DATA
// ============================================================================

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

// ============================================================================
// CUSTOM HOOKS
// ============================================================================

/**
 * Preload images with progress tracking
 * Optimized for better UX with loading states
 */
const usePreloadImages = () => {
  const [state, setState] = useState({
    isLoading: true,
    progress: 0,
    imagesLoaded: false,
  });

  useEffect(() => {
    const totalImages = services.length;

    if (totalImages === 0) {
      setState({ isLoading: false, progress: 100, imagesLoaded: true });
      return;
    }

    let loadedCount = 0;
    const images = services.map((service) => {
      const img = new Image();

      const handleLoad = () => {
        loadedCount++;
        const progress = Math.round((loadedCount / totalImages) * 100);
        setState((prev) => ({ ...prev, progress }));

        if (loadedCount === totalImages) {
          setState({ isLoading: false, progress: 100, imagesLoaded: true });
        }
      };

      img.onload = handleLoad;
      img.onerror = handleLoad; // Count errors as loaded to prevent hanging
      img.src = service.image;

      return img;
    });

    return () => {
      images.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, []);

  return state;
};

/**
 * Service filtering hook with category management
 */
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
  };
};

// ============================================================================
// SERVICE CARD COMPONENT - Fully optimized for Safari/iOS
// ============================================================================

const ServiceCard = ({ service, index }) => {
  const IconComponent = service.icon;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const isReverse = index % 2 !== 0;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1,
      }}
      className="group relative"
    >
      <Link
        to={`/services/${service.slug}`}
        className={`block relative bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl border border-gray-100 dark:border-blue-900/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
        style={{
          transform: "translate3d(0,0,0)",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
      >
        <div
          className={`flex flex-col ${
            isReverse ? "md:flex-row-reverse" : "md:flex-row"
          } gap-0`}
        >
          {/* Image Section - Fixed for Safari/iOS */}
          <div className="relative md:w-5/12 lg:w-4/12 flex-shrink-0">
            <div className="relative w-full h-48 sm:h-64 md:h-full overflow-hidden rounded-lg sm:rounded-xl shadow-xl">
              {/* Image with proper Safari optimization */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
                loading="lazy"
                style={{
                  // Critical iOS/Safari fixes
                  transform: "translate3d(0,0,0)",
                  WebkitTransform: "translate3d(0,0,0)",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  WebkitFontSmoothing: "subpixel-antialiased",
                }}
              />

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${service.color} transition-opacity duration-300`}
                style={{
                  opacity: 0.4,
                  transform: "translate3d(0,0,0)",
                  backfaceVisibility: "hidden",
                }}
              />

              {/* Icon Badge */}
              <div className="absolute top-4 left-4">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${service.color} shadow-2xl`}
                  style={{
                    transform: "translate3d(0,0,0)",
                    backfaceVisibility: "hidden",
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
                    transform: "translate3d(0,0,0)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <Zap className="w-3 h-3 mr-1 text-yellow-300 flex-shrink-0" />
                  <span>Active</span>
                </div>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-7/12 lg:w-8/12 flex flex-col justify-center p-4 sm:p-6 lg:p-8">
            {/* Title */}
            <h3
              className={`text-2xl sm:text-3xl font-extrabold mb-3 leading-snug bg-clip-text text-transparent bg-gradient-to-r ${service.color}`}
              style={{
                transform: "translate3d(0,0,0)",
                backfaceVisibility: "hidden",
              }}
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
              {/* Key Deliverables */}
              <div className="w-full sm:w-1/2">
                <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-2">
                  Key Deliverables:
                </h4>
                <ul className="space-y-2">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-gray-700 dark:text-gray-400"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Core Technologies */}
              <div className="w-full sm:w-1/2">
                <h4 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-2">
                  Core Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-semibold bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 rounded-full shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-6">
                  <div
                    className={`inline-flex items-center py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl bg-gradient-to-r ${service.color} text-white font-semibold text-sm shadow-md transition-all duration-300 group-hover:shadow-xl`}
                    style={{
                      transform: "translate3d(0,0,0)",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <span className="mr-2">Explore {service.category}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

// ============================================================================
// LOADING SKELETON
// ============================================================================

const LoadingSkeleton = () => (
  <div className="space-y-12 sm:space-y-16 mt-8">
    {[1, 2, 3, 4].map((i) => (
      <div
        key={i}
        className="h-64 w-full bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse"
      />
    ))}
  </div>
);

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function ServicesPage() {
  const { filteredServices } = useServiceFilter();
  const { isLoading, progress, imagesLoaded } = usePreloadImages();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-950 dark:via-slate-900 dark:to-blue-950/30">
      <AnimatePresence mode="wait">
        <motion.div
          key="services-page"
          {...pageTransition}
          className="relative"
        >
          {/* Hero Header */}
          <section className="container max-w-7xl mt-10 mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-10">
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
          </section>

          {/* Services List */}
          <section className="container max-w-7xl mx-auto px-4 sm:px-6 pb-10">
            {/* Loading State */}
            {isLoading && (
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
                <LoadingSkeleton />
              </div>
            )}

            {/* Services List */}
            {!isLoading && imagesLoaded && (
              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="space-y-12 sm:space-y-16"
              >
                {filteredServices.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    index={index}
                  />
                ))}
              </motion.div>
            )}

            {/* Empty State */}
            {!isLoading && filteredServices.length === 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-gray-500 dark:text-gray-400 py-12 text-lg"
              >
                No services found in this category.
              </motion.p>
            )}
          </section>

          {/* CTA Section */}
          <motion.section
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="py-16 sm:py-20 bg-gradient-to-br from-gray-50/50 via-white to-blue-50/50 dark:from-gray-900/50 dark:via-gray-950 dark:to-blue-900/50"
          >
            <div className="container max-w-4xl mx-auto px-4 sm:px-6 text-center">
              <motion.div variants={fadeInUp}>
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
                    style={{
                      transform: "translate3d(0,0,0)",
                      backfaceVisibility: "hidden",
                    }}
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
