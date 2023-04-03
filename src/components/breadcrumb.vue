<template>
  <div class="breadcrumb_content hidden md:block">
    <el-breadcrumb separator="/" class="flex items-center pl-[5px]">
      <el-breadcrumb-item
        class="font-bold text-[18px] cursor-pointer"
        :to="{
          name: 'admin.home',
        }"
        >首页</el-breadcrumb-item
      >
      <template v-if="route.value?.matched.length">
        <el-breadcrumb-item v-for="(item, i) of route.value.matched" class="font-bold text-[18px]">{{
          item.meta.menu?.title
        }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import menuService from '@/composables/menu'
let route = menuService.route
</script>

<style lang="scss"></style>
