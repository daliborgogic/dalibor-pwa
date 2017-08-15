import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash

      // specify offset of the element
      if (to.hash === '#anchor2') {
        position.offset = { y: 100 }
      }
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position
  }
}

const LandingView = () => import(/* webpackChunkName: "landing-view" */ '@/views/LandingView.vue')
const AboutView = () => import(/* webpackChunkName: "about-view" */ '@/views/AboutView.vue')
const NotFoundView = () => import(/* webpackChunkName: "404-view" */ '@/views/NotFoundView.vue')
const NoteView = () => import(/* webpackChunkName: "note-view" */ '@/views/NoteView.vue')
const NotesView = () => import(/* webpackChunkName: "notes-view" */ '@/views/NotesView.vue')
const TagView = () => import(/* webpackChunkName: "tag-view" */ '@/views/TagView.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    // scrollBehavior: () => ({ y: 0 }),
    scrollBehavior,
    routes: [
      { path: '/', component: LandingView },
      { path: '/about', component: AboutView },
      { path: '/notes', component: NotesView },
      { path: '/notes/:note?', component: NoteView },
      { path: '/tags/:tag?', component: TagView },
      { path: '*', component: NotFoundView }
    ]
  })
}
