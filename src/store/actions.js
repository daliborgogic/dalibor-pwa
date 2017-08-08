import marked from 'marked'
import fetch from 'isomorphic-fetch'

export default {
  notes: ({context, commit, state}) => {
    return fetch('http://localhost:5000/api/home')
      .then(res => { return res.json() })
      .then(home => {
        console.log(home)
        commit('NOTES', home)
      })
      .catch(err => console.error(err))
  },

  note: ({commit, state}, {note}) => {
    // return fetch('http://localhost:5000/entries.json')
    //   .then(res => { return res.json() })
    //   .then(json => {
    //     const n = json.map(note => {
    //       return {
    //         title: note.fields.title['en-US'],
    //         slug: note.fields.slug['en-US'],
    //         content: marked(note.fields.content['en-US']),
    //         category: note.fields.category['en-US'],
    //         card: note.fields.card['en-US'].fields.file['en-US'].url,
    //         createdAt: note.sys.createdAt
    //       }
    //     })
    //     const na = n.filter(_ => {
    //       return _.slug === note
    //     })
    //     commit('NOTE', na)
    //   })
    //   .catch(err => console.error(err))

  },

  tag: ({commit, state}, {tag}) => {
    const notes = state['notes'].filter(_ => {
      return _.category === tag
    })
    commit('TAG', notes)
    commit('TITLE', tag)
  }
}
