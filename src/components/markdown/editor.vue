<template>
  <div id="markdownEditor"></div>
</template>

<script lang="ts">
export default {
  // name: 'markdown-tt-editor',
}
</script>

<script setup lang="ts">
import Editor from '@/components/markdown/toastEditor'
import { nextTick } from 'process'
interface IProps {
  modelValue?: string
  height?: number
  content?: string
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: 'abc',
  height: 300,
  content: 'please input content',
})

const emit = defineEmits(['update:modelValue'])

nextTick(() => {
  const toastUi = new Editor('#markdownEditor', props.modelValue, props.height + 'px')
  toastUi.editor.on('change', (type: string) => {
    emit('update:modelValue', toastUi.editor['markdown' == type ? 'getMarkdown' : 'getHTML']())
  })
})
</script>

<style lang="scss">
@import 'https://uicdn.toast.com/editor/latest/toastui-editor.min.css';
#markdownEditor {
  @apply bg-gray-50;
  .toastui-editor-mode-switch {
    display: none !important;
  }
  .fullScreen {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background-color: white;
  }
}
</style>
