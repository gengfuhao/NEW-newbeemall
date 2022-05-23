<template>
  <p>goodsId:{{ goodsId }}</p>
  <review-total></review-total>
  <div id="n-review-btn" class="n-review-btn">
    <button onclick="javascript:void(0);" class="g-btn g-btn-w-sm">
      <span>商品レビューを書く</span>
      <i class="g-i g-i-arrow-r" aria-hidden="true"></i>
    </button>
  </div>
  <hr />
  <review-list></review-list>
</template>

<script setup>
import ReviewList from "./ReviewList.vue";
import ReviewTotal from "./ReviewTotal.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const goodsId = route.params.goodsId;
</script>

<style scoped>
.n-review-btn button span {
  padding: 5px 30px !important;
  color: #009e96;
}
.g-btn {
  display: flex;
  min-height: 46px;
  padding: 5px 18px 5px 14px;
  transform: translateX(5px);
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
