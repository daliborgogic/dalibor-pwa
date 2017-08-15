<template lang="pug">
.share
  a(:href="share" rel="nofollow, noopener" aria-label="Share on Twitter")
    icon-twitter
</template>

<script>
const IconTwitter = () => import('@/components/icons/Twitter.vue')

export default {
  components: { IconTwitter },

  props: [
    'shareText',
    'shareUrl',
    'shareHashtags'
  ],

  computed: {
    share () {
      return `//twitter.com/share?text=${this.shareText}&url=${this.shareUrl}&hashtags=${this.shareHashtags}`
    }
  }
}
</script>

<style lang="stylus">
@import '../variables'
.share
  display flex
  padding-bottom 3rem
  a
    margin-left auto
    transition transform 250ms ease-out
    svg
      fill $brandColor
    &:active
      transform scale(.9)
</style>
