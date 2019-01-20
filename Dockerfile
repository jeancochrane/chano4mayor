FROM node:10-stretch-slim

RUN apt-get update -yq
RUN apt-get install -y --no-install-recommends \
  g++ \
  build-essential \
  ruby2.3 \
  ruby2.3-dev \
  && npm install -g --save grunt-cli

RUN gem install ffi
RUN gem install sass

ENTRYPOINT ["grunt"]
