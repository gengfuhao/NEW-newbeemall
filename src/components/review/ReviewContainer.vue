<template>
  <div v-for="review in reviews" :key="review">
    <review-com :review="review"></review-com>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ReviewCom from "./ReviewCom.vue";

export default {
  components: {
    ReviewCom,
  },
  methods: {
    ...mapActions({ fetchReviews: "setReviews" }),
  },
  computed: {
    ...mapGetters({ reviews: "getReviews" }),
  },
  mounted() {
    this.fetchReviews();
  },
};
</script>

<style scoped></style>
