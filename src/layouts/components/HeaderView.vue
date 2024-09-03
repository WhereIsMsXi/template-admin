<script setup lang="ts">
import NavitionBar from './header/NavitionBar.vue';
import TabsView from './header/TabsView.vue';
</script>
<template>
  <div class="layout-header">
    <navition-bar />

    <tabs-view />
  </div>
</template>
<style scoped lang="scss">
.layout-header {
  height: 80px;
}
</style>
