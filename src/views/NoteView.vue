<template lang="pug">
.note.view
  //- img(:src="note.card+'?w=600&fm=jpg&q=80'")
  h1 {{note.title}}
  .content(v-html="marked(note.content)")

</template>

<script>
export default {
  name: 'note-view',

  meta () {
    return {
      title: this.note.title,
      description: this.note.description,
      card: this.note.card
    }
  },

  computed: {
    note() {
      return this.$store.state.note || []
    }
  },

  asyncData ({ store, route: {params: {note}} }) {
    return store.dispatch('note', {note})
  }

}
</script>

<style lang="stylus">
h1
  font-size 3rem
  line-height .9
  text-transform uppercase
  word-break break-all
  font-family Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif
.content ul
  padding-left 0
  // list-style none
img
  max-width calc(100% + 6rem)
  max-width 100%
  height auto
  vertical-align middle
  // margin-left -3rem
  // margin-right -3rem
</style>
