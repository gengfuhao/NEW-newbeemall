<template>
  <div>
    <h1>商品详情页面</h1>
    <router-link to="/">Go to Home</router-link>
    <review-container></review-container>
  </div>
</template>

<script>
import ReviewContainer from "../components/review/ReviewContainer.vue";
export default {
  components: { ReviewContainer },
};
</script>

<style scoped></style>
