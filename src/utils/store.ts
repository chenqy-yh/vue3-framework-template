interface IData {
  expire?: number
  data: any
}
export default {
  set(key: string, data: any, expire?: number) {
    const cache: IData = { data }
    if (expire) {
      cache.expire = new Date().getTime() + expire * 1000
    }
    localStorage.setItem(key, JSON.stringify(cache))
  },
  asyncSet(key: string, data: any, expire?: number) {
    return new Promise((resolve, reject) => {
      try {
        resolve(this.set(key, data, expire))
      } catch (error) {
        reject(error)
      }
    })
  },
  asyncGet(key: string) {
    return new Promise((resolve, reject) => {
      try {
        resolve(this.get(key))
      } catch (error) {
        reject(error)
      }
    })
  },
  get(key: string) {
    const item = localStorage.getItem(key)
    if (item) {
      const cache: IData = JSON.parse(item)
      const expire = cache.expire
      if (expire && expire < new Date().getTime()) {
        localStorage.removeItem(key)
        return null
      }
      return cache.data
    }
    return null
  },
  remove(key: string) {
    localStorage.removeItem(key)
  },
}
