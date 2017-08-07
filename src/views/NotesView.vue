<template lang="pug">
.notes
  h1 Notes
  ul
    li(v-for="n, index in notes" key="index")
      router-link(:to="'/notes/'+n.slug")
        h2 {{n.title}}
        time {{n.createdAt |timeAgo}} ago
      //- .category
      //-   router-link(:to="'/tags/'+n.category") {{n.category}}
</template>

<script>
export default {
  name: 'notes-view',

  meta () {
    return {
      title: 'Notes',
      description: '',
      card: ''
    }
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
.notes
  ul
    padding-left 0
    list-style none
    a
      display flex
      align-items baseline
      text-decoration none
      h2
        margin-top 0
        flex 1
        font-weight normal
        font-size 18px
      time
        font-size 13px
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
