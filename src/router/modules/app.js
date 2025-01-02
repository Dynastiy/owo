import Home from '@/modules/app/index.vue'
import About from '@/modules/app/about.vue'
import Gallery from '@/modules/app/gallery.vue'
import Contact from '@/modules/app/contact.vue'
import BecomeAMember from '@/modules/app/becomeAMember.vue'
// import News from '@/modules/app/news.vue'
import _SLUG from '@/modules/app/blog/_SLUG.vue'
import Blog from '@/modules/app/blog.vue'
import Events from '@/modules/app/events.vue'
import _uuid from '@/modules/app/events/_uuid.vue'
import BecomeAVolunteer from '@/modules/app/becomeAVolunteer.vue'

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
    path: '/blog',
    name: 'blog',
    component: Blog,
    meta: {
      layout: 'home',
      requiresAuth: false,
      name: 'blog',
      parent: 'blog'
    }
  },

  {
    path: '/blog/:slug',
    name: 'blog-details',
    component: _SLUG,
    meta: {
      layout: 'home',
      requiresAuth: false,
      name: 'blog',
      parent: 'blog'
    }
  },


  {
    path: '/events',
    name: 'events',
    component: Events,
    meta: {
      layout: 'home',
      requiresAuth: false,
      name: 'events',
      parent: 'events'
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
    path: '/event/:slug',
    name: 'event-details',
    component: _uuid,
    meta: {
      layout: 'home',
      requiresAuth: false,
      name: 'event',
      parent: 'event'
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
  },

  {
    path: '/become-a-volunteer',
    name: 'become-a-volunteer',
    component: BecomeAVolunteer,
    meta: {
      layout: 'home',
      requiresAuth: false,
      name: 'become-a-volunteer',
      parent: 'become-a-volunteer'
    }
  }
]

export default routes
