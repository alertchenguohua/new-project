
const routers = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: 'home'
    },
    component: () => import('../views/home.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: 'about'
    },
    component: () => import('../views/about.vue')
  },
  {
    path: '/form',
    name: 'form',
    meta: {
      title: 'form'
    },
    component: () => import('../views/my-form.vue')
  },
  {
    path: '/table',
    name: 'table',
    meta: {
      title: 'table-render'
    },
    component: () => import('../views/table-render.vue')
  },
  {
    path: '/tree',
    name: 'tree',
    meta: {
      title: 'my-tree'
    },
    component: () => import('../views/my-tree')
  }
]
export default routers
