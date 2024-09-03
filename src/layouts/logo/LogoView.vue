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
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  &__img {
    width: 30px;
    height: 30px;
    border-radius: 5px;
  }
  &__txt {
    font-size: 18px;
    color: #fff;
    margin-left: 8px;
  }
}
</style>
