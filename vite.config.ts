import { ConfigEnv, loadEnv } from 'vite'
import alias from './vite/alias'
import { setupPlugins } from './vite/plugins'
import { parseEnv } from './vite/util'
import { visualizer } from 'rollup-plugin-visualizer'

export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command === 'serve'
  const root = process.cwd()
  const env: ImportMetaEnv = parseEnv(loadEnv(mode, root) as unknown as ImportMetaEnv)
  env.VITE_MOCK_ENABLE
  return {
    plugins: [...setupPlugins(isBuild, env), visualizer()],
    resolve: {
      alias,
    },
    build: {
      rollupOptions: {
        emptyOutDir: true,
        output: {
          manualChunks(id: string) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          },
        },
      },
    },
    server: {
      proxy: {
        '/api': {
          //将 /api 访问替换为target
          target: env.VITE_API_URL,
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, ''),
        },
      },
    },
  }
}
