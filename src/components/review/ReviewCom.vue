<template>
  <div id="js-reviewList">
    <ul class="g-reviewList">
      <li class="g-reviewList_item">
        <div class="g-lg-flow-sm">
          <p class="g-score">
            <span :data-score="review.rating">
              <span class="g-clip">text.product.review.Rating</span>
            </span>
          </p>
          <p class="g-reviewList_user">
            <b>{{ review.nickName }}</b
            >さん &emsp;{{ review.reviewDate }}
          </p>
        </div>
        <p class="g-reviewList_info">購入商品:{{ review.goodsName }}</p>
        <p class="g-reviewList_h">{{ review.title }}</p>
        <p>
          {{ review.content }}
        </p>
        <p class="g-reviewList_like">
          <a
            class="g-link reviewLike0"
            id="js-hitLike"
            data-count="0"
            data="626fd36d2e90a2006100013d"
            data-clickable=""
            ><i class="g-s g-s-like-g" aria-hidden="true"></i
            ><span>参考になった（{{ review.count }}人）</span></a
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
.g-reviewList_item p {
  word-break: break-all;
}
.g-reviewList_info {
  margin-top: 10px;
}

.g-reviewList_h {
  font-weight: bold;
  margin: 10px 0;
  font-size: 1.6rem;
  line-height: 1.5;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
li {
  text-align: -webkit-match-parent;
}
ul,
ol {
  padding: 0;
  list-style-position: initial;
  list-style-image: initial;
  list-style-type: none;
}

b {
  font-weight: bold;
}
</style>
