<template lang="pug">
.services
  h2 Microservice Architecture
  p Single application as a suite of small services, each running in its own process and communicating with lightweight mechanisms, often an HTTP resource API. These services are built around business capabilities and independently deployable by fully automated deployment.
  h2 Independent Deployment
  p Simple services are easier to deploy, and since they are autonomous, are less likely to cause system failures when they go wrong.
  h2 Technology Diversity
  p With microservices you can mix multiple languages, development frameworks and data-storage technologies.
  h2 REST API
  p Services communicate directly and synchronously with each other over HTTP, without the need for any additional infrastructure.
</template>

<style lang="stylus" scoped>
h2
  margin-top 0
  line-height 1
</style>
