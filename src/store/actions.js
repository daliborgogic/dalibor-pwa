import client from './../../lib/http-client'
const lang = 'en-US'

export default {
  notes: ({commit, state}) => {
    return client().get('/entries.json')
      .then(response => {
        const notes = response['data'].map(x => {
          return {
            id: x.sys.id,
            createdAt: x.sys.createdAt,
            title: x.fields.title[lang],
            slug: x.fields.slug[lang],
            description: x.fields.description[lang]
          }
        })
        commit('NOTES', notes)
      })
      .catch(err => console.error(err))
  },
  note: ({commit, state}, {note}) => {
    return client().get('/entries.json', note)
      .then(response => {
        const n = response['data'].find(o => {
          return o.fields.slug[lang] === note
        })
        const no = [n].map(x => {
          return {
            title: x.fields.title[lang],
            description: x.fields.description[lang],
            content: x.fields.content[lang],
            card: x.fields.card[lang].fields.file[lang].url
          }
        })
        commit('NOTE', no[0])
      })
      .catch(err => console.error(err))
  }
}
