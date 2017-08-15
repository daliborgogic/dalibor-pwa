<template lang="pug">
.home
  app-intro
  ul.list-notes
    li(v-for="n, index in latests")
      router-link(:to="'/notes/'+n.slug")
        //-img(v-if="index === 1" :src="n.card")
        h3 {{n.title}}
        time(:date-time="n.createdAt") {{dateFormat(n.createdAt, 'mmm dS yyyy')}}
  app-services
  app-open-positions.space3
  app-about
  share()

</template>

<script>
const AppIntro = () => import(/* webpackChunkName: "dlbr-intro" */ '@/components/Intro.vue')
const AppOpenPositions = () => import(/* webpackChunkName: "dlbr-positions" */ '@/components/OpenPositions.vue')
const AppServices = () => import(/* webpackChunkName: "dlbr-services" */ '@/components/Services.vue')
const share = () => import(/* webpackChunkName: "dlbr-share" */ '@/components/share.vue')
const AppAbout = () => import(/* webpackChunkName: "dlbr-share" */ '@/components/About.vue')

export default {
  name: 'landing-view',

  components: {
    AppIntro,
    AppOpenPositions,
    AppServices,
    share,
    AppAbout
  },

  meta () {
    return {
      title: 'Software/Cloud Engineering and Architecture',
      description: '###',
      card: null
    }
  },
  computed: {
    latests () {
      const notes = this.$store.state.latests
      return notes
    }
  },


  asyncData ({ store }) {
    return store.dispatch('latests')
  }
}
</script>

<style lang="stylus">
.space3
  padding-bottom 3rem
time
  font-size 13px
  color lightness(black, 46%)
.note
  padding-bottom 3rem
.note header
  height 56px
  display flex
  align-items center
  margin-bottom 1rem
  font-size 13px
  color lightness(black, 46%)
  button
    margin-left auto
    border none
    background-color transparent
    font-size 14px
    text-transform uppercase
    font-weight 700
    height 36px
    color #bd10e0
.list-notes
  list-style none
  margin-bottom 6rem
.home
  ul
    padding-left 0
    margin-top 0
  li
    a
      text-decoration none
      display flex
      align-items baseline
      h3
        flex 1
        margin-top 0
        line-height 1
        font-size 1rem
        font-weight 700
        word-break break-all
        text-transform uppercase
        color $brandColor
        padding-right 1rem
        //font-family Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif
</style>
