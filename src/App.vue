<template lang="pug">
#app
  nav(ref="nav" v-bind:class="{navUp: showNav}")
    div
      router-link( to="/" exact) daliborgogic.com
      //-a.ml(href="https://github.com/daliborgogic/dlbr-pwa" rel="noopener, nofollow") src
      //-router-link(to="/notes") Notes
    //-div
  main
    transition(name="fade" mode="out-in",  @after-enter="afterLeave")
      //-transition(name="fade" mode="out-in")
      router-view
  app-contact
  snack-bar(:snackbar="msg" :activeSnackbar="activeSnackbar")
</template>

<script>
import io from 'socket.io-client'

const SnackBar = () => import(/* webpackChunkName: "dlbr-snackbar" */ '@/components/snackbar.vue')
const AppContact = () => import(/* webpackChunkName: "dlbr-cta-contact" */ '@/components/contact.vue')
export default {

  components: {
    AppContact,
    SnackBar
  },

  data () {
    return {
      activeSnackbar: false,
      showNav: false
    }
  },

  methods: {
    afterLeave (el) {
      window.scroll(0, 0)
    },
    clearMsg () {
      return setTimeout(_ => this.$store.dispatch('msg', ''), 3000)
    }
  },

  computed: {
    msg () {
      return this.$store.state.msg
    }
  },

  mounted () {
    const socket = io.connect('http://localhost:5000')
      socket.on('server', data => {
        const key = Object.keys(data).toString()
        switch (key) {
          case 'resource':
            this.$store.dispatch('resource', data[key])
            break
          case 'msg':
            this.$store.dispatch('msg', key)
            break
          case 'unpublished':
            this.$store.dispatch('unpublished')
            this.$store.dispatch('msg', 'Unpublished post')
            setTimeout(_ => this.$store.dispatch('msg', ''), 3000)
            break
          case 'published':
            this.$store.dispatch('published')
            this.$store.dispatch('msg', 'Published post')
            break
          default:
            console.log(`We are out of ${key}.`)
            return
        }
    })

    let a = 0

    window.addEventListener('scroll', () => {
      var b = window.pageYOffset
      var c = this.$refs.nav
      var i = /iPad|iPhone|iPod/i.test(navigator.userAgent)
      if (b > a && !i) {
        // down
        this.showNav = true
      } else {
        // up
        this.showNav = false
      }
      a = b
    }, false)
  }
}
</script>

<style lang="stylus">
@import "variables.styl"
// *{background-color: rgba(0,0,0,.1)}
#app
  position relative
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
  min-height 100%

body
  font-family $monospace
  font-size 1rem
  font-weight normal
  text-rendering geometricPrecision
  line-height 1.6
  color lightness(black, 13%)
  background-color white
  margin 0
  padding-top 64px
  overflow-y scroll

p
  margin-top 0

a
  color $brandColor
  text-decoration none

// Suppress the focus outline on elements that cannot be accessed via keyboard.
// This prevents an unwanted focus outline from appearing around elements that
// might still respond to pointer events.
//
// Credit: https://github.com/suitcss/base
[tabindex="-1"]:focus
  outline none !important

.view
  max-width 512px
  margin 0 auto
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
  padding 0 2rem
  z-index 2
  transition all 250ms ease-out
  &.navUp
    top -64px
  svg
    fill $brandColor
    margin-right 1rem
  div
    display flex
    align-items center
  a
    color lightness(black, 46%)
    text-decoration none
    font-size 14px
    &.router-link-active
      color $brandColor

.icon
  height 38px
  width auto
  display inline-block

.h2
.h1
h1
  font-family $monospace
  margin-top 0
  line-height .9
  word-break break-all
  text-transform uppercase
  font-weight 300
  color lightness(black, 13%)

.h1
h1
  font-size 5.3em
  margin-bottom 0
  padding-bottom 6rem
.h2
  font-family $monospace
  text-transform inherit
  font-size 1rem
  margin-bottom 1rem
.ml
  margin-left 1rem
@media (max-width: 512px)
  body
    padding-top 1rem
  .view
    margin-top 1rem
    padding-left 1rem
    padding-right 1rem
  nav
    border-top 1px solid rgba(black, .12)
    top auto
    height 56px
    background-color white
    bottom 0
    padding-left 1rem
    padding-right 1rem
    &.navUp
      top auto
      bottom -56px
  h1
    font-size 13.8vw
  .h1
  h1
    padding-bottom 3rem
  // ul
  //   li
  //     list-style-position inside
  //     text-indent -1.4rem
  //     padding-left 1.5rem
.logo
  width 24px
  height 24px
  margin-right 1rem
</style>
