import LRU from 'lru-cache'

const cache = LRU({
  max: 100,
  maxAge: 1000 * 60 * 60
})
const contentful = require('contentful')
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export default {
  entries({ commit, state }) {
    if (cache.get('token') === undefined) {
      return new Promise((resolve, reject) => {
        client.sync({ initial: true }).then(response => {
          cache.set('token', response.nextSyncToken)
          cache.set('entries', response.entries)
          commit('ENTRIES', response.entries)
          resolve()
        })
      }).catch(err => console.error(err))

    } else {
      return new Promise((resolve, reject) => {
        client.sync({ nextSyncToken: cache.get('token')}).then(response => {
          cache.set('token', response.nextSyncToken)

          const cachedEntries = cache.get('entries')

           // Add new content
          if (response.entries.length > 0) {
            commit('ENTRIES', !new Set(cachedEntries).add(response.entries))

          // Remove any content that is marked as deleted
          } else if (response.deletedEntries.length > 0) {

            const ids = response.deletedEntries.map(d => {
              return d.sys.id
            })

            const entries = cachedEntries.filter(obj =>
              !new Set(ids).has(obj.sys.id)
            )
            commit('ENTRIES', entries)
          } else {
            commit('ENTRIES', cachedEntries)
          }
          resolve()

        })
      }).catch(err => console.error(err))
    }
  }
}


