import { MockMethod } from 'vite-plugin-mock'
import { Random } from 'mockjs'

export default [
  {
    url: '/api/user/info',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'get data success',
        status: 'success',
        data: {
          name: '自由の人',
          age: 18,
          sex: 'man',
          avator: '/images/head.jpg',
          permissions: ['editor_markdown'],
        },
      }
    },
  },
  {
    url: '/api/login',
    method: 'post',
    response: () => {
      return {
        code: 0,
        message: 'login success',
        status: 'success',
        data: {
          token: Random.string(10),
        },
      }
    },
  },
  {
    url: '/api/upload/image',
    method: 'post',
    response: () => {
      return {
        code: 200,
        errno: 0,
        message: 'upload success',
        status: 'success',
        data: {
          url: '/images/head.jpg',
        },
      }
    },
  },
] as MockMethod[]
