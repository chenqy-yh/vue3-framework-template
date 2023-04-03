import { http } from '@/plugins/axios/index'

interface Image {
  url: string
}

class UploadAPI {
  upload(data: FormData) {
    return http.request<Image>({
      url: '/upload/image',
      method: 'post',
      data,
    })
  }
}

export default new UploadAPI()
