// typings.d.ts or router.ts
import 'vue-router'
import { IMenu } from './menu'

declare module 'vue-router' {
  interface RouteMeta {
    auth?: boolean
    guest?: boolean
    //路由是否在菜单中显示
    show?: boolean
    menu?: IMenu
    premission?: string
    enterAnimateClass?: string
    leaveAnimateClass?: string
  }
}
