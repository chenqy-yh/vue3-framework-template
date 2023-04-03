import autoload from '@/router/autoload'
import routes from '@/router/routes'
import userStore from '@/store/userStore'
import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import guard from './guard'
const router = createRouter({
  history: createWebHistory(),
  routes: [...routes],
})

export async function setupRouter(app: App) {
  //bug点 还没有解决！！！！！
  // 暂时的解决方案 让菜单延迟初始化
  const user = userStore()
  await user.getUserInfo()
  autoload(router)
  guard(router)
  app.use(router)
}

export default router
