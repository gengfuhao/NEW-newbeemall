<template>
  <li>
    <goods-link v-bind="goods"></goods-link>
  </li>
</template>

<script>
import GoodsLink from "./GoodsLink.vue";
export default {
  components: {
    GoodsLink,
  },
  props: {
    goods: Object,
  },
};
</script>

<style scoped>
li {
  width: 220px;
  height: 360px;
  background-color: #fafafa;
  border-top: 1px solid #ffa500;
  margin-bottom: 20px;
  margin-left: 4px;
  margin-right: 6px;
}
</style>
