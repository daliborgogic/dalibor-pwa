<template lang="pug">
.notes.view
  //- h1 Notes
  ul
    li(v-for="n in notes")
      router-link(:to="`/${n.slug}`")
        h2 {{n.title}}
        p {{n.description}}
</template>

<script>
export default {
  name: 'notes-view',

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

<style lang="stylus" scoped>
h1
  font-size 1rem
  font-weight 500

h1
h2
p
  margin-top 0
  margin-bottom 0
h2
  line-height .9
  font-size 3rem
  text-transform uppercase
  display inline
  word-break break-all
  color #bd10e0//#49fb35
  font-family Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif
ul
  padding-left 0
  list-style none
li
  min-height 48px
  padding-bottom 3rem
  a
    text-decoration none
    color black
</style>
