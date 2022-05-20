<template>
  <dl class="fore1" v-for="(levelTwoCat, index2) in categories2" :key="index2">
    <dt>
      {{ levelTwoCat.categoryName }}
    </dt>
    <cate-link :categories3="levelTwoCat.categories"></cate-link>
  </dl>
</template>

<script>
import CateLink from "./CateLink.vue";
export default {
  components: { CateLink },
  props: {
    categories2: {
      categoriName: String,
      levelTwoCat: Object,
    },
  },
};
</script>

<style scoped></style>
