<template lang="pug">
.snackbar(v-bind:class="{active: activeSnackbar}") {{snackbar}}
</template>

<script>
export default {
  name: 'snackbar',
  props: ['snackbar', 'activeSnackbar']
}
</script>

<style lang="stylus">
.snackbar
  position fixed
  left 1rem
  // left 50%
  //transform translate(-50%, 0)
  transition transform 250ms ease-out
  transform translateY(100px)
  bottom 1rem
  z-index 10
  background-color #323232
  border-radius 2px
  min-width 288px
  max-width 568px
  min-height 48px
  color white
  padding 14px 24px
  box-shadow 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)
  font-size 14px
  &.active
    transform translateY(0)
@media (max-width: 512px)
 .snackbar
   left 0
   bottom auto
   top 0
   width 100%
   transform translateY(-60px)
   border-radius 0
</style>
