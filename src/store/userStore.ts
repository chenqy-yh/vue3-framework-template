import { defineStore } from 'pinia'
import UserAPI, { User } from '@/apis/user'

export default defineStore('user', {
  state: () => {
    return {
      info: {} as null | User,
      fakeInfo: {
        name: '自由の人',
        age: 18,
        sex: 'man',
        avator: '/images/head.jpg',
        permissions: ['editor_markdown', 'editor_rich'],
        // permissions: ['abc'],
      } as User,
    }
  },
  getters: {
    getInfo(): null | User {
      return this.info
    },
  },
  actions: {
    async getUserInfo() {
      const res = await UserAPI.info()
      this.info = res.data
      return res.data
    },
  },
})
