import { http } from '@/plugins/axios/index'

export interface User {
  name: string
  age: number
  sex: string
  avator: string
  permissions: string[]
}
interface LoginToken {
  token: string
}

export interface LoginForm {
  account: string
  password: string
}

class UserAPI {
  async info() {
    return await http.request<User>({
      url: '/user/info',
    })
  }
  login(data: any) {
    return http.request<LoginToken>({
      url: '/login',
      method: 'post',
      data,
    })
  }
}

export default new UserAPI()
