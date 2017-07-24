<template lang="pug">
.landing
  ul
    li(v-for="n, index in entries" v-bind:key="index")
      | {{n.fields.title['en-US']}} {{n.sys.createdAt | timeAgo}} ago
</template>

<script>

export default {
  name: 'landing-view',

  meta () {
    return {
      title: 'Landing',
      description: '###',
      card: null
    }
  },

  asyncData ({ store }) {
    return store.dispatch('entries')
  },

  computed: {
    entries () {
      return this.$store.state.entries
    }
  }
}
</script>

<style lang="stylus"></style>
