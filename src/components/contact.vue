<template lang="pug">
a.cta-contact(href="mailto:mail@daliborgogic.com?subject=Hello" rel="noopener, nowollow")
  svg(fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg")
    path(d="M0 0h24v24H0z" fill="none")
    path(d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z")
</template>

<style lang="stylus">
.cta-contact
  width 56px
  height 56px
  background-color black
  border-radius 50%
  display flex
  color white
  align-items center
  justify-content center
  position fixed
  right 3rem
  bottom 3rem
  box-shadow 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)
</style>
