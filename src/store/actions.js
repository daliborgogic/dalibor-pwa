const lang = 'en-US'
export default {
  notes: ({context, commit, state}) => {
    commit('NOTES', state['notes'])
  },
  note: ({commit, state}, {note}) => {
    const notes = state['notes'].filter(_ => {
      return _.slug === note
    })
    commit('NOTE', notes.map(note => { return note }))
  }
}
