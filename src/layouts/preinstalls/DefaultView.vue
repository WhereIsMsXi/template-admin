<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import AsideView from '../components/AsideView.vue';
import HeaderView from '../components/HeaderView.vue';
import MainView from '../components/MainView.vue';
import { useSystemConfigStore } from '@/store/systemConfig';

const systemConfigStore = useSystemConfigStore();
const { isCollapse } = storeToRefs(systemConfigStore);
const { SET_ISCOLLAPSE } = systemConfigStore;
</script>
<template>
  <el-container class="layout-container" style="height: 100%">
    <aside-view />
    <el-container class="flex-col">
      <header-view />

      <main-view />
    </el-container>

    <div
      v-if="!isCollapse"
      class="layout-aside-mobile-mask"
      @click="SET_ISCOLLAPSE(true)"
    ></div>
  </el-container>
</template>
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
    @include flex-column(flex-start, space-between);
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .layout-aside-mobile-mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9998;
  }
}
</style>
