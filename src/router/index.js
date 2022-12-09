// This is a PURE JAVASCRIPT FILE
import Vue from 'vue'
import VueRouter from 'vue-router'

// step 1 - import (you can use .vue or NOT, it doesn't matter Javascript is smart)
import MenuPage from '@/views/MenuPage'
import ContactPage from '@/views/ContactPage'
import ReservationsPage from '@/views/ReservationsPage'

Vue.use(VueRouter)

const routes = [
  // register the route by adding to Routes Array
  // minimum to specify is the Path (what does user have to type into browser in order to show this)
  {
    // "/" = root
    path : "/",
    // 2nd specify component:
    component: MenuPage
  },
  {
    path: "/contact-us",
    component: ContactPage
  },
  {
    path: "/reservations",
    component: ReservationsPage
  }
]

const router = new VueRouter({
  routes
})

export default router
