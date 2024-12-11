import { createRouter, createWebHistory } from 'vue-router'

import store from  '@/store'

// import Auth from "./modules/auth"
// import Dashboard from "./modules/dashboard"

import Home from "./modules/app.js"
import Admin from "./modules/admin.js"

const baseRoutes = []

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: baseRoutes.concat(Home, Admin),
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: 'smooth' })
  }
})

// Navigation Guards
router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters['auth/getAuthenticated']
  if (to.meta.requiresAuth) {
    if (!isLoggedIn) {
      // Redirect to login if not logged in
      next({ path: '/admin/login', query: { redirect: to.fullPath } })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
