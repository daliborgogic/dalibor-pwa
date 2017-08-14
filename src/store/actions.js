import marked from 'marked'
import fetch from 'isomorphic-fetch'

export default {
  msg: ({commit, context}, data) => {
    commit('MSG', data)
  },

  unpublished: ({dispatch}) => {
    dispatch('latests')
  },

  published: ({dispatch}) => {
    dispatch('latests')
  },

  latests: ({commit}) => {
    return fetch('http://localhost:5000/api/posts/latests')
      .then(res => { return res.json() })
      .then(latests => commit('LATESTS', latests))
      .catch(err => console.error(err))
  },

  notes: ({commit}) => {
    return fetch('http://localhost:5000/api/posts')
      .then(res => { return res.json() })
      .then(notes => commit('NOTES', notes))
      .catch(err => console.error(err))
  },

  note: ({commit}, {note}) => {
    return fetch(`http://localhost:5000/api/posts/${note}`)
      .then(res => { return res.json() })
      .then(json => commit('NOTE', json))
      .catch(err => console.error(err))
  },

  tag: ({commit, state}, {tag}) => {
    return fetch('http://localhost:5000/api/posts')
      .then(res => { return res.json() })
      .then(notes => {
        const t = notes.filter(_ => {
          return _.category === tag
        })
        commit('TAG', t)
      })
      .catch(err => console.error(err))
  },

  search: ({commit}, data) => {
    return fetch('http://localhost:5000/api/posts')
      .then(res => { return res.json() })
      .then(notes => {
          if (data === '') {
            commit('NOTES', notes)
          } else {
            const results = notes.filter(note => {
              return note.title.toLowerCase().includes(data.toLowerCase())
             })
             commit('NOTES', results)
          }
      })
      .catch(err => console.error(err))
  }
}
