import { cacheEnum } from '@/enum/cacheEnum'
import { store } from '@/utils'
import { RouteLocationNormalized, Router } from 'vue-router'

class Guard {
  constructor(private router: Router) {}
  public run() {
    this.router.beforeEach(this.beforeEach.bind(this))
  }

  private async beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
    if (to.meta.auth && !this.token()) return { name: 'login' }
    if (to.meta.guest && this.token()) return from
  }

  private token() {
    return store.get(cacheEnum.LOGIN_TOKEN)?.token
  }
}

export default (router: Router) => {
  new Guard(router).run()
}
