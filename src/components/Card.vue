<template lang="pug">
.card
  header
    span.count 345
  div
    p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero commodi qui doloremque explicabo, quidem voluptatibus.
    input(type="email" placeholder="Placeholder")
  footer
    button SIGNUP
</template>


<style lang="stylus" scoped>
$color = black
.card
  border-radius 2px
  margin-bottom 6rem
  background-color $color
  padding 1rem 2rem 2rem 2rem
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  //box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
p
  color white
header
  color white
  padding-bottom 1rem
.count
  font-size 3rem
  font-weight 100
footer
  display flex
  button
    height 36px
    min-width 64px
    padding 0 1rem
    border none
    background-color white
    border-radius 2px
    margin-left auto
    font-weight 500
    font-size 14px
    transition transform 250ms ease-in
    &:focus
      outline none
    &:active
      transform scale(.9)
input
  width 100%
  height 36px
  border none
  border-bottom 1px solid lightness(white, 46%)
  background-color transparent
  margin-bottom 1rem
</style>
