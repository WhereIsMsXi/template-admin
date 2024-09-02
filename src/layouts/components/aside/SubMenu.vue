<script setup lang="ts">
interface Props {
  children: any[];
}
const props = withDefaults(defineProps<Props>(), {
  children: () => [],
});
</script>
<template>
  <template v-for="item in children" :key="item.path">
    <el-menu-item v-if="!item.meta.hide" :index="item.path">
      <el-icon>
        <Watermelon v-if="item.meta.icon === 'Watermelon'" />
      </el-icon>
      <span>
        {{ item.meta.title }}
      </span>
    </el-menu-item>
  </template>
</template>
