<template lang="pug">
#app
  nav(role="navigation")
    router-link(to="/" exact) daliborgogic.com
    router-link(to="/about" exact) About
  main(role="main")
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
    //[...document.all].map((A,B)=>A.style.outline=`1px solid hsl(${B*B},99%,50%`)
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
  justify-content space-between
  padding 0 1rem
  z-index 2
  a
    padding 0 1rem
    color lightness(black, 46%)
    &.router-link-active
      color #bd10e0
</style>
