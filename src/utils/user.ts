import store from '@/utils/store'
import { cacheEnum } from '@/enum/cacheEnum'
import UserAPI from '@/apis/user'
import router from '@/router'
import { env } from '@/utils'
import { LoginForm } from '@/apis/user'
import userStore from '@/store/userStore'

const login_out = () => {
  store.remove(cacheEnum.LOGIN_TOKEN)
  userStore().info = null
  router.push({ name: 'home' })
}

const isLogin = () => {
  return Boolean(store.get(cacheEnum.LOGIN_TOKEN))
}

const login = async (val: LoginForm) => {
  const { data: res } = await UserAPI.login(val)
  store.set(
    cacheEnum.LOGIN_TOKEN,
    {
      token: res.token,
    },
    env.VITE_LOGIN_EXPIRE,
  )
  userStore().getUserInfo()
  const redirect_route_name = store.get(cacheEnum.REDIRECT_ROUTE_NAME)
  router.push({ name: redirect_route_name ?? 'home' })
}

export { isLogin, login_out, login }
