<script lang="ts" setup>
import { isLogin } from '@/utils/user'
</script>

<template>
  <div class="home_content">
    <img src="/images/head.jpg" class="index_head_img" />
    <div class="link_group">
      <router-link class="global_common_buttom link_home" :to="{ name: 'admin.home' }">后台管理</router-link>
      <router-link v-if="!isLogin()" class="global_common_buttom link_login" :to="{ name: 'auth.login' }"
        >用户登陆</router-link
      >
    </div>

    <p class="index_info">塔塔开！</p>
  </div>
</template>

<style lang="scss">
.home_content {
  @apply bg-gray-600 w-screen h-screen flex justify-center items-center flex-col;
  .index_head_img {
    @apply min-w-[14rem] w-56 h-56 object-cover rounded-full border-4 border-gray-700 shadow-2xl;
  }
  .link_group {
    @apply m-5;
    .link_login {
      @apply bg-green-700;
    }
    .index_info {
      @apply tracking-[5px] ml-5;
    }
  }
}
</style>
