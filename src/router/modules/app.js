import Home from '@/modules/app/index.vue'
import About from '@/modules/app/about.vue'
import Gallery from '@/modules/app/gallery.vue'
import Contact from '@/modules/app/contact.vue'
import BecomeAMember from '@/modules/app/becomeAMember.vue'
import News from '@/modules/app/news.vue'
import _SLUG from '@/modules/app/news/_SLUG.vue'

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
    path: '/about',
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
    path: '/news',
    name: 'news',
    component: News,
    meta: {
      layout: 'home',
      requiresAuth: false,
      name: 'news',
      parent: 'news'
    }
  },

  {
    path: '/news/:slug',
    name: 'news-details',
    component: _SLUG,
    meta: {
      layout: 'home',
      requiresAuth: false,
      name: 'news',
      parent: 'news'
    }
  },

  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery,
    meta: {
      layout: 'home',
      requiresAuth: false,
      name: 'gallery',
      parent: 'gallery'
    }
  },

  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: {
      layout: 'home',
      requiresAuth: false,
      name: 'contact',
      parent: 'contact'
    }
  },

  {
    path: '/become-a-member',
    name: 'become-a-member',
    component: BecomeAMember,
    meta: {
      layout: 'home',
      requiresAuth: false,
      name: 'become-a-member',
      parent: 'become-a-member'
    }
  }
]

export default routes
