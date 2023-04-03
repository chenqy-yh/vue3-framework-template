import { cacheEnum } from '@/enum/cacheEnum'
import router from '@/router'
import { store } from '@/utils'
import { IMenu } from '@@/types/menu'
import { reactive, ref } from 'vue'
import { RouteLocationNormalized, RouteLocationNormalizedLoaded } from 'vue-router'
class Menu {
  public menus = ref<IMenu[]>([])
  public historyMenus = ref<IMenu[]>([] as IMenu[])
  public showMenus = ref(false)
  public route = reactive({
    value: null as null | RouteLocationNormalized,
  })
  constructor() {
    setTimeout(() => {
      this.menus.value = this.getMenusByRoute()
      this.historyMenus.value = this.getHistoryMenus()
    }, 300)
  }
  public clickEmpty() {
    this.showMenus.value = !this.showMenus.value
  }
  public toggleShowMenus() {
    this.showMenus.value = !this.showMenus.value
    this.clearMenusActive()
    if (this.showMenus.value == false) {
      router.push({ name: 'admin.home' })
    }
  }

  public toggleMenuActive(tarMenu: IMenu) {
    this.clearMenusActive()
    this.menus.value.some((menu) => {
      if (menu.title == tarMenu.title) {
        menu.active = true
        return true
      }
    })
  }

  public setCurrentMenu(route: RouteLocationNormalizedLoaded) {
    this.menus.value.forEach((menu) => {
      menu.active = false
      menu.children?.some((kid) => {
        kid.active = false

        if (kid.route == route.name) {
          if (this.showMenus.value) menu.active = true
          kid.active = true
        }
      })
    })
  }

  private getMenusByRoute() {
    return router
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
      .filter((route) => {
        return route.children?.length
      })
  }

  public clearMenusActive() {
    this.menus.value.forEach((menu) => {
      menu.active = false
      menu.children?.forEach((kid) => {
        kid.active = false
      })
    })
  }

  //history

  private getHistoryMenus() {
    const routeKids: string[] = []
    router.getRoutes().forEach((route) => {
      route.children
        .map((kid) => kid.name)
        .filter((name) => {
          routeKids.push(name as string)
        })
    })
    const unfilter_historyMenus: IMenu[] = (store.get(cacheEnum.HISTORY_MENUS) ?? []) as unknown as IMenu[]
    return unfilter_historyMenus.filter((historyMenu) => {
      return routeKids.includes(historyMenu.route as string)
    })
  }

  private async storeHistory() {
    store.asyncSet(cacheEnum.HISTORY_MENUS, this.historyMenus.value)
  }

  public deleteHistoryMenu(title: string) {
    this.historyMenus.value = this.historyMenus.value.filter((item) => item.title !== title)
    this.storeHistory()
  }

  public addHistoryMenus(route: RouteLocationNormalized) {
    if (!route.meta?.menu) return
    this.route.value = route
    const historyMenu = {
      ...route.meta.menu,
      route: route.name as string,
    }
    if (this.historyMenus.value) {
      let hasItem = false
      this.historyMenus.value.some((item) => {
        if (historyMenu.title == item.title) {
          return (hasItem = true)
        }
      })
      if (!hasItem) {
        this.historyMenus.value.unshift(historyMenu)
      }
    }

    this.historyMenus.value.push()
    new Promise((res) => {
      res(this.storeHistory())
    })
  }
}

export default new Menu()
