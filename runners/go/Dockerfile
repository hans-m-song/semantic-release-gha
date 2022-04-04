FROM summerwind/actions-runner:latest

RUN sudo apt-get update \
  && sudo apt-get install -y --no-install-recommends \
  g++ \
  gcc \
  libc6-dev \
  make \
  pkg-config \
  && sudo rm -rf /var/lib/apt/lists/*

COPY --from=golang:1.17 /usr/local/go/ /usr/local/go/

ENV PATH=/usr/local/go/bin:${PATH}
