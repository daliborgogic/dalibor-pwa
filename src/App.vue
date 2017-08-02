<template lang="pug">
#app
  nav
    div
      router-link(to="/" exact v-if="this.$route.path === '/'")
      button(v-else @click="back" role="button" aria-label="Prev")
        svg(fill="#BD10E0" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg")
          path(d="M0 0h24v24H0z" fill="none")
          path(d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z")
      router-link(to="/" exact) Home
      router-link(to="/notes") Notes
      router-link(to="/about") About
    button(role="button" aria-label="###")
      svg(fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg")
        path(d="M0 0h24v24H0z" fill="none")
        path(d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z")

  transition(name="fade" mode="out-in")
    router-view
</template>

<script>
export default {
  methods: {
    back () {
      this.$router.go(-1)
    }
  },
  mounted () {
    //[...document.all].map((A,B)=>A.style.outline=`1px solid hsl(${B},99%,50%`)
  }
}
</script>

<style lang="stylus">
//*{background-color: rgba(0,0,0,.1)}
html
  font-family sans-serif
  font-size 16px
  line-height 1.15
  box-sizing border-box
  -ms-overflow-style scrollbar
  -ms-text-size-adjust 100%
  -webkit-text-size-adjust 100%
  -webkit-tap-highlight-color transparent

*
*::before
*::after
  box-sizing inherit

@-ms-viewport
  width device-width

html
body
  height 100%

body
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif
  font-size 1rem
  font-weight normal
  text-rendering geometricPrecision
  line-height 1.5
  color lightness(black, 13%)
  background-color white
  margin 0
  overflow-y scroll

p
  margin-top 0
// Suppress the focus outline on elements that cannot be accessed via keyboard.
// This prevents an unwanted focus outline from appearing around elements that
// might still respond to pointer events.
//
// Credit: https://github.com/suitcss/base
[tabindex="-1"]:focus
  outline none !important

.view
  max-width 512px
  margin 15% auto 0 auto
  position relative

.fade-enter-active
.fade-leave-active
  transition all .2s ease

.fade-enter
.fade-leave-active
  opacity 0
nav
  position fixed
  background-color white
  width 100%
  top 0
  left 0
  height 64px
  display flex
  align-items center
  padding 0 1rem
  z-index 2
  svg
    vertical-align middle
  div
    flex 1
    display flex
    align-items center
  $a = 36px
  a
    color lightness(black, 46%)
  a:first-child
  button:first-child
  a:not(:first-child)
    margin-right 2rem
    text-decoration none
    font-size 14px
  a:first-child
  button
    width $a
    height $a
    display inline-block
    border-radius 50%
    border 1px solid lightness(black, 75%)
    transition transform 250ms ease-in
    &:active
      transform scale(.9)
  .router-link-active
    color #bd10e0
  button
    padding 0
    background-color transparent
    cursor pointer
    &:focus
      outline none
</style>
