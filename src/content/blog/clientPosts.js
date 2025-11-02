// src/content/blog/clientPosts.js
// Lightweight frontmatter parser (no Node Buffer)
// Expects frontmatter like:
// ---
// title: "Post Title"
// date: "2025-11-01"
// ---
// content...

function parseFrontmatter(raw) {
  if (!raw.startsWith("---")) {
    return { data: {}, content: raw };
  }

  const end = raw.indexOf("\n---", 3);
  if (end === -1) {
    return { data: {}, content: raw };
  }

  const fmBlock = raw.slice(3, end).trim(); // inside the ---
  const content = raw.slice(end + 4).replace(/^\s*\n/, ""); // after --- + newline

  const data = {};
  fmBlock.split("\n").forEach((line) => {
    const idx = line.indexOf(":");
    if (idx > -1) {
      const key = line.slice(0, idx).trim();
      let value = line.slice(idx + 1).trim();
      // remove surrounding quotes if any
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      data[key] = value;
    }
  });

  return { data, content };
}

// Vite: load all markdown files as raw strings at build time
const files = import.meta.glob("./posts/*.md", { as: "raw", eager: true });

const parsed = Object.entries(files)
  .map(([filePath, raw]) => {
    const slug = filePath.split("/").pop().replace(/\.md$/, "");
    const { data, content } = parseFrontmatter(raw);
    return { slug, ...data, content };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export function getAllPosts() {
  return parsed.map(({ content, ...meta }) => meta);
}

export function getPostBySlug(slug) {
  return parsed.find((p) => p.slug === slug) || null;
}
