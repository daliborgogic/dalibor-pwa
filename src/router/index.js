import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const LandingView = () => import('@/views/LandingView.vue')
const AboutView = () => import('@/views/AboutView.vue')
const NotFoundView = () => import('@/views/NotFoundView.vue')
const NotesView = () => import('@/views/NotesView.vue')
const NoteView = () => import('@/views/NoteView.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', component: LandingView },
      { path: '/notes', component: NotesView },
      { path: '/notes/:note', component: NoteView },
      { path: '/about', component: AboutView },
      { path: '*', component: NotFoundView }
    ]
  })
}
