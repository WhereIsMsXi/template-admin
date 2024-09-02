<script setup lang="ts">
import CompanyName from './CompanyName.vue';
</script>
<template>
  <div class="navition-bar">
    <company-name />
  </div>
</template>
<style scoped lang="scss">
.navition-bar {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
  padding: 0 17px;
}
</style>
