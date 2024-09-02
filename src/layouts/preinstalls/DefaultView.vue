<template>
  <el-container class="layout-container" style="height: 100%">
    <aside-view />
    <el-container class="flex-col">
      <header-view />
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import AsideView from '../components/AsideView.vue';
import HeaderView from '../components/HeaderView.vue';
</script>

<style scoped lang="scss">
.layout-container {
  ::v-deep(.el-aside) {
    height: 100%;
    background-color: #545c64;
    .el-menu {
      border-right: none;
    }
  }
  .flex-col {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
}
</style>
