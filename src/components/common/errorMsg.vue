<template>
  <div class="text-red-500">{{ props.errors }}</div>
</template>

<script setup lang="ts">
const props = defineProps({
  errors: String,
})
</script>

<style lang="scss"></style>
