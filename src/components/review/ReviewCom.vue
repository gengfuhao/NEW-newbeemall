<template>
  <div id="js-reviewList">
    <ul class="g-reviewList">
      <li class="g-reviewList_item">
        <div class="g-lg-flow-sm">
          <p class="g-score">
            <span :data-score="rating">
              <span class="g-clip">text.product.review.Rating</span>
            </span>
          </p>
          <p class="g-reviewList_user">
            <b>{{ nickName }}</b
            >さん {{ reviewDate }}
          </p>
        </div>
        <p class="g-reviewList_info">購入商品:{{ goodsName }}</p>
        <p class="g-reviewList_h">{{ title }}</p>
        <p>
          {{ content }}
        </p>
        <p class="g-reviewList_like">
          <a
            class="g-link reviewLike0"
            id="js-hitLike"
            data-count="0"
            data="626fd36d2e90a2006100013d"
            data-clickable=""
            ><i class="g-s g-s-like-g" aria-hidden="true"></i
            ><span>参考になった（{{ count }}人）</span></a
          >
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    review: {
      rating: Number,
      nickName: Number,
      goodsName: String,
      count: Number,
      title: String,
      content: String,
      reviewDate: String,
    },
  },
};
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}
user agent stylesheet div {
  display: block;
}

html {
  font-size: 10px;
  height: 100%;
}
</style>
