import { useEffect, useState, useRef } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  Twitter,
  Linkedin,
  Facebook,
  Link2,
} from "lucide-react";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { insights } from "../data/insights";

const useClipboard = () => {
  const [copied, setCopied] = useState(false);

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return { copied, copy };
};

// Custom components for markdown rendering
const Pre = ({ children, clipboard }) => (
  <div className="relative group">
    <button
      onClick={() => clipboard.copy(children.props.children)}
      className="absolute right-2 top-2 p-1.5 rounded-md bg-gray-100 dark:bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity"
    >
      {clipboard.copied ? (
        <span className="text-green-500">✓</span>
      ) : (
        <Link2 className="w-4 h-4 text-gray-600 dark:text-gray-300" />
      )}
    </button>
    <pre className="rounded-lg overflow-hidden">{children}</pre>
  </div>
);

const Headings = ({ level, children, ...props }) => {
  const Tag = `h${level}`;
  const id = children
    ?.toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

  return (
    <Tag id={id} className="group relative scroll-mt-20" {...props}>
      <a
        href={`#${id}`}
        className="absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-blue-500 dark:text-blue-400 transition-opacity"
        aria-hidden="true"
      >
        #
      </a>
      {children}
    </Tag>
  );
};

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const staggerContainer = {
  enter: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const InsightDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const [insight, setInsight] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [readingProgress, setReadingProgress] = useState(0);
  const contentRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const { copied, copy } = useClipboard();
  const clipboard = { copied, copy };

  useEffect(() => {
    if (insight) {
      setShareUrl(`${window.location.origin}${location.pathname}`);
    }
  }, [insight, location.pathname]);

  useEffect(() => {
    // Reset scroll position on route change
    window.scrollTo(0, 0);

    const selectedInsight = insights.find((i) => i.id === id);
    if (selectedInsight) {
      setInsight(selectedInsight);
      document.title = `${selectedInsight.title} | Insights`;
    } else {
      console.error("Insight not found:", id);
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      if (contentRef.current) {
        const contentHeight =
          contentRef.current.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / contentHeight) * 100;
        setReadingProgress(Math.min(100, Math.max(0, scrolled)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    setLoading(false);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.title = "Loading...";
    };
  }, [id, location]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mb-4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
        </div>
      </div>
    );
  }

  if (!insight) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Insight Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            The insight you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/insights"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  const shareText = `Check out this insight: ${insight?.title}`;

  return (
    <motion.div
      initial="initial"
      animate="enter"
      variants={pageVariants}
      className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200"
      ref={contentRef}
    >
      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-blue-500 z-50 transition-all duration-200 ease-out"
        style={{ width: `${readingProgress}%` }}
      />
      <motion.div
        className="relative h-[32rem] w-full overflow-hidden"
        variants={fadeInUp}
      >
        <div className="absolute inset-0">
          <img
            src={insight.image}
            alt={insight.title}
            className="w-full h-full object-cover transform transition-transform duration-1000 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-16">
          <motion.div
            className="max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="enter"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <Link
                to="/insights"
                className="inline-flex items-center text-sm text-white/90 hover:text-white transition-all duration-200 group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Back to Insights
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm border border-white/10">
                {insight.category}
              </span>
              <div className="flex items-center text-sm text-white/90">
                <Calendar className="w-4 h-4 mr-1.5" />
                {new Date(insight.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center text-sm text-white/90">
                <Clock className="w-4 h-4 mr-1.5" />
                {insight.readTime}
              </div>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              {insight.title}
            </motion.h1>

            {insight.excerpt && (
              <motion.p
                variants={fadeInUp}
                className="text-xl text-white/90 max-w-3xl mb-8"
              >
                {insight.excerpt}
              </motion.p>
            )}

            {insight.tags && insight.tags.length > 0 && (
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-2 mt-6"
              >
                {insight.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 hover:bg-white/20 text-white/90 hover:text-white backdrop-blur-sm border border-white/5 transition-all duration-200"
                  >
                    <Tag className="w-3 h-3 mr-1.5" />
                    {tag}
                  </span>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <motion.article
            variants={fadeInUp}
            className="prose dark:prose-invert prose-lg max-w-none lg:col-span-8"
          >
            <div className="[&>p]:text-gray-700 [&>p]:dark:text-gray-300 [&>p]:text-lg [&>p]:leading-relaxed">
              <ReactMarkdown
                components={{
                  pre: (props) => <Pre {...props} clipboard={clipboard} />,
                  h1: (props) => <Headings level={1} {...props} />,
                  h2: (props) => <Headings level={2} {...props} />,
                  h3: (props) => <Headings level={3} {...props} />,
                  h4: (props) => <Headings level={4} {...props} />,
                  h5: (props) => <Headings level={5} {...props} />,
                  h6: (props) => <Headings level={6} {...props} />,
                  a: ({ node, ...props }) => (
                    <a
                      {...props}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 underline underline-offset-4 decoration-from-font"
                    />
                  ),
                  code: ({ node, inline, className, children, ...props }) => {
                    if (inline) {
                      return (
                        <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-sm rounded-md border border-gray-200 dark:border-gray-700">
                          {children}
                        </code>
                      );
                    }
                    return <code className={className} {...props} />;
                  },
                  blockquote: ({ node, ...props }) => (
                    <blockquote
                      className="border-l-4 border-blue-500 pl-4 py-1 my-6 text-gray-700 dark:text-gray-300 italic bg-blue-50 dark:bg-blue-900/20 rounded-r-lg"
                      {...props}
                    />
                  ),
                }}
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
              >
                {insight.content}
              </ReactMarkdown>
            </div>

            {/* Share Buttons */}
            <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Share this article
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Found this useful? Share it with your network.
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      shareText
                    )}&url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 hover:bg-blue-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-blue-500 dark:text-blue-400 transition-colors duration-200"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      shareUrl
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 hover:bg-blue-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-blue-500 dark:text-blue-400 transition-colors duration-200"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      shareUrl
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 hover:bg-blue-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-blue-500 dark:text-blue-400 transition-colors duration-200"
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <button
                    onClick={() => clipboard.copy(shareUrl)}
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 hover:bg-blue-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-blue-500 dark:text-blue-400 transition-colors duration-200 relative`}
                    aria-label="Copy link"
                  >
                    <AnimatePresence mode="wait">
                      {clipboard.copied ? (
                        <motion.span
                          key="check"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          ✓
                        </motion.span>
                      ) : (
                        <motion.span
                          key="link"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <Link2 className="w-5 h-5" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </div>
            </div>

            {/* Back to Insights */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <Link
                to="/insights"
                className="group inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Back to Insights
              </Link>
            </div>
          </motion.article>

          {/* Table of Contents - Desktop */}
          <motion.div
            variants={fadeInUp}
            className="hidden lg:block lg:col-span-4"
          >
            <div className="sticky top-24">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {insight.content
                    .split("\n")
                    .filter((line) => line.startsWith("## "))
                    .map((heading, index) => {
                      const title = heading.replace(/^##\s+/, "");
                      const id = title
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[^\w-]+/g, "");
                      return (
                        <a
                          key={index}
                          href={`#${id}`}
                          className="block py-1.5 text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
                        >
                          {title}
                        </a>
                      );
                    })}
                </nav>
              </div>

              {/* Back to top button - shown on scroll */}
              <AnimatePresence>
                {isScrolled && (
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="mt-6 w-full py-2.5 px-4 text-sm font-medium text-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center"
                  >
                    <ArrowUp className="w-4 h-4 mr-2" />
                    Back to top
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default InsightDetail;
