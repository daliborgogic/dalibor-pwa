<template lang="pug">
.home
  div(@click="asterix('asterix')")
    app-intro
  app-card
  app-services
  h3.h2 Lates posts
  ul.list-notes
    li(v-for="n, index in notes")
      router-link(:to="'/notes/'+n.slug")
        //- img(v-if="index === 1" :src="n.card")
        h3 {{n.title}}
        time(:date-time="n.createdAt") {{n.createdAt | timeAgo}} ago
  app-open-positions
  small(ref="asterix") *Minification (also minimisation or minimization) in computer programming languages and especially JavaScript, is the process of removing all unnecessary characters from source code without changing its functionality.

</template>

<script>
const AppIntro = () => import(/* webpackChunkName: "dlbr-intro" */ '@/components/Intro.vue')
const AppCard = () => import(/* webpackChunkName: "dlbr-card" */ '@/components/Card.vue')
const AppOpenPositions = () => import(/* webpackChunkName: "dlbr-positions" */ '@/components/OpenPositions.vue')
const AppServices = () => import(/* webpackChunkName: "dlbr-services" */ '@/components/Services.vue')

export default {
  name: 'landing-view',

  components: {
    AppIntro,
    AppCard,
    AppOpenPositions,
    AppServices
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
  },

  methods: {
    asterix  (refName) {
      const element = this.$refs[refName]
      const top = element.offsetTop
      window.scrollTo(0, top)
    }
  },
  asyncData ({ store }) {
    return store.dispatch('notes')
  }
}
</script>

<style lang="stylus">
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
    //-list-style none
  li
    //border 1px solid lightness(black, 74%)
    // border-radius 2px
    // box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    a
      text-decoration none
      display flex
      align-items baseline
      h3
        flex 1
        margin-top 0
        line-height 1
        font-size 1rem // rem?
        font-weight normal
        // text-transform uppercase
        word-break break-all
        color #bd10e0//#49fb35
        padding-right 1rem
        //font-family Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif
</style>
