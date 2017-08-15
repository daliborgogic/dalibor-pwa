<template lang="pug">
.about
  h1 About
  p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam iure, non, culpa totam reiciendis sunt tenetur explicabo aperiam voluptatum sed ipsam neque iusto! Accusamus debitis, culpa! Esse provident numquam rem magni reprehenderit vel deserunt quod totam ipsum at id vero laborum deleniti, dignissimos, voluptatum repudiandae illum placeat veniam aut vitae tempore! Cum non dignissimos maxime unde eligendi, odit nesciunt omnis minima sapiente, necessitatibus, nostrum molestias porro. Cumque deserunt minima quam mollitia nam, nulla, eveniet accusantium, sequi itaque consequuntur, et eligendi. Odit neque aliquid dolor necessitatibus aspernatur aperiam temporibus, in enim ducimus, dolorum inventore nostrum deleniti nisi error! Ab, ullam dolorum!
  share(shareText="About" shareUrl="https://daliborgogic.com/about" shareHashtags="foo,bar,baz")
</template>

<script>
const share = () => import('@/components/share.vue')

export default {
  name: 'about-view',

  components: {
    share
  },

  meta () {
    return {
      title: 'About',
      description: '###',
      card: null
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  padding-bottom 3rem
</style>
