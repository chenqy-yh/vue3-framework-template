<template>
  <div>
    <wang-editor v-model="content"></wang-editor>
    <div>
      {{ content }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let content = ref('<p>this is wang editor</p>')
</script>

<style lang="scss"></style>
