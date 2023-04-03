<template>
  <div class="notification relative w-6 h-6">
    <component
      :is="listState ? 'i-mail-open' : 'i-mail'"
      size="24"
      fill="#333"
      class="absolute top-0 left-0 hover:scale-110 duration-200"
      @click.stop="listState = !listState"></component>
    <el-tabs v-model="activeName" class="list" v-show="listState" @click.stop>
      <el-tab-pane label="系统通知" name="site">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor ipsa, mollitia nulla quos rerum vero placeat
          natus assumenda numquam delectus aliquam. Et ratione nostrum expedita, mollitia laborum suscipit cumque
          necessitatibus?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor ipsa, mollitia nulla quos rerum vero placeat
          natus assumenda numquam delectus aliquam. Et ratione nostrum expedita, mollitia laborum suscipit cumque
          necessitatibus?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor ipsa, mollitia nulla quos rerum vero placeat
          natus assumenda numquam delectus aliquam. Et ratione nostrum expedita, mollitia laborum suscipit cumque
          necessitatibus?
        </p>
      </el-tab-pane>
      <el-tab-pane label="站内消息" name="message">站内消息</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue'
const activeName = ref('site')
const listState = ref(false)

nextTick(() => {
  document.documentElement.addEventListener('click', () => {
    listState.value = false
  })
})
</script>
<style lang="scss">
.notification {
  @apply relative;
  .list {
    z-index: 1000 !important;
    @apply absolute bg-white p-5 border rounded-md shadow-md
  right-[-5rem] top-[3rem] w-72 text-xs;
    p {
      @apply truncate overflow-hidden pb-3 mb-3 hover:text-violet-600;
    }
  }
}

@media screen and (max-width: 768px) {
  .notification {
    .list {
      @apply top-[8vh] left-[10vw]
      w-[80vw] h-[80vh]
      fixed;
    }
  }
}
</style>
