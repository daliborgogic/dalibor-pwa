<template lang="pug">
.resource
  .view
    span CPU 100%
  svg(ref="cpu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 100")
    //-rect.average(fill="#067df7" width="1920" height="1" x="0" :y="100 -(100 * average)")
    //-rect(fill="#cccccc" width="1920" height="1" x="0" y="0")
    rect(fill="#067df7" v-for="r, index in resource.slice(0, 214)" v-bind:class="{alert: Math.ceil(100 * r.cpu) > 100 ? true : false }" width="1" v-bind:height="Math.ceil(100 * r.cpu)" v-bind:x="(index * 9)+1" v-bind:y="Math.ceil(100 - (100*r.cpu))")
  .view
    span 0%
  pre ? {{average}}
</template>

<script>
import resource from '../../public/resource.json'
export default {
  data () {
    return {
      resource: resource
    }
  }

  // computed: {
  //   average () {
  //     const foo = this.resource.map(_ => {
  //       const bar = _.cpu - 0
  //       return bar
  //     })
  //     var sum = foo.reduce(function(a, b) { return a + b; });
  //     var avg = sum / foo.length;
  //     return avg
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
.resource
  padding-bottom 6rem
svg
  width 100%
  display block
.alert
  fill tomato
.average:before
  content 'average'
</style>
