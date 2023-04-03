<template>
  <div style="border: 1px solid #ccc">
    <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" />
    <Editor
      @onChange="handleChange"
      style="height: 500px; overflow-y: hidden"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated" />
  </div>
</template>

<script lang="ts" setup>
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import editor from '@/router/module/editor'
import { ApiEnum } from '@/enum/uploadEnum'

interface wangEditorProps {
  modelValue: any
}
// 对外属性
const props = withDefaults(defineProps<wangEditorProps>(), {
  modelValue: 'hello',
})
const mode = ref('default')
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()
// 内容 HTML
const valueHtml = ref(props.modelValue)

const emit = defineEmits(['update:modelValue'])
const toolbarConfig = {}
const editorConfig = {
  placeholder: '请输入内容...',
  MENU_CONF: {
    uploadImage: {
      server: ApiEnum.UPLOAD_IMAGE_URL,
    },
  },
}

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor: any) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

// editorRef.addEventListener('keydown', () => {

// })

const handleChange = () => {
  emit('update:modelValue', valueHtml.value)
}
</script>

<style lang="scss"></style>
