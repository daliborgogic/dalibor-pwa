<template lang="pug">
.services
  h2.h2 Services
  p API Design – Distributed Infrastructures – Web Apps
  .right
    router-link.button(to="/about") What else?
</template>

<style lang="stylus">
.services
  padding-bottom 6rem
.button
  height 36px
  border 1px solid
  padding 0 1rem
  display inline-block
  text-decoration none
  line-height 34px
  border-radius 2px
  background-color black
  color white
.right
  display flex
  a
    margin-left auto
</style>
