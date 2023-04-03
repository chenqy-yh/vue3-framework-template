<template>
  <div style="position: relative">
    <el-tabs v-model="activeName" type="card" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="所有" name="0"></el-tab-pane>
      <el-tab-pane label="热销" name="1"></el-tab-pane>
      <el-tab-pane label="秒杀" name="2"></el-tab-pane>
    </el-tabs>
    <div style="position: absolute; right: 40px; top: 4px">
      <span>新建</span>
      <span>管理</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const activeName = ref('0')
const handleClick = (tab: any, event: any) => {}
</script>

<style lang="scss"></style>
