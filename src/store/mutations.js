import Vue from 'vue'

export default {
  NOTES: (state, m) => state.notes = m,
  NOTE: (state, m) => state.note = m[0],
  TAG: (state, m) => state.tag =  m
}
