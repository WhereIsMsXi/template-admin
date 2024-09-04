<script setup lang="ts">
import LayoutView from './main/LayoutView.vue';
</script>
<template>
  <el-main class="layout-main">
    <layout-view />
  </el-main>
</template>
<style scoped lang="scss">
.layout-main {
  padding: 15px;
  background-color: #f8f8f8;
  height: calc(100vh - 80px);
  width: 100%;
  overflow: hidden;
}
</style>
