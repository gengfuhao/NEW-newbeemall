<template>
  <ul class="flex-ul">
    <template v-for="(goods, index) in goodsList" :key="index">
      <goods-li :goods="goods"></goods-li>
    </template>
  </ul>
</template>

<script>
import GoodsLi from "./GoodsLi.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    GoodsLi,
  },
  methods: {
    ...mapActions({ fetchNewGoodses: "setNewGoodses" }),
  },
  computed: {
    ...mapGetters({ goodsList: "getNewGoodses" }),
  },
  mounted() {
    this.fetchNewGoodses();
  },
};
</script>
<style>
.flex-ul {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
}
</style>
