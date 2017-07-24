const contentful = require('contentful')
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export default {
  entries({ commit, state }) {
    const sync = state.token
      ? { nextSyncToken: state.token}
      : {initial: true, locale: 'en-US'}

    return new Promise((resolve, reject) => {
      client.sync(sync)
        .then(response => {

          if (sync['initial'] === true) {
            commit('TOKEN', response.nextSyncToken)
            commit('ENTRIES', response.entries)
          } else {

            commit('TOKEN', response.nextSyncToken)

            // Get content added or changed since the last sync.
            if (response.entries.length > 0) {
              commit('ENTRIES', state.entries.concat(response.entries))
            }

            // Delete local content deleted since the last sync.
            if (response.deletedEntries.length > 0) {
              const ids = response.deletedEntries.map(id => {
                return id.sys.id
              })

              const newArray = state.entries.filter(id =>
                !new Set(ids).has(id.sys.id)
              )
              commit('ENTRIES', newArray)
            }
          }
          resolve()
        })
        .catch((err => console.error(err)))
    })
  }
}

