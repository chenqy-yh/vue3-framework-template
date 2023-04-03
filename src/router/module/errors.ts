import { RouteRecordRaw } from 'vue-router'

export default {
  name: 'errors',
  path: '/errors',
  component: () => import('@/layouts/admin.vue'),
  meta: {
    menu: {
      title: '错误页面',
      icon: 'i-error-computer',
    },
    auth: true,
  },
  children: [
    {
      name: 'errors.403',
      path: '403',
      component: () => import('@/views/errors/403.vue'),
      meta: {
        menu: {
          title: '403错误页面',
          icon: 'fa-regular fa-circle-3',
        },
      },
    },
    {
      name: 'errors.404',
      path: '404',
      component: () => import('@/views/errors/404.vue'),
      meta: {
        menu: {
          title: '404错误页面',
          icon: 'fa-regular fa-circle-4',
        },
      },
    },
    {
      name: 'errors.500',
      path: '500',

      component: () => import('@/views/errors/500.vue'),
      meta: {
        // enterAnimateClass: 'animate__pulse',
        menu: {
          title: '500错误页面',
          icon: 'fa-regular fa-circle-5',
        },
        show: true,
      },
    },
  ] as RouteRecordRaw[],
} as RouteRecordRaw
