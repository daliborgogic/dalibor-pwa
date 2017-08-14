import marked from 'marked'
import fetch from 'isomorphic-fetch'

export default {
  latests: ({context, commit, state}) => {
    return fetch('http://localhost:5000/api/posts/latests')
      .then(res => { return res.json() })
      .then(latests => {
        commit('LATESTS', latests)
      })
      .catch(err => console.error(err))
  },

  note: ({commit, state}, {note}) => {
    return fetch(`http://localhost:5000/api/posts/${note}`)
      .then(res => { return res.json() })
      .then(json => {
        commit('NOTE', json)
      })
      .catch(err => console.error(err))

  },

  tag: ({commit, state}, {tag}) => {
    const notes = state['notes'].filter(_ => {
      return _.category === tag
    })
    commit('TAG', notes)
    commit('TITLE', tag)
  }
}
