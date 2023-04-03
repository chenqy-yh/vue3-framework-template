import { env } from '@/utils'
import { RouteRecordRaw, Router } from 'vue-router'
import getRoutes from '@/router/autoload/view'
import { loadModuleRoutes } from '@/router/module'
import userStore from '@/store/userStore'

let routes: RouteRecordRaw[] = env.VITE_ROUTER_AUTOLOAD ? getRoutes() : loadModuleRoutes()

async function autoload(router: Router) {
  const user = userStore()
  routes = routes.map((route) => {
    route.children = route.children?.filter((routeKid) => {
      const permission = routeKid.meta?.premission
      return permission ? user.info?.permissions.includes(permission) : true
    })
    return route
  })
  routes.forEach((route) => {
    router.addRoute(route)
  })
}

export default autoload
