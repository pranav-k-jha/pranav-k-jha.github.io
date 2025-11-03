import fs from 'fs';
import path from 'path';

// Count blog posts
export const getBlogPostCount = () => {
  const blogDir = path.join(process.cwd(), 'src/content/blog/posts');
  try {
    const files = fs.readdirSync(blogDir);
    return files.filter(file => file.endsWith('.md')).length;
  } catch (error) {
    console.error('Error reading blog directory:', error);
    return 4; // Fallback to the current number of blog posts
  }
};

// You can add similar functions for resources and publications when available
// For now, we'll use static values as placeholders
export const getResourceCount = () => 12; // Update this when resources are added
export const getPublicationCount = () => 8; // Update this when publications are added
