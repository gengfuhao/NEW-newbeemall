<template>
  <div class="content-container">
    <banner-com></banner-com>
    <sub-banner />
    <ul-container></ul-container>
  </div>
</template>

<script>
import UlContainer from "../components/goodsList/UlContainer.vue";
import SubBanner from "../components/goodsList/SubBanner.vue";
import BannerCom from "../components/banner/BannerCom.vue";

export default {
  components: { UlContainer, SubBanner, BannerCom },
};
</script>

<style scoped>
.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
