import marked from 'marked'

export default {
  notes: ({context, commit, state}) => {
    commit('NOTES', state['notes'])
  },

  note: ({commit, state}, {note}) => {
    const notes = state['notes'].filter(_ => {
      return _.slug === note
    })
    commit('NOTE', notes.map(note => {
      return {
        title: note.title,
        content: marked(note.content),
        category: note.category,
        description: note.description,
        slug: note.slug,
        createdAt: note.createdAt
      }
    }))
  },

  tag: ({commit, state}, {tag}) => {
    const notes = state['notes'].filter(_ => {
      return _.category === tag
    })
    commit('TAG', notes)
    commit('TITLE', tag)
  }
}
