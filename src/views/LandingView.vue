<template lang="pug">
.home
  .split
    div
      app-intro
      app-open-positions
    div
      app-card
      ul
        li(v-for="n, index in notes")
          router-link(:to="`/${n.slug}`")
            //- img(v-if="index === 1" :src="n.card")
            h2 {{n.title}}
            time(:date-time="n.createdAt") {{n.createdAt | timeAgo}} ago
      a(href="https://m.do.co/c/1fa2d6923364" rel="noopener, nofollow")
        icon-digital-ocean
      a(href="https://www.contentful.com" rel="noopener, nofollow")
        icon-contentful

</template>

<script>
const AppIntro = () => import(/* webpackChunkName: "dlbr-intro" */ '@/components/Intro.vue')
const AppCard = () => import(/* webpackChunkName: "dlbr-card" */ '@/components/Card.vue')
const AppOpenPositions = () => import(/* webpackChunkName: "dlbr-positions" */ '@/components/OpenPositions.vue')
const IconDigitalOcean = () => import(/* webpackChunkName: "dlbr-footer" */ '@/components/icons/DigitalOcean.vue')
const IconContentful = () => import(/* webpackChunkName: "dlbr-footer" */ '@/components/icons/Contentful.vue')
export default {
  name: 'landing-view',

  components: {
    AppIntro,
    AppCard,
    AppOpenPositions,
    IconDigitalOcean,
    IconContentful
  },

  meta () {
    return {
      title: 'Software/Cloud Engineering and Architecture',
      description: '###',
      card: null
    }
  },
  computed: {
    notes () {
      const notes = this.$store.state.notes
      return notes
    }
  }
}
</script>

<style lang="stylus">
.home
  padding-top 10%
.split
  max-width 1120px
  margin 0 auto
  display flex
  justify-content space-between
  & > div
    width calc(50% - 3rem)
    // border 1px solid tomato
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
.home
  ul
    padding-left 0
    margin-top 0
    margin-bottom 6rem
    list-style none
  li
    margin-bottom 1rem
    //border 1px solid lightness(black, 74%)
    // border-radius 2px
    // box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    a
      text-decoration none
      display flex
      align-items baseline
      h2
        flex 1
        margin-top 0
        line-height 1
        font-size 18px // rem?
        font-weight 500
        // text-transform uppercase
        word-break break-all
        color #bd10e0//#49fb35
        padding-right 1rem
        //font-family Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif
</style>
