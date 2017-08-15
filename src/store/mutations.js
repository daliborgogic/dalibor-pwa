import Vue from 'vue'

export default {
  LATESTS: (state, m) => state.latests = m,
  NOTES: (state, m) => state.notes = m,
  NOTE: (state, m) => state.note = m[0],
  MSG: (state, m) => state.msg = m,
  TAG: (state, m) => state.tag =  m,
  TAG_TITLE: (state, m) => state.tagTitle =  m,
  RESOURCE: (state, m) => state.resource =  m
}
