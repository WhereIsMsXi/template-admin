<script setup lang="ts">
import { computed, onBeforeMount, onUnmounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useDynamicRouteStore } from '@/store/dynamicRoute';
import { useSystemConfigStore } from '@/store/systemConfig';
import LogoView from '../logo/LogoView.vue';
import VerticalAside from './aside/VerticalAside.vue';

const systemConfigStore = useSystemConfigStore();
const { isCollapse } = storeToRefs(systemConfigStore);
const { SET_ISCOLLAPSE } = systemConfigStore;

const setCollapseStyle = computed(() => {
  if (isCollapse.value) {
    return 'hide-aside';
  }
  return '';
});

const onLayoutResize = () => {
  const clientWidth = document.body.clientWidth;
  SET_ISCOLLAPSE(false);
  if (clientWidth < 1000) {
    SET_ISCOLLAPSE(true);
  }
};

onBeforeMount(() => {
  onLayoutResize();
  window.addEventListener('resize', onLayoutResize);
});
// 页面卸载时
onUnmounted(() => {
  window.removeEventListener('resize', onLayoutResize);
});

const dynamicRouteStore = useDynamicRouteStore();
const { menus } = storeToRefs(dynamicRouteStore);
</script>
<template>
  <div class="h100">
    <el-aside class="layout-aside" :class="setCollapseStyle">
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
    position: fixed;
    top: 0;
    z-index: 9999;

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
    &.hide-aside {
      left: -220px;
      transition: all 0.3s cubic-bezier(0.39, 0.58, 0.57, 1);
    }
  }
}
</style>
