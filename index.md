---
layout: page
description: "Data Scientist & AI Solutions Architect | LLMs, RAG, and Intelligent Automation"
author: "Pranav K Jha"
---

<div class="hero-section">
  <div class="container">
    <div class="hero-content">
      <div class="hero-text">
        <h1 class="hero-title">Pranav K Jha</h1>
        <h2 class="hero-subtitle">Data Scientist & AI Solutions Architect</h2>
        <p class="hero-description">
          Specializing in <span class="highlight">Large Language Models</span>, 
          <span class="highlight">RAG Systems</span>, and 
          <span class="highlight">AI Automation</span>
        </p>
        
        <div class="hero-actions">
          <a href="#latest-posts" class="btn btn--primary btn--large">
            <i class="fas fa-arrow-down"></i> Explore My Work
          </a>
          <a href="/about" class="btn btn--outline btn--large">
            <i class="fas fa-user"></i> About Me
          </a>
        </div>
      </div>
      
      <div class="hero-visual">
        <div class="floating-cards">
          <div class="card card--ai">
            <i class="fas fa-brain"></i>
            <span>AI & ML</span>
          </div>
          <div class="card card--data">
            <i class="fas fa-chart-line"></i>
            <span>Data Science</span>
          </div>
          <div class="card card--code">
            <i class="fas fa-code"></i>
            <span>Development</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="social-links">
    <a href="https://twitter.com/pranav_kjha" target="_blank" rel="noopener noreferrer" class="social-link social--twitter">
      <i class="fab fa-twitter"></i>
    </a>
    <a href="https://linkedin.com/in/pranav-k-jha" target="_blank" rel="noopener noreferrer" class="social-link social--linkedin">
      <i class="fab fa-linkedin"></i>
    </a>
    <a href="https://github.com/pranav-k-jha" target="_blank" rel="noopener noreferrer" class="social-link social--github">
      <i class="fab fa-github"></i>
    </a>
    <a href="mailto:pranav.jha@mail.concordia.ca" class="social-link social--email">
      <i class="fas fa-envelope"></i>
    </a>
  </div>
</div>

<section class="expertise-section">
  <div class="container">
    <h2 class="section-title">My Expertise</h2>
    <div class="expertise-grid">
      <div class="expertise-card expertise--data">
        <div class="expertise-icon">
          <i class="fas fa-chart-line"></i>
        </div>
        <h3>Data Science</h3>
        <p>Transforming data into actionable insights with advanced analytics and machine learning.</p>
        <div class="expertise-tags">
          <span class="tag">Python</span>
          <span class="tag">Pandas</span>
          <span class="tag">Scikit-learn</span>
        </div>
        <a href="/categories/#data-science" class="btn btn--primary">Explore</a>
      </div>
      
      <div class="expertise-card expertise--ai">
        <div class="expertise-icon">
          <i class="fas fa-brain"></i>
        </div>
        <h3>AI & LLMs</h3>
        <p>Exploring large language models, RAG systems, and AI-powered solutions.</p>
        <div class="expertise-tags">
          <span class="tag">Transformers</span>
          <span class="tag">RAG</span>
          <span class="tag">OpenAI</span>
        </div>
        <a href="/categories/#ai" class="btn btn--primary">Explore</a>
      </div>
      
      <div class="expertise-card expertise--mlops">
        <div class="expertise-icon">
          <i class="fas fa-cogs"></i>
        </div>
        <h3>MLOps</h3>
        <p>Building robust machine learning pipelines and deployment strategies.</p>
        <div class="expertise-tags">
          <span class="tag">Docker</span>
          <span class="tag">MLflow</span>
          <span class="tag">Kubernetes</span>
        </div>
        <a href="/categories/#mlops" class="btn btn--primary">Explore</a>
      </div>
    </div>
  </div>
</section>

<section class="latest-posts" id="latest-posts">
  <div class="container">
    <h2 class="section-title">Latest Articles</h2>
    <div class="posts-grid">
      {% for post in site.posts limit:3 %}
        <article class="post-card">
          <div class="post-card__header">
            <div class="post-card__meta">
              <time class="post-date">
                <i class="far fa-calendar-alt"></i>
                {{ post.date | date: "%B %d, %Y" }}
              </time>
              {% if post.categories %}
                <div class="post-categories">
                  {% for category in post.categories limit:2 %}
                    <span class="category-tag">{{ category }}</span>
                  {% endfor %}
                </div>
              {% endif %}
            </div>
          </div>
          
          <div class="post-card__content">
            <h3 class="post-card__title">
              <a href="{{ post.url | relative_url }}" rel="permalink">{{ post.title }}</a>
            </h3>
            {% if post.excerpt %}
              <p class="post-card__excerpt">
                {{ post.excerpt | markdownify | strip_html | truncate: 150 }}
              </p>
            {% endif %}
          </div>
          
          <div class="post-card__footer">
            <a href="{{ post.url | relative_url }}" rel="permalink" class="btn btn--primary btn--small">
              Read More <i class="fas fa-arrow-right"></i>
            </a>
            {% if post.read_time %}
              <span class="read-time">
                <i class="far fa-clock"></i> {{ post.read_time }}
              </span>
            {% endif %}
          </div>
        </article>
      {% endfor %}
    </div>
    
    <div class="posts-cta">
      <a href="/blog" class="btn btn--outline btn--large">
        <i class="fas fa-book-open"></i> View All Posts
      </a>
    </div>
  </div>
