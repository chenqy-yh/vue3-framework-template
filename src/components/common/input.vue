<template>
  <input class="login_input"
         :value="props.modelValue"
         @input="$emit('update:modelValue',($event.target as HTMLInputElement).value)">
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: String,
})
</script>

<style lang="scss">
.login_input {
  @apply border-2 rounded-md px-2 w-full
                 border-gray-200
                 py-1 outline-none
                 ring-offset-1
                 ring-violet-600
                 placeholder:text-xs
                 focus:ring-2
                 duration-200
                 focus:border-white;
}
</style>