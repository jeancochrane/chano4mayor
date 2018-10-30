FROM node:10-slim

RUN apt-get update -yq
RUN apt-get install -y --no-install-recommends \
  g++ \
  build-essential \
  ruby \
  ruby-dev \
  && npm install -g --save grunt-cli

RUN gem install ffi
RUN gem install sass

ENTRYPOINT ["grunt"]
