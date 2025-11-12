import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { useState } from "react";
import { insights } from "../data/insights"; // Keep this import

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

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const hoverTranslate = {
  y: -5,
  transition: { type: "spring", stiffness: 300, damping: 20 },
};

const InsightCard = ({ insight, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg transition-shadow duration-300 flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={hoverTranslate}
      style={{ willChange: "transform" }}
    >
      <Link to={`/insights/${insight.id}`} className="block h-full">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={insight.image}
            alt={insight.title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ willChange: "transform" }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />

          {/* Category Badge */}
          <motion.div
            className="absolute top-4 left-4"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.05 }}
          >
            <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-white bg-blue-600/90 backdrop-blur-sm rounded-full">
              {insight.category}
            </span>
          </motion.div>
        </div>

        {/* Content */}
        <div className="px-6 pt-5 pb-6 flex flex-col flex-grow">
          <div className="flex-1 flex flex-col">
            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight mb-3">
              {insight.title}
            </h3>

            {/* Excerpt */}
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">
              {insight.excerpt}
            </p>
          </div>

          {/* Meta Info */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <time dateTime={insight.date}>
                    {new Date(insight.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{insight.readTime}</span>
                </div>
              </div>

              <motion.div
                animate={{ x: isHovered ? 4 : 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </motion.div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

const InsightsPage = () => {
  return (
    <motion.div
      key="content"
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        {/* Header with Animation */}
        <div className="space-y-4 mb-8">
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
              PERSONAL INSIGHTS
            </span>
          </motion.h1>

          {/* Subtitle */}
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
            <h2 className="text-lg sm:text-xl font-light text-gray-600 dark:text-gray-400">
              Thoughts, lessons, and reflections from my journey in tech and
              beyond
            </h2>
          </motion.div>
        </div>

        {/* Insights Grid with Modern Layout */}
        <div className="space-y-16 max-w-4xl mx-auto">
          <AnimatePresence>
            {insights.map((insight, index) => (
              <motion.div
                key={insight.id}
                custom={index}
                variants={cardVariants}
                className="group relative"
              >
                <Link to={`/insights/${insight.id}`} className="block">
                  <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="md:flex">
                      {/* Image on the left for larger screens */}
                      <div className="md:w-2/5 relative h-64 md:h-auto">
                        <motion.img
                          src={insight.image}
                          alt={insight.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent md:hidden" />
                        <div className="absolute bottom-0 left-0 p-4 md:hidden">
                          <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-blue-600/90 backdrop-blur-sm rounded-full">
                            {insight.category}
                          </span>
                        </div>
                      </div>

                      {/* Content on the right */}
                      <div className="p-6 md:w-3/5 flex flex-col">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                              {insight.category}
                            </span>
                            <span className="text-gray-400">•</span>
                            <time
                              dateTime={insight.date}
                              className="text-xs text-gray-500 dark:text-gray-400"
                            >
                              {new Date(insight.date).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                            </time>
                          </div>

                          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3">
                            {insight.title}
                          </h3>

                          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                            {insight.excerpt}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{insight.readTime}</span>
                          </div>
                          <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm">
                            Read more
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Want more insights?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            I share more thoughts, lessons, and behind-the-scenes on my social
            media. Let's connect!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://twitter.com/pranav_kjha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors shadow-sm hover:shadow-md"
            >
              Follow on Twitter
            </a>
            <a
              href="https://linkedin.com/in/pranav-k-jha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium transition-colors"
            >
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InsightsPage;
