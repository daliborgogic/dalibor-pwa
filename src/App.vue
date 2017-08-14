<template lang="pug">
#app
  nav
    div
      svg(@click="back" fill="#BD10E0" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg")
        path(d="M0 0h24v24H0z" fill="none")
        path(v-if="this.$route.path !== '/'" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z")
      router-link( to="/" exact) daliborgogic.com
    div
      router-link(to="/notes") Notes
      router-link(to="/about") About
  main
    transition(name="fade" mode="out-in",  appear, @after-leave="afterLeave", @after-enter="afterLeave")
      router-view.view
  app-footer
</template>

<script>
import io from 'socket.io-client'
const AppFooter = () => import(/* webpackChunkName: "dlbr-footer" */ '@/components/Footer.vue')
export default {
  components: {
    AppFooter
  },

  methods: {
    afterLeave (el) {
      window.scroll(0, 0)
    },
    back () {
      this.$router.go(-1)
    }
  },
  mounted () {
    //[...document.all].map(A=>A.style.outline=`1px solid hsl(${(A+A).length*9},99%,50%`)
    const socket = io.connect('http://localhost:5000')
      socket.on('server', data => {
        console.log(data)
        socket.emit('client', { msg: 'pong' })
    });
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
  padding-top 64px
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
  padding 0 2rem 0 1rem
  z-index 2
  div
    display flex
    align-items center
    span
      padding-left 1rem
      font-size 18px
      font-weight 500
  a
    padding 0 1rem
    color lightness(black, 46%)
    text-decoration none
    font-size 14px
    &.router-link-active
      color #bd10e0
.icon
  height 38px
  width auto
  display inline-block
h1
.h2
  font-family Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif
  margin-top 0
  line-height .9
  word-break break-all
  text-transform uppercase
h1
  font-size 5.3em
  margin-bottom 0
  padding-bottom 6rem
.h2
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif
  text-transform inherit
  font-size 1rem
  margin-bottom 1rem
@media (max-width: 512px)
  .view
    margin-top 1rem
    padding-left 1rem
    padding-right 1rem
  nav
    div
      width 100%
    a:last-of-type
      position absolute
      right 0
      background-color white
    a:first-of-type
      padding-left 0
  h1
    font-size 13.8vw
  ul
    li
      list-style-position: inside;
      text-indent: -1.4rem;
      padding-left: 1.5rem
</style>
