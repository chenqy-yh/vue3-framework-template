import { http } from '@/plugins/axios/index'

export interface article {
  id: number
  title: string
  content: string
}

class ArticleAPI {
  getArticle() {
    return http.request<article[]>({
      url: '/article',
    })
  }
}

export default new ArticleAPI()
