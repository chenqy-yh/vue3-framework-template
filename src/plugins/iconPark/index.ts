import { App } from 'vue'
import { install } from '@icon-park/vue-next/es/all'
export function setupIconPark(app: App) {
  install(app, 'i')
}
