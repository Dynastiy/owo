import Login from '@/modules/admin/login.vue'
import Dashboard from '@/modules/admin/index.vue'
import Users from '@/modules/admin/users.vue'
import Blog from '@/modules/admin/blog.vue'
import Create from '@/modules/admin/blog/create.vue'

const routes = [
  {
    path: '/admin/login',
    name: 'admin-login',
    component: Login,
    meta: {
      layout: 'auth',
      requiresAuth: false,
      name: 'admin-login',
      parent: 'admin-login'
    }
  },

  // Dashboard 
  {
    path: '/admin/dashboard',
    name: 'admin-dashboard',
    component: Dashboard,
    meta: {
      layout: 'dashboard',
      requiresAuth: true,
      name: 'admin-dashboard',
      parent: 'admin-dashboard'
    }
  },

  {
    path: '/admin/members',
    name: 'admin-member-list',
    component: Users,
    meta: {
      layout: 'dashboard',
      requiresAuth: true,
      name: 'members',
      parent: 'members'
    }
  },

  {
    path: '/admin/blog',
    name: 'admin-blog',
    component: Blog,
    meta: {
      layout: 'dashboard',
      requiresAuth: true,
      name: 'blog',
      parent: 'blog'
    }
  },

  {
    path: '/admin/blog/new',
    name: 'admin-create-blog',
    component: Create,
    meta: {
      layout: 'dashboard',
      requiresAuth: true,
      name: 'blog',
      parent: 'blog'
    }
  }
]

export default routes
