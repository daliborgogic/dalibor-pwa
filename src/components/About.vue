<template lang="pug">
.c-about
  //- img(src="foo.jpg" alt="Dalibor Gogic")
  div
    h3 Dalibor Gogic
    p Web Developer specializing

</template>

<script>
export default {
  name: 'dlbr-about'
}
</script>

<style lang="stylus">
.c-about
  padding-bottom 6rem
  display flex
  p
    font-size 13px
    margin-top 0
  h3
    font-size 14px
    margin-top 0
    margin-bottom 0
  img
    width 48px
    height 48px
    vertical-align middle
    border 1px solid lightness(black, 79%)
    border-radius 50%
    margin-right 1rem
</style>
