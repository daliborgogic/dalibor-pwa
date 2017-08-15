<template lang="pug">
.tag
  h1 {{ tagTitle | camelize }}
  div(v-if="tag.length === 0") Nothing found
  div(v-else)
    ul
      li(v-for="t, index in tag")
        router-link(:to="'/notes/'+t.slug")
          h3.notes-title {{ t.title }}
          time {{ dateFormat(t.createdAt, 'mmm dS yyyy') }}
  share(:shareText="tagTitle | camelize" v-bind:shareUrl="shareUrl" v-bind:shareHashtags="tagTitle")
  app-about
</template>

<script>
const AppAbout = () => import(/* webpackChunkName: "dlbr-tag" */ '@/components/About.vue')
const share = () => import(/* webpackChunkName: "dlbr-tag" */ '@/components/share.vue')

export default {
  name: 'tag-view',

  components: {
    AppAbout,
    share
  },

  computed: {
    tag () {
      return this.$store.state.tag
    },
    tagTitle () {
      return this.$store.state.tagTitle
    }
  },

  data () {
    return {
      shareUrl: `http://daliborgogic.com${this.$route.fullPath}`
    }
  },

  meta () {
    return {
      title: `Tag: ${this.tagTitle}`,
      description: '###',
      card: null
    }
  },


  asyncData ({ store, route: {params: {tag}} }) {
    return store.dispatch('tag', {tag})
  }
}
</script>

<style lang="stylus">
@import "../variables"
ul
  padding-left 0
  margin-top 0
  list-style none
  a
    display flex
    align-items baseline
    text-decoration none
    color $brandColor
    time
      font-size 13px
      color lightness(black, 56%)
.notes-title
  margin-top 0
  flex 1
  font-weight 700
  text-transform uppercase
  font-size 18px
  line-height 1
  word-break break-all
  padding-right 1rem
</style>
