source "https://rubygems.org"
ruby "2.5.3"

# Jekyll is a blog-aware static site generator in Ruby
# NOTE: Although this is currently deployed on Github Pages, I'm not using
# the github-pages gem so that non-Github-Pages-supported third-party plugins
# can be included in the site build.
gem "jekyll", "~> 3.8"

group :development do
  # Command line tool to easily handle events on file system modifications
  gem "guard", "~> 2.14"
  # Guard extension to run cli processes
  gem "guard-process", "~> 1.2"
end

group :development, :test do
  # Test your rendered HTML files to make sure they're accurate
  gem "html-proofer", "~> 3.9"
end

group :jekyll_plugins do
  # A Jekyll plugin that incorporates LiveReload
  gem "hawkins", "~> 2.0"
  # Archive pages for your Jekyll tags and categories
  gem "jekyll-archives", "~> 2.1"
  # A Jekyll plugin to generate an Atom (RSS-like) feed of your Jekyll posts
  gem "jekyll-feed", "~> 0.11"
  # Liquid tag for displaying GitHub Gists in Jekyll sites.
  gem "jekyll-gist", "~> 1.5"
  # Jekyll plugin to propagate the `site.github` namespace and set default
  # values for use with GitHub Pages
  gem "jekyll-github-metadata", "~> 2.9"
  # A Jekyll plugin to cache the rendering of Liquid includes
  # jekyll-include-cache needed for minimal mistakes theme.
  # See https://github.com/mmistakes/minimal-mistakes
  gem "jekyll-include-cache", "~> 0.1"
  # Jekyll HTML/XML/CSS/JS Minifier utilising yui-compressor, and htmlcompressor
  gem "jekyll-minifier", "~> 0.1"
  # Pagination Generator for Jekyll
  gem "jekyll-paginate", "~> 1.1"
  # Seamlessly specify multiple redirections URLs for your pages and posts
  gem "jekyll-redirect-from", "~> 0.14"
  # Jekyll plugin for building Jekyll sites with any GitHub-hosted theme
  gem "jekyll-remote-theme", "~> 0.3"
  # A Jekyll plugin to add metadata tags for search engines and social networks
  # to better index and display your site's content.
  gem "jekyll-seo-tag", "~> 2.5"
  # Jekyll plugin to silently generate a sitemaps.org compliant sitemap for your Jekyll site
  gem "jekyll-sitemap", "~> 1.2"
  # GitHub-flavored emoji plugin for Jekyll
  gem "jemoji", "~> 0.10"
end