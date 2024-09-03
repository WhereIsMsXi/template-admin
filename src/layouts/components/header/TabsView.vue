<script setup lang="ts">
import { computed, onBeforeMount, watch } from 'vue';
import { useRoute, useRouter, type RouteRecordRaw } from 'vue-router';

import { useTabsStore } from '@/store/tabs';
import { useDynamicRouteStore } from '@/store/dynamicRoute';

const store = useTabsStore();

function initTabs() {
  const { tabs } = store;
  if (tabs.length === 0) {
    tabs.value = store.getAffixTab();
    store.SET_TABS(tabs.value);
  }
}

onBeforeMount(() => {
  initTabs();
});

const route = useRoute();
const router = useRouter();
function isActive(item: RouteRecordRaw) {
  if (store.tabs.map((i: RouteRecordRaw) => i.path).includes(route.path)) {
    return item.path === (route.meta.activeMenu || route.path);
  }

  const { authTabs } = useDynamicRouteStore();
  const hideMenuItem = authTabs.find(
    (i: RouteRecordRaw) => i.path === route.path,
  );

  if (!hideMenuItem) return false;

  return item.path === hideMenuItem.meta?.activeMenu;
}

function updateTabs(newVal: string) {
  const { authTabs } = useDynamicRouteStore();
  const currentAuthTab = authTabs.find(
    (i: RouteRecordRaw) => i.path === newVal,
  );
  if (currentAuthTab) {
    const { hide, activeMenu } = currentAuthTab.meta as any;
    if (!currentTab.value && !hide && !activeMenu) {
      store.ADD_TAB(newVal);
    }
    return;
  }
  router.push('/404');
}

const currentTab = computed(() =>
  store.tabs.find((i: any) => i.path === route.path),
);

watch(
  () => route.path,
  (newVal, oldVal) => {
    updateTabs(newVal);
  },
);

function tabClick(route: any) {
  router.push(route.path);
}
function tabClose(route: RouteRecordRaw) {
  const index = store.DEL_TAB(route.path);
  // 关闭当前 tabs
  if (route.path === currentTab.value.path) {
    const prevTab = store.getPrevTab(index);
    router.push(prevTab.path);
  }
}
</script>
<template>
  <div class="tabs">
    <el-scrollbar ref="scrollbarRef">
      <ul class="tabs__content">
        <li
          v-for="(item, index) in store.tabs"
          :key="index"
          class="tabs__item"
          :class="{ 'is-active': isActive(item) }"
          @click="tabClick(item)"
        >
          <span>{{ item.meta.title }}</span>
          <el-icon
            v-if="!item.meta.isAffix"
            size="15"
            @click.stop="tabClose(item)"
            ><Close
          /></el-icon>
        </li>
      </ul>
    </el-scrollbar>
  </div>
</template>
<style scoped lang="scss">
.tabs {
  border-bottom: 1px solid #f1f1f1;
  &__content {
    height: 34px;
    display: flex;
    align-items: flex-end;
    padding: 0 10px;
    font-size: 12px;
    color: #606266;
    white-space: nowrap;
    margin: 0;
    list-style: none;
  }
  &__item {
    padding: 0 5px;
    border-width: 15px 27px 15px;
    border-style: solid;
    border-color: transparent;
    margin: 0 -15px;

    height: 26px;
    line-height: 26px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;
    &:hover {
      background-color: #ebf5ff;
      -webkit-mask-box-image: url("data:image/svg+xml,%3Csvg width='68' height='34' viewBox='0 0 68 34' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='m27,0c-7.99582,0 -11.95105,0.00205 -12,12l0,6c0,8.284 -0.48549,16.49691 -8.76949,16.49691l54.37857,-0.11145c-8.284,0 -8.60908,-8.10146 -8.60908,-16.38546l0,-6c0.11145,-12.08445 -4.38441,-12 -12,-12l-13,0z' fill='%23409eff'/%3E%3C/svg%3E")
        12 27 15;
    }
    .el-icon {
      position: relative;
      right: -5px;
      padding: 1px;
      &:hover {
        border-radius: 50%;
        color: #fff;
        background-color: #409eff;
      }
    }
    &.is-active {
      color: #409eff;
      background-color: #ebf5ff;
      -webkit-mask-box-image: url("data:image/svg+xml,%3Csvg width='68' height='34' viewBox='0 0 68 34' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='m27,0c-7.99582,0 -11.95105,0.00205 -12,12l0,6c0,8.284 -0.48549,16.49691 -8.76949,16.49691l54.37857,-0.11145c-8.284,0 -8.60908,-8.10146 -8.60908,-16.38546l0,-6c0.11145,-12.08445 -4.38441,-12 -12,-12l-13,0z' fill='%23409eff'/%3E%3C/svg%3E")
        12 27 15;
    }
  }
}
</style>
