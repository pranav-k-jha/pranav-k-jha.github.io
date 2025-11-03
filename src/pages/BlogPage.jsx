import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { getAllPosts } from "../content/blog/clientPosts";

// Blog Card Component
const BlogCard = ({ post, featured = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer ${
        featured ? "h-[400px]" : "h-[380px]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <Link to={`/blog/${post.slug}`} className="block h-full">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={
              post.image ||
              "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop"
            }
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />

          {/* Category Badge */}
          {post.category && (
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-white bg-blue-600/90 backdrop-blur-sm rounded-full">
                {post.category}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {post.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
              {post.excerpt || "Read more about this article..."}
            </p>
          </div>

          {/* Meta Info */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
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
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime || "5 min read"}</span>
              </div>
            </div>

            <div
              style={{
                transform: isHovered ? "translateX(4px)" : "translateX(0)",
                transition: "transform 0.2s ease-out",
              }}
            >
              <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

// Hero Section Component
const HeroSection = ({ post }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (!post) return null;

  return (
    <section
      className="relative h-[500px] rounded-3xl overflow-hidden group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/blog/${post.slug}`} className="block h-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={
              post.image ||
              "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&h=900&fit=crop"
            }
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out"
            style={{
              transform: isHovered ? "scale(1.02)" : "scale(1)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-end">
          <div className="p-8 sm:p-12 max-w-3xl">
            {post.category && (
              <span className="inline-flex items-center px-4 py-1.5 text-sm font-semibold text-white bg-blue-600/90 backdrop-blur-sm rounded-full mb-4">
                Featured • {post.category}
              </span>
            )}

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h2>

            <p className="text-lg text-gray-200 mb-6 line-clamp-2">
              {post.excerpt || "Read more about this article..."}
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-300">
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
            </div>

            <div
              className="mt-6 inline-flex items-center text-white font-semibold transition-all"
              style={{
                gap: isHovered ? "12px" : "8px",
              }}
            >
              Read Article
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

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

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Loading skeleton */}
          <div className="space-y-12">
            <div className="h-96 bg-gray-100 dark:bg-gray-800 rounded-2xl animate-pulse"></div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-80 bg-gray-100 dark:bg-gray-800 rounded-2xl animate-pulse"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const heroPost = posts[0];
  const featuredPosts = posts.slice(1, 3); // Get next 2 posts for featured
  const regularPosts = posts.slice(3); // Remaining posts

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl pb-2 font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent mb-6">
            The Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on AI, ML, and technology
          </p>
        </header>

        <div className="space-y-16">
          {/* Hero Post */}
          {heroPost && <HeroSection post={heroPost} />}

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Featured Articles
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {featuredPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} featured />
                ))}
              </div>
            </section>
          )}

          {/* All Posts Grid */}
          {regularPosts.length > 0 && (
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Latest Posts
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {regularPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