</section>

<section class="projects-section">
  <div class="container">
    <h2 class="section-title">Featured Projects</h2>
    <div class="projects-grid">
      <div class="project-card project--rag">
        <div class="project-icon">
          <i class="fas fa-search"></i>
        </div>
        <h3>RAG System for Document Analysis</h3>
        <p>Built a Retrieval-Augmented Generation system for efficient document search and question answering using Transformer models and vector databases.</p>
        <div class="project-tech">
          <span class="tech-tag">Python</span>
          <span class="tech-tag">PyTorch</span>
          <span class="tech-tag">FAISS</span>
          <span class="tech-tag">FastAPI</span>
        </div>
        <a href="#" class="btn btn--primary btn--small">View Project</a>
      </div>
      
      <div class="project-card project--ml">
        <div class="project-icon">
          <i class="fas fa-chart-line"></i>
        </div>
        <h3>ML Pipeline for Time Series Forecasting</h3>
        <p>End-to-end machine learning pipeline for time series forecasting with automated feature engineering, model training, and deployment.</p>
        <div class="project-tech">
          <span class="tech-tag">Python</span>
          <span class="tech-tag">Scikit-learn</span>
          <span class="tech-tag">MLflow</span>
          <span class="tech-tag">Docker</span>
        </div>
        <a href="#" class="btn btn--primary btn--small">View Project</a>
      </div>
      
      <div class="project-card project--ai">
        <div class="project-icon">
          <i class="fas fa-code"></i>
        </div>
        <h3>AI-Powered Code Assistant</h3>
        <p>Developed an AI coding assistant that helps developers write better code with intelligent suggestions and automated documentation.</p>
        <div class="project-tech">
          <span class="tech-tag">TypeScript</span>
          <span class="tech-tag">React</span>
          <span class="tech-tag">OpenAI API</span>
          <span class="tech-tag">LangChain</span>
        </div>
        <a href="#" class="btn btn--primary btn--small">View Project</a>
      </div>
    </div>
    
    <div class="projects-cta">
      <a href="/projects" class="btn btn--outline btn--large">
        <i class="fas fa-rocket"></i> View All Projects
      </a>
    </div>
  </div>
</section>

<section class="categories-section">
  <div class="container">
    <h2 class="section-title">Explore by Category</h2>
    <div class="categories-grid">
      <a href="/categories/#data-science" class="category-card category--data">
        <i class="fas fa-chart-bar"></i>
        <span>Data Science</span>
      </a>
      <a href="/categories/#machine-learning" class="category-card category--ml">
        <i class="fas fa-brain"></i>
        <span>Machine Learning</span>
      </a>
      <a href="/categories/#ai" class="category-card category--ai">
        <i class="fas fa-robot"></i>
        <span>AI & LLMs</span>
      </a>
      <a href="/categories/#rag" class="category-card category--rag">
        <i class="fas fa-search"></i>
        <span>RAG Systems</span>
      </a>
      <a href="/categories/#mlops" class="category-card category--mlops">
        <i class="fas fa-cogs"></i>
        <span>MLOps</span>
      </a>
      <a href="/categories/#tutorials" class="category-card category--tutorials">
        <i class="fas fa-book"></i>
        <span>Tutorials</span>
      </a>
    </div>
  </div>
</section>

<section class="contact-section">
  <div class="container">
    <div class="contact-content">
      <h2 class="section-title">Let's Connect!</h2>
      <p class="contact-description">
        I'm always open to discussions about AI, data science, and technology. 
        Feel free to reach out through any of the platforms below or via email.
      </p>
      
      <div class="contact-links">
        <a href="https://twitter.com/pranav_kjha" target="_blank" rel="noopener noreferrer" class="contact-link contact--twitter">
          <i class="fab fa-twitter"></i>
          <span>Twitter</span>
        </a>
        <a href="https://linkedin.com/in/pranav-k-jha" target="_blank" rel="noopener noreferrer" class="contact-link contact--linkedin">
          <i class="fab fa-linkedin"></i>
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/pranav-k-jha" target="_blank" rel="noopener noreferrer" class="contact-link contact--github">
          <i class="fab fa-github"></i>
          <span>GitHub</span>
        </a>
        <a href="mailto:pranav.jha@mail.concordia.ca" class="contact-link contact--email">
          <i class="fas fa-envelope"></i>
          <span>Email</span>
        </a>
      </div>
    </div>
  </div>
</section>
