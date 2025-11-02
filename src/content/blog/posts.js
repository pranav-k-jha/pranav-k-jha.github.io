export const blogPosts = {
  "getting-started-with-ml": {
    id: 1,
    title: "Getting Started with Machine Learning",
    excerpt:
      "Learn the basics of machine learning and how to get started with your first project.",
    date: "2025-10-31",
    category: "Machine Learning",
    readTime: "2 min read",
    author: "Pranav K Jha",
    authorTitle: "AI Engineer",
    authorAvatar: "/profile.jpeg",
    content: `
# Getting Started with Machine Learning

Machine learning is a method of data analysis that automates analytical model building. It's a branch of artificial intelligence based on the idea that systems can learn from data, identify patterns and make decisions with minimal human intervention.

## Why Machine Learning?

Machine learning is important because it gives enterprises a view of trends in customer behavior and business operational patterns, as well as supports the development of new products.

## Getting Started

To get started with machine learning, you'll need to:

1. Learn Python programming
2. Understand basic statistics and linear algebra
3. Learn data manipulation with pandas and NumPy
4. Study machine learning algorithms
5. Work on projects and build a portfolio

\`\`\`python
# Example Python code
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

# Load data
data = pd.read_csv('data.csv')
X = data.drop('target', axis=1)
y = data['target']

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train model
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Evaluate
accuracy = model.score(X_test, y_test)
print(f"Model accuracy: {accuracy:.2f}")
\`\`\`
    `,
  },
  "introduction-to-deep-learning": {
    id: 2,
    title: "Introduction to Deep Learning",
    excerpt:
      "A comprehensive introduction to deep learning concepts and applications.",
    date: "2025-11-01",
    category: "Deep Learning",
    readTime: "1 min read",
    author: "Pranav K Jha",
    authorTitle: "AI Engineer",
    authorAvatar: "/profile.jpeg",
    content: `
# Introduction to Deep Learning

Deep learning is a subset of machine learning that uses neural networks with multiple layers to model and understand complex patterns in data.

## What is a Neural Network?

A neural network is a series of algorithms that attempts to recognize underlying relationships in a set of data through a process that mimics the way the human brain operates.

\`\`\`python
import tensorflow as tf
from tensorflow.keras import layers

# Create a simple neural network
model = tf.keras.Sequential([
    layers.Dense(128, activation='relu', input_shape=(784,)),
    layers.Dropout(0.2),
    layers.Dense(10, activation='softmax')
])

# Compile the model
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])
\`\`\`
    `,
  },
  "cursor-vs-cloud-code": {
    id: 3,
    title: "Cursor vs Cloud Code: A Detailed Comparison for Developers",
    excerpt:
      "A comprehensive comparison between Cursor AI and Google Cloud Code for developers.",
    date: "2025-11-02",
    category: "Development Tools",
    readTime: "2 min read",
    author: "Pranav K Jha",
    authorTitle: "AI Engineer",
    authorAvatar: "/profile.jpeg",
    content: `
# Cursor vs Cloud Code: A Detailed Comparison for Developers

In today's software development ecosystem, efficiency and automation are key. Developers rely on tools that **speed up coding**, **simplify deployment**, and **reduce repetitive tasks**. Two popular tools that have emerged in recent years are **Cursor** and **Cloud Code**. While they may seem similar at first glance, they serve very different purposes.

## What is Cursor?

[Cursor](https://www.cursor.so/) is an **AI-powered coding assistant** designed to help developers **write, refactor, and understand code more efficiently**.

### Key Features of Cursor

1. **AI Code Suggestions**
   - Predicts your next lines of code
   - Auto-generates functions or boilerplate code
   - Provides smart refactoring suggestions

2. **Multi-Language Support**
   - Supports Python, JavaScript, TypeScript, Java, Go, Rust, and more
   - Works across web frameworks and data science scripts

## What is Cloud Code?

[Cloud Code](https://cloud.google.com/code) is a **set of developer tools from Google Cloud** that simplifies **cloud-native application development**.

### Key Features of Cloud Code

1. **IDE Integration**
   - Available for VS Code and JetBrains IDEs
   - Provides seamless local and cloud workflows

2. **Kubernetes & Cloud Run Support**
   - Simplifies deploying apps to Kubernetes clusters
   - Offers templates for Cloud Run


## When to Use Which

- **Use Cursor** if you want to write code faster, refactor efficiently, or learn new frameworks
- **Use Cloud Code** if you're building and deploying cloud-native applications on Google Cloud

## Conclusion

Both tools are valuable but serve different purposes in the development workflow. Cursor enhances coding efficiency with AI, while Cloud Code simplifies cloud deployments and debugging.
    `,
  },
};

// Helper function to get all posts for the blog listing
export const getAllPosts = () => {
  return Object.entries(blogPosts).map(([slug, post]) => ({
    slug,
    ...post,
    // Remove content to keep the payload small for the listing
    content: undefined,
  }));
};

// Helper function to get a single post by slug
export const getPostBySlug = (slug) => {
  return blogPosts[slug] || null;
};
