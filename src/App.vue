<script setup lang="ts">
import { getCurrentInstance, onMounted, ref, type Ref } from 'vue';
import { storeToRefs } from 'pinia';

import { useSystemConfigStore } from '@/store/systemConfig';

const { proxy } = getCurrentInstance() as any;
const { systemConfig } = storeToRefs(useSystemConfigStore());

const globalI18n: Ref<any> = ref(null);

onMounted(() => {
  globalI18n.value = proxy.$i18n.messages[systemConfig.value.i18n];
});
</script>

<template>
  <el-config-provider :locale="globalI18n">
    <router-view />
  </el-config-provider>
</template>
