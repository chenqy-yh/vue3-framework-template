import { RouteRecordRaw } from 'vue-router'

export function loadModuleRoutes() {
  const routes = [] as RouteRecordRaw[]
  const modules = import.meta.glob('@/router/module/**/*.ts', {
    eager: true,
  }) as any
  Object.keys(modules).forEach((key) => {
    routes.push(modules[key].default)
  })
  return routes as RouteRecordRaw[]
}
