<template lang="pug">
.note.view
  //- img(:src="n.card+'?w=600&fm=jpg&q=80'")
  h1 {{post.title}}
  time(:date-time="post.createdAt") {{post.createdAt | timeAgo}} ago

  .content(v-html="marked(post.content)")

  a(:href="share" rel="nofollow, noopener") SHARE

  app-about

</template>

<script>
const AppAbout = () => import(/* webpackChunkName: "dlbr-about" */ '@/components/About.vue')
export default {
  name: 'note-view',

  components: {
    AppAbout
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
      return this.$store.state.note[0]
    },

    share: {
      get: function () {
        const tweet = {
          text: this.post.title,
          url: this.$route.fullPath
        }
        // ToDo update when have category
        if (!this.post.title) {
          tweet.hashtags = `&hashtags=${this.post.categories}`
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
  },

  methods: {
    share () {
      //
      console.log('click')
    }
  }

}
</script>

<style lang="stylus">
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

</style>
