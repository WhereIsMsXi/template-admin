<script setup lang="ts">
import { useRoute } from 'vue-router';
import SubMenu from './SubMenu.vue';

interface Props {
  menus: any[];
}
const props = withDefaults(defineProps<Props>(), {
  menus: () => [],
});

const route = useRoute();
</script>
<template>
  <el-menu
    :default-active="route.path"
    router
    unique-opened
    :collapse="false"
    background-color="#545c64"
    text-color="#e5e5e5"
    active-text-color="#ffd04b"
  >
    <template v-for="item in menus" :key="item.path">
      <el-menu-item v-if="item.meta.isRoot" :index="item.path">
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
      <el-sub-menu v-else :index="item.path">
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <sub-menu :children="item.children" />
      </el-sub-menu>
    </template>
  </el-menu>
</template>
<style scoped lang="scss"></style>
