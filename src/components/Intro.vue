<template lang="pug">
.intro
  h1 SOFTWARE/CLOUD ENGINEERING AND ARCHITECTURE*
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
  span
    color #bd10e0
    cursor pointer
    transition transform 250ms ease-in
    &:active
      transform scale(.9)
</style>
