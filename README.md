# README

> Rails boilerplate

# Installation

- install docker
- docker-compose up

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
```

# TODOS

- remove unneeded deps on package.json
