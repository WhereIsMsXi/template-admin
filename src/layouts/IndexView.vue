<script setup lang="ts">
import { markRaw, ref } from 'vue';
import DefaultView from './preinstalls/DefaultView.vue';

const preinstall = ref(markRaw(DefaultView));
</script>
<template>
  <component :is="preinstall" />
</template>
