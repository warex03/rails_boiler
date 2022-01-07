# README

> Rails boilerplate

# Installation

- install docker
- docker-compose up

# Setup

- Prepare the database
```
bundle exec rails db:setup
```

# Learning dump

- Install asdf for initializing ruby project

```
asdf plugin update ruby

# install versions in .tool-versions
asdf install

# install rails
gem install rails

# make sure these are installed first
# libpq-dev libxml2-dev libxslt1-dev
# sudo pacman -Syu postgresql
gem install pg

rails new api --api --database=postgresql

# update yarn
corepack enable
yarn set version stable
```

- Links

```
# docker server.pid
https://stackoverflow.com/a/53615194

# proxy
https://create-react-app.dev/docs/proxying-api-requests-in-development/


# cookies
https://stackoverflow.com/questions/60579293/how-are-cookie-http-only-sessions-supposed-to-work-on-a-spa-with-a-separate-api
```

# Guides used

```
# backend auth
https://www.thegreatcodeadventure.com/jwt-storage-in-rails-the-right-way/
https://3rd-edition.railstutorial.org/book/modeling_users
```


# Adding gems

# Adding npm packages

# TODOS

- make test cases for user validation
- remove unneeded deps on package.json
- add Makefile?
- setup rubocop
- setup js linter
- setup graphql backend w/ graphiql
- authorization

# Nice to haves
- google/fb auth
