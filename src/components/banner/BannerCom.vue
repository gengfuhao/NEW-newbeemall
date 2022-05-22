<template>
  <div id="banner">
    <CateItem class="cate"></CateItem>
    <swiper-container class="swiper"></swiper-container>
  </div>
</template>

<script>
import SwiperContainer from "./SwiperContainer.vue";
import CateItem from "../category/CateItem.vue";
export default {
  components: { CateItem, SwiperContainer },
};
</script>

<style>
#banner {
  width: 1226px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
}
</style>
