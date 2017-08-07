import Vue from 'vue'

export default {
  NOTES: (state, m) => state.notes = m,
  NOTE: (state, m) => state.note = m,
  TITLE: (state, m) => state.title = m,
  TAG: (state, m) => state.tag =  m
}
