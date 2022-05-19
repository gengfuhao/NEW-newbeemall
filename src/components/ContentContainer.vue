<template>
  <div class="content-container">
    <ul-container></ul-container>
  </div>
</template>

<script>
import UlContainer from "./UlContainer.vue";
export default {
  components: { UlContainer },
};
</script>

<style scoped>
.content-container {
  display: flex;
  justify-content: center;
}
</style>
