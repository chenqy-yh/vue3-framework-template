import wangEditor from 'wangeditor'

export default class {
  editor: wangEditor
  constructor(el: string, callback?: Function, config?: wangEditorConfig) {
    this.editor = new wangEditor(el)
    this.editor.config.height = config?.height!
    this.editor.config.uploadImgServer = config?.uploadImgServer!
    Object.assign(this.editor.config, config)
    this.editor.config.onchange = callback!
    this.uploadImage()
    this.editor.config.uploadImgHooks = this.uploadImage()
    this.editor.create()
    if (config?.modelValue) this.editor.txt.html(config.modelValue)
  }

  uploadImage() {
    return {
      customInsert: function (insertImgFn: any, result: any) {
        insertImgFn(result.data.url)
      },
    }
  }
}
