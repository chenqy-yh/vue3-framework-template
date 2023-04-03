/// <reference types="vite/client" />

import {} from '@vee-validate/i18n/dist/locale/zh_CN.json'

export interface ImportMetaEnv {
  readonly VITE_ROUTER_AUTOLOAD: boolean
  readonly VITE_API_URL: string
  readonly VITE_LOGIN_EXPIRE: number
  readonly VITE_MOCK_ENABLE: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
