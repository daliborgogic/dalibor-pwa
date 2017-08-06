<template lang="pug">
.about.view
  h1 About
  p I'm a Full-Stack Web Developer specializing in open web technologies and applications, Node.js, Express.js, evented architectures, HTML5, design, and UX.
</template>

<script>
export default {
  name: 'about-view',

  meta () {
    return {
      title: 'About',
      description: '###',
      card: null
    }
  },

  asyncData ({ store}) {
    return store.dispatch('title', 'About')
  }
}
</script>

<style lang="stylus" scoped>
</style>
