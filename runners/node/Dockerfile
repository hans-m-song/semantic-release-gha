FROM summerwind/actions-runner:latest

RUN curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash - \
  && sudo apt-get update \
  && sudo apt-get install -y --no-install-recommends \
  ca-certificates \
  curl \
  wget \
  gnupg \
  dirmngr \
  xz-utils \
  libatomic1 \
  build-essential \
  nodejs \
  && sudo rm -rf /var/lib/apt/lists

WORKDIR /home/runner
ENV PATH=/home/runner/.npm-global/bin:${PATH}
RUN mkdir ~/.npm-global \
  && npm config set prefix '~/.npm-global' \
  && npm install -g yarn
