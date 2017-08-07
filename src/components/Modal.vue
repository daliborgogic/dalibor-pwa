<template lang="pug">
.modal-mask
  .modal-wrapper
    .modal-container

      .modal-header
        slot(name="header")
      .modal-body
        slot(name="body") default body
      .modal-footer
        slot(name="footer")
          button.modal-default-button(@click="$emit('close')") Close
</template>

<style lang="stylus">
.modal-mask
  position fixed
  z-index 9998
  top 0
  left 0
  width 100%
  height 100%
  background-color black
  display table
  transition: opacity .3s ease

.modal-wrapper
  display table-cell
  vertical-align middle

.modal-container {
  max-width: 512px;
  margin: 0px auto;
  padding: 20px 30px;
  transition: all .3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color white
}

.modal-body
  margin 1rem 0
  color white

.modal-default-button {
  float right
  height 36px
  padding 0 1rem
  border none
  background-color white
  border-radius 2px
  font-size 14px
  font-weight 500
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter
  opacity 0


.modal-leave-active
  opacity 0

.modal-enter .modal-container
.modal-leave-active .modal-container
  transform scale(1.1)
</style>
