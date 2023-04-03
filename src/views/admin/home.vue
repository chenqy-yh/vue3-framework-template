<script setup lang="ts">
import { reactive, nextTick } from 'vue'
import { echart1, echart2 } from '@/layouts/admin/echarts'
import * as echarts from 'echarts'

interface ICard {
  title: string
  price: number
  icon: string
  peopleCount: number
}

const data = reactive<ICard[]>([
  {
    title: '用户数',
    price: 29322,
    icon: 'fab fa-amazon-pay',
    peopleCount: 200,
  },
  {
    title: '销售额',
    price: 42142,
    icon: 'fab fa-airbnb',
    peopleCount: 23,
  },
  {
    title: '订单数',
    price: 2545,
    icon: 'fab fa-accusoft',
    peopleCount: 1220,
  },
  {
    title: '成交量',
    price: 32,
    icon: 'fab fa-affiliatetheme',
    peopleCount: 122,
  },
])

// echarts
nextTick(() => {
  echarts.init(document.getElementById('echart1') as HTMLDivElement).setOption(echart1)
  // 使用刚指定的配置项和数据显示图表。
  echarts.init(document.getElementById('echart2') as HTMLDivElement).setOption(echart2)
})
</script>

<template>
  <div class="flex flex-col">
    <div class="grid grid-flow-row md:grid-cols-4 gap-3 bg-gray-200 p-3">
      <el-card class="cursor-pointer" v-for="(item, i1) in data" shadow="always" :body-style="{ padding: '20px' }">
        <template #header class="">
          <div class="flex justify-between items-center text-lg">
            {{ item.title }}
            <el-tag class="ml-2" type="danger" size="small" effect="dark">月</el-tag>
          </div>
        </template>
        <!-- card body -->
        <section class="flex items-start justify-between">
          <span class="text-2xl mr-[7px] font-bold">${{ item.price }}</span>
          <i :class="item.icon" class="text-violet-500 text-3xl"></i>
        </section>
        <section class="flex items-center justify-between mt-1">
          <span class="text-md">总人数</span>
          <span class="text-md">{{ item.peopleCount }}人</span>
        </section>
      </el-card>
    </div>
    <!-- echarts -->
    <div class="px-3 bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-3 pb-3">
      <el-card shadow="always" :body-style="{ padding: '20px' }">
        <template #header>
          <div>
            <span>用户统计</span>
          </div>
        </template>
        <div id="echart1" class="bg-white p-1 w-full h-72"></div>
      </el-card>

      <el-card shadow="always" :body-style="{ padding: '20px' }">
        <template #header>
          <div>
            <span>销售统计</span>
          </div>
        </template>
        <div id="echart2" class="bg-white p-1 w-full h-72"></div>
      </el-card>
    </div>
  </div>
</template>

<style lang="scss">
.el-card ::v-deep .el-card_header {
  background-color: red !important ;
}

.el-card ::v-deep .el-card_body {
  // background-color:#f9fafb ;
  background-color: red !important;
}
</style>
