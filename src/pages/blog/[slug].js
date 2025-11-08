import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { getPostBySlug, getAllPostSlugs } from "../../src/content/blog/posts";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { format, parseISO } from "date-fns";
import { NextSeo } from "next-seo";
import Script from "next/script";

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  const mdxSource = await serialize(post.content);

  return {
    props: {
      post: {
        ...post,
        content: mdxSource,
      },
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

export default function BlogPost({ post }) {
  const router = useRouter();
  const baseUrl = "https://pranav-k-jha.github.io";
  const postUrl = `${baseUrl}${router.asPath}`;
  const publishedDate = new Date(post.date).toISOString();
  const imageUrl = post.image || `${baseUrl}/images/blog-default-og.jpg`;
  const authorName = post.author || "Pranav K Jha";
  const authorTitle = post.authorTitle || "AI Engineer";
  const authorAvatar = post.authorAvatar || "/profile.jpeg";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: imageUrl,
    datePublished: publishedDate,
    author: {
      "@type": "Person",
      name: authorName,
      jobTitle: authorTitle,
      image: `${baseUrl}${authorAvatar}`,
      url: "https://pranav-k-jha.github.io",
    },
    publisher: {
      "@type": "Organization",
      name: "Pranav K Jha",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    keywords: post.category ? [post.category] : [],
  };

  return (
    <>
      <NextSeo
        title={`${post.title} | Pranav K Jha`}
        description={post.excerpt}
        canonical={postUrl}
        openGraph={{
          title: post.title,
          description: post.excerpt,
          url: postUrl,
          type: "article",
          article: {
            publishedTime: publishedDate,
            section: post.category,
            authors: ["https://pranav-k-jha.github.io"],
            tags: post.category ? [post.category] : [],
          },
          images: [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
          site: "pranav_k.jha",
          handle: "pranav_k.jha",
        }}
      />

      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-10">
          <div className="flex items-center space-x-4 mb-6">
            {post.category && (
              <span className="px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full">
                {post.category}
              </span>
            )}
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              {post.readTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {post.title}
          </h1>

          <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 text-sm mb-8">
            <time dateTime={publishedDate}>
              {format(parseISO(post.date), "MMMM d, yyyy")}
            </time>
            <span>•</span>
            <div className="flex items-center">
              <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2">
                <Image
                  src={authorAvatar}
                  alt={authorName}
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  {authorName}
                </p>
                {authorTitle && (
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {authorTitle}
                  </p>
                )}
              </div>
            </div>
          </div>
        </header>

        {post.image && (
          <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
            <div className="relative w-full h-96">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              />
            </div>
          </div>
        )}

        <div className="prose dark:prose-invert max-w-none">
          <MDXRemote
            {...post.content}
            components={{
              img: (props) => (
                <img
                  {...props}
                  alt={props.alt || "Blog post image"}
                  loading="lazy"
                  className="rounded-lg shadow-md my-6"
                />
              ),
            }}
          />
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div className="flex items-center space-x-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={authorAvatar}
                  alt={authorName}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {authorName}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {authorTitle}
                </p>
              </div>
            </div>
            <a
              href="https://twitter.com/pranav_k.jha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              aria-label="Follow on Twitter"
            >
              <span className="mr-2">Follow on</span>
              <svg
                className="h-5 w-5 text-blue-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </footer>
      </article>
    </>
  );
}
