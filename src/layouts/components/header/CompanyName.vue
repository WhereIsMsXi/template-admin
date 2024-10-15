<script setup lang="ts">
import { useSystemConfigStore } from '@/store/systemConfig';
const systemConfig = useSystemConfigStore();
console.log(systemConfig.isCollapse);

function changeIsCollapse(bool: boolean) {
  systemConfig.SET_ISCOLLAPSE(bool);
}
</script>
<template>
  <div class="content">
    <el-icon v-if="systemConfig.isCollapse" @click="changeIsCollapse(false)">
      <Fold />
    </el-icon>
    <el-icon v-else @click="changeIsCollapse(true)"><Expand /></el-icon>

    <div class="company-name">company name</div>
  </div>
</template>
<style scoped lang="scss">
.content {
  @include flex-row(flex-start, center);
  @include font-init(17px, #333, 500, 1);
  .company-name {
    margin-left: 10px;
  }
}
</style>
