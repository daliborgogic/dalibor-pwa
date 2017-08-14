<template lang="pug">
.intro(@click="asterix('asterix')")
  h1 SOFTWARE/CLOUD ENGINEERING AND ARCHITECTURE*
  small(ref="asterix") *Minification (also minimisation or minimization) in computer programming languages and especially JavaScript, is the process of removing all unnecessary characters from source code without changing its functionality.
</template>

<script>
export default {
  name: 'intro'
}
</script>

<style lang="stylus">
.intro
  padding-bottom 6rem
  h1
    cursor pointer
</style>

<script>
export default {
  methods: {
    asterix  (refName) {
      const element = this.$refs[refName]
      const top = element.offsetTop
      window.scrollTo(0, top)
    }
  }
}
</script>
