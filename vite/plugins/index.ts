import vue from '@vitejs/plugin-vue'
import { Plugin } from 'vite'
import { setupMockPlugin } from './mockjs'
import { setupElementPlusPlugin } from './elementplus'
import {} from ''
export function setupPlugins(isBuild: boolean, env: ImportMetaEnv) {
  const plugins: Plugin[] = [vue()]
  plugins.push(setupMockPlugin(isBuild))
  setupElementPlusPlugin(plugins)
  return plugins
}
