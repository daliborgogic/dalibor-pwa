<template lang="pug">
.home
  .view
    dlbr-intro
    dlbr-about
    .note
      header
        span Recent Posts
        button(role="button") View All Posts
      router-link(:to="`/${n.slug}`")
        //-img(:src="n.card")
        h2 {{n.title}}
        p
         time(:date-time="n.createdAt") {{n.createdAt | timeAgo}} ago
        p {{n.description}}...
    .note
      header
        span Events &amp; Conferences
        button(role="button") View All Talks
      router-link(:to="`/${n.slug}`")
        //-img(:src="n.card")
        h2 {{n.title}}
        p
         time(:date-time="n.createdAt") {{n.createdAt | timeAgo}} ago
        p {{n.description}}...
</template>

<script>
const DlbrIntro = () => import(/* webpackChunkName: "dlbr-intro" */ '@/components/Intro.vue')
const DlbrAbout = () => import(/* webpackChunkName: "dlbr-about" */ '@/components/About.vue')
export default {
  name: 'landing-view',

  components: {
    DlbrIntro,
    DlbrAbout
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
