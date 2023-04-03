import { cacheEnum } from '@/enum/cacheEnum'
import axios, { AxiosRequestConfig } from 'axios'
import store from '@/utils/store'
import router from '@/router'

export default class Axios {
  private instance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
  }
  public request<T, D = ResponseResult<T>>(config: AxiosRequestConfig): Promise<D> {
    return new Promise(async (res, rej) => {
      try {
        const result = await this.instance.request<D>(config)
        res(result.data)
      } catch (error) {
        rej(error)
      }
    })
  }

  private interceptors() {
    this.interceptorsRequest()
    this.interceptorsResponse()
  }

  private interceptorsRequest() {
    this.instance.interceptors.request.use(
      (cfg) => {
        // 在发送请求之前做些什么
        Object.assign(cfg.headers, {
          Authorization: 'Bearer ' + store.get(cacheEnum.TOKEN_NAME),
        })
        return cfg
      },
      (err) => {
        // 对请求错误做些什么
        return Promise.reject(err)
      },
    )
  }
  private interceptorsResponse() {
    this.instance.interceptors.response.use(
      (res) => {
        return res
      },
      (err) => {
        switch (err.response.status) {
          case 401:
            store.remove(cacheEnum.TOKEN_NAME)
            router.push({ name: 'login' })
            break
        }
        return Promise.reject(err)
      },
    )
  }
}
