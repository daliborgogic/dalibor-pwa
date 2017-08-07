import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const LandingView = () => import(
  /* webpackChunkName: "landing-view" */
  '@/views/LandingView.vue'
)
const AboutView = () => import(
  /* webpackChunkName: "about-view" */
  '@/views/AboutView.vue'
)
const NotFoundView = () => import(
  /* webpackChunkName: "404-view" */
  '@/views/NotFoundView.vue'
)
const NoteView = () => import(
  /* webpackChunkName: "note-view" */
  '@/views/NoteView.vue'
)

const NotesView = () => import(
  /* webpackChunkName: "notes-view" */
  '@/views/NotesView.vue'
)

const TagView = () => import(
  /* webpackChunkName: "tag-view" */
  '@/views/TagView.vue'
)

export function createRouter () {
  return new Router({
    mode: 'history',
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
