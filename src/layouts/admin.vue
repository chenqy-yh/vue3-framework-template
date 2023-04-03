<template>
  <div class="admin min-h-screen w-screen md:grid md:grid-cols-[auto_1fr]">
    <MenuComponent></MenuComponent>

    <div class="content grid grid-rows-[auto_1fr] z-0">
      <div class="z-1">
        <navbar class="z-2"></navbar>
        <historyLink class="mt-3 mx-3 z-2"></historyLink>
      </div>
      <div class="admin-main-content m-3 overflow-y-auto relative z-1">
        <router-view #default="{ Component }" class="z-2">
          <Transition
            appear
            class="animate__animated"
            :enter-active-class="'animate__zoomIn'"
            :leave-active-class="'animate__zoomOut'">
            <component :is="Component" class="w-full absolute"> </component>
          </Transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.admin {
  @apply w-full flex;
  .content {
    @apply flex-1 bg-gray-300 overflow-x-hidden;
    .animate__zoomIn {
      animation-duration: 0.3s;
    }
    .animate__zoomOut {
      animation-duration: 0.3s;
    }

    .admin-main-content::-webkit-scrollbar {
      width: 0px;
    }
  }
}
</style>

<script lang="ts">
export default {
  route: {
    meta: {
      auth: true,
    },
  },
}
</script>

<script setup lang="ts">
import menuService from '@/composables/menu'
import historyLink from './admin/historyLink.vue'
import MenuComponent from './admin/menu.vue'
import navbar from './admin/navbar.vue'
const route = useRoute()

watch(
  route,
  (to) => {
    menuService.addHistoryMenus(to)
  },
  {
    immediate: true,
  },
)
</script>
