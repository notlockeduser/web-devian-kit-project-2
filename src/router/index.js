import Vue from 'vue'
import VueRouter from 'vue-router'
import ProfilePage from '../views/ProfilePage.vue'
import UsersPage from '../views/UsersPage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ProfilePage',
    component: ProfilePage
  },
  {
    path: '/userspage',
    name: 'UsersPage',
    component: UsersPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
