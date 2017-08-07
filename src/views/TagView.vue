<template lang="pug">
.notes
  h1 {{this.$store.state.title}}
  div(v-if="tag.length === 0") Nothing found
  div(v-else)
    ul
      li(v-for="t, index in tag")
        router-link(:to="'/notes/'+t.slug")
          h3 {{t.title}}
</template>

<script>
export default {
  name: 'tag-view',

  meta () {
    return {
      title: this.$store.state.title,
      description: '###',
      card: null
    }
  },

  computed: {
    tag () {
      return this.$store.state.tag
    }
  },

  asyncData ({ store, route: {params: {tag}} }) {
    return store.dispatch('tag', {tag})
  }
}
</script>
