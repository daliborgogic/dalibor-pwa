<template lang="pug">
.note
  //- img(:src="n.card+'?w=600&fm=jpg&q=80'")
  h1 {{post.title}}
  //- https://www.npmjs.com/package/dateformat
  time(:date-time="post.createdAt") {{dateFormat(post.createdAt, 'dddd, mmmm dS yyyy')}}
  .content(v-html="marked(post.content)")
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
@import "../variables"
blockquote
  margin 2rem
  font-size .75rem
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
    color $brandColor
    &:focus
      transform scale(.9)

time
  padding-bottom 1rem
  display block
  font-size 13px
  color lightness(black, 56%)
.content
  padding-bottom 3rem
  h1
  h2
  h3
    font-size 1.1rem
    font-weight 700
    margin-top 0
    margin-bottom 1rem
    text-transform uppercase
    // display: inline-block;
    // font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto", "Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans", "Helvetica Neue",sans-serif;
    // font-size: 24px;
    // font-weight: normal;
    // margin: 0;
    // overflow: auto;
  ul
  ol
    padding-left 0
    margin 2rem 0
  ul
    list-style none
    li
      border-bottom 1px solid lightness(black, 80%)
      min-height 48px
      display flex
      align-items center
      font-size .75rem
img
  width 100%
  height auto
  vertical-align middle
pre
  margin-top 2rem
  margin-bottom 2rem
  font-size .75rem
  //white-space pre-wrap
  word-break break-word
  overflow-x auto
  //color $brandColor
.share
  display flex
  padding-bottom 3rem
  a
    margin-left auto
</style>
