<template lang="pug">
footer
  .cabout
    a(href="https://m.do.co/c/1fa2d6923364" rel="noopener, nofollow" aria-label="Digital Ocean")
      icon-digital-ocean
      div
        h3 Digital Ocean
        p Easily deploy an SSD cloud server on Digital Ocean in ~55 seconds. Sign up and receive $10 in credit.
    a(href="https://www.contentful.com" rel="noopener, nofollow" aria-label="Contentful")
      icon-contentful
      div
        h3 Contentful
        p Content management infrastructure for projects of any size, with its flexible APIs and global CDN..
</template>

<script>
const IconDigitalOcean = () => import(/* webpackChunkName: "dlbr-footer" */ '@/components/icons/DigitalOcean.vue')
const IconContentful = () => import(/* webpackChunkName: "dlbr-footer" */ '@/components/icons/Contentful.vue')
export default {
  name: 'footer',

  components: {
    IconDigitalOcean,
    IconContentful
  }
}
</script>

<style lang="stylus">
footer
  max-width 512px
  margin 0 auto
 // padding-bottom 6rem
</style>
