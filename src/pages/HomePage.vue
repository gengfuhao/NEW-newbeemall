<template>
  <div class="content-container">
    <cate-item></cate-item>
    <sub-banner />
    <ul-container></ul-container>
  </div>
</template>

<script>
import CateItem from "../components/category/CateItem.vue";
import UlContainer from "../components/goodsList/UlContainer.vue";
import SubBanner from "../components/goodsList/SubBanner.vue";

export default {
  components: { UlContainer, SubBanner, CateItem },
};
</script>

<style scoped>
.content-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
