FROM ruby:3.0.0

# Install system dependencies
RUN apt-get update -qq --fix-missing
RUN apt-get update -y && \
    apt-get install -y --no-install-recommends \
        libpq-dev libxml2-dev libxslt1-dev

# Set env vars
ENV INSTALL_PATH /api
ENV BUNDLE_PATH /bundle_cache

ADD . /api
WORKDIR /api

RUN bundle install

CMD bundle exec rails s -b 0.0.0.0
