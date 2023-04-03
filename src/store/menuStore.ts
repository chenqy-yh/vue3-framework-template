import { cacheEnum } from '@/enum/cacheEnum'
import { store } from '@/utils'
import { IMenu } from '@@/types/menu'
import { defineStore } from 'pinia'
import { RouteLocationNormalized } from 'vue-router'
import { useRouter } from 'vue-router'

export default defineStore('menuStore', {
  state: () => {
    return {
      menus: [] as IMenu[],
      historyMenus: [] as IMenu[],
    }
  },
  actions: {
    storeHistory: function () {
      store.set(cacheEnum.HISTORY_MENUS, this.historyMenus)
    },
    menuInit: function () {
      this.getRouteByRoute()
      this.historyMenus = store.get(cacheEnum.HISTORY_MENUS)
    },
    deleteHistoryMenu: function (title: string) {
      this.historyMenus = this.historyMenus.filter((item) => item.title !== title)
      this.storeHistory()
    },
    addHistoryMenus: function (route: RouteLocationNormalized) {
      // debugger
      if (!route.meta?.menu) return
      const historyMenu = {
        ...route.meta.menu,
        route: route.name as string,
      }
      this.historyMenus = this.historyMenus.filter((item) => item.title !== historyMenu.title)
      this.historyMenus.unshift(historyMenu)
      this.storeHistory()
    },

    getRouteByRoute: function () {
      const router = useRouter()
      this.menus = router
        .getRoutes()
        .filter((route) => route.meta.menu && route.children.length)
        .map((route) => {
          const menu: IMenu = {
            ...route.meta.menu,
            route: route.name as string,
          }
          menu.children = route.children
            .filter((kid) => kid.meta)
            .map((kid) => {
              const menuItem: IMenu = { ...kid.meta?.menu }
              menuItem.route = kid.name as string
              return menuItem as IMenu
            })
          return menu
        })
      return this.menus
    },
  },
})
