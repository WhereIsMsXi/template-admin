<script setup lang="ts">
import LayoutView from './main/LayoutView.vue';
</script>
<template>
  <el-main class="layout-main">
    <el-scrollbar>
      <layout-view />
    </el-scrollbar>
  </el-main>
</template>
<style scoped lang="scss">
.layout-main {
  padding: 15px;
  background-color: #f8f8f8;
  width: 100%;
  overflow: hidden;
}
</style>
