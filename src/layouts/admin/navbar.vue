<template>
  <div class="navbar-content bg-gray-50 flex items-center justify-between">
    <div class="mr-1 cursor-pointer">
      <div class="flex items-center">
        <div
          class="hover:opacity-100 duration-200 border-2 rounded-sm border-gray-50 hover:border-gray-500 px-[2px] py-[1px] text-gray-500">
          <i-menu-fold
            theme="outline"
            size="24"
            v-if="menuService.showMenus.value == true"
            @click="menuService.toggleShowMenus()" />
          <i-menu-unfold theme="outline" size="24" v-else @click="menuService.toggleShowMenus()" />
        </div>

        <breadcrumb></breadcrumb>
      </div>
    </div>

    <div class="head_content">
      <div class="flex items-center">
        <notification class="mr-8"></notification>
        <component
          :is="isFullScreen ? 'i-off-screen' : 'i-full-screen'"
          theme="outline"
          size="24"
          fill="#333"
          @click="fullScreen()"
          class="hidden md:block mr-8 hover:scale-110 duration-200"></component>
        <div class="group flex items-center relative">
          <img :src="userStore.fakeInfo?.avator" />
          <span>{{ userStore.fakeInfo?.name }}</span>
          <section class="head_tag hidden group-hover:block">
            <div class="head_tag_content">
              <i-home theme="outline" :size="head_tag_size" />
              <div class="head_tag_item">网站首页</div>
            </div>

            <div class="head_tag_content">
              <i-book-one theme="outline" :size="head_tag_size" />
              <div class="head_tag_item">文档资料</div>
            </div>

            <div class="head_tag_content">
              <i-user theme="outline" :size="head_tag_size" />
              <div class="head_tag_item">个人信息</div>
            </div>
            <div class="head_tag_content" @click="userUtil.login_out()">
              <i-logout theme="outline" :size="head_tag_size" />
              <div class="head_tag_item">退出登陆</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import user from '@/store/userStore'
import { user as userUtil } from '@/utils'
import menuService from '@/composables/menu'
import screenfull from 'screenfull'

const userStore = user()
// 控制头部标签的大小
const head_tag_size = ref(18)
// 控制页面全屏
const isFullScreen = ref(false)

onMounted(() => {
  screenFullInit()
  window.addEventListener('keydown', keyDown, true)
})

const keyDown = (e: KeyboardEvent) => {
  if (e.key == 'F11' || e.key == 'ESC') {
    e.stopPropagation()
    e.preventDefault()
    fullScreen()
  }
}

const screenFullInit = () => {
  if (screenfull.isEnabled) {
    screenfull.on('change', change)
  }
}

const change = () => {
  isFullScreen.value = screenfull.isFullscreen
}

function fullScreen() {
  screenfull.toggle()
}
</script>

<style lang="scss">
.navbar-content {
  @apply bg-gray-50 px-2 py-2 flex justify-between items-center;
  .el-breadcrumb__inner {
    @apply text-black;
  }
  .head_content {
    @apply flex justify-center items-center
      relative cursor-pointer;
    img {
      @apply w-8 h-8 rounded-full object-cover;
    }
    span {
      @apply ml-2 text-[13px] font-[600] cursor-pointer group-hover:block;
    }
    .head_tag {
      z-index: 1000 !important;
      @apply absolute top-full right-0 shadow-md overflow-hidden whitespace-nowrap bg-gray-50 hidden;
      .head_tag_content {
        @apply flex items-center cursor-pointer justify-between hover:bg-black hover:text-white;
        .head_tag_item {
          @apply w-[90px] text-center text-[13px] py-[5px] tracking-[3px];
        }
      }
    }
  }
}
</style>
