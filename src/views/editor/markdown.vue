<template>
  <div>
    <markdown-editor v-model="content"></markdown-editor>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const content = ref('aaaaaa')
</script>

<style lang="scss"></style>
