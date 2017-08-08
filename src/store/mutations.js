import Vue from 'vue'

export default {
  LATESTS: (state, m) => state.latests = m,
  NOTE: (state, m) => state.note = m[0],
  TAG: (state, m) => state.tag =  m
}
