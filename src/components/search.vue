<template lang="pug">
.search
  input(v-model="search" placeholder="Search" @keyup="find()")
</template>

<script>
export default {
  name: 'search',

  data () {
    return {
      search: ''
    }
  },

  computed: {
    results () {
      return this.$store.state.notes
    }
  },

  methods: {
    find () {
      this.$store.dispatch('search', this.search)
    },

    highlight (words, query){
        var iQuery = new RegExp(query, "ig");
        return words.toString().replace(iQuery, function(matchedTxt,a,b){
            return ('<span class=\'highlight\'>' + matchedTxt + '</span>');
        });
    }
  }
}
</script>
