<template>
  <div
    class="admin_menu"
    :class="{
      close: !menuService.showMenus.value,
    }">
    <div class="main_menu">
      <div class="menu-head cursor-pointer h-[48px]">
        <i-github theme="outline" size="34" fill="#333" />
        <p>自由の人</p>
      </div>
      <!-- 菜单 -->
      <div class="left-container">
        <dl class="menu-detail" v-for="menu in menuService.menus.value">
          <dt class="bg-gray-800" @click="menuService.showMenus.value && menuService.toggleMenuActive(menu)">
            <section>
              <component :is="menu.icon" size="20"></component>
              <span>{{ menu.title }}</span>
            </section>
            <section class="menu_list_tag">
              <i-up
                size="20"
                class="duration-200"
                :class="{
                  'rotate-180': menu.active,
                }"></i-up>
            </section>
          </dt>
          <dd :class="menu.active ? 'block' : 'hidden'">
            <div
              @click="handle($event, menu, routeItem)"
              v-if="(menu.active && menuService.showMenus.value == true) || menuService.showMenus.value == false"
              :class="routeItem?.active ? 'active' : ''"
              v-for="(routeItem, i2) in menu.children">
              {{ routeItem.title }}
            </div>
          </dd>
        </dl>
      </div>
    </div>
    <div class="bg-mask" @click="menuService.clickEmpty()"></div>
  </div>
</template>

<script setup lang="ts">
import menuService from '@/composables/menu'
import { IMenu } from '@@/types/menu'
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const routerService = useRouter()

watch(
  route,
  () => {
    menuService.setCurrentMenu(route)
  },
  {
    immediate: true,
  },
)

function handle(event: Event, menu: IMenu, menuItem?: IMenu) {
  if (menuItem) {
    routerService.push({ name: menuItem.route })
  } else {
    routerService.push({ name: menu.route })
  }
  event.stopPropagation()
}
</script>

<style lang="scss">
.admin_menu {
  .main_menu {
    @apply bg-gray-800 h-full w-[180px];
    .menu-head {
      @apply bg-white flex items-center px-[10px];
      .menu-i {
        @apply text-black text-[25px] py-[11.5px];
      }
      p {
        @apply ml-5 text-black tracking-[5px];
      }
    }
    .left-container {
      dl {
        @apply text-gray-300 text-sm relative;
        dt {
          @apply text-base flex justify-between cursor-pointer py-1 h-[40px] px-[10px];
          section {
            @apply flex items-center;
            i {
            }
            span {
              @apply ml-3;
            }
          }
        }
        dd {
          div {
            @apply h-[35px]
                        pl-[38px]
                        leading-[35px]
                        text-white
                        duration-300
                        text-base cursor-pointer hover:bg-white
                        hover:text-black
                        bg-gray-800;

            &.active {
              @apply bg-white text-black;
            }
          }
        }
      }
    }
  }
}

@media screen and (min-width: 769px) {
  .admin_menu {
    &.close {
      .main_menu {
        @apply w-auto;
        .menu-head {
          @apply flex items-center;
          p {
            @apply hidden;
          }
        }
        dl {
          @apply flex justify-center;
          dt {
            section {
              @apply w-9 flex justify-center;
              span:not(.i-icon) {
                @apply hidden;
              }
              span.i-icon {
                @apply mr-4 hover:scale-110 duration-200;
              }
            }
            .menu_list_tag {
              @apply hidden;
            }
          }
          &:hover {
            dd {
              display: block !important;
              @apply absolute left-full top-0 z-[60] w-[160px];
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .admin_menu {
    .main_menu {
      @apply h-screen w-[200px] absolute left-0 top-0 z-20;
      .left-container {
        @apply -mt-[1px];
      }
    }
    .bg-mask {
      @apply absolute top-0 left-0 w-full h-screen bg-gray-200 opacity-50 z-10;
    }
    &.close {
      @apply hidden;
    }
  }
}
</style>
