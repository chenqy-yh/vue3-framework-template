import { setupPinia } from '@/plugins/pinia'
import { App } from 'vue'
import { setupElementUI } from '@/plugins/elementui'
import { setupTaiwindcss } from '@/plugins/tailwindcss/index'
import { setupFontAwesome } from './fontAwesome'
import { setupAnimateCss } from './animatecss'
import { setupToastUI } from './toastUI'
import { setupIconPark } from './iconPark'

export function setupPlugins(app: App<Element>) {
  setupTaiwindcss()
  // autoRegisterComponent(app)
  setupElementUI(app)
  setupPinia(app)
  setupFontAwesome()
  setupAnimateCss()
  setupToastUI()
  setupIconPark(app)
}

function autoRegisterComponent(app: App<Element>) {
  const components = import.meta.glob('../components/**/*.vue', { eager: true })
  Object.entries(components).forEach(([file, module]: [string, any]) => {
    const name = file.replace(/.+\/|\.vue/gi, '')
    app.component(name, module.default)
  })
}
