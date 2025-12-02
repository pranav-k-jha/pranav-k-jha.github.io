import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
        y: -4,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="group relative bg-white dark:bg-zinc-900/80 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg dark:shadow-xl dark:hover:shadow-2xl border border-gray-100 dark:border-zinc-800 flex flex-col h-full transition-shadow duration-300 isolate"
      style={{ transform: "translateZ(0)" }} // GPU layer
    >
      {/* Active Badge with Animated Underline */}
      {service.isActive && (
        <div className="absolute top-4 left-4 z-10 group">
          <div className="relative inline-block">
            <div className="flex items-center px-3 py-1 text-xs sm:text-sm font-bold text-yellow-300 bg-black/40 backdrop-blur-sm rounded-full border border-yellow-300/20 transition-colors duration-300 group-hover:bg-yellow-300/10">
              <motion.span
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 mr-1.5 sm:mr-2 bg-yellow-300 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span>Active</span>
            </div>
            <motion.span
              className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-300 rounded-full"
              initial={{ width: "0%", left: "0%" }}
              animate={{
                width: ["0%", "100%", "0%"],
                left: ["0%", "0%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      )}

      {/* Image Section */}
      <div className="relative h-36 sm:h-40 overflow-hidden">
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
          className="absolute top-3 right-3 sm:top-4 sm:right-4"
          whileHover={{ y: -2, rotate: 8 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className={`p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-gradient-to-r ${service.color} shadow-lg backdrop-blur-sm`}
          >
            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <div className="flex-1">
          <motion.h3
            className={`text-lg sm:text-xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-2 sm:mb-3`}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            {service.title}
          </motion.h3>

          <p className="text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm">
            {service.description}
          </p>

          {/* Features */}
          <div className="mb-3 sm:mb-4">
            <h4 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
              Key Features:
            </h4>
            <ul className="space-y-1 sm:space-y-1.5">
              {service.features.slice(0, 3).map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="flex items-start text-xs sm:text-sm text-gray-600 dark:text-gray-400"
                >
                  <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500 mr-1.5 sm:mr-2 mt-0.5 flex-shrink-0" />
                  <span className="leading-tight">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mb-4 sm:mb-5">
            <h4 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
              Technologies:
            </h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {service.technologies.slice(0, 3).map((tech, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.05, y: -1 }}
                  className="px-2 py-0.5 text-[10px] sm:text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full"
                >
                  {tech}
                </motion.span>
              ))}
              {service.technologies.length > 3 && (
                <span className="px-2 py-0.5 text-[10px] sm:text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
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
              className={`w-full py-2 sm:py-2.5 px-4 sm:px-5 rounded-lg sm:rounded-xl bg-gradient-to-r ${service.color} text-white font-semibold flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300`}
            >
              <span className="mr-1.5 sm:mr-2 text-xs sm:text-sm">
                Learn More
              </span>
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </motion.span>
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
