<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useDynamicRouteStore } from '@/store/dynamicRoute';
import LogoView from '../logo/LogoView.vue';
import VerticalAside from './aside/VerticalAside.vue';

const stores = useDynamicRouteStore();
const { menus } = storeToRefs(stores);
</script>
<template>
  <div class="h100">
    <el-aside class="layout-aside">
      <logo-view />
      <el-scrollbar class="flex-auto">
        <vertical-aside :menus="menus" />
      </el-scrollbar>
    </el-aside>
  </div>
</template>
<style scoped lang="scss">
.h100 {
  height: 100%;

  .layout-aside {
    width: 220px;
    background-color: #545c64;
    box-shadow: 2px 0 6px rgb(0 21 41 / 1%);
    overflow: hidden;

    .flex-auto {
      .item {
        width: 100%;
        height: 500px;
      }
    }
  }
}
</style>
