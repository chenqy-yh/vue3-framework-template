import UploadAPI from '@/apis/upload'
import Editor from '@toast-ui/editor'

export default class {
  public editor: Editor
  private isFullScreen: boolean = false
  constructor(el: string, initialValue: string, public height: string) {
    this.editor = new Editor({
      el: document.querySelector(el)!,
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      height: height,
      initialValue: initialValue,
      toolbarItems: this.customizeToolbar() as [],
    })
    this.imageHook()
  }
  private customizeToolbar() {
    return [
      ['heading', 'bold', 'italic', 'strike'],
      ['hr', 'quote'],
      ['ul', 'ol', 'task', 'indent', 'outdent'],
      ['table', 'image', 'link'],
      ['code', 'codeblock'],
      [
        {
          el: this.fullScreen(),
          command: 'fullscreen',
          tooltip: 'fullscreen',
        },
      ],
    ]
  }
  private fullScreen() {
    const button = document.createElement('button')
    button.className = 'full-screen-button'
    button.innerHTML = 'Full'
    button.style.margin = '0'
    button.addEventListener('click', () => {
      const UiEl = document.querySelector('.toastui-editor-defaultUI')
      UiEl?.classList.toggle('fullScreen')
      if (!this.isFullScreen) {
        this.editor.setHeight('100vh')
      } else {
        this.editor.setHeight(this.height)
      }
      this.isFullScreen = !this.isFullScreen
    })
    document.documentElement.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isFullScreen) {
        const UiEl = document.querySelector('.toastui-editor-defaultUI')
        UiEl?.classList.toggle('fullScreen')
        this.editor.setHeight(this.height)
        this.isFullScreen = !this.isFullScreen
      }
    })
    return button
  }

  private imageHook() {
    this.editor.removeHook('addImageBlobHook')
    this.editor.addHook('addImageBlobHook', async (blob, callback) => {
      const form = new FormData()
      form.append('file', blob, blob.name)
      const res = await UploadAPI.upload(form)

      callback(res.data.url, blob.name)
    })
  }
}
