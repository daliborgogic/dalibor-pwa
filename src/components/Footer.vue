<template lang="pug">
footer
  a(href="https://m.do.co/c/1fa2d6923364" rel="noopener, nofollow" aria-label="Digital Ocean")
    icon-digital-ocean
  a(href="https://www.contentful.com" rel="noopener, nofollow" aria-label="Contentful")
    icon-contentful
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
  padding-bottom 6rem
</style>
