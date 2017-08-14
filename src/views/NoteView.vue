<template lang="pug">
.note
  //- img(:src="n.card+'?w=600&fm=jpg&q=80'")
  h1 {{post.title}}
  time(:date-time="post.createdAt") {{post.createdAt | timeAgo}} ago
  .content(v-html="post.content")
  .category
    router-link(:to="'/tags/'+post.category") {{post.category | camelize}}
  .share
    a(:href="share" rel="nofollow, noopener" aria-label="Share on Twitter")
      icon-twitter
  app-about

</template>

<script>
const AppAbout = () => import(/* webpackChunkName: "dlbr-note" */ '@/components/About.vue')
const IconTwitter = () => import(/* webpackChunkName: "dlbr-note" */ '@/components/icons/Twitter.vue')
export default {
  name: 'note-view',

  data () {
    return {
      test: '<div>a</div>'
    }
  },

  components: {
    AppAbout,
    IconTwitter
  },

  meta () {
    return {
      title: this.post.title,
      description: this.post.description,
      card: this.post.card
    }
  },

  computed: {
    post () {
      return this.$store.state.note
    },

    share: {
      get: function () {
        const tweet = {
          text: this.post.title,
          url: this.$route.fullPath
        }
        // ToDo update when have category
        if (this.post.category) {
          tweet.hashtags = `&hashtags=${this.post.category}`
        } else {
          tweet.hashtags = ''
        }
        return `http://twitter.com/share?text=${tweet.text}&url=https://daliborgogic.com${tweet.url + tweet.hashtags}`
      },
      set: function (val) {
        return val

      }
    }
  },

  asyncData ({ store, route: {params: {note}} }) {
    return store.dispatch('note', {note})
  }

}
</script>

<style lang="stylus">
.category
  padding-bottom 3rem
  a
    height 32px
    min-width 64px
    padding 0 1rem
    border 1px solid lightness(black, 87%)
    background-color transparent
    border-radius 2px
    font-size 14px
    text-decoration none
    text-transform uppercase
    line-height 30px
    display inline-block
    transition transform 250ms ease-in
    color #bd10e0
    &:focus
      transform scale(.9)

time
  padding-bottom 1rem
  display block
  font-size 13px
.content
  padding-bottom 3rem
  ul
    padding-left 0
  // list-style none
img
  max-width calc(100% + 6rem)
  max-width 100%
  height auto
  vertical-align middle
  // margin-left -3rem
  // margin-right -3rem
pre
  margin-top 3rem
  margin-bottom 3rem
  // margin-left -10rem
  // margin-right -10rem
  // width calc(100% + 20rem)
  font-size .75rem
  //white-space pre-wrap
  word-break break-word
  overflow-x auto
.share
  display flex
  padding-bottom 3rem
  a
    margin-left auto
</style>
