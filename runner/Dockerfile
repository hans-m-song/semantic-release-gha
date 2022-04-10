FROM --platform=linux/amd64 summerwind/actions-runner:latest 

SHELL ["/bin/bash", "--login", "-c"]
WORKDIR ${HOME}

RUN sudo apt-get update \
  && sudo apt-get install -y --no-install-recommends \
  apt-transport-https \
  build-essential \
  ca-certificates \
  curl \
  groff \
  jq \
  less \
  libssl-dev \
  wget \
  xz-utils \
  && sudo rm -rf /var/lib/apt/lists/*

# node
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION v14
RUN sudo mkdir -p ${NVM_DIR} \
  && curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | sudo -E bash \
  && source ${NVM_DIR}/nvm.sh \
  && nvm install ${NODE_VERSION} \
  && nvm use --delete-prefix ${NODE_VERSION} \
  && sudo npm install -g \
  lerna \
  semantic-release \
  ts-node \
  typescript \
  yarn

# go
ENV GO_VERSION 1.17.8
ENV PATH /usr/local/go/bin:${PATH}
RUN curl -Lf "https://go.dev/dl/go${GO_VERSION}.linux-amd64.tar.gz" -o "go.tar.gz" \
  && sudo tar -C /usr/local -xzf go.tar.gz \
  && rm -f go.tar.gz

# aws cli
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscli.zip" \
  && unzip awscli.zip \
  && sudo ./aws/install \
  && rm -rf aws awscli.zip
