// declare class wangEditor {
//   config: wangEditorConfig
//   constructor(el: string)
//   create: function
//   txt: {
//     html: (htmlTxt: string) => void
//   }
// }

interface wangEditorConfig {
  height?: number
  modelValue?: string
  onchange?: Function
  customUploadImg?: (resultFiles: any, insertImgFn: any) => void
  uploadImgHooks?: any
  uploadImgServer?: string
}
