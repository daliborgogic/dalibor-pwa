import Vue from 'vue'

export default {
  ENTRIES: (state, payload) => state.entries = payload,
  TOKEN: (state, payload) => state.token = payload
}
