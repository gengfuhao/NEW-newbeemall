<template>
  <div class="content-container">
    <div><SubBanner /></div>
    <div><ul-container></ul-container></div>
  </div>
</template>

<script>
import UlContainer from "./UlContainer.vue";
import SubBanner from "./SubBanner.vue";
export default {
  components: { UlContainer, SubBanner },
};
</script>

<style scoped>
.content-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
