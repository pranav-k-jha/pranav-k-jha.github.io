const p=`---
title: "GenAI vs Agentic AI: The Next Evolution of Intelligence"
date: "2025-11-02"
excerpt: "Understanding the key differences between Generative AI and the emerging Agentic AI paradigm"
category: "AI"
readTime: "5 min read"
author: "Pranav K Jha"
authorTitle: "AI Engineer"
authorAvatar: "/profile.jpeg"
slug: "genai-and-agentic-ai"
image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600"
---

Artificial Intelligence is evolving fast — and we're now moving from **Generative AI (GenAI)** to a more capable paradigm: **Agentic AI**.  
Let's explore what sets them apart, how they work, and see real code examples for each.

## 🧠 What is Generative AI (GenAI)?

**Generative AI** models are designed to _generate_ new data — text, code, images, or audio — based on what they have learned.

They’re powerful at:

- Writing code
- Creating art or content
- Summarizing text or answering questions

But — they are **reactive**.
They respond to a prompt but **don’t plan, remember, or act autonomously**.

---

### 💡 Example: Text Generation with GenAI

Here’s a simple Python example using the **OpenAI API** for text generation:

\`\`\`python
from openai import OpenAI

client = OpenAI()

prompt = "Write a short poem about code and creativity."

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": prompt}]
)

print(response.choices[0].message.content)
\`\`\`

🧩 This is classic GenAI — it takes input and returns output.

No planning, no follow-up action.

---

## 🤖 What is Agentic AI?

**Agentic AI** goes one step further.

It doesn’t just respond — it **decides** , **plans** , **remembers** , and **acts** .

An **AI Agent** can:

- Analyze goals
- Make decisions
- Execute code or tasks
- Use memory and tools (like APIs or databases)
- Learn from feedback loops

It’s the bridge between AI **intelligence** and **autonomy** .

---

### 🧩 Example: Agentic AI in Action

Here’s a simple **Agentic AI** using the [LangChain](https://www.langchain.com/) framework:

\`\`\`python
from langchain.llms import OpenAI
from langchain.agents import initialize_agent, Tool

# Step 1: Define tools (functions the agent can use)
def search_web(query):
    return f"Pretending to search the web for '{query}'..."

tools = [
    Tool(
        name="WebSearch",
        func=search_web,
        description="Search the web for information."
    )
]

# Step 2: Initialize an agent with reasoning ability
llm = OpenAI(temperature=0)
agent = initialize_agent(tools, llm, agent_type="zero-shot-react-description")

# Step 3: Run an autonomous query
result = agent.run("Find the latest research papers about reinforcement learning.")

print(result)
\`\`\`

🧠 The Agent:

1. Interprets the goal
2. Decides which tool to use
3. Executes the tool
4. Returns a synthesized answer

This is **goal-driven intelligence** , not just **prompt-driven output** .

---

## ⚔️ GenAI vs Agentic AI: Comparison

| Feature / Aspect    | Generative AI (GenAI)             | Agentic AI                             |
| ------------------- | --------------------------------- | -------------------------------------- |
| **Core Idea**       | Generate content or responses     | Think, decide, and act autonomously    |
| **Memory**          | ❌ No persistent memory           | ✅ Can store and recall context        |
| **Decision-Making** | ❌ Reactive only                  | ✅ Goal-oriented, multi-step reasoning |
| **Tool Use**        | ❌ Limited                        | ✅ Can use APIs, functions, databases  |
| **Examples**        | ChatGPT, Midjourney, Gemini       | AutoGPT, LangChain Agents, OpenDevin   |
| **Use Case**        | Content creation, text generation | Task automation, research assistants   |

---

## 🌍 Real-World Example

- **GenAI:** You ask ChatGPT — _“Write me a blog post.”_

  → It writes it.

- **Agentic AI:** You ask an AI Agent — _“Find trending AI topics and publish a blog post about them every week.”_

  → It searches, writes, formats, and posts automatically.

---

## 🧭 The Future: From Reactive to Proactive AI

GenAI gave us creativity.

Agentic AI adds **autonomy** — it’s the difference between a **smart assistant** and a **self-directed collaborator** .

> 🔮 The future belongs to **Agentic AI** , where systems will manage entire workflows — not just individual tasks.

---

## 🧱 Final Thoughts

| Type           | Role in AI Ecosystem       | Best Use Case                            |
| -------------- | -------------------------- | ---------------------------------------- |
| **GenAI**      | Foundation for creativity  | Writing, coding, image generation        |
| **Agentic AI** | Evolution towards autonomy | Automation, multi-step reasoning, RAG AI |

---

✨ **In short:**

- GenAI **creates** .
- Agentic AI **acts** .

  Together, they form the future of **self-improving, intelligent systems** .

---
`,d=`---
title: "Getting Started with Machine Learning"
excerpt: "Learn the basics of machine learning and how to get started with your first project."
date: "2025-10-05"
category: "Machine Learning"
readTime: "3 min read"
author: "Pranav K Jha"
authorTitle: "AI Engineer"
authorAvatar: "/profile.jpeg"
image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=600"
slug: "getting-started-with-ml"
---

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


---
\`\`\`
`,m=`---
title: "Introduction to Deep Learning"
excerpt: "A comprehensive introduction to deep learning concepts and applications."
date: "2025-10-10"
category: "Machine Learning"
readTime: "4 min read"
author: "Pranav K Jha"
authorTitle: "AI Engineer"
authorAvatar: "/profile.jpeg"
image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600"
slug: "introduction-to-deep-learning"
---

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
`;function g(n){if(!n.startsWith("---"))return{data:{},content:n};const e=n.indexOf(`
---`,3);if(e===-1)return{data:{},content:n};const i=n.slice(3,e).trim(),o=n.slice(e+4).replace(/^\s*\n/,""),a={};return i.split(`
`).forEach(s=>{const r=s.indexOf(":");if(r>-1){const c=s.slice(0,r).trim();let t=s.slice(r+1).trim();(t.startsWith('"')&&t.endsWith('"')||t.startsWith("'")&&t.endsWith("'"))&&(t=t.slice(1,-1)),a[c]=t}}),{data:a,content:o}}const h=Object.assign({"./posts/genai-and-agentic-ai.md":p,"./posts/getting-started-with-ml.md":d,"./posts/introduction-to-deep-learning.md":m}),l=Object.entries(h).map(([n,e])=>{const i=n.split("/").pop().replace(/\.md$/,""),{data:o,content:a}=g(e);return{slug:i,...o,content:a}}).sort((n,e)=>new Date(e.date)-new Date(n.date));function u(){return l.map(({content:n,...e})=>e)}function A(n){return l.find(e=>e.slug===n)||null}export{A as a,u as g};
