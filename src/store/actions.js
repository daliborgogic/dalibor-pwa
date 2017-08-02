const lang = 'en-US'
export default {
  notes: ({context, commit, state}) => {
    commit('NOTES', state['notes'])
  },
  note: ({commit, state}, {note}) => {
    const n = state['notes'].filter(o => {
      return o.slug === note
    })
    const no = n.map(x => {return x })
    commit('NOTE', no)
  }
}
