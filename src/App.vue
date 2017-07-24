<template lang="pug">
#app
  router-link(to="/" exact) Home
  transition(name="fade" mode="out-in")
    router-view.view
</template>

<style lang="stylus">
body
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size 15px
  background-color white
  margin 0
  color black
  overflow-y scroll

.view
  max-width 800px
  margin 0 auto
  position relative

.fade-enter-active
.fade-leave-active
  transition all .2s ease

.fade-enter
.fade-leave-active
  opacity 0
</style>
