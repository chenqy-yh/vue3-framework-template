import { RouteRecordRaw } from 'vue-router'

export default {
  name: 'editor',
  path: '/editor',
  component: () => import('@/layouts/admin.vue'),
  meta: {
    menu: {
      title: '编辑器',
      icon: 'i-editor',
    },
  },
  children: [
    {
      name: 'editor.markdown',
      path: 'markdown',
      component: () => import('@/views/editor/markdown.vue'),
      meta: {
        premission: 'editor_markdown',
        menu: {
          title: 'markdown',
          icon: 'fa-brands fa-markdown',
        },
      },
    },
    {
      name: 'editor.rich',
      path: 'rich',
      component: () => import('@/views/editor/rich.vue'),
      meta: {
        premission: 'editor_rich',
        menu: {
          title: 'rich',
        },
      },
    },
    {
      name: 'editor.wang',
      path: 'wang',
      component: () => import('@/views/editor/wang.vue'),
      meta: {
        // premission: 'editor_rich',
        menu: {
          title: 'wang',
        },
      },
    },
  ] as RouteRecordRaw[],
} as RouteRecordRaw
