import { cacheEnum } from '@/enum/cacheEnum'
import Axios from './Axios'
import store from '@/utils/store'
const http = new Axios({
  baseURL: '/api',
  timeout: 10000,
  headers: {},
})

export { http }
