import { RouteRecordRaw } from 'vue-router'
export default {
  name: 'admin',
  path: '/admin',
  component: () => import('@/layouts/admin.vue'),
  meta: {
    auth: true,
    menu: {
      title: 'Index',
      icon: 'i-dashboard-car',
    },
  },
  children: [
    {
      name: 'admin.home',
      path: 'home',
      component: () => import('@/views/admin/home.vue'),
      meta: {
        menu: { title: 'Dashboard' },
      },
    },
  ],
} as RouteRecordRaw
