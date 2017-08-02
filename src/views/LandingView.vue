<template lang="pug">
.home
  .view
    intro
    about
    services
    router-link(to="/about") xxxx
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
  }
}
</script>

<style lang="stylus" scoped>
.col
  width 46%
</style>
