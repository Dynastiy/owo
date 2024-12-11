import Home from '@/pages/Index.vue'
import About from '@/pages/AboutUs.vue'
import Business from '@/pages/Business.vue'
import JoinWaitlist from '@/pages/JoinWaitlist.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      layout: 'home',
      requiresAuth: false,
      name: 'home',
      parent: 'home'
    }
  },

  {
    path: '/about-us',
    name: 'about',
    component: About,
    meta: {
      layout: 'home',
      requiresAuth: false,
      name: 'about',
      parent: 'about'
    }
  },

  {
    path: '/business',
    name: 'business',
    component: Business,
    meta: {
      layout: 'home',
      requiresAuth: false,
      name: 'business',
      parent: 'business'
    }
  },

  {
    path: '/join-waitlist',
    name: 'join-waitlist',
    component: JoinWaitlist,
    meta: {
      layout: 'home',
      requiresAuth: false,
      name: 'join-waitlist',
      parent: 'join-waitlist'
    }
  }
]

export default routes
