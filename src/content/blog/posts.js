import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getAllPosts() {
  // This function will be called at build time on the server
  const postsDirectory = path.join(process.cwd(), "src/content/blog/posts");
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      ...data,
      slug,
    };
  });

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  const postsDirectory = path.join(process.cwd(), "src/content/blog/posts");
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    ...data,
    content,
    slug,
  };
}

// This function will be called at build time
export function getAllPostSlugs() {
  const postsDirectory = path.join(process.cwd(), "src/content/blog/posts");
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ""),
    },
  }));
}
