import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { getAllPosts } from "../content/blog/clientPosts";
import { useEffect, useState, useRef } from "react";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: index * 0.15,
    },
  }),
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.9,
    transition: { duration: 0.2 },
  },
  hover: {
    y: -5,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
  tap: { scale: 0.98 },
};

const imageHover = {
  scale: 1.05,
  transition: { duration: 0.3, ease: "easeOut" },
};

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const location = useLocation();
  const containerRef = useRef(null);

  useEffect(() => {
    try {
      const allPosts = getAllPosts();
      setPosts(allPosts);
    } catch (error) {
      console.error("Error loading posts:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="min-h-screen bg-white dark:bg-gray-900 pt-32 pb-20 px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-12" variants={item}>
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent"
              variants={item}
            >
              Blog
            </motion.h1>
            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 mx-auto rounded-full"
              variants={item}
            />
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={container}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700/50"
                variants={item}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 animate-pulse"></div>
                <div className="p-6">
                  <div className="h-5 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 rounded-full w-1/3 mb-4 animate-pulse"></div>
                  <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 rounded w-4/5 mb-3 animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded w-full animate-pulse"></div>
                    <div className="h-3 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded w-5/6 animate-pulse"></div>
                    <div className="h-3 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded w-2/3 animate-pulse"></div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700/50">
                    <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 rounded-full w-1/3 animate-pulse"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="exit"
      className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-900/50 dark:via-gray-950 dark:to-purple-900/50 pt-20 pb-12 px-4 sm:px-6"
      key={location.pathname}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 15 },
          }}
          className="text-center mb-12"
        >
          <motion.h1
            className="text-4xl font-bold text-gray-900 dark:text-white mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Blog
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Thoughts, tutorials, and insights on AI, ML, and technology
          </motion.p>
        </motion.div>

        {/* Posts */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          animate="show"
          ref={containerRef}
        >
          <AnimatePresence mode="wait">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                variants={item}
                custom={index}
                initial="hidden"
                animate="show"
                exit="exit"
                layout
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700 flex flex-col relative"
                onHoverStart={() => setHoveredCard(post.slug)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover="hover"
                whileTap="tap"
              >
                <Link to={`/blog/${post.slug}`} className="block group">
                  {/* Featured Image */}
                  <motion.div
                    className="h-48 bg-gray-100 dark:bg-gray-700 overflow-hidden relative"
                    whileHover={imageHover}
                  >
                    {post.image ? (
                      <motion.img
                        src={post.image}
                        alt={post.title || "Blog post image"}
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          transition: { duration: 0.5 },
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <svg
                          className="w-12 h-12"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    )}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                      animate={{ opacity: hoveredCard === post.slug ? 1 : 0 }}
                    />
                    <motion.span
                      className="absolute bottom-4 left-4 px-3 py-1 bg-white dark:bg-gray-900 text-sm font-medium rounded-full text-gray-900 dark:text-white shadow-md"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{
                        y: hoveredCard === post.slug ? 0 : 10,
                        opacity: hoveredCard === post.slug ? 1 : 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      Read More
                    </motion.span>
                  </motion.div>

                  {/* Card Content */}
                  <motion.div
                    className="p-5 flex-grow flex flex-col"
                    initial={{ opacity: 1 }}
                    whileHover={{
                      backgroundColor: "rgba(255, 255, 255, 0.03)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    {post.category && (
                      <motion.span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-3 w-fit">
                        {post.category}
                      </motion.span>
                    )}

                    <motion.h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {post.title || "Untitled Post"}
                    </motion.h2>

                    <motion.p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                      {post.excerpt || "No excerpt available."}
                    </motion.p>

                    {/* Footer */}
                    <motion.div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>{post.author || "Unknown Author"}</span>
                      <div className="flex items-center space-x-2">
                        {post.date && (
                          <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </time>
                        )}
                        {post.readTime && (
                          <>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}
