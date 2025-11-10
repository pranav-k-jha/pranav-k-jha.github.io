import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { getPostBySlug } from "../content/blog/clientPosts";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = getPostBySlug(slug);
        if (!postData) {
          throw new Error("Post not found");
        }
        setPost(postData);
      } catch (error) {
        console.error("Error loading post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-20 pb-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/3"></div>
            <div className="h-48 bg-gray-200 dark:bg-gray-800 rounded mt-6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-20 pb-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
            The requested blog post could not be found.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors text-sm font-medium focus:outline-none"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Blog
          </button>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700"
        >
          <div className="p-6 sm:p-8">
            <div className="mb-8">
              <div className="flex items-center text-[0.6rem] md:text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span className="bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 text-xs font-medium px-2 py-0.5 rounded">
                  {post.category}
                </span>
                <span className="mx-2">•</span>
                <time dateTime={post.date}>{post.date}</time>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>

              <h1 className="text-xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {post.title}
              </h1>

              <div className="flex items-center mt-6">
                <img
                  src={post.authorAvatar}
                  alt={post.author}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="text-xs md:text-sm font-medium text-gray-900 dark:text-white">
                    {post.author}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                    {post.authorTitle}
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-none text-gray-800 dark:text-gray-200 prose dark:prose-invert">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={{
                  // Skip the h1 if it matches the post title
                  h1: ({ node, ...props }) => {
                    // Convert both to string and trim for comparison
                    const titleFromProps = String(
                      props.children[0] || ""
                    ).trim();
                    const postTitle = String(post.title || "").trim();

                    // Skip if they match (case-insensitive)
                    if (
                      titleFromProps.toLowerCase() === postTitle.toLowerCase()
                    ) {
                      return null;
                    }

                    // Otherwise render the h1
                    return (
                      <h1
                        className="text-lg md:text-2xl font-bold mt-6 mb-4"
                        {...props}
                      />
                    );
                  },
                  h2: (props) => (
                    <h2
                      className="text-xl md:text-2xl font-bold mt-8 mb-3 pt-4 border-t border-gray-100 dark:border-gray-700"
                      {...props}
                    />
                  ),
                  h3: (props) => (
                    <h3
                      className="text-sm md:text-xl font-semibold mt-6 mb-2"
                      {...props}
                    />
                  ),
                  p: (props) => (
                    <p
                      className="leading-relaxed text-sm md:text-base mb-4 text-gray-700 dark:text-gray-300"
                      {...props}
                    />
                  ),
                  ul: (props) => (
                    <ul
                      className="list-disc pl-6 text-sm md:text-base mb-4 space-y-1 text-gray-700 dark:text-gray-300"
                      {...props}
                    />
                  ),
                  ol: (props) => (
                    <ol
                      className="list-decimal pl-6 text-sm md:text-base mb-4 space-y-1 text-gray-700 dark:text-gray-300"
                      {...props}
                    />
                  ),
                  blockquote: ({ node, ...props }) => (
                    <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-r transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700/70">
                      {props.children}
                    </blockquote>
                  ),
                  table: ({ children }) => (
                    <div className="overflow-x-auto my-6 rounded-lg border border-gray-200 dark:border-gray-700">
                      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        {children}
                      </table>
                    </div>
                  ),
                  thead: ({ children }) => (
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      {children}
                    </thead>
                  ),
                  tbody: ({ children }) => (
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                      {children}
                    </tbody>
                  ),
                  tr: ({ children }) => (
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      {children}
                    </tr>
                  ),
                  th: ({ children }) => (
                    <th className="px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      {children}
                    </th>
                  ),
                  td: ({ children }) => (
                    <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base text-gray-700 dark:text-gray-300">
                      {children}
                    </td>
                  ),
                  code: ({ inline, className, children, ...rest }) => {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline ? (
                      <div className="bg-gray-900 text-gray-100 rounded-lg p-3 my-4 overflow-x-auto text-sm">
                        <code
                          className={`text-xs sm:text-sm ${className}`}
                          {...rest}
                        >
                          {children}
                        </code>
                      </div>
                    ) : (
                      <code
                        className="bg-gray-200 dark:bg-gray-700 rounded px-1.5 py-0.5 text-xs sm:text-sm font-mono text-pink-600 dark:text-pink-400"
                        {...rest}
                      >
                        {children}
                      </code>
                    );
                  },
                  a: (props) => (
                    <a
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                      {...props}
                    />
                  ),
                  img: (props) => (
                    <img
                      className="my-4 rounded-lg shadow-md w-full max-w-2xl mx-auto"
                      alt={props.alt || ""}
                      {...props}
                    />
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </div>
        </motion.article>

        <div className="mt-8 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
          >
            <svg
              className="w-4 h-4 mr-1.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
