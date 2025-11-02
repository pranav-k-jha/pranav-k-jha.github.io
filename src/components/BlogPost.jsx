import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { getPostBySlug } from "../content/blog/posts";

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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.article
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700"
        >
          <div className="p-5 sm:p-6">
            <div className="flex flex-wrap items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mb-4">
              <span className="bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 text-xs font-medium px-2 py-0.5 rounded">
                {post.category}
              </span>
              <span>•</span>
              <time dateTime={post.date} className="text-xs">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
              <span>•</span>
              <span className="text-xs">{post.readTime}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center mb-6">
              <img
                src={post.authorAvatar}
                alt={post.author}
                className="w-10 h-10 rounded-full mr-3 border-2 border-blue-50 dark:border-blue-900/50"
              />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {post.author}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {post.authorTitle}
                </p>
              </div>
            </div>

            <div className="prose dark:prose-invert max-w-none prose-sm sm:prose-base">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={{
                  img: ({ node, ...props }) => (
                    <img
                      {...props}
                      alt={props.alt || ""}
                      className="rounded-lg my-4 w-full"
                    />
                  ),
                  a: ({ node, ...props }) => (
                    <a
                      {...props}
                      className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  ),
                  h1: ({ node, ...props }) => (
                    <h1
                      className="text-2xl font-bold mt-8 mb-3 text-gray-900 dark:text-white"
                      {...props}
                    />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2
                      className="text-xl font-bold mt-7 mb-3 text-gray-800 dark:text-gray-200"
                      {...props}
                    />
                  ),
                  h3: ({ node, ...props }) => (
                    <h3
                      className="text-lg font-semibold mt-6 mb-2 text-gray-800 dark:text-gray-200"
                      {...props}
                    />
                  ),
                  p: ({ node, ...props }) => (
                    <p
                      className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-4"
                      {...props}
                    />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul
                      className="list-disc pl-5 my-3 space-y-1 text-gray-700 dark:text-gray-300 text-sm sm:text-base"
                      {...props}
                    />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol
                      className="list-decimal pl-5 my-3 space-y-1 text-gray-700 dark:text-gray-300 text-sm sm:text-base"
                      {...props}
                    />
                  ),
                  li: ({ node, ...props }) => (
                    <li
                      className="mb-1 pl-1 text-gray-700 dark:text-gray-300"
                      {...props}
                    />
                  ),
                  blockquote: ({ node, ...props }) => (
                    <blockquote
                      className="border-l-3 border-blue-500 pl-3 italic my-4 text-gray-600 dark:text-gray-400 text-sm sm:text-base"
                      {...props}
                    />
                  ),
                  code: ({ node, inline, className, children, ...props }) => {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline ? (
                      <div className="bg-gray-900 rounded-lg p-3 my-4 overflow-x-auto">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-400 text-xs">
                            {match ? match[1] : "code"}
                          </span>
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(
                                String(children).replace(/\n$/, "")
                              );
                            }}
                            className="text-gray-400 hover:text-white transition-colors"
                            title="Copy to clipboard"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                              />
                            </svg>
                          </button>
                        </div>
                        <code
                          className={`${className} text-xs sm:text-sm`}
                          {...props}
                        >
                          {children}
                        </code>
                      </div>
                    ) : (
                      <code className="bg-gray-200 dark:bg-gray-700 text-pink-600 dark:text-pink-400 rounded px-1 py-0.5 text-xs sm:text-sm font-mono">
                        {children}
                      </code>
                    );
                  },
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
