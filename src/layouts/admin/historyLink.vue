<template>
  <div v-if="menuService.historyMenus.value.length > 0" class="hidden md:block bg-gray-200 p-2 shadow-md">
    <div class="flex flex-row gap-3 flex-wrap">
      <div
        class="bg-gray-50 py-2 px-3 duration-200 shadow-md cursor-pointer group flex items-center justify-between w-[165px] hover:bg-gray-800 hover:text-white"
        v-for="(historyMenu, i) in menuService.historyMenus.value">
        <router-link :to="{ name: historyMenu.route }" class="w-[80%]">
          {{ historyMenu.title }}
        </router-link>
        <i-close-small
          theme="outline"
          size="16"
          class="border-2 border-black rounded-full hover:rotate-90 duration-200 hover:bg-gray-800 hover:text-white group-hover:border-white"
          @click="historyMenu?.title && menuService.deleteHistoryMenu(historyMenu.title)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import menuService from '@/composables/menu'
</script>

<style lang="scss"></style>
