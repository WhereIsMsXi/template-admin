<script setup lang="ts">
// import MongooseJpg from '@/assets/mongoose.jpg';
</script>
<template>
  <div class="logo">
    <!-- <img class="logo__img" :src="MongooseJpg" /> -->
    <span class="logo__txt">TemplateAdmin</span>
  </div>
</template>
<style scoped lang="scss">
.logo {
  @include flex-row(center, center);
  width: 100%;
  height: 70px;
  &__img {
    width: 30px;
    height: 30px;
    border-radius: 5px;
  }
  &__txt {
    @include font-init(18px, #fff, 400, 1);
    margin-left: 8px;
  }
}
</style>
