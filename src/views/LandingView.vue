<template lang="pug">
.home
  .view
    intro
    about
    .note
      router-link(:to="`/notes/${n.slug}`")
        img(:src="n.card")
        h2 {{n.title}}
        p
         time(:date-time="n.createdAt") {{n.createdAt | timeAgo}} ago
        p {{n.description}}...
    services
</template>

<script>
const Intro = () => import('@/components/Intro.vue')
const About = () => import('@/components/About.vue')
const Services = () => import('@/components/Services.vue')
export default {
  name: 'landing-view',

  components: {
    Intro,
    About,
    Services
  },

  meta () {
    return {
      title: 'Software/Cloud Engineering and Architecture',
      description: '###',
      card: null
    }
  },
  computed: {
    n() {
      const notes = this.$store.state.notes
      return notes[0]
    }
  }
}
</script>

<style lang="stylus">
time
  font-size 13px
  color lightness(black, 46%)
.note img
  padding-bottom 1rem
  width 100%
  vertical-align middle
ul
  padding-left 0
  list-style none
li
  min-height 48px
  padding-bottom 3rem
a
  text-decoration none
  color black
  h2
    line-height .9
    font-size 2rem
    text-transform uppercase
    display inline
    //word-break break-all
    color #bd10e0//#49fb35
    //font-family Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif
</style>
