# Use official Ruby image with ARM64 support
FROM ruby:3.2.2-slim

# Install dependencies
RUN apt-get update -qq && \
    apt-get install -y --no-install-recommends \
    build-essential \
    git \
    && rm -rf /var/lib/apt/lists/*

# Install Jekyll and bundler
RUN gem install bundler jekyll jekyll-feed jekyll-seo-tag

# Set the working directory
WORKDIR /srv/jekyll

# Copy Gemfile and install dependencies
COPY Gemfile .
RUN bundle install

# Copy the rest of the files
COPY . .

# Expose ports
EXPOSE 4000 35729

# Run Jekyll with live reload
CMD ["bundle", "exec", "jekyll", "serve", "--force_polling", "--livereload", "--livereload-port", "35729", "--host", "0.0.0.0"]
