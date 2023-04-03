<template>
  <div class="wang-d">
    <div id="wangEditor"></div>
  </div>
</template>
<script lang="ts">
export default {
  // name: 'wang-tt-editor',
}
</script>

<script setup lang="ts">
import { nextTick } from 'vue'
import WangEditor from './wang'

interface EditorProps {
  height?: number
  modelValue?: string
  uploadImgServer?: string
}

const props = withDefaults(defineProps<EditorProps>(), {
  height: 100,
  modelValue: '123',
  uploadImgServer: '/api/upload/image',
})
const emit = defineEmits(['update:modelValue'])

nextTick(() => {
  new WangEditor(
    '#wangEditor',
    (newHtml: any) => {
      emit('update:modelValue', newHtml)
    },
    props,
  )
})
</script>

<style lang="scss"></style>
