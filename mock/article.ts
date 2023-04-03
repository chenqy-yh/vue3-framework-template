import { MockMethod } from 'vite-plugin-mock'
import { Random } from 'mockjs'

export default [
  {
    url: '/api/article',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'get data success',
        status: 'success',
        data: new Array(10).fill(undefined).map((article, index) => {
          return {
            id: index,
            title: Random.ctitle(10),
            content: Random.cparagraph(10),
          }
        }),
      }
    },
  },
] as MockMethod[]
