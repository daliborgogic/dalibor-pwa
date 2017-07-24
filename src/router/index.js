import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const LandingView = () => import('@/views/LandingView.vue')
const NotFoundView = () => import('@/views/NotFoundView.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', component: LandingView },
      { path: '*', component: NotFoundView }
    ]
  })
}
