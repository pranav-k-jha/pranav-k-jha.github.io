import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Calendar, ArrowRight, Sparkles } from "lucide-react";
import { getAllPosts } from "../content/blog/clientPosts";

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

const heroVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: 0.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

// Optimized hover animations - no layout changes
const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.4, ease: "easeOut" },
};

const hoverTranslate = {
  y: -4,
  transition: { duration: 0.3, ease: "easeOut" },
};

// Blog Card Component
const BlogCard = ({ post, featured = false, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      className={`group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg transition-shadow duration-300 ${
        featured ? "h-[420px]" : "h-[400px]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={hoverTranslate}
      style={{ willChange: "transform" }}
    >
      <Link to={`/blog/${post.slug}`} className="block h-full">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={
              post.image ||
              "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop"
            }
            alt={post.title}
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
          {post.category && (
            <motion.div
              className="absolute top-4 left-4"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.05 }}
            >
              <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-white bg-blue-600/90 backdrop-blur-sm rounded-full">
                {post.category}
              </span>
            </motion.div>
          )}
        </div>

        {/* Content */}
        <div className="px-6 pt-5 pb-6 flex flex-col h-[calc(100%-12rem)]">
          <div className="flex-1 flex flex-col">
            {/* Category */}
            <div className="mb-3">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-100/80 dark:bg-blue-900/30 hover:bg-blue-200/80 dark:hover:bg-blue-900/50 transition-colors rounded-full">
                {post.category || "Machine Learning"}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight mb-3">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
              {post.excerpt || "Read more about this article..."}
            </p>
          </div>

          {/* Meta Info */}
          <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <time dateTime={post.date}>
                    {post.date
                      ? new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })
                      : "No date"}
                  </time>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{post.readTime || "5 min read"}</span>
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

// Hero Section Component
const HeroSection = ({ post }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (!post) return null;

  return (
    <motion.section
      variants={heroVariants}
      className="relative h-[500px] rounded-3xl overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/blog/${post.slug}`} className="block h-full">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0">
          <motion.img
            src={
              post.image ||
              "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&h=900&fit=crop"
            }
            alt={post.title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.02 : 1,
            }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />

          {/* Animated Gradient Overlay */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.7 }}
            style={{
              background:
                "radial-gradient(circle at center, transparent 0%, rgba(59, 130, 246, 0.1) 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-end">
          <div className="p-8 sm:p-12 max-w-3xl space-y-4">
            {post.category && (
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold text-white bg-blue-600/90 backdrop-blur-sm rounded-full"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Sparkles className="w-4 h-4" />
                <span>Featured • {post.category}</span>
              </motion.div>
            )}

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {post.title}
            </motion.h2>

            <motion.p
              className="text-lg text-gray-200 line-clamp-2 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {post.excerpt || "Read more about this article..."}
            </motion.p>

            <motion.div
              className="flex items-center gap-6 text-sm text-gray-300 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>
                  {post.date
                    ? new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })
                    : "No date"}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime || "5 min read"}</span>
              </div>
            </motion.div>

            <motion.div
              className="inline-flex items-center text-white font-semibold pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              style={{
                gap: isHovered ? "12px" : "8px",
              }}
            >
              Read Article
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.section>
  );
};

// Loading Skeleton with Animation
const BlogSkeleton = () => (
  <motion.div
    className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 pt-20 pb-20"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-16">
        {/* Hero skeleton */}
        <motion.div
          className="h-[500px] bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-3xl animate-pulse"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Featured skeleton */}
        <div>
          <motion.div
            className="h-8 w-48 bg-gray-200 dark:bg-gray-800 rounded-lg mb-8 animate-pulse"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
          <div className="grid gap-6 md:grid-cols-2">
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                className="h-[400px] bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-2xl animate-pulse"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              />
            ))}
          </div>
        </div>

        {/* Grid skeleton */}
        <div>
          <motion.div
            className="h-8 w-48 bg-gray-200 dark:bg-gray-800 rounded-lg mb-8 animate-pulse"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                className="h-[380px] bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-2xl animate-pulse"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.05, duration: 0.5 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const heroPost = posts[0];
  const featuredPosts = posts.slice(1, 3);
  const regularPosts = posts.slice(3);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <BlogSkeleton key="skeleton" />
      ) : (
        <motion.div
          key="content"
          className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
          variants={pageTransition}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
            {/* Header with Modern Typography */}
            <motion.header
              className="text-center mb-16"
              variants={headerVariants}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent">
                  The Blog
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Thoughts, tutorials, and insights on AI, ML, and technology
              </p>
            </motion.header>

            <div className="space-y-16">
              {/* Hero Post */}
              {heroPost && <HeroSection post={heroPost} />}

              {/* Featured Posts Section */}
              {featuredPosts.length > 0 && (
                <motion.section
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                      Featured Articles
                    </h2>
                    <div className="h-px flex-1 bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-700" />
                  </div>
                  <motion.div
                    className="grid gap-6 md:grid-cols-2"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    {featuredPosts.map((post, index) => (
                      <BlogCard
                        key={post.slug}
                        post={post}
                        index={index}
                        featured
                      />
                    ))}
                  </motion.div>
                </motion.section>
              )}

              {/* Latest Posts Grid */}
              {regularPosts.length > 0 && (
                <motion.section
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                      Latest Posts
                    </h2>
                    <div className="h-px flex-1 bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-700" />
                  </div>
                  <motion.div
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    {regularPosts.map((post, index) => (
                      <BlogCard key={post.slug} post={post} index={index} />
                    ))}
                  </motion.div>
                </motion.section>
              )}

              {/* Empty State */}
              {posts.length === 0 && (
                <motion.div
                  className="text-center py-20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
                    <Sparkles className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    No posts yet
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Check back soon for new content!
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
