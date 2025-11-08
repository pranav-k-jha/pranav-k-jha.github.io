import { existsSync } from "fs";
import { readdir, mkdir } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import puppeteer from "puppeteer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const outputDir = join(process.cwd(), "public", "images", "og");

// Only create directory if it doesn't exist
if (!existsSync(outputDir)) {
  await mkdir(outputDir, { recursive: true });
  console.log(`Created directory: ${outputDir}`);
}

async function getBlogPosts() {
  const postsDir = join(process.cwd(), "src", "content", "blog", "posts");
  const files = await readdir(postsDir);
  return files
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => ({
      slug: file.replace(/\.(mdx|md)$/, ""),
      path: join(postsDir, file),
    }));
}

async function generateOgImage(browser, { slug, title }) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });

  const { default: template } = await import("./og-templates/default.js");
  const html = template({ title, slug });

  await page.setContent(html, { waitUntil: "networkidle2" });

  const outputPath = join(outputDir, `${slug}.jpg`);
  await page.screenshot({
    path: outputPath,
    type: "jpeg",
    quality: 90,
    fullPage: false,
  });

  await page.close();
  return outputPath;
}

async function main() {
  const browser = await puppeteer.launch({ headless: true });
  const posts = await getBlogPosts();

  console.log("Generating OG images...");
  for (const post of posts) {
    try {
      const outputPath = await generateOgImage(browser, {
        slug: post.slug,
        title: post.slug
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "),
      });
      console.log(`Generated: ${outputPath}`);
    } catch (error) {
      console.error(`Error generating OG image for ${post.slug}:`, error);
    }
  }

  await browser.close();
  console.log("OG image generation complete!");
}

main().catch(console.error);
