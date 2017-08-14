<template lang="pug">
.notes
  h1 {{ tagTitle }}
  div(v-if="tag.length === 0") Nothing found
  div(v-else)
    ul
      li(v-for="t, index in tag")
        router-link(:to="'/notes/'+t.slug")
          h3 {{ t.title }}
</template>

<script>
const camelize = str => str.charAt(0).toUpperCase() + str.slice(1)

export default {
  name: 'tag-view',

  meta () {
    return {
      title: camelize(this.$store.state.tagTitle),
      description: '###',
      card: null
    }
  },

  computed: {
    tag () {
      return this.$store.state.tag
    },
    tagTitle () {
      return this.$store.state.tagTitle
    }
  },

  asyncData ({ store, route: {params: {tag}} }) {
    return store.dispatch('tag', {tag})
  }
}
</script>
