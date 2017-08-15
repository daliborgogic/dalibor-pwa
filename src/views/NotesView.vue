<template lang="pug">
.notes
  h1 Notes
  ul
    li(v-for="n, index in notes" key="index")
      router-link(:to="'/notes/'+n.slug")
        h2.notes-title {{ n.title }}
        time {{ dateFormat(n.createdAt, 'mmm dS yyyy') }}
    li(v-if="notes.length === 0")
      h2.notes-title Nothing found.
  share(shareText="Notes" shareUrl="")
  app-about
</template>

<script>
const AppAbout = () => import(/* webpackChunkName: "dlbr-note" */ '@/components/About.vue')
const share = () => import(/* webpackChunkName: "dlbr-share" */ '@/components/share.vue')

export default {
  name: 'notes-view',

  meta () {
    return {
      title: 'Notes',
      description: '',
      card: ''
    }
  },

  components: {
    AppAbout,
    share
  },

  computed: {
    notes() {
      return this.$store.state.notes
    }
  },

  asyncData ({ store }) {
    return store.dispatch('notes')
  }
}
</script>

<style lang="stylus">
.highlight
  background-color yellow
.search input
  height 36px
  padding 0
  margin-bottom 3rem
  border-radius 2px
  border none
  border-bottom 1px solid lightness(black, 80%)
  width 100%
  &:focus
    outline none
    border-color black
.notes-title
  margin-top 0
  flex 1
  font-weight 700
  text-transform uppercase
  font-size 1rem
  line-height 1
  word-break break-all
  padding-right 1rem
.notes
  ul
    padding 0 0 3rem 0
    list-style none
    a
      display flex
      align-items baseline
      text-decoration none
      color $brandColor
      time
        font-size 13px
        color lightness(black, 56%)
  .category
    padding-bottom 3rem
    a
      height 32px
      min-width 64px
      padding 0 1rem
      border 1px solid lightness(black, 87%)
      background-color transparent
      border-radius 2px
      font-size 14px
      text-decoration none
      line-height 30px
      display inline-block
      transition transform 250ms ease-in
      &:focus
        transform scale(.9)
</style>
