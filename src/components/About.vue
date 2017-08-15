<template lang="pug">
.cabout
  router-link(to="/about")
    //-logo
    div
      h3 About
      p Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

</template>

<script>
const logo = () => import('@/components/icons/logo.vue')

export default {
  name: 'dlbr-about',
  components: {
    logo
  }
}
</script>

<style lang="stylus">
@import "../variables"
.cabout
  padding-bottom 6rem
  a
    width 100%
    display flex
    color black
    text-decoration none
    padding-bottom 1rem
    div
      flex 1
    p
      font-size 13px
      margin-top 0
    h3
      font-size 1rem
      text-transform uppercase
      color $brandColor
      margin-top 0
      margin-bottom 0
  img
    width 40px
    height 40px
    vertical-align middle
    border-radius 50%
    margin-right 1rem
  .icon
    width 40px
    margin-right 1rem
    display block
</style>
