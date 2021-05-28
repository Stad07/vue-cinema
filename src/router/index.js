import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'mainPage',
    props: true,
    meta: { layout: 'empty' },
    component: () => import('../views/MainPage.vue')
  },
  {
    path: '/films',
    name: 'films',
    props: true,
    meta: { layout: 'header' },
    component: () => import('../views/AllFilms.vue')
  },
  {
    path: '/films/:id',
    name: 'film',
    props: true,
    meta: { layout: 'header' },
    beforeEnter (to, from, next) {
      if (localStorage.user) {
        next()
      } else {
        next(false)
        alert('Для дальнейшей работы необходимо войти в систему!')
      }
    },
    component: () => import('../views/Film.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
