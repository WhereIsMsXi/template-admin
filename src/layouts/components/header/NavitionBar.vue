<script setup lang="ts">
import CompanyName from './CompanyName.vue';
import UserAndExtend from './UserAndExtend.vue';
</script>
<template>
  <div class="navition-bar">
    <company-name />

    <user-and-extend />
  </div>
</template>
<style scoped lang="scss">
.navition-bar {
  @include flex-row(space-between, center);
  height: 50px;
  border-bottom: 1px solid #f1f1f1;
  padding: 0 17px;
}
</style>
