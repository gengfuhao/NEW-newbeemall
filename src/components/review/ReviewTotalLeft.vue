<template>
  <div class="p-reviw-graph-area">
    <div class="p-reviw-graph-area-left-row">
      <span class="p-reviw-graph-area-comp-eva">総合評価</span>
    </div>
    <div
      class="p-reviw-graph-area-score p-reviw-graph-area-average p-reviw-graph-area-average-sm"
    >
      <span class="g-digit p-reviw-graph-area-g-score">
        {{ reviewTotal.ratingAvg }}</span
      >
    </div>
    <!-- star -->
    <div class="p-reviw-graph-area-left-row p-reviw-graph-area-left-row-score">
      <div class="g-score p-reviw-graph-area-g-score">
        <span :data-score="ratingAvg"></span>
      </div>
    </div>

    <div class="p-g-left-row">
      <a class="g-link" id="js-totalrate" data-clickable="">
        <span
          >(<span id="js-reviews">{{ reviewTotal.reviewCount }}</span
          >)</span
        >
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reviewTotal: {
      ratingAvg: Number,
      reviewCount: Number,
    },
  },
};
</script>

<style scoped>
.p-reviw-graph-area {
  box-sizing: border-box;
  display: inline-block;
  padding: 10px 10px 5px 10px;
  text-align: center;
  vertical-align: top;
}
.p-reviw-graph-area-left-row {
  display: inline-block;
  margin: 0px 0;
}
.p-reviw-graph-area-comp-eva {
  font-weight: bold;
}
.p-reviw-graph-area-average span {
  font-size: 26px;
  color: #eb6157;
}

.p-reviw-graph-area-foot {
  text-align: center;
  margin-top: -12px !important;
  margin-bottom: 12px;
}
</style>
