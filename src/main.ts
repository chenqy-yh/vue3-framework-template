import { createApp } from 'vue'

//css
import '@/style.css'
import '@/style/global.scss'

import App from './App.vue'
//router
import router, { setupRouter } from '@/router/index'

//plugins
import { setupPlugins } from '@/plugins/index'

async function bootstrap() {
  const app = createApp(App)
  setupPlugins(app)
  await setupRouter(app)
  //等待路由完全挂载后 再加载app组件
  await router.isReady()
  app.mount('#app')
}

bootstrap()
